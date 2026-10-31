import { createRoute, z } from '@hono/zod-openapi'

const EntryPointParameterSchema = z
  .object({
    description: z
      .string()
      .openapi({
        description:
          'A short description of the parameter for use in the OSDB Action Console. Optional - may be null.',
      }),
    display_name: z
      .string()
      .openapi({
        description:
          "The parameter's display name in the OSDB Action Console. Optional - may be null.",
      }),
    parameter_name: z
      .string()
      .openapi({
        description:
          'The parameter name as present in the HTTP request. e.g. the key name in a query string key-value pair.',
      }),
    permitted_values: z
      .array(z.string())
      .openapi({
        description:
          'If the parameter accepts only a limited set of values, the allowed set of values. Null if not applicable.',
      }),
    required: z
      .int32()
      .min(0)
      .max(1)
      .openapi({ description: 'A flag indicating if the parameter is optional.' }),
    type: z
      .enum(['query', 'header', 'uri', 'path', 'body'])
      .openapi({
        description: 'The type of the parameter, indicating its location in the HTTP request.',
      }),
  })
  .openapi({
    required: [
      'parameter_name',
      'display_name',
      'description',
      'type',
      'required',
      'permitted_values',
    ],
  })
  .openapi('EntryPointParameter')

const EntryPointSchema = z
  .object({
    content_types: z
      .array(z.string())
      .openapi({ description: 'The supported MIME type(s) for an EntryPoint response.' }),
    description: z
      .string()
      .openapi({ description: 'A short description of the action. Optional - may be null.' }),
    encoding_types: z
      .array(z.string())
      .openapi({
        description:
          'The supported MIME type(s) for an EntryPoint request. Null if not applicable.',
      }),
    http_method: z
      .enum(['GET', 'PUT', 'POST', 'DELETE'])
      .openapi({ description: 'The HTTP method used by the EntryPoint.' }),
    name: z
      .string()
      .openapi({
        description:
          "A word or short phrase to be used as the action's display name. Optional - may be null.",
      }),
    parameters: z
      .array(EntryPointParameterSchema)
      .openapi({
        description: 'Descriptions of the EntryPoint parameters. Null if not applicable.',
      }),
    url: z
      .url()
      .openapi({ description: 'The EntryPoint URL. It will be non-null if url_template is null.' }),
    url_template: z
      .string()
      .openapi({
        description:
          "The EntryPoint's URL template. Only required if the entry point URL is parameterized. Property 'url' will be null if url_template is non-null.",
      }),
  })
  .openapi({
    required: [
      'http_method',
      'url',
      'url_template',
      'name',
      'description',
      'encoding_types',
      'content_types',
      'parameters',
    ],
  })
  .openapi('EntryPoint')

const ActionDescriptionSchema = z
  .object({
    action_id: z.string().openapi({ description: 'A unique one word identifier for the action.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the action.' }),
    entry_point: EntryPointSchema,
  })
  .openapi({ required: ['action_id', 'entry_point'] })
  .openapi('ActionDescription')

const ActionHelpSchema = z
  .object({
    action_id: z.string().openapi({ description: 'A unique one word identifier for the action.' }),
    help_text: z.string().openapi({ description: 'The help text for the action.' }),
    service_id: z
      .string()
      .openapi({ description: 'A unique one word identifier for the service.' }),
  })
  .openapi({ required: ['service_id', 'action_id', 'help_text'] })
  .openapi('ActionHelp')

const ActionHelpResponseSchema = z
  .object({
    api: z.string().openapi({ description: 'The path of the REST API method' }),
    method: z.string().openapi({ description: 'The name of the REST API method' }),
    response: ActionHelpSchema,
    status: z.literal('success').default('success'),
  })
  .openapi({ required: ['status', 'method', 'api', 'response'] })
  .openapi('ActionHelpResponse')

const DescribeActionResponseSchema = z
  .object({
    api: z.string().openapi({ description: 'The path of the REST API method' }),
    method: z.string().openapi({ description: 'The name of the REST API method' }),
    response: ActionDescriptionSchema,
    status: z.literal('success').default('success'),
  })
  .openapi({ required: ['status', 'method', 'api', 'response'] })
  .openapi('DescribeActionResponse')

const ServiceDescriptionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the service.' }),
    import_source_uri: z
      .url()
      .openapi({
        description:
          'The URI of the source service description document used to load the service into OSDB.',
      }),
    service_id: z
      .string()
      .openapi({ description: 'A unique one word identifier for the service.' }),
    service_name: z.string().openapi({ description: 'A word or phrase naming the service.' }),
  })
  .openapi({ required: ['service_id', 'service_name', 'import_source_uri'] })
  .openapi('ServiceDescription')

const DescribeServiceResponseSchema = z
  .object({
    api: z.string().openapi({ description: 'The path of the REST API method' }),
    method: z.string().openapi({ description: 'The name of the REST API method' }),
    response: ServiceDescriptionSchema,
    status: z.literal('success').default('success'),
  })
  .openapi({ required: ['status', 'method', 'api', 'response'] })
  .openapi('DescribeServiceResponse')

const ErrorModelSchema = z
  .object({
    api: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path of the REST API method reporting the error' }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the REST API method reporting the error' }),
    response: z.string().exactOptional().openapi({ description: 'A message describing the error' }),
    status: z.literal('error').default('error').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorModel')

const ExecBodySchema = z
  .object({
    action_specific_property1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value.',
      }),
    action_specific_property2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value.',
      }),
    'osdb:body_data_encoding': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The media type of the data associated with osdb:body_data_raw or osdb:body_data_src_url. In the case of osdb:body_data_raw, this is the media type before base64 encoding.',
      }),
    'osdb:body_data_raw': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input data for the action (e.g. CSV data). The data must be base64 encoded by the client. Alternatively, clients can use osdb:body_data_src_url to supply the input data via a web-accessible document.',
      }),
    'osdb:body_data_src_url': z
      .url()
      .exactOptional()
      .openapi({
        description:
          'URL of a resource containing input data for the action (e.g. CSV data). Clients can instead use osdb:body_data_raw to supply the input data directly.',
      }),
    'osdb:output_type': z
      .enum(['url_only', 'generate_rdf', 'display_rdf'])
      .exactOptional()
      .openapi({
        description:
          'An OSDB-specific parameter controlling the action output type. If omitted, the native action output is returned.',
      }),
    'osdb:response_format': z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Preferred response MIME type. This must be an output MIME type supported natively by the action or, if 'osdb:output_type' is set to 'generate_rdf', a Virtuoso Sponger output format. i.e. 'application/ld+json', 'text/turtle' or 'application/rdf+xml'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('ExecBody')

const ListActionsResponseSchema = z
  .object({
    api: z.string().openapi({ description: 'The path of the REST API method' }),
    method: z.string().openapi({ description: 'The name of the REST API method' }),
    response: z.array(ActionDescriptionSchema),
    status: z.literal('success').default('success'),
  })
  .openapi({ required: ['status', 'method', 'api', 'response'] })
  .openapi('ListActionsResponse')

const ListServicesResponseSchema = z
  .object({
    api: z.string().openapi({ description: 'The path of the REST API method' }),
    method: z.string().openapi({ description: 'The name of the REST API method' }),
    response: z.array(ServiceDescriptionSchema),
    status: z.literal('success').default('success'),
  })
  .openapi({ required: ['status', 'method', 'api', 'response'] })
  .openapi('ListServicesResponse')

const LoginResponseSchema = z
  .object({
    api: z.string().openapi({ description: 'The path of the REST API method' }),
    method: z.string().openapi({ description: 'The name of the REST API method' }),
    response: z
      .object({
        user: z.string().openapi({ description: 'The WebID of the user who has logged in.' }),
      })
      .openapi({ required: ['user'] }),
    status: z.literal('success').default('success'),
  })
  .openapi({ required: ['status', 'method', 'api', 'response'] })
  .openapi('LoginResponse')

const LogoutResponseSchema = z
  .object({
    api: z.string().openapi({ description: 'The path of the REST API method' }),
    method: z.string().openapi({ description: 'The name of the REST API method' }),
    response: z
      .object({
        user: z.string().openapi({ description: 'The WebID of the user who has logged out.' }),
      })
      .openapi({ required: ['user'] }),
    status: z.literal('success').default('success'),
  })
  .openapi({ required: ['status', 'method', 'api', 'response'] })
  .openapi('LogoutResponse')

export const getApiV1ActionsServiceIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/actions/{serviceId}',
  tags: ['OSDB'],
  summary: 'List actions',
  description:
    'Returns an array of action descriptions for the actions supported by the given service',
  operationId: 'listActions',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service ID of the service for which actions are to be listed',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'An array of action descriptions for the actions supported by the given service.',
      content: {
        'application/json': {
          schema: ListActionsResponseSchema,
          example: {
            api: '/osdb/api/v1/actions/:service_id',
            method: 'list_actions',
            response: [
              {
                action_id: 'read',
                description: "List a container's details and contents",
                entry_point: {
                  content_types: ['application/ld+json', 'text/turtle'],
                  description: 'Retrieve a description of an LDP resource or container',
                  encoding_types: null,
                  http_method: 'GET',
                  name: 'LDP Read - Retrieve a resource description',
                  parameters: [
                    {
                      description: 'The URL of an LDPR or LDPC. LDPCs must be terminated by /',
                      display_name: 'Resource URL',
                      parameter_name: 'ldpResourceUri',
                      permitted_values: null,
                      required: 1,
                      type: 'uri',
                    },
                  ],
                  url: null,
                  url_template: '(ldpResourceUri)',
                },
              },
              {
                action_id: 'update',
                description: 'Update an LDP RDF resource',
                entry_point: {
                  content_types: ['text/html'],
                  description: 'Update an RDF resource (LDP-RS) including containers (LDPCs)',
                  encoding_types: ['text/turtle'],
                  http_method: 'PUT',
                  name: 'LDP-RS Update - Update an RDF resource',
                  parameters: [
                    {
                      description: 'The URL of an LDPR or LDPC. LDPCs must be terminated by /',
                      display_name: 'Resource URL',
                      parameter_name: 'ldpResourceUri',
                      permitted_values: null,
                      required: 1,
                      type: 'uri',
                    },
                  ],
                  url: null,
                  url_template: '(ldpResourceUri)',
                },
              },
              {
                action_id: 'delete',
                description: 'Delete an LDP resource',
                entry_point: {
                  content_types: '',
                  description: 'Deletes an LDP resource or container',
                  encoding_types: null,
                  http_method: 'DELETE',
                  name: 'LDP Delete - Delete an LDP resource',
                  parameters: [
                    {
                      description: 'The URL of an LDPR or LDPC. LDPCs must be terminated by /',
                      display_name: 'Resource URL',
                      parameter_name: 'ldpResourceUri',
                      permitted_values: null,
                      required: 1,
                      type: 'uri',
                    },
                  ],
                  url: null,
                  url_template: '(ldpResourceUri)',
                },
              },
              {
                action_id: 'create',
                description: 'Create an LDP RDF resource',
                entry_point: {
                  content_types: ['text/html'],
                  description: 'Create an RDF resource (LDP-RS) including containers (LDPCs)',
                  encoding_types: ['text/turtle'],
                  http_method: 'POST',
                  name: 'LDP-RS Create - Create an RDF resource',
                  parameters: [
                    {
                      description: 'The suggested name (slug) for the new resource',
                      display_name: 'Suggested name',
                      parameter_name: 'Slug',
                      permitted_values: null,
                      required: 1,
                      type: 'header',
                    },
                    {
                      description: 'The URL of an LDPR or LDPC. LDPCs must be terminated by /',
                      display_name: 'Resource URL',
                      parameter_name: 'ldpResourceUri',
                      permitted_values: null,
                      required: 1,
                      type: 'uri',
                    },
                  ],
                  url: null,
                  url_template: '(ldpResourceUri)',
                },
              },
            ],
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getApiV1ActionsServiceIdActionIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/actions/{serviceId}/{actionId}',
  tags: ['OSDB'],
  summary: 'Describe action',
  description: 'Returns a description of a given service action.',
  operationId: 'describeAction',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service ID of the service supporting the action.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      actionId: z
        .string()
        .openapi({
          param: {
            description: 'Action ID of the action to describe.',
            in: 'path',
            name: 'actionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single action description',
      content: {
        'application/json': {
          schema: DescribeActionResponseSchema,
          example: {
            api: '/osdb/api/v1/actions/:service_id/:action_id',
            method: 'describe_action',
            response: {
              action_id: 'products',
              description:
                'Returns information about the Uber products offered at a given location',
              entry_point: {
                content_types: [
                  'application/json',
                  'text/turtle',
                  'application/rdf+xml',
                  'application/ld+json',
                ],
                description:
                  'The Products endpoint returns information about the Uber products offered at a given location. \n    The response includes the display name and other details about each product.\n    \n    This endpoint does not reflect real-time availability of the products. Please use the Time \n    Estimates endpoint to determine real-time availability and ETAs of products.\n\n    In some markets, the list of products returned from this endpoint may vary by the time of \n    day due to time restrictions on when that product may be utilized.\n   ',
                encoding_types: null,
                http_method: 'GET',
                name: 'Products — Uber products at a given location',
                parameters: [
                  {
                    description: 'Longitude component of location',
                    display_name: 'Longitude',
                    parameter_name: 'longitude',
                    permitted_values: null,
                    required: 1,
                    type: 'query',
                  },
                  {
                    description: 'Latitude component of location',
                    display_name: 'Latitude',
                    parameter_name: 'latitude',
                    permitted_values: null,
                    required: 1,
                    type: 'query',
                  },
                ],
                url: 'https://sandbox-api.uber.com/v1/products',
                url_template: 'https://sandbox-api.uber.com/v1/products(?latitude,longitude)',
              },
            },
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const postApiV1ActionsServiceIdActionIdExecRoute = createRoute({
  method: 'post',
  path: '/api/v1/actions/{serviceId}/{actionId}/exec',
  tags: ['OSDB'],
  summary: 'Execute action',
  description:
    'Executes a registered service action and returns any output from the action.\nThe data returned in the POST response body may be: \n* the raw action output, \n* a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET), \n* RDF generated from the action output,\n* a URL to an RDF viewer\'s display of the generated RDF.\n\nAny parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, \'Execute action\' accepts some OSDB-specific parameters.<br/><br/>\n\n**Examples**\n* ```curl -ik -X POST -d \'{ "latitude":"37.7759792", "longitude":"-122.41823" }\' -H \'Content-Type: application/json\' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```  \n* ```curl -ikL -X POST -d \'{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }\' -H \'Content-Type: application/json\' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` \n* ```curl -ikL -X POST -d \'{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }\' -H \'Content-Type: application/json\' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` \n* ```curl -ik -X POST -d \'{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }\' -H \'Content-Type: application/json\' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` \n* ```curl -ik -X POST -d \'{ "q":"skiing", "osdb:output_type": "url_only" }\' -H \'Content-Type: application/json\' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` \n* ```curl -ik -X POST -d \'{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }\' -H \'Content-Type: application/json\' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```',
  operationId: 'executeAction',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service ID of the service supporting the action.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      actionId: z
        .string()
        .openapi({
          param: {
            description: 'Action ID of the action to execute.',
            in: 'path',
            name: 'actionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'Any parameters required by the action are supplied as a JSON object in the request body. The properties of this object depend on the service action being invoked.',
      content: {
        'application/json': {
          schema: ExecBodySchema,
          examples: {
            example1_uber_products: { value: { latitude: '37.7759792', longitude: '-122.41823' } },
          },
        },
      },
    },
  },
  responses: {
    '2XX': { description: 'Response from an OSDB action invocation.', content: {} },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getApiV1ActionsServiceIdActionIdHelpRoute = createRoute({
  method: 'get',
  path: '/api/v1/actions/{serviceId}/{actionId}/help',
  tags: ['OSDB'],
  summary: 'Action help',
  description: 'Returns the help text for a given service action',
  operationId: 'actionHelp',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service ID of the service supporting the action.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      actionId: z
        .string()
        .openapi({
          param: {
            description: 'Action ID of the action for which help text is being requested.',
            in: 'path',
            name: 'actionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Action help text',
      content: {
        'application/json': {
          schema: ActionHelpResponseSchema,
          example: {
            api: '/osdb/api/v1/actions/:service_id/:action_id/help',
            method: 'action_help',
            response: {
              action_id: 'search',
              help_text:
                "\nAction options:\n\n-s, --same_as [same_as]\n\tEnables owl:sameAs inferencing for facet search\n\tRequired: no\n\tPermitted values: yes\n-v, --view_type [view_type]\n\tSets the default view orientation\n\tRequired: no\n\tPermitted values: entity-types, attribute-names\n-l, --limit [limit]\n\tLimits the number of result set entities returned\n\tRequired: no\n-o, --offset [offset]\n\tSets the result set page size for scrolling\n\tRequired: no\n-q, --q <q>\n\tA word or phrase to be used for the Facet free text search. Multiple words should be delimited by '+'\n\tRequired: yes\n-u, --url_only [url_only]\n\tReturn only the action URL, not the action results\n\tRequired: no\n-r, --response_format [response_format]\n\tSets the response media type through an Accept header.\n\tRequired: no\n\tPermitted values: application/json, application/rdf+xml, text/html, text/turtle\n-t, --quality_values [quality_values]\n\tQuality value string. e.g. application/json;q=1.0,text/turtle;q=0.8,*/*;q=0.5. \n\t--response_format takes precedence.\n\tRequired: no\n",
              service_id: 'facet',
            },
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getApiV1LoginRoute = createRoute({
  method: 'get',
  path: '/api/v1/login',
  tags: ['OSDB'],
  summary: 'Login',
  description:
    'Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid',
  operationId: 'login',
  responses: {
    200: {
      description: 'Confirmation of a successful OSDB login.',
      content: {
        'application/json': {
          schema: LoginResponseSchema,
          example: {
            api: '/osdb/api/v1/login',
            method: 'login',
            response: {
              user: 'http://ods-qa.openlinksw.com:8896/DAV/home/nobody/cmsb_ex_webid_170223.ttl#identity',
            },
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getApiV1LogoutRoute = createRoute({
  method: 'get',
  path: '/api/v1/logout',
  tags: ['OSDB'],
  summary: 'Logout',
  description: 'Logs a user out of the OSDB server, ending their OSDB session',
  operationId: 'logout',
  responses: {
    200: {
      description: 'Confirmation of a successful OSDB logout.',
      content: {
        'application/json': {
          schema: LogoutResponseSchema,
          example: {
            api: '/osdb/api/v1/logout',
            method: 'logout',
            response: {
              user: 'http://ods-qa.openlinksw.com:8896/DAV/home/nobody/cmsb_ex_webid_170223.ttl#identity',
            },
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getApiV1ServicesRoute = createRoute({
  method: 'get',
  path: '/api/v1/services',
  tags: ['OSDB'],
  summary: 'List services',
  description: 'Returns descriptions of all services registered with the OSDB server.',
  operationId: 'listServices',
  responses: {
    200: {
      description:
        'An array of service descriptions for all services registered with the OSDB server',
      content: {
        'application/json': {
          schema: ListServicesResponseSchema,
          example: {
            api: '/osdb/api/v1/services',
            method: 'list_services',
            response: [
              {
                description: 'Host-independent Linked Data Platform service',
                import_source_uri:
                  'http://ods-qa.openlinksw.com:8896/DAV/home/nobody/ldp_svc.host_independent.ttl',
                service_id: 'ldp_generic',
                service_name: 'LDP generic',
              },
              {
                description: null,
                import_source_uri:
                  'http://ods-qa.openlinksw.com:8896/DAV/home/nobody/fct_svc.ki.170103.cmsb.ttl',
                service_id: 'anonymous_facet',
                service_name: 'anonymous_facet',
              },
            ],
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const postApiV1ServicesRoute = createRoute({
  method: 'post',
  path: '/api/v1/services',
  tags: ['OSDB'],
  summary: 'Load service',
  description: 'Loads a service description into the OSDB Service Registry',
  operationId: 'loadService',
  request: {
    body: {
      description: 'Service to register with OSDB',
      content: {
        'application/json': {
          schema: z
            .object({
              service_description_url: z
                .string()
                .openapi({
                  description:
                    'The URL of the resource containing the service description to load.',
                }),
              service_moniker: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Service ID to be used to uniquely identify the service. (Optional: Required for anonymous services or to override the service name in the service description.)',
                }),
            })
            .openapi({ required: ['service_description_url'] }),
          example: {
            service_description_url:
              'http://ods-qa.openlinksw.com:8896/DAV/home/nobody/csv_extractor_svc.ods-qa.170109.ttl',
            service_moniker: 'csv_extractor',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'loadService response',
      content: {
        'application/json': {
          schema: z
            .object({
              api: z.string().openapi({ description: 'The path of the REST API method' }),
              method: z.string().openapi({ description: 'The name of the REST API method' }),
              response: z.string().openapi({ description: 'Confirmation message' }),
              status: z.literal('success').default('success'),
            })
            .openapi({ required: ['status', 'method', 'api', 'response'] }),
          example: {
            api: '/osdb/api/v1/services',
            method: 'load_service',
            response: 'Loaded service description',
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const getApiV1ServicesServiceIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/services/{serviceId}',
  tags: ['OSDB'],
  summary: 'Describe service',
  description: 'Returns a description of a given service',
  operationId: 'describeService',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service ID of the service to describe.',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A single service description',
      content: {
        'application/json': {
          schema: DescribeServiceResponseSchema,
          example: {
            api: '/osdb/api/v1/services/:service_id',
            method: 'describe_service',
            response: {
              description: 'Host-independent Linked Data Platform service',
              import_source_uri:
                'http://ods-qa.openlinksw.com:8896/DAV/home/nobody/ldp_svc.host_independent.ttl',
              service_id: 'ldp_generic',
              service_name: 'LDP generic',
            },
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})

export const deleteApiV1ServicesServiceIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/services/{serviceId}',
  tags: ['OSDB'],
  summary: 'Unload service',
  description: 'Removes a service description from the OSDB Service Registry',
  operationId: 'unloadService',
  request: {
    params: z.object({
      serviceId: z
        .string()
        .openapi({
          param: {
            description: 'Service ID of the service to be unloaded',
            in: 'path',
            name: 'serviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'unloadService response',
      content: {
        'application/json': {
          schema: z
            .object({
              api: z.string().openapi({ description: 'The path of the REST API method' }),
              method: z.string().openapi({ description: 'The name of the REST API method' }),
              response: z.string().openapi({ description: 'Confirmation message' }),
              status: z.literal('success').default('success'),
            })
            .openapi({ required: ['status', 'method', 'api', 'response'] }),
          example: {
            api: '/osdb/api/v1/services',
            method: 'unload_service',
            response: 'Unloaded service csv_transformer from the Service Registry',
            status: 'success',
          },
        },
      },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorModelSchema } },
    },
  },
})
