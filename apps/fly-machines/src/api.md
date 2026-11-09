<h1 id="fly-machines-api">Fly Machines API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.machines.dev/v1">https://api.machines.dev/v1</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://fly.io/docs/machines/working-with-machines/">External documentation</a>

<h1 id="fly-machines-api-apps">Apps</h1>

## Apps_list

<a id="opIdApps_list"></a>

> Code samples

```bash
curl 'https://api.machines.dev/v1/apps?org_slug=string' \
  -H 'Accept: application/json'
```

`GET /apps`

<h3 id="appslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_slug|query|string|true|The org slug, or 'personal', to filter apps|

> Example responses

> 200 Response

```json
{
  "total_apps": 6,
  "apps": [
    {
      "name": "name",
      "id": "id",
      "machine_count": 0,
      "network": "{}"
    },
    {
      "name": "name",
      "id": "id",
      "machine_count": 0,
      "network": "{}"
    }
  ]
}
```

<h3 id="appslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListAppsResponse](#schemalistappsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Apps_create

<a id="opIdApps_create"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "app_name": "app_name",
    "org_slug": "org_slug",
    "app_role_id": "app_role_id",
    "network": "network"
  }'
```

`POST /apps`

> Body parameter

```json
{
  "app_name": "app_name",
  "org_slug": "org_slug",
  "app_role_id": "app_role_id",
  "network": "network"
}
```

<h3 id="appscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAppRequest](#schemacreateapprequest)|true|App body|
|» app_name|body|string|false|none|
|» app_role_id|body|string|false|none|
|» network|body|string|false|none|
|» org_slug|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="appscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Apps_show

<a id="opIdApps_show"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}`

<h3 id="appsshow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|

> Example responses

> 200 Response

```json
{
  "organization": {
    "name": "name",
    "slug": "slug"
  },
  "name": "name",
  "id": "id",
  "status": "status"
}
```

<h3 id="appsshow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[App](#schemaapp)|

<aside class="success">
This operation does not require authentication
</aside>

## Apps_delete

<a id="opIdApps_delete"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string \
  -X DELETE
```

`DELETE /apps/{app_name}`

<h3 id="appsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|

<h3 id="appsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fly-machines-api-machines">Machines</h1>

## Machines_list

<a id="opIdMachines_list"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/machines`

<h3 id="machineslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|include_deleted|query|boolean|false|Include deleted machines|
|region|query|string|false|Region filter|

> Example responses

> 200 Response

```json
[
  {
    "image_ref": {
      "registry": "registry",
      "digest": "digest",
      "tag": "tag",
      "repository": "repository",
      "labels": {
        "key": "labels"
      }
    },
    "created_at": "created_at",
    "nonce": "nonce",
    "private_ip": "private_ip",
    "checks": [
      {
        "output": "output",
        "updated_at": "updated_at",
        "name": "name",
        "status": "status"
      },
      {
        "output": "output",
        "updated_at": "updated_at",
        "name": "name",
        "status": "status"
      }
    ],
    "instance_id": "instance_id",
    "updated_at": "updated_at",
    "name": "name",
    "id": "id",
    "state": "state",
    "region": "region",
    "config": {
      "image": "image",
      "init": {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "swap_size_mb": 5,
        "tty": true,
        "cmd": [
          "cmd",
          "cmd"
        ],
        "kernel_args": [
          "kernel_args",
          "kernel_args"
        ],
        "exec": [
          "exec",
          "exec"
        ]
      },
      "metadata": {
        "key": "metadata"
      },
      "processes": [
        {
          "entrypoint": [
            "entrypoint",
            "entrypoint"
          ],
          "cmd": [
            "cmd",
            "cmd"
          ],
          "env": {
            "key": "env"
          },
          "user": "user",
          "exec": [
            "exec",
            "exec"
          ]
        },
        {
          "entrypoint": [
            "entrypoint",
            "entrypoint"
          ],
          "cmd": [
            "cmd",
            "cmd"
          ],
          "env": {
            "key": "env"
          },
          "user": "user",
          "exec": [
            "exec",
            "exec"
          ]
        }
      ],
      "restart": {
        "max_retries": 2,
        "policy": "no"
      },
      "auto_destroy": true,
      "dns": {
        "skip_registration": true
      },
      "mounts": [
        {
          "volume": "volume",
          "path": "path",
          "encrypted": true,
          "size_gb_limit": 3,
          "extend_threshold_percent": 7,
          "name": "name",
          "add_size_gb": 2,
          "size_gb": 9
        },
        {
          "volume": "volume",
          "path": "path",
          "encrypted": true,
          "size_gb_limit": 3,
          "extend_threshold_percent": 7,
          "name": "name",
          "add_size_gb": 2,
          "size_gb": 9
        }
      ],
      "services": [
        {
          "min_machines_running": 1,
          "protocol": "protocol",
          "checks": [
            {
              "headers": [
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                },
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                }
              ],
              "path": "path",
              "protocol": "protocol",
              "method": "method",
              "port": 0,
              "tls_server_name": "tls_server_name",
              "interval": "interval",
              "tls_skip_verify": true,
              "type": "type",
              "grace_period": "grace_period",
              "timeout": "timeout"
            },
            {
              "headers": [
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                },
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                }
              ],
              "path": "path",
              "protocol": "protocol",
              "method": "method",
              "port": 0,
              "tls_server_name": "tls_server_name",
              "interval": "interval",
              "tls_skip_verify": true,
              "type": "type",
              "grace_period": "grace_period",
              "timeout": "timeout"
            }
          ],
          "force_instance_key": "force_instance_key",
          "autostart": true,
          "internal_port": 1,
          "ports": [
            {
              "force_https": true,
              "port": 6,
              "handlers": [
                "handlers",
                "handlers"
              ],
              "start_port": 7,
              "tls_options": {
                "alpn": [
                  "alpn",
                  "alpn"
                ],
                "default_self_signed": true,
                "versions": [
                  "versions",
                  "versions"
                ]
              },
              "proxy_proto_options": {
                "version": "version"
              },
              "end_port": 1,
              "http_options": {
                "compress": true,
                "response": {
                  "headers": {
                    "key": "{}"
                  }
                },
                "h2_backend": true
              }
            },
            {
              "force_https": true,
              "port": 6,
              "handlers": [
                "handlers",
                "handlers"
              ],
              "start_port": 7,
              "tls_options": {
                "alpn": [
                  "alpn",
                  "alpn"
                ],
                "default_self_signed": true,
                "versions": [
                  "versions",
                  "versions"
                ]
              },
              "proxy_proto_options": {
                "version": "version"
              },
              "end_port": 1,
              "http_options": {
                "compress": true,
                "response": {
                  "headers": {
                    "key": "{}"
                  }
                },
                "h2_backend": true
              }
            }
          ],
          "force_instance_description": "force_instance_description",
          "autostop": true,
          "concurrency": {
            "soft_limit": 7,
            "type": "type",
            "hard_limit": 4
          }
        },
        {
          "min_machines_running": 1,
          "protocol": "protocol",
          "checks": [
            {
              "headers": [
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                },
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                }
              ],
              "path": "path",
              "protocol": "protocol",
              "method": "method",
              "port": 0,
              "tls_server_name": "tls_server_name",
              "interval": "interval",
              "tls_skip_verify": true,
              "type": "type",
              "grace_period": "grace_period",
              "timeout": "timeout"
            },
            {
              "headers": [
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                },
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                }
              ],
              "path": "path",
              "protocol": "protocol",
              "method": "method",
              "port": 0,
              "tls_server_name": "tls_server_name",
              "interval": "interval",
              "tls_skip_verify": true,
              "type": "type",
              "grace_period": "grace_period",
              "timeout": "timeout"
            }
          ],
          "force_instance_key": "force_instance_key",
          "autostart": true,
          "internal_port": 1,
          "ports": [
            {
              "force_https": true,
              "port": 6,
              "handlers": [
                "handlers",
                "handlers"
              ],
              "start_port": 7,
              "tls_options": {
                "alpn": [
                  "alpn",
                  "alpn"
                ],
                "default_self_signed": true,
                "versions": [
                  "versions",
                  "versions"
                ]
              },
              "proxy_proto_options": {
                "version": "version"
              },
              "end_port": 1,
              "http_options": {
                "compress": true,
                "response": {
                  "headers": {
                    "key": "{}"
                  }
                },
                "h2_backend": true
              }
            },
            {
              "force_https": true,
              "port": 6,
              "handlers": [
                "handlers",
                "handlers"
              ],
              "start_port": 7,
              "tls_options": {
                "alpn": [
                  "alpn",
                  "alpn"
                ],
                "default_self_signed": true,
                "versions": [
                  "versions",
                  "versions"
                ]
              },
              "proxy_proto_options": {
                "version": "version"
              },
              "end_port": 1,
              "http_options": {
                "compress": true,
                "response": {
                  "headers": {
                    "key": "{}"
                  }
                },
                "h2_backend": true
              }
            }
          ],
          "force_instance_description": "force_instance_description",
          "autostop": true,
          "concurrency": {
            "soft_limit": 7,
            "type": "type",
            "hard_limit": 4
          }
        }
      ],
      "env": {
        "key": "env"
      },
      "statics": [
        {
          "guest_path": "guest_path",
          "url_prefix": "url_prefix"
        },
        {
          "guest_path": "guest_path",
          "url_prefix": "url_prefix"
        }
      ],
      "schedule": "schedule",
      "checks": {
        "key": {
          "headers": [
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            },
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            }
          ],
          "path": "path",
          "protocol": "protocol",
          "method": "method",
          "port": 0,
          "tls_server_name": "tls_server_name",
          "interval": "interval",
          "tls_skip_verify": true,
          "type": "type",
          "grace_period": "grace_period",
          "timeout": "timeout"
        }
      },
      "size": "size",
      "files": [
        {
          "secret_name": "secret_name",
          "raw_value": "raw_value",
          "guest_path": "guest_path"
        },
        {
          "secret_name": "secret_name",
          "raw_value": "raw_value",
          "guest_path": "guest_path"
        }
      ],
      "guest": {
        "gpu_kind": "gpu_kind",
        "cpus": 6,
        "host_dedication_id": "host_dedication_id",
        "cpu_kind": "cpu_kind",
        "memory_mb": 1,
        "kernel_args": [
          "kernel_args",
          "kernel_args"
        ]
      },
      "disable_machine_autostart": true,
      "metrics": {
        "path": "path",
        "port": 5
      },
      "standbys": [
        "standbys",
        "standbys"
      ],
      "stop_config": {
        "signal": "signal",
        "timeout": "timeout"
      }
    },
    "events": [
      {
        "request": "{}",
        "id": "id",
        "source": "source",
        "type": "type",
        "status": "status",
        "timestamp": 1
      },
      {
        "request": "{}",
        "id": "id",
        "source": "source",
        "type": "type",
        "status": "status",
        "timestamp": 1
      }
    ]
  }
]
```

<h3 id="machineslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="machineslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Machine](#schemamachine)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_create

<a id="opIdMachines_create"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "skip_service_registration": true,
    "lsvd": true,
    "name": "name",
    "lease_ttl": 0,
    "region": "region",
    "config": "{}",
    "skip_launch": true
  }'
```

`POST /apps/{app_name}/machines`

> Body parameter

```json
{
  "skip_service_registration": true,
  "lsvd": true,
  "name": "name",
  "lease_ttl": 0,
  "region": "region",
  "config": "{}",
  "skip_launch": true
}
```

<h3 id="machinescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|body|body|[CreateMachineRequest](#schemacreatemachinerequest)|true|Create machine request|
|» config|body|object|false|An object defining the Machine configuration|
|» » auto_destroy|body|boolean|false|Optional boolean telling the Machine to destroy itself once it’s complete (default false)|
|» » checks|body|object|false|none|
|» » » **additionalProperties**|body|[api.MachineCheck](#schemaapi.machinecheck)|false|An optional object that defines one or more named checks. The key for each check is the check name.|
|» » disable_machine_autostart|body|boolean|false|Deprecated: use Service.Autostart instead|
|» » dns|body|[api.DNSConfig](#schemaapi.dnsconfig)|false|none|
|» » env|body|object|false|An object filled with key/value pairs to be set as environment variables|
|» » » **additionalProperties**|body|string|false|none|
|» » files|body|[[api.File](#schemaapi.file)]|false|none|
|» » guest|body|[api.MachineGuest](#schemaapi.machineguest)|false|none|
|» » image|body|string|false|The docker image to run|
|» » init|body|[api.MachineInit](#schemaapi.machineinit)|false|none|
|» » metadata|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » metrics|body|[api.MachineMetrics](#schemaapi.machinemetrics)|false|none|
|» » mounts|body|[[api.MachineMount](#schemaapi.machinemount)]|false|none|
|» » processes|body|[[api.MachineProcess](#schemaapi.machineprocess)]|false|none|
|» » restart|body|[api.MachineRestart](#schemaapi.machinerestart)|false|The Machine restart policy defines whether and how flyd restarts a Machine after its main process exits. See https://fly.io/docs/machines/guides-examples/machine-restart-policy/.|
|» » schedule|body|string|false|none|
|» » services|body|[[api.MachineService](#schemaapi.machineservice)]|false|none|
|» » size|body|string|false|Deprecated: use Guest instead|
|» » standbys|body|[string]|false|Standbys enable a machine to be a standby for another. In the event of a hardware failure,<br>the standby machine will be started.|
|» » statics|body|[[api.Static](#schemaapi.static)]|false|none|
|» » stop_config|body|[api.StopConfig](#schemaapi.stopconfig)|false|none|
|» lease_ttl|body|integer|false|none|
|» lsvd|body|boolean|false|none|
|» name|body|string|false|Unique name for this Machine. If omitted, one is generated for you|
|» region|body|string|false|The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you).|
|» skip_launch|body|boolean|false|none|
|» skip_service_registration|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "image_ref": {
    "registry": "registry",
    "digest": "digest",
    "tag": "tag",
    "repository": "repository",
    "labels": {
      "key": "labels"
    }
  },
  "created_at": "created_at",
  "nonce": "nonce",
  "private_ip": "private_ip",
  "checks": [
    {
      "output": "output",
      "updated_at": "updated_at",
      "name": "name",
      "status": "status"
    },
    {
      "output": "output",
      "updated_at": "updated_at",
      "name": "name",
      "status": "status"
    }
  ],
  "instance_id": "instance_id",
  "updated_at": "updated_at",
  "name": "name",
  "id": "id",
  "state": "state",
  "region": "region",
  "config": {
    "image": "image",
    "init": {
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "swap_size_mb": 5,
      "tty": true,
      "cmd": [
        "cmd",
        "cmd"
      ],
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ],
      "exec": [
        "exec",
        "exec"
      ]
    },
    "metadata": {
      "key": "metadata"
    },
    "processes": [
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      },
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      }
    ],
    "restart": {
      "max_retries": 2,
      "policy": "no"
    },
    "auto_destroy": true,
    "dns": {
      "skip_registration": true
    },
    "mounts": [
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      },
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      }
    ],
    "services": [
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      },
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      }
    ],
    "env": {
      "key": "env"
    },
    "statics": [
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      },
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      }
    ],
    "schedule": "schedule",
    "checks": {
      "key": {
        "headers": [
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          },
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          }
        ],
        "path": "path",
        "protocol": "protocol",
        "method": "method",
        "port": 0,
        "tls_server_name": "tls_server_name",
        "interval": "interval",
        "tls_skip_verify": true,
        "type": "type",
        "grace_period": "grace_period",
        "timeout": "timeout"
      }
    },
    "size": "size",
    "files": [
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      },
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      }
    ],
    "guest": {
      "gpu_kind": "gpu_kind",
      "cpus": 6,
      "host_dedication_id": "host_dedication_id",
      "cpu_kind": "cpu_kind",
      "memory_mb": 1,
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ]
    },
    "disable_machine_autostart": true,
    "metrics": {
      "path": "path",
      "port": 5
    },
    "standbys": [
      "standbys",
      "standbys"
    ],
    "stop_config": {
      "signal": "signal",
      "timeout": "timeout"
    }
  },
  "events": [
    {
      "request": "{}",
      "id": "id",
      "source": "source",
      "type": "type",
      "status": "status",
      "timestamp": 1
    },
    {
      "request": "{}",
      "id": "id",
      "source": "source",
      "type": "type",
      "status": "status",
      "timestamp": 1
    }
  ]
}
```

<h3 id="machinescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Machine](#schemamachine)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_show

<a id="opIdMachines_show"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/machines/{machine_id}`

<h3 id="machinesshow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

> Example responses

> 200 Response

```json
{
  "image_ref": {
    "registry": "registry",
    "digest": "digest",
    "tag": "tag",
    "repository": "repository",
    "labels": {
      "key": "labels"
    }
  },
  "created_at": "created_at",
  "nonce": "nonce",
  "private_ip": "private_ip",
  "checks": [
    {
      "output": "output",
      "updated_at": "updated_at",
      "name": "name",
      "status": "status"
    },
    {
      "output": "output",
      "updated_at": "updated_at",
      "name": "name",
      "status": "status"
    }
  ],
  "instance_id": "instance_id",
  "updated_at": "updated_at",
  "name": "name",
  "id": "id",
  "state": "state",
  "region": "region",
  "config": {
    "image": "image",
    "init": {
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "swap_size_mb": 5,
      "tty": true,
      "cmd": [
        "cmd",
        "cmd"
      ],
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ],
      "exec": [
        "exec",
        "exec"
      ]
    },
    "metadata": {
      "key": "metadata"
    },
    "processes": [
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      },
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      }
    ],
    "restart": {
      "max_retries": 2,
      "policy": "no"
    },
    "auto_destroy": true,
    "dns": {
      "skip_registration": true
    },
    "mounts": [
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      },
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      }
    ],
    "services": [
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      },
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      }
    ],
    "env": {
      "key": "env"
    },
    "statics": [
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      },
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      }
    ],
    "schedule": "schedule",
    "checks": {
      "key": {
        "headers": [
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          },
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          }
        ],
        "path": "path",
        "protocol": "protocol",
        "method": "method",
        "port": 0,
        "tls_server_name": "tls_server_name",
        "interval": "interval",
        "tls_skip_verify": true,
        "type": "type",
        "grace_period": "grace_period",
        "timeout": "timeout"
      }
    },
    "size": "size",
    "files": [
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      },
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      }
    ],
    "guest": {
      "gpu_kind": "gpu_kind",
      "cpus": 6,
      "host_dedication_id": "host_dedication_id",
      "cpu_kind": "cpu_kind",
      "memory_mb": 1,
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ]
    },
    "disable_machine_autostart": true,
    "metrics": {
      "path": "path",
      "port": 5
    },
    "standbys": [
      "standbys",
      "standbys"
    ],
    "stop_config": {
      "signal": "signal",
      "timeout": "timeout"
    }
  },
  "events": [
    {
      "request": "{}",
      "id": "id",
      "source": "source",
      "type": "type",
      "status": "status",
      "timestamp": 1
    },
    {
      "request": "{}",
      "id": "id",
      "source": "source",
      "type": "type",
      "status": "status",
      "timestamp": 1
    }
  ]
}
```

<h3 id="machinesshow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Machine](#schemamachine)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_update

<a id="opIdMachines_update"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "skip_service_registration": true,
    "lsvd": true,
    "name": "name",
    "current_version": "current_version",
    "lease_ttl": 0,
    "region": "region",
    "config": "{}",
    "skip_launch": true
  }'
```

`POST /apps/{app_name}/machines/{machine_id}`

> Body parameter

```json
{
  "skip_service_registration": true,
  "lsvd": true,
  "name": "name",
  "current_version": "current_version",
  "lease_ttl": 0,
  "region": "region",
  "config": "{}",
  "skip_launch": true
}
```

<h3 id="machinesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|body|body|[UpdateMachineRequest](#schemaupdatemachinerequest)|true|Request body|
|» config|body|object|false|An object defining the Machine configuration|
|» » auto_destroy|body|boolean|false|Optional boolean telling the Machine to destroy itself once it’s complete (default false)|
|» » checks|body|object|false|none|
|» » » **additionalProperties**|body|[api.MachineCheck](#schemaapi.machinecheck)|false|An optional object that defines one or more named checks. The key for each check is the check name.|
|» » disable_machine_autostart|body|boolean|false|Deprecated: use Service.Autostart instead|
|» » dns|body|[api.DNSConfig](#schemaapi.dnsconfig)|false|none|
|» » env|body|object|false|An object filled with key/value pairs to be set as environment variables|
|» » » **additionalProperties**|body|string|false|none|
|» » files|body|[[api.File](#schemaapi.file)]|false|none|
|» » guest|body|[api.MachineGuest](#schemaapi.machineguest)|false|none|
|» » image|body|string|false|The docker image to run|
|» » init|body|[api.MachineInit](#schemaapi.machineinit)|false|none|
|» » metadata|body|object|false|none|
|» » » **additionalProperties**|body|string|false|none|
|» » metrics|body|[api.MachineMetrics](#schemaapi.machinemetrics)|false|none|
|» » mounts|body|[[api.MachineMount](#schemaapi.machinemount)]|false|none|
|» » processes|body|[[api.MachineProcess](#schemaapi.machineprocess)]|false|none|
|» » restart|body|[api.MachineRestart](#schemaapi.machinerestart)|false|The Machine restart policy defines whether and how flyd restarts a Machine after its main process exits. See https://fly.io/docs/machines/guides-examples/machine-restart-policy/.|
|» » schedule|body|string|false|none|
|» » services|body|[[api.MachineService](#schemaapi.machineservice)]|false|none|
|» » size|body|string|false|Deprecated: use Guest instead|
|» » standbys|body|[string]|false|Standbys enable a machine to be a standby for another. In the event of a hardware failure,<br>the standby machine will be started.|
|» » statics|body|[[api.Static](#schemaapi.static)]|false|none|
|» » stop_config|body|[api.StopConfig](#schemaapi.stopconfig)|false|none|
|» current_version|body|string|false|none|
|» lease_ttl|body|integer|false|none|
|» lsvd|body|boolean|false|none|
|» name|body|string|false|Unique name for this Machine. If omitted, one is generated for you|
|» region|body|string|false|The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you).|
|» skip_launch|body|boolean|false|none|
|» skip_service_registration|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "image_ref": {
    "registry": "registry",
    "digest": "digest",
    "tag": "tag",
    "repository": "repository",
    "labels": {
      "key": "labels"
    }
  },
  "created_at": "created_at",
  "nonce": "nonce",
  "private_ip": "private_ip",
  "checks": [
    {
      "output": "output",
      "updated_at": "updated_at",
      "name": "name",
      "status": "status"
    },
    {
      "output": "output",
      "updated_at": "updated_at",
      "name": "name",
      "status": "status"
    }
  ],
  "instance_id": "instance_id",
  "updated_at": "updated_at",
  "name": "name",
  "id": "id",
  "state": "state",
  "region": "region",
  "config": {
    "image": "image",
    "init": {
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "swap_size_mb": 5,
      "tty": true,
      "cmd": [
        "cmd",
        "cmd"
      ],
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ],
      "exec": [
        "exec",
        "exec"
      ]
    },
    "metadata": {
      "key": "metadata"
    },
    "processes": [
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      },
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      }
    ],
    "restart": {
      "max_retries": 2,
      "policy": "no"
    },
    "auto_destroy": true,
    "dns": {
      "skip_registration": true
    },
    "mounts": [
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      },
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      }
    ],
    "services": [
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      },
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      }
    ],
    "env": {
      "key": "env"
    },
    "statics": [
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      },
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      }
    ],
    "schedule": "schedule",
    "checks": {
      "key": {
        "headers": [
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          },
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          }
        ],
        "path": "path",
        "protocol": "protocol",
        "method": "method",
        "port": 0,
        "tls_server_name": "tls_server_name",
        "interval": "interval",
        "tls_skip_verify": true,
        "type": "type",
        "grace_period": "grace_period",
        "timeout": "timeout"
      }
    },
    "size": "size",
    "files": [
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      },
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      }
    ],
    "guest": {
      "gpu_kind": "gpu_kind",
      "cpus": 6,
      "host_dedication_id": "host_dedication_id",
      "cpu_kind": "cpu_kind",
      "memory_mb": 1,
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ]
    },
    "disable_machine_autostart": true,
    "metrics": {
      "path": "path",
      "port": 5
    },
    "standbys": [
      "standbys",
      "standbys"
    ],
    "stop_config": {
      "signal": "signal",
      "timeout": "timeout"
    }
  },
  "events": [
    {
      "request": "{}",
      "id": "id",
      "source": "source",
      "type": "type",
      "status": "status",
      "timestamp": 1
    },
    {
      "request": "{}",
      "id": "id",
      "source": "source",
      "type": "type",
      "status": "status",
      "timestamp": 1
    }
  ]
}
```

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="machinesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Machine](#schemamachine)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_delete

<a id="opIdMachines_delete"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string \
  -X DELETE
```

`DELETE /apps/{app_name}/machines/{machine_id}`

<h3 id="machinesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

<h3 id="machinesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_cordon

<a id="opIdMachines_cordon"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/cordon \
  -X POST
```

`POST /apps/{app_name}/machines/{machine_id}/cordon`

“Cordoning” a machine refers to disabling its services, so the proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of machines is started up with services disabled, and when they are all healthy, the services are enabled on the new machines and disabled on the old ones.

<h3 id="machinescordon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

<h3 id="machinescordon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_list_events

<a id="opIdMachines_list_events"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/events \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/machines/{machine_id}/events`

<h3 id="machineslistevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

> Example responses

> 200 Response

```json
[
  {
    "request": "{}",
    "id": "id",
    "source": "source",
    "type": "type",
    "status": "status",
    "timestamp": 1
  }
]
```

<h3 id="machineslistevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="machineslistevents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MachineEvent](#schemamachineevent)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_exec

<a id="opIdMachines_exec"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/exec \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cmd": "cmd",
    "command": [
      "command",
      "command"
    ],
    "timeout": 0
  }'
```

`POST /apps/{app_name}/machines/{machine_id}/exec`

> Body parameter

```json
{
  "cmd": "cmd",
  "command": [
    "command",
    "command"
  ],
  "timeout": 0
}
```

<h3 id="machinesexec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|body|body|[MachineExecRequest](#schemamachineexecrequest)|true|Request body|
|» cmd|body|string|false|Deprecated: use Command instead|
|» command|body|[string]|false|none|
|» timeout|body|integer|false|none|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="machinesexec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Raw command output bytes are written back|Inline|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_show_lease

<a id="opIdMachines_show_lease"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/lease \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/machines/{machine_id}/lease`

<h3 id="machinesshowlease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

> Example responses

> 200 Response

```json
{
  "owner": "owner",
  "expires_at": 0,
  "description": "description",
  "nonce": "nonce",
  "version": "version"
}
```

<h3 id="machinesshowlease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Lease](#schemalease)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_create_lease

<a id="opIdMachines_create_lease"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/lease \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "description",
    "ttl": 0
  }'
```

`POST /apps/{app_name}/machines/{machine_id}/lease`

> Body parameter

```json
{
  "description": "description",
  "ttl": 0
}
```

<h3 id="machinescreatelease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|body|body|[CreateLeaseRequest](#schemacreateleaserequest)|true|Request body|
|» description|body|string|false|none|
|» ttl|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "owner": "owner",
  "expires_at": 0,
  "description": "description",
  "nonce": "nonce",
  "version": "version"
}
```

<h3 id="machinescreatelease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Lease](#schemalease)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_release_lease

<a id="opIdMachines_release_lease"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/lease \
  -X DELETE
```

`DELETE /apps/{app_name}/machines/{machine_id}/lease`

<h3 id="machinesreleaselease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

<h3 id="machinesreleaselease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_show_metadata

<a id="opIdMachines_show_metadata"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/metadata \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/machines/{machine_id}/metadata`

<h3 id="machinesshowmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

> Example responses

> 200 Response

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="machinesshowmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="machinesshowmetadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_update_metadata

<a id="opIdMachines_update_metadata"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/metadata/string \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{app_name}/machines/{machine_id}/metadata/{key}`

<h3 id="machinesupdatemetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|key|path|string|true|Metadata Key|

> Example responses

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="machinesupdatemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_delete_metadata

<a id="opIdMachines_delete_metadata"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/metadata/string \
  -X DELETE
```

`DELETE /apps/{app_name}/machines/{machine_id}/metadata/{key}`

<h3 id="machinesdeletemetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|key|path|string|true|Metadata Key|

<h3 id="machinesdeletemetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_list_processes

<a id="opIdMachines_list_processes"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/ps \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/machines/{machine_id}/ps`

<h3 id="machineslistprocesses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|sort_by|query|string|false|Sort by|
|order|query|string|false|Order|

> Example responses

> 200 Response

```json
[
  {
    "listen_sockets": [
      {
        "address": "address",
        "proto": "proto"
      },
      {
        "address": "address",
        "proto": "proto"
      }
    ],
    "rss": 1,
    "rtime": 5,
    "cpu": 0,
    "pid": 6,
    "stime": 5,
    "directory": "directory",
    "command": "command"
  }
]
```

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="machineslistprocesses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<h3 id="machineslistprocesses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProcessStat](#schemaprocessstat)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_restart

<a id="opIdMachines_restart"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/restart \
  -X POST \
  -H 'Accept: application/json'
```

`POST /apps/{app_name}/machines/{machine_id}/restart`

<h3 id="machinesrestart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|timeout|query|string|false|Restart timeout as a Go duration string or number of seconds|

> Example responses

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="machinesrestart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_signal

<a id="opIdMachines_signal"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/signal \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "signal": "SIGABRT"
  }'
```

`POST /apps/{app_name}/machines/{machine_id}/signal`

> Body parameter

```json
{
  "signal": "SIGABRT"
}
```

<h3 id="machinessignal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|body|body|[SignalRequest](#schemasignalrequest)|true|Request body|
|» signal|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» signal|SIGABRT|
|» signal|SIGALRM|
|» signal|SIGFPE|
|» signal|SIGHUP|
|» signal|SIGILL|
|» signal|SIGINT|
|» signal|SIGKILL|
|» signal|SIGPIPE|
|» signal|SIGQUIT|
|» signal|SIGSEGV|
|» signal|SIGTERM|
|» signal|SIGTRAP|
|» signal|SIGUSR1|

> Example responses

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="machinessignal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_start

<a id="opIdMachines_start"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/start \
  -X POST
```

`POST /apps/{app_name}/machines/{machine_id}/start`

<h3 id="machinesstart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

<h3 id="machinesstart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_stop

<a id="opIdMachines_stop"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "signal": "signal",
    "timeout": "timeout"
  }'
```

`POST /apps/{app_name}/machines/{machine_id}/stop`

> Body parameter

```json
{
  "signal": "signal",
  "timeout": "timeout"
}
```

<h3 id="machinesstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|body|body|[StopRequest](#schemastoprequest)|false|Optional request body|
|» signal|body|string|false|none|
|» timeout|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="machinesstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_uncordon

<a id="opIdMachines_uncordon"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/uncordon \
  -X POST
```

`POST /apps/{app_name}/machines/{machine_id}/uncordon`

“Cordoning” a machine refers to disabling its services, so the proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of machines is started up with services disabled, and when they are all healthy, the services are enabled on the new machines and disabled on the old ones.

<h3 id="machinesuncordon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

<h3 id="machinesuncordon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_list_versions

<a id="opIdMachines_list_versions"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/versions \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/machines/{machine_id}/versions`

<h3 id="machineslistversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|

> Example responses

> 200 Response

```json
[
  {
    "version": "version",
    "user_config": {
      "image": "image",
      "init": {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "swap_size_mb": 5,
        "tty": true,
        "cmd": [
          "cmd",
          "cmd"
        ],
        "kernel_args": [
          "kernel_args",
          "kernel_args"
        ],
        "exec": [
          "exec",
          "exec"
        ]
      },
      "metadata": {
        "key": "metadata"
      },
      "processes": [
        {
          "entrypoint": [
            "entrypoint",
            "entrypoint"
          ],
          "cmd": [
            "cmd",
            "cmd"
          ],
          "env": {
            "key": "env"
          },
          "user": "user",
          "exec": [
            "exec",
            "exec"
          ]
        },
        {
          "entrypoint": [
            "entrypoint",
            "entrypoint"
          ],
          "cmd": [
            "cmd",
            "cmd"
          ],
          "env": {
            "key": "env"
          },
          "user": "user",
          "exec": [
            "exec",
            "exec"
          ]
        }
      ],
      "restart": {
        "max_retries": 2,
        "policy": "no"
      },
      "auto_destroy": true,
      "dns": {
        "skip_registration": true
      },
      "mounts": [
        {
          "volume": "volume",
          "path": "path",
          "encrypted": true,
          "size_gb_limit": 3,
          "extend_threshold_percent": 7,
          "name": "name",
          "add_size_gb": 2,
          "size_gb": 9
        },
        {
          "volume": "volume",
          "path": "path",
          "encrypted": true,
          "size_gb_limit": 3,
          "extend_threshold_percent": 7,
          "name": "name",
          "add_size_gb": 2,
          "size_gb": 9
        }
      ],
      "services": [
        {
          "min_machines_running": 1,
          "protocol": "protocol",
          "checks": [
            {
              "headers": [
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                },
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                }
              ],
              "path": "path",
              "protocol": "protocol",
              "method": "method",
              "port": 0,
              "tls_server_name": "tls_server_name",
              "interval": "interval",
              "tls_skip_verify": true,
              "type": "type",
              "grace_period": "grace_period",
              "timeout": "timeout"
            },
            {
              "headers": [
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                },
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                }
              ],
              "path": "path",
              "protocol": "protocol",
              "method": "method",
              "port": 0,
              "tls_server_name": "tls_server_name",
              "interval": "interval",
              "tls_skip_verify": true,
              "type": "type",
              "grace_period": "grace_period",
              "timeout": "timeout"
            }
          ],
          "force_instance_key": "force_instance_key",
          "autostart": true,
          "internal_port": 1,
          "ports": [
            {
              "force_https": true,
              "port": 6,
              "handlers": [
                "handlers",
                "handlers"
              ],
              "start_port": 7,
              "tls_options": {
                "alpn": [
                  "alpn",
                  "alpn"
                ],
                "default_self_signed": true,
                "versions": [
                  "versions",
                  "versions"
                ]
              },
              "proxy_proto_options": {
                "version": "version"
              },
              "end_port": 1,
              "http_options": {
                "compress": true,
                "response": {
                  "headers": {
                    "key": "{}"
                  }
                },
                "h2_backend": true
              }
            },
            {
              "force_https": true,
              "port": 6,
              "handlers": [
                "handlers",
                "handlers"
              ],
              "start_port": 7,
              "tls_options": {
                "alpn": [
                  "alpn",
                  "alpn"
                ],
                "default_self_signed": true,
                "versions": [
                  "versions",
                  "versions"
                ]
              },
              "proxy_proto_options": {
                "version": "version"
              },
              "end_port": 1,
              "http_options": {
                "compress": true,
                "response": {
                  "headers": {
                    "key": "{}"
                  }
                },
                "h2_backend": true
              }
            }
          ],
          "force_instance_description": "force_instance_description",
          "autostop": true,
          "concurrency": {
            "soft_limit": 7,
            "type": "type",
            "hard_limit": 4
          }
        },
        {
          "min_machines_running": 1,
          "protocol": "protocol",
          "checks": [
            {
              "headers": [
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                },
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                }
              ],
              "path": "path",
              "protocol": "protocol",
              "method": "method",
              "port": 0,
              "tls_server_name": "tls_server_name",
              "interval": "interval",
              "tls_skip_verify": true,
              "type": "type",
              "grace_period": "grace_period",
              "timeout": "timeout"
            },
            {
              "headers": [
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                },
                {
                  "values": [
                    "values",
                    "values"
                  ],
                  "name": "name"
                }
              ],
              "path": "path",
              "protocol": "protocol",
              "method": "method",
              "port": 0,
              "tls_server_name": "tls_server_name",
              "interval": "interval",
              "tls_skip_verify": true,
              "type": "type",
              "grace_period": "grace_period",
              "timeout": "timeout"
            }
          ],
          "force_instance_key": "force_instance_key",
          "autostart": true,
          "internal_port": 1,
          "ports": [
            {
              "force_https": true,
              "port": 6,
              "handlers": [
                "handlers",
                "handlers"
              ],
              "start_port": 7,
              "tls_options": {
                "alpn": [
                  "alpn",
                  "alpn"
                ],
                "default_self_signed": true,
                "versions": [
                  "versions",
                  "versions"
                ]
              },
              "proxy_proto_options": {
                "version": "version"
              },
              "end_port": 1,
              "http_options": {
                "compress": true,
                "response": {
                  "headers": {
                    "key": "{}"
                  }
                },
                "h2_backend": true
              }
            },
            {
              "force_https": true,
              "port": 6,
              "handlers": [
                "handlers",
                "handlers"
              ],
              "start_port": 7,
              "tls_options": {
                "alpn": [
                  "alpn",
                  "alpn"
                ],
                "default_self_signed": true,
                "versions": [
                  "versions",
                  "versions"
                ]
              },
              "proxy_proto_options": {
                "version": "version"
              },
              "end_port": 1,
              "http_options": {
                "compress": true,
                "response": {
                  "headers": {
                    "key": "{}"
                  }
                },
                "h2_backend": true
              }
            }
          ],
          "force_instance_description": "force_instance_description",
          "autostop": true,
          "concurrency": {
            "soft_limit": 7,
            "type": "type",
            "hard_limit": 4
          }
        }
      ],
      "env": {
        "key": "env"
      },
      "statics": [
        {
          "guest_path": "guest_path",
          "url_prefix": "url_prefix"
        },
        {
          "guest_path": "guest_path",
          "url_prefix": "url_prefix"
        }
      ],
      "schedule": "schedule",
      "checks": {
        "key": {
          "headers": [
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            },
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            }
          ],
          "path": "path",
          "protocol": "protocol",
          "method": "method",
          "port": 0,
          "tls_server_name": "tls_server_name",
          "interval": "interval",
          "tls_skip_verify": true,
          "type": "type",
          "grace_period": "grace_period",
          "timeout": "timeout"
        }
      },
      "size": "size",
      "files": [
        {
          "secret_name": "secret_name",
          "raw_value": "raw_value",
          "guest_path": "guest_path"
        },
        {
          "secret_name": "secret_name",
          "raw_value": "raw_value",
          "guest_path": "guest_path"
        }
      ],
      "guest": {
        "gpu_kind": "gpu_kind",
        "cpus": 6,
        "host_dedication_id": "host_dedication_id",
        "cpu_kind": "cpu_kind",
        "memory_mb": 1,
        "kernel_args": [
          "kernel_args",
          "kernel_args"
        ]
      },
      "disable_machine_autostart": true,
      "metrics": {
        "path": "path",
        "port": 5
      },
      "standbys": [
        "standbys",
        "standbys"
      ],
      "stop_config": {
        "signal": "signal",
        "timeout": "timeout"
      }
    }
  }
]
```

<h3 id="machineslistversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="machineslistversions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MachineVersion](#schemamachineversion)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Machines_wait

<a id="opIdMachines_wait"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/machines/string/wait \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/machines/{machine_id}/wait`

<h3 id="machineswait-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|machine_id|path|string|true|Machine ID|
|instance_id|query|string|false|instance? version? TODO|
|timeout|query|integer|false|wait timeout. default 60s|
|state|query|string|false|desired state|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|started|
|state|stopped|
|state|destroyed|

> Example responses

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="machineswait-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fly-machines-api-volumes">Volumes</h1>

## Volumes_list

<a id="opIdVolumes_list"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/volumes \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/volumes`

<h3 id="volumeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|

> Example responses

> 200 Response

```json
[
  {
    "blocks": 6,
    "attached_machine_id": "attached_machine_id",
    "created_at": "created_at",
    "snapshot_retention": 2,
    "blocks_free": 5,
    "encrypted": true,
    "zone": "zone",
    "blocks_avail": 1,
    "name": "name",
    "size_gb": 5,
    "attached_alloc_id": "attached_alloc_id",
    "id": "id",
    "state": "state",
    "region": "region",
    "block_size": 0,
    "fstype": "fstype"
  }
]
```

<h3 id="volumeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="volumeslist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Volume](#schemavolume)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Volumes_create

<a id="opIdVolumes_create"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/volumes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "compute": {
      "gpu_kind": "gpu_kind",
      "cpus": 6,
      "host_dedication_id": "host_dedication_id",
      "cpu_kind": "cpu_kind",
      "memory_mb": 1,
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ]
    },
    "encrypted": true,
    "require_unique_zone": true,
    "snapshot_id": "snapshot_id",
    "name": "name",
    "size_gb": 0,
    "machines_only": true,
    "region": "region",
    "snapshot_retention": 6,
    "fstype": "fstype",
    "source_volume_id": "source_volume_id"
  }'
```

`POST /apps/{app_name}/volumes`

> Body parameter

```json
{
  "compute": {
    "gpu_kind": "gpu_kind",
    "cpus": 6,
    "host_dedication_id": "host_dedication_id",
    "cpu_kind": "cpu_kind",
    "memory_mb": 1,
    "kernel_args": [
      "kernel_args",
      "kernel_args"
    ]
  },
  "encrypted": true,
  "require_unique_zone": true,
  "snapshot_id": "snapshot_id",
  "name": "name",
  "size_gb": 0,
  "machines_only": true,
  "region": "region",
  "snapshot_retention": 6,
  "fstype": "fstype",
  "source_volume_id": "source_volume_id"
}
```

<h3 id="volumescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|body|body|[CreateVolumeRequest](#schemacreatevolumerequest)|true|Request body|
|» compute|body|[api.MachineGuest](#schemaapi.machineguest)|false|none|
|» encrypted|body|boolean|false|none|
|» fstype|body|string|false|none|
|» machines_only|body|boolean|false|none|
|» name|body|string|false|none|
|» region|body|string|false|none|
|» require_unique_zone|body|boolean|false|none|
|» size_gb|body|integer|false|none|
|» snapshot_id|body|string|false|restore from snapshot|
|» snapshot_retention|body|integer|false|none|
|» source_volume_id|body|string|false|fork from remote volume|

> Example responses

> 200 Response

```json
{
  "blocks": 6,
  "attached_machine_id": "attached_machine_id",
  "created_at": "created_at",
  "snapshot_retention": 2,
  "blocks_free": 5,
  "encrypted": true,
  "zone": "zone",
  "blocks_avail": 1,
  "name": "name",
  "size_gb": 5,
  "attached_alloc_id": "attached_alloc_id",
  "id": "id",
  "state": "state",
  "region": "region",
  "block_size": 0,
  "fstype": "fstype"
}
```

<h3 id="volumescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Volume](#schemavolume)|

<aside class="success">
This operation does not require authentication
</aside>

## Volumes_get_by_id

<a id="opIdVolumes_get_by_id"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/volumes/string \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/volumes/{volume_id}`

<h3 id="volumesgetbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|volume_id|path|string|true|Volume ID|

> Example responses

> 200 Response

```json
{
  "blocks": 6,
  "attached_machine_id": "attached_machine_id",
  "created_at": "created_at",
  "snapshot_retention": 2,
  "blocks_free": 5,
  "encrypted": true,
  "zone": "zone",
  "blocks_avail": 1,
  "name": "name",
  "size_gb": 5,
  "attached_alloc_id": "attached_alloc_id",
  "id": "id",
  "state": "state",
  "region": "region",
  "block_size": 0,
  "fstype": "fstype"
}
```

<h3 id="volumesgetbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Volume](#schemavolume)|

<aside class="success">
This operation does not require authentication
</aside>

## Volumes_update

<a id="opIdVolumes_update"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/volumes/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "snapshot_retention": 0
  }'
```

`POST /apps/{app_name}/volumes/{volume_id}`

> Body parameter

```json
{
  "snapshot_retention": 0
}
```

<h3 id="volumesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|volume_id|path|string|true|Volume ID|
|body|body|[UpdateVolumeRequest](#schemaupdatevolumerequest)|true|Request body|
|» snapshot_retention|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "blocks": 6,
  "attached_machine_id": "attached_machine_id",
  "created_at": "created_at",
  "snapshot_retention": 2,
  "blocks_free": 5,
  "encrypted": true,
  "zone": "zone",
  "blocks_avail": 1,
  "name": "name",
  "size_gb": 5,
  "attached_alloc_id": "attached_alloc_id",
  "id": "id",
  "state": "state",
  "region": "region",
  "block_size": 0,
  "fstype": "fstype"
}
```

> 400 Response

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

<h3 id="volumesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Volume](#schemavolume)|
|400|Bad Request|Bad Request|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Volume_delete

<a id="opIdVolume_delete"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/volumes/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /apps/{app_name}/volumes/{volume_id}`

<h3 id="volumedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|volume_id|path|string|true|Volume ID|

> Example responses

> 200 Response

```json
{
  "blocks": 6,
  "attached_machine_id": "attached_machine_id",
  "created_at": "created_at",
  "snapshot_retention": 2,
  "blocks_free": 5,
  "encrypted": true,
  "zone": "zone",
  "blocks_avail": 1,
  "name": "name",
  "size_gb": 5,
  "attached_alloc_id": "attached_alloc_id",
  "id": "id",
  "state": "state",
  "region": "region",
  "block_size": 0,
  "fstype": "fstype"
}
```

<h3 id="volumedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Volume](#schemavolume)|

<aside class="success">
This operation does not require authentication
</aside>

## Volumes_extend

<a id="opIdVolumes_extend"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/volumes/string/extend \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "size_gb": 0
  }'
```

`PUT /apps/{app_name}/volumes/{volume_id}/extend`

> Body parameter

```json
{
  "size_gb": 0
}
```

<h3 id="volumesextend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|volume_id|path|string|true|Volume ID|
|body|body|[ExtendVolumeRequest](#schemaextendvolumerequest)|true|Request body|
|» size_gb|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "volume": {
    "blocks": 6,
    "attached_machine_id": "attached_machine_id",
    "created_at": "created_at",
    "snapshot_retention": 2,
    "blocks_free": 5,
    "encrypted": true,
    "zone": "zone",
    "blocks_avail": 1,
    "name": "name",
    "size_gb": 5,
    "attached_alloc_id": "attached_alloc_id",
    "id": "id",
    "state": "state",
    "region": "region",
    "block_size": 0,
    "fstype": "fstype"
  },
  "needs_restart": true
}
```

<h3 id="volumesextend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ExtendVolumeResponse](#schemaextendvolumeresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Volumes_list_snapshots

<a id="opIdVolumes_list_snapshots"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/volumes/string/snapshots \
  -H 'Accept: application/json'
```

`GET /apps/{app_name}/volumes/{volume_id}/snapshots`

<h3 id="volumeslistsnapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|volume_id|path|string|true|Volume ID|

> Example responses

> 200 Response

```json
[
  {
    "size": 0,
    "digest": "digest",
    "created_at": "created_at",
    "id": "id",
    "status": "status"
  }
]
```

<h3 id="volumeslistsnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="volumeslistsnapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VolumeSnapshot](#schemavolumesnapshot)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## createVolumeSnapshot

<a id="opIdcreateVolumeSnapshot"></a>

> Code samples

```bash
curl https://api.machines.dev/v1/apps/string/volumes/string/snapshots \
  -X POST
```

`POST /apps/{app_name}/volumes/{volume_id}/snapshots`

<h3 id="createvolumesnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_name|path|string|true|Fly App Name|
|volume_id|path|string|true|Volume ID|

<h3 id="createvolumesnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "organization": {
    "name": "name",
    "slug": "slug"
  },
  "name": "name",
  "id": "id",
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|organization|[Organization](#schemaorganization)|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_CheckStatus">CheckStatus</h2>
<!-- backwards compatibility -->
<a id="schemacheckstatus"></a>
<a id="schema_CheckStatus"></a>
<a id="tocScheckstatus"></a>
<a id="tocscheckstatus"></a>

```json
{
  "output": "output",
  "updated_at": "updated_at",
  "name": "name",
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|output|string|false|none|none|
|status|string|false|none|none|
|updated_at|string|false|none|none|

<h2 id="tocS_CreateAppRequest">CreateAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateapprequest"></a>
<a id="schema_CreateAppRequest"></a>
<a id="tocScreateapprequest"></a>
<a id="tocscreateapprequest"></a>

```json
{
  "app_name": "app_name",
  "org_slug": "org_slug",
  "app_role_id": "app_role_id",
  "network": "network"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_name|string|false|none|none|
|app_role_id|string|false|none|none|
|network|string|false|none|none|
|org_slug|string|false|none|none|

<h2 id="tocS_CreateLeaseRequest">CreateLeaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateleaserequest"></a>
<a id="schema_CreateLeaseRequest"></a>
<a id="tocScreateleaserequest"></a>
<a id="tocscreateleaserequest"></a>

```json
{
  "description": "description",
  "ttl": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|ttl|integer|false|none|none|

<h2 id="tocS_CreateMachineRequest">CreateMachineRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemachinerequest"></a>
<a id="schema_CreateMachineRequest"></a>
<a id="tocScreatemachinerequest"></a>
<a id="tocscreatemachinerequest"></a>

```json
{
  "skip_service_registration": true,
  "lsvd": true,
  "name": "name",
  "lease_ttl": 0,
  "region": "region",
  "config": "{}",
  "skip_launch": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|An object defining the Machine configuration|
|lease_ttl|integer|false|none|none|
|lsvd|boolean|false|none|none|
|name|string|false|none|Unique name for this Machine. If omitted, one is generated for you|
|region|string|false|none|The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you).|
|skip_launch|boolean|false|none|none|
|skip_service_registration|boolean|false|none|none|

<h2 id="tocS_CreateVolumeRequest">CreateVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevolumerequest"></a>
<a id="schema_CreateVolumeRequest"></a>
<a id="tocScreatevolumerequest"></a>
<a id="tocscreatevolumerequest"></a>

```json
{
  "compute": {
    "gpu_kind": "gpu_kind",
    "cpus": 6,
    "host_dedication_id": "host_dedication_id",
    "cpu_kind": "cpu_kind",
    "memory_mb": 1,
    "kernel_args": [
      "kernel_args",
      "kernel_args"
    ]
  },
  "encrypted": true,
  "require_unique_zone": true,
  "snapshot_id": "snapshot_id",
  "name": "name",
  "size_gb": 0,
  "machines_only": true,
  "region": "region",
  "snapshot_retention": 6,
  "fstype": "fstype",
  "source_volume_id": "source_volume_id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compute|[api.MachineGuest](#schemaapi.machineguest)|false|none|none|
|encrypted|boolean|false|none|none|
|fstype|string|false|none|none|
|machines_only|boolean|false|none|none|
|name|string|false|none|none|
|region|string|false|none|none|
|require_unique_zone|boolean|false|none|none|
|size_gb|integer|false|none|none|
|snapshot_id|string|false|none|restore from snapshot|
|snapshot_retention|integer|false|none|none|
|source_volume_id|string|false|none|fork from remote volume|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "details": {},
  "error": "string",
  "status": "unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|Deprecated|
|error|string|false|none|none|
|status|[main.statusCode](#schemamain.statuscode)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|unknown|
|status|insufficient_capacity|

<h2 id="tocS_ExtendVolumeRequest">ExtendVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaextendvolumerequest"></a>
<a id="schema_ExtendVolumeRequest"></a>
<a id="tocSextendvolumerequest"></a>
<a id="tocsextendvolumerequest"></a>

```json
{
  "size_gb": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size_gb|integer|false|none|none|

<h2 id="tocS_ExtendVolumeResponse">ExtendVolumeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextendvolumeresponse"></a>
<a id="schema_ExtendVolumeResponse"></a>
<a id="tocSextendvolumeresponse"></a>
<a id="tocsextendvolumeresponse"></a>

```json
{
  "volume": {
    "blocks": 6,
    "attached_machine_id": "attached_machine_id",
    "created_at": "created_at",
    "snapshot_retention": 2,
    "blocks_free": 5,
    "encrypted": true,
    "zone": "zone",
    "blocks_avail": 1,
    "name": "name",
    "size_gb": 5,
    "attached_alloc_id": "attached_alloc_id",
    "id": "id",
    "state": "state",
    "region": "region",
    "block_size": 0,
    "fstype": "fstype"
  },
  "needs_restart": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|needs_restart|boolean|false|none|none|
|volume|[Volume](#schemavolume)|false|none|none|

<h2 id="tocS_ImageRef">ImageRef</h2>
<!-- backwards compatibility -->
<a id="schemaimageref"></a>
<a id="schema_ImageRef"></a>
<a id="tocSimageref"></a>
<a id="tocsimageref"></a>

```json
{
  "registry": "registry",
  "digest": "digest",
  "tag": "tag",
  "repository": "repository",
  "labels": {
    "key": "labels"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string|false|none|none|
|labels|object|false|none|none|
|registry|string|false|none|none|
|repository|string|false|none|none|
|tag|string|false|none|none|

<h2 id="tocS_Lease">Lease</h2>
<!-- backwards compatibility -->
<a id="schemalease"></a>
<a id="schema_Lease"></a>
<a id="tocSlease"></a>
<a id="tocslease"></a>

```json
{
  "owner": "owner",
  "expires_at": 0,
  "description": "description",
  "nonce": "nonce",
  "version": "version"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description or reason for the Lease.|
|expires_at|integer|false|none|ExpiresAt is the unix timestamp in UTC to denote when the Lease will no longer be valid.|
|nonce|string|false|none|Nonce is the unique ID autogenerated and associated with the Lease.|
|owner|string|false|none|Owner is the user identifier which acquired the Lease.|
|version|string|false|none|Machine version|

<h2 id="tocS_ListApp">ListApp</h2>
<!-- backwards compatibility -->
<a id="schemalistapp"></a>
<a id="schema_ListApp"></a>
<a id="tocSlistapp"></a>
<a id="tocslistapp"></a>

```json
{
  "name": "name",
  "id": "id",
  "machine_count": 0,
  "network": "{}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|machine_count|integer|false|none|none|
|name|string|false|none|none|
|network|object|false|none|none|

<h2 id="tocS_ListAppsResponse">ListAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistappsresponse"></a>
<a id="schema_ListAppsResponse"></a>
<a id="tocSlistappsresponse"></a>
<a id="tocslistappsresponse"></a>

```json
{
  "total_apps": 6,
  "apps": [
    {
      "name": "name",
      "id": "id",
      "machine_count": 0,
      "network": "{}"
    },
    {
      "name": "name",
      "id": "id",
      "machine_count": 0,
      "network": "{}"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[[ListApp](#schemalistapp)]|false|none|none|
|total_apps|integer|false|none|none|

<h2 id="tocS_ListenSocket">ListenSocket</h2>
<!-- backwards compatibility -->
<a id="schemalistensocket"></a>
<a id="schema_ListenSocket"></a>
<a id="tocSlistensocket"></a>
<a id="tocslistensocket"></a>

```json
{
  "address": "address",
  "proto": "proto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|proto|string|false|none|none|

<h2 id="tocS_Machine">Machine</h2>
<!-- backwards compatibility -->
<a id="schemamachine"></a>
<a id="schema_Machine"></a>
<a id="tocSmachine"></a>
<a id="tocsmachine"></a>

```json
{
  "image_ref": {
    "registry": "registry",
    "digest": "digest",
    "tag": "tag",
    "repository": "repository",
    "labels": {
      "key": "labels"
    }
  },
  "created_at": "created_at",
  "nonce": "nonce",
  "private_ip": "private_ip",
  "checks": [
    {
      "output": "output",
      "updated_at": "updated_at",
      "name": "name",
      "status": "status"
    },
    {
      "output": "output",
      "updated_at": "updated_at",
      "name": "name",
      "status": "status"
    }
  ],
  "instance_id": "instance_id",
  "updated_at": "updated_at",
  "name": "name",
  "id": "id",
  "state": "state",
  "region": "region",
  "config": {
    "image": "image",
    "init": {
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "swap_size_mb": 5,
      "tty": true,
      "cmd": [
        "cmd",
        "cmd"
      ],
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ],
      "exec": [
        "exec",
        "exec"
      ]
    },
    "metadata": {
      "key": "metadata"
    },
    "processes": [
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      },
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      }
    ],
    "restart": {
      "max_retries": 2,
      "policy": "no"
    },
    "auto_destroy": true,
    "dns": {
      "skip_registration": true
    },
    "mounts": [
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      },
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      }
    ],
    "services": [
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      },
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      }
    ],
    "env": {
      "key": "env"
    },
    "statics": [
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      },
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      }
    ],
    "schedule": "schedule",
    "checks": {
      "key": {
        "headers": [
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          },
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          }
        ],
        "path": "path",
        "protocol": "protocol",
        "method": "method",
        "port": 0,
        "tls_server_name": "tls_server_name",
        "interval": "interval",
        "tls_skip_verify": true,
        "type": "type",
        "grace_period": "grace_period",
        "timeout": "timeout"
      }
    },
    "size": "size",
    "files": [
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      },
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      }
    ],
    "guest": {
      "gpu_kind": "gpu_kind",
      "cpus": 6,
      "host_dedication_id": "host_dedication_id",
      "cpu_kind": "cpu_kind",
      "memory_mb": 1,
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ]
    },
    "disable_machine_autostart": true,
    "metrics": {
      "path": "path",
      "port": 5
    },
    "standbys": [
      "standbys",
      "standbys"
    ],
    "stop_config": {
      "signal": "signal",
      "timeout": "timeout"
    }
  },
  "events": [
    {
      "request": "{}",
      "id": "id",
      "source": "source",
      "type": "type",
      "status": "status",
      "timestamp": 1
    },
    {
      "request": "{}",
      "id": "id",
      "source": "source",
      "type": "type",
      "status": "status",
      "timestamp": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[CheckStatus](#schemacheckstatus)]|false|none|none|
|config|[api.MachineConfig](#schemaapi.machineconfig)|false|none|none|
|created_at|string|false|none|none|
|events|[[MachineEvent](#schemamachineevent)]|false|none|none|
|id|string|false|none|none|
|image_ref|[ImageRef](#schemaimageref)|false|none|none|
|instance_id|string|false|none|InstanceID is unique for each version of the machine|
|name|string|false|none|none|
|nonce|string|false|none|Nonce is only every returned on machine creation if a lease_duration was provided.|
|private_ip|string|false|none|PrivateIP is the internal 6PN address of the machine.|
|region|string|false|none|none|
|state|string|false|none|none|
|updated_at|string|false|none|none|

<h2 id="tocS_MachineEvent">MachineEvent</h2>
<!-- backwards compatibility -->
<a id="schemamachineevent"></a>
<a id="schema_MachineEvent"></a>
<a id="tocSmachineevent"></a>
<a id="tocsmachineevent"></a>

```json
{
  "request": "{}",
  "id": "id",
  "source": "source",
  "type": "type",
  "status": "status",
  "timestamp": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|request|object|false|none|none|
|source|string|false|none|none|
|status|string|false|none|none|
|timestamp|integer|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_MachineExecRequest">MachineExecRequest</h2>
<!-- backwards compatibility -->
<a id="schemamachineexecrequest"></a>
<a id="schema_MachineExecRequest"></a>
<a id="tocSmachineexecrequest"></a>
<a id="tocsmachineexecrequest"></a>

```json
{
  "cmd": "cmd",
  "command": [
    "command",
    "command"
  ],
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cmd|string|false|none|Deprecated: use Command instead|
|command|[string]|false|none|none|
|timeout|integer|false|none|none|

<h2 id="tocS_MachineVersion">MachineVersion</h2>
<!-- backwards compatibility -->
<a id="schemamachineversion"></a>
<a id="schema_MachineVersion"></a>
<a id="tocSmachineversion"></a>
<a id="tocsmachineversion"></a>

```json
{
  "version": "version",
  "user_config": {
    "image": "image",
    "init": {
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "swap_size_mb": 5,
      "tty": true,
      "cmd": [
        "cmd",
        "cmd"
      ],
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ],
      "exec": [
        "exec",
        "exec"
      ]
    },
    "metadata": {
      "key": "metadata"
    },
    "processes": [
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      },
      {
        "entrypoint": [
          "entrypoint",
          "entrypoint"
        ],
        "cmd": [
          "cmd",
          "cmd"
        ],
        "env": {
          "key": "env"
        },
        "user": "user",
        "exec": [
          "exec",
          "exec"
        ]
      }
    ],
    "restart": {
      "max_retries": 2,
      "policy": "no"
    },
    "auto_destroy": true,
    "dns": {
      "skip_registration": true
    },
    "mounts": [
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      },
      {
        "volume": "volume",
        "path": "path",
        "encrypted": true,
        "size_gb_limit": 3,
        "extend_threshold_percent": 7,
        "name": "name",
        "add_size_gb": 2,
        "size_gb": 9
      }
    ],
    "services": [
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      },
      {
        "min_machines_running": 1,
        "protocol": "protocol",
        "checks": [
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          },
          {
            "headers": [
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              },
              {
                "values": [
                  "values",
                  "values"
                ],
                "name": "name"
              }
            ],
            "path": "path",
            "protocol": "protocol",
            "method": "method",
            "port": 0,
            "tls_server_name": "tls_server_name",
            "interval": "interval",
            "tls_skip_verify": true,
            "type": "type",
            "grace_period": "grace_period",
            "timeout": "timeout"
          }
        ],
        "force_instance_key": "force_instance_key",
        "autostart": true,
        "internal_port": 1,
        "ports": [
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          },
          {
            "force_https": true,
            "port": 6,
            "handlers": [
              "handlers",
              "handlers"
            ],
            "start_port": 7,
            "tls_options": {
              "alpn": [
                "alpn",
                "alpn"
              ],
              "default_self_signed": true,
              "versions": [
                "versions",
                "versions"
              ]
            },
            "proxy_proto_options": {
              "version": "version"
            },
            "end_port": 1,
            "http_options": {
              "compress": true,
              "response": {
                "headers": {
                  "key": "{}"
                }
              },
              "h2_backend": true
            }
          }
        ],
        "force_instance_description": "force_instance_description",
        "autostop": true,
        "concurrency": {
          "soft_limit": 7,
          "type": "type",
          "hard_limit": 4
        }
      }
    ],
    "env": {
      "key": "env"
    },
    "statics": [
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      },
      {
        "guest_path": "guest_path",
        "url_prefix": "url_prefix"
      }
    ],
    "schedule": "schedule",
    "checks": {
      "key": {
        "headers": [
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          },
          {
            "values": [
              "values",
              "values"
            ],
            "name": "name"
          }
        ],
        "path": "path",
        "protocol": "protocol",
        "method": "method",
        "port": 0,
        "tls_server_name": "tls_server_name",
        "interval": "interval",
        "tls_skip_verify": true,
        "type": "type",
        "grace_period": "grace_period",
        "timeout": "timeout"
      }
    },
    "size": "size",
    "files": [
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      },
      {
        "secret_name": "secret_name",
        "raw_value": "raw_value",
        "guest_path": "guest_path"
      }
    ],
    "guest": {
      "gpu_kind": "gpu_kind",
      "cpus": 6,
      "host_dedication_id": "host_dedication_id",
      "cpu_kind": "cpu_kind",
      "memory_mb": 1,
      "kernel_args": [
        "kernel_args",
        "kernel_args"
      ]
    },
    "disable_machine_autostart": true,
    "metrics": {
      "path": "path",
      "port": 5
    },
    "standbys": [
      "standbys",
      "standbys"
    ],
    "stop_config": {
      "signal": "signal",
      "timeout": "timeout"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_config|[api.MachineConfig](#schemaapi.machineconfig)|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "name": "name",
  "slug": "slug"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|slug|string|false|none|none|

<h2 id="tocS_ProcessStat">ProcessStat</h2>
<!-- backwards compatibility -->
<a id="schemaprocessstat"></a>
<a id="schema_ProcessStat"></a>
<a id="tocSprocessstat"></a>
<a id="tocsprocessstat"></a>

```json
{
  "listen_sockets": [
    {
      "address": "address",
      "proto": "proto"
    },
    {
      "address": "address",
      "proto": "proto"
    }
  ],
  "rss": 1,
  "rtime": 5,
  "cpu": 0,
  "pid": 6,
  "stime": 5,
  "directory": "directory",
  "command": "command"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|string|false|none|none|
|cpu|integer|false|none|none|
|directory|string|false|none|none|
|listen_sockets|[[ListenSocket](#schemalistensocket)]|false|none|none|
|pid|integer|false|none|none|
|rss|integer|false|none|none|
|rtime|integer|false|none|none|
|stime|integer|false|none|none|

<h2 id="tocS_SignalRequest">SignalRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignalrequest"></a>
<a id="schema_SignalRequest"></a>
<a id="tocSsignalrequest"></a>
<a id="tocssignalrequest"></a>

```json
{
  "signal": "SIGABRT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signal|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|signal|SIGABRT|
|signal|SIGALRM|
|signal|SIGFPE|
|signal|SIGHUP|
|signal|SIGILL|
|signal|SIGINT|
|signal|SIGKILL|
|signal|SIGPIPE|
|signal|SIGQUIT|
|signal|SIGSEGV|
|signal|SIGTERM|
|signal|SIGTRAP|
|signal|SIGUSR1|

<h2 id="tocS_StopRequest">StopRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoprequest"></a>
<a id="schema_StopRequest"></a>
<a id="tocSstoprequest"></a>
<a id="tocsstoprequest"></a>

```json
{
  "signal": "signal",
  "timeout": "timeout"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signal|string|false|none|none|
|timeout|string|false|none|none|

<h2 id="tocS_UpdateMachineRequest">UpdateMachineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemachinerequest"></a>
<a id="schema_UpdateMachineRequest"></a>
<a id="tocSupdatemachinerequest"></a>
<a id="tocsupdatemachinerequest"></a>

```json
{
  "skip_service_registration": true,
  "lsvd": true,
  "name": "name",
  "current_version": "current_version",
  "lease_ttl": 0,
  "region": "region",
  "config": "{}",
  "skip_launch": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|An object defining the Machine configuration|
|current_version|string|false|none|none|
|lease_ttl|integer|false|none|none|
|lsvd|boolean|false|none|none|
|name|string|false|none|Unique name for this Machine. If omitted, one is generated for you|
|region|string|false|none|The target region. Omitting this param launches in the same region as your WireGuard peer connection (somewhere near you).|
|skip_launch|boolean|false|none|none|
|skip_service_registration|boolean|false|none|none|

<h2 id="tocS_UpdateVolumeRequest">UpdateVolumeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevolumerequest"></a>
<a id="schema_UpdateVolumeRequest"></a>
<a id="tocSupdatevolumerequest"></a>
<a id="tocsupdatevolumerequest"></a>

```json
{
  "snapshot_retention": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshot_retention|integer|false|none|none|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "blocks": 6,
  "attached_machine_id": "attached_machine_id",
  "created_at": "created_at",
  "snapshot_retention": 2,
  "blocks_free": 5,
  "encrypted": true,
  "zone": "zone",
  "blocks_avail": 1,
  "name": "name",
  "size_gb": 5,
  "attached_alloc_id": "attached_alloc_id",
  "id": "id",
  "state": "state",
  "region": "region",
  "block_size": 0,
  "fstype": "fstype"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attached_alloc_id|string|false|none|none|
|attached_machine_id|string|false|none|none|
|block_size|integer|false|none|none|
|blocks|integer|false|none|none|
|blocks_avail|integer|false|none|none|
|blocks_free|integer|false|none|none|
|created_at|string|false|none|none|
|encrypted|boolean|false|none|none|
|fstype|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|region|string|false|none|none|
|size_gb|integer|false|none|none|
|snapshot_retention|integer|false|none|none|
|state|string|false|none|none|
|zone|string|false|none|none|

<h2 id="tocS_VolumeSnapshot">VolumeSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemavolumesnapshot"></a>
<a id="schema_VolumeSnapshot"></a>
<a id="tocSvolumesnapshot"></a>
<a id="tocsvolumesnapshot"></a>

```json
{
  "size": 0,
  "digest": "digest",
  "created_at": "created_at",
  "id": "id",
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|none|
|digest|string|false|none|none|
|id|string|false|none|none|
|size|integer|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_api.DNSConfig">api.DNSConfig</h2>
<!-- backwards compatibility -->
<a id="schemaapi.dnsconfig"></a>
<a id="schema_api.DNSConfig"></a>
<a id="tocSapi.dnsconfig"></a>
<a id="tocsapi.dnsconfig"></a>

```json
{
  "skip_registration": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|skip_registration|boolean|false|none|none|

<h2 id="tocS_api.File">api.File</h2>
<!-- backwards compatibility -->
<a id="schemaapi.file"></a>
<a id="schema_api.File"></a>
<a id="tocSapi.file"></a>
<a id="tocsapi.file"></a>

```json
{
  "secret_name": "secret_name",
  "raw_value": "raw_value",
  "guest_path": "guest_path"
}
```

A file that will be written to the Machine. One of RawValue or SecretName must be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guest_path|string|false|none|GuestPath is the path on the machine where the file will be written and must be an absolute path.<br>For example: /full/path/to/file.json|
|raw_value|string|false|none|The base64 encoded string of the file contents.|
|secret_name|string|false|none|The name of the secret that contains the base64 encoded file contents.|

<h2 id="tocS_api.HTTPOptions">api.HTTPOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapi.httpoptions"></a>
<a id="schema_api.HTTPOptions"></a>
<a id="tocSapi.httpoptions"></a>
<a id="tocsapi.httpoptions"></a>

```json
{
  "compress": true,
  "response": {
    "headers": {
      "key": "{}"
    }
  },
  "h2_backend": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compress|boolean|false|none|none|
|h2_backend|boolean|false|none|none|
|response|[api.HTTPResponseOptions](#schemaapi.httpresponseoptions)|false|none|none|

<h2 id="tocS_api.HTTPResponseOptions">api.HTTPResponseOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapi.httpresponseoptions"></a>
<a id="schema_api.HTTPResponseOptions"></a>
<a id="tocSapi.httpresponseoptions"></a>
<a id="tocsapi.httpresponseoptions"></a>

```json
{
  "headers": {
    "key": "{}"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|none|

<h2 id="tocS_api.MachineCheck">api.MachineCheck</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machinecheck"></a>
<a id="schema_api.MachineCheck"></a>
<a id="tocSapi.machinecheck"></a>
<a id="tocsapi.machinecheck"></a>

```json
{
  "headers": [
    {
      "values": [
        "values",
        "values"
      ],
      "name": "name"
    },
    {
      "values": [
        "values",
        "values"
      ],
      "name": "name"
    }
  ],
  "path": "path",
  "protocol": "protocol",
  "method": "method",
  "port": 0,
  "tls_server_name": "tls_server_name",
  "interval": "interval",
  "tls_skip_verify": true,
  "type": "type",
  "grace_period": "grace_period",
  "timeout": "timeout"
}
```

An optional object that defines one or more named checks. The key for each check is the check name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grace_period|string|false|none|The time to wait after a VM starts before checking its health|
|headers|[[api.MachineHTTPHeader](#schemaapi.machinehttpheader)]|false|none|none|
|interval|string|false|none|The time between connectivity checks|
|method|string|false|none|For http checks, the HTTP method to use to when making the request|
|path|string|false|none|For http checks, the path to send the request to|
|port|integer|false|none|The port to connect to, often the same as internal_port|
|protocol|string|false|none|For http checks, whether to use http or https|
|timeout|string|false|none|The maximum time a connection can take before being reported as failing its health check|
|tls_server_name|string|false|none|If the protocol is https, the hostname to use for TLS certificate validation|
|tls_skip_verify|boolean|false|none|For http checks with https protocol, whether or not to verify the TLS certificate|
|type|string|false|none|tcp or http|

<h2 id="tocS_api.MachineConfig">api.MachineConfig</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machineconfig"></a>
<a id="schema_api.MachineConfig"></a>
<a id="tocSapi.machineconfig"></a>
<a id="tocsapi.machineconfig"></a>

```json
{
  "image": "image",
  "init": {
    "entrypoint": [
      "entrypoint",
      "entrypoint"
    ],
    "swap_size_mb": 5,
    "tty": true,
    "cmd": [
      "cmd",
      "cmd"
    ],
    "kernel_args": [
      "kernel_args",
      "kernel_args"
    ],
    "exec": [
      "exec",
      "exec"
    ]
  },
  "metadata": {
    "key": "metadata"
  },
  "processes": [
    {
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "cmd": [
        "cmd",
        "cmd"
      ],
      "env": {
        "key": "env"
      },
      "user": "user",
      "exec": [
        "exec",
        "exec"
      ]
    },
    {
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "cmd": [
        "cmd",
        "cmd"
      ],
      "env": {
        "key": "env"
      },
      "user": "user",
      "exec": [
        "exec",
        "exec"
      ]
    }
  ],
  "restart": {
    "max_retries": 2,
    "policy": "no"
  },
  "auto_destroy": true,
  "dns": {
    "skip_registration": true
  },
  "mounts": [
    {
      "volume": "volume",
      "path": "path",
      "encrypted": true,
      "size_gb_limit": 3,
      "extend_threshold_percent": 7,
      "name": "name",
      "add_size_gb": 2,
      "size_gb": 9
    },
    {
      "volume": "volume",
      "path": "path",
      "encrypted": true,
      "size_gb_limit": 3,
      "extend_threshold_percent": 7,
      "name": "name",
      "add_size_gb": 2,
      "size_gb": 9
    }
  ],
  "services": [
    {
      "min_machines_running": 1,
      "protocol": "protocol",
      "checks": [
        {
          "headers": [
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            },
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            }
          ],
          "path": "path",
          "protocol": "protocol",
          "method": "method",
          "port": 0,
          "tls_server_name": "tls_server_name",
          "interval": "interval",
          "tls_skip_verify": true,
          "type": "type",
          "grace_period": "grace_period",
          "timeout": "timeout"
        },
        {
          "headers": [
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            },
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            }
          ],
          "path": "path",
          "protocol": "protocol",
          "method": "method",
          "port": 0,
          "tls_server_name": "tls_server_name",
          "interval": "interval",
          "tls_skip_verify": true,
          "type": "type",
          "grace_period": "grace_period",
          "timeout": "timeout"
        }
      ],
      "force_instance_key": "force_instance_key",
      "autostart": true,
      "internal_port": 1,
      "ports": [
        {
          "force_https": true,
          "port": 6,
          "handlers": [
            "handlers",
            "handlers"
          ],
          "start_port": 7,
          "tls_options": {
            "alpn": [
              "alpn",
              "alpn"
            ],
            "default_self_signed": true,
            "versions": [
              "versions",
              "versions"
            ]
          },
          "proxy_proto_options": {
            "version": "version"
          },
          "end_port": 1,
          "http_options": {
            "compress": true,
            "response": {
              "headers": {
                "key": "{}"
              }
            },
            "h2_backend": true
          }
        },
        {
          "force_https": true,
          "port": 6,
          "handlers": [
            "handlers",
            "handlers"
          ],
          "start_port": 7,
          "tls_options": {
            "alpn": [
              "alpn",
              "alpn"
            ],
            "default_self_signed": true,
            "versions": [
              "versions",
              "versions"
            ]
          },
          "proxy_proto_options": {
            "version": "version"
          },
          "end_port": 1,
          "http_options": {
            "compress": true,
            "response": {
              "headers": {
                "key": "{}"
              }
            },
            "h2_backend": true
          }
        }
      ],
      "force_instance_description": "force_instance_description",
      "autostop": true,
      "concurrency": {
        "soft_limit": 7,
        "type": "type",
        "hard_limit": 4
      }
    },
    {
      "min_machines_running": 1,
      "protocol": "protocol",
      "checks": [
        {
          "headers": [
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            },
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            }
          ],
          "path": "path",
          "protocol": "protocol",
          "method": "method",
          "port": 0,
          "tls_server_name": "tls_server_name",
          "interval": "interval",
          "tls_skip_verify": true,
          "type": "type",
          "grace_period": "grace_period",
          "timeout": "timeout"
        },
        {
          "headers": [
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            },
            {
              "values": [
                "values",
                "values"
              ],
              "name": "name"
            }
          ],
          "path": "path",
          "protocol": "protocol",
          "method": "method",
          "port": 0,
          "tls_server_name": "tls_server_name",
          "interval": "interval",
          "tls_skip_verify": true,
          "type": "type",
          "grace_period": "grace_period",
          "timeout": "timeout"
        }
      ],
      "force_instance_key": "force_instance_key",
      "autostart": true,
      "internal_port": 1,
      "ports": [
        {
          "force_https": true,
          "port": 6,
          "handlers": [
            "handlers",
            "handlers"
          ],
          "start_port": 7,
          "tls_options": {
            "alpn": [
              "alpn",
              "alpn"
            ],
            "default_self_signed": true,
            "versions": [
              "versions",
              "versions"
            ]
          },
          "proxy_proto_options": {
            "version": "version"
          },
          "end_port": 1,
          "http_options": {
            "compress": true,
            "response": {
              "headers": {
                "key": "{}"
              }
            },
            "h2_backend": true
          }
        },
        {
          "force_https": true,
          "port": 6,
          "handlers": [
            "handlers",
            "handlers"
          ],
          "start_port": 7,
          "tls_options": {
            "alpn": [
              "alpn",
              "alpn"
            ],
            "default_self_signed": true,
            "versions": [
              "versions",
              "versions"
            ]
          },
          "proxy_proto_options": {
            "version": "version"
          },
          "end_port": 1,
          "http_options": {
            "compress": true,
            "response": {
              "headers": {
                "key": "{}"
              }
            },
            "h2_backend": true
          }
        }
      ],
      "force_instance_description": "force_instance_description",
      "autostop": true,
      "concurrency": {
        "soft_limit": 7,
        "type": "type",
        "hard_limit": 4
      }
    }
  ],
  "env": {
    "key": "env"
  },
  "statics": [
    {
      "guest_path": "guest_path",
      "url_prefix": "url_prefix"
    },
    {
      "guest_path": "guest_path",
      "url_prefix": "url_prefix"
    }
  ],
  "schedule": "schedule",
  "checks": {
    "key": {
      "headers": [
        {
          "values": [
            "values",
            "values"
          ],
          "name": "name"
        },
        {
          "values": [
            "values",
            "values"
          ],
          "name": "name"
        }
      ],
      "path": "path",
      "protocol": "protocol",
      "method": "method",
      "port": 0,
      "tls_server_name": "tls_server_name",
      "interval": "interval",
      "tls_skip_verify": true,
      "type": "type",
      "grace_period": "grace_period",
      "timeout": "timeout"
    }
  },
  "size": "size",
  "files": [
    {
      "secret_name": "secret_name",
      "raw_value": "raw_value",
      "guest_path": "guest_path"
    },
    {
      "secret_name": "secret_name",
      "raw_value": "raw_value",
      "guest_path": "guest_path"
    }
  ],
  "guest": {
    "gpu_kind": "gpu_kind",
    "cpus": 6,
    "host_dedication_id": "host_dedication_id",
    "cpu_kind": "cpu_kind",
    "memory_mb": 1,
    "kernel_args": [
      "kernel_args",
      "kernel_args"
    ]
  },
  "disable_machine_autostart": true,
  "metrics": {
    "path": "path",
    "port": 5
  },
  "standbys": [
    "standbys",
    "standbys"
  ],
  "stop_config": {
    "signal": "signal",
    "timeout": "timeout"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_destroy|boolean|false|none|Optional boolean telling the Machine to destroy itself once it’s complete (default false)|
|checks|object|false|none|none|
|disable_machine_autostart|boolean|false|none|Deprecated: use Service.Autostart instead|
|dns|[api.DNSConfig](#schemaapi.dnsconfig)|false|none|none|
|env|object|false|none|An object filled with key/value pairs to be set as environment variables|
|files|[[api.File](#schemaapi.file)]|false|none|none|
|guest|[api.MachineGuest](#schemaapi.machineguest)|false|none|none|
|image|string|false|none|The docker image to run|
|init|[api.MachineInit](#schemaapi.machineinit)|false|none|none|
|metadata|object|false|none|none|
|metrics|[api.MachineMetrics](#schemaapi.machinemetrics)|false|none|none|
|mounts|[[api.MachineMount](#schemaapi.machinemount)]|false|none|none|
|processes|[[api.MachineProcess](#schemaapi.machineprocess)]|false|none|none|
|restart|[api.MachineRestart](#schemaapi.machinerestart)|false|none|The Machine restart policy defines whether and how flyd restarts a Machine after its main process exits. See https://fly.io/docs/machines/guides-examples/machine-restart-policy/.|
|schedule|string|false|none|none|
|services|[[api.MachineService](#schemaapi.machineservice)]|false|none|none|
|size|string|false|none|Deprecated: use Guest instead|
|standbys|[string]|false|none|Standbys enable a machine to be a standby for another. In the event of a hardware failure,<br>the standby machine will be started.|
|statics|[[api.Static](#schemaapi.static)]|false|none|none|
|stop_config|[api.StopConfig](#schemaapi.stopconfig)|false|none|none|

<h2 id="tocS_api.MachineGuest">api.MachineGuest</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machineguest"></a>
<a id="schema_api.MachineGuest"></a>
<a id="tocSapi.machineguest"></a>
<a id="tocsapi.machineguest"></a>

```json
{
  "gpu_kind": "gpu_kind",
  "cpus": 6,
  "host_dedication_id": "host_dedication_id",
  "cpu_kind": "cpu_kind",
  "memory_mb": 1,
  "kernel_args": [
    "kernel_args",
    "kernel_args"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu_kind|string|false|none|none|
|cpus|integer|false|none|none|
|gpu_kind|string|false|none|none|
|host_dedication_id|string|false|none|none|
|kernel_args|[string]|false|none|none|
|memory_mb|integer|false|none|none|

<h2 id="tocS_api.MachineHTTPHeader">api.MachineHTTPHeader</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machinehttpheader"></a>
<a id="schema_api.MachineHTTPHeader"></a>
<a id="tocSapi.machinehttpheader"></a>
<a id="tocsapi.machinehttpheader"></a>

```json
{
  "values": [
    "values",
    "values"
  ],
  "name": "name"
}
```

For http checks, an array of objects with string field Name and array of strings field Values. The key/value pairs specify header and header values that will get passed with the check call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The header name|
|values|[string]|false|none|The header value|

<h2 id="tocS_api.MachineInit">api.MachineInit</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machineinit"></a>
<a id="schema_api.MachineInit"></a>
<a id="tocSapi.machineinit"></a>
<a id="tocsapi.machineinit"></a>

```json
{
  "entrypoint": [
    "entrypoint",
    "entrypoint"
  ],
  "swap_size_mb": 5,
  "tty": true,
  "cmd": [
    "cmd",
    "cmd"
  ],
  "kernel_args": [
    "kernel_args",
    "kernel_args"
  ],
  "exec": [
    "exec",
    "exec"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cmd|[string]|false|none|none|
|entrypoint|[string]|false|none|none|
|exec|[string]|false|none|none|
|kernel_args|[string]|false|none|none|
|swap_size_mb|integer|false|none|none|
|tty|boolean|false|none|none|

<h2 id="tocS_api.MachineMetrics">api.MachineMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machinemetrics"></a>
<a id="schema_api.MachineMetrics"></a>
<a id="tocSapi.machinemetrics"></a>
<a id="tocsapi.machinemetrics"></a>

```json
{
  "path": "path",
  "port": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|none|
|port|integer|false|none|none|

<h2 id="tocS_api.MachineMount">api.MachineMount</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machinemount"></a>
<a id="schema_api.MachineMount"></a>
<a id="tocSapi.machinemount"></a>
<a id="tocsapi.machinemount"></a>

```json
{
  "volume": "volume",
  "path": "path",
  "encrypted": true,
  "size_gb_limit": 3,
  "extend_threshold_percent": 7,
  "name": "name",
  "add_size_gb": 2,
  "size_gb": 9
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add_size_gb|integer|false|none|none|
|encrypted|boolean|false|none|none|
|extend_threshold_percent|integer|false|none|none|
|name|string|false|none|none|
|path|string|false|none|none|
|size_gb|integer|false|none|none|
|size_gb_limit|integer|false|none|none|
|volume|string|false|none|none|

<h2 id="tocS_api.MachinePort">api.MachinePort</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machineport"></a>
<a id="schema_api.MachinePort"></a>
<a id="tocSapi.machineport"></a>
<a id="tocsapi.machineport"></a>

```json
{
  "force_https": true,
  "port": 6,
  "handlers": [
    "handlers",
    "handlers"
  ],
  "start_port": 7,
  "tls_options": {
    "alpn": [
      "alpn",
      "alpn"
    ],
    "default_self_signed": true,
    "versions": [
      "versions",
      "versions"
    ]
  },
  "proxy_proto_options": {
    "version": "version"
  },
  "end_port": 1,
  "http_options": {
    "compress": true,
    "response": {
      "headers": {
        "key": "{}"
      }
    },
    "h2_backend": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_port|integer|false|none|none|
|force_https|boolean|false|none|none|
|handlers|[string]|false|none|none|
|http_options|[api.HTTPOptions](#schemaapi.httpoptions)|false|none|none|
|port|integer|false|none|none|
|proxy_proto_options|[api.ProxyProtoOptions](#schemaapi.proxyprotooptions)|false|none|none|
|start_port|integer|false|none|none|
|tls_options|[api.TLSOptions](#schemaapi.tlsoptions)|false|none|none|

<h2 id="tocS_api.MachineProcess">api.MachineProcess</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machineprocess"></a>
<a id="schema_api.MachineProcess"></a>
<a id="tocSapi.machineprocess"></a>
<a id="tocsapi.machineprocess"></a>

```json
{
  "entrypoint": [
    "entrypoint",
    "entrypoint"
  ],
  "cmd": [
    "cmd",
    "cmd"
  ],
  "env": {
    "key": "env"
  },
  "user": "user",
  "exec": [
    "exec",
    "exec"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cmd|[string]|false|none|none|
|entrypoint|[string]|false|none|none|
|env|object|false|none|none|
|exec|[string]|false|none|none|
|user|string|false|none|none|

<h2 id="tocS_api.MachineRestart">api.MachineRestart</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machinerestart"></a>
<a id="schema_api.MachineRestart"></a>
<a id="tocSapi.machinerestart"></a>
<a id="tocsapi.machinerestart"></a>

```json
{
  "max_retries": 2,
  "policy": "no"
}
```

The Machine restart policy defines whether and how flyd restarts a Machine after its main process exits. See https://fly.io/docs/machines/guides-examples/machine-restart-policy/.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_retries|integer|false|none|When policy is on-failure, the maximum number of times to attempt to restart the Machine before letting it stop.|
|policy|string|false|none|* no - Never try to restart a Machine automatically when its main process exits, whether that’s on purpose or on a crash.<br>* always - Always restart a Machine automatically and never let it enter a stopped state, even when the main process exits cleanly.<br>* on-failure - Try up to MaxRetries times to automatically restart the Machine if it exits with a non-zero exit code. Default when no explicit policy is set, and for Machines with schedules.|

#### Enumerated Values

|Property|Value|
|---|---|
|policy|no|
|policy|always|
|policy|on-failure|

<h2 id="tocS_api.MachineService">api.MachineService</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machineservice"></a>
<a id="schema_api.MachineService"></a>
<a id="tocSapi.machineservice"></a>
<a id="tocsapi.machineservice"></a>

```json
{
  "min_machines_running": 1,
  "protocol": "protocol",
  "checks": [
    {
      "headers": [
        {
          "values": [
            "values",
            "values"
          ],
          "name": "name"
        },
        {
          "values": [
            "values",
            "values"
          ],
          "name": "name"
        }
      ],
      "path": "path",
      "protocol": "protocol",
      "method": "method",
      "port": 0,
      "tls_server_name": "tls_server_name",
      "interval": "interval",
      "tls_skip_verify": true,
      "type": "type",
      "grace_period": "grace_period",
      "timeout": "timeout"
    },
    {
      "headers": [
        {
          "values": [
            "values",
            "values"
          ],
          "name": "name"
        },
        {
          "values": [
            "values",
            "values"
          ],
          "name": "name"
        }
      ],
      "path": "path",
      "protocol": "protocol",
      "method": "method",
      "port": 0,
      "tls_server_name": "tls_server_name",
      "interval": "interval",
      "tls_skip_verify": true,
      "type": "type",
      "grace_period": "grace_period",
      "timeout": "timeout"
    }
  ],
  "force_instance_key": "force_instance_key",
  "autostart": true,
  "internal_port": 1,
  "ports": [
    {
      "force_https": true,
      "port": 6,
      "handlers": [
        "handlers",
        "handlers"
      ],
      "start_port": 7,
      "tls_options": {
        "alpn": [
          "alpn",
          "alpn"
        ],
        "default_self_signed": true,
        "versions": [
          "versions",
          "versions"
        ]
      },
      "proxy_proto_options": {
        "version": "version"
      },
      "end_port": 1,
      "http_options": {
        "compress": true,
        "response": {
          "headers": {
            "key": "{}"
          }
        },
        "h2_backend": true
      }
    },
    {
      "force_https": true,
      "port": 6,
      "handlers": [
        "handlers",
        "handlers"
      ],
      "start_port": 7,
      "tls_options": {
        "alpn": [
          "alpn",
          "alpn"
        ],
        "default_self_signed": true,
        "versions": [
          "versions",
          "versions"
        ]
      },
      "proxy_proto_options": {
        "version": "version"
      },
      "end_port": 1,
      "http_options": {
        "compress": true,
        "response": {
          "headers": {
            "key": "{}"
          }
        },
        "h2_backend": true
      }
    }
  ],
  "force_instance_description": "force_instance_description",
  "autostop": true,
  "concurrency": {
    "soft_limit": 7,
    "type": "type",
    "hard_limit": 4
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autostart|boolean|false|none|none|
|autostop|boolean|false|none|none|
|checks|[[api.MachineCheck](#schemaapi.machinecheck)]|false|none|none|
|concurrency|[api.MachineServiceConcurrency](#schemaapi.machineserviceconcurrency)|false|none|none|
|force_instance_description|string|false|none|none|
|force_instance_key|string|false|none|none|
|internal_port|integer|false|none|none|
|min_machines_running|integer|false|none|none|
|ports|[[api.MachinePort](#schemaapi.machineport)]|false|none|none|
|protocol|string|false|none|none|

<h2 id="tocS_api.MachineServiceConcurrency">api.MachineServiceConcurrency</h2>
<!-- backwards compatibility -->
<a id="schemaapi.machineserviceconcurrency"></a>
<a id="schema_api.MachineServiceConcurrency"></a>
<a id="tocSapi.machineserviceconcurrency"></a>
<a id="tocsapi.machineserviceconcurrency"></a>

```json
{
  "soft_limit": 7,
  "type": "type",
  "hard_limit": 4
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hard_limit|integer|false|none|none|
|soft_limit|integer|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_api.ProxyProtoOptions">api.ProxyProtoOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapi.proxyprotooptions"></a>
<a id="schema_api.ProxyProtoOptions"></a>
<a id="tocSapi.proxyprotooptions"></a>
<a id="tocsapi.proxyprotooptions"></a>

```json
{
  "version": "version"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|none|

<h2 id="tocS_api.Static">api.Static</h2>
<!-- backwards compatibility -->
<a id="schemaapi.static"></a>
<a id="schema_api.Static"></a>
<a id="tocSapi.static"></a>
<a id="tocsapi.static"></a>

```json
{
  "guest_path": "guest_path",
  "url_prefix": "url_prefix"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guest_path|string|true|none|none|
|url_prefix|string|true|none|none|

<h2 id="tocS_api.StopConfig">api.StopConfig</h2>
<!-- backwards compatibility -->
<a id="schemaapi.stopconfig"></a>
<a id="schema_api.StopConfig"></a>
<a id="tocSapi.stopconfig"></a>
<a id="tocsapi.stopconfig"></a>

```json
{
  "signal": "signal",
  "timeout": "timeout"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signal|string|false|none|none|
|timeout|string|false|none|none|

<h2 id="tocS_api.TLSOptions">api.TLSOptions</h2>
<!-- backwards compatibility -->
<a id="schemaapi.tlsoptions"></a>
<a id="schema_api.TLSOptions"></a>
<a id="tocSapi.tlsoptions"></a>
<a id="tocsapi.tlsoptions"></a>

```json
{
  "alpn": [
    "alpn",
    "alpn"
  ],
  "default_self_signed": true,
  "versions": [
    "versions",
    "versions"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpn|[string]|false|none|none|
|default_self_signed|boolean|false|none|none|
|versions|[string]|false|none|none|

<h2 id="tocS_main.statusCode">main.statusCode</h2>
<!-- backwards compatibility -->
<a id="schemamain.statuscode"></a>
<a id="schema_main.statusCode"></a>
<a id="tocSmain.statuscode"></a>
<a id="tocsmain.statuscode"></a>

```json
"unknown"
```
