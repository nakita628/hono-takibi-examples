type AccessEntry = {
  access_mask?: string | undefined
  agent_range?: string | undefined
  user?: string | undefined
}
type Triplet = {
  device?: string | undefined
  mib?: string | undefined
  scenario?: number | undefined
}
type IPSource = { IP?: string | undefined; port?: number | undefined }
type IPAlias = {
  IP?: string | undefined
  interface?: string | undefined
  mask?: string | undefined
  port?: number | undefined
}
type ConfigCOAP = {
  keystore?: string | undefined
  primary_port?: number | undefined
  rule?: string | undefined
  secure_port?: number | undefined
}
type ConfigDHCP = {
  add_options?: string | undefined
  classid?: string | undefined
  hwaddr?: string | undefined
  script?: string | undefined
}
type ConfigIPMI = {
  primary_port?: number | undefined
  secure_port?: number | undefined
  version?: string | undefined
}
type ConfigMQTT = {
  broker?: string | undefined
  clientid?: string | undefined
  filename?: string | undefined
  is_tls?: string | undefined
  password?: string | undefined
  port?: number | undefined
  tls_conf_filename?: string | undefined
  username?: string | undefined
  version?: string | undefined
}
type ConfigNETFLOW = {
  bundleflowsets?: number | undefined
  collector?: string | undefined
  collectorport?: number | undefined
  filename?: string | undefined
}
type ConfigPROXY = {
  TCP_NODELAY?: number | undefined
  client_to_server?: string | undefined
  disconnect_delay?: number | undefined
  max_connects?: number | undefined
  portno?: number | undefined
  pre_connect?: string | undefined
  server_to_client?: string | undefined
  target?: string | undefined
  transport?: string | undefined
}
type ConfigSFLOW = {
  collector?: string | undefined
  collectorport?: number | undefined
  encoding_type?: string | undefined
  filename?: string | undefined
  flows_per_min?: number | undefined
  include_samples?: string | undefined
  records_per_sample?: string | undefined
  samples_per_datagram?: string | undefined
}
type ConfigSNMPTCP = { connections?: number | undefined }
type ConfigSNMPv3 = {
  context_engine_id?: string | undefined
  engine_id?: string | undefined
  usm_db?: string | undefined
  vacm_db?: string | undefined
}
type ConfigSSH = { port?: number | undefined; version?: string | undefined }
type ConfigSYSLOG = {
  client?: string | undefined
  hostname?: string | undefined
  localport?: number | undefined
  separator?: string | undefined
  sequence?: number | undefined
  server?: string | undefined
  serverport?: number | undefined
  timestamp?: string | undefined
}
type SyslogMsg = {
  hostname?: string | undefined
  message?: string | undefined
  separator?: string | undefined
  sequence?: string | undefined
  timestamp?: string | undefined
}
type ConfigTELNET = {
  keymap?: string | undefined
  paging_prompt?: string | undefined
  port?: number | undefined
  prompt?: string | undefined
  rule?: string | undefined
  userdb?: string | undefined
}
type TelnetUser = {
  groups?: string[] | undefined
  hasPassword?: number | undefined
  password?: string | undefined
  username?: string | undefined
}
type ConfigTFTP = {
  cache?: number | undefined
  client?: string | undefined
  dstfile?: string | undefined
  mode?: string | undefined
  port?: number | undefined
  retries?: number | undefined
  script?: string | undefined
  server?: string | undefined
  srcfile?: string | undefined
  timeout?: number | undefined
  trace?: string | undefined
}
type ConfigTOD = {
  port?: number | undefined
  retries?: number | undefined
  script?: string | undefined
  server?: string | undefined
  timeout?: number | undefined
}
type ConfigWEB = {
  is_persistent_connections?: number | undefined
  password?: string | undefined
  port?: number | undefined
  rule?: string | undefined
  username?: string | undefined
  wsdl?: string | undefined
}
type TimerScript = {
  arg?: string | undefined
  interval?: number | undefined
  script?: string | undefined
}
type TrapDest = { IP?: string | undefined; port?: number | undefined }
type AgentState = { agentNum?: number | undefined; state?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/mimic/access/add/:user/:agents/:mask': {
      $post:
        | {
            input: { param: { user: string; agents: string; mask: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user: string; agents: string; mask: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/access/del/:user': {
      $delete:
        | { input: { param: { user: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { user: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/access/get/acldb': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/access/get/admindir': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/access/get/adminuser': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/access/get/enabled': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/access/list': {
      $get:
        | { input: {}; output: AccessEntry[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/access/load/:filename': {
      $put:
        | {
            input: { param: { filename: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/access/save/:filename': {
      $put:
        | {
            input: { param: { filename: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/access/set/acldb/:databaseName': {
      $put:
        | {
            input: { param: { databaseName: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { databaseName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/access/set/enabled/:enabledOrNot': {
      $put:
        | {
            input: { param: { enabledOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enabledOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/add/:IP': {
      $post:
        | {
            input: { param: { agentNum: number; IP: string } } & { json: Triplet[] }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string } } & { json: Triplet[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/from/add/:IP/:port': {
      $post:
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/from/delete/:IP/:port': {
      $delete:
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/from/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: IPSource[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/changed': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/config_changed': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/delay': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/drops': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/host': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/inform_timeout': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/interface': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/mask': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/mibs': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: Triplet[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/num_starts': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/oiddir': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/owner': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/pdusize': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/port': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/privdir': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/protocol': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/read': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/scen': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/sim': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/start': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/state': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/state_changed': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/validate': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/get/write': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/halt': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/ipalias/add/:IP/:port/:mask/:interface': {
      $post:
        | {
            input: {
              param: { agentNum: number; IP: string; port: number; mask: string; interface: string }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { agentNum: number; IP: string; port: number; mask: string; interface: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/ipalias/delete/:IP/:port': {
      $delete:
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/ipalias/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: IPAlias[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/ipalias/start/:IP/:port': {
      $put:
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/ipalias/status/:IP/:port': {
      $get:
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/ipalias/stop/:IP/:port': {
      $put:
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/pause': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/coap/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/coap/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigCOAP
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/coap/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/coap/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigCOAP
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/coap/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/coap/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/dhcp/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/dhcp/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigDHCP
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/dhcp/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/dhcp/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigDHCP
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/dhcp/params': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/dhcp/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/dhcp/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ipmi/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ipmi/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigIPMI
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ipmi/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ipmi/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigIPMI
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ipmi/get/:attr': {
      $get:
        | {
            input: { param: { agentNum: number; attr: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; attr: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ipmi/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ipmi/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ipmi/set/:attr/:value': {
      $put:
        | {
            input: { param: { agentNum: number; attr: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; attr: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/get/protstate': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/get/state': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/card': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/get/:msgNum/:attr': {
      $get:
        | {
            input: { param: { agentNum: number; msgNum: number; attr: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; msgNum: number; attr: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/message/set/:msgNum/:attr/:value': {
      $put:
        | {
            input: { param: { agentNum: number; msgNum: number; attr: string; value: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; msgNum: number; attr: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/resubscribe/:subNum': {
      $put:
        | {
            input: { param: { agentNum: number; subNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; subNum: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/abort': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/connect': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/runtime/disconnect': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/broker/:brokerAddr': {
      $put:
        | {
            input: { param: { agentNum: number; brokerAddr: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; brokerAddr: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/cleansession/:cleanOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; cleanOrNot: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; cleanOrNot: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/clientid/:clientID': {
      $put:
        | {
            input: { param: { agentNum: number; clientID: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; clientID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/keepalive/:aliveTime': {
      $put:
        | {
            input: { param: { agentNum: number; aliveTime: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; aliveTime: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/on_disconnect/:action': {
      $put:
        | {
            input: { param: { agentNum: number; action: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; action: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/password/:password': {
      $put:
        | {
            input: { param: { agentNum: number; password: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; password: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/port/:port': {
      $put:
        | {
            input: { param: { agentNum: number; port: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/username/:username': {
      $put:
        | {
            input: { param: { agentNum: number; username: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; username: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willmsg/:msg': {
      $put:
        | {
            input: { param: { agentNum: number; msg: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; msg: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willqos/:qos': {
      $put:
        | {
            input: { param: { agentNum: number; qos: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; qos: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willretain/:retain': {
      $put:
        | {
            input: { param: { agentNum: number; retain: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; retain: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/set/willtopic/:topic': {
      $put:
        | {
            input: { param: { agentNum: number; topic: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; topic: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/card': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/get/:subNum/:attr': {
      $get:
        | {
            input: { param: { agentNum: number; subNum: number; attr: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; subNum: number; attr: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/subscribe/set/:subNum/:attr/:value': {
      $put:
        | {
            input: { param: { agentNum: number; subNum: number; attr: string; value: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; subNum: number; attr: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/client/unsubscribe/:subNum': {
      $put:
        | {
            input: { param: { agentNum: number; subNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; subNum: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigMQTT
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigMQTT
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/mqtt/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/dfs_interval/:interval': {
      $put:
        | {
            input: { param: { agentNum: number; interval: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; interval: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/tfs_interval/:interval': {
      $put:
        | {
            input: { param: { agentNum: number; interval: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; interval: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/change/:flowset-uid/:field-num/:attr/:value': {
      $put:
        | {
            input: {
              param: {
                agentNum: number
                'flowset-uid': number
                'field-num': number
                attr: string
                value: string
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                agentNum: number
                'flowset-uid': number
                'field-num': number
                attr: string
                value: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/flow/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigNETFLOW
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigNETFLOW
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/halt': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/reload': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/resume': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/collector/:collectorIP': {
      $put:
        | {
            input: { param: { agentNum: number; collectorIP: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; collectorIP: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/filename/:fileName': {
      $put:
        | {
            input: { param: { agentNum: number; fileName: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; fileName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/netflow/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigPROXY
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigPROXY
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/add/:port/:target/:targetPort': {
      $post:
        | {
            input: { param: { agentNum: number; port: number; target: string; targetPort: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number; target: string; targetPort: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/isStarted/:port': {
      $get:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/remove/:port': {
      $delete:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/start/:port': {
      $put:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/port/stop/:port': {
      $put:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/proxy/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSFLOW
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSFLOW
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/halt': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/reload': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/resume': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/sflow/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSNMPTCP
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSNMPTCP
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/disable/:ipaddress/:port': {
      $put:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/enable/:ipaddress/:port': {
      $put:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/isenabled/:ipaddress/:port': {
      $get:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/ipalias/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: IPAlias[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmptcp/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/add/:groupName/:prefix/:securityModel/:securityLevel/:contextMatch/:readView/:writeView/:notifyView': {
      $post:
        | {
            input: {
              param: {
                agentNum: number
                groupName: string
                prefix: string
                securityModel: string
                securityLevel: string
                contextMatch: string
                readView: string
                writeView: string
                notifyView: string
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                agentNum: number
                groupName: string
                prefix: string
                securityModel: string
                securityLevel: string
                contextMatch: string
                readView: string
                writeView: string
                notifyView: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/clear': {
      $delete:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/del/:accessName': {
      $delete:
        | {
            input: { param: { agentNum: number; accessName: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; accessName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/access/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSNMPv3
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/context_engineid': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/engineboots': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/engineid': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/get/enginetime': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/add/:groupName/:securityModel/:securityName': {
      $post:
        | {
            input: {
              param: {
                agentNum: number
                groupName: string
                securityModel: string
                securityName: string
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                agentNum: number
                groupName: string
                securityModel: string
                securityName: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/clear': {
      $delete:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/del/:groupName': {
      $delete:
        | {
            input: { param: { agentNum: number; groupName: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; groupName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/group/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/set/config/:parameter/:value': {
      $put:
        | {
            input: { param: { agentNum: number; parameter: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; parameter: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/add/:userName/:securityName/:authProtocol/:authKey/:privProtocol/:privKey': {
      $post:
        | {
            input: {
              param: {
                agentNum: number
                userName: string
                securityName: string
                authProtocol: string
                authKey: string
                privProtocol: string
                privKey: string
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                agentNum: number
                userName: string
                securityName: string
                authProtocol: string
                authKey: string
                privProtocol: string
                privKey: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/clear': {
      $delete:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/del/:userName': {
      $delete:
        | {
            input: { param: { agentNum: number; userName: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; userName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/user/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/usm/save': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/usm/saveas/:filename': {
      $put:
        | {
            input: { param: { agentNum: number; filename: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; filename: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/vacm/save': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/vacm/saveas/:filename': {
      $put:
        | {
            input: { param: { agentNum: number; filename: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; filename: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/add/:viewName/:viewType/:subtree/:mask': {
      $post:
        | {
            input: {
              param: {
                agentNum: number
                viewName: string
                viewType: string
                subtree: string
                mask: string
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                agentNum: number
                viewName: string
                viewType: string
                subtree: string
                mask: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/clear': {
      $delete:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/del/:viewName': {
      $delete:
        | {
            input: { param: { agentNum: number; viewName: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; viewName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/snmpv3/view/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSSH
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSSH
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/disable/:ipaddress/:port': {
      $put:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/enable/:ipaddress/:port': {
      $put:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/isenabled/:ipaddress/:port': {
      $get:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/ipalias/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: IPAlias[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/ssh/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSYSLOG
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigSYSLOG
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/get/:attr': {
      $get:
        | {
            input: { param: { agentNum: number; attr: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; attr: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/send/:pri': {
      $post:
        | {
            input: { param: { agentNum: number; pri: number } } & { json: SyslogMsg }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; pri: number } } & { json: SyslogMsg }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/syslog/set/:attr/:value': {
      $put:
        | {
            input: { param: { agentNum: number; attr: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; attr: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/logon/:connectionID/:user/:password': {
      $put:
        | {
            input: {
              param: { agentNum: number; connectionID: number; user: string; password: string }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { agentNum: number; connectionID: number; user: string; password: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/request/:connectionID/:command': {
      $put:
        | {
            input: { param: { agentNum: number; connectionID: number; command: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; connectionID: number; command: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/connection/signal/:connectionID/:signalName': {
      $put:
        | {
            input: { param: { agentNum: number; connectionID: number; signalName: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; connectionID: number; signalName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigTELNET
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigTELNET
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/disable/:ipaddress/:port': {
      $put:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/enable/:ipaddress/:port': {
      $put:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/isenabled/:ipaddress/:port': {
      $get:
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; ipaddress: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/ipalias/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: IPAlias[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/connections': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/keymap': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/rulesdb': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/state': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/userdb': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/server/get/users': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: TelnetUser[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/telnet/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigTFTP
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigTFTP
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/session/read/server/:srcfile': {
      $post:
        | {
            input: { param: { agentNum: number; srcfile: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; srcfile: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/session/write/server/:srcfile': {
      $post:
        | {
            input: { param: { agentNum: number; srcfile: string } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; srcfile: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/get/:parameter': {
      $get:
        | {
            input: { param: { agentNum: number; sessionID: string; parameter: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; sessionID: string; parameter: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/set/:parameter/:value': {
      $put:
        | {
            input: {
              param: { agentNum: number; sessionID: string; parameter: string; value: string }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { agentNum: number; sessionID: string; parameter: string; value: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/start': {
      $put:
        | {
            input: { param: { agentNum: number; sessionID: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; sessionID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/status': {
      $get:
        | {
            input: { param: { agentNum: number; sessionID: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; sessionID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tftp/:sessionID/stop': {
      $put:
        | {
            input: { param: { agentNum: number; sessionID: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; sessionID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tod/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tod/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigTOD
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tod/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tod/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigTOD
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tod/gettime/server/:serverAddr/port/:portNum/script/:scriptName/timeout/:timeSec/retries/:numRetries': {
      $get:
        | {
            input: {
              param: {
                agentNum: number
                serverAddr: string
                portNum: number
                scriptName: string
                timeSec: number
                numRetries: number
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                agentNum: number
                serverAddr: string
                portNum: number
                scriptName: string
                timeSec: number
                numRetries: number
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tod/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/tod/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/get/args': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/get/config': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigWEB
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/get/statistics': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/get/trace': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: ConfigWEB
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/port/add/:port': {
      $post:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/port/exists/:port': {
      $get:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/port/remove/:port': {
      $delete:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/port/set/:port/:protocol/:version': {
      $put:
        | {
            input: { param: { agentNum: number; port: number; protocol: string; version: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number; protocol: string; version: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/port/start/:port': {
      $put:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/port/stop/:port': {
      $put:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/set/config/:argument/:value': {
      $put:
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; argument: string; value: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/msg/web/set/trace/:enableOrNot': {
      $put:
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; enableOrNot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/protocol/:prot/get/config': {
      $get:
        | {
            input: { param: { agentNum: number; prot: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; prot: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/reload': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/remove': {
      $delete:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/resume': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/save': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/set/delay/:delay': {
      $put:
        | {
            input: { param: { agentNum: number; delay: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; delay: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/drops/:drops': {
      $put:
        | {
            input: { param: { agentNum: number; drops: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; drops: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/host/:host': {
      $put:
        | {
            input: { param: { agentNum: number; host: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; host: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/inform_timeout/:inform_timeout': {
      $put:
        | {
            input: { param: { agentNum: number; inform_timeout: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; inform_timeout: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/interface/:interface': {
      $put:
        | {
            input: { param: { agentNum: number; interface: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; interface: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/mask/:mask': {
      $put:
        | {
            input: { param: { agentNum: number; mask: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; mask: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/mibs': {
      $put:
        | {
            input: { param: { agentNum: number } } & { json: Triplet[] }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number } } & { json: Triplet[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/oiddir/:oiddir': {
      $put:
        | {
            input: { param: { agentNum: number; oiddir: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; oiddir: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/owner/:owner': {
      $put:
        | {
            input: { param: { agentNum: number; owner: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; owner: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/pdusize/:pdusize': {
      $put:
        | {
            input: { param: { agentNum: number; pdusize: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; pdusize: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/port/:port': {
      $put:
        | {
            input: { param: { agentNum: number; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/privdir/:privdir': {
      $put:
        | {
            input: { param: { agentNum: number; privdir: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; privdir: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/protocol': {
      $put:
        | {
            input: { param: { agentNum: number } } & { json: string[] }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/read/:read': {
      $put:
        | {
            input: { param: { agentNum: number; read: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; read: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/start/:start': {
      $put:
        | {
            input: { param: { agentNum: number; start: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; start: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/trace/:trace': {
      $put:
        | {
            input: { param: { agentNum: number; trace: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; trace: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/validate/:validate': {
      $put:
        | {
            input: { param: { agentNum: number; validate: number } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; validate: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/set/write/:write': {
      $put:
        | {
            input: { param: { agentNum: number; write: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; write: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/start': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/stop': {
      $put:
        | {
            input: { param: { agentNum: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/store/copy/:otherAgent': {
      $put:
        | {
            input: { param: { agentNum: number; otherAgent: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; otherAgent: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/store/exists/:var': {
      $get:
        | {
            input: { param: { agentNum: number; var: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; var: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/store/get/:var': {
      $get:
        | {
            input: { param: { agentNum: number; var: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; var: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/store/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/store/lreplace/:var/:index': {
      $put:
        | {
            input: { param: { agentNum: number; var: string; index: number } } & { json: string }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; var: string; index: number } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/store/persists/:var': {
      $get:
        | {
            input: { param: { agentNum: number; var: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; var: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/store/set/:var/:persist': {
      $put:
        | {
            input: { param: { agentNum: number; var: string; persist: number } } & { json: string }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; var: string; persist: number } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/store/unset/:var': {
      $put:
        | {
            input: { param: { agentNum: number; var: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; var: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/timer/script/add/:script/:interval/:arg': {
      $post:
        | {
            input: { param: { agentNum: number; script: string; interval: number; arg: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; script: string; interval: number; arg: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/timer/script/delete/:script/:interval/:arg': {
      $delete:
        | {
            input: { param: { agentNum: number; script: string; interval: number; arg: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; script: string; interval: number; arg: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/timer/script/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: TimerScript[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/trap/config/add/:IP/:port': {
      $post:
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/trap/config/delete/:IP/:port': {
      $delete:
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; IP: string; port: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/trap/config/list': {
      $get:
        | {
            input: { param: { agentNum: number } }
            output: TrapDest[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agentNum: number } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/agent/:agentNum/trap/list': {
      $get: {
        input: { param: { agentNum: number } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mimic/agent/:agentNum/value/add/:object/:instance': {
      $post:
        | {
            input: { param: { agentNum: number; object: string; instance: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string; instance: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/eval/:object/:instance': {
      $get:
        | {
            input: { param: { agentNum: number; object: string; instance: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string; instance: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/get/:object/:instance/:variable': {
      $get:
        | {
            input: {
              param: { agentNum: number; object: string; instance: string; variable: string }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { agentNum: number; object: string; instance: string; variable: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/info/:object': {
      $get:
        | {
            input: { param: { agentNum: number; object: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/instances/:object': {
      $get:
        | {
            input: { param: { agentNum: number; object: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/list/:OID': {
      $get:
        | {
            input: { param: { agentNum: number; OID: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; OID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/meval/:objInsArray': {
      $get:
        | {
            input: { param: { agentNum: number; objInsArray: string[][] } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; objInsArray: string[][] } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/mget/:objInsVarArray': {
      $get:
        | {
            input: { param: { agentNum: number; objInsVarArray: string[][] } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; objInsVarArray: string[][] } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/mib/:object': {
      $get:
        | {
            input: { param: { agentNum: number; object: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/mset': {
      $put:
        | {
            input: { param: { agentNum: number } } & { json: string[][] }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number } } & { json: string[][] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/munset': {
      $put:
        | {
            input: { param: { agentNum: number } } & { json: string[][] }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number } } & { json: string[][] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/name/:OID': {
      $get:
        | {
            input: { param: { agentNum: number; OID: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; OID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/oid/:object': {
      $get:
        | {
            input: { param: { agentNum: number; object: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/remove/:object/:instance': {
      $delete:
        | {
            input: { param: { agentNum: number; object: string; instance: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string; instance: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/set/:object/:instance/:variable': {
      $put:
        | {
            input: {
              param: { agentNum: number; object: string; instance: string; variable: string }
            } & { json: string }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { agentNum: number; object: string; instance: string; variable: string }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/split/:OID': {
      $get:
        | {
            input: { param: { agentNum: number; OID: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; OID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/state/get/:object': {
      $get:
        | {
            input: { param: { agentNum: number; object: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/state/set/:object/:state': {
      $put:
        | {
            input: { param: { agentNum: number; object: string; state: number } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string; state: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/unset/:object/:instance/:variable': {
      $put:
        | {
            input: {
              param: { agentNum: number; object: string; instance: string; variable: string }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { agentNum: number; object: string; instance: string; variable: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/agent/:agentNum/value/variables/:object/:instance': {
      $get:
        | {
            input: { param: { agentNum: number; object: string; instance: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentNum: number; object: string; instance: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/clear/:firstAgentNum/:lastAgentNum': {
      $put: {
        input: { param: { firstAgentNum: number; lastAgentNum: number } }
        output: { [x: string]: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mimic/get/active_data_list': {
      $get: { input: {}; output: number[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/active_list': {
      $get: { input: {}; output: number[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/cfgfile': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/cfgfile_changed': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/changed_config_list': {
      $get: { input: {}; output: number[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/changed_state_list': {
      $get: { input: {}; output: AgentState[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/clients': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/configured_list': {
      $get: { input: {}; output: number[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/interfaces': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/last': { $get: { input: {}; output: number; outputFormat: 'json'; status: 200 } }
  } & {
    '/mimic/get/log': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/max': { $get: { input: {}; output: number; outputFormat: 'json'; status: 200 } }
  } & {
    '/mimic/get/netaddr': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/netdev': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/product': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/protocols': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/return': {
      $get: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/get/version': { $get: { input: {}; output: string; outputFormat: 'json'; status: 200 } }
  } & {
    '/mimic/load/:cfgFile/:firstAgentNum/:lastAgentNum/:startAgentNum': {
      $put: {
        input: {
          param: {
            cfgFile: string
            firstAgentNum: number
            lastAgentNum: number
            startAgentNum: number
          }
        }
        output: { [x: string]: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mimic/mget/:infoArray': {
      $get:
        | {
            input: { param: { infoArray: string[] } }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { infoArray: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/protocol/msg/coap/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/dhcp/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/ipmi/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/mqtt/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/netflow/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/proxy/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/sflow/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/snmptcp/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/ssh/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/syslog/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/telnet/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/tftp/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/tod/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/protocol/msg/web/get/stats_hdr': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/save': {
      $put: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/saveas/:cfgFile/:firstAgentNum/:lastAgentNum': {
      $put: {
        input: { param: { cfgFile: string; firstAgentNum: number; lastAgentNum: number } }
        output: { [x: string]: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mimic/set/log': {
      $put: { input: { json: string }; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/set/netdev': {
      $put: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/set/persistent': {
      $put: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/start': {
      $put: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/stop': {
      $put: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/store/exists/:var': {
      $get:
        | { input: { param: { var: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { var: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/store/get/:var': {
      $get:
        | { input: { param: { var: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { var: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/store/list': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/store/lreplace/:var/:index': {
      $put:
        | {
            input: { param: { var: string; index: number } } & { json: string }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { var: string; index: number } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/store/persists/:var': {
      $get:
        | { input: { param: { var: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { var: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/store/set/:var/:persist': {
      $put:
        | {
            input: { param: { var: string; persist: number } } & { json: string }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { var: string; persist: number } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/store/unset/:var': {
      $put:
        | { input: { param: { var: string } }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { param: { var: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/mimic/terminate': {
      $put: { input: {}; output: { [x: string]: number }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/mimic/timer/script/add/:script/:interval/:arg': {
      $post:
        | {
            input: { param: { script: string; interval: number; arg: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { script: string; interval: number; arg: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/timer/script/delete/:script/:interval/:arg': {
      $delete:
        | {
            input: { param: { script: string; interval: number; arg: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { script: string; interval: number; arg: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/mimic/timer/script/list': {
      $get:
        | { input: {}; output: TimerScript[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
