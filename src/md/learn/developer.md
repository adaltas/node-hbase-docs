---
title: Developer Guide
description: How to contribute to the project
keywords: contribute, git, github, open source, documentation, versioning, pull requests, bug, issues
sort: 4
---

# Developer Guide

## Introduction

Before reading this documentation, we recommend to start reading our [Getting Started](./Getting started) page. Once you get an overall understand of how to install and use the library, you shall pursue by reading the various API pages for an in-depth description of the various available functionalities.

If the examples present on the documentation doesn't cover your questions, you are highly encouraged to read the [tests](https://github.com/adaltas/node-hbase/tree/master/test). They cover all the API. There are highly expressive and you shouldn't be afraid to read them.

If the tests don't cover your needs, for example in case of a new filter, or if you believe the documentation deserve additional examples, feel free to [open an issue](https://github.com/adaltas/node-hbase/issues).

## Connecting to an HBase server

When using the HDP sandbox, start the virtual machine, log-in as "root", start Ambari `start_ambari.sh`, start HBase `start_hbase.sh` and start the HBase REST server `/usr/lib/hbase/bin/hbase rest -p 60080`.

The recommended way to have an HBase cluster at your disposal is with Docker. You can use the "sixeyed/hbase-stargate" image and run the tests.

```bash
# Start the Docker image
docker run --name stargate --rm -p 60080:8080 sixeyed/hbase-stargate
# Or
docker run --name stargate \
  -p 2181:2181 -p 8085:8085 \
  -p 60010:60010 -p 60000:60000 -p 60020:60020 \
  -p 60030:60030 -p 60080:8080 \
  sixeyed/hbase-stargate
```

You can also simulate having an HBase REST server behind a reverse proxy. The repository propose a local Dockerfile under "docker/hbase-rest-reverse-proxy" that creates an Nginx reverse proxy in front of an HBase REST server. The configuration file ["test/properties_with_path.docker.coffee"](https://github.com/adaltas/node-hbase/blob/master/test/properties_with_path.docker.coffee) can be used to test scenarios where HBase REST is accessible through a custom path, "/rest" by default.

```bash
# Build the REST image behind a reverse proxy
docker build -t fork-hbase-rest-reverse-proxy docker/hbase-rest-reverse-proxy
# Run the REST image
docker run --name stargate --rm -p 60080:8100 fork-hbase-rest-reverse-proxy
```

## Running the tests

Tests are executed with [Mocha](https://mochajs.org/).

They reference a configuration module at "./test/properties". The file format can be in JavaScript, CoffeeScript or JSON. You can use any of the "./test/properties.\*.coffee" examples as a starting point and make the appropriate changes.

To run the tests:

```bash
npm test
```

When testing against an HBase server secured with Kerberos, you must create a table with the right ownership.

```bash
kinit hbase
hbase shell
create 'node_table', {NAME => 'node_column_family', VERSIONS => 5}
grant 'ryba', 'RWC', 'node_table'
```

You can use the example located in "test/properties.json.krb5" to configure the test. It comes pre-configured for a [Ryba](https://github.com/ryba-io/ryba/) cluster configured in development mode.
