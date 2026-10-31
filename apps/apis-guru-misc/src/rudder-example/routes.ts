import { createRoute, z } from '@hono/zod-openapi'

type CategoryType = { id: string; name: string; path: string; subcategories: CategoryType[] }

const TechniqueMethodCallSchema = z
  .object({
    component: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Component is used in reporting to identify this method call. You can see it as a name',
        example: 'Install apache2',
      }),
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Condition to run this method.',
        example: 'linux.package_present_vim_repaired',
      }),
    disableReporting: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should the reporting of this method be disabled', example: true }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Method call id', example: '6a8de98f-7829-4c1b-b4e7-b9387f27f279' }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the method called', example: 'package_present' }),
    parameters: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Parameter name', example: 'package' }),
            value: z
              .string()
              .exactOptional()
              .openapi({ description: 'Parameter value', example: 'apache2' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Parameters for this method call' }),
  })
  .openapi({ required: [] })
  .openapi('TechniqueMethodCall')

type TechniqueBlockType = {
  calls?: (z.infer<typeof TechniqueMethodCallSchema> | TechniqueBlockType)[]
  component?: string
  condition?: string
  id?: string
  reportingLogic?: { type?: string; value?: string }
}

const AgentKeySchema = z
  .object({
    status: z
      .enum(['certified', 'undefined'])
      .exactOptional()
      .openapi({
        description:
          'Certification status of the security token (reset to `undefined` to trust a new certificate). If `certified`, inventory signature check will be enforced',
      }),
    value: z
      .string()
      .openapi({
        description:
          'Certificate (or public key for <6.0 agents) used by the agent. Be careful write a "\\n" after header line and before footer line, JSON does not keep formatting in string.',
        example: '-----BEGIN CERTIFICATE-----\nMIIFqDCC[...]3tALNn\n-----END CERTIFICATE-----',
      }),
  })
  .openapi({ description: 'Information about agent key or certificate', required: ['value'] })
  .openapi('AgentKey')

const ApiEndpointsSchema = z
  .array(
    z
      .object({
        endpointName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The endpoint name for key and its description for value' }),
        httpVerb: z.any().exactOptional(),
      })
      .openapi({
        description:
          'objects with two fields, the first one has the endpoint name as key and its description as value, the second one has HTTP verb to use (GET, POST PUT, DELETE) as key and the supported version an API path for value.',
        example:
          "{ 'listAcceptedNodes': 'List all accepted nodes with configurable details level', 'GET': '[8,9,10,11,12,13] /nodes' }",
        required: [],
      }),
  )
  .openapi('ApiEndpoints')

const ApiVersionSchema = z
  .object({
    all: z
      .array(
        z
          .object({
            status: z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'maintained')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                  if (!Object.hasOwn(val, 'deprecated')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({
                description: 'Status of the API, either maintained or deprecated',
                example: 'maintained',
                required: ['maintained', 'deprecated'],
              }),
            version: z.int().openapi({ description: 'API Version', example: 12 }),
          })
          .openapi({ required: ['version', 'status'] }),
      )
      .exactOptional()
      .openapi({ description: 'List of API version and status' }),
    latest: z
      .int()
      .exactOptional()
      .openapi({ description: 'Latest API version available', example: 12 }),
  })
  .openapi({ required: [] })
  .openapi('ApiVersion')

const ApiVersionsSchema = z
  .object({
    all: z
      .array(ApiVersionSchema)
      .exactOptional()
      .openapi({ description: 'List of API version and status' }),
    latest: z
      .int()
      .exactOptional()
      .openapi({ description: 'Latest API version available', example: 12 }),
  })
  .openapi({ required: [] })
  .openapi('ApiVersions')

const ColorSchema = z
  .object({
    alpha: z.number().min(0).max(1).openapi({ description: 'percentage of opacity', example: 0.5 }),
    blue: z
      .number()
      .min(0)
      .max(1)
      .openapi({ description: 'percentage of blue component', example: 0.235 }),
    green: z
      .number()
      .min(0)
      .max(1)
      .openapi({ description: 'percentage of green component', example: 0.01 }),
    red: z
      .number()
      .min(0)
      .max(1)
      .openapi({ description: 'percentage of red component', example: 0.2 }),
  })
  .openapi({ required: ['red', 'blue', 'green', 'alpha'] })
  .openapi('Color')

const LogoSchema = z
  .object({
    enable: z.boolean().openapi({ description: 'Whether the wide logo is displayed or not' }),
  })
  .openapi({ required: ['enable'] })
  .openapi('Logo')

const BrandingConfSchema = z
  .object({
    barColor: ColorSchema,
    displayBar: z.boolean().openapi({ description: 'Whether header bar is displayed or not' }),
    displayBarLogin: z
      .boolean()
      .openapi({ description: 'Whether header bar is displayed in login page or not' }),
    displayLabel: z
      .boolean()
      .openapi({ description: "Whether header bar's label is displayed or not" }),
    displayMotd: z
      .boolean()
      .openapi({ description: 'Whether the message of the day is displayed in login page or not' }),
    labelColor: ColorSchema,
    labelText: z
      .string()
      .openapi({ description: "The header bar's label title", example: 'Production' }),
    motd: z
      .string()
      .openapi({
        description: 'Message of the day in login page',
        example: 'Welcome, please sign in:',
      }),
    smallLogo: LogoSchema,
    wideLogo: LogoSchema,
  })
  .openapi({
    required: [
      'displayBar',
      'displayLabel',
      'labelText',
      'barColor',
      'labelColor',
      'wideLogo',
      'smallLogo',
      'displayBarLogin',
      'displayMotd',
      'motd',
    ],
  })
  .openapi('BrandingConf')

const CategorySchema: z.ZodType<CategoryType> = z
  .lazy(() =>
    z
      .object({
        id: z.string().openapi({ description: 'Category ID', example: 'systemManagement' }),
        name: z.string().openapi({ description: "Category's name", example: 'User Techniques' }),
        path: z
          .string()
          .openapi({ description: "category's path", example: 'systemSettings/systemManagement' }),
        subcategories: z
          .array(CategorySchema)
          .openapi({ description: 'List of sub categories', example: [] }),
      })
      .openapi({ required: ['name', 'path', 'id', 'subcategories'] }),
  )
  .openapi('Category')

const CategoriesTreeSchema = z
  .object({
    id: z.string().openapi({ description: 'Category ID', example: '/' }),
    name: z.string().openapi({ description: "Category's name", example: '/' }),
    path: z.string().openapi({ description: "Category's path", example: '' }),
    subcategories: z.array(CategorySchema).openapi({ description: 'List of sub categories' }),
  })
  .openapi({
    required: ['name', 'path', 'id', 'subcategories'],
    'x-definitions': {
      category: {
        properties: {
          id: { description: 'Category ID', example: 'systemManagement', type: 'string' },
          name: { description: "Category's name", example: 'User Techniques', type: 'string' },
          path: {
            description: "category's path",
            example: 'systemSettings/systemManagement',
            type: 'string',
          },
          subcategories: { description: 'List of sub categories', example: [], type: 'array' },
        },
        required: ['name', 'path', 'id', 'subcategories'],
        type: 'object',
      },
    },
  })
  .openapi('CategoriesTree')

const ChangeRequestSchema = z
  .object({
    acceptable: z.boolean().exactOptional().openapi({ example: true }),
    changes: z
      .object({
        rules: z
          .array(
            z
              .object({ action: z.string().exactOptional().openapi({ example: 'modify Rule' }) })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    'created by': z.string().exactOptional().openapi({ example: 'Matthieu C.' }),
    description: z.string().exactOptional(),
    id: z.int().exactOptional().openapi({ example: 42 }),
    name: z.string().exactOptional().openapi({ example: 'Remove unused security policy' }),
    status: z
      .enum(['Deployed', 'Pending deployment', 'Cancelled', 'Pending validation', 'Open'])
      .exactOptional(),
  })
  .openapi({ description: 'Content of the change request', required: [] })
  .openapi('ChangeRequest')

const CheckSchema = z
  .object({
    msg: z
      .string()
      .openapi({ description: 'Message about the check', example: 'Only 2GB of RAM left' }),
    name: z.string().openapi({ description: 'Name of the check', example: 'RAM available' }),
    status: z
      .enum(['Critical', 'Warning', 'Ok'])
      .openapi({ description: 'The severity status of the check' }),
  })
  .openapi({ required: ['name', 'msg', 'status'] })
  .openapi('Check')

const CveCheckSchema = z
  .object({
    cveId: z.string().exactOptional().openapi({ description: 'CVE id', example: 'CVE-2019-5953' }),
    nodes: z
      .array(z.string().openapi({ description: 'Node id' }))
      .exactOptional()
      .openapi({ description: 'Id of Nodes affected by this CVE' }),
    packages: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the package affected', example: 'libssh2-1' }),
            version: z
              .string()
              .exactOptional()
              .openapi({ description: 'Version of the package affected', example: '1.7.0-1' }),
          })
          .openapi({ description: 'Packages affected by this CVE', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'packages affected by this CVE' }),
  })
  .openapi({ required: [] })
  .openapi('CveCheck')

const CveDetailsSchema = z
  .object({
    cvssv2: z
      .object({
        baseScore: z.int().exactOptional().openapi({ description: 'CVSS V2 base score' }),
        vector: z.string().exactOptional().openapi({ description: 'CVSS V2 vector' }),
      })
      .exactOptional()
      .openapi({ description: 'CVSS V2 of the CVE', required: [] }),
    cvssv3: z
      .object({
        baseScore: z
          .number()
          .exactOptional()
          .openapi({ description: 'CVSS V3 base score', example: 9.8 }),
        baseSeverity: z
          .enum(['critical', 'high', 'medium', 'low', 'none'])
          .exactOptional()
          .openapi({ description: 'CVSS V3 Severity' }),
        vector: z
          .string()
          .exactOptional()
          .openapi({
            description: 'CVSS V3 vector',
            example: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
          }),
      })
      .exactOptional()
      .openapi({ description: 'CVSS V3 of the CVE', required: [] }),
    cweIds: z
      .array(z.string().openapi({ description: 'id of a CWE', example: 'CWE-119' }))
      .exactOptional()
      .openapi({ description: 'List of CWE (Common Weakness Enumeration) of the CVE' }),
    description: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'CVE Description',
        example:
          'Buffer overflow in GNU Wget 1.20.1 and earlier allows remote attackers to cause a denial-of-service (DoS) or may execute an arbitrary code via unspecified vectors.',
      }),
    id: z.string().exactOptional().openapi({ description: 'CVE id', example: 'CVE-2019-5953' }),
    lastModifiedDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'last Date the CVE was modified',
        example: '2019-07-03 01:15:00+02',
      }),
    publishedDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date the CVE was published', example: '2019-05-17 18:29:00+02' }),
  })
  .openapi({ required: [] })
  .openapi('CveDetails')

const DatasourceSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the goal of the data source to create.',
        example: 'Synchronize example data from the CMDB',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable or disable data source.', example: true }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the data source to create.',
        example: 'test-data-source',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The human readable name of the data source to create.',
        example: 'Test data source',
      }),
    runParameters: z
      .object({
        onGeneration: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Trigger a fetch at the beginning of a policy generation',
            example: true,
          }),
        onNewNode: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Trigger a fetch when a new node is accepted, for that node',
            example: true,
          }),
        schedule: z
          .object({
            type: z
              .enum(['scheduled', 'notscheduled'])
              .exactOptional()
              .openapi({
                description: '`scheduled` enables periodic update, `notscheduled` disables them',
                example: 'scheduled',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Configure if data source should be fetch periodically',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Parameters to configure when the data source is fetched to update node properties.',
        required: [],
      }),
    type: z
      .object({
        name: z
          .literal('HTTP')
          .exactOptional()
          .openapi({ description: 'Data source type name', example: 'HTTP' }),
        parameters: z
          .object({
            checkSsl: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Check SSL certificate validity for https. Must be set to false for self-signed certificate',
                example: true,
              }),
            headers: z
              .array(
                z
                  .object({
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Name of the header', example: 'X-API-Key' }),
                    value: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Value of the header', example: '05ce8e3d9df6' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description: 'Represent HTTP headers for the query. Rudder expansion available.',
              }),
            path: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'JSON path (as defined in [the specification](https://github.com/jayway/JsonPath/), without the leading `$.`) to find the interesting sub-json or string/number/boolean value in the answer. Let empty to use the whole answer as value.',
              }),
            requestMethod: z
              .enum(['GET', 'POST'])
              .exactOptional()
              .openapi({ description: 'HTTP method to use to contact the URL.', example: 'GET' }),
            requestMode: z
              .object({
                name: z
                  .literal('byNode')
                  .exactOptional()
                  .openapi({ description: 'Node by node strategy', example: 'byNode' }),
              })
              .exactOptional()
              .openapi({
                description: 'Configure the strategy used to query the HTTP data source.',
                required: [],
              }),
            requestTimeout: z
              .int()
              .exactOptional()
              .openapi({ description: 'Timeout in seconds for each HTTP request', example: 10 }),
            url: z
              .string()
              .exactOptional()
              .openapi({
                description: 'URL to contact. Rudder expansion available.',
                example: 'http://jsonplaceholder.typicode.com/users/1',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'You can use Rudder variable expansion (`${rudder.node`, `${node.properties...}`)',
            required: [],
          }),
      })
      .exactOptional()
      .openapi({ description: 'Define and configure data source type.', required: [] }),
    updateTimeout: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Duration in seconds before aborting data source update. The main goal is to prevent never ending requests. If a periodicity if configured, you should set that timeout at a lower value.',
        example: 30,
      }),
  })
  .openapi({ required: [] })
  .openapi('Datasource')

const DirectiveSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable name of the directive',
        example: '91252ea2-feb2-412d-8599-c6945fee02c4',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the directive enabled', example: true }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Directive id', example: '91252ea2-feb2-412d-8599-c6945fee02c4' }),
    longDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the technique (rendered as markdown)',
        example: '# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)',
      }),
    parameters: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Directive parameters (depends on the source technique)',
        example: {
          name: 'sections',
          sections: [
            {
              section: {
                name: 'File to manage',
                sections: [
                  {
                    section: {
                      name: 'File',
                      vars: [
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_PATH', value: '/root/test' } },
                      ],
                    },
                  },
                  {
                    section: {
                      name: 'File cleaning options',
                      vars: [
                        { var: { name: 'FILE_AND_FOLDER_DELETION_DAYS', value: '0' } },
                        { var: { name: 'FILE_AND_FOLDER_DELETION_OPTION', value: 'none' } },
                        { var: { name: 'FILE_AND_FOLDER_DELETION_PATTERN', value: '.*' } },
                      ],
                    },
                  },
                  {
                    section: {
                      name: 'Permissions',
                      vars: [
                        {
                          var: {
                            name: 'FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS',
                            value: 'false',
                          },
                        },
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_GROUP', value: '' } },
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_OWNER', value: '' } },
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_PERM', value: '000' } },
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_RECURSIVE', value: '1' } },
                      ],
                    },
                  },
                  {
                    section: {
                      name: 'Post-modification hook',
                      vars: [
                        {
                          var: { name: 'FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND', value: '' },
                        },
                        {
                          var: { name: 'FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN', value: 'false' },
                        },
                      ],
                    },
                  },
                ],
                vars: [
                  { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_ACTION', value: 'copy' } },
                  { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_SOURCE', value: '/vagrant/node.sh' } },
                  { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE', value: 'false' } },
                ],
              },
            },
          ],
        },
      }),
    policyMode: z
      .enum(['enforce', 'audit'])
      .exactOptional()
      .openapi({ description: 'Policy mode of the directive', example: 'audit' }),
    priority: z
      .int()
      .min(0)
      .max(10)
      .exactOptional()
      .openapi({ description: 'Directive priority. `0` has highest priority.', example: 5 }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One line directive description',
        example: '91252ea2-feb2-412d-8599-c6945fee02c4',
      }),
    system: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true it is an internal Rudder directive', example: false }),
    tags: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Value of the `name` key', example: 'value' }),
          })
          .openapi({ example: { customer: 'MyCompany' }, required: [] }),
      )
      .exactOptional(),
    techniqueName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Directive id', example: 'userManagement' }),
    techniqueVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Directive id', example: '8.0' }),
  })
  .openapi({ required: [] })
  .openapi('Directive')

const DirectiveNewSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable name of the directive',
        example: '91252ea2-feb2-412d-8599-c6945fee02c4',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the directive enabled', example: true }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Directive id', example: '91252ea2-feb2-412d-8599-c6945fee02c4' }),
    longDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the technique (rendered as markdown)',
        example: '# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)',
      }),
    parameters: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Directive parameters (depends on the source technique)',
        example: {
          name: 'sections',
          sections: [
            {
              section: {
                name: 'File to manage',
                sections: [
                  {
                    section: {
                      name: 'File',
                      vars: [
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_PATH', value: '/root/test' } },
                      ],
                    },
                  },
                  {
                    section: {
                      name: 'File cleaning options',
                      vars: [
                        { var: { name: 'FILE_AND_FOLDER_DELETION_DAYS', value: '0' } },
                        { var: { name: 'FILE_AND_FOLDER_DELETION_OPTION', value: 'none' } },
                        { var: { name: 'FILE_AND_FOLDER_DELETION_PATTERN', value: '.*' } },
                      ],
                    },
                  },
                  {
                    section: {
                      name: 'Permissions',
                      vars: [
                        {
                          var: {
                            name: 'FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS',
                            value: 'false',
                          },
                        },
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_GROUP', value: '' } },
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_OWNER', value: '' } },
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_PERM', value: '000' } },
                        { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_RECURSIVE', value: '1' } },
                      ],
                    },
                  },
                  {
                    section: {
                      name: 'Post-modification hook',
                      vars: [
                        {
                          var: { name: 'FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND', value: '' },
                        },
                        {
                          var: { name: 'FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN', value: 'false' },
                        },
                      ],
                    },
                  },
                ],
                vars: [
                  { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_ACTION', value: 'copy' } },
                  { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_SOURCE', value: '/vagrant/node.sh' } },
                  { var: { name: 'FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE', value: 'false' } },
                ],
              },
            },
          ],
        },
      }),
    priority: z
      .int()
      .min(0)
      .max(10)
      .exactOptional()
      .openapi({ description: 'Directive priority. `0` has highest priority.', example: 5 }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One line directive description',
        example: '91252ea2-feb2-412d-8599-c6945fee02c4',
      }),
    source: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The id of the directive the clone will be based onto. If this parameter if provided,  the new directive will be a clone of this source. Other value will override values from the source.',
        example: 'b9f6d98a-28bc-4d80-90f7-d2f14269e215',
      }),
    system: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true it is an internal Rudder directive', example: false }),
    tags: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Value of the `name` key', example: 'value' }),
          })
          .openapi({ example: { customer: 'MyCompany' }, required: [] }),
      )
      .exactOptional(),
    techniqueName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Directive id', example: 'userManagement' }),
    techniqueVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Directive id', example: '8.0' }),
  })
  .openapi({ required: [] })
  .openapi('DirectiveNew')

const TechniqueBlockSchema: z.ZodType<TechniqueBlockType> = z
  .lazy(() =>
    z
      .object({
        calls: z
          .array(z.xor([TechniqueMethodCallSchema, TechniqueBlockSchema]))
          .exactOptional()
          .openapi({ description: 'Method and blocks contained by this block', example: [] }),
        component: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Component is used in reporting to identify this method call. You can see it as a name',
            example: 'Install my app',
          }),
        condition: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Condition to run this method.',
            example: 'linux.package_present_vim_repaired',
          }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Method call id',
            example: '6a8de98f-7829-4c1b-b4e7-b9387f27f279',
          }),
        reportingLogic: z
          .object({
            type: z
              .string()
              .exactOptional()
              .openapi({ description: 'kind of reporting logic', example: 'worst' }),
            value: z
              .string()
              .exactOptional()
              .openapi({
                description: 'reporting value used for some reporting logic (ie focus)',
                example: 'id/name of a component',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .openapi({ required: [] }),
  )
  .openapi('TechniqueBlock')

const TechniqueParameterSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'description of this parameter',
        example: 'Name of a package to install',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'parameter id', example: '6a8de98f-7829-4c1b-b4e7-b9387f27f279' }),
    mayBeEmpty: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'May the value given when creating a directive be empty',
        example: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Parameter name', example: 'Package to install' }),
  })
  .openapi({ required: [] })
  .openapi('TechniqueParameter')

const TechniqueResourceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'resource name. this is the relative path to the resource',
        example: 'conf/my/app/new',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'State of the resource file. it can be a value between new, modified, deleted, untouched',
        example: 'modified',
      }),
  })
  .openapi({ required: [] })
  .openapi('TechniqueResource')

const EditorTechniqueSchema = z
  .object({
    calls: z
      .array(z.xor([TechniqueMethodCallSchema, TechniqueBlockSchema]))
      .exactOptional()
      .openapi({ description: 'Method and blocks contained by this technique' }),
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'category of this technique', example: 'user_techniques' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'description of this technique',
        example: 'This techniques apply generic security policies',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Technique id', example: 'security-policy' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Technique name', example: 'Security Policy' }),
    parameters: z
      .array(TechniqueParameterSchema)
      .exactOptional()
      .openapi({ description: 'Parameters for this technique' }),
    resources: z
      .array(TechniqueResourceSchema)
      .exactOptional()
      .openapi({ description: 'Resources for this technique' }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source of the technique, always editor here', example: 'editor' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'version of this technique', example: '1.0' }),
  })
  .openapi({ required: [] })
  .openapi('EditorTechnique')

const GroupSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Group description', example: 'Documentation for the group' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the group', example: 'Ubuntu 18.04 nodes' }),
    dynamic: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Should the group be dynamically refreshed (if not, it is a static group)',
      }),
    enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Enable or disable the group' }),
    groupClass: z
      .array(
        z
          .string()
          .openapi({
            description:
              'Conditions defined on nodes in the groups. There is one based on the group id, and one based on the group name.',
            example: 'group_ubuntu',
          }),
      )
      .exactOptional(),
    id: z
      .uuid()
      .default('{autogenerated}')
      .exactOptional()
      .openapi({ description: 'Group id', example: '32d013f7-b6d8-46c8-99d3-016307fa66c0' }),
    nodeIds: z
      .array(
        z
          .string()
          .openapi({
            description: 'Node in the group',
            example: '109142a2-40eb-4e6d-84b4-7ebe3670474c',
          }),
      )
      .exactOptional()
      .openapi({ description: 'List of nodes in the group' }),
    properties: z
      .array(
        z
          .object({
            name: z.string().openapi({ description: 'Property name', example: 'os' }),
            value: z
              .any()
              .openapi({
                description: 'Property value (can be a string or JSON object)',
                example: 'debian10',
              }),
          })
          .openapi({ required: ['name', 'value'] }),
      )
      .exactOptional()
      .openapi({ description: 'Group properties' }),
    query: z
      .object({
        composition: z
          .enum(['and', 'or'])
          .default('and')
          .exactOptional()
          .openapi({
            description: 'Boolean operator to use between each  `where` criteria.',
            example: 'and',
          }),
        select: z
          .string()
          .default('node')
          .exactOptional()
          .openapi({
            description:
              'What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.',
          }),
        where: z
          .array(
            z
              .object({
                attribute: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Attribute to compare', example: 'OS' }),
                comparator: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Comparator to use', example: 'eq' }),
                objectType: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Type of the object', example: 'node' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Value to compare against', example: 'Linux' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'List of criteria' }),
      })
      .exactOptional()
      .openapi({ description: 'The criteria defining the group', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Group')

const GroupCategorySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Group category description',
        example: 'Nodes by hardware provider',
      }),
    id: z
      .uuid()
      .default('{autogenerated}')
      .exactOptional()
      .openapi({
        description: 'Group category id, only provide it when needed.',
        example: '32d013f7-b6d8-46c8-99d3-016307fa66c0',
      }),
    name: z
      .string()
      .openapi({ description: 'Name of the group category', example: 'Hardware groups' }),
    parent: z
      .uuid()
      .openapi({
        description: 'The parent category of the groups',
        example: 'b9f6d98a-28bc-4d80-90f7-d2f14269e215',
      }),
  })
  .openapi({ required: ['parent', 'name'] })
  .openapi('GroupCategory')

const GroupCategoryUpdateSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Group category description',
        example: 'Nodes by hardware provider',
      }),
    name: z
      .string()
      .openapi({ description: 'Name of the group category', example: 'Hardware groups' }),
    parent: z
      .uuid()
      .openapi({
        description: 'The parent category of the groups',
        example: 'b9f6d98a-28bc-4d80-90f7-d2f14269e215',
      }),
  })
  .openapi({ required: ['parent', 'name'] })
  .openapi('GroupCategoryUpdate')

const GroupNewSchema = z
  .object({
    category: z
      .uuid()
      .openapi({
        description: "Id of the new group's category",
        example: 'e17ecf6a-a9f2-44de-a97c-116d24d30ff4',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Group description', example: 'Documentation for the group' }),
    displayName: z
      .string()
      .openapi({ description: 'Name of the group', example: 'Ubuntu 18.04 nodes' }),
    dynamic: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Should the group be dynamically refreshed (if not, it is a static group)',
      }),
    enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Enable or disable the group' }),
    id: z
      .uuid()
      .default('{autogenerated}')
      .exactOptional()
      .openapi({
        description: 'Group id, only provide it when needed.',
        example: '32d013f7-b6d8-46c8-99d3-016307fa66c0',
      }),
    properties: z
      .array(
        z
          .object({
            name: z.string().openapi({ description: 'Property name', example: 'os' }),
            value: z
              .any()
              .openapi({
                description: 'Property value (can be a string or JSON object)',
                example: 'debian10',
              }),
          })
          .openapi({ required: ['name', 'value'] }),
      )
      .exactOptional()
      .openapi({ description: 'Group properties' }),
    query: z
      .object({
        composition: z
          .enum(['and', 'or'])
          .default('and')
          .exactOptional()
          .openapi({
            description: 'Boolean operator to use between each  `where` criteria.',
            example: 'and',
          }),
        select: z
          .string()
          .default('node')
          .exactOptional()
          .openapi({
            description:
              'What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.',
          }),
        where: z
          .array(
            z
              .object({
                attribute: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Attribute to compare', example: 'OS' }),
                comparator: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Comparator to use', example: 'eq' }),
                objectType: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Type of the object', example: 'node' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Value to compare against', example: 'Linux' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'List of criteria' }),
      })
      .exactOptional()
      .openapi({
        description: 'The criteria defining the group. If not provided, the group will be empty.',
        required: [],
      }),
    source: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The id of the group the clone will be based onto. If this parameter if provided,  the new group will be a clone of this source. Other value will override values from the source.',
        example: 'b9f6d98a-28bc-4d80-90f7-d2f14269e215',
      }),
  })
  .openapi({ required: ['displayName', 'category'] })
  .openapi('GroupNew')

const GroupUpdateSchema = z
  .object({
    category: z
      .uuid()
      .exactOptional()
      .openapi({
        description: "Id of the new group's category",
        example: 'e17ecf6a-a9f2-44de-a97c-116d24d30ff4',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Group description', example: 'Documentation for the group' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the group', example: 'Ubuntu 18.04 nodes' }),
    dynamic: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Should the group be dynamically refreshed (if not, it is a static group)',
      }),
    enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Enable or disable the group' }),
    query: z
      .object({
        composition: z
          .enum(['and', 'or'])
          .default('and')
          .exactOptional()
          .openapi({
            description: 'Boolean operator to use between each  `where` criteria.',
            example: 'and',
          }),
        select: z
          .string()
          .default('node')
          .exactOptional()
          .openapi({
            description:
              'What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.',
          }),
        where: z
          .array(
            z
              .object({
                attribute: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Attribute to compare', example: 'OS' }),
                comparator: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Comparator to use', example: 'eq' }),
                objectType: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Type of the object', example: 'node' }),
                value: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Value to compare against', example: 'Linux' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'List of criteria' }),
      })
      .exactOptional()
      .openapi({
        description: 'The criteria defining the group. If not provided, the group will be empty.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupUpdate')

const MethodParameterSchema = z
  .object({
    constraints: z
      .object({
        allow_empty_string: z
          .boolean()
          .openapi({ description: 'can this parameter be empty ?', example: false }),
        allow_whitespace_string: z
          .boolean()
          .openapi({
            description:
              'can this parameter allow trailling/ending spaces, or even a full whitespace string ?',
            example: true,
          }),
        max_length: z.int().openapi({ description: 'maximum size of a parameter', example: 250 }),
        min_length: z.int().openapi({ description: 'minimal size of a parameter', example: 5 }),
        not_regex: z
          .string()
          .openapi({ description: 'a regexp to invalidate this parameter', example: '^c.*' }),
        regex: z
          .string()
          .openapi({ description: 'a regex to validate this parameter', example: '.*' }),
        select: z
          .array(z.string().openapi({ example: '!=' }))
          .openapi({ description: 'List of items authorized for this parameter' }),
      })
      .openapi({
        required: [
          'allow_empty_string',
          'allow_whitespace_string',
          'max_length',
          'min_length',
          'regex',
          'not_regex',
          'select',
        ],
      }),
    description: z
      .string()
      .openapi({
        description: 'description of this parameter',
        example: 'Name of a package to install',
      }),
    name: z.string().openapi({ description: 'Parameter name', example: 'package' }),
    typ: z
      .string()
      .openapi({
        description:
          'Type of the parameter, probably just a string for now, but can be a dsc "HereString"',
        example: 'test',
      }),
  })
  .openapi({ required: ['name', 'description', 'constraints', 'typ'] })
  .openapi('MethodParameter')

const MethodsSchema = z
  .object({
    agents: z
      .array(z.string().openapi({ description: 'name of an agent', example: 'dsc' }))
      .openapi({ description: 'List of agents compatible with this method' }),
    category: z
      .string()
      .openapi({ description: 'category of this technique', example: 'user_techniques' }),
    condition: z
      .object({
        parameter: z
          .string()
          .exactOptional()
          .openapi({
            description: 'id of the parameter used to generate condition',
            example: 'package',
          }),
        prefix: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Prefix used to generate condition',
            example: 'package_present',
          }),
      })
      .openapi({ description: 'condition generated by this method', required: [] }),
    deprecated: z
      .object({
        info: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Information notice about the deprecation, especially how to replace it',
            example: 'titi',
          }),
        replacedBy: z
          .string()
          .exactOptional()
          .openapi({ description: 'Id of the method replacing this method', example: 'tutu' }),
      })
      .openapi({ description: 'Is this method deprecated ?', required: [] }),
    desc: z
      .string()
      .openapi({
        description: 'description of this method',
        example: 'Enforce the presence of a package',
      }),
    documentation: z
      .string()
      .openapi({ description: 'full documentation of this method', example: 'toto' }),
    id: z.string().openapi({ description: 'method id', example: 'package_present' }),
    name: z.string().openapi({ description: 'method name', example: 'Package present' }),
    parameters: z
      .array(MethodParameterSchema)
      .openapi({ description: 'Parameters for this technique' }),
    version: z.string().openapi({ description: 'version of this technique', example: '1.0' }),
  })
  .openapi({
    description: 'List of available generic methods',
    required: [
      'id',
      'name',
      'version',
      'category',
      'desc',
      'documentation',
      'parameters',
      'agents',
      'condition',
      'deprecated',
    ],
    'x-definitions': {
      methodParameter: {
        properties: {
          constraints: {
            properties: {
              allow_empty_string: {
                description: 'can this parameter be empty ?',
                example: false,
                type: 'boolean',
              },
              allow_whitespace_string: {
                description:
                  'can this parameter allow trailling/ending spaces, or even a full whitespace string ?',
                example: true,
                type: 'boolean',
              },
              max_length: {
                description: 'maximum size of a parameter',
                example: 250,
                type: 'integer',
              },
              min_length: {
                description: 'minimal size of a parameter',
                example: 5,
                type: 'integer',
              },
              not_regex: {
                description: 'a regexp to invalidate this parameter',
                example: '^c.*',
                type: 'string',
              },
              regex: {
                description: 'a regex to validate this parameter',
                example: '.*',
                type: 'string',
              },
              select: {
                description: 'List of items authorized for this parameter',
                items: { example: '!=', type: 'string' },
                type: 'array',
              },
            },
            required: [
              'allow_empty_string',
              'allow_whitespace_string',
              'max_length',
              'min_length',
              'regex',
              'not_regex',
              'select',
            ],
            type: 'object',
          },
          description: {
            description: 'description of this parameter',
            example: 'Name of a package to install',
            type: 'string',
          },
          name: { description: 'Parameter name', example: 'package', type: 'string' },
          typ: {
            description:
              'Type of the parameter, probably just a string for now, but can be a dsc "HereString"',
            example: 'test',
            type: 'string',
          },
        },
        required: ['name', 'description', 'constraints', 'typ'],
        type: 'object',
      },
    },
  })
  .openapi('Methods')

const OsSchema = z
  .object({
    fullName: z
      .string()
      .openapi({
        description: 'The long description name of the os',
        example: 'Debian GNU/Linux 9 (stretch)',
      }),
    name: z
      .enum([
        'debian',
        'kali',
        'ubuntu',
        'redhat',
        'centos',
        'fedora',
        'suse',
        'oracle',
        'scientific',
        'slackware',
        'xp',
        'vista',
        'seven',
        '10',
        '2000',
        '2003',
        '2008 r2',
        '2012',
        '2012 r2',
        '2016',
      ])
      .openapi({ description: 'For Linux, a distribution, for Windows, the commercial name' }),
    servicePack: z
      .string()
      .exactOptional()
      .openapi({ description: 'a service pack informationnal string' }),
    type: z.enum(['linux', 'windows', 'solaris', 'aix', 'freebsd', 'unknown']),
    version: z
      .string()
      .openapi({ description: 'A string representation of the version', example: 9.5 }),
  })
  .openapi({ required: ['type', 'name', 'version', 'fullName'] })
  .openapi('Os')

const TimezoneSchema = z
  .object({
    name: z.string().openapi({ description: 'The standard name of the timezone', example: 'CEST' }),
    offset: z
      .string()
      .openapi({ description: 'Timezone offset compared to UTC, in +/-HHMM format', example: 200 }),
  })
  .openapi({ description: 'Timezone information of the node.', required: ['name', 'offset'] })
  .openapi('Timezone')

const NodeAddSchema = z
  .array(
    z
      .object({
        agentKey: AgentKeySchema.exactOptional(),
        hostname: z
          .string()
          .openapi({
            description: 'The fully qualified name of the node',
            example: 'my.node.hostname.local',
          }),
        id: z
          .string()
          .openapi({
            description: 'The Rudder node unique identifier in /opt/rudder/etc/uuid.hive',
            example: '378740d3-c4a9-4474-8485-478e7e52db52',
          }),
        ipAddresses: z
          .array(z.string().openapi({ example: '192.168.180.90' }))
          .openapi({ description: 'an array of IPs.' }),
        machineType: z
          .enum([
            'vmware',
            'physical',
            'vm',
            'solariszone',
            'qemu',
            'xen',
            'aixlpar',
            'hyperv',
            'bsdjail',
          ])
          .openapi({ description: 'The kind of machine for the node (use vm for a generic VM)' }),
        os: OsSchema,
        policyMode: z
          .enum(['enforce', 'audit'])
          .exactOptional()
          .openapi({
            description:
              'The policy mode for the node. Can only be specified when status=accepted. If not specified, the default (global) mode will be used',
          }),
        policyServerId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The policy server ID for that node. By default, "root"',
            example: 'root',
          }),
        properties: z
          .array(
            z
              .object({
                name: z.string().openapi({ description: 'Property name', example: 'datacenter' }),
                value: z
                  .any()
                  .openapi({
                    description: 'Property value (can be a string or JSON object)',
                    example: 'AMS2',
                  }),
              })
              .openapi({ required: ['name', 'value'] }),
          )
          .openapi({
            description: 'Node properties (either set by user or filled by third party sources)',
          }),
        state: z
          .enum(['enabled', 'ignored', 'empty-policies', 'initializing', 'preparing-eol'])
          .exactOptional()
          .openapi({
            description:
              'Node lifecycle state. Can only be specified when status=accepted. If not specified, enable is used',
          }),
        status: z
          .enum(['accepted', 'pending'])
          .openapi({ description: 'Target status of the node' }),
        timezone: TimezoneSchema.exactOptional(),
      })
      .openapi({
        required: ['id', 'hostname', 'status', 'os', 'machineType', 'properties', 'ipAddresses'],
      }),
  )
  .openapi('NodeAdd')

const NodeFullSchema = z
  .object({
    accounts: z
      .array(z.string().openapi({ description: 'User present on the system', example: 'root' }))
      .exactOptional()
      .openapi({ description: 'User accounts declared in the node' }),
    architectureDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Information about CPU architecture (32/64 bits)',
        example: 'x86_64',
      }),
    bios: z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'System provided description of the BIOS (long name)',
            example: 'FIXME',
          }),
        editor: z
          .string()
          .exactOptional()
          .openapi({ description: 'BIOS editor', example: 'innotek GmbH' }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'BIOS name', example: 'VirtualBox' }),
        quantity: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of BIOS on the machine', example: 1 }),
        releaseDate: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Release date of the BIOS',
            example: '2006-12-01 00:00:00+0000',
          }),
        version: z
          .string()
          .exactOptional()
          .openapi({ description: 'BIOS version', example: '1.2.3' }),
      })
      .exactOptional()
      .openapi({ description: 'BIOS information', required: [] }),
    controllers: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided description of the controller' }),
            manufacturer: z
              .string()
              .exactOptional()
              .openapi({ description: 'Controller manufacturer' }),
            name: z.string().exactOptional().openapi({ description: 'Controller name' }),
            quantity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Quantity of that controller', example: 1 }),
            type: z.string().exactOptional().openapi({ description: 'Controller type' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Physical controller information' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human intended description of the node (not used)', example: '' }),
    environmentVariables: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Environment variable name', example: 'LANG' }),
            value: z
              .string()
              .exactOptional()
              .openapi({ description: 'Environment variable value', example: 'en_US.UTF-8' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Environment variables defined on the node in the context of the agent',
      }),
    fileSystems: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'Description of the file system' }),
            fileCount: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of files', example: 1456 }),
            freeSpace: z
              .int()
              .exactOptional()
              .openapi({ description: 'Free space remaining', example: 3487 }),
            mountPoint: z
              .string()
              .exactOptional()
              .openapi({ description: 'Mount point', example: '/srv' }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Type of file system (`ext4`, `swap`, etc.)',
                example: 'ext4',
              }),
            totalSpace: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total space', example: 208869 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'File system declared on the node' }),
    hostname: z
      .string()
      .openapi({ description: 'Fully qualified name of the node', example: 'node1.example.com' }),
    id: z
      .string()
      .openapi({
        description: 'Unique id of the node',
        example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
      }),
    ipAddresses: z
      .array(z.string().openapi({ description: 'IP of the node', example: '192.168.23.45' }))
      .openapi({ description: 'IP addresses of the node (IPv4 and IPv6)' }),
    lastInventoryDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Date and time of the latest generated inventory, if one is available (node time). Up to API v11, format was: "YYYY-MM-dd HH:mm"',
        example: '2020-02-29T10:11:32Z',
      }),
    lastRunDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Date and time of the latest run, if one is available (node time). Up to API v11, format was: "YYYY-MM-dd HH:mm"',
        example: '2020-02-29T14:48:28Z',
      }),
    machine: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'Rudder unique identifier for the machine' }),
        manufacturer: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Information about machine manufacturer',
            example: 'innotek GmbH',
          }),
        provider: z
          .string()
          .exactOptional()
          .openapi({ description: 'In the case of VM, the VM technology', example: 'vbox' }),
        serialNumber: z
          .string()
          .exactOptional()
          .openapi({
            description: 'If available, a unique identifier provided by the machine',
            example: 'ece12459-2b90-49c9-ab1e-72e38f797421',
          }),
        type: z
          .enum(['Physical', 'Virtual'])
          .exactOptional()
          .openapi({ description: 'Type of the machine', example: 'Virtual' }),
      })
      .exactOptional()
      .openapi({ description: 'Information about the underlying machine', required: [] }),
    managementTechnology: z
      .array(
        z
          .object({
            capabilities: z
              .array(
                z
                  .string()
                  .openapi({
                    description:
                      'Special capacities of the agent, like parsing xml or yaml, support of advanced acl, etc.',
                    example: 'xml',
                  }),
              )
              .exactOptional()
              .openapi({ description: 'List of agent capabilities' }),
            name: z.string().openapi({ description: 'Agent name', example: 'Rudder' }),
            nodeKind: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'kind of node for the management engine, like `root`, `relay`, `node`, `root-component`',
                example: 'node',
              }),
            rootComponents: z
              .array(
                z
                  .string()
                  .openapi({
                    description: 'A role that node fulfills in management technology',
                    example: 'rudder-db',
                  }),
              )
              .exactOptional()
              .openapi({ description: 'Roles fulfilled by the agent' }),
            version: z
              .string()
              .exactOptional()
              .openapi({ description: 'Agent version', example: '6.0.3.release-1.EL.7' }),
          })
          .openapi({ required: ['name', 'value'] }),
      )
      .openapi({ description: 'Management agents running on the node' }),
    managementTechnologyDetails: z
      .object({
        cfengineKeys: z
          .array(
            z
              .string()
              .openapi({
                description: 'Certificate (or public key for <6.0 agents) used by the agent',
                example:
                  '-----BEGIN CERTIFICATE-----\\nMIIFqDCC[...]3tALNn\\n-----END CERTIFICATE-----',
              }),
          )
          .exactOptional()
          .openapi({ description: 'Certificates used by the agent' }),
        cfengineUser: z
          .string()
          .exactOptional()
          .openapi({ description: 'Local user account used by the agent', example: 'root' }),
      })
      .exactOptional()
      .openapi({ description: 'Additional information about management technology', required: [] }),
    memories: z
      .array(
        z
          .object({
            capacity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Size of modules', example: 2 }),
            caption: z
              .string()
              .exactOptional()
              .openapi({ description: 'Manufacturer provided information about the module' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided description' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the memory slot or memory module' }),
            quantity: z
              .string()
              .exactOptional()
              .openapi({ description: 'Number of modules in that slot', example: 1 }),
            serialNumber: z
              .string()
              .exactOptional()
              .openapi({ description: 'Serial number of the module' }),
            slotNumber: z.int().exactOptional().openapi({ description: 'Slot number', example: 3 }),
            speed: z
              .int()
              .exactOptional()
              .openapi({ description: 'Memory speed (frequency)', example: 1066 }),
            type: z.string().exactOptional().openapi({ description: 'Memory slot type' }),
          })
          .openapi({ description: 'Memory slots', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Memory slots' }),
    networkInterfaces: z
      .array(
        z
          .object({
            dhcpServer: z
              .string()
              .exactOptional()
              .openapi({
                description: 'DHCP server managing that network interface',
                example: '192.168.34.5',
              }),
            ipAddresses: z
              .array(z.string().openapi({ description: 'IP address', example: '192.168.76.4' }))
              .exactOptional()
              .openapi({ description: 'IP addresses of the network interface' }),
            macAddress: z
              .string()
              .exactOptional()
              .openapi({
                description: 'MAC address of the network interface',
                example: '08:00:27:6f:5c:14',
              }),
            mask: z
              .array(
                z
                  .string()
                  .openapi({ description: 'Network interface mask', example: '255.255.255.0' }),
              )
              .exactOptional(),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Interface name (for ex "eth0")', example: 'eth0' }),
            speed: z
              .string()
              .exactOptional()
              .openapi({ description: 'Information about synchronization speed', example: '1000' }),
            status: z
              .string()
              .exactOptional()
              .openapi({
                description: 'network interface status (enabled or not, up or down)',
                example: 'Up',
              }),
            type: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Information about the type of network interface',
                example: 'ethernet',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Detailed information about registered network interfaces on the node',
      }),
    os: z
      .object({
        fullName: z
          .string()
          .openapi({
            description: 'Full operating system name',
            example: 'CentOS Linux release 7.6.1810 (Core)',
          }),
        kernelVersion: z
          .string()
          .openapi({
            description: 'Version of the OS kernel',
            example: '3.10.0-957.1.3.el7.x86_64',
          }),
        name: z
          .string()
          .openapi({
            description: 'Operating system name (distribution on Linux, etc.)',
            example: 'Centos',
          }),
        servicePack: z
          .string()
          .exactOptional()
          .openapi({ description: 'If relevant, the service pack of the OS', example: '3' }),
        type: z
          .enum(['Windows', 'Linux', 'AIX', 'FreeBSD'])
          .openapi({ description: 'Family of the OS', example: 'Linux' }),
        version: z.string().openapi({ description: 'OS version', example: '7.6.1810' }),
      })
      .exactOptional()
      .openapi({
        description: 'Information about the operating system',
        required: ['type', 'name', 'version', 'fullName', 'kernelVersion'],
      }),
    policyMode: z
      .enum(['enforce', 'audit', 'default'])
      .exactOptional()
      .openapi({
        description: 'Rudder policy mode for the node (`default` follows the global configuration)',
        example: 'audit',
      }),
    policyServerId: z
      .string()
      .openapi({ description: 'Rudder policy server managing the node', example: 'root' }),
    ports: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided description of the port' }),
            name: z.string().exactOptional().openapi({ description: 'Port name' }),
            quantity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Quantity of similar ports', example: 1 }),
            type: z.string().exactOptional().openapi({ description: 'Port type' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Physical port information objects' }),
    processes: z
      .array(
        z
          .object({
            cpuUsage: z
              .int()
              .exactOptional()
              .openapi({ description: 'CPU used by the process (at inventory time)', example: 1 }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided description about the process' }),
            memory: z
              .float32()
              .exactOptional()
              .openapi({
                description: 'Memory allocated to the process (at inventory time)',
                example: 0.4000000059604645,
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Process name', example: '/usr/sbin/httpd -DFOREGROUND' }),
            pid: z
              .int()
              .exactOptional()
              .openapi({ description: 'PID of the process', example: 3576 }),
            started: z.iso
              .date()
              .exactOptional()
              .openapi({
                description: 'Started date and time of the process',
                example: '2020-02-29 00:24',
              }),
            tty: z
              .string()
              .exactOptional()
              .openapi({ description: 'TTY to which the process is', example: '?' }),
            user: z
              .string()
              .exactOptional()
              .openapi({ description: 'User account who started the process', example: 'apache' }),
            virtualMemory: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Virtual memory allocated to the process (at inventory time)',
                example: 4380,
              }),
          })
          .openapi({ description: 'Process information', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Process running (at inventory time)' }),
    processors: z
      .array(
        z
          .object({
            arch: z
              .string()
              .exactOptional()
              .openapi({ description: 'CPU architecture', example: 'i386' }),
            core: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of core for that CPU', example: 1 }),
            cpuid: z.string().exactOptional().openapi({ description: 'Identifier of the CPU' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided description of the CPU' }),
            externalClock: z
              .string()
              .exactOptional()
              .openapi({ description: 'External clock used by the CPU' }),
            familyName: z.string().exactOptional().openapi({ description: 'CPU family' }),
            manufacturer: z
              .string()
              .exactOptional()
              .openapi({ description: 'CPU manufacturer', example: 'Intel' }),
            model: z.int().exactOptional().openapi({ description: 'CPU model', example: 158 }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'CPU name',
                example: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
              }),
            quantity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of CPU with these features', example: 1 }),
            speed: z
              .int()
              .exactOptional()
              .openapi({ description: 'Speed (frequency) of the CPU', example: 2800 }),
            stepping: z
              .int()
              .exactOptional()
              .openapi({ description: 'Stepping or power management information', example: 9 }),
            thread: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of thread by core for the CPU', example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'CPU information' }),
    properties: z
      .array(
        z
          .object({
            name: z.string().openapi({ description: 'Property name', example: 'datacenter' }),
            value: z
              .any()
              .openapi({
                description: 'Property value (can be a string or JSON object)',
                example: 'AMS2',
              }),
          })
          .openapi({ required: ['name', 'value'] }),
      )
      .openapi({
        description: 'Node properties (either set by user or filled by third party sources)',
      }),
    ram: z.int().exactOptional().openapi({ description: 'Size of RAM in MB' }),
    slots: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided description of the slots' }),
            name: z.string().exactOptional().openapi({ description: 'Slot name or identifier' }),
            quantity: z.int().exactOptional().openapi({ description: 'Quantity of similar slots' }),
            status: z
              .string()
              .exactOptional()
              .openapi({ description: 'Slot status (used, powered, etc)' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Physical extension slot information' }),
    software: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A description of the software',
                example: 'A library for getting files from web servers',
              }),
            editor: z
              .string()
              .exactOptional()
              .openapi({ description: 'Editor of the software', example: 'CentOS' }),
            license: z
              .object({
                description: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'License description' }),
                expirationDate: z.iso
                  .date()
                  .exactOptional()
                  .openapi({ description: 'License expiration date' }),
                name: z.string().exactOptional().openapi({ description: 'License name' }),
                oem: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Is this an OEM license (and information)' }),
                productId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'License product identifier' }),
                productKey: z.string().exactOptional().openapi({ description: 'License key' }),
              })
              .exactOptional()
              .openapi({ description: 'Information about the license', required: [] }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Name of the software (as reported by the node)',
                example: 'libcurl',
              }),
            releaseDate: z.iso
              .date()
              .exactOptional()
              .openapi({ description: 'Release date of the software' }),
            version: z
              .string()
              .exactOptional()
              .openapi({ description: 'Version of the software', example: '7.29.0-54.el7_7.2' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Software installed on the node (can have thousands items)' }),
    softwareUpdate: z
      .array(
        z
          .object({
            arch: z
              .string()
              .exactOptional()
              .openapi({ description: 'CPU architecture of the update' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'details about the content of the update, if available' }),
            from: z
              .string()
              .exactOptional()
              .openapi({ description: 'tool that discovered that update' }),
            ids: z
              .array(
                z
                  .string()
                  .openapi({
                    description:
                      'Related identifiers, can be CVE number, vendor-specific advisory (RHSA, etc.)',
                  }),
              )
              .exactOptional(),
            kind: z
              .enum(['none', 'security', 'defect', 'enhancement', 'other'])
              .exactOptional()
              .openapi({
                description: 'if available, kind of patch provided by that update, else none',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'name of software that can be updated' }),
            severity: z
              .enum(['critical', 'high', 'moderate', 'low', 'other'])
              .exactOptional()
              .openapi({ description: 'if available, the severity of the update' }),
            source: z
              .string()
              .exactOptional()
              .openapi({ description: 'information about the source providing that update' }),
            version: z
              .string()
              .exactOptional()
              .openapi({ description: 'available version for software' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Software that can be updated on that machine' }),
    sound: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided description of the sound card' }),
            name: z.string().exactOptional().openapi({ description: 'Sound card name' }),
            quantity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Quantity of similar sound cards', example: 1 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Sound card information' }),
    status: z
      .enum(['pending', 'accepted', 'deleted'])
      .openapi({ description: 'Status of the node', example: 'accepted' }),
    storage: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided information about the storage' }),
            firmware: z
              .string()
              .exactOptional()
              .openapi({ description: 'Storage firmware information', example: '10' }),
            manufacturer: z
              .string()
              .exactOptional()
              .openapi({ description: 'Storage manufacturer' }),
            model: z
              .string()
              .exactOptional()
              .openapi({ description: 'Storage model', example: 'VBOXHARDDISK' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Storage name', example: 'sda' }),
            quantity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Quantity of similar storage', example: 1 }),
            serialNumber: z
              .string()
              .exactOptional()
              .openapi({ description: 'Storage serial number', example: '000a1954' }),
            size: z
              .int()
              .exactOptional()
              .openapi({ description: 'Storage size in MB', example: 85899 }),
            type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Storage type', example: 'disk' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Storage (disks) information objects' }),
    timezone: z
      .object({
        name: z.string().openapi({ description: 'Timezone name', example: 'UTC' }),
        offset: z
          .string()
          .exactOptional()
          .openapi({ description: 'Timezone offset to UTC', example: '+0000' }),
      })
      .exactOptional()
      .openapi({ required: ['name', 'value'] }),
    videos: z
      .array(
        z
          .object({
            chipset: z
              .string()
              .exactOptional()
              .openapi({ description: 'information about video card chipset' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'System provided description for that video card' }),
            memory: z
              .string()
              .exactOptional()
              .openapi({ description: 'Quantity of memory for that video card' }),
            name: z.string().exactOptional().openapi({ description: 'Video card name' }),
            quantity: z
              .int()
              .exactOptional()
              .openapi({ description: 'Quantity of similar video cards', example: 1 }),
            resolution: z
              .string()
              .exactOptional()
              .openapi({ description: 'Resolution used by that video card at inventory time' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Video card information' }),
    virtualMachines: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({
                description: 'System provided description of the hosted virtual machine',
              }),
            memory: z
              .string()
              .exactOptional()
              .openapi({ description: 'Memory allocated to the hosted virtual machine' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the hosted virtual machine' }),
            owner: z
              .string()
              .exactOptional()
              .openapi({ description: 'Owner of the hosted virtual machine' }),
            status: z
              .string()
              .exactOptional()
              .openapi({ description: 'Status (up, starting, etc) of the hosted virtual machine' }),
            subsystem: z
              .string()
              .exactOptional()
              .openapi({ description: 'Technology of the hosted virtual machine' }),
            type: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of the hosted virtual machine' }),
            uuid: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier of the hosted virtual machine' }),
            vcpu: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Number of virtual CPU allocated to the hosted virtual machine',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Hosted virtual machine information' }),
  })
  .openapi({
    required: [
      'id',
      'hostname',
      'status',
      'ipAddresses',
      'managementTechnology',
      'policyServerId',
      'properties',
    ],
  })
  .openapi('NodeFull')

const NodeInheritedPropertiesSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Unique id of the node',
        example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
      }),
    properties: z
      .array(
        z
          .object({
            hierarchy: z
              .array(
                z
                  .object({
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'in the case of a group, its identifier',
                        example: '9180b869-08a3-4173-9dd4-ab68f227e76c',
                      }),
                    kind: z
                      .enum(['global', 'group'])
                      .openapi({
                        description:
                          "The kind of object from which the property's value is inherited",
                        example: 'global',
                      }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'in the case of a group, its name',
                        example: 'all centos7',
                      }),
                    value: z
                      .string()
                      .openapi({
                        description:
                          'a string representation of the value. If it was a json value, it will be escaped.',
                        example: '{"array":[1,2],"object":{"parent":"value"},"string":"parent"}',
                      }),
                  })
                  .openapi({ required: ['kind', 'value'] }),
              )
              .exactOptional()
              .openapi({
                description:
                  'A description of the inheritance hierarchy for that property, with most direct parent at head and oldest one at tail',
              }),
            name: z.string().openapi({ description: 'Property name', example: 'datacenter' }),
            origval: z
              .any()
              .exactOptional()
              .openapi({
                description:
                  'The original value (ie, before overriding and inheritance resolution) for that node',
                example: 'AMS2',
              }),
            provider: z
              .enum(['inherited', 'overridden', 'plugin name like datasources'])
              .exactOptional()
              .openapi({
                description: 'Property provider (if the property is not a simple node property)',
              }),
            value: z
              .any()
              .openapi({
                description:
                  'Resolved (ie, with inheritance and overriding done) property value (can be a string or JSON object)',
                example: 'AMS2',
              }),
          })
          .openapi({ required: ['name', 'value'] }),
      )
      .openapi({
        description: 'Node properties (either set by user or filled by third party sources)',
      }),
  })
  .openapi({ required: ['id', 'properties'] })
  .openapi('NodeInheritedProperties')

const NodeSettingsSchema = z
  .object({
    agentKey: AgentKeySchema.exactOptional(),
    policyMode: z
      .enum(['audit', 'enforce', 'default'])
      .exactOptional()
      .openapi({
        description:
          'In which mode the node will apply its configuration policy. Use `default` to use the global mode.',
        example: 'audit',
      }),
    properties: z
      .array(
        z
          .object({
            name: z.string().openapi({ description: 'Property name', example: 'datacenter' }),
            value: z
              .any()
              .openapi({
                description: 'Property value (can be a string or JSON object)',
                example: 'AMS2',
              }),
          })
          .openapi({ required: ['name', 'value'] }),
      )
      .exactOptional(),
    state: z
      .enum(['enabled', 'ignored', 'empty-policies', 'initializing', 'preparing-eol'])
      .exactOptional()
      .openapi({
        description:
          'The node life cycle state. See [dedicated doc](https://docs.rudder.io/reference/current/usage/advanced_node_management.html#node-lifecycle) for more information.',
        example: 'enabled',
      }),
  })
  .openapi({ required: [] })
  .openapi('NodeSettings')

const ParameterSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the parameter',
        example: 'Default inform message put in footer of managed files by Rudder',
      }),
    id: z
      .string()
      .openapi({ description: 'Name of the parameter', example: 'rudder_file_edit_footer' }),
    overridable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the global parameter overridable by node', example: false }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        description: 'Value of the parameter',
        example: '### End of file managed by Rudder ###',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('Parameter')

const RuleTargetSchema = z
  .enum([
    'special:all',
    'special:all_exceptPolicyServers',
    'special:all_policyServers',
    'policyServer:${policyServerId}',
    'group:${nodeGroupId}',
  ])
  .openapi({
    description: 'Node and special groups targeted by that rule',
    example: 'policyServer:root',
  })
  .openapi('RuleTarget')

const RuleTargetsSchema = z
  .array(
    z
      .object({
        exclude: z
          .object({ or: z.array(RuleTargetSchema).exactOptional() })
          .openapi({
            description: 'list of groups to exclude from rule application',
            required: [],
          }),
        include: z
          .object({ or: z.array(RuleTargetSchema).exactOptional() })
          .openapi({ description: 'list of groups to include in rule application', required: [] }),
      })
      .openapi({
        example: {
          exclude: { or: ['policyServer:root', 'group:cd377524-808b-4b42-8724-6ef308efeac7'] },
          include: { or: ['special:all'] },
        },
        required: ['include', 'exclude'],
      }),
  )
  .openapi({ description: 'Node and special groups targeted by that rule' })
  .openapi('RuleTargets')

const RuleSchema = z
  .object({
    directives: z
      .array(z.string().openapi({ description: 'Directive id' }))
      .exactOptional()
      .openapi({ description: 'Directives linked to the rule' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rule name', example: 'Security policy' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the rule enabled', example: true }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Rule id', example: '0c1713ae-cb9d-4f7b-abda-ca38c5d643ea' }),
    longDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Rule documentation',
        example: 'This rules should be applied to all Linux nodes required basic hardening',
      }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One line rule description',
        example: 'Baseline applying CIS guidelines',
      }),
    system: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true it is an internal Rudder rule', example: false }),
    tags: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Value of the `name` key', example: 'value' }),
          })
          .openapi({ example: { customer: 'MyCompany' }, required: [] }),
      )
      .exactOptional(),
    targets: RuleTargetsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Rule')

const RuleCategorySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Rules category description',
        example: 'Baseline applying CIS guidelines',
      }),
    id: z
      .uuid()
      .default('{autogenerated}')
      .exactOptional()
      .openapi({
        description: 'Rule category id, only provide it when needed.',
        example: '32d013f7-b6d8-46c8-99d3-016307fa66c0',
      }),
    name: z
      .string()
      .openapi({ description: 'Name of the rule category', example: 'Security policies' }),
    parent: z
      .uuid()
      .openapi({
        description: 'The parent category of the rules',
        example: 'b9f6d98a-28bc-4d80-90f7-d2f14269e215',
      }),
  })
  .openapi({ required: ['parent', 'name'] })
  .openapi('RuleCategory')

const RuleCategoryUpdateSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Rules category description',
        example: 'Baseline applying CIS guidelines',
      }),
    name: z
      .string()
      .openapi({ description: 'Name of the rule category', example: 'Security policies' }),
    parent: z
      .uuid()
      .openapi({
        description: 'The parent category of the rules',
        example: 'b9f6d98a-28bc-4d80-90f7-d2f14269e215',
      }),
  })
  .openapi({ required: ['parent', 'name'] })
  .openapi('RuleCategoryUpdate')

const RuleNewSchema = z
  .object({
    category: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The parent category id. If provided, the new rule will be in this parent category',
        example: '38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca',
      }),
    directives: z
      .array(z.string().openapi({ description: 'Directive id' }))
      .exactOptional()
      .openapi({ description: 'Directives linked to the rule' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rule name', example: 'Security policy' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the rule enabled', example: true }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Rule id', example: '0c1713ae-cb9d-4f7b-abda-ca38c5d643ea' }),
    longDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Rule documentation',
        example: 'This rules should be applied to all Linux nodes required basic hardening',
      }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One line rule description',
        example: 'Baseline applying CIS guidelines',
      }),
    source: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The id of the rule the clone will be based onto. If this parameter if provided, the new rule will be a clone of this source. Other value will override values from the source.',
        example: 'b9f6d98a-28bc-4d80-90f7-d2f14269e215',
      }),
    system: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true it is an internal Rudder rule', example: false }),
    tags: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Value of the `name` key', example: 'value' }),
          })
          .openapi({ example: { customer: 'MyCompany' }, required: [] }),
      )
      .exactOptional(),
    targets: RuleTargetsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RuleNew')

const RuleWithCategorySchema = z
  .object({
    category: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The parent category id.',
        example: '38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca',
      }),
    directives: z
      .array(z.string().openapi({ description: 'Directive id' }))
      .exactOptional()
      .openapi({ description: 'Directives linked to the rule' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rule name', example: 'Security policy' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the rule enabled', example: true }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Rule id', example: '0c1713ae-cb9d-4f7b-abda-ca38c5d643ea' }),
    longDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Rule documentation',
        example: 'This rules should be applied to all Linux nodes required basic hardening',
      }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One line rule description',
        example: 'Baseline applying CIS guidelines',
      }),
    system: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true it is an internal Rudder rule', example: false }),
    tags: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Value of the `name` key', example: 'value' }),
          })
          .openapi({ example: { customer: 'MyCompany' }, required: [] }),
      )
      .exactOptional(),
    targets: RuleTargetsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RuleWithCategory')

const SecretsSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the secret to identify it more easily',
        example: 'Password of my super secret user account',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the secret used as a reference on the value',
        example: 'secret-password',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value of the secret it will not be exposed in the interface',
        example: 'nj-k;EO32!kFWewn2Nk,u',
      }),
  })
  .openapi({ required: [] })
  .openapi('Secrets')

const TechniquesSchema = z
  .array(EditorTechniqueSchema)
  .openapi({
    'x-definitions': {
      editorTechnique: {
        properties: {
          calls: {
            description: 'Method and blocks contained by this technique',
            items: {
              oneOf: [
                { $ref: '#/components/schemas/techniqueMethodCall' },
                { $ref: '#/components/schemas/techniqueBlock' },
              ],
            },
            type: 'array',
          },
          category: {
            description: 'category of this technique',
            example: 'user_techniques',
            type: 'string',
          },
          description: {
            description: 'description of this technique',
            example: 'This techniques apply generic security policies',
            type: 'string',
          },
          id: { description: 'Technique id', example: 'security-policy', type: 'string' },
          name: { description: 'Technique name', example: 'Security Policy', type: 'string' },
          parameters: {
            description: 'Parameters for this technique',
            items: { $ref: '#/components/schemas/techniqueParameter' },
            type: 'array',
          },
          resources: {
            description: 'Resources for this technique',
            items: { $ref: '#/components/schemas/techniqueResource' },
            type: 'array',
          },
          source: {
            description: 'Source of the technique, always editor here',
            example: 'editor',
            type: 'string',
          },
          version: { description: 'version of this technique', example: '1.0', type: 'string' },
        },
        type: 'object',
      },
      techniqueBlock: {
        properties: {
          calls: {
            description: 'Method and blocks contained by this block',
            example: [],
            items: {
              oneOf: [
                { $ref: '#/components/schemas/techniqueMethodCall' },
                { $ref: '#/components/schemas/techniqueBlock' },
              ],
            },
            type: 'array',
          },
          component: {
            description:
              'Component is used in reporting to identify this method call. You can see it as a name',
            example: 'Install my app',
            type: 'string',
          },
          condition: {
            description: 'Condition to run this method.',
            example: 'linux.package_present_vim_repaired',
            type: 'string',
          },
          id: {
            description: 'Method call id',
            example: '6a8de98f-7829-4c1b-b4e7-b9387f27f279',
            type: 'string',
          },
          reportingLogic: {
            properties: {
              type: { description: 'kind of reporting logic', example: 'worst', type: 'string' },
              value: {
                description: 'reporting value used for some reporting logic (ie focus)',
                example: 'id/name of a component',
                type: 'string',
              },
            },
            type: 'object',
          },
        },
        type: 'object',
      },
      techniqueMethodCall: {
        properties: {
          component: {
            description:
              'Component is used in reporting to identify this method call. You can see it as a name',
            example: 'Install apache2',
            type: 'string',
          },
          condition: {
            description: 'Condition to run this method.',
            example: 'linux.package_present_vim_repaired',
            type: 'string',
          },
          disableReporting: {
            description: 'Should the reporting of this method be disabled',
            example: true,
            type: 'boolean',
          },
          id: {
            description: 'Method call id',
            example: '6a8de98f-7829-4c1b-b4e7-b9387f27f279',
            type: 'string',
          },
          method: {
            description: 'Id of the method called',
            example: 'package_present',
            type: 'string',
          },
          parameters: {
            description: 'Parameters for this method call',
            items: {
              properties: {
                name: { description: 'Parameter name', example: 'package', type: 'string' },
                value: { description: 'Parameter value', example: 'apache2', type: 'string' },
              },
              type: 'object',
            },
            type: 'array',
          },
        },
        type: 'object',
      },
      techniqueParameter: {
        properties: {
          description: {
            description: 'description of this parameter',
            example: 'Name of a package to install',
            type: 'string',
          },
          id: {
            description: 'parameter id',
            example: '6a8de98f-7829-4c1b-b4e7-b9387f27f279',
            type: 'string',
          },
          mayBeEmpty: {
            description: 'May the value given when creating a directive be empty',
            example: true,
            type: 'boolean',
          },
          name: { description: 'Parameter name', example: 'Package to install', type: 'string' },
        },
        type: 'object',
      },
      techniqueResource: {
        properties: {
          name: {
            description: 'resource name. this is the relative path to the resource',
            example: 'conf/my/app/new',
            type: 'string',
          },
          state: {
            description:
              'State of the resource file. it can be a value between new, modified, deleted, untouched',
            example: 'modified',
            type: 'string',
          },
        },
        type: 'object',
      },
    },
  })
  .openapi('Techniques')

const TechniquesResourcesSchema = z
  .array(
    z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({ description: "Resource's name", example: 'apply-policy.robot' }),
        state: z
          .string()
          .exactOptional()
          .openapi({ description: 'State of the resource', example: 'untouched' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('TechniquesResources')

const TechniquesRevisionsSchema = z
  .array(
    z
      .object({
        author: z.string().openapi({ description: "Commit's author", example: 'admin' }),
        date: z
          .string()
          .openapi({ description: "Commit's date", example: '2022-06-14T16:20:40+02:00' }),
        message: z
          .string()
          .openapi({ description: "Commit's message", example: 'Committing technique bar' }),
        revision: z
          .string()
          .openapi({
            description: 'Revision ID',
            example: '6faf7e9c47f2c3a41784598b5acf2883bd4e1e08',
          }),
      })
      .openapi({ required: ['revision', 'date', 'author', 'message'] }),
  )
  .openapi('TechniquesRevisions')

const TechniquesVersionsSchema = z
  .array(
    z
      .object({
        name: z.string().exactOptional().openapi({ description: 'Technique name' }),
        versions: z
          .array(z.string().openapi({ description: 'Technique version' }))
          .exactOptional()
          .openapi({ description: 'Available versions for this technique' }),
      })
      .openapi({
        example: { name: 'userManagement', version: ['1.0', '1.2', '3.0'] },
        required: [],
      }),
  )
  .openapi('TechniquesVersions')

const UsersSchema = z
  .object({
    isPreHahed: z
      .union([z.literal(false), z.literal(true)])
      .exactOptional()
      .openapi({
        description:
          'If you want to provide hashed password set this property to `true` otherwise we will hash the plain password and store the hash',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description: 'this password will be hashed for you if the `isPreHashed` is set on false',
        example: 'passwdWillBeStoredHashed',
      }),
    role: z
      .array(z.string().openapi({ example: 'user' }))
      .exactOptional()
      .openapi({ description: "Defined user's permissions" }),
    username: z.string().exactOptional().openapi({ example: 'John Doe' }),
  })
  .openapi({ required: [] })
  .openapi('Users')

const ValidatedUserSchema = z
  .object({
    isValidated: z
      .boolean()
      .openapi({ description: "whether the user's actions generate chanque-request or not" }),
    userExists: z.boolean().openapi({ description: 'whether the user exists in file or not' }),
    username: z.string().openapi({ example: 'John Do' }),
  })
  .openapi({
    description: 'list of users with their workflow settings',
    required: ['username', 'isValidated', 'userExists'],
  })
  .openapi('ValidatedUser')

const AgentOutputResponse = {
  description: 'Agent output',
  content: {
    'text/plain': {
      schema: z
        .string()
        .openapi({
          example:
            'Start execution with config [20200218-112602-11ce4f64]\nHostname        M| State         Technique                 Component                 Key                Message 192.168.210.5   E| compliant     Common                    ncf Initialization                           Configuration library initialization was correct 192.168.210.5   E| compliant     Common                    Update                                       Policy and configuration library are already up to date. No action required. [...]\n## Summary ##################################################################### 90 components verified in 15 directives\n  => 62 components in Enforce mode\n      -> 48 compliant\n      -> 13 not-applicable\n      -> 1 error\n  => 28 components in Audit mode\n      -> 15 compliant\n      -> 3 not-applicable\n      -> 10 non-compliant\nExecution time: 8.89s ################################################################################',
        }),
    },
  },
}

const ArchiveKindParamsSchema = z
  .enum(['full', 'groups', 'rules', 'directives', 'parameters'])
  .openapi({
    param: {
      description: 'Type of archive to make',
      in: 'path',
      name: 'archiveKind',
      required: true,
      schema: {
        enum: ['full', 'groups', 'rules', 'directives', 'parameters'],
        example: 'full',
        type: 'string',
      },
    },
    example: 'full',
  })

const ChangeRequestIdParamsSchema = z
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
      in: 'path',
      name: 'changeRequestId',
      required: true,
      schema: { description: 'Change request id', example: 37, type: 'integer' },
    },
    description: 'Change request id',
    example: 37,
  })

const ComplianceLevelParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)',
      in: 'query',
      name: 'level',
      schema: { default: 10, example: 4, type: 'integer' },
      required: false,
    },
    example: 4,
  })

const CompliancePercentPrecisionParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(2)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of digits after comma in compliance percent figures',
      in: 'query',
      name: 'precision',
      schema: { default: 2, example: 0, type: 'integer' },
      required: false,
    },
    example: 0,
  })

const DatasourceIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Id of the data source',
      in: 'path',
      name: 'datasourceId',
      required: true,
      schema: { example: 'test-data-source', type: 'string' },
    },
    example: 'test-data-source',
  })

const DirectiveIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Id of the directive',
      in: 'path',
      name: 'directiveId',
      required: true,
      schema: { example: '9a1773c9-0889-40b6-be89-f6504443ac1b', format: 'uuid', type: 'string' },
    },
    example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
  })

const GroupCategoryIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      in: 'path',
      name: 'groupCategoryId',
      required: true,
      schema: {
        description: 'Group category id',
        example: 'e0a311fa-f7b2-4f9e-89a9-db517b9c6b90',
        format: 'uuid',
        type: 'string',
      },
    },
    description: 'Group category id',
    example: 'e0a311fa-f7b2-4f9e-89a9-db517b9c6b90',
  })

const GroupIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Id of the group',
      in: 'path',
      name: 'groupId',
      required: true,
      schema: { example: '9a1773c9-0889-40b6-be89-f6504443ac1b', format: 'uuid', type: 'string' },
    },
    example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
  })

const IncludeParamsSchema = z
  .string()
  .default('default')
  .exactOptional()
  .openapi({
    param: {
      description:
        "Level of information to include from the node inventory. Some base levels are defined (**minimal**, **default**, **full**). You can add fields you want to a base level by adding them to the list, possible values are keys from json answer. If you don't provide a base level, they will be added to `default` level, so if you only want os details, use `minimal,os` as the value for this parameter.\n* **minimal** includes: `id`, `hostname` and `status`\n* **default** includes **minimal** plus `architectureDescription`, `description`, `ipAddresses`, `lastRunDate`, `lastInventoryDate`, `machine`, `os`, `managementTechnology`, `policyServerId`, `properties` (be careful! Only node own properties, if you also need inherited properties, look at the dedicated `/nodes/{id}/inheritedProperties` endpoint), `policyMode `, `ram` and `timezone`\n* **full** includes: **default** plus `accounts`, `bios`, `controllers`, `environmentVariables`, `fileSystems`, `managementTechnologyDetails`, `memories`, `networkInterfaces`, `ports`, `processes`, `processors`, `slots`, `software`, `sound`, `storage`, `videos` and `virtualMachines`",
      in: 'query',
      name: 'include',
      schema: {
        default: 'default',
        example: 'minimal',
        format: 'comma-separated list',
        type: 'string',
      },
      required: false,
    },
    example: 'minimal',
  })

const NodeCompositionParamsSchema = z
  .enum(['and', 'or'])
  .default('and')
  .exactOptional()
  .openapi({
    param: {
      description: 'Boolean operator to use between each  `where` criteria.',
      in: 'query',
      name: 'composition',
      schema: { default: 'and', enum: ['and', 'or'], example: 'and', type: 'string' },
      required: false,
    },
    example: 'and',
  })

const NodeDeleteModeParamsSchema = z
  .enum(['move', 'erase'])
  .default('move')
  .exactOptional()
  .openapi({
    param: {
      description:
        "Deletion mode to use, either move to trash ('move', default) or erase ('erase')",
      in: 'query',
      name: 'mode',
      required: false,
      schema: { default: 'move', enum: ['move', 'erase'], example: 'move', type: 'string' },
    },
    example: 'move',
  })

const NodeIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Id of the target node',
      in: 'path',
      name: 'nodeId',
      required: true,
      schema: {
        example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
        format: 'uuid (or "root")',
        type: 'string',
      },
    },
    example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
  })

const NodeIdsParamsSchema = z
  .string()
  .default('default')
  .openapi({
    param: {
      description: 'Comma separated list of node Ids',
      in: 'query',
      name: 'ids',
      required: true,
      schema: {
        default: 'default',
        example: '8403353b-42c4-46f5-a08d-bc77a1a0bad9,root',
        format: 'comma-separated list',
        type: 'string',
      },
    },
    example: '8403353b-42c4-46f5-a08d-bc77a1a0bad9,root',
  })

const NodeQueryParamsSchema = z
  .preprocess(
    (val) => {
      if (typeof val !== 'string') return val
      try {
        return JSON.parse(val)
      } catch {
        return val
      }
    },
    z.object({
      composition: z
        .enum(['and', 'or'])
        .default('and')
        .exactOptional()
        .openapi({
          description: 'Boolean operator to use between each  `where` criteria.',
          example: 'and',
        }),
      select: z
        .string()
        .default('node')
        .exactOptional()
        .openapi({
          description:
            'What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.',
        }),
      where: z
        .array(
          z
            .object({
              attribute: z
                .string()
                .exactOptional()
                .openapi({ description: 'Attribute to compare', example: 'OS' }),
              comparator: z
                .string()
                .exactOptional()
                .openapi({ description: 'Comparator to use', example: 'eq' }),
              objectType: z
                .string()
                .exactOptional()
                .openapi({ description: 'Type of the object', example: 'node' }),
              value: z
                .string()
                .exactOptional()
                .openapi({ description: 'Value to compare against', example: 'Linux' }),
            })
            .openapi({ required: [] }),
        )
        .exactOptional()
        .openapi({ description: 'List of criteria' }),
    }),
  )
  .exactOptional()
  .openapi({
    param: {
      content: {
        'application/json': {
          schema: {
            properties: {
              composition: {
                default: 'and',
                description: 'Boolean operator to use between each  `where` criteria.',
                enum: ['and', 'or'],
                example: 'and',
                type: 'string',
              },
              select: {
                default: 'node',
                description:
                  'What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.',
                type: 'string',
              },
              where: {
                description: 'List of criteria',
                items: {
                  properties: {
                    attribute: {
                      description: 'Attribute to compare',
                      example: 'OS',
                      type: 'string',
                    },
                    comparator: { description: 'Comparator to use', example: 'eq', type: 'string' },
                    objectType: {
                      description: 'Type of the object',
                      example: 'node',
                      type: 'string',
                    },
                    value: {
                      description: 'Value to compare against',
                      example: 'Linux',
                      type: 'string',
                    },
                  },
                  type: 'object',
                },
                type: 'array',
              },
            },
            type: 'object',
          },
        },
      },
      description:
        'The criterion you want to find for your nodes. Replaces the `where`, `composition` and `select` parameters in a single parameter.',
      in: 'query',
      name: 'query',
      required: false,
    },
    required: [],
  })

const NodeSelectParamsSchema = z
  .string()
  .default('node')
  .exactOptional()
  .openapi({
    param: {
      description:
        'What kind of data we want to include. Here we can get policy servers/relay by setting `nodeAndPolicyServer`. Only used if `where` is defined.',
      in: 'query',
      name: 'select',
      schema: { default: 'node', type: 'string' },
      required: false,
    },
  })

const NodeWhereParamsSchema = z
  .preprocess(
    (val) => {
      if (typeof val !== 'string') return val
      try {
        return JSON.parse(val)
      } catch {
        return val
      }
    },
    z.array(
      z
        .object({
          attribute: z
            .string()
            .exactOptional()
            .openapi({ description: 'Attribute to compare', example: 'OS' }),
          comparator: z
            .string()
            .exactOptional()
            .openapi({ description: 'Comparator to use', example: 'eq' }),
          objectType: z
            .string()
            .exactOptional()
            .openapi({ description: 'Type of the object', example: 'node' }),
          value: z
            .string()
            .exactOptional()
            .openapi({ description: 'Value to compare against', example: 'Linux' }),
        })
        .openapi({ required: [] }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      content: {
        'application/json': {
          schema: {
            description: 'List of criteria',
            items: {
              properties: {
                attribute: { description: 'Attribute to compare', example: 'OS', type: 'string' },
                comparator: { description: 'Comparator to use', example: 'eq', type: 'string' },
                objectType: { description: 'Type of the object', example: 'node', type: 'string' },
                value: {
                  description: 'Value to compare against',
                  example: 'Linux',
                  type: 'string',
                },
              },
              type: 'object',
            },
            type: 'array',
          },
        },
      },
      description: 'The criterion you want to find for your nodes',
      in: 'query',
      name: 'where',
      required: false,
    },
    description: 'List of criteria',
  })

const ParameterIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Id of the parameter to manage',
      in: 'path',
      name: 'parameterId',
      required: true,
      schema: { example: 'rudder_file_edit_header', type: 'string' },
    },
    example: 'rudder_file_edit_header',
  })

const RuleCategoryIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      in: 'path',
      name: 'ruleCategoryId',
      required: true,
      schema: {
        description: 'Rule category id',
        example: 'e0a311fa-f7b2-4f9e-89a9-db517b9c6b90',
        format: 'uuid',
        type: 'string',
      },
    },
    description: 'Rule category id',
    example: 'e0a311fa-f7b2-4f9e-89a9-db517b9c6b90',
  })

const RuleIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Id of the target rule',
      in: 'path',
      name: 'ruleId',
      required: true,
      schema: { example: '9a1773c9-0889-40b6-be89-f6504443ac1b', format: 'uuid', type: 'string' },
    },
    example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
  })

const SecretNameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Unique name of the secret',
      in: 'path',
      name: 'name',
      required: true,
      schema: { type: 'string' },
    },
  })

const SettingAllowedNetworksParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Policy server ID for which you want to manage allowed networks.',
      in: 'path',
      name: 'nodeId',
      required: true,
      schema: {
        example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
        format: 'uuid (or "root")',
        type: 'string',
      },
    },
    example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
  })

const SettingIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Id of the setting to set',
      in: 'path',
      name: 'settingId',
      required: true,
      schema: { example: 'global_policy_mode', type: 'string' },
    },
    example: 'global_policy_mode',
  })

const TechniqueIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Technique ID',
      in: 'path',
      name: 'techniqueId',
      required: true,
      schema: { description: 'Technique ID', example: 'userManagement', type: 'string' },
    },
    description: 'Technique ID',
    example: 'userManagement',
  })

const TechniqueVersionParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Technique version',
      in: 'path',
      name: 'techniqueVersion',
      required: true,
      schema: { description: 'Technique version', example: '6.0', type: 'string' },
    },
    description: 'Technique version',
    example: '6.0',
  })

const UsernameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Username of an user (unique)',
      in: 'path',
      name: 'username',
      required: true,
      schema: { example: 'JaneDoe', type: 'string' },
    },
    example: 'JaneDoe',
  })

const APITokensSecurityScheme = {
  description:
    'Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the \'API Accounts\' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png "API Tokens settings")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header "X-API-Token: yourToken" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.',
  in: 'header',
  name: 'X-API-Token',
  type: 'apiKey',
}

export const getApiChangeRequestsRoute = createRoute({
  method: 'get',
  path: '/api/changeRequests',
  tags: ['🧩 Change requests'],
  summary: 'List all change requests',
  description: 'List all change requests',
  operationId: 'listChangeRequests',
  responses: {
    200: {
      description: 'Change requests information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('listChangeRequests')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ rules: z.array(ChangeRequestSchema) })
                .openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getArchivesExportRoute = createRoute({
  method: 'get',
  path: '/archives/export',
  tags: ['Archives'],
  summary: 'Get a ZIP archive of the requested items and their dependencies',
  description:
    'Get a ZIP archive or rules, directives, techniques and groups with optionally their dependencies',
  operationId: 'export',
  request: {
    query: z.object({
      rules: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "IDs (optionally with revision, '+' need to be escaped as '%2B') of rules to include",
            examples: {
              multipleIds: {
                summary: 'Example of multiple IDs, some with revisions',
                value: [
                  'a0573b59-e5bd-441b-9031-f307aa21a61e',
                  '4cba6eee-3a43-4e17-a608-a4941b6d984f%2B35177d0823791a374de9e16a6ab27e6466fbc8c2',
                ],
              },
              oneId: {
                summary: 'Example of a single ID',
                value: ['a0573b59-e5bd-441b-9031-f307aa21a61e'],
              },
            },
            explode: false,
            in: 'query',
            name: 'rules',
            schema: { items: {}, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      directives: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "IDs (optionally with revision, '+' need to be escaped as '%2B') of directives to include",
            examples: {
              multipleIds: {
                summary: 'Example of multiple IDs, some with revisions',
                value: [
                  'a0573b59-e5bd-441b-9031-f307aa21a61e',
                  '4cba6eee-3a43-4e17-a608-a4941b6d984f%2B35177d0823791a374de9e16a6ab27e6466fbc8c2',
                ],
              },
              oneId: {
                summary: 'Example of a single ID',
                value: ['a0573b59-e5bd-441b-9031-f307aa21a61e'],
              },
            },
            explode: false,
            in: 'query',
            name: 'directives',
            schema: { items: {}, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      techniques: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "IDs, ie technique name/technique version (optionally with revision, '+' need to be escaped as '%2B') of techniques to include",
            examples: {
              multipleIds: {
                summary: 'Example of multiple IDs, some with revisions',
                value: [
                  'userManagement/6.3',
                  'fileContent/3.0%2B35177d0823791a374de9e16a6ab27e6466fbc8c2',
                ],
              },
              oneId: { summary: 'Example of a single ID', value: ['fileContent/3.0'] },
            },
            explode: false,
            in: 'query',
            name: 'techniques',
            schema: { items: {}, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      groups: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.any()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "IDs (optionally with revision, '+' need to be escaped as '%2B') of groups to include",
            examples: {
              multipleIds: {
                summary: 'Example of multiple IDs, some with revisions',
                value: [
                  'a0573b59-e5bd-441b-9031-f307aa21a61e',
                  '4cba6eee-3a43-4e17-a608-a4941b6d984f%2B35177d0823791a374de9e16a6ab27e6466fbc8c2',
                ],
              },
              oneId: {
                summary: 'Example of a single ID',
                value: ['a0573b59-e5bd-441b-9031-f307aa21a61e'],
              },
            },
            explode: false,
            in: 'query',
            name: 'groups',
            schema: { items: {}, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      include: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['all (default)', 'none', 'directives', 'techniques', 'groups'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Scope of dependencies to include in archive, where rule as directives and groups dependencies, directives have techniques dependencies, and techniques and groups don't have dependencies. 'none' means no dependencies will be include, 'all' means that the whole tree will,  'directives' and 'groups' means to include them specifically, 'techniques' means to include both directives and techniques.",
            examples: {
              directivesAndGroups: {
                summary: 'Include directives and groups, but no techniques',
                value: ['directives', 'groups'],
              },
              none: { summary: 'Do not include dependencies', value: ['none'] },
            },
            explode: false,
            in: 'query',
            name: 'include',
            schema: {
              items: {
                enum: ['all (default)', 'none', 'directives', 'techniques', 'groups'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A zip archive with the queried content.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const postArchivesImportRoute = createRoute({
  method: 'post',
  path: '/archives/import',
  tags: ['Archives'],
  summary: 'Import a ZIP archive of policies into Rudder',
  description:
    'Import a ZIP archive of techniques, directives, groups and rules in a saved in a normalized format into Rudder',
  operationId: 'import',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              archive: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The ZIP archive file containing policies in a conventional layout and serialization format',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Archive imported',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('import').openapi({ description: 'The id of the action' }),
              data: z
                .object({ archiveImported: z.boolean().exactOptional() })
                .openapi({ description: 'Details about archive import process', required: [] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getBrandingRoute = createRoute({
  method: 'get',
  path: '/branding',
  tags: ['🧩 Branding'],
  summary: 'Get branding configuration',
  description: 'Get all web interface customization parameters',
  operationId: 'getBrandingConf',
  responses: {
    200: {
      description: 'Branding configuration',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getBrandingConf').openapi({ description: 'The id of the action' }),
              data: z.object({ branding: BrandingConfSchema }).openapi({ required: ['branding'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postBrandingRoute = createRoute({
  method: 'post',
  path: '/branding',
  tags: ['🧩 Branding'],
  summary: 'Update web interface customization',
  description: 'change color, logo, label etc.',
  operationId: 'updateBRandingConf',
  request: {
    body: { content: { 'application/json': { schema: BrandingConfSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('updateBRandingConf')
                .openapi({ description: 'The id of the action' }),
              data: z.object({ branding: BrandingConfSchema }).openapi({ required: ['branding'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postBrandingReloadRoute = createRoute({
  method: 'post',
  path: '/branding/reload',
  tags: ['🧩 Branding'],
  summary: 'Reload branding file',
  description: 'Reload the configuration from file',
  operationId: 'reloadBrandingConf',
  responses: {
    200: {
      description: 'Branding configuration',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getBrandingConf').openapi({ description: 'The id of the action' }),
              data: z.object({ branding: BrandingConfSchema }).openapi({ required: ['branding'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getChangeRequestsChangeRequestIdRoute = createRoute({
  method: 'get',
  path: '/changeRequests/{changeRequestId}',
  tags: ['🧩 Change requests'],
  summary: 'Get a change request details',
  description: 'Get a change request details',
  operationId: 'changeRequestDetails',
  request: { params: z.object({ changeRequestId: ChangeRequestIdParamsSchema }) },
  responses: {
    200: {
      description: 'Change requests information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('changeRequestDetails')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ rules: z.array(ChangeRequestSchema) })
                .openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postChangeRequestsChangeRequestIdRoute = createRoute({
  method: 'post',
  path: '/changeRequests/{changeRequestId}',
  tags: ['🧩 Change requests'],
  summary: 'Update a request details',
  description: 'Update a change request',
  operationId: 'updateChangeRequest',
  request: {
    params: z.object({ changeRequestId: ChangeRequestIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Change request description' }),
              name: z.string().exactOptional().openapi({ description: 'Change request name' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Change requests information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('updateChangeRequest')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ rules: z.array(ChangeRequestSchema) })
                .openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteChangeRequestsChangeRequestIdRoute = createRoute({
  method: 'delete',
  path: '/changeRequests/{changeRequestId}',
  tags: ['🧩 Change requests'],
  summary: 'Decline a request details',
  description: 'Refuse a change request',
  operationId: 'declineChangeRequest',
  request: { params: z.object({ changeRequestId: ChangeRequestIdParamsSchema }) },
  responses: {
    200: {
      description: 'Change requests information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('declineChangeRequest')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ rules: z.array(ChangeRequestSchema) })
                .openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postChangeRequestsChangeRequestIdAcceptRoute = createRoute({
  method: 'post',
  path: '/changeRequests/{changeRequestId}/accept',
  tags: ['🧩 Change requests'],
  summary: 'Accept a request details',
  description: 'Accept a change request',
  operationId: 'acceptChangeRequest',
  request: {
    params: z.object({ changeRequestId: ChangeRequestIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['pending deployment', 'deployed'])
                .exactOptional()
                .openapi({ description: 'New status of the change request', example: 'deployed' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Change requests information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('acceptChangeRequest')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ rules: z.array(ChangeRequestSchema) })
                .openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getComplianceRoute = createRoute({
  method: 'get',
  path: '/compliance',
  tags: ['Compliance'],
  summary: 'Global compliance',
  description: 'Get current global compliance of a Rudder server',
  operationId: 'getGlobalCompliance',
  request: { query: z.object({ precision: CompliancePercentPrecisionParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getGlobalCompliance')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  globalCompliance: z
                    .object({
                      compliance: z
                        .number()
                        .openapi({
                          description:
                            'Global compliance level (`-1` when no policies are defined)',
                          example: 57,
                        }),
                      complianceDetails: z
                        .object({
                          error: z.float32().exactOptional().openapi({ example: 1.32 }),
                          noReport: z.float32().exactOptional().openapi({ example: 36.18 }),
                          successAlreadyOK: z.float32().exactOptional().openapi({ example: 48.68 }),
                          successNotApplicable: z
                            .float32()
                            .exactOptional()
                            .openapi({ example: 5.92 }),
                          successRepaired: z.float32().exactOptional().openapi({ example: 2.63 }),
                          unexpectedMissingComponent: z
                            .float32()
                            .exactOptional()
                            .openapi({ example: 2.63 }),
                          unexpectedUnknownComponent: z
                            .float32()
                            .exactOptional()
                            .openapi({ example: 2.63 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: ['compliance'] }),
                })
                .openapi({ required: ['globalCompliance'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request', example: 'success' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getComplianceNodesRoute = createRoute({
  method: 'get',
  path: '/compliance/nodes',
  tags: ['Compliance'],
  summary: 'Compliance details for all nodes',
  description: 'Get current compliance of all the nodes of a Rudder server',
  operationId: 'getNodesCompliance',
  request: {
    query: z.object({
      level: ComplianceLevelParamsSchema,
      precision: CompliancePercentPrecisionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getNodesCompliance')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  nodes: z.array(
                    z
                      .object({
                        compliance: z
                          .float32()
                          .openapi({ description: 'Rule compliance level', example: 57.43 }),
                        complianceDetails: z
                          .object({
                            error: z.float32().exactOptional().openapi({ example: 1.32 }),
                            noReport: z.float32().exactOptional().openapi({ example: 36.18 }),
                            successAlreadyOK: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 48.68 }),
                            successNotApplicable: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 5.92 }),
                            successRepaired: z.float32().exactOptional().openapi({ example: 2.63 }),
                            unexpectedMissingComponent: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 2.63 }),
                            unexpectedUnknownComponent: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 2.63 }),
                          })
                          .openapi({ required: [] }),
                        id: z
                          .uuid()
                          .openapi({
                            description: 'id of the node',
                            example: 'f37f4928-fcb5-4acf-a422-d40f123a9670',
                          }),
                        mode: z.enum(['full-compliance', 'changes-only', 'reports-disabled']),
                      })
                      .openapi({ required: ['id', 'mode', 'compliance', 'complianceDetails'] }),
                  ),
                })
                .openapi({ required: ['nodes'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request', example: 'success' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getComplianceNodesNodeIdRoute = createRoute({
  method: 'get',
  path: '/compliance/nodes/{nodeId}',
  tags: ['Compliance'],
  summary: 'Compliance details by node',
  description: 'Get current compliance of a node of a Rudder server',
  operationId: 'getNodeCompliance',
  request: {
    query: z.object({
      level: ComplianceLevelParamsSchema,
      precision: CompliancePercentPrecisionParamsSchema,
    }),
    params: z.object({ nodeId: NodeIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getNodeCompliance')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  nodes: z.array(
                    z
                      .object({
                        compliance: z
                          .float32()
                          .openapi({ description: 'Rule compliance level', example: 57.43 }),
                        complianceDetails: z
                          .object({
                            error: z.float32().exactOptional().openapi({ example: 1.32 }),
                            noReport: z.float32().exactOptional().openapi({ example: 36.18 }),
                            successAlreadyOK: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 48.68 }),
                            successNotApplicable: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 5.92 }),
                            successRepaired: z.float32().exactOptional().openapi({ example: 2.63 }),
                            unexpectedMissingComponent: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 2.63 }),
                            unexpectedUnknownComponent: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 2.63 }),
                          })
                          .openapi({ required: [] }),
                        id: z
                          .uuid()
                          .openapi({
                            description: 'id of the node',
                            example: 'f37f4928-fcb5-4acf-a422-d40f123a9670',
                          }),
                        mode: z.enum(['full-compliance', 'changes-only', 'reports-disabled']),
                      })
                      .openapi({ required: ['id', 'mode', 'compliance', 'complianceDetails'] }),
                  ),
                })
                .openapi({ required: ['nodes'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request', example: 'success' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getComplianceRulesRoute = createRoute({
  method: 'get',
  path: '/compliance/rules',
  tags: ['Compliance'],
  summary: 'Compliance details for all rules',
  description: 'Get current compliance of all the rules of a Rudder server',
  operationId: 'getRulesCompliance',
  request: {
    query: z.object({
      level: ComplianceLevelParamsSchema,
      precision: CompliancePercentPrecisionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getRulesCompliance')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  rules: z.array(
                    z
                      .object({
                        compliance: z
                          .float32()
                          .openapi({ description: 'Rule compliance level', example: 57.43 }),
                        complianceDetails: z
                          .object({
                            error: z.float32().exactOptional().openapi({ example: 1.32 }),
                            noReport: z.float32().exactOptional().openapi({ example: 36.18 }),
                            successAlreadyOK: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 48.68 }),
                            successNotApplicable: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 5.92 }),
                            successRepaired: z.float32().exactOptional().openapi({ example: 2.63 }),
                            unexpectedMissingComponent: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 2.63 }),
                            unexpectedUnknownComponent: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 2.63 }),
                          })
                          .openapi({ required: [] }),
                        id: z
                          .uuid()
                          .openapi({
                            description: 'id of the rule',
                            example: 'f37f4928-fcb5-4acf-a422-d40f123a9670',
                          }),
                        mode: z.enum(['full-compliance', 'changes-only', 'reports-disabled']),
                      })
                      .openapi({ required: ['id', 'mode', 'compliance', 'complianceDetails'] }),
                  ),
                })
                .openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request', example: 'success' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getComplianceRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/compliance/rules/{ruleId}',
  tags: ['Compliance'],
  summary: 'Compliance details by rule',
  description: 'Get current compliance of a rule of a Rudder server',
  operationId: 'getRuleCompliance',
  request: {
    query: z.object({
      level: ComplianceLevelParamsSchema,
      precision: CompliancePercentPrecisionParamsSchema,
    }),
    params: z.object({ ruleId: RuleIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getRuleCompliance')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  rules: z.array(
                    z
                      .object({
                        compliance: z
                          .float32()
                          .openapi({ description: 'Rule compliance level', example: 57.43 }),
                        complianceDetails: z
                          .object({
                            error: z.float32().exactOptional().openapi({ example: 1.32 }),
                            noReport: z.float32().exactOptional().openapi({ example: 36.18 }),
                            successAlreadyOK: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 48.68 }),
                            successNotApplicable: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 5.92 }),
                            successRepaired: z.float32().exactOptional().openapi({ example: 2.63 }),
                            unexpectedMissingComponent: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 2.63 }),
                            unexpectedUnknownComponent: z
                              .float32()
                              .exactOptional()
                              .openapi({ example: 2.63 }),
                          })
                          .openapi({ required: [] }),
                        id: z
                          .uuid()
                          .openapi({
                            description: 'id of the rule',
                            example: 'f37f4928-fcb5-4acf-a422-d40f123a9670',
                          }),
                        mode: z.enum(['full-compliance', 'changes-only', 'reports-disabled']),
                      })
                      .openapi({ required: ['id', 'mode', 'compliance', 'complianceDetails'] }),
                  ),
                })
                .openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request', example: 'success' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getCveRoute = createRoute({
  method: 'get',
  path: '/cve',
  tags: ['🧩 CVE'],
  summary: 'Get all CVE details',
  description: 'Get all CVE details',
  operationId: 'getAllCve',
  responses: {
    200: {
      description: 'CVE check result',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getAllCve').openapi({ description: 'The id of the action' }),
              data: z.object({ CVEs: z.array(CveDetailsSchema) }).openapi({ required: ['CVEs'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postCveCheckRoute = createRoute({
  method: 'post',
  path: '/cve/check',
  tags: ['🧩 CVE'],
  summary: 'Trigger a CVE check',
  description: 'Trigger a CVE check',
  operationId: 'checkCVE',
  responses: {
    200: {
      description: 'CVE check result',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('checkCVE').openapi({ description: 'The id of the action' }),
              data: z
                .object({ cveChecks: z.array(CveCheckSchema) })
                .openapi({ required: ['cveChecks'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getCveCheckConfigRoute = createRoute({
  method: 'get',
  path: '/cve/check/config',
  tags: ['🧩 CVE'],
  summary: 'Get CVE check config',
  description: 'Get CVE check config',
  operationId: 'getCVECheckConfiguration',
  responses: {
    200: {
      description: 'CVE check config',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getCVECheckConfiguration')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  apiKey: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Token used by to contact the API to check CVE' }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Url used to check CVE',
                      example: 'https://api.rudder.io/cve/v1/',
                    }),
                })
                .openapi({ required: [] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postCveCheckConfigRoute = createRoute({
  method: 'post',
  path: '/cve/check/config',
  tags: ['🧩 CVE'],
  summary: 'Update cve check config',
  description: 'Update cve check config',
  operationId: 'updateCVECheckConfiguration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ description: 'Token used by to contact the API to check CVE' }),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Url used to check CVE',
                  example: 'https://api.rudder.io/cve/v1/',
                }),
            })
            .openapi({ description: 'CVE check config', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'new CVE check config',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('updateCVECheckConfiguration')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  apiKey: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Token used by to contact the API to check CVE' }),
                  url: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Url used to check CVE',
                      example: 'https://api.rudder.io/cve/v1/',
                    }),
                })
                .openapi({ required: [] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getCveCheckLastRoute = createRoute({
  method: 'get',
  path: '/cve/check/last',
  tags: ['🧩 CVE'],
  summary: 'Get last CVE check result',
  description: 'Get last CVE check result',
  operationId: 'getLastCVECheck',
  responses: {
    200: {
      description: 'Last CVE check',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getLastCVECheck').openapi({ description: 'The id of the action' }),
              data: z
                .object({ CVEChecks: z.array(CveCheckSchema) })
                .openapi({ required: ['CVEChecks'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postCveListRoute = createRoute({
  method: 'post',
  path: '/cve/list',
  tags: ['🧩 CVE'],
  summary: 'Get a list of CVE details',
  description: 'Get CVE details, from a list passed as parameter',
  operationId: 'getCVEList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cveIds: z
                .array(z.string().openapi({ description: 'CVE id', example: 'CVE-2019-5953' }))
                .exactOptional(),
            })
            .openapi({ description: 'cveList', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'CVE list',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getCVEList').openapi({ description: 'The id of the action' }),
              data: z.object({ CVEs: z.array(CveDetailsSchema) }).openapi({ required: ['CVEs'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postCveUpdateIndexRoute = createRoute({
  method: 'post',
  path: '/cve/update/',
  tags: ['🧩 CVE'],
  summary: 'Update CVE database from remote source',
  description: 'Update CVE database from remote source',
  operationId: 'updateCVE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Url used to update CVE, will default to one set in config',
                  example: 'https://nvd.nist.gov/feeds/json/cve/1.1',
                }),
              years: z
                .array(
                  z
                    .string()
                    .openapi({
                      description: 'Year of the CVE archive to download',
                      example: '2019',
                    }),
                )
                .exactOptional(),
            })
            .openapi({ description: 'CVE update config', required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'updated CVE count',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updateCVE').openapi({ description: 'The id of the action' }),
              data: z
                .object({ CVEs: z.int().openapi({ example: 12345 }) })
                .openapi({ required: ['CVEs'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postCveUpdateFsRoute = createRoute({
  method: 'post',
  path: '/cve/update/fs',
  tags: ['🧩 CVE'],
  summary: 'Update CVE database from file system',
  description: 'Update CVE database from file system',
  operationId: 'readCVEfromFS',
  responses: {
    200: {
      description: 'updated CVE count',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('readCVEfromFS').openapi({ description: 'The id of the action' }),
              data: z
                .object({ CVEs: z.int().openapi({ example: 12345 }) })
                .openapi({ required: ['CVEs'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getDatasourcesRoute = createRoute({
  method: 'get',
  path: '/datasources',
  tags: ['🧩 Data sources'],
  summary: 'List all data sources',
  description: 'Get the configuration of all present data sources',
  operationId: 'getAllDataSources',
  responses: {
    200: {
      description: 'Data sources information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getAllDataSources')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ datasources: z.array(DatasourceSchema) })
                .openapi({ required: ['datasources'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putDatasourcesRoute = createRoute({
  method: 'put',
  path: '/datasources',
  tags: ['🧩 Data sources'],
  summary: 'Create a data source',
  description: 'Create a new data source',
  operationId: 'createDataSource',
  request: { body: { content: { 'application/json': { schema: DatasourceSchema } } } },
  responses: {
    200: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('createDataSource')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ datasources: z.array(DatasourceSchema) })
                .openapi({
                  description: 'Information about the data sources',
                  required: ['datasources'],
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postDatasourcesReloadRoute = createRoute({
  method: 'post',
  path: '/datasources/reload',
  tags: ['🧩 Data sources'],
  summary: 'Update properties from data sources',
  description: 'Update properties from all data source on all nodes. The call is asynchronous.',
  operationId: 'ReloadAllDatasourcesAllNodes',
  responses: {
    200: {
      description: 'Data source reloaded',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('ReloadAllDatasourcesAllNodes')
                .openapi({ description: 'The id of the action' }),
              data: z
                .string()
                .openapi({
                  example:
                    'Data for all nodes, for all configured data sources are going to be updated',
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postDatasourcesReloadDatasourceIdRoute = createRoute({
  method: 'post',
  path: '/datasources/reload/{datasourceId}',
  tags: ['🧩 Data sources'],
  summary: 'Update properties from data sources',
  description: 'Update properties from all data source on all nodes. The call is asynchronous.',
  operationId: 'ReloadOneDatasourceAllNodes',
  request: { params: z.object({ datasourceId: DatasourceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Data source reloaded',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('ReloadOneDatasourceAllNodes')
                .openapi({ description: 'The id of the action' }),
              data: z
                .string()
                .openapi({
                  example:
                    "Data for all nodes, for the 'test-data-source' data source are going to be updated",
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getDatasourcesDatasourceIdRoute = createRoute({
  method: 'get',
  path: '/datasources/{datasourceId}',
  tags: ['🧩 Data sources'],
  summary: 'Get data source configuration',
  description: 'Get the configuration of a data source',
  operationId: 'getDataSource',
  request: { params: z.object({ datasourceId: DatasourceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Data source information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getDataSource').openapi({ description: 'The id of the action' }),
              data: z
                .object({ datasources: z.array(DatasourceSchema) })
                .openapi({ required: ['datasources'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postDatasourcesDatasourceIdRoute = createRoute({
  method: 'post',
  path: '/datasources/{datasourceId}',
  tags: ['🧩 Data sources'],
  summary: 'Update a data source configuration',
  description: 'Update the configuration of a data source',
  operationId: 'updateDataSource',
  request: {
    params: z.object({ datasourceId: DatasourceIdParamsSchema }),
    body: { content: { 'application/json': { schema: DatasourceSchema } } },
  },
  responses: {
    200: {
      description: 'Data source information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('updateDataSource')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ datasources: z.array(DatasourceSchema) })
                .openapi({ required: ['datasources'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteDatasourcesDatasourceIdRoute = createRoute({
  method: 'delete',
  path: '/datasources/{datasourceId}',
  tags: ['🧩 Data sources'],
  summary: 'Delete a data source',
  description: 'Delete a data source configuration',
  operationId: 'deleteDataSource',
  request: { params: z.object({ datasourceId: DatasourceIdParamsSchema }) },
  responses: {
    200: {
      description: 'Data source information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('deleteDataSource')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ datasources: z.array(DatasourceSchema) })
                .openapi({ required: ['datasources'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getDirectivesRoute = createRoute({
  method: 'get',
  path: '/directives',
  tags: ['Directives'],
  summary: 'List all directives',
  description: 'List all directives',
  operationId: 'listDirectives',
  responses: {
    200: {
      description: 'Directives information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listDirectives').openapi({ description: 'The id of the action' }),
              data: z
                .object({ directives: z.array(DirectiveSchema) })
                .openapi({ required: ['directives'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putDirectivesRoute = createRoute({
  method: 'put',
  path: '/directives',
  tags: ['Directives'],
  summary: 'Create a directive',
  description:
    'Create a new directive from provided parameters. You can specify a source directive to clone it.',
  operationId: 'createDirective',
  request: { body: { content: { 'application/json': { schema: DirectiveNewSchema } } } },
  responses: {
    200: {
      description: 'Directives information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('createDirective').openapi({ description: 'The id of the action' }),
              data: z
                .object({ directives: z.array(DirectiveSchema) })
                .openapi({ required: ['directives'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getDirectivesDirectiveIdRoute = createRoute({
  method: 'get',
  path: '/directives/{directiveId}',
  tags: ['Directives'],
  summary: 'Get directive details',
  description: 'Get all information about a given directive',
  operationId: 'directiveDetails',
  request: { params: z.object({ directiveId: DirectiveIdParamsSchema }) },
  responses: {
    200: {
      description: 'Directives information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('directiveDetails')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ directives: z.array(DirectiveSchema) })
                .openapi({ required: ['directives'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postDirectivesDirectiveIdRoute = createRoute({
  method: 'post',
  path: '/directives/{directiveId}',
  tags: ['Directives'],
  summary: 'Update a directive details',
  description: 'Update directive information',
  operationId: 'updateDirective',
  request: {
    params: z.object({ directiveId: DirectiveIdParamsSchema }),
    body: { content: { 'application/json': { schema: DirectiveSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Directives information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updateDirective').openapi({ description: 'The id of the action' }),
              data: z
                .object({ directives: z.array(DirectiveSchema) })
                .openapi({ required: ['directives'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteDirectivesDirectiveIdRoute = createRoute({
  method: 'delete',
  path: '/directives/{directiveId}',
  tags: ['Directives'],
  summary: 'Delete a directive',
  description: 'Delete a directive',
  operationId: 'deleteDirective',
  request: { params: z.object({ directiveId: DirectiveIdParamsSchema }) },
  responses: {
    200: {
      description: 'Directives information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('deleteDirective').openapi({ description: 'The id of the action' }),
              data: z
                .object({ directives: z.array(DirectiveSchema) })
                .openapi({ required: ['directives'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postDirectivesDirectiveIdCheckRoute = createRoute({
  method: 'post',
  path: '/directives/{directiveId}/check',
  tags: ['Directives'],
  summary: 'Check that update on a directive is valid',
  description: 'Check that update on a directive is valid',
  operationId: 'checkDirective',
  request: {
    params: z.object({ directiveId: DirectiveIdParamsSchema }),
    body: { content: { 'application/json': { schema: DirectiveSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Directives information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('checkDirective').openapi({ description: 'The id of the action' }),
              data: z
                .object({ directives: z.array(DirectiveSchema) })
                .openapi({ required: ['directives'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['Groups'],
  summary: 'List all groups',
  description: 'List all groups',
  operationId: 'listGroups',
  responses: {
    200: {
      description: 'Groups information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listGroups').openapi({ description: 'The id of the action' }),
              data: z.object({ groups: z.array(GroupSchema) }).openapi({ required: ['groups'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putGroupsRoute = createRoute({
  method: 'put',
  path: '/groups',
  tags: ['Groups'],
  summary: 'Create a group',
  description: 'Create a new group based in provided parameters',
  operationId: 'createGroup',
  request: { body: { content: { 'application/json': { schema: GroupNewSchema } } } },
  responses: {
    200: {
      description: 'Group information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('createGroup').openapi({ description: 'The id of the action' }),
              data: z.object({ groups: z.array(GroupSchema) }).openapi({ required: ['groups'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putGroupsCategoriesRoute = createRoute({
  method: 'put',
  path: '/groups/categories',
  tags: ['Groups'],
  summary: 'Create a group category',
  description: 'Create a new group category',
  operationId: 'CreateGroupCategory',
  request: {
    body: { content: { 'application/json': { schema: GroupCategorySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Groups category information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('CreateGroupCategory')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ groupCategories: z.array(GroupCategorySchema) })
                .openapi({ required: ['groupCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getGroupsCategoriesGroupCategoryIdRoute = createRoute({
  method: 'get',
  path: '/groups/categories/{groupCategoryId}',
  tags: ['Groups'],
  summary: 'Get group category details',
  description: 'Get detailed information about a group category',
  operationId: 'GetGroupCategoryDetails',
  request: { params: z.object({ groupCategoryId: GroupCategoryIdParamsSchema }) },
  responses: {
    200: {
      description: 'Groups category information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('GetGroupCategoryDetails')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ groupCategories: z.array(GroupCategorySchema) })
                .openapi({ required: ['groupCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postGroupsCategoriesGroupCategoryIdRoute = createRoute({
  method: 'post',
  path: '/groups/categories/{groupCategoryId}',
  tags: ['Groups'],
  summary: 'Update group category details',
  description: 'Update detailed information about a group category',
  operationId: 'UpdateGroupCategory',
  request: {
    params: z.object({ groupCategoryId: GroupCategoryIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: GroupCategoryUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Groups category information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('UpdateGroupCategory')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ groupCategories: z.array(GroupCategorySchema) })
                .openapi({ required: ['groupCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteGroupsCategoriesGroupCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/groups/categories/{groupCategoryId}',
  tags: ['Groups'],
  summary: 'Delete group category',
  description: 'Delete a group category. It must have no child groups and no children categories.',
  operationId: 'DeleteGroupCategory',
  request: { params: z.object({ groupCategoryId: GroupCategoryIdParamsSchema }) },
  responses: {
    200: {
      description: 'Groups category information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('DeleteGroupCategory')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ groupCategories: z.array(GroupCategorySchema) })
                .openapi({ required: ['groupCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getGroupsTreeRoute = createRoute({
  method: 'get',
  path: '/groups/tree',
  tags: ['Groups'],
  summary: 'Get groups tree',
  description: 'Get all available groups and their categories in a tree',
  operationId: 'GetGroupTree',
  responses: {
    200: {
      description: 'Groups information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('GetGroupTree').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  groupCategories: z
                    .object({})
                    .openapi({ description: 'Group tree', example: null }),
                })
                .openapi({
                  example: {
                    categories: [
                      {
                        categories: [],
                        description: 'That category holds all the system and special target',
                        groups: [
                          {
                            description:
                              'All nodes known by Rudder directly connected to the root server',
                            displayName: 'All nodes managed by root policy server',
                            dynamic: true,
                            enabled: true,
                            id: 'hasPolicyServer-root',
                            nodeIds: [
                              'dd404bda-2785-4959-abaa-8f37a0bbd85e',
                              'f6223b0e-e2aa-4d1f-b6d1-74de8ea8e513',
                              'root',
                            ],
                            query: {
                              composition: 'And',
                              select: 'nodeAndPolicyServer',
                              where: [
                                {
                                  attribute: 'policyServerId',
                                  comparator: 'eq',
                                  objectType: 'node',
                                  value: 'root',
                                },
                              ],
                            },
                          },
                        ],
                        id: 'SystemGroups',
                        name: 'System groups',
                        parent: 'GroupRoot',
                      },
                      {
                        categories: [],
                        description: '',
                        groups: [
                          {
                            description: '',
                            displayName: 'Linux nodes',
                            dynamic: false,
                            enabled: true,
                            id: '79d83ff9-24d8-4be6-b1f7-cbb1c173f7a5',
                            nodeIds: [],
                            query: {
                              composition: 'And',
                              select: 'node',
                              where: [
                                {
                                  attribute: 'OS',
                                  comparator: 'eq',
                                  objectType: 'node',
                                  value: 'Linux',
                                },
                              ],
                            },
                          },
                        ],
                        id: '38dd2107-a73b-45fb-916d-e110312abb87',
                        name: 'production groups',
                        parent: 'GroupRoot',
                      },
                    ],
                    description:
                      'This is the root category for the groups (both dynamic and static) and group categories',
                    groups: [
                      {
                        description: '',
                        displayName: 'Test Clients',
                        dynamic: true,
                        enabled: true,
                        id: 'af208515-c2f2-4577-bbf4-9fffebbe6629',
                        nodeIds: [],
                        query: {
                          composition: 'Or',
                          select: 'node',
                          where: [
                            {
                              attribute: 'nodeHostname',
                              comparator: 'regex',
                              objectType: 'node',
                              value: 'servername.*company.net',
                            },
                            {
                              attribute: 'nodeHostname',
                              comparator: 'regex',
                              objectType: 'node',
                              value: 'lt serverbla.*company.net',
                            },
                          ],
                        },
                      },
                      {
                        description: '',
                        displayName: 'Test Clients',
                        dynamic: true,
                        enabled: true,
                        id: 'd7634b2d-7189-422b-9971-24c29b75da46',
                        nodeIds: [],
                        query: {
                          composition: 'Or',
                          select: 'node',
                          where: [
                            {
                              attribute: 'nodeHostname',
                              comparator: 'regex',
                              objectType: 'node',
                              value: 'servername.*company.net',
                            },
                            {
                              attribute: 'nodeHostname',
                              comparator: 'regex',
                              objectType: 'node',
                              value: 'lt serverbla.*company.net',
                            },
                          ],
                        },
                      },
                    ],
                    id: 'GroupRoot',
                    name: 'Root of the group and group categories',
                    parent: 'GroupRoot',
                  },
                  required: ['groupCategories'],
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/groups/{groupId}',
  tags: ['Groups'],
  summary: 'Get group details',
  description: 'Get detailed information about a group',
  operationId: 'groupDetails',
  request: { params: z.object({ groupId: GroupIdParamsSchema }) },
  responses: {
    200: {
      description: 'Groups information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('groupDetails').openapi({ description: 'The id of the action' }),
              data: z.object({ groups: z.array(GroupSchema) }).openapi({ required: ['groups'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postGroupsGroupIdRoute = createRoute({
  method: 'post',
  path: '/groups/{groupId}',
  tags: ['Groups'],
  summary: 'Update group details',
  description: 'Update detailed information about a group',
  operationId: 'updateGroup',
  request: {
    params: z.object({ groupId: GroupIdParamsSchema }),
    body: { content: { 'application/json': { schema: GroupUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Groups information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updateGroup').openapi({ description: 'The id of the action' }),
              data: z.object({ groups: z.array(GroupSchema) }).openapi({ required: ['groups'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/groups/{groupId}',
  tags: ['Groups'],
  summary: 'Delete a group',
  description: 'Update detailed information about a group',
  operationId: 'deleteGroup',
  request: { params: z.object({ groupId: GroupIdParamsSchema }) },
  responses: {
    200: {
      description: 'Groups information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('deleteGroup').openapi({ description: 'The id of the action' }),
              data: z.object({ groups: z.array(GroupSchema) }).openapi({ required: ['groups'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postGroupsGroupIdReloadRoute = createRoute({
  method: 'post',
  path: '/groups/{groupId}/reload',
  tags: ['Groups'],
  summary: 'Reload a group',
  description: 'Recompute the content of a group',
  operationId: 'reloadGroup',
  request: { params: z.object({ groupId: GroupIdParamsSchema }) },
  responses: {
    200: {
      description: 'Groups information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('reloadGroup').openapi({ description: 'The id of the action' }),
              data: z.object({ groups: z.array(GroupSchema) }).openapi({ required: ['groups'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getInfoRoute = createRoute({
  method: 'get',
  path: '/info',
  tags: ['API Info'],
  summary: 'List all endoints',
  description: 'List all endpoints and their version',
  operationId: 'apiGeneralInformations',
  responses: {
    200: {
      description: 'API endpoints',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('apiGeneralInformations')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  availableVersions: z.array(ApiVersionsSchema),
                  documentation: z
                    .string()
                    .openapi({ description: 'Link to Rudder API description' }),
                  endpoints: z.array(ApiEndpointsSchema),
                })
                .openapi({ required: ['documentation', 'availableVersions', 'endpoints'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getInfoDetailsEndpointNameRoute = createRoute({
  method: 'get',
  path: '/info/details/{endpointName}',
  tags: ['API Info'],
  summary: 'Get information about one API endpoint',
  description: 'Get the description and the list of supported version for one API endpoint',
  operationId: 'apiInformations',
  request: {
    params: z.object({
      endpointName: z
        .string()
        .openapi({
          param: {
            description: 'Name of the endpoint for which one wants information',
            in: 'path',
            name: 'endpointName',
            required: true,
            schema: { example: 'listAcceptedNodes', type: 'string' },
          },
          example: 'listAcceptedNodes',
        }),
    }),
  },
  responses: {
    200: {
      description: 'API Endpoint information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('apiInformations').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  documentation: z
                    .string()
                    .openapi({ description: 'Link to Rudder API description' }),
                  endpointName: z
                    .string()
                    .openapi({
                      description: 'The endpoint name as key and the endpoint description as value',
                    }),
                  endpoints: z.array(
                    z
                      .object({
                        httpVerb: z.any().exactOptional(),
                        version: ApiVersionSchema.exactOptional(),
                      })
                      .openapi({
                        description: 'Supported path and version for that endpoint',
                        example:
                          '{\n  "listAcceptedNodes": "List all accepted nodes with configurable details level",\n  "GET": "[8,9,10,11,12,13] /nodes"\n}',
                        required: [],
                      }),
                  ),
                })
                .openapi({ required: ['documentation', 'endpointName', 'endpoints'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getInfoSectionIdRoute = createRoute({
  method: 'get',
  path: '/info/{sectionId}',
  tags: ['API Info'],
  summary: 'Get information on endpoint in a section',
  description: 'Get all endpoints in the given section with their supported version.',
  operationId: 'apiSubInformations',
  request: {
    params: z.object({
      sectionId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the API section',
            in: 'path',
            name: 'sectionId',
            required: true,
            schema: { example: 'nodes', type: 'string' },
          },
          example: 'nodes',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Endpoint information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('apiSubInformations')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  availableVersions: z.array(ApiVersionsSchema),
                  documentation: z
                    .string()
                    .openapi({ description: 'Link to Rudder API description' }),
                  endpoints: z.array(ApiEndpointsSchema),
                })
                .openapi({ required: ['documentation', 'availableVersions', 'endpoints'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getInventoriesInfoRoute = createRoute({
  method: 'get',
  path: '/inventories/info',
  tags: ['Inventories'],
  summary: 'Get information about inventory processing queue',
  description: 'Provide information about the current state of the inventory processor',
  operationId: 'queueInformation',
  responses: {
    200: {
      description: 'Inventories information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('queueInformation')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  queueMaxSize: z.int().openapi({ example: 50 }),
                  queueSaturated: z
                    .boolean()
                    .openapi({ description: 'Is the inventory queue full', example: false }),
                })
                .openapi({
                  description: 'Information about the service',
                  required: ['queueMaxSize', 'queueSaturated'],
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postInventoriesUploadRoute = createRoute({
  method: 'post',
  path: '/inventories/upload',
  tags: ['Inventories'],
  summary: 'Upload an inventory for processing',
  description: 'Upload an inventory to the web application',
  operationId: 'uploadInventory',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The inventory file. The original file name is used to check extension, that should be .xml[.gz] or .ocs[.gz]',
                }),
              signature: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The signature file. The original file name is used to check extension, that should be ${originalInventoryFileName}.sign[.gz]',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Inventory uploaded',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('uploadInventory').openapi({ description: 'The id of the action' }),
              data: z
                .string()
                .openapi({
                  example:
                    "Inventory 'file.xml' for Node 'c1bab9fc-bcf6-4d59-a397-84c8e2fc06c0' added to processing queue.",
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postInventoriesWatcherRestartRoute = createRoute({
  method: 'post',
  path: '/inventories/watcher/restart',
  tags: ['Inventories'],
  summary: 'Restart inventory watcher',
  description: 'Restart the inventory watcher if necessary',
  operationId: 'fileWatcherRestart',
  responses: {
    200: {
      description: 'Started',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('fileWatcherRestart')
                .openapi({ description: 'The id of the action' }),
              data: z.string().openapi({ example: 'Incoming inventory watcher restarted' }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postInventoriesWatcherStartRoute = createRoute({
  method: 'post',
  path: '/inventories/watcher/start',
  tags: ['Inventories'],
  summary: 'Start inventory watcher',
  description: 'Start the inventory watcher if necessary',
  operationId: 'fileWatcherStart',
  responses: {
    200: {
      description: 'Started',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('fileWatcherStart')
                .openapi({ description: 'The id of the action' }),
              data: z.string().openapi({ example: 'Incoming inventory watcher started' }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postInventoriesWatcherStopRoute = createRoute({
  method: 'post',
  path: '/inventories/watcher/stop',
  tags: ['Inventories'],
  summary: 'Stop inventory watcher',
  description: 'Stop the inventory watcher if necessary',
  operationId: 'fileWatcherStop',
  responses: {
    200: {
      description: 'Stopped',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('fileWatcherStop').openapi({ description: 'The id of the action' }),
              data: z.string().openapi({ example: 'Incoming inventory watcher stopped' }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getMethodsRoute = createRoute({
  method: 'get',
  path: '/methods',
  tags: ['Techniques'],
  summary: 'List methods',
  description: 'Get all generic methods metadata',
  operationId: 'methods',
  responses: {
    200: {
      description: 'Methods information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z.object({ methods: MethodsSchema }).openapi({ required: ['methods'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postMethodsReloadRoute = createRoute({
  method: 'post',
  path: '/methods/reload',
  tags: ['Techniques'],
  summary: 'Reload methods',
  description: 'Reload methods metadata from file system',
  operationId: 'reloadMethods',
  responses: {
    200: {
      description: 'Methods information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z.object({ methods: MethodsSchema }).openapi({ required: ['methods'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getNodesRoute = createRoute({
  method: 'get',
  path: '/nodes',
  tags: ['Nodes'],
  summary: 'List managed nodes',
  description: 'Get information about the nodes managed by the target server',
  operationId: 'listAcceptedNodes',
  request: {
    query: z.object({
      include: IncludeParamsSchema,
      query: NodeQueryParamsSchema,
      where: NodeWhereParamsSchema,
      composition: NodeCompositionParamsSchema,
      select: NodeSelectParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Nodes',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('listAcceptedNodes')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ nodes: z.array(NodeFullSchema) })
                .openapi({ description: 'Information about the nodes', required: ['nodes'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putNodesRoute = createRoute({
  method: 'put',
  path: '/nodes',
  tags: ['Nodes'],
  summary: 'Create one or several new nodes',
  description: 'Use the provided array of node information to create new nodes',
  operationId: 'createNodes',
  request: { body: { content: { 'application/json': { schema: NodeAddSchema } }, required: true } },
  responses: {
    200: {
      description: 'Creation information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('createNode').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  created: z.array(
                    z
                      .string()
                      .openapi({
                        description: 'created nodes ID',
                        example: '378740d3-c4a9-4474-8485-478e7e52db52',
                      }),
                  ),
                  failed: z.array(z.string().openapi({ description: 'failed nodes ID' })),
                })
                .openapi({ required: ['created', 'failed'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postNodesApplyPolicyRoute = createRoute({
  method: 'post',
  path: '/nodes/applyPolicy',
  tags: ['Nodes'],
  summary: 'Trigger an agent run on all nodes',
  description:
    'This API allows to trigger an agent run on all nodes. Response contains a json stating if agent could be started on each node, but not if the run went fine and do not display any output from it. You can see the result of the run in Rudder web interface or in the each agent logs.',
  operationId: 'applyPolicyAllNodes',
  responses: {
    200: {
      description: 'Result',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('applyPolicyAllNodes')
                .openapi({ description: 'The id of the action' }),
              data: z.array(
                z
                  .object({
                    hostname: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Node hostname', example: 'node.example.com' }),
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Rudder id of the node',
                        example: '249e14ac-2418-457c-a27d-1650907b13c7',
                      }),
                    result: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Result or policy application trigger',
                        example: 'Started',
                      }),
                  })
                  .openapi({ required: [] }),
              ),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getNodesPendingRoute = createRoute({
  method: 'get',
  path: '/nodes/pending',
  tags: ['Nodes'],
  summary: 'List pending nodes',
  description: 'Get information about the nodes pending acceptation',
  operationId: 'listPendingNodes',
  request: {
    query: z.object({
      include: IncludeParamsSchema,
      query: NodeQueryParamsSchema,
      where: NodeWhereParamsSchema,
      composition: NodeCompositionParamsSchema,
      select: NodeSelectParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Nodes',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('listPendingNodes')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ nodes: z.array(NodeFullSchema) })
                .openapi({ description: 'Information about the nodes', required: ['nodes'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postNodesPendingNodeIdRoute = createRoute({
  method: 'post',
  path: '/nodes/pending/{nodeId}',
  tags: ['Nodes'],
  summary: 'Update pending Node status',
  description: 'Accept or refuse a pending node',
  operationId: 'changePendingNodeStatus',
  request: {
    params: z.object({ nodeId: NodeIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['accepted', 'refused'])
                .exactOptional()
                .openapi({ description: 'New status of the pending node', example: 'accepted' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Nodes',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('changePendingNodeStatus')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ nodes: z.array(NodeFullSchema) })
                .openapi({ description: 'Information about the node', required: ['nodes'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getNodesStatusRoute = createRoute({
  method: 'get',
  path: '/nodes/status',
  tags: ['Nodes'],
  summary: 'Get nodes acceptation status',
  description: 'Get acceptation status (pending, accepted, deleted, unknown) of a list of nodes',
  operationId: 'getNodesStatus',
  request: { query: z.object({ ids: NodeIdsParamsSchema }) },
  responses: {
    200: {
      description: 'nodes',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getNodesStatus').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  nodes: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .openapi({
                              description: 'Unique id of the node',
                              example: '9a1773c9-0889-40b6-be89-f6504443ac1b',
                            }),
                          status: z
                            .enum(['pending', 'accepted', 'deleted', 'unknown'])
                            .openapi({ description: 'Status of the node' }),
                        })
                        .openapi({ required: ['id', 'status'] }),
                    )
                    .openapi({ description: 'List of nodeId and associated status' }),
                })
                .openapi({
                  description: 'List of nodeId and associated status',
                  required: ['nodes'],
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getNodesNodeIdRoute = createRoute({
  method: 'get',
  path: '/nodes/{nodeId}',
  tags: ['Nodes'],
  summary: 'Get information about a node',
  description: 'Get details about a given node',
  operationId: 'nodeDetails',
  request: {
    params: z.object({ nodeId: NodeIdParamsSchema }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Nodes',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('nodeDetails').openapi({ description: 'The id of the action' }),
              data: z
                .object({ nodes: z.array(NodeFullSchema) })
                .openapi({ description: 'Information about the node', required: ['nodes'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postNodesNodeIdRoute = createRoute({
  method: 'post',
  path: '/nodes/{nodeId}',
  tags: ['Nodes'],
  summary: 'Update node settings and properties',
  description: 'Update node settings and properties',
  operationId: 'updateNode',
  request: {
    params: z.object({ nodeId: NodeIdParamsSchema }),
    body: { content: { 'application/json': { schema: NodeSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Nodes',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updateNode').openapi({ description: 'The id of the action' }),
              data: z
                .object({ nodes: z.array(NodeFullSchema) })
                .openapi({ description: 'Information about the node', required: ['nodes'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteNodesNodeIdRoute = createRoute({
  method: 'delete',
  path: '/nodes/{nodeId}',
  tags: ['Nodes'],
  summary: 'Delete a node',
  description: "Remove a node from the Rudder server. It won't be managed anymore.",
  operationId: 'deleteNode',
  request: {
    params: z.object({ nodeId: NodeIdParamsSchema }),
    query: z.object({ mode: NodeDeleteModeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Nodes',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('deleteNode').openapi({ description: 'The id of the action' }),
              data: z
                .object({ nodes: z.array(NodeFullSchema) })
                .openapi({ description: 'Information about the node', required: ['nodes'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postNodesNodeIdApplyPolicyRoute = createRoute({
  method: 'post',
  path: '/nodes/{nodeId}/applyPolicy',
  tags: ['Nodes'],
  summary: 'Trigger an agent run',
  description:
    'This API allows to trigger an agent run on the target node. Response is a stream of the actual agent run on the node.',
  operationId: 'applyNode',
  request: { params: z.object({ nodeId: NodeIdParamsSchema }) },
  responses: { 200: AgentOutputResponse },
})

export const postNodesNodeIdFetchDataRoute = createRoute({
  method: 'post',
  path: '/nodes/{nodeId}/fetchData',
  tags: ['🧩 Data sources'],
  summary: 'Update properties for one node from all data sources',
  description: 'Update properties from all data sources on one nodes. The call is asynchronous.',
  operationId: 'ReloadAllDatasourcesOneNode',
  request: { params: z.object({ nodeId: NodeIdParamsSchema }) },
  responses: {
    200: {
      description: 'Data sources reloaded',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('ReloadAllDatasourcesOneNode')
                .openapi({ description: 'The id of the action' }),
              data: z
                .string()
                .openapi({
                  example:
                    "Data for node '4e3336f9-ace8-44d6-8d07-496ff1631b01', for all configured data sources, is going to be updated",
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postNodesNodeIdFetchDataDatasourceIdRoute = createRoute({
  method: 'post',
  path: '/nodes/{nodeId}/fetchData/{datasourceId}',
  tags: ['🧩 Data sources'],
  summary: 'Update properties for one node from a data source',
  description: 'Update properties from a data source on one nodes. The call is asynchronous.',
  operationId: 'ReloadOneDatasourceOneNode',
  request: {
    params: z.object({ nodeId: NodeIdParamsSchema, datasourceId: DatasourceIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Data sources reloaded',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('ReloadOneDatasourceOneNode')
                .openapi({ description: 'The id of the action' }),
              data: z
                .string()
                .openapi({
                  example:
                    "Data for node '4e3336f9-ace8-44d6-8d07-496ff1631b01', for ' test-data-source' data source, is going to be updated",
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getNodesNodeIdInheritedPropertiesRoute = createRoute({
  method: 'get',
  path: '/nodes/{nodeId}/inheritedProperties',
  tags: ['Nodes'],
  summary: 'Get inherited node properties for a node',
  description: 'This API returns all node properties for a node, including group inherited ones.',
  operationId: 'nodeInheritedProperties',
  request: { params: z.object({ nodeId: NodeIdParamsSchema }) },
  responses: {
    200: {
      description: 'Node',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('nodeInheritedProperties')
                .openapi({ description: 'The id of the action' }),
              data: z
                .array(NodeInheritedPropertiesSchema)
                .openapi({ description: 'Information about the node inherited properties' }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getParametersRoute = createRoute({
  method: 'get',
  path: '/parameters',
  tags: ['Parameters'],
  summary: 'List all global parameters',
  description: 'Get the current value of all the global parameters',
  operationId: 'listParameters',
  responses: {
    200: {
      description: 'Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listParameters').openapi({ description: 'The id of the action' }),
              data: z
                .object({ parameters: z.array(ParameterSchema) })
                .openapi({ description: 'Parameters', required: ['parameters'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putParametersRoute = createRoute({
  method: 'put',
  path: '/parameters',
  tags: ['Parameters'],
  summary: 'Create a new parameter',
  description: 'Create a new global parameter',
  operationId: 'createParameter',
  request: {
    body: { content: { 'application/json': { schema: ParameterSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('createParameter').openapi({ description: 'The id of the action' }),
              data: z
                .object({ parameters: z.array(ParameterSchema) })
                .openapi({ description: 'Parameters', required: ['parameters'] }),
              id: z
                .string()
                .openapi({
                  description: 'Id of the parameter',
                  example: 'rudder_file_edit_footer',
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data', 'id'] }),
        },
      },
    },
  },
})

export const getParametersParameterIdRoute = createRoute({
  method: 'get',
  path: '/parameters/{parameterId}',
  tags: ['Parameters'],
  summary: 'Get the value of a parameter',
  description: 'Get the current value of a given parameter',
  operationId: 'parameterDetails',
  request: { params: z.object({ parameterId: ParameterIdParamsSchema }) },
  responses: {
    200: {
      description: 'Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('parameterDetails')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ parameters: z.array(ParameterSchema) })
                .openapi({ description: 'Parameters', required: ['parameters'] }),
              id: z
                .string()
                .openapi({
                  description: 'Id of the parameter',
                  example: 'rudder_file_edit_footer',
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data', 'id'] }),
        },
      },
    },
  },
})

export const postParametersParameterIdRoute = createRoute({
  method: 'post',
  path: '/parameters/{parameterId}',
  tags: ['Parameters'],
  summary: "Update a parameter's value",
  description: 'Update the properties of a parameter',
  operationId: 'updateParameter',
  request: { params: z.object({ parameterId: ParameterIdParamsSchema }) },
  responses: {
    200: {
      description: 'Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updateParameter').openapi({ description: 'The id of the action' }),
              data: z
                .object({ parameters: z.array(ParameterSchema) })
                .openapi({ description: 'Parameters', required: ['parameters'] }),
              id: z
                .string()
                .openapi({
                  description: 'Id of the parameter',
                  example: 'rudder_file_edit_footer',
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data', 'id'] }),
        },
      },
    },
  },
})

export const deleteParametersParameterIdRoute = createRoute({
  method: 'delete',
  path: '/parameters/{parameterId}',
  tags: ['Parameters'],
  summary: 'Delete a parameter',
  description: 'Delete an existing parameter',
  operationId: 'deleteParameter',
  request: { params: z.object({ parameterId: ParameterIdParamsSchema }) },
  responses: {
    200: {
      description: 'Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('deleteParameter').openapi({ description: 'The id of the action' }),
              data: z
                .object({ parameters: z.array(ParameterSchema) })
                .openapi({ description: 'Parameters', required: ['parameters'] }),
              id: z
                .string()
                .openapi({
                  description: 'Id of the parameter',
                  example: 'rudder_file_edit_footer',
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data', 'id'] }),
        },
      },
    },
    500: {
      description: 'Non existing parameter',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('deleteParameter').openapi({ description: 'The id of the action' }),
              errorDetails: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'Could not delete Parameter rudder_file_edit_footer cause is: Could not find Parameter rudder_file_edit_footer.',
                }),
              id: z
                .string()
                .openapi({
                  description: 'Id of the parameter',
                  example: 'rudder_file_edit_footer',
                }),
              result: z.literal('error').openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data', 'id'] }),
        },
      },
    },
  },
})

export const getRulesRoute = createRoute({
  method: 'get',
  path: '/rules',
  tags: ['Rules'],
  summary: 'List all rules',
  description: 'List all rules',
  operationId: 'listRules',
  responses: {
    200: {
      description: 'Rules information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listRules').openapi({ description: 'The id of the action' }),
              data: z.object({ rules: z.array(RuleSchema) }).openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putRulesRoute = createRoute({
  method: 'put',
  path: '/rules',
  tags: ['Rules'],
  summary: 'Create a rule',
  description: 'Create a new rule. You can specify a source rule to clone it.',
  operationId: 'createRule',
  request: { body: { content: { 'application/json': { schema: RuleNewSchema } } } },
  responses: {
    200: {
      description: 'Rules information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('createRule').openapi({ description: 'The id of the action' }),
              data: z.object({ rules: z.array(RuleSchema) }).openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putRulesCategoriesRoute = createRoute({
  method: 'put',
  path: '/rules/categories',
  tags: ['Rules'],
  summary: 'Create a rule category',
  description: 'Create a new rule category',
  operationId: 'CreateRuleCategory',
  request: {
    body: { content: { 'application/json': { schema: RuleCategorySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Rules category information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('CreateRuleCategory')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ ruleCategories: z.array(RuleCategorySchema) })
                .openapi({ required: ['ruleCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getRulesCategoriesRuleCategoryIdRoute = createRoute({
  method: 'get',
  path: '/rules/categories/{ruleCategoryId}',
  tags: ['Rules'],
  summary: 'Get rule category details',
  description: 'Get detailed information about a rule category',
  operationId: 'GetRuleCategoryDetails',
  request: { params: z.object({ ruleCategoryId: RuleCategoryIdParamsSchema }) },
  responses: {
    200: {
      description: 'Rules category information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('GetRuleCategoryDetails')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ rulesCategories: z.array(RuleCategorySchema) })
                .openapi({ required: ['rulesCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postRulesCategoriesRuleCategoryIdRoute = createRoute({
  method: 'post',
  path: '/rules/categories/{ruleCategoryId}',
  tags: ['Rules'],
  summary: 'Update rule category details',
  description: 'Update detailed information about a rule category',
  operationId: 'UpdateRuleCategory',
  request: {
    params: z.object({ ruleCategoryId: RuleCategoryIdParamsSchema }),
    body: { content: { 'application/json': { schema: RuleCategoryUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Rules category information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('UpdateRuleCategory')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ ruleCategories: z.array(RuleCategorySchema) })
                .openapi({ required: ['ruleCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteRulesCategoriesRuleCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/rules/categories/{ruleCategoryId}',
  tags: ['Rules'],
  summary: 'Delete group category',
  description: 'Delete a group category. It must have no child groups and no children categories.',
  operationId: 'DeleteRuleCategory',
  request: { params: z.object({ ruleCategoryId: RuleCategoryIdParamsSchema }) },
  responses: {
    200: {
      description: 'Groups category information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('DeleteRuleCategory')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ groupCategories: z.array(RuleCategorySchema) })
                .openapi({ required: ['groupCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getRulesTreeRoute = createRoute({
  method: 'get',
  path: '/rules/tree',
  tags: ['Rules'],
  summary: 'Get rules tree',
  description: 'Get all available rules and their categories in a tree',
  operationId: 'GetRuleTree',
  responses: {
    200: {
      description: 'Rules information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('GetRuleTree').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  ruleCategories: z.object({}).openapi({ description: 'Rule tree', example: null }),
                })
                .openapi({
                  example: {
                    categories: [
                      {
                        categories: [
                          {
                            categories: [],
                            description: '',
                            id: 'f45ec2fd-69f4-4669-9c22-1af3abe2a107',
                            name: 'Specific dev category',
                            parent: '4306143d-eabf-4478-b7b1-1616f4aa02b5',
                            rules: [
                              {
                                directives: [],
                                displayName: 'my specific Rule',
                                enabled: true,
                                id: 'b7fda4e7-3616-4e99-89b0-8ffadaf6b0f0',
                                longDescription: '',
                                shortDescription: '',
                                system: false,
                                targets: [],
                              },
                            ],
                          },
                        ],
                        description: '',
                        id: '4306143d-eabf-4478-b7b1-1616f4aa02b5',
                        name: 'Dev category',
                        parent: 'rootRuleCategory',
                        rules: [
                          {
                            directives: [],
                            displayName: 'dev Rule',
                            enabled: true,
                            id: 'f2aa50a9-961c-4cce-a266-380cffcdce32',
                            longDescription: '',
                            shortDescription: '',
                            system: false,
                            targets: [],
                          },
                        ],
                      },
                    ],
                    description: 'This is the main category of Rules',
                    id: 'rootRuleCategory',
                    name: 'Rules',
                    parent: 'rootRuleCategory',
                    rules: [
                      {
                        directives: [],
                        displayName: 'Global security policy',
                        enabled: true,
                        id: '43cde273-5bb0-466f-8850-7d3fdde03253',
                        longDescription: '',
                        shortDescription: '',
                        system: false,
                        targets: [],
                      },
                      {
                        directives: ['bff45fe2-8233-4d28-96aa-78b0390b548b'],
                        displayName: 'Global configuration for all nodes',
                        enabled: false,
                        id: '32377fd7-02fd-43d0-aab7-28460a91347b',
                        longDescription:
                          'This Rule was created automatically when Rudder was installed. It can be used to target Directives to all nodes (including the Rudder root server itself), or deleted if you would rather create your own set of Rules (it will never be created again).',
                        shortDescription: '',
                        system: false,
                        targets: [
                          {
                            exclude: { or: [] },
                            include: {
                              or: [
                                'special:all',
                                'special:all_exceptPolicyServers',
                                'special:all_policyServers',
                              ],
                            },
                          },
                        ],
                      },
                    ],
                  },
                  required: ['ruleCategories'],
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/rules/{ruleId}',
  tags: ['Rules'],
  summary: 'Get a rule details',
  description: 'Get the details of a rule',
  operationId: 'ruleDetails',
  request: { params: z.object({ ruleId: RuleIdParamsSchema }) },
  responses: {
    200: {
      description: 'Rules information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('ruleDetails').openapi({ description: 'The id of the action' }),
              data: z.object({ rules: z.array(RuleSchema) }).openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postRulesRuleIdRoute = createRoute({
  method: 'post',
  path: '/rules/{ruleId}',
  tags: ['Rules'],
  summary: 'Update a rule details',
  description: 'Update the details of a rule',
  operationId: 'updateRule',
  request: {
    params: z.object({ ruleId: RuleIdParamsSchema }),
    body: { content: { 'application/json': { schema: RuleWithCategorySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Rules information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updateRule').openapi({ description: 'The id of the action' }),
              data: z
                .object({ rules: z.array(RuleWithCategorySchema) })
                .openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/rules/{ruleId}',
  tags: ['Rules'],
  summary: 'Delete a rule',
  description: 'Delete a rule.',
  operationId: 'deleteRule',
  request: { params: z.object({ ruleId: RuleIdParamsSchema }) },
  responses: {
    200: {
      description: 'Rules information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('deleteRule').openapi({ description: 'The id of the action' }),
              data: z.object({ rules: z.array(RuleSchema) }).openapi({ required: ['rules'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postScaleoutrelayDemoteNodeIdRoute = createRoute({
  method: 'post',
  path: '/scaleoutrelay/demote/{nodeId}',
  tags: ['🧩 Scale out Relay'],
  summary: 'Demote a relay to simple node',
  description: 'Demote a relay to a simple node.',
  operationId: 'demoteToNode',
  request: { params: z.object({ nodeId: NodeIdParamsSchema }) },
  responses: {
    200: {
      description: 'Demote to node response',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('demoteToNode').openapi({ description: 'The id of the action' }),
              data: z
                .string()
                .openapi({
                  description: 'Success or error message',
                  example: '17dadf50-6056-4c8b-a935-6b97d14b89a7',
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['action', 'result', 'data'] }),
        },
      },
    },
  },
})

export const postScaleoutrelayPromoteNodeIdRoute = createRoute({
  method: 'post',
  path: '/scaleoutrelay/promote/{nodeId}',
  tags: ['🧩 Scale out Relay'],
  summary: 'Promote a node to relay',
  description: 'Promote a node to relay',
  operationId: 'promoteToRelay',
  request: { params: z.object({ nodeId: NodeIdParamsSchema }) },
  responses: {
    200: {
      description: 'Promote response',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('promoteToRelay').openapi({ description: 'The id of the action' }),
              data: z
                .string()
                .openapi({
                  description: 'Success or error message',
                  example: '17dadf50-6056-4c8b-a935-6b97d14b89a7',
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['action', 'result', 'data'] }),
        },
      },
    },
  },
})

export const getSecretIndexRoute = createRoute({
  method: 'get',
  path: '/secret/',
  tags: ['🧩 Secret Management'],
  summary: 'List all secrets',
  description: 'Get the list of all secrets without their value',
  operationId: 'getAllSecrets',
  responses: {
    200: {
      description: 'Secrets information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getAllSecrets').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  secrets: z
                    .array(
                      z
                        .object({
                          description: z
                            .string()
                            .openapi({
                              description:
                                'The description of the secret to identify it more easily',
                              example: 'Password of my super secret user account',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description:
                                'The name of the secret used as a reference on the value',
                              example: 'secret-password',
                            }),
                        })
                        .openapi({ required: ['name', 'description'] }),
                    )
                    .openapi({ description: 'List of API version and status' }),
                })
                .openapi({ required: ['secrets'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putSecretIndexRoute = createRoute({
  method: 'put',
  path: '/secret/',
  tags: ['🧩 Secret Management'],
  summary: 'Create a secret',
  description: 'Add a secret',
  operationId: 'addSecret',
  request: { body: { content: { 'application/json': { schema: SecretsSchema } }, required: true } },
  responses: {
    200: {
      description: 'Secrets information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('addSecret').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  secrets: z
                    .array(
                      z
                        .object({
                          description: z
                            .string()
                            .openapi({
                              description:
                                'The description of the secret to identify it more easily',
                              example: 'Password of my super secret user account',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description:
                                'The name of the secret used as a reference on the value',
                              example: 'secret-password',
                            }),
                        })
                        .openapi({ required: ['name', 'description'] }),
                    )
                    .openapi({ description: 'List of API version and status' }),
                })
                .openapi({ required: ['secrets'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSecretIndexRoute = createRoute({
  method: 'post',
  path: '/secret/',
  tags: ['🧩 Secret Management'],
  summary: 'Update a secret',
  description: 'Update a secret and override the value, the name cannot be overridden',
  operationId: 'updateSecret',
  request: { body: { content: { 'application/json': { schema: SecretsSchema } }, required: true } },
  responses: {
    200: {
      description: 'Secrets information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updateSecret').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  secrets: z
                    .array(
                      z
                        .object({
                          description: z
                            .string()
                            .openapi({
                              description:
                                'The description of the secret to identify it more easily',
                              example: 'Password of my super secret user account',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description:
                                'The name of the secret used as a reference on the value',
                              example: 'secret-password',
                            }),
                        })
                        .openapi({ required: ['name', 'description'] }),
                    )
                    .openapi({ description: 'List of API version and status' }),
                })
                .openapi({ required: ['secrets'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getSecretNameRoute = createRoute({
  method: 'get',
  path: '/secret/{name}',
  tags: ['🧩 Secret Management'],
  summary: 'Get one secret',
  description: 'Get one secret by his unique name',
  operationId: 'getSecret',
  request: { params: z.object({ name: SecretNameParamsSchema }) },
  responses: {
    200: {
      description: 'Secret information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getSecret').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  secrets: z
                    .array(
                      z
                        .object({
                          description: z
                            .string()
                            .openapi({
                              description:
                                'The description of the secret to identify it more easily',
                              example: 'Password of my super secret user account',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description:
                                'The name of the secret used as a reference on the value',
                              example: 'secret-password',
                            }),
                        })
                        .openapi({ required: ['name', 'description'] }),
                    )
                    .openapi({ description: 'List of API version and status' }),
                })
                .openapi({ required: ['secrets'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteSecretNameRoute = createRoute({
  method: 'delete',
  path: '/secret/{name}',
  tags: ['🧩 Secret Management'],
  summary: 'Delete a secret',
  description: 'Remove the secret by his unique name',
  operationId: 'deleteSecret',
  request: { params: z.object({ name: SecretNameParamsSchema }) },
  responses: {
    200: {
      description: 'Secret information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('deleteSecret').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  secrets: z
                    .array(
                      z
                        .object({
                          description: z
                            .string()
                            .openapi({
                              description:
                                'The description of the secret to identify it more easily',
                              example: 'Password of my super secret user account',
                            }),
                          name: z
                            .string()
                            .openapi({
                              description:
                                'The name of the secret used as a reference on the value',
                              example: 'secret-password',
                            }),
                        })
                        .openapi({ required: ['name', 'description'] }),
                    )
                    .openapi({ description: 'List of API version and status' }),
                })
                .openapi({ required: ['secrets'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/settings',
  tags: ['Settings'],
  summary: 'List all settings',
  description: 'Get the current value of all the settings',
  operationId: 'getAllSettings',
  responses: {
    200: {
      description: 'Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getAllSettings').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  settings: z
                    .object({
                      allowed_networks: z
                        .array(
                          z
                            .object({
                              allowed_networks: z
                                .array(
                                  z
                                    .string()
                                    .openapi({
                                      description:
                                        'Allowed network (`0.0.0.0/0` for no restriction `a.b.c.d/32` for one IP)',
                                      example: '192.168.40.0/24',
                                    }),
                                )
                                .exactOptional()
                                .openapi({ description: 'List of allowed networks' }),
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Rudder id of the policy server',
                                  example: 'root',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'List of allowed networks for each policy server (root and relays)',
                        }),
                      change_message_prompt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Explanation to display',
                          example: 'Please provide a reason for this change',
                        }),
                      display_recent_changes_graphs: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Display changes graphs', example: true }),
                      enable_change_message: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Enable change audit logs', example: true }),
                      enable_change_request: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Enable Change Requests', example: false }),
                      enable_javascript_directives: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Enable script evaluation in Directives',
                          example: 'enabled',
                        }),
                      enable_self_deployment: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Allow self deployment', example: true }),
                      enable_self_validation: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Allow self validation', example: true }),
                      first_run_hour: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'First agent run time - hour', example: 0 }),
                      first_run_minute: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'First agent run time - minute', example: 0 }),
                      global_policy_mode: z
                        .enum(['enforce', 'audit'])
                        .exactOptional()
                        .openapi({
                          description: 'Define the default setting for global policy mode',
                          example: 'enforce',
                        }),
                      global_policy_mode_overridable: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Allow overrides on this default setting',
                          example: true,
                        }),
                      heartbeat_frequency: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Send heartbeat every heartbeat_frequency runs (only on **changes-only** compliance mode)',
                          example: 10,
                        }),
                      mandatory_change_message: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Make message mandatory', example: false }),
                      modified_file_ttl: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of days to retain modified files',
                          example: 7,
                        }),
                      node_accept_duplicated_hostname: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description:
                            'Allow acceptation of a pending node when another one with the same hostname is already accepted',
                          example: false,
                        }),
                      node_onaccept_default_policyMode: z
                        .enum(['default', 'enforce', 'audit'])
                        .exactOptional()
                        .openapi({
                          description: 'Default policy mode for accepted node',
                          example: 'default',
                        }),
                      node_onaccept_default_state: z
                        .enum([
                          'enabled',
                          'ignored',
                          'empty-policies',
                          'initializing',
                          'preparing-eol',
                        ])
                        .exactOptional()
                        .openapi({
                          description:
                            'Set default state for node when they are accepted within Rudder',
                          example: 'enabled',
                        }),
                      output_file_ttl: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Number of days to retain agent output files',
                          example: 7,
                        }),
                      relay_server_synchronization_method: z
                        .enum(['classic', 'rsync', 'disabled'])
                        .exactOptional()
                        .openapi({
                          description:
                            'Method used to synchronize data between server and relays, either "classic" (agent protocol, default), "rsync" (use rsync to synchronize, that you\'ll need to be manually set up), or "disabled" (use third party system to transmit data)',
                          example: 'classic',
                        }),
                      relay_server_synchronize_policies: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "If **rsync** is set as a synchronization method, use rsync to synchronize policies between Rudder server and relays. If false, you'll have to synchronize policies yourself.",
                          example: true,
                        }),
                      relay_server_synchronize_shared_files: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            "If **rsync** is set as a synchronization method, use rsync to synchronize shared files between Rudder server and relays. If false, you'll have to synchronize shared files yourself.",
                        }),
                      reporting_mode: z
                        .enum(['full-compliance', 'changes-only', 'reports-disabled'])
                        .exactOptional()
                        .openapi({
                          description: 'Compliance reporting mode',
                          example: 'full-compliance',
                        }),
                      require_time_synchronization: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Require time synchronization between nodes and policy server',
                          example: true,
                        }),
                      rudder_compute_changes: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({
                          description: 'Compute list of changes (repaired reports) per rule',
                        }),
                      rudder_compute_dyngroups_max_parallelism: z
                        .string()
                        .default('1')
                        .exactOptional()
                        .openapi({
                          description:
                            'Set the parallelism to compute dynamic group, as a number of thread (i.e. 4), or a multiplicative of the number of core (x0.5)',
                        }),
                      rudder_generation_compute_dyngroups: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({
                          description:
                            'Recompute all dynamic groups at the start of policy generation',
                        }),
                      rudder_generation_continue_on_error: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description:
                            'Policy generation continues on error during NodeConfiguration evaluation',
                        }),
                      rudder_generation_delay: z
                        .string()
                        .default('0 seconds')
                        .exactOptional()
                        .openapi({
                          description:
                            'Set a delay before starting policy generation, this will allow you to accumulate changes before they are deployed to Nodes, and can also lessen webapp resources needs. The value is a number followed by the time unit needed (seconds/s, minutes/m, hours/h ...), ie "5m" for 5 minutes',
                        }),
                      rudder_generation_js_timeout: z
                        .int()
                        .default(30)
                        .exactOptional()
                        .openapi({
                          description:
                            'Policy generation JS evaluation of directive parameter timeout in seconds',
                        }),
                      rudder_generation_max_parallelism: z
                        .string()
                        .default('x0.5')
                        .exactOptional()
                        .openapi({
                          description:
                            'Set the policy generation parallelism, either as an number of thread (i.e. 4), or a multiplicative of the number of core (x0.5)',
                        }),
                      rudder_generation_policy: z
                        .string()
                        .default('all')
                        .exactOptional()
                        .openapi({
                          description:
                            "Should policy generation be triggered automatically after a change (value 'all'), or should we wait until a manual launch (through api or UI, value 'onlyManual') or even no policy generation at all (value \"none\")",
                        }),
                      rudder_report_protocol_default: z
                        .enum(['HTTPS', 'SYSLOG'])
                        .exactOptional()
                        .openapi({
                          description: 'Default reporting protocol used',
                          example: 'HTTPS',
                        }),
                      rudder_save_db_compliance_details: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({ description: 'Store all compliance details in database' }),
                      rudder_save_db_compliance_levels: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({ description: 'Store all compliance levels in database' }),
                      rudder_verify_certificates: z
                        .boolean()
                        .default(false)
                        .exactOptional()
                        .openapi({
                          description: 'Enforce certificate validation in all HTTPS calls',
                        }),
                      run_frequency: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Agent run schedule - time between agent runs (in minutes)',
                          example: 5,
                        }),
                      send_metrics: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Send anonymous usage statistics',
                          example: 'not defined',
                        }),
                      splay_time: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Maximum delay after scheduled run time (random interval)',
                          example: 5,
                        }),
                      unexpected_unbound_var_values: z
                        .boolean()
                        .default(true)
                        .exactOptional()
                        .openapi({
                          description:
                            'Allows multiple reports for configuration based on a multivalued variable',
                        }),
                    })
                    .openapi({ required: [] }),
                })
                .openapi({ description: 'Information about the setting', required: ['settings'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getSettingsAllowedNetworksNodeIdRoute = createRoute({
  method: 'get',
  path: '/settings/allowed_networks/{nodeId}',
  tags: ['Settings'],
  summary: 'Get allowed networks for a policy server',
  description: 'Get the list of allowed networks for a policy server',
  operationId: 'getAllowedNetworks',
  request: { params: z.object({ nodeId: SettingAllowedNetworksParamsSchema }) },
  responses: {
    200: {
      description: 'Allowed Networks',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getAllowedNetworks')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  settings: z
                    .object({
                      allowed_networks: z
                        .array(z.any())
                        .openapi({
                          description: 'Array of allowed networks',
                          example: ['162.168.1.0/24', '192.168.2.0/24'],
                        }),
                    })
                    .openapi({ required: ['allowed_networks'] }),
                })
                .openapi({
                  description: 'Information about the allowed_networks settings',
                  required: ['settings'],
                }),
              id: z.string().openapi({ description: 'Target policy server ID', example: 'root' }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'id', 'data'] }),
        },
      },
    },
  },
})

export const postSettingsAllowedNetworksNodeIdRoute = createRoute({
  method: 'post',
  path: '/settings/allowed_networks/{nodeId}',
  tags: ['Settings'],
  summary: 'Set allowed networks for a policy server',
  description: 'Set the list of allowed networks for a policy server',
  operationId: 'setAllowedNetworks',
  request: {
    params: z.object({ nodeId: SettingAllowedNetworksParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              value: z
                .object({})
                .exactOptional()
                .openapi({ description: 'New value of the allowed networks', example: 'enforce' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Allowed Networks',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('modifyAllowedNetworks')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  allowed_networks: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'Array of allowed networks',
                      example: ['162.168.1.0/24', '192.168.2.0/24'],
                    }),
                })
                .openapi({
                  description: 'Information about the allowed_networks settings',
                  required: ['settings'],
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the modified node' }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSettingsAllowedNetworksNodeIdDiffRoute = createRoute({
  method: 'post',
  path: '/settings/allowed_networks/{nodeId}/diff',
  tags: ['Settings'],
  summary: 'Modify allowed networks for a policy server',
  description: 'Add or delete allowed networks for a policy server',
  operationId: 'modifyAllowedNetworks',
  request: {
    params: z.object({ nodeId: SettingAllowedNetworksParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              allowed_networks: z
                .object({
                  add: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        'List of networks to add to existing allowed networks for that server',
                      example: ['192.168.2.0/24', '192.168.0.0/16'],
                    }),
                  delete: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description:
                        'List of networks to remove from existing allowed networks for that server',
                      example: ['162.168.1.0/24'],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Allowed Networks',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('modifySetting').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  allowed_networks: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({
                      description: 'Array of allowed networks',
                      example: ['192.168.2.0/24', '192.168.0.0/16'],
                    }),
                })
                .openapi({
                  description: 'Information about the allowed_networks settings',
                  required: ['settings'],
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getSettingsSettingIdRoute = createRoute({
  method: 'get',
  path: '/settings/{settingId}',
  tags: ['Settings'],
  summary: 'Get the value of a setting',
  description: 'Get the current value of a specific setting',
  operationId: 'getSetting',
  request: { params: z.object({ settingId: SettingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getSetting').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  settingId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Id and value of the property', example: 'value' }),
                })
                .openapi({ description: 'Information about the setting', required: ['settings'] }),
              id: z
                .string()
                .openapi({ description: 'Id of the setting', example: 'global_policy_mode' }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data', 'id'] }),
        },
      },
    },
  },
})

export const postSettingsSettingIdRoute = createRoute({
  method: 'post',
  path: '/settings/{settingId}',
  tags: ['Settings'],
  summary: 'Set the value of a setting',
  description: 'Set the current value of a specific setting',
  operationId: 'modifySetting',
  request: {
    params: z.object({ settingId: SettingIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              value: z
                .string()
                .exactOptional()
                .openapi({ description: 'New value of the setting', example: 'enforce' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Settings',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('modifySetting').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  settingId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Id and value of the property', example: 'value' }),
                })
                .openapi({ description: 'Information about the setting', required: ['settings'] }),
              id: z
                .string()
                .openapi({ description: 'Id of the setting', example: 'global_policy_mode' }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data', 'id'] }),
        },
      },
    },
  },
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['Status'],
  summary: 'Check if Rudder is alive',
  description:
    "An unauthenticated API to check if Rudder web application is up and running. Be careful: this API does not follow other Rudder's API convention: \n- it is not versioned, so the path is just `/api/status`;\n- it returns a plain text message.",
  operationId: 'none',
  responses: {
    200: {
      description: 'OK status message',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'OK\\\\n' }) } },
    },
  },
})

export const getSystemArchivesArchiveKindRoute = createRoute({
  method: 'get',
  path: '/system/archives/{archiveKind}',
  tags: ['System'],
  summary: 'List archives',
  description: 'List configuration archives',
  operationId: 'listArchives',
  request: { params: z.object({ archiveKind: ArchiveKindParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .enum([
                  'archiveFull',
                  'archiveGroups',
                  'archiveRules',
                  'archiveDirectives',
                  'archiveParameters',
                ])
                .openapi({ description: 'The kind of the archive', example: 'archiveFull' }),
              data: z
                .object({
                  full: z.array(
                    z
                      .object({
                        commiter: z.string().openapi({ example: 'Rudder system account' }),
                        gitCommit: z
                          .string()
                          .openapi({ example: '546de1b211ecc5b7ca295abac2191bc6bb05d44e' }),
                        id: z.string().openapi({ example: '2019-09-17_16-06-15.255' }),
                      })
                      .openapi({ required: ['commiter', 'gitCommit', 'id'] }),
                  ),
                })
                .openapi({ required: ['full'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSystemArchivesArchiveKindRoute = createRoute({
  method: 'post',
  path: '/system/archives/{archiveKind}',
  tags: ['System'],
  summary: 'Create an archive',
  description: 'Create new archive of the given kind',
  operationId: 'createArchive',
  request: { params: z.object({ archiveKind: ArchiveKindParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .enum([
                  'archiveFull',
                  'archiveGroups',
                  'archiveRules',
                  'archiveDirectives',
                  'archiveParameters',
                ])
                .openapi({ description: 'The kind of the archive', example: 'archiveFull' }),
              data: z
                .object({
                  full: z
                    .object({
                      commiter: z.string().openapi({ example: 'Rudder system account' }),
                      gitCommit: z
                        .string()
                        .openapi({ example: '546de1b211ecc5b7ca295abac2191bc6bb05d44e' }),
                      id: z.string().openapi({ example: '2019-09-17_16-06-15.255' }),
                    })
                    .openapi({ required: ['commiter', 'gitCommit', 'id'] }),
                })
                .openapi({ required: ['full'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSystemArchivesArchiveKindRestoreArchiveRestoreKindRoute = createRoute({
  method: 'post',
  path: '/system/archives/{archiveKind}/restore/{archiveRestoreKind}',
  tags: ['System'],
  summary: 'Restore an archive',
  description: 'Restore an archive of the given kind for the given moment',
  operationId: 'restoreArchive',
  request: {
    params: z.object({
      archiveKind: ArchiveKindParamsSchema,
      archiveRestoreKind: z
        .enum(['latestArchive', 'latestCommit', 'archive ID'])
        .openapi({
          param: {
            in: 'path',
            name: 'archiveRestoreKind',
            required: true,
            schema: {
              description:
                'What archive to restore (latest archive, latest commit in configuration repository, or archive with ID as given by listArchive)',
              enum: ['latestArchive', 'latestCommit', 'archive ID'],
              example: 'latestCommit',
              type: 'string',
            },
          },
          description:
            'What archive to restore (latest archive, latest commit in configuration repository, or archive with ID as given by listArchive)',
          example: 'latestCommit',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .enum([
                  'restoreFullLatestArchive',
                  'restoreGroupLatestArchive',
                  'restoreRulesLatestArchive',
                  'restoreDirectivesLatestArchive',
                  'restoreParametersLatestArchive',
                  'restoreFullLatestCommit',
                  'restoreGroupLatestCommit',
                  'restoreRulesLatestCommit',
                  'restoreDirectivesLatestCommit',
                  'restoreParametersLatestCommit',
                  'archiveFullDateRestore',
                  'archiveGroupDateRestore',
                  'archiveRulesDateRestore',
                  'archiveDirectivesDateRestore',
                  'archiveParametersDateRestore',
                ])
                .openapi({
                  description: 'The kind of the archive',
                  example: 'archirestoreFullLatestCommitveFull',
                }),
              data: z
                .object({
                  directive: z.string().exactOptional().openapi({ example: 'Started' }),
                  full: z.string().exactOptional().openapi({ example: 'Started' }),
                  groups: z.string().exactOptional().openapi({ example: 'Started' }),
                  parameters: z.string().exactOptional().openapi({ example: 'Started' }),
                  rules: z.string().exactOptional().openapi({ example: 'Started' }),
                })
                .openapi({ required: [] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getSystemArchivesArchiveKindZipCommitIdRoute = createRoute({
  method: 'get',
  path: '/system/archives/{archiveKind}/zip/{commitId}',
  tags: ['System'],
  summary: 'Get an archive as a ZIP',
  description: 'Get an archive of the given kind as a zip',
  operationId: 'getZipArchive',
  request: {
    params: z.object({
      archiveKind: ArchiveKindParamsSchema,
      commitId: z
        .string()
        .openapi({
          param: {
            description: 'commit ID of the archive to get as a ZIP file',
            in: 'path',
            name: 'commitId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const getSystemHealthcheckRoute = createRoute({
  method: 'get',
  path: '/system/healthcheck',
  tags: ['System'],
  summary: 'Get healthcheck',
  description: 'Run and get the result of all checks',
  operationId: 'getHealthcheckResult',
  responses: {
    200: {
      description: 'Healthcheck information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('getHealthcheckResult')
                .openapi({ description: 'The id of the action' }),
              data: z.array(CheckSchema),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getSystemInfoRoute = createRoute({
  method: 'get',
  path: '/system/info',
  tags: ['System'],
  summary: 'Get server information',
  description: 'Get information about the server version',
  operationId: 'getSystemInfo',
  responses: {
    200: {
      description: 'Service information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getSystemInfo').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  rudder: z
                    .object({
                      'build-time': z.iso.date().openapi({ example: '2019-03-25T10:11:23Z' }),
                      'full-version': z.string().openapi({ example: '6.0.4' }),
                      'major-version': z.string().openapi({ example: '6.0' }),
                    })
                    .openapi({ required: ['major-version', 'full-version', 'build-time'] }),
                })
                .openapi({ description: 'Information about the service', required: ['rudder'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSystemMaintenancePurgeSoftwareRoute = createRoute({
  method: 'post',
  path: '/system/maintenance/purgeSoftware',
  tags: ['System'],
  summary: 'Trigger batch for cleaning unreferenced software',
  description: 'Start the software cleaning batch asynchronously.',
  operationId: 'purgeSoftware',
  responses: {
    200: {
      description: 'Purge Software',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('purgeSoftware').openapi({ description: 'The id of the action' }),
              data: z.array(z.string().openapi({ description: 'a success message.' })),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSystemRegeneratePoliciesRoute = createRoute({
  method: 'post',
  path: '/system/regenerate/policies',
  tags: ['System'],
  summary: 'Trigger a new policy generation',
  description: 'Trigger a full policy generation',
  operationId: 'regeneratePolicies',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('regeneratePolicies')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ policies: z.literal('Started') })
                .openapi({ required: ['policies'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSystemReloadRoute = createRoute({
  method: 'post',
  path: '/system/reload',
  tags: ['System'],
  summary: 'Reload both techniques and dynamic groups',
  description: 'Reload both techniques and dynamic groups',
  operationId: 'reloadAll',
  responses: {
    200: {
      description: 'Service reload',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('reloadAll').openapi({ description: 'The id of the action' }),
              data: z
                .object({ groups: z.literal('Started'), techniques: z.literal('Started') })
                .openapi({ required: ['groups', 'techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSystemReloadGroupsRoute = createRoute({
  method: 'post',
  path: '/system/reload/groups',
  tags: ['System'],
  summary: 'Reload dynamic groups',
  description: 'Reload dynamic groups',
  operationId: 'reloadGroups',
  responses: {
    200: {
      description: 'Service reload',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('reloadGroups').openapi({ description: 'The id of the action' }),
              data: z.object({ groups: z.literal('Started') }).openapi({ required: ['groups'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSystemReloadTechniquesRoute = createRoute({
  method: 'post',
  path: '/system/reload/techniques',
  tags: ['System'],
  summary: 'Reload techniques',
  description: 'Reload techniques from local technique library',
  operationId: 'reloadTechniques',
  responses: {
    200: {
      description: 'Service reload',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('reloadTechniques')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ techniques: z.literal('Started') })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getSystemStatusRoute = createRoute({
  method: 'get',
  path: '/system/status',
  tags: ['System'],
  summary: 'Get server status',
  description: 'Get information about current server status',
  operationId: 'getStatus',
  responses: {
    200: {
      description: 'Service status',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getStatus').openapi({ description: 'The id of the action' }),
              data: z
                .object({ global: z.literal('OK').exactOptional() })
                .openapi({ description: 'Status of the service', required: [] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postSystemUpdatePoliciesRoute = createRoute({
  method: 'post',
  path: '/system/update/policies',
  tags: ['System'],
  summary: 'Trigger update of policies',
  description: 'Update configuration policies if needed',
  operationId: 'updatePolicies',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updatePolicies').openapi({ description: 'The id of the action' }),
              data: z
                .object({ policies: z.literal('Started') })
                .openapi({ required: ['policies'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesRoute = createRoute({
  method: 'get',
  path: '/techniques',
  tags: ['Techniques'],
  summary: 'List all techniques',
  description: 'List all technique with their versions',
  operationId: 'listTechniques',
  responses: {
    200: {
      description: 'Techniques information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({ techniques: TechniquesSchema })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const putTechniquesRoute = createRoute({
  method: 'put',
  path: '/techniques',
  tags: ['Techniques'],
  summary: 'Create technique',
  description: 'Create a new technique in Rudder from a technique in the technique editor',
  operationId: 'CreateTechnique',
  request: {
    body: { content: { 'application/json': { schema: TechniquesSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Versions information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  techniques: z
                    .object({ technique: EditorTechniqueSchema })
                    .openapi({ required: ['technique'] }),
                })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesCategoriesRoute = createRoute({
  method: 'get',
  path: '/techniques/categories',
  tags: ['Techniques'],
  summary: 'List categories',
  description: 'Get all technique categories',
  operationId: 'techniqueCategories',
  responses: {
    200: {
      description: 'Categories information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({ techniqueCategories: CategoriesTreeSchema })
                .openapi({ required: ['techniqueCategories'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postTechniquesReloadRoute = createRoute({
  method: 'post',
  path: '/techniques/reload',
  tags: ['Techniques'],
  summary: 'Reload techniques',
  description: 'Reload all techniques metadata from file system',
  operationId: 'techniques',
  responses: {
    200: {
      description: 'Techniques information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({ techniques: TechniquesSchema })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesVersionsRoute = createRoute({
  method: 'get',
  path: '/techniques/versions',
  tags: ['Techniques'],
  summary: 'List versions',
  description: 'List all techniques version',
  operationId: 'listTechniquesVersions',
  responses: {
    200: {
      description: 'Versions information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({ techniques: TechniquesVersionsSchema })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesTechniqueIdRoute = createRoute({
  method: 'get',
  path: '/techniques/{techniqueId}',
  tags: ['Techniques'],
  summary: 'Technique metadata by ID',
  description: "Get each Technique's versions with their metadata by ID",
  operationId: 'getTechniqueAllVersion',
  request: { params: z.object({ techniqueId: TechniqueIdParamsSchema }) },
  responses: {
    200: {
      description: 'Techniques information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  techniques: z.array(
                    z
                      .object({ JREditorTechnique: EditorTechniqueSchema })
                      .openapi({ required: ['JREditorTechnique'] }),
                  ),
                })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesTechniqueIdDirectivesRoute = createRoute({
  method: 'get',
  path: '/techniques/{techniqueId}/directives',
  tags: ['Techniques'],
  summary: 'List all directives based on a technique',
  description: 'List all directives based on all version of a technique',
  operationId: 'listTechniquesDirectives',
  request: { params: z.object({ techniqueId: TechniqueIdParamsSchema }) },
  responses: {
    200: {
      description: 'Techniques information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('listTechniquesDirectives')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ directives: z.array(DirectiveSchema) })
                .openapi({ required: ['directives'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesTechniqueIdTechniqueVersionRoute = createRoute({
  method: 'get',
  path: '/techniques/{techniqueId}/{techniqueVersion}',
  tags: ['Techniques'],
  summary: 'Technique metadata by version and ID',
  description: 'Get Technique metadata',
  operationId: 'getTechniqueAllVersionId',
  request: {
    params: z.object({
      techniqueId: TechniqueIdParamsSchema,
      techniqueVersion: TechniqueVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Techniques information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  techniques: z.array(
                    z
                      .object({ JREditorTechnique: EditorTechniqueSchema })
                      .openapi({ required: ['JREditorTechnique'] }),
                  ),
                })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postTechniquesTechniqueIdTechniqueVersionRoute = createRoute({
  method: 'post',
  path: '/techniques/{techniqueId}/{techniqueVersion}',
  tags: ['Techniques'],
  summary: 'Update technique',
  description: 'Update technique created with technique editor',
  operationId: 'updateTechnique',
  request: {
    params: z.object({
      techniqueId: TechniqueIdParamsSchema,
      techniqueVersion: TechniqueVersionParamsSchema,
    }),
    body: { content: { 'application/json': { schema: TechniquesSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Versions information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  techniques: z
                    .object({ technique: EditorTechniqueSchema })
                    .openapi({ required: ['technique'] }),
                })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteTechniquesTechniqueIdTechniqueVersionRoute = createRoute({
  method: 'delete',
  path: '/techniques/{techniqueId}/{techniqueVersion}',
  tags: ['Techniques'],
  summary: 'Delete technique',
  description: 'Delete a technique from technique editor',
  operationId: 'deleteTechnique',
  request: {
    params: z.object({
      techniqueId: TechniqueIdParamsSchema,
      techniqueVersion: TechniqueVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Deletion information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  techniques: z
                    .object({
                      id: z
                        .string()
                        .openapi({ description: 'Deleted technique ID', example: 'foo' }),
                      version: z
                        .string()
                        .openapi({ description: 'Deleted technique version', example: 1 }),
                    })
                    .exactOptional()
                    .openapi({ required: ['id', 'version'] }),
                })
                .openapi({ required: ['resources'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesTechniqueIdTechniqueVersionDirectivesRoute = createRoute({
  method: 'get',
  path: '/techniques/{techniqueId}/{techniqueVersion}/directives',
  tags: ['Techniques'],
  summary: 'List all directives based on a version of a technique',
  description: 'List all directives based on a version of a technique',
  operationId: 'listTechniqueVersionDirectives',
  request: {
    params: z.object({
      techniqueId: TechniqueIdParamsSchema,
      techniqueVersion: TechniqueVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Techniques information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .literal('listTechniqueDirectives')
                .openapi({ description: 'The id of the action' }),
              data: z
                .object({ directives: z.array(DirectiveSchema) })
                .openapi({ required: ['directives'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesTechniqueIdTechniqueVersionResourcesRoute = createRoute({
  method: 'get',
  path: '/techniques/{techniqueId}/{techniqueVersion}/resources',
  tags: ['Techniques'],
  summary: "Technique's resources",
  description: 'Get currently deployed resources of a technique',
  operationId: 'getTechniquesResources',
  request: {
    params: z.object({
      techniqueId: TechniqueIdParamsSchema,
      techniqueVersion: TechniqueVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Resources information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({ resources: TechniquesResourcesSchema })
                .openapi({ required: ['resources'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getTechniquesTechniqueIdTechniqueVersionRevisionsRoute = createRoute({
  method: 'get',
  path: '/techniques/{techniqueId}/{techniqueVersion}/revisions',
  tags: ['Techniques'],
  summary: "Technique's revisions",
  description: 'Get revisions for given technique',
  operationId: 'techniqueRevisions',
  request: {
    params: z.object({
      techniqueId: TechniqueIdParamsSchema,
      techniqueVersion: TechniqueVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Versions information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listTechniques').openapi({ description: 'The id of the action' }),
              data: z
                .object({ techniques: TechniquesRevisionsSchema })
                .openapi({ required: ['techniques'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postUsermanagementRoute = createRoute({
  method: 'post',
  path: '/usermanagement',
  tags: ['🧩 User Management'],
  summary: 'Add user',
  description: 'Add a new user',
  operationId: 'addUser',
  request: { body: { content: { 'application/json': { schema: UsersSchema } }, required: true } },
  responses: {
    200: {
      description: 'Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('addUser').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  addedUser: z
                    .object({
                      password: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'this password will be hashed for you if the `isPreHashed` is set on false',
                          example: 'passwdWillBeStoredHashed',
                        }),
                      role: z
                        .array(z.string().openapi({ example: 'user' }))
                        .exactOptional()
                        .openapi({ description: "defined user's permissions" }),
                      username: z.string().exactOptional().openapi({ example: 'John Doe' }),
                    })
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['addedUser'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getUsermanagementRolesRoute = createRoute({
  method: 'get',
  path: '/usermanagement/roles',
  tags: ['🧩 User Management'],
  summary: 'List all roles',
  description: 'Get all available roles and their rights',
  operationId: 'getRole',
  responses: {
    200: {
      description: 'Roles information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getRole').openapi({ description: 'The id of the action' }),
              data: z.array(
                z
                  .object({
                    id: z
                      .enum(['inventory', 'compliance', 'administrator', 'etc'])
                      .openapi({ description: 'Name of the role' }),
                    rights: z
                      .array(z.enum(['node_read', 'userAccount_all']))
                      .openapi({ description: "Role's rights" }),
                  })
                  .openapi({ required: ['id', 'rights'] }),
              ),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postUsermanagementUpdateUsernameRoute = createRoute({
  method: 'post',
  path: '/usermanagement/update/{username}',
  tags: ['🧩 User Management'],
  summary: "Update user's infos",
  description:
    'Rename, change password (pre-hashed or not) and change permission of an user. If a parameter is empty, it will be ignored.',
  operationId: 'updateUser',
  request: {
    params: z.object({ username: UsernameParamsSchema }),
    body: { content: { 'application/json': { schema: UsersSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('updateUser').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  updatedUser: z
                    .object({
                      password: z
                        .string()
                        .openapi({ description: 'New password given', example: 'Titi' }),
                      role: z
                        .array(z.string().openapi({ example: 'user' }))
                        .openapi({ description: "defined user's permissions" }),
                      username: z
                        .string()
                        .openapi({ description: 'New Username', example: 'Titi' }),
                    })
                    .openapi({ required: ['username', 'password', 'role'] }),
                })
                .openapi({ required: ['updatedUser'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getUsermanagementUsersRoute = createRoute({
  method: 'get',
  path: '/usermanagement/users',
  tags: ['🧩 User Management'],
  summary: 'List all users',
  description: 'Get the list of all present users and their permissions',
  operationId: 'getUserInfo',
  responses: {
    200: {
      description: 'Users information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('getUserInfo').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  digest: z.enum(['BCRYPT', 'SHA512', 'SHA256', 'SHA1', 'MD5']),
                  users: z.array(UsersSchema),
                })
                .openapi({ required: ['digest', 'users'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getUsermanagementUsersReloadRoute = createRoute({
  method: 'get',
  path: '/usermanagement/users/reload',
  tags: ['🧩 User Management'],
  summary: 'Reload user',
  description: 'Reload the users from the file system, in the configuration file',
  operationId: 'reloadUserConf',
  responses: {
    200: {
      description: 'Reload information',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('reloadUserConf').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  reload: z
                    .object({ status: z.string().openapi({ example: 'Done' }) })
                    .openapi({ required: ['status'] }),
                })
                .openapi({ required: ['reload'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteUsermanagementUsernameRoute = createRoute({
  method: 'delete',
  path: '/usermanagement/{username}',
  tags: ['🧩 User Management'],
  summary: 'Delete an user',
  description: 'Delete the user and his permissions',
  operationId: 'deleteUser',
  request: { params: z.object({ username: UsernameParamsSchema }) },
  responses: {
    200: {
      description: 'Deleted user',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('deleteUser').openapi({ description: 'The id of the action' }),
              data: z
                .object({
                  deletedUser: z
                    .object({
                      username: z
                        .string()
                        .openapi({ description: 'Username of the deleted user', example: 'Toto' }),
                    })
                    .openapi({ required: ['username'] }),
                })
                .openapi({ required: ['deletedUser'] }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['🧩 Change requests'],
  summary: 'List user',
  description: 'List all validated and unvalidated users',
  operationId: 'listUsers',
  responses: {
    200: {
      description: 'List users',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listUsers').openapi({ description: 'The id of the action' }),
              data: z.array(ValidatedUserSchema),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const postValidatedUsersRoute = createRoute({
  method: 'post',
  path: '/validatedUsers',
  tags: ['🧩 Change requests'],
  summary: 'Update validated user list',
  description: 'Add and remove user from validated users',
  operationId: 'saveWorkflowUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              validatedUsers: z
                .array(z.string().openapi({ example: 'John Do' }))
                .openapi({ description: 'list of user to put in validated list' }),
            })
            .openapi({ required: ['validatedUsers'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('addUser').openapi({ description: 'The id of the action' }),
              data: ValidatedUserSchema,
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})

export const deleteValidatedUsersUsernameRoute = createRoute({
  method: 'delete',
  path: '/validatedUsers/{username}',
  tags: ['🧩 Change requests'],
  summary: 'Remove an user from validated user list',
  description: 'The user is again subject to workflow validation',
  operationId: 'removeValidatedUser',
  request: { params: z.object({ username: UsernameParamsSchema }) },
  responses: {
    200: {
      description: 'Removed user',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.literal('listUsers').openapi({ description: 'The id of the action' }),
              data: z
                .string()
                .openapi({
                  description: 'the user removed from validated list',
                  example: 'John Do',
                }),
              result: z
                .enum(['success', 'error'])
                .openapi({ description: 'Result of the request' }),
            })
            .openapi({ required: ['result', 'action', 'data'] }),
        },
      },
    },
  },
})
