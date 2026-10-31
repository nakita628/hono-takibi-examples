import { createRoute, z } from '@hono/zod-openapi'

const AccessEntrySchema = z
  .object({
    access_mask: z.string().exactOptional(),
    agent_range: z.string().exactOptional(),
    user: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccessEntry')

const AgentStateSchema = z
  .object({ agentNum: z.int32().exactOptional(), state: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('AgentState')

const ConfigCOAPSchema = z
  .object({
    keystore: z.string().exactOptional(),
    primary_port: z.int32().exactOptional(),
    rule: z.string().exactOptional(),
    secure_port: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigCOAP')

const ConfigDHCPSchema = z
  .object({
    add_options: z.string().exactOptional(),
    classid: z.string().exactOptional(),
    hwaddr: z.string().exactOptional(),
    script: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigDHCP')

const ConfigIPMISchema = z
  .object({
    primary_port: z.int32().exactOptional(),
    secure_port: z.int32().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigIPMI')

const ConfigMQTTSchema = z
  .object({
    broker: z.string().exactOptional(),
    clientid: z.string().exactOptional(),
    filename: z.string().exactOptional(),
    is_tls: z.string().exactOptional(),
    password: z.string().exactOptional(),
    port: z.int32().exactOptional(),
    tls_conf_filename: z.string().exactOptional(),
    username: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigMQTT')

const ConfigNETFLOWSchema = z
  .object({
    bundleflowsets: z.int32().exactOptional(),
    collector: z.string().exactOptional(),
    collectorport: z.int32().exactOptional(),
    filename: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigNETFLOW')

const ConfigPROXYSchema = z
  .object({
    TCP_NODELAY: z.int32().exactOptional(),
    client_to_server: z.string().exactOptional(),
    disconnect_delay: z.int32().exactOptional(),
    max_connects: z.int32().exactOptional(),
    portno: z.int32().exactOptional(),
    pre_connect: z.string().exactOptional(),
    server_to_client: z.string().exactOptional(),
    target: z.string().exactOptional(),
    transport: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigPROXY')

const ConfigSFLOWSchema = z
  .object({
    collector: z.string().exactOptional(),
    collectorport: z.int32().exactOptional(),
    encoding_type: z.string().exactOptional(),
    filename: z.string().exactOptional(),
    flows_per_min: z.int32().exactOptional(),
    include_samples: z.string().exactOptional(),
    records_per_sample: z.string().exactOptional(),
    samples_per_datagram: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigSFLOW')

const ConfigSNMPTCPSchema = z
  .object({ connections: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConfigSNMPTCP')

const ConfigSNMPv3Schema = z
  .object({
    context_engine_id: z.string().exactOptional(),
    engine_id: z.string().exactOptional(),
    usm_db: z.string().exactOptional(),
    vacm_db: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigSNMPv3')

const ConfigSSHSchema = z
  .object({ port: z.int32().exactOptional(), version: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConfigSSH')

const ConfigSYSLOGSchema = z
  .object({
    client: z.string().exactOptional(),
    hostname: z.string().exactOptional(),
    localport: z.int32().exactOptional(),
    separator: z.string().exactOptional(),
    sequence: z.int32().exactOptional(),
    server: z.string().exactOptional(),
    serverport: z.int32().exactOptional(),
    timestamp: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigSYSLOG')

const ConfigTELNETSchema = z
  .object({
    keymap: z.string().exactOptional(),
    paging_prompt: z.string().exactOptional(),
    port: z.int32().exactOptional(),
    prompt: z.string().exactOptional(),
    rule: z.string().exactOptional(),
    userdb: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigTELNET')

const ConfigTFTPSchema = z
  .object({
    cache: z.int32().exactOptional(),
    client: z.string().exactOptional(),
    dstfile: z.string().exactOptional(),
    mode: z.string().exactOptional(),
    port: z.int32().exactOptional(),
    retries: z.int32().exactOptional(),
    script: z.string().exactOptional(),
    server: z.string().exactOptional(),
    srcfile: z.string().exactOptional(),
    timeout: z.int32().exactOptional(),
    trace: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigTFTP')

const ConfigTODSchema = z
  .object({
    port: z.int32().exactOptional(),
    retries: z.int32().exactOptional(),
    script: z.string().exactOptional(),
    server: z.string().exactOptional(),
    timeout: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigTOD')

const ConfigWEBSchema = z
  .object({
    is_persistent_connections: z.int32().exactOptional(),
    password: z.string().exactOptional(),
    port: z.int32().exactOptional(),
    rule: z.string().exactOptional(),
    username: z.string().exactOptional(),
    wsdl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigWEB')

const IPAliasSchema = z
  .object({
    IP: z.string().exactOptional(),
    interface: z.string().exactOptional(),
    mask: z.string().exactOptional(),
    port: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IPAlias')

const IPSourceSchema = z
  .object({ IP: z.string().exactOptional(), port: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('IPSource')

const SyslogMsgSchema = z
  .object({
    hostname: z.string().exactOptional(),
    message: z.string().exactOptional(),
    separator: z.string().exactOptional(),
    sequence: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SyslogMsg')

const TelnetUserSchema = z
  .object({
    groups: z.array(z.string()).exactOptional(),
    hasPassword: z.int32().exactOptional(),
    password: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TelnetUser')

const TimerScriptSchema = z
  .object({
    arg: z.string().exactOptional(),
    interval: z.int32().exactOptional(),
    script: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimerScript')

const TrapDestSchema = z
  .object({ IP: z.string().exactOptional(), port: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('TrapDest')

const TripletSchema = z
  .object({
    device: z.string().exactOptional(),
    mib: z.string().exactOptional(),
    scenario: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Triplet')

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postMimicAccessAddUserAgentsMaskRoute = createRoute({
  method: 'post',
  path: '/mimic/access/add/{user}/{agents}/{mask}',
  tags: ['Access'],
  summary: 'Adds/Overwrites the user entry in the access control database.',
  description: 'Adds/Overwrites the user entry in the access control database.',
  operationId: 'access_add',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description: 'Username of the simulator hosting system',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
      agents: z
        .string()
        .openapi({
          param: {
            description: 'Agent range in minimal range representation',
            in: 'path',
            name: 'agents',
            required: true,
            schema: { type: 'string' },
          },
        }),
      mask: z
        .string()
        .openapi({
          param: {
            description: 'Currently not used',
            in: 'path',
            name: 'mask',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAccessDelUserRoute = createRoute({
  method: 'delete',
  path: '/mimic/access/del/{user}',
  tags: ['Access'],
  summary: 'Clears a users entry from access control database.',
  description: "Using '*' for user clears all the users.",
  operationId: 'access_del',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description: 'username of the simulator hosting system',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAccessGetAcldbRoute = createRoute({
  method: 'get',
  path: '/mimic/access/get/acldb',
  tags: ['Access'],
  summary: 'Returns the current access control database in use.',
  description: 'If nothing is specified then this returns "".',
  operationId: 'access_get_acldb',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAccessGetAdmindirRoute = createRoute({
  method: 'get',
  path: '/mimic/access/get/admindir',
  tags: ['Access'],
  summary: 'Returns the current admin directory.',
  description:
    'If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )',
  operationId: 'access_get_admindir',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAccessGetAdminuserRoute = createRoute({
  method: 'get',
  path: '/mimic/access/get/adminuser',
  tags: ['Access'],
  summary: 'Returns the current administrator.',
  description: 'If nothing is specified in admin/settings.cfg then returns "".',
  operationId: 'access_get_adminuser',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAccessGetEnabledRoute = createRoute({
  method: 'get',
  path: '/mimic/access/get/enabled',
  tags: ['Access'],
  summary: 'Returns the state of access control checking.',
  description: '0 indicates that it is disabled, 1 indicates it is enabled.',
  operationId: 'access_get_enabled',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAccessListRoute = createRoute({
  method: 'get',
  path: '/mimic/access/list',
  tags: ['Access'],
  summary: 'Returns an array of entries.',
  description:
    'Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).',
  operationId: 'access_list',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(AccessEntrySchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAccessLoadFilenameRoute = createRoute({
  method: 'put',
  path: '/mimic/access/load/{filename}',
  tags: ['Access'],
  summary: 'Loads the specified file for access control data.',
  description: "If filename is not specified then the currently set 'acldb' parameter is used.",
  operationId: 'access_load',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Filename to load',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAccessSaveFilenameRoute = createRoute({
  method: 'put',
  path: '/mimic/access/save/{filename}',
  tags: ['Access'],
  summary: 'Saves current access control data in specified file.',
  description: "If filename is not specified then the currently set 'acldb' parameter is used.",
  operationId: 'access_save',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Filename to save',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAccessSetAcldbDatabaseNameRoute = createRoute({
  method: 'put',
  path: '/mimic/access/set/acldb/{databaseName}',
  tags: ['Access'],
  summary: 'Allows setting the name of the current access control database.',
  description: 'This will be used for subsequent load and save operations.',
  operationId: 'access_set_acldb',
  request: {
    params: z.object({
      databaseName: z
        .string()
        .openapi({
          param: {
            description: 'Database name to use',
            in: 'path',
            name: 'databaseName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAccessSetEnabledEnabledOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/access/set/enabled/{enabledOrNot}',
  tags: ['Access'],
  summary: 'Allows the user to enable/disable the access control check.',
  description: '0 indicates disabled, 1 indicates enabled.',
  operationId: 'access_set_enabled',
  request: {
    params: z.object({
      enabledOrNot: z
        .string()
        .openapi({
          param: {
            description: 'indicator',
            in: 'path',
            name: 'enabledOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumAddIPRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/add/{IP}',
  tags: ['Agent'],
  summary: 'Add an agent.',
  description: 'Add an agent.',
  operationId: 'new',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'Primary IP',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Created agent object',
      content: {
        'application/json': {
          schema: z.array(TripletSchema).openapi({ description: 'Triplet array' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumFromAddIPPortRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/from/add/{IP}/{port}',
  tags: ['Agent'],
  summary: 'Add a source address that the agent will accept messages from.',
  description:
    'An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.',
  operationId: 'from_add',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the IP source',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP of the port, 0.0.0.0 for any',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'port of the source, 0 for any',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumFromDeleteIPPortRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/from/delete/{IP}/{port}',
  tags: ['Agent'],
  summary: 'delete a source address that the agent will accept messages from.',
  description:
    'An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.',
  operationId: 'from_del',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to delete the IP source',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP of the source',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'port of the source',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumFromListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/from/list',
  tags: ['Agent'],
  summary: 'List the source addresses that the agent will accept messages from.',
  description:
    'This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.',
  operationId: 'from_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the IP sources',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(IPSourceSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetChangedRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/changed',
  tags: ['Agent'],
  summary: 'has the agent value space changed?',
  description: 'has the agent value space changed?',
  operationId: 'get_changed',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the indicator',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetConfigChangedRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/config_changed',
  tags: ['Agent'],
  summary: 'has the lab configuration changed?',
  description: 'has the lab configuration changed?',
  operationId: 'get_config_changed',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the indicator',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetDelayRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/delay',
  tags: ['Agent'],
  summary: 'one-way transit delay in msec.',
  description: 'The minimum granularity is 10 msec.',
  operationId: 'get_delay',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the delay time',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/start',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetDropsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/drops',
  tags: ['Agent'],
  summary: 'drop rate (every N-th PDU). 0 means no drops.',
  description: 'drop rate (every N-th PDU). 0 means no drops.',
  operationId: 'get_drops',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the drop rate',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetHostRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/host',
  tags: ['Agent'],
  summary: 'host address of the agent.',
  description:
    'Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.',
  operationId: 'get_host',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'string', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}',
          parameters: {
            agentNum: '$request.body#/agentNum',
            instance: '$response.body#',
            object: 'ipAdEntIfIndex',
            variable: 'v',
          },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetInformTimeoutRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/inform_timeout',
  tags: ['Agent'],
  summary: 'timeout in seconds for retransmitting INFORM PDUs.',
  description:
    'The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.',
  operationId: 'get_inform_timeout',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the timeout setting',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetInterfaceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/interface',
  tags: ['Agent'],
  summary: 'network interface card for the agent.',
  description: 'network interface card for the agent.',
  operationId: 'get_interface',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary interface',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'string', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/mask',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetMaskRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/mask',
  tags: ['Agent'],
  summary: 'subnet mask of the agent.',
  description: 'subnet mask of the agent.',
  operationId: 'get_mask',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary interface',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'string', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/port',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetMibsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/mibs',
  tags: ['Agent'],
  summary: 'set of MIBs, simulations and scenarios',
  description: 'set of MIBs, simulations and scenarios',
  operationId: 'get_mibs',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the MIB triplets',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TripletSchema) } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/sim',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetNumStartsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/num_starts',
  tags: ['Agent'],
  summary: 'number of starts for the agent.',
  description:
    'This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.',
  operationId: 'get_number_starts',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the count',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetOiddirRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/oiddir',
  tags: ['Agent'],
  summary: 'MIB directory of the agent.',
  description: 'MIB directory of the agent.',
  operationId: 'get_oiddir',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the directory path',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetOwnerRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/owner',
  tags: ['Agent'],
  summary: 'owner of the agent.',
  description: 'owner of the agent.',
  operationId: 'get_owner',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the owner',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetPdusizeRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/pdusize',
  tags: ['Agent'],
  summary: 'maximum PDU size.',
  description: 'The limit for this configurable is 65536.',
  operationId: 'get_pdusize',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the PDU size',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetPortRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/port',
  tags: ['Agent'],
  summary: 'port number',
  description: 'port number',
  operationId: 'get_port',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary SNMP port',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/protocol',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetPrivdirRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/privdir',
  tags: ['Agent'],
  summary: 'private directory of the agent.',
  description: 'private directory of the agent.',
  operationId: 'get_privdir',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the directory path',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetProtocolRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/protocol',
  tags: ['Agent'],
  summary: 'protocols supported by agent',
  description: 'protocols supported by agent as an array of strings',
  operationId: 'get_protocols',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the protocols arrary',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/protocol/{prot}/get/config',
          parameters: { agentNum: '$request.body#/agentNum', prot: '$response.body#' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetReadRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/read',
  tags: ['Agent'],
  summary: 'read community string',
  description: 'read community string',
  operationId: 'get_read_community',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the SNMP read community string',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/write',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetScenRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/scen',
  tags: ['Agent'],
  summary: 'first scenario name',
  description: 'first scenario name',
  operationId: 'get_scen',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the first scenario number',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetSimRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/sim',
  tags: ['Agent'],
  summary: 'first simulation name',
  description: 'first simulation name',
  operationId: 'get_sim',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the first simulation name',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/scen',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetStartRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/start',
  tags: ['Agent'],
  summary: 'relative start time',
  description: 'relative start time',
  operationId: 'get_starttime',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the relative start time',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/mibs',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetStateRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/state',
  tags: ['Agent'],
  summary: 'current running state of the agent',
  description: '0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping',
  operationId: 'get_agent_state',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetStateChangedRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/state_changed',
  tags: ['Agent'],
  summary: 'has the agent state changed?',
  description: 'has the agent state changed?',
  operationId: 'get_state_changed',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the indicator',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/statistics',
  tags: ['Agent'],
  summary: 'current statistics of the agent instance',
  description:
    'The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT',
  operationId: 'get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/trace',
  tags: ['Agent'],
  summary: 'SNMP PDU tracing',
  description: 'SNMP PDU tracing',
  operationId: 'get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the indicator',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetValidateRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/validate',
  tags: ['Agent'],
  summary: 'SNMP SET validation policy.',
  description:
    'Is a bitmask in which with the following bits (from LSB) check for type, length, range, access',
  operationId: 'get_validate',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the bitmask integer',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumGetWriteRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/get/write',
  tags: ['Agent'],
  summary: 'write community string',
  description: 'write community string',
  operationId: 'get_write_community',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the SNMP write community string',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/delay',
          parameters: { agentNum: '$request.body#/agentNum' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumHaltRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/halt',
  tags: ['Agent'],
  summary: 'Halt the current agent.',
  description: 'Halt the current agent.',
  operationId: 'halt',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumIpaliasAddIPPortMaskInterfaceRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}',
  tags: ['Agent'],
  summary: 'Adds a new ipalias for the agent.',
  description:
    'port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.',
  operationId: 'add_ipalias',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP address , IPv4 or IPv6',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'SNMP port , 0 or empty for default',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      mask: z
        .string()
        .openapi({
          param: {
            description: 'Netmask, empty for default',
            in: 'path',
            name: 'mask',
            required: true,
            schema: { type: 'string' },
          },
        }),
      interface: z
        .string()
        .openapi({
          param: {
            description: 'Interface. Empty for default',
            in: 'path',
            name: 'interface',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumIpaliasDeleteIPPortRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}',
  tags: ['Agent'],
  summary: 'Deletes an existing ipalias from the agent.',
  description: 'port defaults to 161 if not specified.',
  operationId: 'del_ipalias',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to delete the IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP address , IPv4 or IPv6',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'SNMP port , 0 or empty for default',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumIpaliasListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/ipalias/list',
  tags: ['Agent'],
  summary: 'Lists all the additional ipaliases configured for the agent.',
  description:
    'The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.',
  operationId: 'list_ipaliases',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the IP alias list',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(IPAliasSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumIpaliasStartIPPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/ipalias/start/{IP}/{port}',
  tags: ['Agent'],
  summary: 'Starts an existing ipalias for the agent.',
  description: 'port defaults to 161 if not specified.',
  operationId: 'start_ipalias',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to start the IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP address , IPv4 or IPv6',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'SNMP port , 0 or empty for default',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumIpaliasStatusIPPortRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/ipalias/status/{IP}/{port}',
  tags: ['Agent'],
  summary: 'Returns the status (0=down, 1=up) of an existing ipalias for the agent.',
  description: 'port defaults to 161 if not specified.',
  operationId: 'status_ipalias',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show status of the IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP address , IPv4 or IPv6',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'SNMP port , 0 or empty for default',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumIpaliasStopIPPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}',
  tags: ['Agent'],
  summary: 'Stops an existing ipalias for the agent.',
  description: 'port defaults to 161 if not specified.',
  operationId: 'stop_ipalias',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to stop the IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP address , IPv4 or IPv6',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'SNMP port , 0 or empty for default',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumPauseRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/pause',
  tags: ['Agent'],
  summary: 'Pause the current agent.',
  description: 'Pause the current agent.',
  operationId: 'pause_now',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgCoapGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/coap/get/args',
  tags: ['COAP'],
  summary: "Show the agent's COAP argument structure",
  description: "Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_coap_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the COAP argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgCoapGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/coap/get/config',
  tags: ['COAP'],
  summary: "Show the agent's COAP configuration",
  description: "Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_coap_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the COAP configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigCOAPSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgCoapGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/coap/get/statistics',
  tags: ['COAP'],
  summary: "Show the agent's COAP statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_coap_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show COAP statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgCoapGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/coap/get/trace',
  tags: ['COAP'],
  summary: "Show the agent's COAP traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_coap_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether COAP tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigCOAPSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgCoapSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}',
  tags: ['COAP'],
  summary: "Set the agent's COAP configuration",
  description: "Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_coap_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the COAP configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the COAP configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the COAP configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgCoapSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}',
  tags: ['COAP'],
  summary: "Set the agent's COAP traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_coap_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the COAP tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the COAP tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgDhcpGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args',
  tags: ['DHCP'],
  summary: "Show the agent's DHCP argument structure",
  description: "Agent's DHCP configuration particulars",
  operationId: 'protocol_dhcp_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the DHCP argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgDhcpGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config',
  tags: ['DHCP'],
  summary: "Show the agent's DHCP configuration",
  description: "Agent's DHCP configuration hwaddr,classid,add_options,script",
  operationId: 'protocol_dhcp_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the DHCP configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigDHCPSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgDhcpGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics',
  tags: ['DHCP'],
  summary: "Show the agent's DHCP statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_dhcp_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show DHCP statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgDhcpGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace',
  tags: ['DHCP'],
  summary: "Show the agent's DHCP traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_dhcp_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether DHCP tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigDHCPSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgDhcpParamsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/dhcp/params',
  tags: ['DHCP'],
  summary: 'Show the parameters configured by the server in its DHCP-OFFER message',
  description: 'DHCP-OFFER message parameters',
  operationId: 'protocol_dhcp_params',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show DHCP DHCP-OFFER message',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.object({})) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgDhcpSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}',
  tags: ['DHCP'],
  summary: "Set the agent's DHCP configuration",
  description: "Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_dhcp_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the DHCP configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the DHCP configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the DHCP configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgDhcpSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}',
  tags: ['DHCP'],
  summary: "Set the agent's DHCP traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_dhcp_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the DHCP tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the DHCP tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgIpmiGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args',
  tags: ['IPMI'],
  summary: "Show the agent's IPMI argument structure",
  description: "Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_ipmi_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the IPMI argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgIpmiGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config',
  tags: ['IPMI'],
  summary: "Show the agent's IPMI configuration",
  description: "Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_ipmi_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the IPMI configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigIPMISchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgIpmiGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics',
  tags: ['IPMI'],
  summary: "Show the agent's IPMI statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_ipmi_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show IPMI statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgIpmiGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace',
  tags: ['IPMI'],
  summary: "Show the agent's IPMI traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_ipmi_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether IPMI tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigIPMISchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgIpmiGetAttrRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}',
  tags: ['IPMI'],
  summary: "Show the outgoing message's attributes",
  description: 'Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N',
  operationId: 'protocol_ipmi_get_attr',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the IPMI tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            description: 'Attribute',
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgIpmiSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}',
  tags: ['IPMI'],
  summary: "Set the agent's IPMI configuration",
  description: "Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_ipmi_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the IPMI configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the IPMI configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the IPMI configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgIpmiSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}',
  tags: ['IPMI'],
  summary: "Set the agent's IPMI traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_ipmi_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the IPMI tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the IPMI tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgIpmiSetAttrValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}',
  tags: ['IPMI'],
  summary: "Set the outgoing message's attributes",
  description: 'Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N',
  operationId: 'protocol_ipmi_set_attr',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the IPMI tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            description: 'Attribute',
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: { in: 'path', name: 'value', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttClientGetProtstateRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate',
  tags: ['MQTT'],
  summary: "Show the agent's MQTT TCP connection state",
  description:
    '0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state',
  operationId: 'protocol_mqtt_client_get_protstate',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show MQTT state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttClientGetStateRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state',
  tags: ['MQTT'],
  summary: "Show the agent's MQTT state",
  description: '0 means stopped, 1 means running',
  operationId: 'protocol_mqtt_client_get_state',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show MQTT state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttClientMessageCardRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card',
  tags: ['MQTT'],
  summary: "Show the agent's current messages' cardinality",
  description: '0 or more',
  operationId: 'protocol_mqtt_client_message_card',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show MQTT message state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttClientMessageGetMsgNumAttrRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}',
  tags: ['MQTT'],
  summary: "Show the agent's message attributes",
  description:
    'Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)',
  operationId: 'protocol_mqtt_client_message_get',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show MQTT state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      msgNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Message Number',
            in: 'path',
            name: 'msgNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            description: 'Attribute',
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientMessageSetMsgNumAttrValueRoute = createRoute(
  {
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}',
    tags: ['MQTT'],
    summary: "Set the agent's message attributes",
    description:
      'Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.',
    operationId: 'protocol_mqtt_client_message_set',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to show MQTT state',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        msgNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Message Number',
              in: 'path',
              name: 'msgNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        attr: z
          .string()
          .openapi({
            param: {
              description: 'Attribute',
              in: 'path',
              name: 'attr',
              required: true,
              schema: { type: 'string' },
            },
          }),
        value: z
          .string()
          .openapi({
            param: {
              description: 'Value',
              in: 'path',
              name: 'value',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.array(z.string()) } },
      },
      400: { description: 'Invalid agent number value' },
    },
  },
)

export const putMimicAgentAgentNumProtocolMsgMqttClientResubscribeSubNumRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}',
  tags: ['MQTT'],
  summary: 'Restart receiving messages from a subcription of the agent',
  description: 'Restarts a subscription',
  operationId: 'protocol_mqtt_client_resubscribe',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to change MQTT state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      subNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Subscription Number',
            in: 'path',
            name: 'subNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientRuntimeAbortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort',
  tags: ['MQTT'],
  summary: "Abort agent's MQTT TCP session without sending DISCONNECT command",
  description: 'Abort a connection',
  operationId: 'protocol_mqtt_client_runtime_abort',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT behavior',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientRuntimeConnectRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect',
  tags: ['MQTT'],
  summary: "Start agent's MQTT TCP session",
  description: 'Start a connection',
  operationId: 'protocol_mqtt_client_runtime_connect',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT behavior',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientRuntimeDisconnectRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect',
  tags: ['MQTT'],
  summary: "Disconnect agent's MQTT TCP session by sending DISCONNECT command",
  description: 'Graceful disconnect',
  operationId: 'protocol_mqtt_client_runtime_disconnect',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT behavior',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetBrokerBrokerAddrRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT TCP connection target broker",
  description: 'Broker IP address',
  operationId: 'protocol_mqtt_client_set_broker',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      brokerAddr: z
        .string()
        .openapi({
          param: {
            description: 'Broker address',
            in: 'path',
            name: 'brokerAddr',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetCleansessionCleanOrNotRoute = createRoute(
  {
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}',
    tags: ['MQTT'],
    summary: "Set the agent's MQTT session",
    description: '1 for clean session , 0 not',
    operationId: 'protocol_mqtt_client_set_cleansession',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to set MQTT config',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        cleanOrNot: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Clean session',
              in: 'path',
              name: 'cleanOrNot',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.array(z.int32()) } },
      },
      400: { description: 'Invalid agent number value' },
    },
  },
)

export const putMimicAgentAgentNumProtocolMsgMqttClientSetClientidClientIDRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT client ID",
  description: 'MQTT client ID',
  operationId: 'protocol_mqtt_client_set_clientid',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      clientID: z
        .string()
        .openapi({
          param: {
            description: 'Client ID',
            in: 'path',
            name: 'clientID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetKeepaliveAliveTimeRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT TCP keepalive",
  description: 'Keep alive the TCP connection',
  operationId: 'protocol_mqtt_client_set_keepalive',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      aliveTime: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'period to send keepalive messages',
            in: 'path',
            name: 'aliveTime',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetOnDisconnectActionRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT disconnection action",
  description: 'Action to take when MQTT session is disconnected',
  operationId: 'protocol_mqtt_client_set_on_disconnect',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      action: z
        .string()
        .openapi({
          param: {
            description: 'Action to take',
            in: 'path',
            name: 'action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetPasswordPasswordRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT client password",
  description: 'Client password',
  operationId: 'protocol_mqtt_client_set_password',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            description: 'Password',
            in: 'path',
            name: 'password',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetPortPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT TCP connection target port",
  description: 'target TCP port',
  operationId: 'protocol_mqtt_client_set_port',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .string()
        .openapi({
          param: {
            description: 'TCP port',
            in: 'path',
            name: 'port',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetUsernameUsernameRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT client username",
  description: 'Client username',
  operationId: 'protocol_mqtt_client_set_username',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      username: z
        .string()
        .openapi({
          param: {
            description: 'User name',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetWillmsgMsgRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT client's will",
  description: 'Will message',
  operationId: 'protocol_mqtt_client_set_willmsg',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      msg: z
        .string()
        .openapi({
          param: {
            description: 'Will message',
            in: 'path',
            name: 'msg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetWillqosQosRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT will message's QOS field",
  description: 'QOS field',
  operationId: 'protocol_mqtt_client_set_willqos',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      qos: z
        .string()
        .openapi({
          param: {
            description: 'Quality of service field',
            in: 'path',
            name: 'qos',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetWillretainRetainRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT retained will",
  description: 'Retaining will',
  operationId: 'protocol_mqtt_client_set_willretain',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      retain: z
        .string()
        .openapi({
          param: {
            description: 'Retaining will',
            in: 'path',
            name: 'retain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSetWilltopicTopicRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT client will's topic",
  description: 'Will topic for the will message',
  operationId: 'protocol_mqtt_client_set_willtopic',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set MQTT config',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      topic: z
        .string()
        .openapi({
          param: {
            description: 'topic',
            in: 'path',
            name: 'topic',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttClientSubscribeCardRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card',
  tags: ['MQTT'],
  summary: "Show the agent's current subscriptions' cardinality",
  description: '0 or more',
  operationId: 'protocol_mqtt_client_subscribe_card',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show MQTT subscription state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttClientSubscribeGetSubNumAttrRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}',
  tags: ['MQTT'],
  summary: "Show the agent's subscription attributes",
  description:
    'Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)',
  operationId: 'protocol_mqtt_client_subscribe_get',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show MQTT state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      subNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Subscribe Number',
            in: 'path',
            name: 'subNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            description: 'Attribute',
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttClientSubscribeSetSubNumAttrValueRoute =
  createRoute({
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}',
    tags: ['MQTT'],
    summary: "Set the agent's subscribe attributes",
    description: 'Attribute can not be properties .',
    operationId: 'protocol_mqtt_client_subscribe_set',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to show MQTT state',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        subNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Subscribe Number',
              in: 'path',
              name: 'subNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        attr: z
          .string()
          .openapi({
            param: {
              description: 'Attribute',
              in: 'path',
              name: 'attr',
              required: true,
              schema: { type: 'string' },
            },
          }),
        value: z
          .string()
          .openapi({
            param: {
              description: 'Value',
              in: 'path',
              name: 'value',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.array(z.string()) } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const putMimicAgentAgentNumProtocolMsgMqttClientUnsubscribeSubNumRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}',
  tags: ['MQTT'],
  summary: 'Stops receiving messages from a subcription of the agent',
  description: 'Stops a subscription',
  operationId: 'protocol_mqtt_client_unsubscribe',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to change MQTT state',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      subNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Subscription Number',
            in: 'path',
            name: 'subNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args',
  tags: ['MQTT'],
  summary: "Show the agent's MQTT argument structure",
  description: "Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_mqtt_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the MQTT argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config',
  tags: ['MQTT'],
  summary: "Show the agent's MQTT configuration",
  description: "Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_mqtt_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the MQTT configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigMQTTSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics',
  tags: ['MQTT'],
  summary: "Show the agent's MQTT statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_mqtt_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show MQTT statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgMqttGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace',
  tags: ['MQTT'],
  summary: "Show the agent's MQTT traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_mqtt_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether MQTT tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigMQTTSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT configuration",
  description: "Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_mqtt_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the MQTT configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the MQTT configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the MQTT configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgMqttSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}',
  tags: ['MQTT'],
  summary: "Set the agent's MQTT traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_mqtt_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the MQTT tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the MQTT tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgNetflowFlowChangeDfsIntervalIntervalRoute =
  createRoute({
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}',
    tags: ['NETFLOW'],
    summary: 'Change NETFLOW data export interval',
    description: 'Interval in msec .',
    operationId: 'protocol_netflow_change_dfs',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to set the NETFLOW',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        interval: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'NETFLOW export interval',
              in: 'path',
              name: 'interval',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const putMimicAgentAgentNumProtocolMsgNetflowFlowChangeTfsIntervalIntervalRoute =
  createRoute({
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}',
    tags: ['NETFLOW'],
    summary: 'Change NETFLOW template export interval',
    description: 'Interval in msec .',
    operationId: 'protocol_netflow_change_tfs',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to set the NETFLOW',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        interval: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'NETFLOW export interval',
              in: 'path',
              name: 'interval',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const putMimicAgentAgentNumProtocolMsgNetflowFlowChangeFlowsetUidFieldNumAttrValueRoute =
  createRoute({
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}',
    tags: ['NETFLOW'],
    summary: 'Change NETFLOW export attributes',
    description: 'Change attributes',
    operationId: 'protocol_netflow_change_attr',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to set the NETFLOW',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        'flowset-uid': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'flowset-uid',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        'field-num': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'field-num',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        attr: z
          .string()
          .openapi({
            param: { in: 'path', name: 'attr', required: true, schema: { type: 'string' } },
          }),
        value: z
          .string()
          .openapi({
            param: { in: 'path', name: 'value', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const getMimicAgentAgentNumProtocolMsgNetflowFlowListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list',
  tags: ['NETFLOW'],
  summary: 'Show list of NETFLOW exports',
  description: 'Show list of NETFLOW exports',
  operationId: 'protocol_netflow_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show NETFLOW statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.object({})) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgNetflowGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/get/args',
  tags: ['NETFLOW'],
  summary: "Show the agent's NETFLOW argument structure",
  description: "Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_netflow_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the NETFLOW argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgNetflowGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/get/config',
  tags: ['NETFLOW'],
  summary: "Show the agent's NETFLOW configuration",
  description: "Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_netflow_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the NETFLOW configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigNETFLOWSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgNetflowGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics',
  tags: ['NETFLOW'],
  summary: "Show the agent's NETFLOW statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_netflow_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show NETFLOW statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgNetflowGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace',
  tags: ['NETFLOW'],
  summary: "Show the agent's NETFLOW traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_netflow_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether NETFLOW tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigNETFLOWSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgNetflowHaltRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/halt',
  tags: ['NETFLOW'],
  summary: 'Halt NETFLOW traffic',
  description: 'Halt NETFLOW traffic',
  operationId: 'protocol_netflow_halt',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the NETFLOW',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgNetflowReloadRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/reload',
  tags: ['NETFLOW'],
  summary: 'Reload NETFLOW configuration before resuming traffic',
  description: 'Reload NETFLOW configuration before resuming traffic',
  operationId: 'protocol_netflow_reload',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the NETFLOW',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgNetflowResumeRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/resume',
  tags: ['NETFLOW'],
  summary: 'Resuming traffic',
  description: 'Resuming traffic',
  operationId: 'protocol_netflow_resume',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the NETFLOW',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgNetflowSetCollectorCollectorIPRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}',
  tags: ['NETFLOW'],
  summary: 'Swap NETFLOW collector',
  description: 'Allow changing collector without stopping agent',
  operationId: 'protocol_netflow_set_collector',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the NETFLOW',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      collectorIP: z
        .string()
        .openapi({
          param: {
            description: 'file name to load config',
            in: 'path',
            name: 'collectorIP',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgNetflowSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}',
  tags: ['NETFLOW'],
  summary: "Set the agent's NETFLOW configuration",
  description: "Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_netflow_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the NETFLOW configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the NETFLOW configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the NETFLOW configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgNetflowSetFilenameFileNameRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}',
  tags: ['NETFLOW'],
  summary: 'Swap NETFLOW configuration file',
  description: 'Allow reloading the configuration file for an agent without stopping agent',
  operationId: 'protocol_netflow_set_fileName',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the NETFLOW',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: 'file name to load config',
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgNetflowSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}',
  tags: ['NETFLOW'],
  summary: "Set the agent's NETFLOW traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_netflow_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the NETFLOW tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the NETFLOW tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgProxyGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/get/args',
  tags: ['PROXY'],
  summary: "Show the agent's PROXY argument structure",
  description: "Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_proxy_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the PROXY argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgProxyGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/get/config',
  tags: ['PROXY'],
  summary: "Show the agent's PROXY configuration",
  description: "Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_proxy_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the PROXY configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigPROXYSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgProxyGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics',
  tags: ['PROXY'],
  summary: "Show the agent's PROXY statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_proxy_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show PROXY statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgProxyGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/get/trace',
  tags: ['PROXY'],
  summary: "Show the agent's PROXY traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_proxy_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether PROXY tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigPROXYSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgProxyPortAddPortTargetTargetPortRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}',
  tags: ['PROXY'],
  summary: 'Add individual proxy target on the agent and the simulator host',
  description: 'Additional proxy target',
  operationId: 'protocol_proxy_port_add',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate PROXY target',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      target: z
        .string()
        .openapi({
          param: { in: 'path', name: 'target', required: true, schema: { type: 'string' } },
        }),
      targetPort: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'targetPort',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgProxyPortIsStartedPortRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}',
  tags: ['PROXY'],
  summary: 'Check individual target',
  description: 'Check individual target',
  operationId: 'protocol_proxy_port_isstarted',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate PROXY target',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgProxyPortListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/port/list',
  tags: ['PROXY'],
  summary: 'List all proxy targets',
  operationId: 'protocol_proxy_port_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate PROXY target',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumProtocolMsgProxyPortRemovePortRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}',
  tags: ['PROXY'],
  summary: 'Remove individual proxy target on the agent and the simulator host',
  description: 'Remove proxy target',
  operationId: 'protocol_proxy_port_remove',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate PROXY target',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgProxyPortStartPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}',
  tags: ['PROXY'],
  summary: 'Start additional target',
  description: 'Start additional target',
  operationId: 'protocol_proxy_port_start',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate PROXY target',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgProxyPortStopPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}',
  tags: ['PROXY'],
  summary: 'Stop additional target',
  description: 'Stop additional target',
  operationId: 'protocol_proxy_port_stop',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate PROXY target',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgProxySetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}',
  tags: ['PROXY'],
  summary: "Set the agent's PROXY configuration",
  description: "Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_proxy_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the PROXY configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the PROXY configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the PROXY configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgProxySetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}',
  tags: ['PROXY'],
  summary: "Set the agent's PROXY traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_proxy_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the PROXY tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the PROXY tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSflowGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/get/args',
  tags: ['SFLOW'],
  summary: "Show the agent's SFLOW argument structure",
  description: "Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_sflow_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SFLOW argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSflowGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/get/config',
  tags: ['SFLOW'],
  summary: "Show the agent's SFLOW configuration",
  description: "Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_sflow_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SFLOW configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSFLOWSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSflowGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics',
  tags: ['SFLOW'],
  summary: "Show the agent's SFLOW statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_sflow_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show SFLOW statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSflowGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/get/trace',
  tags: ['SFLOW'],
  summary: "Show the agent's SFLOW traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_sflow_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether SFLOW tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSFLOWSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSflowHaltRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/halt',
  tags: ['SFLOW'],
  summary: 'Halt SFLOW traffic',
  description: 'Halt SFLOW traffic',
  operationId: 'protocol_sflow_halt',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SFLOW',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSflowReloadRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/reload',
  tags: ['SFLOW'],
  summary: 'Reload SFLOW configuration before resuming traffic',
  description: 'Reload SFLOW configuration before resuming traffic',
  operationId: 'protocol_sflow_reload',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SFLOW',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSflowResumeRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/resume',
  tags: ['SFLOW'],
  summary: 'Resuming traffic',
  description: 'Resuming traffic',
  operationId: 'protocol_sflow_resume',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SFLOW',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSflowSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}',
  tags: ['SFLOW'],
  summary: "Set the agent's SFLOW configuration",
  description: "Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_sflow_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SFLOW configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the SFLOW configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the SFLOW configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSflowSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}',
  tags: ['SFLOW'],
  summary: "Set the agent's SFLOW traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_sflow_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SFLOW tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the SFLOW tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmptcpGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args',
  tags: ['SNMPTCP'],
  summary: "Show the agent's SNMPTCP argument structure",
  description: "Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_snmptcp_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPTCP argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmptcpGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config',
  tags: ['SNMPTCP'],
  summary: "Show the agent's SNMPTCP configuration",
  description: "Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_snmptcp_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPTCP configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSNMPTCPSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmptcpGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics',
  tags: ['SNMPTCP'],
  summary: "Show the agent's SNMPTCP statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_snmptcp_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show SNMPTCP statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmptcpGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace',
  tags: ['SNMPTCP'],
  summary: "Show the agent's SNMPTCP traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_snmptcp_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether SNMPTCP tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSNMPTCPSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasDisableIpaddressPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}',
  tags: ['SNMPTCP'],
  summary: 'Disable individual IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_snmptcp_ipalias_disable',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate SNMPTCP IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ipaddress: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmptcpIpaliasEnableIpaddressPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}',
  tags: ['SNMPTCP'],
  summary: 'Enable individual IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_snmptcp_ipalias_enable',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate SNMPTCP IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ipaddress: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasIsenabledIpaddressPortRoute =
  createRoute({
    method: 'get',
    path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}',
    tags: ['SNMPTCP'],
    summary: 'Check individual IP aliases on the agent and the simulator host',
    description:
      'By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent',
    operationId: 'protocol_snmptcp_ipalias_isenabled',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to manipulate SNMPTCP IP alias',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        ipaddress: z
          .string()
          .openapi({
            param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
          }),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'port',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const getMimicAgentAgentNumProtocolMsgSnmptcpIpaliasListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list',
  tags: ['SNMPTCP'],
  summary: 'List all IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_snmptcp_ipalias_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate SNMPTCP IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(IPAliasSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmptcpSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}',
  tags: ['SNMPTCP'],
  summary: "Set the agent's SNMPTCP configuration",
  description: "Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_snmptcp_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SNMPTCP configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the SNMPTCP configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the SNMPTCP configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmptcpSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}',
  tags: ['SNMPTCP'],
  summary: "Set the agent's SNMPTCP traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_snmptcp_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SNMPTCP tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the SNMPTCP tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgSnmpv3AccessAddGroupNamePrefixSecurityModelSecurityLevelContextMatchReadViewWriteViewNotifyViewRoute =
  createRoute({
    method: 'post',
    path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}',
    tags: ['SNMPv3'],
    summary: 'Adds a new access entry with the specified parameters.',
    description: 'Adds a new access entry with the specified parameters.',
    operationId: 'protocol_snmpv3_access_add',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to add the SNMPv3 access',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        groupName: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 access name',
              in: 'path',
              name: 'groupName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        prefix: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 prefix',
              in: 'path',
              name: 'prefix',
              required: true,
              schema: { type: 'string' },
            },
          }),
        securityModel: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 access security model',
              in: 'path',
              name: 'securityModel',
              required: true,
              schema: { type: 'string' },
            },
          }),
        securityLevel: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 access security level',
              in: 'path',
              name: 'securityLevel',
              required: true,
              schema: { type: 'string' },
            },
          }),
        contextMatch: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 access context match',
              in: 'path',
              name: 'contextMatch',
              required: true,
              schema: { type: 'string' },
            },
          }),
        readView: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 access read view',
              in: 'path',
              name: 'readView',
              required: true,
              schema: { type: 'string' },
            },
          }),
        writeView: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 access write view',
              in: 'path',
              name: 'writeView',
              required: true,
              schema: { type: 'string' },
            },
          }),
        notifyView: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 access notify view',
              in: 'path',
              name: 'notifyView',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessClearRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear',
  tags: ['SNMPv3'],
  summary: 'Clears all access entries.',
  description: 'Clears all access entries.',
  operationId: 'protocol_snmpv3_access_clear',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the SNMPv3 access',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3AccessDelAccessNameRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}',
  tags: ['SNMPv3'],
  summary: 'Deletes the specified access entry.',
  description: 'Deletes the specified access entry.',
  operationId: 'protocol_snmpv3_access_del',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the SNMPv3 access',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      accessName: z
        .string()
        .openapi({
          param: {
            description: 'SNMPv3 access name',
            in: 'path',
            name: 'accessName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3AccessListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list',
  tags: ['SNMPv3'],
  summary: 'Returns the current acccess entries as an array of strings.',
  description: 'Returns the current acccess entries as an array of strings.',
  operationId: 'protocol_snmpv3_access_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config',
  tags: ['SNMPv3'],
  summary: 'Returns the SNMPv3 configuration.',
  description: 'Returns the SNMPv3 configuration.',
  operationId: 'protocol_snmpv3_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSNMPv3Schema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetContextEngineidRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid',
  tags: ['SNMPv3'],
  summary: 'Retrieves the contextEngineID for the agent instance.',
  description: 'Retrieves the contextEngineID for the agent instance.',
  operationId: 'protocol_snmpv3_get_context_engineid',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 engine',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginebootsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots',
  tags: ['SNMPv3'],
  summary: 'Retrieves the number of times the agent has been restarted.',
  description: 'Retrieves the number of times the agent has been restarted.',
  operationId: 'protocol_snmpv3_get_engineboots',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 engine',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetEngineidRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid',
  tags: ['SNMPv3'],
  summary: 'For started agents, retrieves the current engineID in use by the snmpv3 module.',
  description:
    'For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \\x01 23 45 67 89...',
  operationId: 'protocol_snmpv3_get_engineid',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3GetEnginetimeRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime',
  tags: ['SNMPv3'],
  summary: 'Retrieves the time in seconds for which the agent has been running.',
  description: 'Retrieves the time in seconds for which the agent has been running.',
  operationId: 'protocol_snmpv3_get_enginetime',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 engine',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgSnmpv3GroupAddGroupNameSecurityModelSecurityNameRoute =
  createRoute({
    method: 'post',
    path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}',
    tags: ['SNMPv3'],
    summary: 'Adds a new group entry with the specified parameters.',
    description: 'Adds a new group entry with the specified parameters.',
    operationId: 'protocol_snmpv3_group_add',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to add the SNMPv3 group',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        groupName: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 group name',
              in: 'path',
              name: 'groupName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        securityModel: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 group security model',
              in: 'path',
              name: 'securityModel',
              required: true,
              schema: { type: 'string' },
            },
          }),
        securityName: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 group security name',
              in: 'path',
              name: 'securityName',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupClearRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear',
  tags: ['SNMPv3'],
  summary: 'Clears all group entries.',
  description: 'Clears all group entries.',
  operationId: 'protocol_snmpv3_group_clear',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the SNMPv3 group',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3GroupDelGroupNameRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}',
  tags: ['SNMPv3'],
  summary: 'Deletes the specified group entry.',
  description: 'Deletes the specified group entry.',
  operationId: 'protocol_snmpv3_group_del',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the SNMPv3 group',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      groupName: z
        .string()
        .openapi({
          param: {
            description: 'SNMPv3 group name',
            in: 'path',
            name: 'groupName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3GroupListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list',
  tags: ['SNMPv3'],
  summary: 'Returns the current group entries as an array of strings.',
  description: 'Returns the current group entries as an array of strings.',
  operationId: 'protocol_snmpv3_group_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmpv3SetConfigParameterValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}',
  tags: ['SNMPv3'],
  summary: 'Changes the SNMPv3 configuration.',
  description: 'Changes the SNMPv3 configuration.',
  operationId: 'protocol_snmpv3_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      parameter: z
        .string()
        .openapi({
          param: {
            description: 'SNMPv3 configuration parameter',
            in: 'path',
            name: 'parameter',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'SNMPv3 parameter value',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgSnmpv3UserAddUserNameSecurityNameAuthProtocolAuthKeyPrivProtocolPrivKeyRoute =
  createRoute({
    method: 'post',
    path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}',
    tags: ['SNMPv3'],
    summary: 'Adds a new user entry with the specified parameters.',
    description: 'Adds a new user entry with the specified parameters.',
    operationId: 'protocol_snmpv3_user_add',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to add the SNMPv3 user',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        userName: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 user name',
              in: 'path',
              name: 'userName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        securityName: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 user security name',
              in: 'path',
              name: 'securityName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        authProtocol: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 user authentication protocol',
              in: 'path',
              name: 'authProtocol',
              required: true,
              schema: { type: 'string' },
            },
          }),
        authKey: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 user authentication key',
              in: 'path',
              name: 'authKey',
              required: true,
              schema: { type: 'string' },
            },
          }),
        privProtocol: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 user privacy encryption protocol',
              in: 'path',
              name: 'privProtocol',
              required: true,
              schema: { type: 'string' },
            },
          }),
        privKey: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 user privacy encryption key',
              in: 'path',
              name: 'privKey',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3UserClearRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear',
  tags: ['SNMPv3'],
  summary: 'Clears all user entries.',
  description: 'Clears all user entries.',
  operationId: 'protocol_snmpv3_user_clear',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the SNMPv3 user',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3UserDelUserNameRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}',
  tags: ['SNMPv3'],
  summary: 'Deletes the specified user entry.',
  description: 'Deletes the specified user entry.',
  operationId: 'protocol_snmpv3_user_del',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the SNMPv3 user',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      userName: z
        .string()
        .openapi({
          param: {
            description: 'SNMPv3 user name',
            in: 'path',
            name: 'userName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3UserListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list',
  tags: ['SNMPv3'],
  summary: 'Returns the current user entries as a Tcl list.',
  description: 'Returns the current user entries as a Tcl list.',
  operationId: 'protocol_snmpv3_user_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save',
  tags: ['SNMPv3'],
  summary: 'Saves current user settings in the currently loaded USM config file.',
  description: 'Saves current user settings in the currently loaded USM config file.',
  operationId: 'protocol_snmpv3_usm_save',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmpv3UsmSaveasFilenameRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}',
  tags: ['SNMPv3'],
  summary: 'Saves current user settings in the specified USM config file.',
  description: 'Saves current user settings in the specified USM config file.',
  operationId: 'protocol_snmpv3_usm_saveas',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Filename to save',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save',
  tags: ['SNMPv3'],
  summary: 'Saves current group, access, view settings in the currently loaded VACM config file.',
  description:
    'Saves current group, access, view settings in the currently loaded VACM config file.',
  operationId: 'protocol_snmpv3_vacm_save',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSnmpv3VacmSaveasFilenameRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}',
  tags: ['SNMPv3'],
  summary: 'Saves current group, access, view settings in the specified VACM config file.',
  description: 'Saves current group, access, view settings in the specified VACM config file.',
  operationId: 'protocol_snmpv3_vacm_saveas',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      filename: z
        .string()
        .openapi({
          param: {
            description: 'Filename to save',
            in: 'path',
            name: 'filename',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgSnmpv3ViewAddViewNameViewTypeSubtreeMaskRoute =
  createRoute({
    method: 'post',
    path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}',
    tags: ['SNMPv3'],
    summary: 'Adds a new view entry with the specified parameters.',
    description: 'Adds a new view entry with the specified parameters.',
    operationId: 'protocol_snmpv3_view_add',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to add the SNMPv3 view',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        viewName: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 view name',
              in: 'path',
              name: 'viewName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        viewType: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 view type',
              in: 'path',
              name: 'viewType',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subtree: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 view subtree',
              in: 'path',
              name: 'subtree',
              required: true,
              schema: { type: 'string' },
            },
          }),
        mask: z
          .string()
          .openapi({
            param: {
              description: 'SNMPv3 view mask',
              in: 'path',
              name: 'mask',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewClearRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear',
  tags: ['SNMPv3'],
  summary: 'Clears all view entries.',
  description: 'Clears all view entries.',
  operationId: 'protocol_snmpv3_view_clear',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the SNMPv3 view',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumProtocolMsgSnmpv3ViewDelViewNameRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}',
  tags: ['SNMPv3'],
  summary: 'Deletes the specified view entry.',
  description: 'Deletes the specified view entry.',
  operationId: 'protocol_snmpv3_view_del',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the SNMPv3 view',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      viewName: z
        .string()
        .openapi({
          param: {
            description: 'SNMPv3 view name',
            in: 'path',
            name: 'viewName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSnmpv3ViewListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list',
  tags: ['SNMPv3'],
  summary: 'Returns the current view entries as an array of strings.',
  description: 'Returns the current view entries as an array of strings.',
  operationId: 'protocol_snmpv3_view_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SNMPv3 configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSshGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/get/args',
  tags: ['SSH'],
  summary: "Show the agent's SSH argument structure",
  description: "Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_ssh_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SSH argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSshGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/get/config',
  tags: ['SSH'],
  summary: "Show the agent's SSH configuration",
  description: "Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_ssh_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SSH configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSSHSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSshGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics',
  tags: ['SSH'],
  summary: "Show the agent's SSH statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_ssh_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show SSH statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSshGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/get/trace',
  tags: ['SSH'],
  summary: "Show the agent's SSH traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_ssh_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether SSH tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSSHSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSshIpaliasDisableIpaddressPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}',
  tags: ['SSH'],
  summary: 'Disable individual IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_ssh_ipalias_disable',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate SSH IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ipaddress: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSshIpaliasEnableIpaddressPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}',
  tags: ['SSH'],
  summary: 'Enable individual IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_ssh_ipalias_enable',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate SSH IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ipaddress: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSshIpaliasIsenabledIpaddressPortRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}',
  tags: ['SSH'],
  summary: 'Check individual IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_ssh_ipalias_isenabled',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate SSH IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ipaddress: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSshIpaliasListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list',
  tags: ['SSH'],
  summary: 'List all IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_ssh_ipalias_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate SSH IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(IPAliasSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSshSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}',
  tags: ['SSH'],
  summary: "Set the agent's SSH configuration",
  description: "Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_ssh_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SSH configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the SSH configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the SSH configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSshSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}',
  tags: ['SSH'],
  summary: "Set the agent's SSH traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_ssh_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SSH tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the SSH tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSyslogGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/get/args',
  tags: ['SYSLOG'],
  summary: "Show the agent's SYSLOG argument structure",
  description: "Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_syslog_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SYSLOG argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSyslogGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/get/config',
  tags: ['SYSLOG'],
  summary: "Show the agent's SYSLOG configuration",
  description: "Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_syslog_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the SYSLOG configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSYSLOGSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSyslogGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics',
  tags: ['SYSLOG'],
  summary: "Show the agent's SYSLOG statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_syslog_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show SYSLOG statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSyslogGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace',
  tags: ['SYSLOG'],
  summary: "Show the agent's SYSLOG traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_syslog_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether SYSLOG tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigSYSLOGSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgSyslogGetAttrRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}',
  tags: ['SYSLOG'],
  summary: "Show the outgoing message's attributes",
  description: 'Attribute can be server , sequence , separator , hostname , timestamp',
  operationId: 'protocol_syslog_get_attr',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SYSLOG tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            description: 'Attribute',
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgSyslogSendPriRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}',
  tags: ['SYSLOG'],
  summary: "Set the agent's SYSLOG traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_syslog_send',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SYSLOG tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      pri: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Message Priority',
            in: 'path',
            name: 'pri',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SyslogMsgSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSyslogSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}',
  tags: ['SYSLOG'],
  summary: "Set the agent's SYSLOG configuration",
  description: "Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_syslog_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SYSLOG configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the SYSLOG configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the SYSLOG configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSyslogSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}',
  tags: ['SYSLOG'],
  summary: "Set the agent's SYSLOG traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_syslog_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SYSLOG tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the SYSLOG tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgSyslogSetAttrValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}',
  tags: ['SYSLOG'],
  summary: "Set the outgoing message's attributes",
  description: 'Attribute can be server , sequence , separator , hostname , timestamp',
  operationId: 'protocol_syslog_set_attr',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SYSLOG tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            description: 'Attribute',
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: { in: 'path', name: 'value', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTelnetConnectionLogonConnectionIDUserPasswordRoute =
  createRoute({
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}',
    tags: ['TELNET'],
    summary: "Changes the connection's current logon.",
    description: 'Logon change allows (hidden) commands for a different access mode to run.',
    operationId: 'protocol_telnet_connection_logon',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to manipulate TELNET connection',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        connectionID: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'connectionID',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        user: z
          .string()
          .openapi({
            param: { in: 'path', name: 'user', required: true, schema: { type: 'string' } },
          }),
        password: z
          .string()
          .openapi({
            param: { in: 'path', name: 'password', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.array(z.string()) } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const putMimicAgentAgentNumProtocolMsgTelnetConnectionRequestConnectionIDCommandRoute =
  createRoute({
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}',
    tags: ['TELNET'],
    summary: 'Executes the command asynchronously .',
    description: 'Equivalent of the command typed in by the user.',
    operationId: 'protocol_telnet_connection_request',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to manipulate TELNET connection',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        connectionID: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'connectionID',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        command: z
          .string()
          .openapi({
            param: { in: 'path', name: 'command', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.array(z.string()) } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const putMimicAgentAgentNumProtocolMsgTelnetConnectionSignalConnectionIDSignalNameRoute =
  createRoute({
    method: 'put',
    path: '/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}',
    tags: ['TELNET'],
    summary: 'Triggers the asynchronous signal event with the specified signal name',
    description: 'Signal name is either connect or idle',
    operationId: 'protocol_telnet_connection_signal',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to manipulate TELNET connection',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        connectionID: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'connectionID',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        signalName: z
          .string()
          .openapi({
            param: { in: 'path', name: 'signalName', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.array(z.string()) } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const getMimicAgentAgentNumProtocolMsgTelnetGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/get/args',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET argument structure",
  description: "Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_telnet_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the TELNET argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/get/config',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET configuration",
  description: "Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_telnet_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the TELNET configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigTELNETSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_telnet_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TELNET statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_telnet_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether TELNET tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigTELNETSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTelnetIpaliasDisableIpaddressPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}',
  tags: ['TELNET'],
  summary: 'Disable individual IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_telnet_ipalias_disable',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate TELNET IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ipaddress: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTelnetIpaliasEnableIpaddressPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}',
  tags: ['TELNET'],
  summary: 'Enable individual IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_telnet_ipalias_enable',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate TELNET IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      ipaddress: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetIpaliasIsenabledIpaddressPortRoute = createRoute(
  {
    method: 'get',
    path: '/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}',
    tags: ['TELNET'],
    summary: 'Check individual IP aliases on the agent and the simulator host',
    description:
      'By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent',
    operationId: 'protocol_telnet_ipalias_isenabled',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to manipulate TELNET IP alias',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        ipaddress: z
          .string()
          .openapi({
            param: { in: 'path', name: 'ipaddress', required: true, schema: { type: 'string' } },
          }),
        port: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              in: 'path',
              name: 'port',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.string() } },
      },
      400: { description: 'Invalid agent number value' },
    },
  },
)

export const getMimicAgentAgentNumProtocolMsgTelnetIpaliasListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list',
  tags: ['TELNET'],
  summary: 'List all IP aliases on the agent and the simulator host',
  description:
    'By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent',
  operationId: 'protocol_telnet_ipalias_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to manipulate TELNET IP alias',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(IPAliasSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetConnectionsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET connections",
  description: 'IDs of all connected connections',
  operationId: 'protocol_telnet_server_get_connections',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TELNET configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetKeymapRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET keymap file name",
  description: 'Keymap file name',
  operationId: 'protocol_telnet_server_get_keymap',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TELNET statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetRulesdbRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET rules db file name",
  description: 'Rules db file name',
  operationId: 'protocol_telnet_server_get_rulesdb',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TELNET statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetStateRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET server state",
  description: 'Return 1 means accepting connections, 0 not',
  operationId: 'protocol_telnet_server_get_state',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TELNET statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetUserdbRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET user db file name",
  description: 'User db file name',
  operationId: 'protocol_telnet_server_get_userdb',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TELNET statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTelnetServerGetUsersRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users',
  tags: ['TELNET'],
  summary: "Show the agent's TELNET users",
  description: 'List of users',
  operationId: 'protocol_telnet_server_get_users',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TELNET configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TelnetUserSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTelnetSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}',
  tags: ['TELNET'],
  summary: "Set the agent's TELNET configuration",
  description: "Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_telnet_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the TELNET configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the TELNET configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the TELNET configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTelnetSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}',
  tags: ['TELNET'],
  summary: "Set the agent's TELNET traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_telnet_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the TELNET tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the TELNET tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTftpGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/get/args',
  tags: ['TFTP'],
  summary: "Show the agent's TFTP argument structure",
  description: "Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_tftp_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the TFTP argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTftpGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/get/config',
  tags: ['TFTP'],
  summary: "Show the agent's TFTP configuration",
  description: "Agent's TFTP configuration",
  operationId: 'protocol_tftp_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the TFTP configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigTFTPSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTftpGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics',
  tags: ['TFTP'],
  summary: "Show the agent's TFTP statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_tftp_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TFTP statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTftpGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace',
  tags: ['TFTP'],
  summary: "Show the agent's TFTP traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_tftp_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether TFTP tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigTFTPSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgTftpSessionReadServerSrcfileRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}',
  tags: ['TFTP'],
  summary: 'Create a read session to download srcfile from server',
  description: 'Session ID is returned',
  operationId: 'protocol_tftp_session_read',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TFTP statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      srcfile: z
        .string()
        .openapi({
          param: {
            description: 'File name to retrieve from server',
            in: 'path',
            name: 'srcfile',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgTftpSessionWriteServerSrcfileRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}',
  tags: ['TFTP'],
  summary: 'Create a read session to upload srcfile to server',
  description: 'Session ID is returned',
  operationId: 'protocol_tftp_session_write',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TFTP statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      srcfile: z
        .string()
        .openapi({
          param: {
            description: 'File name to upload to server',
            in: 'path',
            name: 'srcfile',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTftpSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}',
  tags: ['TFTP'],
  summary: "Set the agent's TFTP configuration",
  description: "Agent's TFTP configuration",
  operationId: 'protocol_tftp_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the TFTP configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the TFTP configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the TFTP configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTftpSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}',
  tags: ['TFTP'],
  summary: "Set the agent's TFTP traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_tftp_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the TFTP tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the TFTP tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTftpSessionIDGetParameterRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}',
  tags: ['TFTP'],
  summary: 'Show a parameter of a TFTP sesssion',
  description: 'Parameter is server , port , or dstfile',
  operationId: 'protocol_tftp_session_get_parameter',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TFTP parameter',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sessionID: z
        .string()
        .openapi({
          param: {
            description: 'SessionID',
            in: 'path',
            name: 'sessionID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      parameter: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to show',
            in: 'path',
            name: 'parameter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTftpSessionIDSetParameterValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}',
  tags: ['TFTP'],
  summary: 'Set a parameter of a TFTP sesssion',
  description: 'Parameter is server , port , or dstfile',
  operationId: 'protocol_tftp_session_set_parameter',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set TFTP parameter',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sessionID: z
        .string()
        .openapi({
          param: {
            description: 'SessionID',
            in: 'path',
            name: 'sessionID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      parameter: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set',
            in: 'path',
            name: 'parameter',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTftpSessionIDStartRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start',
  tags: ['TFTP'],
  summary: 'Start a TFTP sesssion',
  description: 'Start uploading or downloading the file',
  operationId: 'protocol_tftp_session_start',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to start TFTP transaction',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sessionID: z
        .string()
        .openapi({
          param: {
            description: 'SessionID',
            in: 'path',
            name: 'sessionID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTftpSessionIDStatusRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status',
  tags: ['TFTP'],
  summary: "Check a TFTP sesssion's status",
  description: 'Status includes running state, bytes transfered, and time elapsed',
  operationId: 'protocol_tftp_session_status',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TFTP transaction',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sessionID: z
        .string()
        .openapi({
          param: {
            description: 'SessionID',
            in: 'path',
            name: 'sessionID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTftpSessionIDStopRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop',
  tags: ['TFTP'],
  summary: 'Stop a TFTP sesssion',
  description: 'Stop uploading or downloading the file',
  operationId: 'protocol_tftp_session_stop',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to stop TFTP transaction',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      sessionID: z
        .string()
        .openapi({
          param: {
            description: 'SessionID',
            in: 'path',
            name: 'sessionID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTodGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tod/get/args',
  tags: ['TOD'],
  summary: "Show the agent's TOD argument structure",
  description: "Agent's TOD configuration",
  operationId: 'protocol_tod_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the TOD argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTodGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tod/get/config',
  tags: ['TOD'],
  summary: "Show the agent's TOD configuration",
  description: "Agent's TOD configuration",
  operationId: 'protocol_tod_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the TOD configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigTODSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTodGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics',
  tags: ['TOD'],
  summary: "Show the agent's TOD statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_tod_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show TOD statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTodGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/tod/get/trace',
  tags: ['TOD'],
  summary: "Show the agent's TOD traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_tod_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether TOD tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigTODSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgTodGettimeServerServerAddrPortPortNumScriptScriptNameTimeoutTimeSecRetriesNumRetriesRoute =
  createRoute({
    method: 'get',
    path: '/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}',
    tags: ['TOD'],
    summary: 'Retrieve TOD time',
    description: 'Retrive time from server',
    operationId: 'protocol_tod_gettime',
    request: {
      params: z.object({
        agentNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'Agent to show TOD return',
              in: 'path',
              name: 'agentNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        serverAddr: z
          .string()
          .openapi({
            param: {
              description: 'serverAddr',
              in: 'path',
              name: 'serverAddr',
              required: true,
              schema: { type: 'string' },
            },
          }),
        portNum: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'portNum',
              in: 'path',
              name: 'portNum',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        scriptName: z
          .string()
          .openapi({
            param: {
              description: 'scriptName',
              in: 'path',
              name: 'scriptName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        timeSec: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'timeSec',
              in: 'path',
              name: 'timeSec',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        numRetries: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'numRetries',
              in: 'path',
              name: 'numRetries',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: { 'application/json': { schema: z.array(z.string()) } },
      },
      400: { description: 'Invalid agent number value' },
    },
  })

export const putMimicAgentAgentNumProtocolMsgTodSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}',
  tags: ['TOD'],
  summary: "Set the agent's TOD configuration",
  description: "Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_tod_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the TOD configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the TOD configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the TOD configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgTodSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}',
  tags: ['TOD'],
  summary: "Set the agent's TOD traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_tod_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the TOD tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the TOD tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgWebGetArgsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/get/args',
  tags: ['WEB'],
  summary: "Show the agent's WEB argument structure",
  description: "Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_web_get_args',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the WEB argument structure',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgWebGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/get/config',
  tags: ['WEB'],
  summary: "Show the agent's WEB configuration",
  description: "Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_web_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the WEB configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigWEBSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgWebGetStatisticsRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/get/statistics',
  tags: ['WEB'],
  summary: "Show the agent's WEB statistics",
  description: 'Statistics of fields indicated in the headers',
  operationId: 'protocol_web_get_statistics',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show WEB statistics',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgWebGetTraceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/get/trace',
  tags: ['WEB'],
  summary: "Show the agent's WEB traffic tracing",
  description: 'Trace 1 means enabled, 0 means not',
  operationId: 'protocol_web_get_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show whether WEB tracing is enabled',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ConfigWEBSchema } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumProtocolMsgWebPortAddPortRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}',
  tags: ['WEB'],
  summary: "Add the agent's WEB port",
  description: 'Add port',
  operationId: 'protocol_web_port_add',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add WEB port',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'TCP port',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolMsgWebPortExistsPortRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}',
  tags: ['WEB'],
  summary: "Show the agent's WEB port",
  description: 'Check the port. 1 means existing, 0 means not',
  operationId: 'protocol_web_port_exists',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show WEB configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'TCP port',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumProtocolMsgWebPortRemovePortRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}',
  tags: ['WEB'],
  summary: "Remove the agent's WEB port",
  description: 'Remove port',
  operationId: 'protocol_web_port_remove',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to remove WEB port',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'TCP port',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgWebPortSetPortProtocolVersionRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}',
  tags: ['WEB'],
  summary: "Set the agent's WEB port attribute",
  description: 'Set port',
  operationId: 'protocol_web_port_set',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set WEB port',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'TCP port',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      protocol: z
        .string()
        .openapi({
          param: {
            description: 'Encryption or related protocol',
            in: 'path',
            name: 'protocol',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'Encryption or related protocol version',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgWebPortStartPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}',
  tags: ['WEB'],
  summary: "Start the agent's WEB port",
  description: 'Start port',
  operationId: 'protocol_web_port_start',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to start WEB port',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'TCP port',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgWebPortStopPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}',
  tags: ['WEB'],
  summary: "Stop the agent's WEB port",
  description: 'Stop port',
  operationId: 'protocol_web_port_stop',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to stop WEB port',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'TCP port',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgWebSetConfigArgumentValueRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}',
  tags: ['WEB'],
  summary: "Set the agent's WEB configuration",
  description: "Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap",
  operationId: 'protocol_web_set_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the WEB configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      argument: z
        .string()
        .openapi({
          param: {
            description: 'Parameter to set the WEB configuration',
            in: 'path',
            name: 'argument',
            required: true,
            schema: { type: 'string' },
          },
        }),
      value: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the WEB configuration',
            in: 'path',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumProtocolMsgWebSetTraceEnableOrNotRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}',
  tags: ['WEB'],
  summary: "Set the agent's WEB traffic tracing",
  description: '1 to enable, 0 to disable',
  operationId: 'protocol_web_set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the WEB tracing',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      enableOrNot: z
        .string()
        .openapi({
          param: {
            description: 'Value to set the WEB tracing',
            in: 'path',
            name: 'enableOrNot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumProtocolProtGetConfigRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/protocol/{prot}/get/config',
  tags: ['Agent'],
  summary: "Returns the protocol's configuration.",
  description: "Returns the protocol's configuration.",
  operationId: 'protocol_get_config',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the protocol configuration',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      prot: z
        .string()
        .openapi({
          param: {
            description: 'Protocol to show configuration',
            in: 'path',
            name: 'prot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumReloadRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/reload',
  tags: ['Agent'],
  summary: 'Reload the current agent.',
  description:
    'This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).',
  operationId: 'reload',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumRemoveRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/remove',
  tags: ['Agent'],
  summary: 'Remove the current agent.',
  description:
    'For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.',
  operationId: 'agent_remove',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumResumeRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/resume',
  tags: ['Agent'],
  summary: 'Resume the current agent.',
  description: 'Resume the current agent.',
  operationId: 'resume',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSaveRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/save',
  tags: ['Agent'],
  summary: 'Save agent MIB values.',
  description: 'Save agent MIB values.',
  operationId: 'save',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to save',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetDelayDelayRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/delay/{delay}',
  tags: ['Agent'],
  summary: 'one-way transit delay in msec',
  description: 'The minimum granularity is 10 msec.',
  operationId: 'set_delay',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the delay time',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      delay: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Delay time of the agent',
            in: 'path',
            name: 'delay',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetDropsDropsRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/drops/{drops}',
  tags: ['Agent'],
  summary: 'drop rate (every N-th PDU)',
  description: '0 means no drops',
  operationId: 'set_drops',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the drop rate',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      drops: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Drop rate of the agent',
            in: 'path',
            name: 'drops',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetHostHostRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/host/{host}',
  tags: ['Agent'],
  summary: 'host address of the agent.',
  description:
    'Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.',
  operationId: 'set_host',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Agent to set the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'string', type: 'integer' },
          },
        }),
      host: z
        .string()
        .openapi({
          param: {
            description: 'Primary IP of the agent',
            in: 'path',
            name: 'host',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/value/set/{object}/0/{variable}',
          parameters: { agentNum: '$request.body#/agentNum', object: 'sysDescr', variable: 'v' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetInformTimeoutInformTimeoutRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}',
  tags: ['Agent'],
  summary: 'timeout in seconds for retransmitting INFORM PDUs',
  description:
    'The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.',
  operationId: 'set_inform_timeout',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the timeout setting',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      inform_timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Tmeout setting',
            in: 'path',
            name: 'inform_timeout',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetInterfaceInterfaceRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/interface/{interface}',
  tags: ['Agent'],
  summary: 'network interface card for the agent',
  description: 'network interface card for the agent',
  operationId: 'set_interface',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Agent to set the primary interface',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'string', type: 'integer' },
          },
        }),
      interface: z
        .string()
        .openapi({
          param: {
            description: 'Primary interface of the agent',
            in: 'path',
            name: 'interface',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetMaskMaskRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/mask/{mask}',
  tags: ['Agent'],
  summary: 'subnet mask of the agent.',
  description: 'subnet mask of the agent.',
  operationId: 'set_mask',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Agent to set the primary IP address mask',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'string', type: 'integer' },
          },
        }),
      mask: z
        .string()
        .openapi({
          param: {
            description: 'Mask to set for the agent primary IP address',
            in: 'path',
            name: 'mask',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetMibsRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/mibs',
  tags: ['Agent'],
  summary: 'set of MIBs, simulations and scenarios',
  description: 'set of MIBs, simulations and scenarios',
  operationId: 'set_mibs',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the MIB triplets',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(TripletSchema).openapi({ description: 'Triplet array' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetOiddirOiddirRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/oiddir/{oiddir}',
  tags: ['Agent'],
  summary: 'MIB directory of the agent.',
  description: 'MIB directory of the agent.',
  operationId: 'set_oiddir',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the directory path',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      oiddir: z
        .string()
        .openapi({
          param: {
            description: 'Directory path for the agent',
            in: 'path',
            name: 'oiddir',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetOwnerOwnerRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/owner/{owner}',
  tags: ['Agent'],
  summary: 'owner of the agent',
  description: 'owner of the agent',
  operationId: 'set_owner',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the owner',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      owner: z
        .string()
        .openapi({
          param: {
            description: 'Owner of the agent',
            in: 'path',
            name: 'owner',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetPdusizePdusizeRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/pdusize/{pdusize}',
  tags: ['Agent'],
  summary: 'maximum PDU size',
  description: 'The limit for this configurable is 65536',
  operationId: 'set_pdusize',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the PDU size',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      pdusize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'PDU size setting for the agent',
            in: 'path',
            name: 'pdusize',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetPortPortRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/port/{port}',
  tags: ['Agent'],
  summary: 'port number',
  description: 'port number',
  operationId: 'set_port',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the primary SNMP port',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Primary SNMP port of the agent',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetPrivdirPrivdirRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/privdir/{privdir}',
  tags: ['Agent'],
  summary: 'private directory of the agent.',
  description: 'private directory of the agent.',
  operationId: 'set_privdir',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the directory path',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      privdir: z
        .string()
        .openapi({
          param: {
            description: 'Directory path for the agent',
            in: 'path',
            name: 'privdir',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetProtocolRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/protocol',
  tags: ['Agent'],
  summary: 'protocols supported by agent as a comma-separated list',
  description: 'protocols supported by agent as a comma-separated list',
  operationId: 'set_protocols',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the protocols arrary',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Created agent object',
      content: {
        'application/json': {
          schema: z.array(z.string().openapi({ description: 'Protocol string' })),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetReadReadRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/read/{read}',
  tags: ['Agent'],
  summary: 'read community string',
  description: 'read community string',
  operationId: 'set_read_community',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the SNMP read community string',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      read: z
        .string()
        .openapi({
          param: {
            description: 'SNMP read community string',
            in: 'path',
            name: 'read',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetStartStartRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/start/{start}',
  tags: ['Agent'],
  summary: 'relative start time',
  description: 'relative start time',
  operationId: 'set_starttime',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the relative start time',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Relative start time of the agent',
            in: 'path',
            name: 'start',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetTraceTraceRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/trace/{trace}',
  tags: ['Agent'],
  summary: 'SNMP PDU tracing',
  description: 'SNMP PDU tracing',
  operationId: 'set_trace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set trace setting',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      trace: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Trace setting for the agent',
            in: 'path',
            name: 'trace',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetValidateValidateRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/validate/{validate}',
  tags: ['Agent'],
  summary: 'SNMP SET validation policy',
  description:
    'Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.',
  operationId: 'set_validate',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the bitmask integer',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      validate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Bitmask integer to set',
            in: 'path',
            name: 'validate',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumSetWriteWriteRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/set/write/{write}',
  tags: ['Agent'],
  summary: 'write community string',
  description: 'write community string',
  operationId: 'set_write_community',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to set the SNMP write community string',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      write: z
        .string()
        .openapi({
          param: {
            description: 'SNMP write community string',
            in: 'path',
            name: 'write',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumStartRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/start',
  tags: ['Agent'],
  summary: 'Start the current agent.',
  description:
    "For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.",
  operationId: 'start',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumStopRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/stop',
  tags: ['Agent'],
  summary: "Show the agent's primary IP address",
  description: 'Agent primary IP address',
  operationId: 'stop',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the primary IP',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumStoreCopyOtherAgentRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/store/copy/{otherAgent}',
  tags: ['Agent'],
  summary: 'This command copies the variable store from the other agent to this agent.',
  description: 'This command copies the variable store from the other agent to this agent.',
  operationId: 'agent_store_copy',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      otherAgent: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'otherAgent',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumStoreExistsVarRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/store/exists/{var}',
  tags: ['Agent'],
  summary:
    'This command can be used as a predicate to ascertain the existence of a given variable.',
  description: 'It returns "1" if the variable exists, else "0".',
  operationId: 'agent_store_exists',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumStoreGetVarRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/store/get/{var}',
  tags: ['Agent'],
  summary: 'Fetches the value associated with a variable.',
  description: 'The value will be returned as a string (like all Tcl values).',
  operationId: 'agent_store_get',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumStoreListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/store/list',
  tags: ['Agent'],
  summary: 'This command will return the list of variables in the said scope.',
  description:
    'The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.',
  operationId: 'agent_store_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumStoreLreplaceVarIndexRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/store/lreplace/{var}/{index}',
  tags: ['Agent'],
  summary:
    'These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.',
  description:
    'These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.',
  operationId: 'agent_store_lreplace',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Index',
            in: 'path',
            name: 'index',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: { description: 'Value', content: { 'application/json': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumStorePersistsVarRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/store/persists/{var}',
  tags: ['Agent'],
  summary:
    'This command can be used as a predicate to ascertain the persistence of a given variable.',
  description: 'It returns "1" if the variable is persistent, else "0".',
  operationId: 'agent_store_persists',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumStoreSetVarPersistRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/store/set/{var}/{persist}',
  tags: ['Agent'],
  summary: 'These commands allow the creation of a new variable, or changing an existing value.',
  description:
    "The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.",
  operationId: 'agent_store_set',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
      persist: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Persistent setting',
            in: 'path',
            name: 'persist',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: { description: 'Value', content: { 'application/json': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumStoreUnsetVarRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/store/unset/{var}',
  tags: ['Agent'],
  summary: 'Deletes a variable which is currently defined.',
  description: 'This will cleanup persistent variables if needed',
  operationId: 'agent_store_unset',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumTimerScriptAddScriptIntervalArgRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}',
  tags: ['Agent'],
  summary:
    'Add a new timer script to be executed at specified interval (in msec) with the specified argument.',
  description:
    'Add a new timer script to be executed at specified interval (in msec) with the specified argument.',
  operationId: 'add_timer_script',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the timer script list',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      script: z
        .string()
        .openapi({
          param: {
            description: 'Script name',
            in: 'path',
            name: 'script',
            required: true,
            schema: { type: 'string' },
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Interval in msec',
            in: 'path',
            name: 'interval',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      arg: z
        .string()
        .openapi({
          param: {
            description: 'Arguments to the script',
            in: 'path',
            name: 'arg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumTimerScriptDeleteScriptIntervalArgRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}',
  tags: ['Agent'],
  summary: 'Remove a timer script from the execution list.',
  description:
    'The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.',
  operationId: 'del_timer_script',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the timer script list',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      script: z
        .string()
        .openapi({
          param: {
            description: 'Script name',
            in: 'path',
            name: 'script',
            required: true,
            schema: { type: 'string' },
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Interval in msec',
            in: 'path',
            name: 'interval',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      arg: z
        .string()
        .openapi({
          param: {
            description: 'Arguments to the script',
            in: 'path',
            name: 'arg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumTimerScriptListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/timer/script/list',
  tags: ['Agent'],
  summary: 'List the timer scripts currently running along with the their intervals.',
  description:
    'The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.',
  operationId: 'list_timer_scripts',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to return the timer script list',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TimerScriptSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const postMimicAgentAgentNumTrapConfigAddIPPortRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/trap/config/add/{IP}/{port}',
  tags: ['Agent'],
  summary: 'Add a trap destination to the set of destinations.',
  description: 'Add a trap destination to the set of destinations.',
  operationId: 'trap_config_add',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to add the destination',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP of the destination',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'port of the destination',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumTrapConfigDeleteIPPortRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}',
  tags: ['Agent'],
  summary: 'Remove a trap destination from the set of destinations.',
  description: 'Remove a trap destination from the set of destinations.',
  operationId: 'trap_config_del',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to delete the destination',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      IP: z
        .string()
        .openapi({
          param: {
            description: 'IP of the destination',
            in: 'path',
            name: 'IP',
            required: true,
            schema: { type: 'string' },
          },
        }),
      port: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'port of the destination',
            in: 'path',
            name: 'port',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumTrapConfigListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/trap/config/list',
  tags: ['Agent'],
  summary: 'List the set of trap destinations for this agent instance.',
  description:
    'Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.',
  operationId: 'trap_config_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the IP alias list',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TrapDestSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumTrapListRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/trap/list',
  tags: ['Agent'],
  summary: 'List the outstanding asynchronous traps for this agent instance.',
  description: 'List the outstanding asynchronous traps for this agent instance.',
  operationId: 'trap_list',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to list the traps',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.array(z.string()).openapi({ description: 'array of OID or Object strings' }),
        },
      },
    },
  },
})

export const postMimicAgentAgentNumValueAddObjectInstanceRoute = createRoute({
  method: 'post',
  path: '/mimic/agent/{agentNum}/value/add/{object}/{instance}',
  tags: ['Valuespace'],
  summary: 'Add an entry to a table.',
  description:
    'The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.',
  operationId: 'add',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: "Object (column) of the table in the agent's value space",
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: "Object (column) of the table in the agent's value space",
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueEvalObjectInstanceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/eval/{object}/{instance}',
  tags: ['Valuespace'],
  summary:
    'Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.',
  description:
    'Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.',
  operationId: 'eval_value',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              "Single instance object or object (column) of the table in the agent's value space.",
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description:
              "Row of the table in the agent's value space. 0 for single instance objects",
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueGetObjectInstanceVariableRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}',
  tags: ['Valuespace'],
  summary: 'Get a variable in the Value Space.',
  description: 'Get a variable in the Value Space.',
  operationId: 'get_value',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: "Object (column) of the table in the agent's value space",
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: "Object (column) of the table in the agent's value space",
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      variable: z
        .string()
        .openapi({
          param: {
            description: "Object (column) of the table in the agent's value space",
            in: 'path',
            name: 'variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/value/eval/{object}/{instance}',
          parameters: { agentNum: '$request.body#/agentNum', instance: 0, object: 'sysDescr' },
        },
      },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueInfoObjectRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/info/{object}',
  tags: ['Valuespace'],
  summary:
    'Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.',
  description:
    'Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.',
  operationId: 'get_info',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the information of the object',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: 'Object',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueInstancesObjectRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/instances/{object}',
  tags: ['Valuespace'],
  summary: 'Display the MIB object instances for the specified object.',
  description: 'This enables MIB browsing of the MIB on the current agent.',
  operationId: 'get_instances',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: "Object (column) of the table in the agent's value space",
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueListOIDRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/list/{OID}',
  tags: ['Valuespace'],
  summary: 'Display the MIB objects below the current position',
  description:
    'This command is similar to the ls or dir operating system commands to list filesystem directories.',
  operationId: 'get_objects',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the OID branches',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      OID: z
        .string()
        .openapi({
          param: {
            description: 'Current OID',
            in: 'path',
            name: 'OID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueMevalObjInsArrayRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/meval/{objInsArray}',
  tags: ['Valuespace'],
  summary:
    'Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.',
  description:
    'Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.',
  operationId: 'meval_value',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      objInsArray: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z.array(z.array(z.string())),
        )
        .openapi({
          param: {
            description:
              "Multiple objects or object (column) of the table in the agent's value space.",
            in: 'path',
            name: 'objInsArray',
            required: true,
            schema: { items: { items: { type: 'string' }, type: 'array' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueMgetObjInsVarArrayRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/mget/{objInsVarArray}',
  tags: ['Valuespace'],
  summary: 'Get multiple variables in the Value Space.',
  description:
    'This is a performance optimization of the mimic value get command, to be used when many variables are requested.',
  operationId: 'mget_value',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      objInsVarArray: z
        .preprocess(
          (val) => (typeof val === 'string' ? val.split(',') : val),
          z.array(z.array(z.string())),
        )
        .openapi({
          param: {
            description:
              "Multiple objects or object (column) of the table in the agent's value space.",
            in: 'path',
            name: 'objInsVarArray',
            required: true,
            schema: { items: { items: { type: 'string' }, type: 'array' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueMibObjectRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/mib/{object}',
  tags: ['Valuespace'],
  summary: 'Return the MIB that defines the specified object.',
  description: 'This will only return a MIB name if the object is unmistakeably defined in a MIB.',
  operationId: 'get_mib',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the MIB',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: 'Object',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumValueMsetRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/value/mset',
  tags: ['Valuespace'],
  summary: 'Set multiple variables in the Value Space.',
  description:
    'This is a performance optimization of the mimic value set command, to be used when many variables are to be set.',
  operationId: 'mset_value',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'objInsVarValArray',
      content: { 'application/json': { schema: z.array(z.array(z.string())) } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumValueMunsetRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/value/munset',
  tags: ['Valuespace'],
  summary: 'Unset multiple variables in the Value Space',
  description:
    'This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.',
  operationId: 'munset_value',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'objInsVarArray',
      content: { 'application/json': { schema: z.array(z.array(z.string())) } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueNameOIDRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/name/{OID}',
  tags: ['Valuespace'],
  summary: 'Return the symbolic name of the specified object identifier.',
  description: 'Return the symbolic name of the specified object identifier.',
  operationId: 'get_name',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the object',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      OID: z
        .string()
        .openapi({
          param: {
            description: 'OID',
            in: 'path',
            name: 'OID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueOidObjectRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/oid/{object}',
  tags: ['Valuespace'],
  summary: 'Return the numeric OID of the specified object.',
  description: 'Return the numeric OID of the specified object.',
  operationId: 'get_oid',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent to show the OID',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: 'Object',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicAgentAgentNumValueRemoveObjectInstanceRoute = createRoute({
  method: 'delete',
  path: '/mimic/agent/{agentNum}/value/remove/{object}/{instance}',
  tags: ['Valuespace'],
  summary: 'Remove an entry from a table.',
  description:
    'The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.',
  operationId: 'remove',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: "Object (column) of the table in the agent's value space",
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: "Object (column) of the table in the agent's value space",
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumValueSetObjectInstanceVariableRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}',
  tags: ['Valuespace'],
  summary: 'Set a variable in the Value Space.',
  description:
    'NOTE to set a binary string value, specify a string starting with \\\\x followed by pairs of hexadecimal digits, eg. "\\\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.',
  operationId: 'set_value',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              "Single instance object or object (column) of the table in the agent's value space.",
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description:
              "Row of the table in the agent's value space. 0 for single instance objects",
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      variable: z
        .string()
        .openapi({
          param: {
            description: 'Variable',
            in: 'path',
            name: 'variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { description: 'Value', content: { 'application/json': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueSplitOIDRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/split/{OID}',
  tags: ['Valuespace'],
  summary: 'Split the numerical OID into the object OID and instance OID.',
  description: 'This is useful if you have an OID which is a combination of object and instance.',
  operationId: 'split_oid',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      OID: z
        .string()
        .openapi({
          param: {
            description: 'OID',
            in: 'path',
            name: 'OID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueStateGetObjectRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/state/get/{object}',
  tags: ['Valuespace'],
  summary: 'Get the state of a MIB object object.',
  description:
    'To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.',
  operationId: 'get_state',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: 'Object',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumValueStateSetObjectStateRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/value/state/set/{object}/{state}',
  tags: ['Valuespace'],
  summary: 'Set the state of a MIB object object',
  description:
    'To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.',
  operationId: 'set_state',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description: 'Object',
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      state: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'State',
            in: 'path',
            name: 'state',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicAgentAgentNumValueUnsetObjectInstanceVariableRoute = createRoute({
  method: 'put',
  path: '/mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}',
  tags: ['Valuespace'],
  summary: 'Unset a variable in the Value Space in order to free its memory.',
  description: 'Only variables that have previously been set can be unset.',
  operationId: 'unset_value',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              "Single instance object or object (column) of the table in the agent's value space.",
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description:
              "Row of the table in the agent's value space. 0 for single instance objects",
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      variable: z
        .string()
        .openapi({
          param: {
            description: 'Variable',
            in: 'path',
            name: 'variable',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicAgentAgentNumValueVariablesObjectInstanceRoute = createRoute({
  method: 'get',
  path: '/mimic/agent/{agentNum}/value/variables/{object}/{instance}',
  tags: ['Valuespace'],
  summary:
    'Display the variables for the specified instance instance for the specified MIB object object',
  description: 'This enables variable browsing of the MIB on the current agent.',
  operationId: 'get_variables',
  request: {
    params: z.object({
      agentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent of the value space',
            in: 'path',
            name: 'agentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      object: z
        .string()
        .openapi({
          param: {
            description:
              "Single instance object or object (column) of the table in the agent's value space.",
            in: 'path',
            name: 'object',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description:
              "Row of the table in the agent's value space. 0 for single instance objects",
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicClearFirstAgentNumLastAgentNumRoute = createRoute({
  method: 'put',
  path: '/mimic/clear/{firstAgentNum}/{lastAgentNum}',
  tags: ['Daemon'],
  summary: 'Clear the lab configuration.',
  description: 'Clear the lab configuration.',
  operationId: 'cfg_new',
  request: {
    params: z.object({
      firstAgentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent number to start clearing',
            in: 'path',
            name: 'firstAgentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      lastAgentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent number to end the clearing',
            in: 'path',
            name: 'lastAgentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetActiveDataListRoute = createRoute({
  method: 'get',
  path: '/mimic/get/active_data_list',
  tags: ['Daemon'],
  summary:
    'The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.',
  description: 'This list is guaranteed to be sorted into increasing order.',
  operationId: 'get_active_data_list',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
      links: {
        address: { operationId: 'get_host', parameters: { agentNum: '$response.body#/id/' } },
      },
    },
  },
})

export const getMimicGetActiveListRoute = createRoute({
  method: 'get',
  path: '/mimic/get/active_list',
  tags: ['Daemon'],
  summary: 'The list of {agentnum} that are currently active (running or paused).',
  description: 'This list is guaranteed to be sorted into increasing order.',
  operationId: 'get_active_list',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/interface',
          parameters: { agentNum: '$response.body#' },
        },
      },
    },
  },
})

export const getMimicGetCfgfileRoute = createRoute({
  method: 'get',
  path: '/mimic/get/cfgfile',
  tags: ['Daemon'],
  summary: 'The currently loaded lab configuration file for the particular user.',
  description:
    'In the case of multi-user access this command returns a different configuration file loaded for each user.',
  operationId: 'get_cfgfile',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetCfgfileChangedRoute = createRoute({
  method: 'get',
  path: '/mimic/get/cfgfile_changed',
  tags: ['Daemon'],
  summary: 'This predicate indicates if the currently loaded agent configuration file has changed.',
  description:
    'Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.',
  operationId: 'get_cfg_file_changed',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetChangedConfigListRoute = createRoute({
  method: 'get',
  path: '/mimic/get/changed_config_list',
  tags: ['Daemon'],
  summary: 'The list of {agentnum} for which a configurable parameter changed.',
  description:
    'This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.',
  operationId: 'get_changed_config_list',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
    },
  },
})

export const getMimicGetChangedStateListRoute = createRoute({
  method: 'get',
  path: '/mimic/get/changed_state_list',
  tags: ['Daemon'],
  summary: 'The list of {agentnum state} for which the state changed.',
  description:
    'This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.',
  operationId: 'get_changed_state_list',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(AgentStateSchema) } },
    },
  },
})

export const getMimicGetClientsRoute = createRoute({
  method: 'get',
  path: '/mimic/get/clients',
  tags: ['Daemon'],
  summary: 'The number of clients currently connected to the daemon.',
  description: 'The number of clients currently connected to the daemon.',
  operationId: 'get_clients',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetConfiguredListRoute = createRoute({
  method: 'get',
  path: '/mimic/get/configured_list',
  tags: ['Daemon'],
  summary: 'The list of {agentnum} that are currently configured.',
  description: 'This list is guaranteed to be sorted into increasing order.',
  operationId: 'get_configured_list',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.int32()) } },
      links: {
        address: {
          operationRef: '#/mimic/agent/{agentNum}/get/host',
          parameters: { agentNum: '$response.body#' },
        },
      },
    },
  },
})

export const getMimicGetInterfacesRoute = createRoute({
  method: 'get',
  path: '/mimic/get/interfaces',
  tags: ['Daemon'],
  summary: 'The set of network interfaces that can be used for simulations.',
  description: 'The set of network interfaces that can be used for simulations.',
  operationId: 'get_interfaces',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetLastRoute = createRoute({
  method: 'get',
  path: '/mimic/get/last',
  tags: ['Daemon'],
  summary: 'The last configured agent instance.',
  description: 'The last configured agent instance.',
  operationId: 'get_last',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
  },
})

export const getMimicGetLogRoute = createRoute({
  method: 'get',
  path: '/mimic/get/log',
  tags: ['Daemon'],
  summary: 'The current log file for the Simulator.',
  description: 'The current log file for the Simulator.',
  operationId: 'get_log',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetMaxRoute = createRoute({
  method: 'get',
  path: '/mimic/get/max',
  tags: ['Daemon'],
  summary: 'The maximum number of agent instances.',
  description: 'The maximum number of agent instances.',
  operationId: 'get_max',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.int32() } },
    },
  },
})

export const getMimicGetNetaddrRoute = createRoute({
  method: 'get',
  path: '/mimic/get/netaddr',
  tags: ['Daemon'],
  summary: 'The network address of the host where the MIMIC simulator is running.',
  description: 'The network address of the host where the MIMIC simulator is running.',
  operationId: 'get_netaddr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetNetdevRoute = createRoute({
  method: 'get',
  path: '/mimic/get/netdev',
  tags: ['Daemon'],
  summary: 'The default network device to be used for agent addresses.',
  description:
    'The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.',
  operationId: 'get_netdev',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetProductRoute = createRoute({
  method: 'get',
  path: '/mimic/get/product',
  tags: ['Daemon'],
  summary: 'The product number that is licensed.',
  description: 'The product number that is licensed.',
  operationId: 'get_product',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetProtocolsRoute = createRoute({
  method: 'get',
  path: '/mimic/get/protocols',
  tags: ['Daemon'],
  summary: 'The set of protocols supported by the Simulator.',
  description: 'The set of protocols supported by the Simulator.',
  operationId: 'get_daemon_protocols',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetReturnRoute = createRoute({
  method: 'get',
  path: '/mimic/get/return',
  tags: ['Daemon'],
  summary: 'The return mode.',
  description:
    'The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)',
  operationId: 'get_return',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicGetVersionRoute = createRoute({
  method: 'get',
  path: '/mimic/get/version',
  tags: ['Daemon'],
  summary: 'The version of the MIMIC command interface.',
  description: 'The version of the MIMIC command interface.',
  operationId: 'get_version',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const putMimicLoadCfgFileFirstAgentNumLastAgentNumStartAgentNumRoute = createRoute({
  method: 'put',
  path: '/mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}',
  tags: ['Daemon'],
  summary: 'Load the lab configuration file file.',
  description:
    'Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration',
  operationId: 'cfg_load',
  request: {
    params: z.object({
      cfgFile: z
        .string()
        .openapi({
          param: {
            description: 'MIMIC agent configuration file to load',
            in: 'path',
            name: 'cfgFile',
            required: true,
            schema: { type: 'string' },
          },
        }),
      firstAgentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent number in cfgFile to start the loading',
            in: 'path',
            name: 'firstAgentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      lastAgentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent number in cfgFile to end the loading',
            in: 'path',
            name: 'lastAgentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      startAgentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent number in current configuration to start placing the new agents',
            in: 'path',
            name: 'startAgentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicMgetInfoArrayRoute = createRoute({
  method: 'get',
  path: '/mimic/mget/{infoArray}',
  tags: ['Daemon'],
  summary:
    'Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.',
  description:
    'Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.',
  operationId: 'mget_info',
  request: {
    params: z.object({
      infoArray: z
        .preprocess((val) => (typeof val === 'string' ? val.split(',') : val), z.array(z.string()))
        .openapi({
          param: {
            description: 'Multiple strings of info.',
            in: 'path',
            name: 'infoArray',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.object({})) } },
    },
    400: { description: 'Invalid info string' },
  },
})

export const getMimicProtocolMsgCoapGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/coap/get/stats_hdr',
  tags: ['COAP'],
  summary: 'Show the COAP statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_coap_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgDhcpGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/dhcp/get/stats_hdr',
  tags: ['DHCP'],
  summary: 'Show the DHCP statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_dhcp_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgIpmiGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/ipmi/get/stats_hdr',
  tags: ['IPMI'],
  summary: 'Show the IPMI statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_ipmi_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgMqttGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/mqtt/get/stats_hdr',
  tags: ['MQTT'],
  summary: 'Show the MQTT statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_mqtt_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgNetflowGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/netflow/get/stats_hdr',
  tags: ['NETFLOW'],
  summary: 'Show the NETFLOW statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_netflow_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgProxyGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/proxy/get/stats_hdr',
  tags: ['PROXY'],
  summary: 'Show the PROXY statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_proxy_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgSflowGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/sflow/get/stats_hdr',
  tags: ['SFLOW'],
  summary: 'Show the SFLOW statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_sflow_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgSnmptcpGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/snmptcp/get/stats_hdr',
  tags: ['SNMPTCP'],
  summary: 'Show the SNMPTCP statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_snmptcp_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgSshGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/ssh/get/stats_hdr',
  tags: ['SSH'],
  summary: 'Show the SSH statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_ssh_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgSyslogGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/syslog/get/stats_hdr',
  tags: ['SYSLOG'],
  summary: 'Show the SYSLOG statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_syslog_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgTelnetGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/telnet/get/stats_hdr',
  tags: ['TELNET'],
  summary: 'Show the TELNET statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_telnet_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgTftpGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/tftp/get/stats_hdr',
  tags: ['TFTP'],
  summary: 'Show the TFTP statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_tftp_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgTodGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/tod/get/stats_hdr',
  tags: ['TOD'],
  summary: 'Show the TOD statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_tod_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicProtocolMsgWebGetStatsHdrRoute = createRoute({
  method: 'get',
  path: '/mimic/protocol/msg/web/get/stats_hdr',
  tags: ['WEB'],
  summary: 'Show the WEB statistics headers',
  description: 'The headers of statistics fields',
  operationId: 'protocol_web_get_stats_hdr',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicSaveRoute = createRoute({
  method: 'put',
  path: '/mimic/save',
  tags: ['Daemon'],
  summary: 'Save the lab configuration.',
  description: 'Save the lab configuration.',
  operationId: 'cfg_save',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const putMimicSaveasCfgFileFirstAgentNumLastAgentNumRoute = createRoute({
  method: 'put',
  path: '/mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}',
  tags: ['Daemon'],
  summary: 'Save the lab configuration in file.',
  description: 'Save the lab configuration in file.',
  operationId: 'cfg_saveas',
  request: {
    params: z.object({
      cfgFile: z
        .string()
        .openapi({
          param: {
            description: 'MIMIC agent configuration file to save',
            in: 'path',
            name: 'cfgFile',
            required: true,
            schema: { type: 'string' },
          },
        }),
      firstAgentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent number in cfgFile to start the loading',
            in: 'path',
            name: 'firstAgentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      lastAgentNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Agent number in cfgFile to end the loading',
            in: 'path',
            name: 'lastAgentNum',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const putMimicSetLogRoute = createRoute({
  method: 'put',
  path: '/mimic/set/log',
  tags: ['Daemon'],
  summary: 'The current log file for the Simulator.',
  description: 'The current log file for the Simulator.',
  operationId: 'set_log',
  request: {
    body: {
      description: 'The file name of the new log file',
      content: { 'application/json': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const putMimicSetNetdevRoute = createRoute({
  method: 'put',
  path: '/mimic/set/netdev',
  tags: ['Daemon'],
  summary: 'The network address of the host where the MIMIC simulator is running.',
  description: 'The network address of the host where the MIMIC simulator is running.',
  operationId: 'set_netdev',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const putMimicSetPersistentRoute = createRoute({
  method: 'put',
  path: '/mimic/set/persistent',
  tags: ['Daemon'],
  summary: 'This operation flushes all global objects which need to be made persistent to disk.',
  description:
    'The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.',
  operationId: 'store_save',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const putMimicStartRoute = createRoute({
  method: 'put',
  path: '/mimic/start',
  tags: ['Daemon'],
  summary: 'Start MIMIC.',
  description: 'Start MIMIC.',
  operationId: 'start_all_agents',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const putMimicStopRoute = createRoute({
  method: 'put',
  path: '/mimic/stop',
  tags: ['Daemon'],
  summary: 'Stop MIMIC.',
  description: 'Stop MIMIC.',
  operationId: 'stop_all_agents',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const getMimicStoreExistsVarRoute = createRoute({
  method: 'get',
  path: '/mimic/store/exists/{var}',
  tags: ['Daemon'],
  summary:
    'This command can be used as a predicate to ascertain the existence of a given variable.',
  description: 'It returns "1" if the variable exists, else "0".',
  operationId: 'store_exists',
  request: {
    params: z.object({
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicStoreGetVarRoute = createRoute({
  method: 'get',
  path: '/mimic/store/get/{var}',
  tags: ['Daemon'],
  summary: 'Fetches the value associated with a variable.',
  description: 'The value will be returned as a string (like all Tcl values).',
  operationId: 'store_get',
  request: {
    params: z.object({
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicStoreListRoute = createRoute({
  method: 'get',
  path: '/mimic/store/list',
  tags: ['Daemon'],
  summary: 'This command will return the list of variables in the said scope.',
  description:
    'The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.',
  operationId: 'store_list',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicStoreLreplaceVarIndexRoute = createRoute({
  method: 'put',
  path: '/mimic/store/lreplace/{var}/{index}',
  tags: ['Daemon'],
  summary:
    'These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.',
  description:
    'These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.',
  operationId: 'store_lreplace',
  request: {
    params: z.object({
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Index',
            in: 'path',
            name: 'index',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: { description: 'Value', content: { 'application/json': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicStorePersistsVarRoute = createRoute({
  method: 'get',
  path: '/mimic/store/persists/{var}',
  tags: ['Daemon'],
  summary:
    'This command can be used as a predicate to ascertain the persistence of a given variable.',
  description: 'It returns "1" if the variable is persistent, else "0".',
  operationId: 'store_persists',
  request: {
    params: z.object({
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicStoreSetVarPersistRoute = createRoute({
  method: 'put',
  path: '/mimic/store/set/{var}/{persist}',
  tags: ['Daemon'],
  summary: 'Set the variable store for the global storage',
  description: 'Persist 1 means persistent , 0 means non-persistent',
  operationId: 'store_set',
  request: {
    params: z.object({
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
      persist: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Persistent setting',
            in: 'path',
            name: 'persist',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: { description: 'Value', content: { 'application/json': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicStoreUnsetVarRoute = createRoute({
  method: 'put',
  path: '/mimic/store/unset/{var}',
  tags: ['Daemon'],
  summary: 'Deletes a variable which is currently defined.',
  description: 'This will cleanup persistent variables if needed',
  operationId: 'store_unset',
  request: {
    params: z.object({
      var: z
        .string()
        .openapi({
          param: {
            description: 'Variable name',
            in: 'path',
            name: 'var',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const putMimicTerminateRoute = createRoute({
  method: 'put',
  path: '/mimic/terminate',
  tags: ['Daemon'],
  summary: 'Terminate the MIMIC daemon.',
  description: 'Terminate the MIMIC daemon.',
  operationId: 'terminate',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
})

export const postMimicTimerScriptAddScriptIntervalArgRoute = createRoute({
  method: 'post',
  path: '/mimic/timer/script/add/{script}/{interval}/{arg}',
  tags: ['Daemon'],
  summary:
    'Add a new timer script to be executed at specified interval (in msec) with the specified argument.',
  description:
    'Add a new timer script to be executed at specified interval (in msec) with the specified argument.',
  operationId: 'add_daemon_timer_script',
  request: {
    params: z.object({
      script: z
        .string()
        .openapi({
          param: {
            description: 'Script name',
            in: 'path',
            name: 'script',
            required: true,
            schema: { type: 'string' },
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Interval in msec',
            in: 'path',
            name: 'interval',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      arg: z
        .string()
        .openapi({
          param: {
            description: 'Arguments to the script',
            in: 'path',
            name: 'arg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const deleteMimicTimerScriptDeleteScriptIntervalArgRoute = createRoute({
  method: 'delete',
  path: '/mimic/timer/script/delete/{script}/{interval}/{arg}',
  tags: ['Daemon'],
  summary: 'Remove a timer script from the execution list.',
  description:
    'The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.',
  operationId: 'del_daemon_timer_script',
  request: {
    params: z.object({
      script: z
        .string()
        .openapi({
          param: {
            description: 'Script name',
            in: 'path',
            name: 'script',
            required: true,
            schema: { type: 'string' },
          },
        }),
      interval: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Interval in msec',
            in: 'path',
            name: 'interval',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      arg: z
        .string()
        .openapi({
          param: {
            description: 'Arguments to the script',
            in: 'path',
            name: 'arg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.string() } },
    },
    400: { description: 'Invalid agent number value' },
  },
})

export const getMimicTimerScriptListRoute = createRoute({
  method: 'get',
  path: '/mimic/timer/script/list',
  tags: ['Daemon'],
  summary: 'List the timer scripts currently running along with the their intervals.',
  description:
    'The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.',
  operationId: 'list_daemon_timer_scripts',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(TimerScriptSchema) } },
    },
    400: { description: 'Invalid agent number value' },
  },
})
