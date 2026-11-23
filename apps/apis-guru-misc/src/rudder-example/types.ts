type ChangeRequest = {
  acceptable?: boolean | undefined
  changes?: { rules?: { action?: string | undefined }[] | undefined } | undefined
  'created by'?: string | undefined
  description?: string | undefined
  id?: number | undefined
  name?: string | undefined
  status?:
    | 'Deployed'
    | 'Pending deployment'
    | 'Cancelled'
    | 'Pending validation'
    | 'Open'
    | undefined
}
type Color = { alpha: number; blue: number; green: number; red: number }
type Logo = { enable: boolean }
type BrandingConf = {
  barColor: Color
  displayBar: boolean
  displayBarLogin: boolean
  displayLabel: boolean
  displayMotd: boolean
  labelColor: Color
  labelText: string
  motd: string
  smallLogo: Logo
  wideLogo: Logo
}
type CveDetails = {
  cvssv2?: { baseScore?: number | undefined; vector?: string | undefined } | undefined
  cvssv3?:
    | {
        baseScore?: number | undefined
        baseSeverity?: 'critical' | 'high' | 'medium' | 'low' | 'none' | undefined
        vector?: string | undefined
      }
    | undefined
  cweIds?: string[] | undefined
  description?: string | undefined
  id?: string | undefined
  lastModifiedDate?: string | undefined
  publishedDate?: string | undefined
}
type CveCheck = {
  cveId?: string | undefined
  nodes?: string[] | undefined
  packages?: { name?: string | undefined; version?: string | undefined }[] | undefined
}
type Datasource = {
  description?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  runParameters?:
    | {
        onGeneration?: boolean | undefined
        onNewNode?: boolean | undefined
        schedule?: { type?: 'scheduled' | 'notscheduled' | undefined } | undefined
      }
    | undefined
  type?:
    | {
        name?: 'HTTP' | undefined
        parameters?:
          | {
              checkSsl?: boolean | undefined
              headers?: { name?: string | undefined; value?: string | undefined }[] | undefined
              path?: string | undefined
              requestMethod?: 'GET' | 'POST' | undefined
              requestMode?: { name?: 'byNode' | undefined } | undefined
              requestTimeout?: number | undefined
              url?: string | undefined
            }
          | undefined
      }
    | undefined
  updateTimeout?: number | undefined
}
type Directive = {
  displayName?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  longDescription?: string | undefined
  parameters?: { [x: string]: unknown } | undefined
  policyMode?: 'enforce' | 'audit' | undefined
  priority?: number | undefined
  shortDescription?: string | undefined
  system?: boolean | undefined
  tags?: { name?: string | undefined }[] | undefined
  techniqueName?: string | undefined
  techniqueVersion?: string | undefined
}
type DirectiveNew = {
  displayName?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  longDescription?: string | undefined
  parameters?: { [x: string]: unknown } | undefined
  priority?: number | undefined
  shortDescription?: string | undefined
  source?: string | undefined
  system?: boolean | undefined
  tags?: { name?: string | undefined }[] | undefined
  techniqueName?: string | undefined
  techniqueVersion?: string | undefined
}
type Group = {
  description?: string | undefined
  displayName?: string | undefined
  dynamic?: boolean | undefined
  enabled?: boolean | undefined
  groupClass?: string[] | undefined
  id?: string | undefined
  nodeIds?: string[] | undefined
  properties?: { name: string; value: { [x: string]: unknown } }[] | undefined
  query?:
    | {
        composition?: 'and' | 'or' | undefined
        select?: string | undefined
        where?:
          | {
              attribute?: string | undefined
              comparator?: string | undefined
              objectType?: string | undefined
              value?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type GroupNew = {
  category: string
  description?: string | undefined
  displayName: string
  dynamic?: boolean | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  properties?: { name: string; value: { [x: string]: unknown } }[] | undefined
  query?:
    | {
        composition?: 'and' | 'or' | undefined
        select?: string | undefined
        where?:
          | {
              attribute?: string | undefined
              comparator?: string | undefined
              objectType?: string | undefined
              value?: string | undefined
            }[]
          | undefined
      }
    | undefined
  source?: string | undefined
}
type GroupCategory = {
  description?: string | undefined
  id?: string | undefined
  name: string
  parent: string
}
type GroupCategoryUpdate = { description?: string | undefined; name: string; parent: string }
type GroupUpdate = {
  category?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  dynamic?: boolean | undefined
  enabled?: boolean | undefined
  query?:
    | {
        composition?: 'and' | 'or' | undefined
        select?: string | undefined
        where?:
          | {
              attribute?: string | undefined
              comparator?: string | undefined
              objectType?: string | undefined
              value?: string | undefined
            }[]
          | undefined
      }
    | undefined
}
type ApiVersion = {
  all?: { status: { [x: string]: unknown }; version: number }[] | undefined
  latest?: number | undefined
}
type ApiVersions = { all?: ApiVersion[] | undefined; latest?: number | undefined }
type ApiEndpoints = {
  endpointName?: string | undefined
  httpVerb?: { [x: string]: unknown } | undefined
}[]
type MethodParameter = {
  constraints: {
    allow_empty_string: boolean
    allow_whitespace_string: boolean
    max_length: number
    min_length: number
    not_regex: string
    regex: string
    select: string[]
  }
  description: string
  name: string
  typ: string
}
type Methods = {
  agents: string[]
  category: string
  condition: { parameter?: string | undefined; prefix?: string | undefined }
  deprecated: { info?: string | undefined; replacedBy?: string | undefined }
  desc: string
  documentation: string
  id: string
  name: string
  parameters: MethodParameter[]
  version: string
}
type NodeFull = {
  accounts?: string[] | undefined
  architectureDescription?: string | undefined
  bios?:
    | {
        description?: string | undefined
        editor?: string | undefined
        name?: string | undefined
        quantity?: number | undefined
        releaseDate?: string | undefined
        version?: string | undefined
      }
    | undefined
  controllers?:
    | {
        description?: string | undefined
        manufacturer?: string | undefined
        name?: string | undefined
        quantity?: number | undefined
        type?: string | undefined
      }[]
    | undefined
  description?: string | undefined
  environmentVariables?: { name?: string | undefined; value?: string | undefined }[] | undefined
  fileSystems?:
    | {
        description?: string | undefined
        fileCount?: number | undefined
        freeSpace?: number | undefined
        mountPoint?: string | undefined
        name?: string | undefined
        totalSpace?: number | undefined
      }[]
    | undefined
  hostname: string
  id: string
  ipAddresses: string[]
  lastInventoryDate?: string | undefined
  lastRunDate?: string | undefined
  machine?:
    | {
        id?: string | undefined
        manufacturer?: string | undefined
        provider?: string | undefined
        serialNumber?: string | undefined
        type?: 'Physical' | 'Virtual' | undefined
      }
    | undefined
  managementTechnology: {
    capabilities?: string[] | undefined
    name: string
    nodeKind?: string | undefined
    rootComponents?: string[] | undefined
    version?: string | undefined
  }[]
  managementTechnologyDetails?:
    | { cfengineKeys?: string[] | undefined; cfengineUser?: string | undefined }
    | undefined
  memories?:
    | {
        capacity?: number | undefined
        caption?: string | undefined
        description?: string | undefined
        name?: string | undefined
        quantity?: string | undefined
        serialNumber?: string | undefined
        slotNumber?: number | undefined
        speed?: number | undefined
        type?: string | undefined
      }[]
    | undefined
  networkInterfaces?:
    | {
        dhcpServer?: string | undefined
        ipAddresses?: string[] | undefined
        macAddress?: string | undefined
        mask?: string[] | undefined
        name?: string | undefined
        speed?: string | undefined
        status?: string | undefined
        type?: string | undefined
      }[]
    | undefined
  os?:
    | {
        fullName: string
        kernelVersion: string
        name: string
        servicePack?: string | undefined
        type: 'Windows' | 'Linux' | 'AIX' | 'FreeBSD'
        version: string
      }
    | undefined
  policyMode?: 'enforce' | 'audit' | 'default' | undefined
  policyServerId: string
  ports?:
    | {
        description?: string | undefined
        name?: string | undefined
        quantity?: number | undefined
        type?: string | undefined
      }[]
    | undefined
  processes?:
    | {
        cpuUsage?: number | undefined
        description?: string | undefined
        memory?: number | undefined
        name?: string | undefined
        pid?: number | undefined
        started?: string | undefined
        tty?: string | undefined
        user?: string | undefined
        virtualMemory?: number | undefined
      }[]
    | undefined
  processors?:
    | {
        arch?: string | undefined
        core?: number | undefined
        cpuid?: string | undefined
        description?: string | undefined
        externalClock?: string | undefined
        familyName?: string | undefined
        manufacturer?: string | undefined
        model?: number | undefined
        name?: string | undefined
        quantity?: number | undefined
        speed?: number | undefined
        stepping?: number | undefined
        thread?: number | undefined
      }[]
    | undefined
  properties: { name: string; value: { [x: string]: unknown } }[]
  ram?: number | undefined
  slots?:
    | {
        description?: string | undefined
        name?: string | undefined
        quantity?: number | undefined
        status?: string | undefined
      }[]
    | undefined
  software?:
    | {
        description?: string | undefined
        editor?: string | undefined
        license?:
          | {
              description?: string | undefined
              expirationDate?: string | undefined
              name?: string | undefined
              oem?: string | undefined
              productId?: string | undefined
              productKey?: string | undefined
            }
          | undefined
        name?: string | undefined
        releaseDate?: string | undefined
        version?: string | undefined
      }[]
    | undefined
  softwareUpdate?:
    | {
        arch?: string | undefined
        description?: string | undefined
        from?: string | undefined
        ids?: string[] | undefined
        kind?: 'none' | 'security' | 'defect' | 'enhancement' | 'other' | undefined
        name?: string | undefined
        severity?: 'critical' | 'high' | 'moderate' | 'low' | 'other' | undefined
        source?: string | undefined
        version?: string | undefined
      }[]
    | undefined
  sound?:
    | {
        description?: string | undefined
        name?: string | undefined
        quantity?: number | undefined
      }[]
    | undefined
  status: 'pending' | 'accepted' | 'deleted'
  storage?:
    | {
        description?: string | undefined
        firmware?: string | undefined
        manufacturer?: string | undefined
        model?: string | undefined
        name?: string | undefined
        quantity?: number | undefined
        serialNumber?: string | undefined
        size?: number | undefined
        type?: string | undefined
      }[]
    | undefined
  timezone?: { name: string; offset?: string | undefined } | undefined
  videos?:
    | {
        chipset?: string | undefined
        description?: string | undefined
        memory?: string | undefined
        name?: string | undefined
        quantity?: number | undefined
        resolution?: string | undefined
      }[]
    | undefined
  virtualMachines?:
    | {
        description?: string | undefined
        memory?: string | undefined
        name?: string | undefined
        owner?: string | undefined
        status?: string | undefined
        subsystem?: string | undefined
        type?: string | undefined
        uuid?: string | undefined
        vcpu?: string | undefined
      }[]
    | undefined
}
type AgentKey = { status?: 'certified' | 'undefined' | undefined; value: string }
type Os = {
  fullName: string
  name:
    | 'debian'
    | 'kali'
    | 'ubuntu'
    | 'redhat'
    | 'centos'
    | 'fedora'
    | 'suse'
    | 'oracle'
    | 'scientific'
    | 'slackware'
    | 'xp'
    | 'vista'
    | 'seven'
    | '10'
    | '2000'
    | '2003'
    | '2008 r2'
    | '2012'
    | '2012 r2'
    | '2016'
  servicePack?: string | undefined
  type: 'linux' | 'windows' | 'solaris' | 'aix' | 'freebsd' | 'unknown'
  version: string
}
type Timezone = { name: string; offset: string }
type NodeAdd = {
  agentKey?: AgentKey | undefined
  hostname: string
  id: string
  ipAddresses: string[]
  machineType:
    | 'vmware'
    | 'physical'
    | 'vm'
    | 'solariszone'
    | 'qemu'
    | 'xen'
    | 'aixlpar'
    | 'hyperv'
    | 'bsdjail'
  os: Os
  policyMode?: 'enforce' | 'audit' | undefined
  policyServerId?: string | undefined
  properties: { name: string; value: { [x: string]: unknown } }[]
  state?: 'enabled' | 'ignored' | 'empty-policies' | 'initializing' | 'preparing-eol' | undefined
  status: 'accepted' | 'pending'
  timezone?: Timezone | undefined
}[]
type NodeSettings = {
  agentKey?: AgentKey | undefined
  policyMode?: 'audit' | 'enforce' | 'default' | undefined
  properties?: { name: string; value: { [x: string]: unknown } }[] | undefined
  state?: 'enabled' | 'ignored' | 'empty-policies' | 'initializing' | 'preparing-eol' | undefined
}
type NodeInheritedProperties = {
  id: string
  properties: {
    hierarchy?:
      | {
          id?: string | undefined
          kind: 'global' | 'group'
          name?: string | undefined
          value: string
        }[]
      | undefined
    name: string
    origval?: { [x: string]: unknown } | undefined
    provider?: 'inherited' | 'overridden' | 'plugin name like datasources' | undefined
    value: { [x: string]: unknown }
  }[]
}
type Parameter = {
  description?: string | undefined
  id: string
  overridable?: boolean | undefined
  value?: { [x: string]: unknown } | undefined
}
type RuleTarget =
  | 'special:all'
  | 'special:all_exceptPolicyServers'
  | 'special:all_policyServers'
  | 'policyServer:${policyServerId}'
  | 'group:${nodeGroupId}'
type RuleTargets = {
  exclude: { or?: RuleTarget[] | undefined }
  include: { or?: RuleTarget[] | undefined }
}[]
type Rule = {
  directives?: string[] | undefined
  displayName?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  longDescription?: string | undefined
  shortDescription?: string | undefined
  system?: boolean | undefined
  tags?: { name?: string | undefined }[] | undefined
  targets?: RuleTargets | undefined
}
type RuleNew = {
  category?: string | undefined
  directives?: string[] | undefined
  displayName?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  longDescription?: string | undefined
  shortDescription?: string | undefined
  source?: string | undefined
  system?: boolean | undefined
  tags?: { name?: string | undefined }[] | undefined
  targets?: RuleTargets | undefined
}
type RuleCategory = {
  description?: string | undefined
  id?: string | undefined
  name: string
  parent: string
}
type RuleCategoryUpdate = { description?: string | undefined; name: string; parent: string }
type RuleWithCategory = {
  category?: string | undefined
  directives?: string[] | undefined
  displayName?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  longDescription?: string | undefined
  shortDescription?: string | undefined
  system?: boolean | undefined
  tags?: { name?: string | undefined }[] | undefined
  targets?: RuleTargets | undefined
}
type Secrets = {
  description?: string | undefined
  name?: string | undefined
  value?: string | undefined
}
type Check = { msg: string; name: string; status: 'Critical' | 'Warning' | 'Ok' }
type TechniqueMethodCall = {
  component?: string | undefined
  condition?: string | undefined
  disableReporting?: boolean | undefined
  id?: string | undefined
  method?: string | undefined
  parameters?: { name?: string | undefined; value?: string | undefined }[] | undefined
}
type TechniqueBlock = {
  calls?: (TechniqueMethodCall | TechniqueBlock)[] | undefined
  component?: string | undefined
  condition?: string | undefined
  id?: string | undefined
  reportingLogic?: { type?: string | undefined; value?: string | undefined } | undefined
}
type TechniqueParameter = {
  description?: string | undefined
  id?: string | undefined
  mayBeEmpty?: boolean | undefined
  name?: string | undefined
}
type TechniqueResource = { name?: string | undefined; state?: string | undefined }
type EditorTechnique = {
  calls?: (TechniqueMethodCall | TechniqueBlock)[] | undefined
  category?: string | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  parameters?: TechniqueParameter[] | undefined
  resources?: TechniqueResource[] | undefined
  source?: string | undefined
  version?: string | undefined
}
type Techniques = EditorTechnique[]
type Category = { id: string; name: string; path: string; subcategories: Category[] }
type CategoriesTree = { id: string; name: string; path: string; subcategories: Category[] }
type TechniquesVersions = { name?: string | undefined; versions?: string[] | undefined }[]
type TechniquesResources = { name?: string | undefined; state?: string | undefined }[]
type TechniquesRevisions = { author: string; date: string; message: string; revision: string }[]
type Users = {
  isPreHahed?: false | true | undefined
  password?: string | undefined
  role?: string[] | undefined
  username?: string | undefined
}
type ValidatedUser = { isValidated: boolean; userExists: boolean; username: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/changeRequests': {
      $get: {
        input: {}
        output: {
          action: 'listChangeRequests'
          data: { rules: ChangeRequest[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/archives/export': {
      $get: {
        input: {
          query: {
            rules?: { [x: string]: unknown }[] | undefined
            directives?: { [x: string]: unknown }[] | undefined
            techniques?: { [x: string]: unknown }[] | undefined
            groups?: { [x: string]: unknown }[] | undefined
            include?:
              | ('all (default)' | 'none' | 'directives' | 'techniques' | 'groups')[]
              | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/archives/import': {
      $post: {
        input: { form: { archive?: File | undefined } }
        output: {
          action: 'import'
          data: { archiveImported?: boolean | undefined }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/branding': {
      $get: {
        input: {}
        output: {
          action: 'getBrandingConf'
          data: { branding: BrandingConf }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: BrandingConf }
        output: {
          action: 'updateBRandingConf'
          data: { branding: BrandingConf }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/branding/reload': {
      $post: {
        input: {}
        output: {
          action: 'getBrandingConf'
          data: { branding: BrandingConf }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/changeRequests/:changeRequestId': {
      $delete: {
        input: { param: { changeRequestId: number } }
        output: {
          action: 'declineChangeRequest'
          data: { rules: ChangeRequest[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { changeRequestId: number } }
        output: {
          action: 'changeRequestDetails'
          data: { rules: ChangeRequest[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { changeRequestId: number } } & {
          json: { description?: string | undefined; name?: string | undefined }
        }
        output: {
          action: 'updateChangeRequest'
          data: { rules: ChangeRequest[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/changeRequests/:changeRequestId/accept': {
      $post: {
        input: { param: { changeRequestId: number } } & {
          json: { status?: 'pending deployment' | 'deployed' | undefined }
        }
        output: {
          action: 'acceptChangeRequest'
          data: { rules: ChangeRequest[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/compliance': {
      $get: {
        input: { query: { precision?: number | undefined } }
        output: {
          action: 'getGlobalCompliance'
          data: {
            globalCompliance: {
              compliance: number
              complianceDetails?:
                | {
                    error?: number | undefined
                    noReport?: number | undefined
                    successAlreadyOK?: number | undefined
                    successNotApplicable?: number | undefined
                    successRepaired?: number | undefined
                    unexpectedMissingComponent?: number | undefined
                    unexpectedUnknownComponent?: number | undefined
                  }
                | undefined
            }
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/compliance/nodes': {
      $get: {
        input: { query: { level?: number | undefined; precision?: number | undefined } }
        output: {
          action: 'getNodesCompliance'
          data: {
            nodes: {
              compliance: number
              complianceDetails: {
                error?: number | undefined
                noReport?: number | undefined
                successAlreadyOK?: number | undefined
                successNotApplicable?: number | undefined
                successRepaired?: number | undefined
                unexpectedMissingComponent?: number | undefined
                unexpectedUnknownComponent?: number | undefined
              }
              id: string
              mode: 'full-compliance' | 'changes-only' | 'reports-disabled'
            }[]
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/compliance/nodes/:nodeId': {
      $get: {
        input: { param: { nodeId: string } } & {
          query: { level?: number | undefined; precision?: number | undefined }
        }
        output: {
          action: 'getNodeCompliance'
          data: {
            nodes: {
              compliance: number
              complianceDetails: {
                error?: number | undefined
                noReport?: number | undefined
                successAlreadyOK?: number | undefined
                successNotApplicable?: number | undefined
                successRepaired?: number | undefined
                unexpectedMissingComponent?: number | undefined
                unexpectedUnknownComponent?: number | undefined
              }
              id: string
              mode: 'full-compliance' | 'changes-only' | 'reports-disabled'
            }[]
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/compliance/rules': {
      $get: {
        input: { query: { level?: number | undefined; precision?: number | undefined } }
        output: {
          action: 'getRulesCompliance'
          data: {
            rules: {
              compliance: number
              complianceDetails: {
                error?: number | undefined
                noReport?: number | undefined
                successAlreadyOK?: number | undefined
                successNotApplicable?: number | undefined
                successRepaired?: number | undefined
                unexpectedMissingComponent?: number | undefined
                unexpectedUnknownComponent?: number | undefined
              }
              id: string
              mode: 'full-compliance' | 'changes-only' | 'reports-disabled'
            }[]
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/compliance/rules/:ruleId': {
      $get: {
        input: { param: { ruleId: string } } & {
          query: { level?: number | undefined; precision?: number | undefined }
        }
        output: {
          action: 'getRuleCompliance'
          data: {
            rules: {
              compliance: number
              complianceDetails: {
                error?: number | undefined
                noReport?: number | undefined
                successAlreadyOK?: number | undefined
                successNotApplicable?: number | undefined
                successRepaired?: number | undefined
                unexpectedMissingComponent?: number | undefined
                unexpectedUnknownComponent?: number | undefined
              }
              id: string
              mode: 'full-compliance' | 'changes-only' | 'reports-disabled'
            }[]
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cve': {
      $get: {
        input: {}
        output: { action: 'getAllCve'; data: { CVEs: CveDetails[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cve/check': {
      $post: {
        input: {}
        output: { action: 'checkCVE'; data: { cveChecks: CveCheck[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cve/check/config': {
      $get: {
        input: {}
        output: {
          action: 'getCVECheckConfiguration'
          data: { apiKey?: string | undefined; url?: string | undefined }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { apiKey?: string | undefined; url?: string | undefined } }
        output: {
          action: 'updateCVECheckConfiguration'
          data: { apiKey?: string | undefined; url?: string | undefined }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cve/check/last': {
      $get: {
        input: {}
        output: {
          action: 'getLastCVECheck'
          data: { CVEChecks: CveCheck[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cve/list': {
      $post: {
        input: { json: { cveIds?: string[] | undefined } }
        output: { action: 'getCVEList'; data: { CVEs: CveDetails[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cve/update/': {
      $post: {
        input: { json: { url?: string | undefined; years?: string[] | undefined } }
        output: { action: 'updateCVE'; data: { CVEs: number }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cve/update/fs': {
      $post: {
        input: {}
        output: { action: 'readCVEfromFS'; data: { CVEs: number }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasources': {
      $get: {
        input: {}
        output: {
          action: 'getAllDataSources'
          data: { datasources: Datasource[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: Datasource }
        output: {
          action: 'createDataSource'
          data: { datasources: Datasource[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasources/reload': {
      $post: {
        input: {}
        output: {
          action: 'ReloadAllDatasourcesAllNodes'
          data: string
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasources/reload/:datasourceId': {
      $post: {
        input: { param: { datasourceId: string } }
        output: { action: 'ReloadOneDatasourceAllNodes'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasources/:datasourceId': {
      $delete: {
        input: { param: { datasourceId: string } }
        output: {
          action: 'deleteDataSource'
          data: { datasources: Datasource[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { datasourceId: string } }
        output: {
          action: 'getDataSource'
          data: { datasources: Datasource[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { datasourceId: string } } & { json: Datasource }
        output: {
          action: 'updateDataSource'
          data: { datasources: Datasource[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/directives': {
      $get: {
        input: {}
        output: {
          action: 'listDirectives'
          data: { directives: Directive[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: DirectiveNew }
        output: {
          action: 'createDirective'
          data: { directives: Directive[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/directives/:directiveId': {
      $delete: {
        input: { param: { directiveId: string } }
        output: {
          action: 'deleteDirective'
          data: { directives: Directive[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { directiveId: string } }
        output: {
          action: 'directiveDetails'
          data: { directives: Directive[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { directiveId: string } } & { json: Directive }
        output: {
          action: 'updateDirective'
          data: { directives: Directive[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/directives/:directiveId/check': {
      $post: {
        input: { param: { directiveId: string } } & { json: Directive }
        output: {
          action: 'checkDirective'
          data: { directives: Directive[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups': {
      $get: {
        input: {}
        output: { action: 'listGroups'; data: { groups: Group[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: GroupNew }
        output: { action: 'createGroup'; data: { groups: Group[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/categories': {
      $put: {
        input: { json: GroupCategory }
        output: {
          action: 'CreateGroupCategory'
          data: { groupCategories: GroupCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/categories/:groupCategoryId': {
      $delete: {
        input: { param: { groupCategoryId: string } }
        output: {
          action: 'DeleteGroupCategory'
          data: { groupCategories: GroupCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { groupCategoryId: string } }
        output: {
          action: 'GetGroupCategoryDetails'
          data: { groupCategories: GroupCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { groupCategoryId: string } } & { json: GroupCategoryUpdate }
        output: {
          action: 'UpdateGroupCategory'
          data: { groupCategories: GroupCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/tree': {
      $get: {
        input: {}
        output: {
          action: 'GetGroupTree'
          data: { groupCategories: { [x: string]: unknown } }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:groupId': {
      $delete: {
        input: { param: { groupId: string } }
        output: { action: 'deleteGroup'; data: { groups: Group[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { groupId: string } }
        output: { action: 'groupDetails'; data: { groups: Group[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { groupId: string } } & { json: GroupUpdate }
        output: { action: 'updateGroup'; data: { groups: Group[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:groupId/reload': {
      $post: {
        input: { param: { groupId: string } }
        output: { action: 'reloadGroup'; data: { groups: Group[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info': {
      $get: {
        input: {}
        output: {
          action: 'apiGeneralInformations'
          data: {
            availableVersions: ApiVersions[]
            documentation: string
            endpoints: ApiEndpoints[]
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/details/:endpointName': {
      $get: {
        input: { param: { endpointName: string } }
        output: {
          action: 'apiInformations'
          data: {
            documentation: string
            endpointName: string
            endpoints: {
              httpVerb?: { [x: string]: unknown } | undefined
              version?: ApiVersion | undefined
            }[]
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/info/:sectionId': {
      $get: {
        input: { param: { sectionId: string } }
        output: {
          action: 'apiSubInformations'
          data: {
            availableVersions: ApiVersions[]
            documentation: string
            endpoints: ApiEndpoints[]
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inventories/info': {
      $get: {
        input: {}
        output: {
          action: 'queueInformation'
          data: { queueMaxSize: number; queueSaturated: boolean }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inventories/upload': {
      $post: {
        input: { form: { file?: File | undefined; signature?: File | undefined } }
        output: { action: 'uploadInventory'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inventories/watcher/restart': {
      $post: {
        input: {}
        output: { action: 'fileWatcherRestart'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inventories/watcher/start': {
      $post: {
        input: {}
        output: { action: 'fileWatcherStart'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/inventories/watcher/stop': {
      $post: {
        input: {}
        output: { action: 'fileWatcherStop'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/methods': {
      $get: {
        input: {}
        output: {
          action: 'listTechniques'
          data: { methods: Methods }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/methods/reload': {
      $post: {
        input: {}
        output: {
          action: 'listTechniques'
          data: { methods: Methods }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes': {
      $get: {
        input: {
          query: {
            include?: string | undefined
            query?:
              | {
                  composition?: 'and' | 'or' | undefined
                  select?: string | undefined
                  where?:
                    | {
                        attribute?: string | undefined
                        comparator?: string | undefined
                        objectType?: string | undefined
                        value?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
            where?:
              | {
                  attribute?: string | undefined
                  comparator?: string | undefined
                  objectType?: string | undefined
                  value?: string | undefined
                }[]
              | undefined
            composition?: 'and' | 'or' | undefined
            select?: string | undefined
          }
        }
        output: {
          action: 'listAcceptedNodes'
          data: { nodes: NodeFull[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: NodeAdd }
        output: {
          action: 'createNode'
          data: { created: string[]; failed: string[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes/applyPolicy': {
      $post: {
        input: {}
        output: {
          action: 'applyPolicyAllNodes'
          data: {
            hostname?: string | undefined
            id?: string | undefined
            result?: string | undefined
          }[]
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes/pending': {
      $get: {
        input: {
          query: {
            include?: string | undefined
            query?:
              | {
                  composition?: 'and' | 'or' | undefined
                  select?: string | undefined
                  where?:
                    | {
                        attribute?: string | undefined
                        comparator?: string | undefined
                        objectType?: string | undefined
                        value?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
            where?:
              | {
                  attribute?: string | undefined
                  comparator?: string | undefined
                  objectType?: string | undefined
                  value?: string | undefined
                }[]
              | undefined
            composition?: 'and' | 'or' | undefined
            select?: string | undefined
          }
        }
        output: {
          action: 'listPendingNodes'
          data: { nodes: NodeFull[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes/pending/:nodeId': {
      $post: {
        input: { param: { nodeId: string } } & {
          json: { status?: 'accepted' | 'refused' | undefined }
        }
        output: {
          action: 'changePendingNodeStatus'
          data: { nodes: NodeFull[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes/status': {
      $get: {
        input: { query: { ids: string } }
        output: {
          action: 'getNodesStatus'
          data: { nodes: { id: string; status: 'pending' | 'accepted' | 'deleted' | 'unknown' }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes/:nodeId': {
      $delete: {
        input: { param: { nodeId: string } } & { query: { mode?: 'move' | 'erase' | undefined } }
        output: { action: 'deleteNode'; data: { nodes: NodeFull[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { nodeId: string } } & { query: { include?: string | undefined } }
        output: { action: 'nodeDetails'; data: { nodes: NodeFull[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { nodeId: string } } & { json: NodeSettings }
        output: { action: 'updateNode'; data: { nodes: NodeFull[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes/:nodeId/applyPolicy': {
      $post: {
        input: { param: { nodeId: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/nodes/:nodeId/fetchData': {
      $post: {
        input: { param: { nodeId: string } }
        output: { action: 'ReloadAllDatasourcesOneNode'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes/:nodeId/fetchData/:datasourceId': {
      $post: {
        input: { param: { nodeId: string; datasourceId: string } }
        output: { action: 'ReloadOneDatasourceOneNode'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/nodes/:nodeId/inheritedProperties': {
      $get: {
        input: { param: { nodeId: string } }
        output: {
          action: 'nodeInheritedProperties'
          data: NodeInheritedProperties[]
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/parameters': {
      $get: {
        input: {}
        output: {
          action: 'listParameters'
          data: { parameters: Parameter[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: Parameter }
        output: {
          action: 'createParameter'
          data: { parameters: Parameter[] }
          id: string
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/parameters/:parameterId': {
      $delete:
        | {
            input: { param: { parameterId: string } }
            output: {
              action: 'deleteParameter'
              data: { parameters: Parameter[] }
              id: string
              result: 'success' | 'error'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { parameterId: string } }
            output: {
              action: 'deleteParameter'
              errorDetails?: string | undefined
              id: string
              result: 'error'
            }
            outputFormat: 'json'
            status: 500
          }
      $get: {
        input: { param: { parameterId: string } }
        output: {
          action: 'parameterDetails'
          data: { parameters: Parameter[] }
          id: string
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parameterId: string } }
        output: {
          action: 'updateParameter'
          data: { parameters: Parameter[] }
          id: string
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rules': {
      $get: {
        input: {}
        output: { action: 'listRules'; data: { rules: Rule[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: RuleNew }
        output: { action: 'createRule'; data: { rules: Rule[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rules/categories': {
      $put: {
        input: { json: RuleCategory }
        output: {
          action: 'CreateRuleCategory'
          data: { ruleCategories: RuleCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rules/categories/:ruleCategoryId': {
      $delete: {
        input: { param: { ruleCategoryId: string } }
        output: {
          action: 'DeleteRuleCategory'
          data: { groupCategories: RuleCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { ruleCategoryId: string } }
        output: {
          action: 'GetRuleCategoryDetails'
          data: { rulesCategories: RuleCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ruleCategoryId: string } } & { json: RuleCategoryUpdate }
        output: {
          action: 'UpdateRuleCategory'
          data: { ruleCategories: RuleCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rules/tree': {
      $get: {
        input: {}
        output: {
          action: 'GetRuleTree'
          data: { ruleCategories: { [x: string]: unknown } }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rules/:ruleId': {
      $delete: {
        input: { param: { ruleId: string } }
        output: { action: 'deleteRule'; data: { rules: Rule[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { ruleId: string } }
        output: { action: 'ruleDetails'; data: { rules: Rule[] }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ruleId: string } } & { json: RuleWithCategory }
        output: {
          action: 'updateRule'
          data: { rules: RuleWithCategory[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/scaleoutrelay/demote/:nodeId': {
      $post: {
        input: { param: { nodeId: string } }
        output: { action: 'demoteToNode'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/scaleoutrelay/promote/:nodeId': {
      $post: {
        input: { param: { nodeId: string } }
        output: { action: 'promoteToRelay'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/secret/': {
      $get: {
        input: {}
        output: {
          action: 'getAllSecrets'
          data: { secrets: { description: string; name: string }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Secrets }
        output: {
          action: 'updateSecret'
          data: { secrets: { description: string; name: string }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: Secrets }
        output: {
          action: 'addSecret'
          data: { secrets: { description: string; name: string }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/secret/:name': {
      $delete: {
        input: { param: { name: string } }
        output: {
          action: 'deleteSecret'
          data: { secrets: { description: string; name: string }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } }
        output: {
          action: 'getSecret'
          data: { secrets: { description: string; name: string }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings': {
      $get: {
        input: {}
        output: {
          action: 'getAllSettings'
          data: {
            settings: {
              allowed_networks?:
                | { allowed_networks?: string[] | undefined; id?: string | undefined }[]
                | undefined
              change_message_prompt?: string | undefined
              display_recent_changes_graphs?: boolean | undefined
              enable_change_message?: boolean | undefined
              enable_change_request?: boolean | undefined
              enable_javascript_directives?: string | undefined
              enable_self_deployment?: boolean | undefined
              enable_self_validation?: boolean | undefined
              first_run_hour?: number | undefined
              first_run_minute?: number | undefined
              global_policy_mode?: 'enforce' | 'audit' | undefined
              global_policy_mode_overridable?: boolean | undefined
              heartbeat_frequency?: number | undefined
              mandatory_change_message?: boolean | undefined
              modified_file_ttl?: number | undefined
              node_accept_duplicated_hostname?: boolean | undefined
              node_onaccept_default_policyMode?: 'default' | 'enforce' | 'audit' | undefined
              node_onaccept_default_state?:
                | 'enabled'
                | 'ignored'
                | 'empty-policies'
                | 'initializing'
                | 'preparing-eol'
                | undefined
              output_file_ttl?: number | undefined
              relay_server_synchronization_method?: 'classic' | 'rsync' | 'disabled' | undefined
              relay_server_synchronize_policies?: boolean | undefined
              relay_server_synchronize_shared_files?: boolean | undefined
              reporting_mode?: 'full-compliance' | 'changes-only' | 'reports-disabled' | undefined
              require_time_synchronization?: boolean | undefined
              rudder_compute_changes?: boolean | undefined
              rudder_compute_dyngroups_max_parallelism?: string | undefined
              rudder_generation_compute_dyngroups?: boolean | undefined
              rudder_generation_continue_on_error?: boolean | undefined
              rudder_generation_delay?: string | undefined
              rudder_generation_js_timeout?: number | undefined
              rudder_generation_max_parallelism?: string | undefined
              rudder_generation_policy?: string | undefined
              rudder_report_protocol_default?: 'HTTPS' | 'SYSLOG' | undefined
              rudder_save_db_compliance_details?: boolean | undefined
              rudder_save_db_compliance_levels?: boolean | undefined
              rudder_verify_certificates?: boolean | undefined
              run_frequency?: number | undefined
              send_metrics?: string | undefined
              splay_time?: number | undefined
              unexpected_unbound_var_values?: boolean | undefined
            }
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/allowed_networks/:nodeId': {
      $get: {
        input: { param: { nodeId: string } }
        output: {
          action: 'getAllowedNetworks'
          data: { settings: { allowed_networks: { [x: string]: unknown }[] } }
          id: string
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { nodeId: string } } & {
          json: { value?: { [x: string]: unknown } | undefined }
        }
        output: {
          action: 'modifyAllowedNetworks'
          data: { allowed_networks?: { [x: string]: unknown }[] | undefined }
          id?: string | undefined
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/allowed_networks/:nodeId/diff': {
      $post: {
        input: { param: { nodeId: string } } & {
          json: {
            allowed_networks?:
              | {
                  add?: { [x: string]: unknown }[] | undefined
                  delete?: { [x: string]: unknown }[] | undefined
                }
              | undefined
          }
        }
        output: {
          action: 'modifySetting'
          data: { allowed_networks?: { [x: string]: unknown }[] | undefined }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/:settingId': {
      $get: {
        input: { param: { settingId: string } }
        output: {
          action: 'getSetting'
          data: { settingId?: string | undefined }
          id: string
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { settingId: string } } & { json: { value?: string | undefined } }
        output: {
          action: 'modifySetting'
          data: { settingId?: string | undefined }
          id: string
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/status': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/system/archives/:archiveKind': {
      $get: {
        input: { param: { archiveKind: 'full' | 'groups' | 'rules' | 'directives' | 'parameters' } }
        output: {
          action:
            | 'archiveFull'
            | 'archiveGroups'
            | 'archiveRules'
            | 'archiveDirectives'
            | 'archiveParameters'
          data: { full: { commiter: string; gitCommit: string; id: string }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { archiveKind: 'full' | 'groups' | 'rules' | 'directives' | 'parameters' } }
        output: {
          action:
            | 'archiveFull'
            | 'archiveGroups'
            | 'archiveRules'
            | 'archiveDirectives'
            | 'archiveParameters'
          data: { full: { commiter: string; gitCommit: string; id: string } }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/archives/:archiveKind/restore/:archiveRestoreKind': {
      $post: {
        input: {
          param: {
            archiveKind: 'full' | 'groups' | 'rules' | 'directives' | 'parameters'
            archiveRestoreKind: 'latestArchive' | 'latestCommit' | 'archive ID'
          }
        }
        output: {
          action:
            | 'restoreFullLatestArchive'
            | 'restoreGroupLatestArchive'
            | 'restoreRulesLatestArchive'
            | 'restoreDirectivesLatestArchive'
            | 'restoreParametersLatestArchive'
            | 'restoreFullLatestCommit'
            | 'restoreGroupLatestCommit'
            | 'restoreRulesLatestCommit'
            | 'restoreDirectivesLatestCommit'
            | 'restoreParametersLatestCommit'
            | 'archiveFullDateRestore'
            | 'archiveGroupDateRestore'
            | 'archiveRulesDateRestore'
            | 'archiveDirectivesDateRestore'
            | 'archiveParametersDateRestore'
          data: {
            directive?: string | undefined
            full?: string | undefined
            groups?: string | undefined
            parameters?: string | undefined
            rules?: string | undefined
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/archives/:archiveKind/zip/:commitId': {
      $get: {
        input: {
          param: {
            archiveKind: 'full' | 'groups' | 'rules' | 'directives' | 'parameters'
            commitId: string
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/system/healthcheck': {
      $get: {
        input: {}
        output: { action: 'getHealthcheckResult'; data: Check[]; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/info': {
      $get: {
        input: {}
        output: {
          action: 'getSystemInfo'
          data: {
            rudder: { 'build-time': string; 'full-version': string; 'major-version': string }
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/maintenance/purgeSoftware': {
      $post: {
        input: {}
        output: { action: 'purgeSoftware'; data: string[]; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/regenerate/policies': {
      $post: {
        input: {}
        output: {
          action: 'regeneratePolicies'
          data: { policies: 'Started' }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/reload': {
      $post: {
        input: {}
        output: {
          action: 'reloadAll'
          data: { groups: 'Started'; techniques: 'Started' }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/reload/groups': {
      $post: {
        input: {}
        output: { action: 'reloadGroups'; data: { groups: 'Started' }; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/reload/techniques': {
      $post: {
        input: {}
        output: {
          action: 'reloadTechniques'
          data: { techniques: 'Started' }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/status': {
      $get: {
        input: {}
        output: {
          action: 'getStatus'
          data: { global?: 'OK' | undefined }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system/update/policies': {
      $post: {
        input: {}
        output: {
          action: 'updatePolicies'
          data: { policies: 'Started' }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques': {
      $get: {
        input: {}
        output: {
          action: 'listTechniques'
          data: { techniques: Techniques }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: Techniques }
        output: {
          action: 'listTechniques'
          data: { techniques: { technique: EditorTechnique } }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/categories': {
      $get: {
        input: {}
        output: {
          action: 'listTechniques'
          data: { techniqueCategories: CategoriesTree }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/reload': {
      $post: {
        input: {}
        output: {
          action: 'listTechniques'
          data: { techniques: Techniques }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/versions': {
      $get: {
        input: {}
        output: {
          action: 'listTechniques'
          data: { techniques: TechniquesVersions }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/:techniqueId': {
      $get: {
        input: { param: { techniqueId: string } }
        output: {
          action: 'listTechniques'
          data: { techniques: { JREditorTechnique: EditorTechnique }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/:techniqueId/directives': {
      $get: {
        input: { param: { techniqueId: string } }
        output: {
          action: 'listTechniquesDirectives'
          data: { directives: Directive[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/:techniqueId/:techniqueVersion': {
      $delete: {
        input: { param: { techniqueId: string; techniqueVersion: string } }
        output: {
          action: 'listTechniques'
          data: { techniques?: { id: string; version: string } | undefined }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { techniqueId: string; techniqueVersion: string } }
        output: {
          action: 'listTechniques'
          data: { techniques: { JREditorTechnique: EditorTechnique }[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { techniqueId: string; techniqueVersion: string } } & { json: Techniques }
        output: {
          action: 'listTechniques'
          data: { techniques: { technique: EditorTechnique } }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/:techniqueId/:techniqueVersion/directives': {
      $get: {
        input: { param: { techniqueId: string; techniqueVersion: string } }
        output: {
          action: 'listTechniqueDirectives'
          data: { directives: Directive[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/:techniqueId/:techniqueVersion/resources': {
      $get: {
        input: { param: { techniqueId: string; techniqueVersion: string } }
        output: {
          action: 'listTechniques'
          data: { resources: TechniquesResources }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/techniques/:techniqueId/:techniqueVersion/revisions': {
      $get: {
        input: { param: { techniqueId: string; techniqueVersion: string } }
        output: {
          action: 'listTechniques'
          data: { techniques: TechniquesRevisions }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usermanagement': {
      $post: {
        input: { json: Users }
        output: {
          action: 'addUser'
          data: {
            addedUser: {
              password?: string | undefined
              role?: string[] | undefined
              username?: string | undefined
            }
          }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usermanagement/roles': {
      $get: {
        input: {}
        output: {
          action: 'getRole'
          data: {
            id: 'inventory' | 'compliance' | 'administrator' | 'etc'
            rights: ('node_read' | 'userAccount_all')[]
          }[]
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usermanagement/update/:username': {
      $post: {
        input: { param: { username: string } } & { json: Users }
        output: {
          action: 'updateUser'
          data: { updatedUser: { password: string; role: string[]; username: string } }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usermanagement/users': {
      $get: {
        input: {}
        output: {
          action: 'getUserInfo'
          data: { digest: 'BCRYPT' | 'SHA512' | 'SHA256' | 'SHA1' | 'MD5'; users: Users[] }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usermanagement/users/reload': {
      $get: {
        input: {}
        output: {
          action: 'reloadUserConf'
          data: { reload: { status: string } }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usermanagement/:username': {
      $delete: {
        input: { param: { username: string } }
        output: {
          action: 'deleteUser'
          data: { deletedUser: { username: string } }
          result: 'success' | 'error'
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': {
      $get: {
        input: {}
        output: { action: 'listUsers'; data: ValidatedUser[]; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/validatedUsers': {
      $post: {
        input: { json: { validatedUsers: string[] } }
        output: { action: 'addUser'; data: ValidatedUser; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/validatedUsers/:username': {
      $delete: {
        input: { param: { username: string } }
        output: { action: 'listUsers'; data: string; result: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
