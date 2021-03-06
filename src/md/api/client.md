---
title: Client
description: Retrieve server information and API entry point
keywords: hbase, client, server information, version, status, cluster, tables, namespaces
sort: 2
---

# Client: server information and API entry point

## Creating a new client

A new instance of "HBase" may be instantiated with an object containing the following properties:

* `protocol` (string, optional, default to "localhost")   
  One of 'http' or 'https', default to "http".
* `host` (string, required)   
  Domain or IP of the HBase Stargate server.
* `port` (string|int, optional, default to "8080")   
  Port of the HBase REST server.
* `krb5` (object, required for secure connection)   
  Configuration object for Kerberos.
* `krb5.principal` (string, required for secure connection)   
  Kerberos user principal.
* `krb5.password` (string, optional)   
  Kerberos password of the user principal or null if using a keytab or the default credential cache.
* `krb5.keytab` (string, optional)   
  Path to the Kerberos keytab or null if using a password or the default credential cache.
* `krb5.service_principal` (string, required for secure connections)
  GSS service principal in the form of "HTTP@{fqdn}", automatically discovered if "host" is a correct FQDN.
* `timeout` (int, optional)   
  Number of milliseconds before the request timeout.

Other custom options that can be passed to requests. For possible options, take a look at [http](https://nodejs.org/api/http.html#http_http_request_options_callback) or [https](https://nodejs.org/api/https.html#https_https_request_options_callback) request.


## Grab an instance of "hbase.Client"

Calling the `hbase` method return an initialized client object.

```javascript
const hbase = require('hbase')
const client = hbase({ options })
```

You can also manually construct a new instance as follow:

```javascript
const hbase = require('hbase')
const client = new hbase.Client({ options })
```

## Events

The client extends the native Node.js [EventEmitter API](https://nodejs.org/api/events.html). The following events are emitted:

* `request`   
  An object with the keys `options` and `data` if the request is of type "PUT" or "POST".

## API: version

Query Software Version.

```javascript
client.version((error, version) => {
  console.info(version)
})
```

Will print something similar to:

```javascript
{ "Server": "jetty/6.1.24"
, "REST": "0.0.2"
, "OS": "Mac OS X 10.6.4 x86_64"
, "Jersey": "1.1.5.1"
, "JVM": "Apple Inc. 1.6.0_20-16.3-b01-279"
}
```

## API: version_cluster

Query the storage cluster version.

```javascript
client.version_cluster( function( error, version ){
  console.info( version )
} );
```

Will print something similar to:

```csv
'0.89.20100726'
```

## API: client.status_cluster

Query the storage cluster status.

```javascript
client.status_cluster( function( error, statusCluster ){
  console.info( statusCluster )
} );
```

Will print something similar to:

```javascript
{ "requests": 0
, "regions": 3
, "averageLoad": 3
, "DeadNodes": [ null ]
, "LiveNodes": [ { Node: [Object] } ]
}
```

## API: client.tables

List of all non-system tables.

```javascript
client.tables((error, tables) => {
  console.info(tables)
})
```

Will print something similar to:

```json
[ { "name": "node_hbase" } ]
```

## API: client.table

Return a new instance of ["hbase.Table"](./table.md) and get access to a table. From there, multiple operations are available to create, modify and delete HBase tables as well as to access rows and scanners.
