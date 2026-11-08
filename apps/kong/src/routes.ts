import { createRoute, z } from '@hono/zod-openapi'

const UnauthorizedErrorSchema = z
  .object({ status: z.int(), message: z.string() })
  .openapi({ required: ['status', 'message'] })
  .openapi('UnauthorizedError')

const CACertificateSchema = z
  .object({
    cert: z
      .string()
      .exactOptional()
      .openapi({
        description: 'PEM-encoded public certificate of the CA.',
        example: '"-----BEGIN CERTIFICATE-----..."',
      }),
    cert_digest: z
      .string()
      .exactOptional()
      .openapi({
        description: 'SHA256 hex digest of the public certificate.',
        example: 'c641e28d77e93544f2fa87b2cf3f3d51...',
      }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.', example: 1422386534 }),
    id: z.uuid().exactOptional().openapi({ example: '04fbeacf-a9f1-4a5d-ae4a-b0407445db3f' }),
    tags: z
      .array(z.string().openapi({ example: '["user-level", "low-priority"]' }))
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Certificate for grouping and filtering.',
      }),
  })
  .openapi({
    description:
      'A CA certificate object represents a trusted CA. These objects are used by Kong to verify the validity of a client or server certificate. CA Certificates can be both tagged and filtered by tags.',
    example: {
      cert: '-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----',
      id: 'b2f34145-0343-41a4-9602-4c69dec2f260',
    },
    title: 'CA-Certificate',
    'x-examples': {
      '200 - list of multiple certificates': {
        data: [
          {
            id: '43429efd-b3a5-4048-94cb-5cc4029909bb',
            created_at: 1422386534,
            cert: '-----BEGIN CERTIFICATE-----...',
            cert_digest: 'c641e28d77e93544f2fa87b2cf3f3d51...',
            tags: ['user-level', 'low-priority'],
          },
          {
            id: 'd26761d5-83a4-4f24-ac6c-cff276f2b79c',
            created_at: 1422386534,
            cert: '-----BEGIN CERTIFICATE-----...',
            cert_digest: 'c641e28d77e93544f2fa87b2cf3f3d51...',
            tags: ['admin', 'high-priority', 'critical'],
          },
        ],
        next: 'http://localhost:8001/ca_certificates?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
      },
    },
    required: [],
  })
  .openapi('CACertificate')

const CertificateSchema = z
  .object({
    cert: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM-encoded public certificate chain of the SSL key This field is referenceable and can be stored in a vault. References must follow a [specific format](/gateway/latest/plan-and-deploy/security/secrets-management/reference-format).',
        example: '"-----BEGIN CERTIFICATE-----\\ncertificate-content\\n-----END CERTIFICATE-----"',
      }),
    cert_alt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM-encoded public certificate chain of the alternate SSL key pair. This should only be set if you have both RSA and ECDSA types of certificate available and would like Kong to prefer serving using ECDSA certs.',
        example: '"-----BEGIN CERTIFICATE-----..."',
      }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.', example: 1422386534 }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The UUID representation of the certificate object.',
        example: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM-encoded private key of the SSL key pair. This field is _referenceable_, which means it can be securely stored as a [secret](/gateway/latest/plan-and-deploy/security/secrets-management/getting-started) in a vault. References must follow a [specific format](/gateway/latest/plan-and-deploy/security/secrets-management/reference-format).',
        example: ' "-----BEGIN RSA PRIVATE KEY-----..."',
      }),
    key_alt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM-encoded private key of the alternate SSL key pair. This should only be set if you have both RSA and ECDSA types of certificate available and would like Kong to prefer serving using ECDSA certs when client advertises support for it. This field is _referenceable_, which means it can be securely stored as a [secret](/gateway/latest/plan-and-deploy/security/secrets-management/getting-started) in a vault. References must follow a [specific format](/gateway/latest/plan-and-deploy/security/secrets-management/reference-format).',
        example: '"-----BEGIN EC PRIVATE KEY-----..."',
      }),
    tags: z
      .array(z.string().openapi({ example: '["user-level", "low-priority"]' }))
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Certificate for grouping and filtering.',
      }),
    snis: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of SNIs associated with the certificate.\n' }),
  })
  .openapi({
    description:
      'A certificate object represents a public certificate. These fields are _referenceable_, and can be stored as [secrets](http://docs.konqhq.com/gateway/latest/plan-and-deploy/security/secrets-management/getting-started) in a vault. References must follow a [specific format](/gateway/latest/plan-and-deploy/security/secrets-management/reference-format).',
    example: {
      cert: '-----BEGIN CERTIFICATE-----\ncertificate-content\n-----END CERTIFICATE-----',
      id: 'b2f34145-0343-41a4-9602-4c69dec2f269',
      key: '-----BEGIN PRIVATE KEY-----\nprivate-key-content\n-----END PRIVATE KEY-----',
    },
    title: 'Certificate',
    required: [],
  })
  .openapi('Certificate')

const ConsumerSchema = z
  .object({
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.' }),
    custom_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database. You must send either this field or `username` with the request.',
      }),
    id: z.string().exactOptional(),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Consumer for grouping and filtering.',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique username of the Consumer. You must send either this field or `custom_id` with the request.',
      }),
  })
  .openapi({
    description:
      'The Consumer object represents a consumer - or a user - of a service. You can either rely on Kong as the primary datastore, or you can map the consumer list with your database to keep consistency between Kong and your existing primary datastore.',
    example: {
      custom_id: '4200',
      id: '8a388226-80e8-4027-a486-25e4f7db5d21',
      tags: ['silver-tier'],
      username: 'bob-the-builder',
    },
    title: 'Consumer',
    required: [],
  })
  .openapi('Consumer')

const FilterChainSchema = z
  .object({
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the filter chain is applied.' }),
    filters: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.',
              }),
            config: z
              .xor([z.string(), z.looseObject({})])
              .exactOptional()
              .openapi({
                description:
                  'The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field accepts either a raw string, or a JSON object. A raw string is passed uninterpreted to the filter, to be validated at request time. If a JSON object is used, there must be a metadata file called `my-filter.meta.json` in the same folder as your `my-filter.wasm` file. The metadata file must contain an object with a field `"config_schema"`, and its value must the JSON Schema for the filter configuration. This schema will be used for validating the configuration upon insertion in the filter chain, ahead of execution.',
              }),
            enabled: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether the filter is to be applied.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'An array of filter definitions that will be executed in order.' }),
    id: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The name of the filter chain.' }),
    route: z
      .strictObject({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.',
        required: [],
      }),
    service: z
      .strictObject({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.',
        required: [],
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Filter Chain for grouping and filtering.',
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was last updated.' }),
  })
  .openapi({
    description:
      'A Filter Chain entity represents a list of one or more WebAssembly filters that will be executed during the HTTP request/response lifecycle.',
    example: {
      id: 'ce44eef5-41ed-47f6-baab-f725cecf98c7',
      name: 'my-filter-chain',
      created_at: 1422386534,
      updated_at: 1422386534,
      enabled: true,
      route: null,
      service: '20487393-41ed-47f6-93a8-3407cade2002',
      filters: [
        { name: 'go-rate-limiting', enabled: true, config: '{ "minute": 30 }' },
        {
          name: 'rust-response-transformer',
          enabled: true,
          config: '{ "remove_header": "X-Example" }',
        },
      ],
      tags: ['my-tag'],
    },
    title: 'Filter Chain',
    required: [],
  })
  .openapi('FilterChain')

const KeySchema = z
  .object({
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.', example: 1422386534 }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        example: '24D0DBDA-671C-11ED-BA0B-EF1DCCD3725F',
        description: 'The unique identifier or the prefix of the Vault to delete.',
      }),
    jwk: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A JSON Web Key represented as a string.',
        example: '{\\"alg\\":\\"RSA\\",  \\"kid\\": \\"42\\",  ...}',
      }),
    kid: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for a key.', example: '"42"' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name to associate with the given keys.', example: 'a-key' }),
    pem: z
      .object({
        private_key: z.string().exactOptional().openapi({ example: '"-----BEGIN"' }),
        public_key: z.string().exactOptional().openapi({ example: '"-----BEGIN"' }),
      })
      .exactOptional()
      .openapi({ description: 'A keypair in PEM format.', required: [] }),
    set: z
      .strictObject({
        id: z.string().exactOptional().openapi({ example: '46CA83EE-671C-11ED-BFAB-2FE47512C77A' }),
      })
      .exactOptional()
      .openapi({
        description: 'The id (an UUID) of the key-set with which to associate the key.',
        required: [],
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Key for grouping and filtering.',
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Unix epoch when the resource was last updated.',
        example: 1422386534,
      }),
  })
  .openapi({
    description:
      'A Key object holds a representation of asymmetric keys in various formats. When Kong or a Kong plugin requires a specific public or private key to perform certain operations, it can use this entity.',
    example: {
      id: 'd958f66b-8e99-44d2-b0b4-edd5bbf24658',
      jwk: '{"alg":"RSA",  "kid": "42",  ...}',
      kid: '42',
      name: 'a-key',
      pem: { private_key: '-----BEGIN', public_key: '-----BEGIN' },
      set: { id: 'b86b331c-dcd0-4b3e-97ce-47c5a9543031' },
    },
    title: 'Key',
    required: [],
  })
  .openapi('Key')

const KeySetSchema = z
  .object({
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        example: '24D0DBDA-671C-11ED-BA0B-EF1DCCD3725F',
        description: 'The unique identifier or the name of the Key to delete.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name to associate with the given key-set.',
        example: '"example-key-set"',
      }),
    tags: z
      .array(z.string().openapi({ example: '["google-keys", "mozilla-keys"]' }))
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Key for grouping and filtering',
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was last updated.' }),
  })
  .openapi({
    title: 'Key-set',
    description:
      'A Key Set object holds a collection of asymmetric key objects. This entity allows to logically group keys by their purpose.',
    'x-examples': {
      'Example 1': {
        id: 'b58c7d9d-e54f-444c-b24d-cdfc4159f61e',
        name: 'example-key-set',
        tags: ['idp-keys'],
      },
    },
    required: [],
  })
  .openapi('KeySet')

const PluginSchema = z
  .object({
    config: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The configuration properties for the Plugin which can be found on the plugins documentation page in the [Kong Hub](https://docs.konghq.com/hub/).',
      }),
    consumer: z
      .strictObject({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.',
        required: [],
      }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.' }),
    enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Whether the plugin is applied.' }),
    id: z.string().exactOptional(),
    instance_name: z.string().exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Plugin thats going to be added. Currently, the Plugin must be installed in every Kong instance separately.',
      }),
    protocols: z
      .array(z.string())
      .default(['grpc', 'grpcs', 'http', 'https'])
      .exactOptional()
      .openapi({
        description:
          'A list of the request protocols that will trigger this plugin. The default value, as well as the possible values allowed on this field, may change depending on the plugin type. For example, plugins that only work in stream mode will only support `"tcp"` and `"tls"`.',
      }),
    route: z
      .strictObject({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.',
        required: [],
      }),
    service: z
      .strictObject({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service. Leave unset for the plugin to activate regardless of the service being matched.',
        required: [],
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Plugin for grouping and filtering.',
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was last updated.' }),
  })
  .openapi({
    description:
      'A Plugin entity represents a plugin configuration that will be executed during the HTTP request/response lifecycle.',
    example: {
      config: {
        anonymous: null,
        hide_credentials: false,
        key_in_body: false,
        key_in_header: true,
        key_in_query: true,
        key_names: ['apikey'],
        run_on_preflight: true,
      },
      enabled: true,
      id: '3fd1eea1-885a-4011-b986-289943ff8177',
      name: 'key-auth',
      protocols: ['grpc', 'grpcs', 'http', 'https'],
    },
    title: 'Plugin',
    required: [],
  })
  .openapi('Plugin')

const RouteSchema = z
  .object({
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.' }),
    destinations: z
      .array(z.object({ '': z.any().exactOptional() }).openapi({ required: [] }))
      .exactOptional()
      .openapi({
        description:
          'A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".',
      }),
    headers: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'One or more lists of values indexed by header name that will cause this route to match if present in the request. The `Host` header cannot be used with this hosts should be specified using the `hosts` attribute. When `headers` contains only one value and that value starts with the special prefix `~*`, the value is interpreted as a regular expression.',
      }),
    hosts: z
      .array(z.string().openapi({ example: '"foo.example.com"' }))
      .exactOptional()
      .openapi({
        description:
          'A list of domain names that match this route. Note that the hosts value is case sensitive.',
      }),
    https_redirect_status_code: z
      .int()
      .default(426)
      .exactOptional()
      .openapi({
        description:
          'The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`. `Location` header is injected by Kong if the field is set to 301, 302, 307 or 308. This config applies only if the route is configured to only accept the `https` protocol.',
      }),
    id: z.string().exactOptional().openapi({ example: '56c4566c-14cc-4132-9011-4139fcbbe50a' }),
    methods: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of HTTP methods that match this route.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".',
      }),
    path_handling: z
      .string()
      .default('v0')
      .exactOptional()
      .openapi({
        description:
          'Controls how the service path, route path and requested path are combined when sending a request to the upstream. See above for a detailed description of each behavior.',
      }),
    paths: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of paths that match this route.' }),
    preserve_host: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When matching a route via one of the `hosts` domain names, use the request `Host` header in the upstream request headers. If set to `false`, the upstream `Host` header will be that of the services `host`.',
      }),
    protocols: z
      .array(z.string())
      .default(['http', 'https'])
      .exactOptional()
      .openapi({
        description:
          'An array of the protocols this route should allow. See the [route Object](#route-object) section for a list of accepted protocols. When set to only `"https"`, HTTP requests are answered with an upgrade error. When set to only `"http"`, HTTPS requests are answered with an error.',
      }),
    regex_priority: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same `regex_priority`, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).',
      }),
    request_buffering: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding.',
      }),
    response_buffering: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding.',
      }),
    service: z
      .strictObject({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'The service this route is associated to. This is where the route proxies traffic to.',
        required: [],
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The route expression used for advanced routing scenarios. This field is used to evaluate route matches based on complex criteria beyond the standard routing fields.',
      }),
    priority: z
      .int()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'A number used to specify the matching order for expression routes. The higher the `priority`, the sooner a route will be evaluated. This field is ignored unless `expression` field is set. The value must be between 0 and 2^46 - 1.',
      }),
    snis: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of SNIs that match this route when using stream routing.' }),
    sources: z
      .array(z.object({ '': z.any().exactOptional() }).openapi({ required: [] }))
      .exactOptional()
      .openapi({
        description:
          'A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".',
      }),
    strip_path: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'When matching a route via one of the `paths`, strip the matching prefix from the upstream request URL.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the route for grouping and filtering.',
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was last updated.' }),
  })
  .openapi({
    description:
      'Route entities define rules to match client requests. Every request matching a given route will be proxied to its associated service.',
    example: {
      hosts: ['foo.example.com', 'bar.example.com'],
      id: '56c4566c-14cc-4132-9011-4139fcbbe50a',
      name: 'example-route',
      paths: ['/v1', '/v2'],
      service: { id: 'bd380f99-659d-415e-b0e7-72ea05df3218' },
    },
    title: 'Route',
    required: [],
  })
  .openapi('Route')

const SNISchema = z
  .object({
    certificate: z
      .strictObject({
        id: z.string().exactOptional().openapi({ example: '147f5ef0-1ed6-4711-b77f-489262f8bff7' }),
      })
      .exactOptional()
      .openapi({
        description:
          'The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.',
        required: [],
      }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.', example: 1422386534 }),
    id: z.string().exactOptional().openapi({ example: 'b87eb55d-69a1-41d2-8653-8d706eecefc0' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The SNI name to associate with the given certificate.',
        example: 'my-sni',
      }),
    tags: z
      .array(z.string().openapi({ example: 'user-level, enterprise' }))
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the SNIs for grouping and filtering.',
      }),
  })
  .openapi({
    description:
      'An SNI object represents a many-to-one mapping of hostnames to a certificate. That is, a certificate object can have many hostnames associated with it; when Kong receives an SSL request, it uses the SNI field in the Client Hello to lookup the certificate object based on the SNI associated with the certificate.',
    example: {
      certificate: { id: 'bd380f99-659d-415e-b0e7-72ea05df3218' },
      id: '36c4566c-14cc-4132-9011-4139fcbbe50a',
      name: 'some.example.org',
    },
    required: [],
  })
  .openapi('SNI')

const ServiceSchema = z
  .object({
    ca_certificates: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Array of `CA Certificate` object UUIDs that are used to build the trust store while verifying upstream server's TLS certificate. If set to `null` when Nginx default is respected. If default CA list in Nginx are not specified and TLS verification is enabled, then handshake with upstream server will always fail (because no CA are trusted).",
      }),
    client_certificate: z
      .strictObject({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Certificate to be used as client certificate while TLS handshaking to the upstream server.',
        required: [],
      }),
    connect_timeout: z
      .int()
      .default(60000)
      .exactOptional()
      .openapi({
        description:
          'The timeout in milliseconds for establishing a connection to the upstream server.',
      }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.', example: 1422386534 }),
    enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Whether the service is active. If set to `false`, the proxy behavior will be as if any routes attached to it do not exist (404).',
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The host of the upstream server. Note that the host value is case sensitive.',
      }),
    id: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The service name.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to be used in requests to the upstream server.' }),
    port: z.int().default(80).exactOptional().openapi({ description: 'The upstream server port.' }),
    protocol: z
      .string()
      .default('http')
      .exactOptional()
      .openapi({ description: 'The protocol used to communicate with the upstream.' }),
    read_timeout: z
      .int()
      .default(60000)
      .exactOptional()
      .openapi({
        description:
          'The timeout in milliseconds between two successive read operations for transmitting a request to the upstream server.',
      }),
    retries: z
      .int()
      .default(5)
      .exactOptional()
      .openapi({ description: 'The number of retries to execute upon failure to proxy.' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the service for grouping and filtering.',
      }),
    tls_verify: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to enable verification of upstream server TLS certificate. If set to `null`, then the Nginx default is respected.',
      }),
    tls_verify_depth: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Maximum depth of chain while verifying Upstream server's TLS certificate. If set to `null`, then the Nginx default is respected.'",
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was last updated.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Helper field to set `protocol`, `host`, `port` and `path` using a URL. This field is write-only and is not returned in responses.',
      }),
    write_timeout: z
      .int()
      .default(60000)
      .exactOptional()
      .openapi({
        description:
          'The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server.',
      }),
  })
  .openapi({
    description:
      'service entities are abstractions of upstream services. The main attribute of a service is its URL which can be set as a single string or by specifying the `protocol`, `host`, `port` and `path` individually.',
    example: {
      host: 'example.internal',
      id: '49fd316e-c457-481c-9fc7-8079153e4f3c',
      name: 'example-service',
      path: '/',
      port: 80,
      protocol: 'http',
    },
    'x-examples': {
      'Example 1': {
        id: '9748f662-7711-4a90-8186-dc02f10eb0f5',
        created_at: 1422386534,
        updated_at: 1422386534,
        name: 'my-service',
        retries: 5,
        protocol: 'http',
        host: 'example.com',
        port: 80,
        path: '/some_api',
        connect_timeout: 60000,
        write_timeout: 60000,
        read_timeout: 60000,
        tags: ['user-level', 'low-priority'],
        client_certificate: { id: '4e3ad2e4-0bc4-4638-8e34-c84a417ba39b' },
        tls_verify: true,
        tls_verify_depth: null,
        ca_certificates: [
          '4e3ad2e4-0bc4-4638-8e34-c84a417ba39b',
          '51e77dc2-8f3e-4afa-9d0e-0e3bbbcfd515',
        ],
        enabled: true,
      },
    },
    title: 'Service',
    required: [],
  })
  .openapi('Service')

const TargetSchema = z
  .object({
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.', example: 1422386534 }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        example: '173a6cee-90d1-40a7-89cf-0329eca780a6',
        description:
          'The unique identifier or the name of the upstream for which to update the target.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Target for grouping and filtering.',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target address (ip or hostname) and port. If the hostname resolves to an SRV record, the `port` value will be overridden by the value from the DNS record.',
      }),
    upstream: z
      .strictObject({
        id: z.string().exactOptional().openapi({ example: 'bdab0e47-4e37-4f0b-8fd0-87d95cc4addc' }),
      })
      .exactOptional()
      .openapi({
        description:
          'The unique identifier or the name of the upstream for which to update the target.',
        required: [],
      }),
    weight: z
      .int()
      .default(100)
      .exactOptional()
      .openapi({
        description:
          'The weight this target gets within the upstream loadbalancer (`0`-`65535`). If the hostname resolves to an SRV record, the `weight` value will be overridden by the value from the DNS record.',
        example: 100,
      }),
  })
  .openapi({
    description:
      'A target is an ip address/hostname with a port that identifies an instance of a backend service. Every upstream can have many targets, and the targets can be dynamically added, modified, or deleted. Changes take effect on the fly. To disable a target, post a new one with `weight=0`; alternatively, use the `DELETE` convenience method to accomplish the same. The current target object definition is the one with the latest `created_at`.',
    example: {
      id: '089292a7-ba3d-4d88-acf0-97b4b2e2621a',
      target: '203.0.113.42',
      upstream: { id: '5f1d7e76-2fed-4806-a6af-869984f025cb' },
      weight: 100,
    },
    'x-examples': {
      'Example 1': {
        id: '173a6cee-90d1-40a7-89cf-0329eca780a6',
        created_at: 1422386534,
        upstream: { id: 'bdab0e47-4e37-4f0b-8fd0-87d95cc4addc' },
        target: 'example.com:8000',
        weight: 100,
        tags: ['user-level', 'low-priority'],
      },
    },
    required: [],
  })
  .openapi('Target')

const UpstreamSchema = z
  .object({
    algorithm: z
      .string()
      .default('round-robin')
      .exactOptional()
      .openapi({ description: 'Which load balancing algorithm to use.' }),
    client_certificate: z
      .strictObject({ id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'If set, the certificate to be used as client certificate while TLS handshaking to the upstream server.',
        required: [],
      }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.' }),
    hash_fallback: z
      .string()
      .default('none')
      .exactOptional()
      .openapi({
        description:
          'What to use as hashing input if the primary `hash_on` does not return a hash (eg. header is missing, or no Consumer identified). Not available if `hash_on` is set to `cookie`.',
      }),
    hash_fallback_header: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The header name to take the value from as hash input. Only required when `hash_fallback` is set to `header`.',
      }),
    hash_fallback_query_arg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the query string argument to take the value from as hash input. Only required when `hash_fallback` is set to `query_arg`.',
      }),
    hash_fallback_uri_capture: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the route URI capture to take the value from as hash input. Only required when `hash_fallback` is set to `uri_capture`.',
      }),
    hash_on: z
      .string()
      .default('none')
      .exactOptional()
      .openapi({
        description:
          'What to use as hashing input. Using `none` results in a weighted-round-robin scheme with no hashing.',
      }),
    hash_on_cookie: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cookie name to take the value from as hash input. Only required when `hash_on` or `hash_fallback` is set to `cookie`. If the specified cookie is not in the request, Kong will generate a value and set the cookie in the response.',
      }),
    hash_on_cookie_path: z
      .string()
      .default('/')
      .exactOptional()
      .openapi({
        description:
          'The cookie path to set in the response headers. Only required when `hash_on` or `hash_fallback` is set to `cookie`.',
      }),
    hash_on_header: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The header name to take the value from as hash input. Only required when `hash_on` is set to `header`.',
      }),
    hash_on_query_arg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the query string argument to take the value from as hash input. Only required when `hash_on` is set to `query_arg`.',
      }),
    hash_on_uri_capture: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the route URI capture to take the value from as hash input. Only required when `hash_on` is set to `uri_capture`.',
      }),
    healthchecks: z
      .object({
        active: z
          .object({
            concurrency: z.int().default(10).exactOptional(),
            headers: z.looseObject({}).exactOptional(),
            healthy: z
              .object({
                http_statuses: z.array(z.int()).default([200, 302]).exactOptional(),
                interval: z.number().default(0).exactOptional(),
                successes: z.int().default(0).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            http_path: z.string().default('/').exactOptional(),
            https_sni: z.string().exactOptional(),
            https_verify_certificate: z.boolean().default(true).exactOptional(),
            timeout: z.number().default(1).exactOptional(),
            type: z.string().default('http').exactOptional(),
            unhealthy: z
              .object({
                http_failures: z.int().default(0).exactOptional(),
                http_statuses: z
                  .array(z.int())
                  .default([429, 404, 500, 501, 502, 503, 504, 505])
                  .exactOptional(),
                interval: z.number().default(0).exactOptional(),
                tcp_failures: z.int().default(0).exactOptional(),
                timeouts: z.int().default(0).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        passive: z
          .object({
            healthy: z
              .object({
                http_statuses: z
                  .array(z.int())
                  .default([
                    200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305,
                    306, 307, 308,
                  ])
                  .exactOptional(),
                successes: z.int().default(0).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            type: z.string().default('http').exactOptional(),
            unhealthy: z
              .object({
                http_failures: z.int().default(0).exactOptional(),
                http_statuses: z.array(z.int()).default([429, 500, 503]).exactOptional(),
                tcp_failures: z.int().default(0).exactOptional(),
                timeouts: z.int().default(0).exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        threshold: z.number().default(0).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    host_header: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hostname to be used as `Host` header when proxying requests through Kong.',
      }),
    id: z.string().exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This is a hostname, which must be equal to the `host` of a service.',
      }),
    slots: z
      .int()
      .default(10000)
      .exactOptional()
      .openapi({
        description:
          'The number of slots in the load balancer algorithm. If `algorithm` is set to `round-robin`, this setting determines the maximum number of slots. If `algorithm` is set to `consistent-hashing`, this setting determines the actual number of slots in the algorithm. Accepts an integer in the range `10`-`65536`.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Upstream for grouping and filtering.',
      }),
    use_srv_name: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If set, the balancer will use SRV hostname(if DNS Answer has SRV record) as the proxy upstream `Host`.',
      }),
  })
  .openapi({
    description:
      'The upstream object represents a virtual hostname and can be used to loadbalance incoming requests over multiple services (targets). So for example an upstream named `service.v1.xyz` for a service object whose `host` is `service.v1.xyz`. Requests for this service would be proxied to the targets defined within the upstream. An upstream also includes a health check, which is able to enable and disable targets based on their ability or inability to serve requests. The configuration for the health checker is stored in the upstream object, and applies to all of its targets.',
    example: {
      algorithm: 'round-robin',
      hash_fallback: 'none',
      hash_on: 'none',
      hash_on_cookie_path: '/',
      healthchecks: {
        active: {
          concurrency: 10,
          healthy: { http_statuses: [200, 302], interval: 0, successes: 0 },
          http_path: '/',
          https_verify_certificate: true,
          timeout: 1,
          type: 'http',
          unhealthy: {
            http_failures: 0,
            http_statuses: [429, 404, 500, 501, 502, 503, 504, 505],
            interval: 0,
            tcp_failures: 0,
            timeouts: 0,
          },
        },
        passive: {
          healthy: {
            http_statuses: [
              200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306,
              307, 308,
            ],
            successes: 0,
          },
          type: 'http',
          unhealthy: {
            http_failures: 0,
            http_statuses: [429, 500, 503],
            tcp_failures: 0,
            timeouts: 0,
          },
        },
        threshold: 0,
      },
      id: '6eed5e9c-5398-4026-9a4c-d48f18a2431e',
      name: 'api.example.internal',
      slots: 10000,
    },
    required: [],
  })
  .openapi('Upstream')

const VaultSchema = z
  .object({
    config: z
      .object({
        prefix: z
          .enum(['vaults.config.resurrect_ttl', 'vaults.config.neg_ttl', 'vaults.config.ttl'])
          .exactOptional()
          .openapi({
            description:
              'The unique prefix (or identifier) for this Vault configuration. The prefix is used to load the right Vault configuration and implementation when referencing secrets with the other entities.',
            required: ['prefix'],
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "The configuration properties for the Vault which can be found on the [vaults' documentation page](https://docs.konghq.com/gateway/latest/kong-enterprise/secrets-management/advanced-usage/).",
        required: [],
      }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unix epoch when the resource was created.', example: 1422386534 }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the Vault entity.',
        example: 'This vault is used to retrieve redis database access credentials',
      }),
    id: z.string().exactOptional().openapi({ example: 'B2A30E8F-C542-49CF-8015-FB674987D1A5' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Vault thats going to be added. Currently, the Vault implementation must be installed in every Kong instance.',
        example: 'env',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique prefix (or identifier) for this Vault configuration. The prefix is used to load the right Vault configuration and implementation when referencing secrets with the other entities.',
        example: 'env',
      }),
    tags: z
      .array(z.string().openapi({ example: 'database-credentials' }))
      .exactOptional()
      .openapi({
        description:
          'An optional set of strings associated with the Vault for grouping and filtering.',
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Unix epoch when the resource was last updated.',
        example: 1422386534,
      }),
  })
  .openapi({
    description:
      'Vault entities are used to configure different Vault connectors. Examples of Vaults are Environment Variables, HashiCorp Vault and AWS Secrets Manager. Configuring a Vault allows referencing the secrets with other entities. For example a certificate entity can store a reference to a certificate and key, stored in a vault, instead of storing the certificate and key within the entity. This allows a proper separation of secrets and configuration and prevents secret sprawl.',
    example: {
      config: { prefix: 'vaults.config.resurrect_ttl' },
      description: 'environment variable based vault',
      id: '2747d1e5-8246-4f65-a939-b392f1ee17f8',
      name: 'env',
      tags: ['foo', 'bar'],
    },
    'x-examples': {
      'Example Vault': {
        id: 'B2A30E8F-C542-49CF-8015-FB674987D1A5',
        prefix: 'env',
        name: 'env',
        description: 'This vault is used to retrieve redis database access credentials',
        config: { prefix: 'SSL_' },
        created_at: 1422386534,
        updated_at: 1422386534,
        tags: ['database-credentials', 'data-plane'],
      },
    },
    required: [],
  })
  .openapi('Vault')

const FilterChainsSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier or the name attribute of the route that should be associated to the newly created filter chain.',
        example: 'ce44eef5-41ed-47f6-baab-f725cecf98c7',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the filter chain.\n', example: 'my-chain' }),
    created_at: z.int().exactOptional().openapi({ example: 1422386534 }),
    updated_at: z.int().exactOptional().openapi({ example: 1422386534 }),
    enabled: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Whether the filter chain is applied. Default: true.\n' }),
    route: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The route to which this chain is applied. A filter chain must be applied to either a single route or a single service. Default `null`. In form-encoded format, the notation is `route.id=<route id>` or `route.name=<route name>`. In JSON format, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.',
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The service to which this chain is applied. A filter chain must be applied to either a single route or a single service. Default `null`. In form-encoded format, the notation is `service.id=<service id>` or `service.name=<service name>`. In JSON format, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.',
        example: '20487393-41ed-47f6-93a8-3407cade2002',
      }),
    filters: z
      .array(
        z
          .object({
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the filter\n', example: 'go-rate-limiting' }),
            enabled: z.boolean().exactOptional().openapi({ description: 'Enable the filter' }),
            config: z
              .string()
              .exactOptional()
              .openapi({
                description: 'configuration filter headers',
                example: '{ \\"minute\\": 30 }',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of filter definitions. Each filter is an object containing a mandatory name, an optional config, and a boolean enabled setting.',
      }),
    tags: z.array(z.string()).exactOptional(),
  })
  .openapi({
    'x-examples': {
      'Example 1': {
        id: 'ce44eef5-41ed-47f6-baab-f725cecf98c7',
        name: 'my-chain',
        created_at: 1422386534,
        updated_at: 1422386534,
        enabled: true,
        route: null,
        service: '20487393-41ed-47f6-93a8-3407cade2002',
        filters: [
          { name: 'go-rate-limiting', enabled: true, config: '{ "minute": 30 }' },
          {
            name: 'rust-response-transformer',
            enabled: true,
            config: '{ "remove_header": "X-Example" }',
          },
        ],
        tags: ['my-tag'],
      },
    },
    description:
      'A filter chain is the database entity representing one or more WebAssembly filters executed for each request to a particular service or route, each one with its configuration.',
    title: 'Filter Chains',
    required: [],
  })
  .openapi('FilterChains')

const PaginationOffsetResponseSchema = z
  .string()
  .openapi({
    description:
      'Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page',
  })
  .openapi('PaginationOffsetResponse')

const HTTP401ErrorResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: UnauthorizedErrorSchema,
      examples: {
        DuplicateApiKey: {
          summary: 'Duplicate API key found',
          value: { message: 'Duplicate API key found', status: 401 },
        },
        InvalidAuthCred: {
          summary: 'Invalid authentication credentials',
          value: { message: 'Unauthorized', status: 401 },
        },
        NoAPIKey: {
          summary: 'No API key found',
          value: { message: 'No API key found in request', status: 401 },
        },
      },
    },
  },
}

const GetEndpointsResponse = {
  description: 'Example response',
  content: {
    'application/json': {
      schema: z
        .object({ data: z.array(z.string()).exactOptional() })
        .openapi({
          'x-examples': {
            'Example 1': {
              data: [
                '/',
                '/acls',
                '/acls/{acls}',
                '/acls/{acls}/consumer',
                '/acme',
                '/acme/certificates',
                '/acme/certificates/{certificates}',
                '/acme_storage',
                '/acme_storage/{acme_storage}',
                '/auth',
                '/basic-auths',
                '/basic-auths/{basicauth_credentials}',
                '/basic-auths/{basicauth_credentials}/consumer',
                '/ca_certificates',
                '/ca_certificates/{ca_certificates}',
                '/ca_certificates/{ca_certificates}/mtls_auth_credentials',
                '/ca_certificates/{ca_certificates}/mtls_auth_credentials/{mtls_auth_credentials}',
                '/cache',
                '/cache/{key}',
                '/certificates',
                '/certificates/{certificates}',
                '/certificates/{certificates}/services',
                '/certificates/{certificates}/services/{services}',
                '/certificates/{certificates}/snis',
                '/certificates/{certificates}/snis/{snis}',
                '/certificates/{certificates}/upstreams',
                '/certificates/{certificates}/upstreams/{upstreams}',
                '/clustering/data-planes',
                '/clustering/status',
                '/config',
                '/consumers',
                '/consumers/{consumers}',
                '/consumers/{consumers}/acls',
                '/consumers/{consumers}/acls/{acls}',
                '/consumers/{consumers}/admins',
                '/consumers/{consumers}/admins/{admins}',
                '/consumers/{consumers}/applications',
                '/consumers/{consumers}/applications/{applications}',
                '/consumers/{consumers}/basic-auth',
                '/consumers/{consumers}/basic-auth/{basicauth_credentials}',
                '/consumers/{consumers}/developers',
                '/consumers/{consumers}/developers/{developers}',
                '/consumers/{consumers}/hmac-auth',
                '/consumers/{consumers}/hmac-auth/{hmacauth_credentials}',
                '/consumers/{consumers}/jwt',
                '/consumers/{consumers}/jwt/{jwt_secrets}',
                '/consumers/{consumers}/key-auth',
                '/consumers/{consumers}/key-auth/{keyauth_credentials}',
                '/consumers/{consumers}/key-auth-enc',
                '/consumers/{consumers}/key-auth-enc/{keyauth_enc_credentials}',
                '/consumers/{consumers}/login_attempts',
                '/consumers/{consumers}/login_attempts/{login_attempts}',
                '/consumers/{consumers}/mtls-auth',
                '/consumers/{consumers}/mtls-auth/{mtls_auth_credentials}',
                '/consumers/{consumers}/mtls_auth_credentials',
                '/consumers/{consumers}/mtls_auth_credentials/{mtls_auth_credentials}',
                '/consumers/{consumers}/oauth2',
                '/consumers/{consumers}/oauth2/{oauth2_credentials}',
                '/consumers/{consumers}/plugins',
                '/consumers/{consumers}/plugins/{plugins}',
                '/debug/cluster/log-level/{log_level}',
                '/debug/node/log-level',
                '/debug/node/log-level/{log_level}',
                '/debug/profiling/cpu',
                '/debug/profiling/gc-snapshot',
                '/debug/profiling/memory',
                '/degraphql_routes',
                '/degraphql_routes/{degraphql_routes}',
                '/degraphql_routes/{degraphql_routes}/service',
                '/endpoints',
                '/entities/migrate',
                '/event-hooks',
                '/event-hooks/sources',
                '/event-hooks/sources/{source}',
                '/event-hooks/sources/{source}/{event}',
                '/event-hooks/{event_hooks}',
                '/event-hooks/{event_hooks}/ping',
                '/event-hooks/{event_hooks}/test',
                '/files',
                '/files/*',
                '/files/partials/*',
                '/files/{files}',
                '/filter-chains',
                '/filter-chains/{filter_chains}',
                '/filter-chains/{filter_chains}/route',
                '/filter-chains/{filter_chains}/service',
                '/graphql-proxy-cache-advanced',
                '/graphql-proxy-cache-advanced/{cache_key}',
                '/graphql-proxy-cache-advanced/{plugin_id}/caches/{cache_key}',
                '/graphql-rate-limiting-advanced/costs',
                '/graphql-rate-limiting-advanced/costs/{graphql_ratelimiting_advanced_cost_decoration}',
                '/graphql_ratelimiting_advanced_cost_decoration',
                '/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}',
                '/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}/service',
                '/groups',
                '/groups/{groups}',
                '/groups/{groups}/roles',
                '/hmac-auths',
                '/hmac-auths/{hmacauth_credentials}',
                '/hmac-auths/{hmacauth_credentials}/consumer',
                '/jwt-signer/jwks',
                '/jwt-signer/jwks/{jwt_signer_jwks}',
                '/jwt-signer/jwks/{jwt_signer_jwks}/rotate',
                '/jwts',
                '/jwts/{jwt_secrets}',
                '/jwts/{jwt_secrets}/consumer',
                '/key-auths',
                '/key-auths/{keyauth_credentials}',
                '/key-auths/{keyauth_credentials}/consumer',
                '/key-auths-enc',
                '/key-auths-enc/{keyauth_enc_credentials}',
                '/key-auths-enc/{keyauth_enc_credentials}/consumer',
                '/key-sets',
                '/key-sets/{key_sets}',
                '/key-sets/{key_sets}/keys',
                '/key-sets/{key_sets}/keys/{keys}',
                '/keys',
                '/keys/{keys}',
                '/keys/{keys}/set',
                '/konnect_applications',
                '/konnect_applications/{konnect_applications}',
                '/license/report',
                '/licenses',
                '/licenses/{licenses}',
                '/login_attempts',
                '/login_attempts/{login_attempts}',
                '/login_attempts/{login_attempts}/consumer',
                '/metrics',
                '/mtls-auths',
                '/mtls-auths/{mtls_auth_credentials}/consumer',
                '/mtls_auth_credentials',
                '/mtls_auth_credentials/{mtls_auth_credentials}',
                '/mtls_auth_credentials/{mtls_auth_credentials}/ca_certificate',
                '/mtls_auth_credentials/{mtls_auth_credentials}/consumer',
                '/oauth2',
                '/oauth2/{oauth2_credentials}',
                '/oauth2/{oauth2_credentials}/consumer',
                '/oauth2/{oauth2_credentials}/oauth2_tokens',
                '/oauth2/{oauth2_credentials}/oauth2_tokens/{oauth2_tokens}',
                '/oauth2_tokens',
                '/oauth2_tokens/{oauth2_tokens}',
                '/oauth2_tokens/{oauth2_tokens}/credential',
                '/oauth2_tokens/{oauth2_tokens}/service',
                '/openid-connect/issuers',
                '/openid-connect/issuers/{oic_issuers}',
                '/openid-connect/jwks',
                '/plugins',
                '/plugins/enabled',
                '/plugins/schema/{name}',
                '/plugins/{plugins}',
                '/plugins/{plugins}/consumer',
                '/plugins/{plugins}/route',
                '/plugins/{plugins}/service',
                '/proxy-cache',
                '/proxy-cache/{cache_key}',
                '/proxy-cache/{plugin_id}/caches/{cache_key}',
                '/proxy-cache-advanced',
                '/proxy-cache-advanced/{cache_key}',
                '/proxy-cache-advanced/{plugin_id}/caches/{cache_key}',
                '/routes',
                '/routes/{routes}',
                '/routes/{routes}/filter-chains',
                '/routes/{routes}/filter-chains/{filter_chains}',
                '/routes/{routes}/filters/all',
                '/routes/{routes}/filters/disabled',
                '/routes/{routes}/filters/enabled',
                '/routes/{routes}/plugins',
                '/routes/{routes}/plugins/{plugins}',
                '/routes/{routes}/service',
                '/schemas/filters/{name}',
                '/schemas/plugins/validate',
                '/schemas/plugins/{name}',
                '/schemas/{db_entity_name}/validate',
                '/schemas/{name}',
                '/services',
                '/services/{services}',
                '/services/{services}/application_instances',
                '/services/{services}/application_instances/{application_instances}',
                '/services/{services}/applications',
                '/services/{services}/client_certificate',
                '/services/{services}/degraphql/routes',
                '/services/{services}/degraphql/routes/{degraphql_routes}',
                '/services/{services}/degraphql_routes',
                '/services/{services}/degraphql_routes/{degraphql_routes}',
                '/services/{services}/filter-chains',
                '/services/{services}/filter-chains/{filter_chains}',
                '/services/{services}/graphql-rate-limiting-advanced/costs',
                '/services/{services}/graphql_ratelimiting_advanced_cost_decoration',
                '/services/{services}/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}',
                '/services/{services}/oauth2_tokens',
                '/services/{services}/oauth2_tokens/{oauth2_tokens}',
                '/services/{services}/plugins',
                '/services/{services}/plugins/{plugins}',
                '/services/{services}/routes',
                '/services/{services}/routes/{routes}',
                '/sessions',
                '/sessions/{sessions}',
                '/snis',
                '/snis/{snis}',
                '/snis/{snis}/certificate',
                '/status',
                '/tags',
                '/tags/{tags}',
                '/targets',
                '/targets/{targets}',
                '/targets/{targets}/upstream',
                '/timers',
                '/upstreams',
                '/upstreams/{upstreams}',
                '/upstreams/{upstreams}/client_certificate',
                '/upstreams/{upstreams}/health',
                '/upstreams/{upstreams}/targets',
                '/upstreams/{upstreams}/targets/all',
                '/upstreams/{upstreams}/targets/{targets}',
                '/upstreams/{upstreams}/targets/{targets}/healthy',
                '/upstreams/{upstreams}/targets/{targets}/unhealthy',
                '/upstreams/{upstreams}/targets/{targets}/{address}/healthy',
                '/upstreams/{upstreams}/targets/{targets}/{address}/unhealthy',
                '/userinfo',
                '/vault-auth',
                '/vault-auth/{vault_auth_vaults}',
                '/vault-auth/{vault}/credentials',
                '/vault-auth/{vault}/credentials/token/{access_token}',
                '/vault-auth/{vault}/credentials/{consumer}',
                '/vaults',
                '/vaults/{vaults}',
                '/vitals/',
                '/vitals/cluster',
                '/vitals/cluster/status_codes',
                '/vitals/consumers/{consumer_id}/cluster',
                '/vitals/nodes/',
                '/vitals/nodes/{node_id}',
                '/vitals/reports/{entity_type}',
                '/vitals/status_code_classes',
                '/vitals/status_codes/by_consumer',
                '/vitals/status_codes/by_consumer_and_route',
                '/vitals/status_codes/by_route',
                '/vitals/status_codes/by_service',
              ],
            },
          },
          required: [],
        }),
      examples: {
        'Get all endpoints': {
          value: {
            data: [
              '/',
              '/acls',
              '/acls/{acls}',
              '/acls/{acls}/consumer',
              '/acme',
              '/acme/certificates',
              '/acme/certificates/{certificates}',
              '/acme_storage',
              '/acme_storage/{acme_storage}',
              '/applications',
              '/applications/{applications}',
              '/applications/{applications}/application_instances',
              '/applications/{applications}/application_instances/{application_instances}',
              '/applications/{applications}/consumer',
              '/applications/{applications}/credentials/{plugin}',
              '/applications/{applications}/credentials/{plugin}/{credential_id}',
              '/applications/{applications}/developer',
              '/auth',
              '/basic-auths',
              '/basic-auths/{basicauth_credentials}',
              '/basic-auths/{basicauth_credentials}/consumer',
              '/ca_certificates',
              '/ca_certificates/{ca_certificates}',
              '/ca_certificates/{ca_certificates}/mtls_auth_credentials',
              '/ca_certificates/{ca_certificates}/mtls_auth_credentials/{mtls_auth_credentials}',
              '/cache',
              '/cache/{key}',
              '/certificates',
              '/certificates/{certificates}',
              '/certificates/{certificates}/services',
              '/certificates/{certificates}/services/{services}',
              '/certificates/{certificates}/snis',
              '/certificates/{certificates}/snis/{snis}',
              '/certificates/{certificates}/upstreams',
              '/certificates/{certificates}/upstreams/{upstreams}',
              '/clustering/data-planes',
              '/clustering/status',
              '/config',
              '/consumers',
              '/consumers/{consumers}',
              '/consumers/{consumers}/acls',
              '/consumers/{consumers}/acls/{acls}',
              '/consumers/{consumers}/admins',
              '/consumers/{consumers}/admins/{admins}',
              '/consumers/{consumers}/applications',
              '/consumers/{consumers}/applications/{applications}',
              '/consumers/{consumers}/basic-auth',
              '/consumers/{consumers}/basic-auth/{basicauth_credentials}',
              '/consumers/{consumers}/developers',
              '/consumers/{consumers}/developers/{developers}',
              '/consumers/{consumers}/hmac-auth',
              '/consumers/{consumers}/hmac-auth/{hmacauth_credentials}',
              '/consumers/{consumers}/jwt',
              '/consumers/{consumers}/jwt/{jwt_secrets}',
              '/consumers/{consumers}/key-auth',
              '/consumers/{consumers}/key-auth/{keyauth_credentials}',
              '/consumers/{consumers}/key-auth-enc',
              '/consumers/{consumers}/key-auth-enc/{keyauth_enc_credentials}',
              '/consumers/{consumers}/login_attempts',
              '/consumers/{consumers}/login_attempts/{login_attempts}',
              '/consumers/{consumers}/mtls-auth',
              '/consumers/{consumers}/mtls-auth/{mtls_auth_credentials}',
              '/consumers/{consumers}/mtls_auth_credentials',
              '/consumers/{consumers}/mtls_auth_credentials/{mtls_auth_credentials}',
              '/consumers/{consumers}/oauth2',
              '/consumers/{consumers}/oauth2/{oauth2_credentials}',
              '/consumers/{consumers}/plugins',
              '/consumers/{consumers}/plugins/{plugins}',
              '/debug/cluster/log-level/{log_level}',
              '/debug/node/log-level',
              '/debug/node/log-level/{log_level}',
              '/debug/profiling/cpu',
              '/debug/profiling/gc-snapshot',
              '/debug/profiling/memory',
              '/degraphql_routes',
              '/degraphql_routes/{degraphql_routes}',
              '/degraphql_routes/{degraphql_routes}/service',
              '/endpoints',
              '/entities/migrate',
              '/event-hooks',
              '/event-hooks/sources',
              '/event-hooks/sources/{source}',
              '/event-hooks/sources/{source}/{event}',
              '/event-hooks/{event_hooks}',
              '/event-hooks/{event_hooks}/ping',
              '/event-hooks/{event_hooks}/test',
              '/files',
              '/files/*',
              '/files/partials/*',
              '/files/{files}',
              '/filter-chains',
              '/filter-chains/{filter_chains}',
              '/filter-chains/{filter_chains}/route',
              '/filter-chains/{filter_chains}/service',
              '/graphql-proxy-cache-advanced',
              '/graphql-proxy-cache-advanced/{cache_key}',
              '/graphql-proxy-cache-advanced/{plugin_id}/caches/{cache_key}',
              '/graphql-rate-limiting-advanced/costs',
              '/graphql-rate-limiting-advanced/costs/{graphql_ratelimiting_advanced_cost_decoration}',
              '/graphql_ratelimiting_advanced_cost_decoration',
              '/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}',
              '/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}/service',
              '/groups',
              '/groups/{groups}',
              '/groups/{groups}/roles',
              '/hmac-auths',
              '/hmac-auths/{hmacauth_credentials}',
              '/hmac-auths/{hmacauth_credentials}/consumer',
              '/jwt-signer/jwks',
              '/jwt-signer/jwks/{jwt_signer_jwks}',
              '/jwt-signer/jwks/{jwt_signer_jwks}/rotate',
              '/jwts',
              '/jwts/{jwt_secrets}',
              '/jwts/{jwt_secrets}/consumer',
              '/key-auths',
              '/key-auths/{keyauth_credentials}',
              '/key-auths/{keyauth_credentials}/consumer',
              '/key-auths-enc',
              '/key-auths-enc/{keyauth_enc_credentials}',
              '/key-auths-enc/{keyauth_enc_credentials}/consumer',
              '/key-sets',
              '/key-sets/{key_sets}',
              '/key-sets/{key_sets}/keys',
              '/key-sets/{key_sets}/keys/{keys}',
              '/keys',
              '/keys/{keys}',
              '/keys/{keys}/set',
              '/konnect_applications',
              '/konnect_applications/{konnect_applications}',
              '/license/report',
              '/licenses',
              '/licenses/{licenses}',
              '/login_attempts',
              '/login_attempts/{login_attempts}',
              '/login_attempts/{login_attempts}/consumer',
              '/metrics',
              '/mtls-auths',
              '/mtls-auths/{mtls_auth_credentials}/consumer',
              '/mtls_auth_credentials',
              '/mtls_auth_credentials/{mtls_auth_credentials}',
              '/mtls_auth_credentials/{mtls_auth_credentials}/ca_certificate',
              '/mtls_auth_credentials/{mtls_auth_credentials}/consumer',
              '/oauth2',
              '/oauth2/{oauth2_credentials}',
              '/oauth2/{oauth2_credentials}/consumer',
              '/oauth2/{oauth2_credentials}/oauth2_tokens',
              '/oauth2/{oauth2_credentials}/oauth2_tokens/{oauth2_tokens}',
              '/oauth2_tokens',
              '/oauth2_tokens/{oauth2_tokens}',
              '/oauth2_tokens/{oauth2_tokens}/credential',
              '/oauth2_tokens/{oauth2_tokens}/service',
              '/openid-connect/issuers',
              '/openid-connect/issuers/{oic_issuers}',
              '/openid-connect/jwks',
              '/plugins',
              '/plugins/enabled',
              '/plugins/schema/{name}',
              '/plugins/{plugins}',
              '/plugins/{plugins}/consumer',
              '/plugins/{plugins}/route',
              '/plugins/{plugins}/service',
              '/proxy-cache',
              '/proxy-cache/{cache_key}',
              '/proxy-cache/{plugin_id}/caches/{cache_key}',
              '/proxy-cache-advanced',
              '/proxy-cache-advanced/{cache_key}',
              '/proxy-cache-advanced/{plugin_id}/caches/{cache_key}',
              '/routes',
              '/routes/{routes}',
              '/routes/{routes}/filter-chains',
              '/routes/{routes}/filter-chains/{filter_chains}',
              '/routes/{routes}/filters/all',
              '/routes/{routes}/filters/disabled',
              '/routes/{routes}/filters/enabled',
              '/routes/{routes}/plugins',
              '/routes/{routes}/plugins/{plugins}',
              '/routes/{routes}/service',
              '/schemas/plugins/validate',
              '/schemas/plugins/{name}',
              '/schemas/{db_entity_name}/validate',
              '/schemas/{name}',
              '/services',
              '/services/{services}',
              '/services/{services}/application_instances',
              '/services/{services}/application_instances/{application_instances}',
              '/services/{services}/applications',
              '/services/{services}/client_certificate',
              '/services/{services}/degraphql/routes',
              '/services/{services}/degraphql/routes/{degraphql_routes}',
              '/services/{services}/degraphql_routes',
              '/services/{services}/degraphql_routes/{degraphql_routes}',
              '/services/{services}/filter-chains',
              '/services/{services}/filter-chains/{filter_chains}',
              '/services/{services}/graphql-rate-limiting-advanced/costs',
              '/services/{services}/graphql_ratelimiting_advanced_cost_decoration',
              '/services/{services}/graphql_ratelimiting_advanced_cost_decoration/{graphql_ratelimiting_advanced_cost_decoration}',
              '/services/{services}/oauth2_tokens',
              '/services/{services}/oauth2_tokens/{oauth2_tokens}',
              '/services/{services}/plugins',
              '/services/{services}/plugins/{plugins}',
              '/services/{services}/routes',
              '/services/{services}/routes/{routes}',
              '/sessions',
              '/sessions/{sessions}',
              '/snis',
              '/snis/{snis}',
              '/snis/{snis}/certificate',
              '/status',
              '/tags',
              '/tags/{tags}',
              '/targets',
              '/targets/{targets}',
              '/targets/{targets}/upstream',
              '/timers',
              '/upstreams',
              '/upstreams/{upstreams}',
              '/upstreams/{upstreams}/client_certificate',
              '/upstreams/{upstreams}/health',
              '/upstreams/{upstreams}/targets',
              '/upstreams/{upstreams}/targets/all',
              '/upstreams/{upstreams}/targets/{targets}',
              '/upstreams/{upstreams}/targets/{targets}/healthy',
              '/upstreams/{upstreams}/targets/{targets}/unhealthy',
              '/upstreams/{upstreams}/targets/{targets}/{address}/healthy',
              '/upstreams/{upstreams}/targets/{targets}/{address}/unhealthy',
              '/userinfo',
              '/vault-auth',
              '/vault-auth/{vault_auth_vaults}',
              '/vault-auth/{vault}/credentials',
              '/vault-auth/{vault}/credentials/token/{access_token}',
              '/vault-auth/{vault}/credentials/{consumer}',
              '/vaults',
              '/vaults/{vaults}',
              '/vitals/',
              '/vitals/cluster',
              '/vitals/cluster/status_codes',
              '/vitals/consumers/{consumer_id}/cluster',
              '/vitals/nodes/',
              '/vitals/nodes/{node_id}',
              '/vitals/reports/{entity_type}',
              '/vitals/status_code_classes',
              '/vitals/status_codes/by_consumer',
              '/vitals/status_codes/by_consumer_and_route',
              '/vitals/status_codes/by_route',
              '/vitals/status_codes/by_service',
            ],
          },
        },
      },
    },
  },
}

const SniResponseResponse = {
  description: 'SNI response object',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z
            .array(
              z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: '147f5ef0-1ed6-4711-b77f-489262f8bff7',
                      description:
                        'The unique identifier or the name attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.',
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The SNI name to associate with the given certificate.\n',
                      example: 'my-sni',
                    }),
                  created_at: z
                    .int()
                    .exactOptional()
                    .openapi({
                      example: 1422386534,
                      description: 'Unix epoch when the resource was created.\n',
                    }),
                  tags: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'An optional set of strings associated with the SNIs for grouping and filtering.\n',
                    }),
                  certificate: z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: '2e013e8-7623-4494-a347-6d29108ff68b',
                          description:
                            'The unique identifier or the name attribute of the Certificate whose SNIs',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object.\n',
                      required: [],
                    }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional()
            .openapi({ description: 'Array of SNIs' }),
          next: z
            .string()
            .exactOptional()
            .openapi({
              example: 'http://localhost:8001/snis?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
              description:
                'Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              data: [
                {
                  id: '147f5ef0-1ed6-4711-b77f-489262f8bff7',
                  name: 'my-sni',
                  created_at: 1422386534,
                  tags: ['user-level', 'low-priority'],
                  certificate: { id: 'a3ad71a8-6685-4b03-a101-980a953544f6' },
                },
                {
                  id: 'b87eb55d-69a1-41d2-8653-8d706eecefc0',
                  name: 'my-sni',
                  created_at: 1422386534,
                  tags: ['admin', 'high-priority', 'critical'],
                  certificate: { id: '4e8d95d4-40f2-4818-adcb-30e00c349618' },
                },
              ],
              next: 'http://localhost:8001/snis?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
            },
          },
          required: [],
        }),
    },
  },
}

const ConsumerResponseDataResponse = {
  description: 'The consumer object response body',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z
            .array(
              z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The unique identifier or the name attribute of the consumer.',
                      example: 'a4407883-c166-43fd-80ca-3ca035b0cdb7',
                    }),
                  created_at: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Unix epoch when the resource was created.',
                      example: 1422386534,
                    }),
                  username: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The unique username of the consumer. You must send either this field or` custom_i`d with the request.',
                      example: 'my-username',
                    }),
                  custom_id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database.',
                      example: 'my-custom-id',
                    }),
                  tags: z
                    .array(z.string().openapi({ example: 'admin' }))
                    .exactOptional()
                    .openapi({
                      description:
                        'An optional set of strings associated with the Consumer for grouping and filtering.\n',
                    }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          next: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Pagination information',
              example:
                'http://localhost:8001/consumers?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              data: [
                {
                  id: 'a4407883-c166-43fd-80ca-3ca035b0cdb7',
                  created_at: 1422386534,
                  username: 'my-username',
                  custom_id: 'my-custom-id',
                  tags: ['user-level', 'low-priority'],
                },
                {
                  id: '01c23299-839c-49a5-a6d5-8864c09184af',
                  created_at: 1422386534,
                  username: 'my-username',
                  custom_id: 'my-custom-id',
                  tags: ['admin', 'high-priority', 'critical'],
                },
              ],
              next: 'http://localhost:8001/consumers?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
            },
          },
          required: [],
        }),
    },
  },
}

const ConsumerCreateResponseResponse = {
  description: 'New consumer created response',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The unique id of the consumer.',
              example: 'c1a1f6f-2aa4-4e58-93ff-b56368f19b27',
            }),
          created_at: z
            .int()
            .exactOptional()
            .openapi({ description: 'Unix epoch when the resource was created.\n' }),
          username: z
            .string()
            .exactOptional()
            .openapi({ description: 'The unique username of the consumer.' }),
          custom_id: z
            .string()
            .exactOptional()
            .openapi({ description: 'Field for the unique consumer ID' }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Consumer for grouping and filtering.',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              id: 'ec1a1f6f-2aa4-4e58-93ff-b56368f19b27',
              created_at: 1422386534,
              username: 'my-username',
              custom_id: 'my-custom-id',
              tags: ['user-level', 'low-priority'],
            },
          },
          required: [],
        }),
    },
  },
}

const PluginResponseResponse = {
  description: 'Example response',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z.string().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.\n",
              example: 'rate-limiting',
            }),
          created_at: z
            .int()
            .exactOptional()
            .openapi({ description: 'Unix epoch when the resource was created.' }),
          route: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.',
            }),
          service: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.',
            }),
          consumer: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)',
            }),
          instance_name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.\n\nThe instance name shows up in Kong Manager, so it's useful when running the same \nplugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance\nvia the Kong Admin API.\n\nAn instance name must be unique globally for Kong Gateway OSS.\n",
              example: 'rate-limiting-foo',
            }),
          config: z
            .object({
              hour: z.int().exactOptional().openapi({ example: 500 }),
              minute: z.int().exactOptional().openapi({ example: 500 }),
            })
            .exactOptional()
            .openapi({ description: 'The configuration properties for the Plugin', required: [] }),
          protocols: z
            .array(z.enum(['http', 'grpc', 'grpcs', 'tls', 'tcp']).default('http'))
            .exactOptional()
            .openapi({
              description: 'A list of the request protocols that will trigger this plugin.',
            }),
          enabled: z
            .boolean()
            .default(true)
            .exactOptional()
            .openapi({ description: 'Whether the plugin is applied. Default: `true`.\n' }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Plugin for grouping and filtering.\n',
            }),
        })
        .openapi({ required: [] }),
      examples: {
        'Plugin response': {
          value: {
            data: [
              {
                id: '02621eee-8309-4bf6-b36b-a82017a5393e',
                name: 'rate-limiting',
                created_at: 1422386534,
                route: null,
                service: null,
                consumer: null,
                config: { hour: 500, minute: 20 },
                protocols: ['http', 'https'],
                enabled: true,
                tags: ['user-level', 'low-priority'],
              },
              {
                id: '66c7b5c4-4aaf-4119-af1e-ee3ad75d0af4',
                name: 'rate-limiting',
                created_at: 1422386534,
                route: null,
                service: null,
                consumer: null,
                config: { hour: 500, minute: 20 },
                protocols: ['tcp', 'tls'],
                enabled: true,
                tags: ['admin', 'high-priority', 'critical'],
              },
            ],
            next: 'http://localhost:8001/plugins?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
          },
        },
      },
    },
  },
}

const KeySetResponseResponse = {
  description: 'Key set object response body',
  content: {
    'application/json': {
      schema: z
        .object({
          id: z
            .string()
            .exactOptional()
            .openapi({ example: '4D0DBDA-671C-11ED-BA0B-EF1DCCD3725F' }),
          name: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The name to associate with the given key-set.\n',
              example: 'my-key_set',
            }),
          created_at: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Unix epoch when the resource was last created.',
              example: 1422386534,
            }),
          updated_at: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Unix epoch when the resource was last updated.\n',
              example: 1422386534,
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({ description: 'The name to associate with the given key-set.\n' }),
          next: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Offset is used to paginate through the API. Provide this value to the next list operation to fetch the next page\n',
              example: 'http://localhost:8001/key-sets?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              id: 'b58c7d9d-e54f-444c-b24d-cdfc4159f61e',
              name: 'example-key-set',
              created_at: 1422386534,
              updated_at: 1422386534,
              tags: ['idp-keys'],
              next: 'http://localhost:8001/key-sets?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
            },
          },
          required: [],
        }),
      examples: {
        example: {
          value: {
            id: '4D0DBDA-671C-11ED-BA0B-EF1DCCD3725F',
            name: 'my-key_set',
            created_at: 1422386534,
            updated_at: 1422386534,
            tags: ['string'],
            next: 'http://localhost:8001/key-sets?offset=6378122c-a0a1-438d-a5c6-efabae9fb969',
          },
        },
      },
    },
  },
}

const TagsResponseResponse = {
  description: 'Tags response body',
  content: {
    'application/json': {
      schema: z
        .object({
          data: z
            .array(
              z
                .object({
                  entity_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'services',
                      description: 'The name of the entity that corresponds to a tag',
                    }),
                  entity_id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'c87440e1-0496-420b-b06f-dac59544bb6c',
                      description: 'The unique ID for the entity that is attached to the tag',
                    }),
                  tag: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'example', description: 'The tag' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          offset: z
            .string()
            .exactOptional()
            .openapi({
              example: '1fb491c4-f4a7-4bca-aeba-7f3bcee4d2f9',
              description: 'Pagination information',
            }),
          next: z
            .string()
            .exactOptional()
            .openapi({
              example: '/tags/example?offset=1fb491c4-f4a7-4bca-aeba-7f3bcee4d2f9',
              description: 'Pagination information',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              data: [
                {
                  entity_name: 'services',
                  entity_id: 'acf60b10-125c-4c1a-bffe-6ed55daefba4',
                  tag: 's1',
                },
              ],
              offset: 'c47139f3-d780-483d-8a97-17e9adc5a7ab',
              next: '/tags?offset=c47139f3-d780-483d-8a97-17e9adc5a7ab',
            },
          },
          required: [],
        }),
      examples: {
        'Tags response': {
          value: {
            data: [
              {
                entity_name: 'services',
                entity_id: 'c87440e1-0496-420b-b06f-dac59544bb6c',
                tag: 'example',
              },
            ],
            offset: '1fb491c4-f4a7-4bca-aeba-7f3bcee4d2f9',
            next: '/tags/example?offset=1fb491c4-f4a7-4bca-aeba-7f3bcee4d2f9',
          },
        },
      },
    },
  },
}

const PaginationOffsetParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Offset from which to return the next set of resources. Use the value of the 'offset' field from the response of a list operation as input here to paginate through all the resources",
      in: 'query',
      name: 'offset',
      schema: { type: 'string' },
      required: false,
    },
  })

const PaginationSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of resources to be returned.',
      in: 'query',
      name: 'size',
      schema: { default: 100, maximum: 1000, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const PaginationTagsFilterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "A list of tags to filter the list of resources on. Multiple tags can be concatenated using ','' to mean AND or using ''/'' to mean OR.'",
      example: 'tag1,tag2',
      in: 'query',
      name: 'tags',
      schema: { type: 'string', nullable: false },
      required: false,
    },
  })

const ServiceIdOrNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'service_id_or_name',
      description: 'ID **or** name of the service to lookup',
      example: 'test-service',
      in: 'path',
      required: true,
      schema: { type: 'string' },
    },
  })

const CaCertificateIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'ca_certificate_id',
      description: 'ID of the related certificate',
      in: 'path',
      required: true,
      schema: { type: 'string', example: '7fca84d6-7d37-4a74-a7b0-93e576089a41' },
    },
    example: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
  })

const CertificateIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'certificate_id',
      in: 'path',
      required: true,
      schema: { type: 'string', example: '7fca84d6-7d37-4a74-a7b0-93e576089a41' },
      description: 'The unique identifier of the Certificate to retrieve.',
    },
    example: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
  })

const CertificateNameOrIdParamsSchema = z
  .enum(['a3ad71a8-6685-4b03-a101-980a953544f6', 'name'])
  .openapi({
    param: {
      name: 'certificate_name_or_id',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
        enum: ['a3ad71a8-6685-4b03-a101-980a953544f6', 'name'],
        example: 'name',
      },
      description:
        'The unique identifier or the `name` attribute of the Certificate whose SNIs are to be retrieved. When using this endpoint, only SNIs associated to the specified Certificate will be listed.',
    },
    example: 'name',
  })

const SniNameOrIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'sni_name_or_id',
      in: 'path',
      required: true,
      schema: { type: 'string', example: 'my-sni' },
      description: 'The unique identifier or the name of the SNI to retrieve.',
    },
    example: 'my-sni',
  })

const ConsumerUsernameOrIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'consumer_username_or_id',
      in: 'path',
      required: true,
      schema: { type: 'string', example: 'my-username' },
      description: 'The unique identifier or the username of the Consumer to retrieve.',
    },
    example: 'my-username',
  })

const FilterChainNameOrIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'filter_chain_name_or_id',
      in: 'path',
      required: true,
      schema: { type: 'string', example: 'my-filter-chain' },
      description: 'The unique identifier or name of the Filter Chain to create or update.',
    },
    example: 'my-filter-chain',
  })

const PluginIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'plugin_id',
      in: 'path',
      required: true,
      schema: { type: 'string', example: 'response-ratelimiting' },
      description: 'The unique identifier of the Plugin to create or update.',
    },
    example: 'response-ratelimiting',
  })

const KeySetIdOrNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'key-set_id_or_name',
      in: 'path',
      required: true,
      schema: { type: 'string', example: '46CA83EE-671C-11ED-BFAB-2FE47512C77A' },
      description:
        'The unique identifier or the `name` attribute of the Key Set that should be associated to the newly-created Key.',
    },
    example: '46CA83EE-671C-11ED-BFAB-2FE47512C77A',
  })

const KeyIdOrNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'key_id_or_name',
      in: 'path',
      required: true,
      schema: { type: 'string', example: '24D0DBDA-671C-11ED-BA0B-EF1DCCD3725' },
      description: 'The unique identifier or the name of the Key to retrieve.',
    },
    example: '24D0DBDA-671C-11ED-BA0B-EF1DCCD3725',
  })

const RouteIdOrNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'route_id_or_name',
      in: 'path',
      required: true,
      schema: { type: 'string', example: 'my-route' },
      description: 'The unique identifier or the name of the route to retrieve.',
    },
    example: 'my-route',
  })

const UpstreamIdOrNameParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'upstream_id_or_name',
      in: 'path',
      required: true,
      schema: { type: 'string', example: '7fca84d6-7d37-4a74-a7b0-93e576089a41' },
      description:
        'The unique identifier or the name of the Upstream associated to the Certificate to be retrieved.',
    },
    example: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
  })

const TargetIdOrTargetParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'target_id_or_target',
      in: 'path',
      required: true,
      schema: { type: 'string', example: 'example.com:8000' },
      description:
        'The host/port combination element of the target to set as unhealthy, or the `id` of an existing target entry.',
    },
    example: 'example.com:8000',
  })

const VaultIdOrPrefixParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'vault_id_or_prefix',
      in: 'path',
      required: true,
      schema: { type: 'string', example: 'env' },
      description: 'The unique identifier or the prefix of the Vault to retrieve.',
    },
    example: 'env',
  })

const TagParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'tags',
      in: 'path',
      required: true,
      schema: { type: 'string', example: 'example' },
      description: 'Tags are strings associated to entities in Kong.',
    },
    example: 'example',
  })

const LogLevelParamsSchema = z
  .enum(['info', 'notice', 'warn', 'error', 'crit'])
  .openapi({
    param: {
      name: 'log_level',
      in: 'path',
      required: true,
      schema: {
        type: 'string',
        enum: ['info', 'notice', 'warn', 'error', 'crit'],
        example: 'warn',
      },
      description:
        "Log levels are set in Kong's configuration. Log levels increase in order of their severity",
    },
    example: 'warn',
  })

const FilterChainIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'filter_chain_id',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: 'The unique identifier of the filter chain to retrieve.',
    },
  })

const CACertRequestRequestBody = {
  description:
    'This request body represents a new Certificate Authority (CA) certificate and includes the properties required to create a new certificate.',
  content: {
    'application/json': {
      schema: z
        .object({
          cert: z
            .string()
            .openapi({
              description: 'PEM-encoded public certificate of the CA.\n',
              example: '"-----BEGIN CERTIFICATE-----..."',
            }),
          cert_digest: z
            .string()
            .exactOptional()
            .openapi({
              example: 'c641e28d77e93544f2fa87b2cf3f3d51...',
              description: 'SHA256 hex digest of the public certificate.\n',
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Certificate for grouping and filtering.',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              cert: '-----BEGIN CERTIFICATE-----...',
              cert_digest: 'c641e28d77e93544f2fa87b2cf3f3d51...',
              tags: ['user-level', 'low-priority'],
            },
          },
          required: ['cert'],
        }),
    },
  },
}

const CertRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          cert: z
            .string()
            .openapi({
              description: 'PEM-encoded public certificate chain of the SSL key pair.',
              example: '"-----BEGIN CERTIFICATE-----...",',
            }),
          key: z
            .string()
            .openapi({
              example: '"-----BEGIN RSA PRIVATE KEY-----..."',
              description: 'PEM-encoded private key of the SSL key pair.',
            }),
          cert_alt: z
            .string()
            .exactOptional()
            .openapi({
              description: 'PEM-encoded public certificate chain of the alternate SSL key pair.',
            }),
          key_alt: z
            .string()
            .exactOptional()
            .openapi({
              description: 'PEM-encoded private key of the alternate SSL key pair.',
              example: '"-----BEGIN EC PRIVATE KEY-----..."',
            }),
          snis: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An array of zero or more hostnames to associate with this certificate as SNIs.',
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Certificate for grouping and filtering.\n',
            }),
          passphrase: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'To load an encrypted private key into Kong, specify the passphrase using this attributKong will decrypt the private key and store it in its database. e. Enterprise Only',
              example: 'example',
            }),
        })
        .openapi({
          'x-examples': {
            Example: {
              id: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
              created_at: 1422386534,
              cert: '-----BEGIN CERTIFICATE-----...',
              key: '-----BEGIN RSA PRIVATE KEY-----...',
              cert_alt: '-----BEGIN CERTIFICATE-----...',
              key_alt: '-----BEGIN EC PRIVATE KEY-----...',
              snis: ['foo.test', 'example.com'],
              tags: ['user-level', 'low-priority'],
            },
          },
          required: ['cert', 'key'],
        }),
    },
  },
}

const CreateSniRequestBody = {
  description:
    'A JSON object containing the details of the new SNI, including the name, certificate, and tags.',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .openapi({
              description: 'The SNI name to associate with the given certificate.',
              example: 'my-sni',
            }),
          tags: z
            .array(z.string().openapi({ example: '["user-level", "low-priority"]' }))
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the SNIs for grouping and filtering.\n',
            }),
          certificate: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({
                  example: '91020192-062d-416f-a275-9addeeaffaf2',
                  description: '91020192-062d-416f-a275-9addeeaffaf2',
                }),
            })
            .openapi({
              description:
                'The id (a UUID) of the certificate with which to associate the SNI hostname. The Certificate must have a valid private key associated with it to be used by the SNI object. With form-encoded, the notation is `certificate.id=<certificate id>`. With JSON, use `"certificate":{"id":"<certificate id>"}`.',
              required: [],
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              name: 'my-sni',
              tags: ['user-level', 'low-priority'],
              certificate: { id: 'a2e013e8-7623-4494-a347-6d29108ff68b' },
            },
          },
          required: ['name', 'certificate'],
        }),
    },
  },
}

const ConsumerRequestRequestBody = {
  description: 'Consumer request body',
  content: {
    'application/json': {
      schema: z
        .object({
          username: z
            .string()
            .openapi({
              description:
                'The unique username of the Consumer. You must send either this field or custom_id with the request.\n',
            }),
          custom_id: z
            .string()
            .openapi({
              description:
                'Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database. You must send either this field or username with the request.\n',
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Consumer for grouping and filtering.\n',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              id: 'ec1a1f6f-2aa4-4e58-93ff-b56368f19b27',
              created_at: 1422386534,
              username: 'my-username',
              custom_id: 'my-custom-id',
              tags: ['user-level', 'low-priority'],
            },
          },
          required: ['username', 'custom_id'],
        }),
    },
  },
}

const FilterChainsRequestRequestBody = {
  description: 'Filter Chain request body',
  content: {
    'application/json': {
      schema: z
        .object({
          enabled: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'Whether the filter chain is applied.', example: true }),
          filters: z
            .array(
              z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name of the filter. This name matches the basename of the WebAssembly module file: for a filter file called `my-filter.wasm`, then filter name will be `my-filter`.',
                    }),
                  config: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The configuration for the filter. Proxy-Wasm does not define a configuration format, so this field is a raw string, intended to contain the configuration in the format expected by the particular filter in use.',
                    }),
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether the filter is to be applied.' }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional()
            .openapi({
              description: 'An array of filter definitions that will be executed in order.',
            }),
          id: z.string().exactOptional(),
          name: z
            .string()
            .exactOptional()
            .openapi({ description: 'The name of the filter chain.', example: 'my-filter-chain' }),
          route: z
            .strictObject({ id: z.string().exactOptional() })
            .exactOptional()
            .openapi({
              description:
                'The route to which this chain is applied. A filter chain must be applied to either a single route or a single service.',
              required: [],
            }),
          service: z
            .strictObject({ id: z.string().exactOptional() })
            .exactOptional()
            .openapi({
              description:
                'The service to which this chain is applied. A filter chain must be applied to either a single route or a single service.',
              required: [],
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Filter Chain for grouping and filtering.',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              id: 'ce44eef5-41ed-47f6-baab-f725cecf98c7',
              name: 'my-filter-chain',
              enabled: true,
              route: null,
              service: '20487393-41ed-47f6-93a8-3407cade2002',
              filters: [
                { name: 'go-rate-limiting', enabled: true, config: '{ "minute": 30 }' },
                {
                  name: 'rust-response-transformer',
                  enabled: true,
                  config: '{ "remove_header": "X-Example" }',
                },
              ],
              tags: ['my-tag'],
            },
          },
          required: [],
        }),
      examples: {
        'request example': {
          value: {
            id: 'ce44eef5-41ed-47f6-baab-f725cecf98c7',
            name: 'my-filter-chain',
            enabled: true,
            route: null,
            service: '20487393-41ed-47f6-93a8-3407cade2002',
            filters: [
              { name: 'go-rate-limiting', enabled: true, config: '{ "minute": 30 }' },
              {
                name: 'rust-response-transformer',
                enabled: true,
                config: '{ "remove_header": "X-Example" }',
              },
            ],
            tags: ['my-tag'],
          },
        },
      },
    },
  },
}

const PluginRequestRequestBody = {
  description: 'Plugin request body',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "The name of the Plugin that's going to be added. Currently, the Plugin must be installed in every Kong instance separately.\n",
              example: 'rate-limiting',
            }),
          route: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used. Default: `null`. With form-encoded, the notation is `route.id=<route id> or route.name=<route name>`. With JSON, use `"route":{"id":"<route id>"}` or `"route":{"name":"<route name>"}`.\n',
            }),
          service: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified service.\n',
            }),
          consumer: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.)\n',
            }),
          instance_name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "An optional custom name to identify an instance of the plugin, for example `basic-auth_example-service`.\n\nThe instance name shows up in Kong Manager, so it's useful when running the same \nplugin in multiple contexts, for example, on multiple services. You can also use it to access a specific plugin instance\nvia the Kong Admin API.\n\nAn instance name must be unique globally for Kong Gateway OSS.\n",
              example: 'rate-limiting-foo',
            }),
          config: z
            .object({
              hour: z.int().exactOptional().openapi({ example: 500 }),
              minute: z.int().exactOptional().openapi({ example: 500 }),
            })
            .exactOptional()
            .openapi({ description: 'The configuration properties for the Plugin', required: [] }),
          protocols: z
            .array(z.enum(['http', 'grpc', 'grpcs', 'tls', 'tcp']).default('http'))
            .exactOptional()
            .openapi({
              description: 'A list of the request protocols that will trigger this plugin.',
            }),
          enabled: z
            .boolean()
            .default(true)
            .exactOptional()
            .openapi({ description: 'Whether the plugin is applied. Default: `true`.\n' }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Plugin for grouping and filtering.\n',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              name: 'rate-limiting',
              route: null,
              service: null,
              consumer: null,
              instance_name: 'rate-limiting-foo',
              config: { hour: 500, minute: 20 },
              protocols: ['http', 'https'],
              enabled: true,
              tags: ['user-level', 'low-priority'],
            },
          },
          required: [],
        }),
      examples: {
        'request example': {
          value: {
            name: 'rate-limiting',
            route: 'string',
            service: 'string',
            consumer: 'string',
            instance_name: 'rate-limiting-foo',
            config: { hour: 500, minute: 500 },
            protocols: ['http'],
            enabled: true,
            tags: ['string'],
          },
        },
      },
    },
  },
}

const KeySetRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The name to associate with the given key-set.\n',
              example: 'my-key_set',
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Key for grouping and filtering.\n',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': { name: 'my-key_set', tags: ['google-keys', 'mozilla-keys'] },
          },
          required: [],
        }),
    },
  },
}

const KeysRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          set: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: '46CA83EE-671C-11ED-BFAB-2FE47512C77A' }),
            })
            .exactOptional()
            .openapi({
              description:
                'The id (an UUID) of the key-set with which to associate the key .With form-encoded, the notation is `set.id=<set id>` or `set.name=<set name>`. With JSON, use `"set":{"id":"<set id>"}` or `"set":{"name":"<set name>"}.`',
              required: [],
            }),
          name: z
            .string()
            .exactOptional()
            .openapi({
              example: 'my-key',
              description: 'The name to associate with the given keys.\n',
            }),
          kid: z
            .string()
            .openapi({ description: 'A unique identifier for a key.\n', example: '42' }),
          jwk: z
            .string()
            .exactOptional()
            .openapi({
              description: 'A JSON Web Key represented as a string.',
              example: '{\\"alg\\":\\"RSA\\",  \\"kid\\": \\"42\\",  ...}',
            }),
          pem: z
            .object({
              private_key: z
                .string()
                .exactOptional()
                .openapi({ example: 'private_key": "-----BEGIN' }),
              public_key: z
                .string()
                .exactOptional()
                .openapi({ example: 'public_key": "-----BEGIN' }),
            })
            .exactOptional()
            .openapi({ description: 'A keypair in PEM format.\n', required: [] }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Key for grouping and filtering.\n',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              set: { id: '46CA83EE-671C-11ED-BFAB-2FE47512C77A' },
              name: 'my-key',
              kid: '42',
              jwk: '{"alg":"RSA",  "kid": "42",  ...}',
              pem: { private_key: '-----BEGIN', public_key: '-----BEGIN' },
              tags: ['application-a', 'public-key-xyz'],
            },
          },
          required: ['kid'],
        }),
    },
  },
}

const RouteRequestRequestBody = {
  description: 'Route request body',
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name of the route. Route names must be unique, and they are case sensitive. For example, there can be two different routes named "test" and "Test".\n',
            }),
          protocols: z
            .array(z.string().default('https').openapi({ example: 'tcp' }))
            .openapi({ description: 'An array of the protocols this route should allow' }),
          methods: z
            .array(z.string().openapi({ example: 'GET' }))
            .exactOptional()
            .openapi({ description: 'A list of HTTP methods that match this route.\n' }),
          hosts: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'A list of domain names that match this route. Note that the hosts value is case sensitive. With form-encoded, the notation is `hosts[]=example.com&hosts[]=foo.test`. With JSON, use an Array.',
            }),
          paths: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'A list of paths that match this route. With form-encoded, the notation is `paths[]=/foo&paths[]=/bar`. With JSON, use an array. The path can be a regular expression, or a plain text pattern.',
            }),
          headers: z
            .object({
              'x-my-header': z.array(z.string()).exactOptional(),
              'x-another-header': z.array(z.string()).exactOptional(),
            })
            .exactOptional()
            .openapi({
              description:
                'One or more lists of values indexed by header name that will cause this route to match if present in the request. The Host header cannot be used with this hosts should be specified using the `hosts` attribute. When headers contains only one value and that value starts with the special prefix` ~*`, the value is interpreted as a regular expression.',
              required: [],
            }),
          https_redirect_status_code: z
            .union([z.literal(426), z.literal(301), z.literal(302), z.literal(307), z.literal(308)])
            .default(426)
            .openapi({
              description:
                'The status code Kong responds with when all properties of a route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`\nLocation header is injected by Kong if the field is set to `301`, `302`, `307` or `308`. Note: This config applies only if the route is configured to only accept the https protocol. Accepted values are: `426`, `301`, `302`, `307`, `308`. Default: `426`.',
              example: 426,
            }),
          regex_priority: z
            .int()
            .default(0)
            .exactOptional()
            .openapi({
              description:
                'A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same regex_priority, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones).',
              example: 0,
            }),
          strip_path: z
            .boolean()
            .default(true)
            .exactOptional()
            .openapi({
              description:
                'When matching a route via one of the paths, strip the matching prefix from the upstream request URL.',
            }),
          path_handling: z
            .enum(['v1', 'v0'])
            .exactOptional()
            .openapi({
              description:
                'Controls how the service path, route path and requested path are combined when sending a request to the upstream. Accepted values are "`v0`", "`v1`".',
              example: 'v0',
            }),
          preserve_host: z
            .boolean()
            .default(true)
            .openapi({
              description:
                "When matching a route via one of the `hosts` domain names, use the request `host` header in the upstream request headers. If set to `false`, the upstream Host header will be that of the service's host.\n",
            }),
          request_buffering: z
            .boolean()
            .default(true)
            .openapi({
              description:
                'Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true.\n',
            }),
          response_buffering: z
            .boolean()
            .default(true)
            .openapi({
              description:
                'Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: `true`.\n',
            }),
          snis: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description: 'A list of SNIs that match this route when using stream routing.\n',
            }),
          sources: z
            .array(
              z
                .object({
                  ip: z.string().exactOptional().openapi({ example: '10.1.0.0/16' }),
                  port: z.int().exactOptional().openapi({ example: 1234 }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional()
            .openapi({
              description:
                'A list of IP sources of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".\n',
            }),
          destinations: z
            .array(
              z
                .object({
                  ip: z.string().exactOptional().openapi({ example: '0.1.0.0/16' }),
                  port: z.int().exactOptional(),
                })
                .openapi({ required: [] }),
            )
            .exactOptional()
            .openapi({
              description:
                'A list of IP destinations of incoming connections that match this route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".\n',
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the route for grouping and filtering.\n',
            }),
          service: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ example: 'af8330d3-dbdc-48bd-b1be-55b98608834b' }),
            })
            .exactOptional()
            .openapi({
              description:
                'The service this route is associated to. This is where the route proxies traffic to. With form-encoded, the notation is service.id=<service id> or service.name=<service name>. With JSON, use `"service":{"id":"<service id>"}` or `"service":{"name":"<service name>"}`.',
              required: [],
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              name: 'my-route',
              protocols: ['http', 'https'],
              methods: ['GET', 'POST'],
              hosts: ['example.com', 'foo.test'],
              paths: ['/foo', '/bar'],
              headers: { 'x-my-header': ['foo', 'bar'], 'x-another-header': ['bla'] },
              https_redirect_status_code: 426,
              regex_priority: 0,
              strip_path: true,
              path_handling: 'v0',
              preserve_host: false,
              request_buffering: true,
              response_buffering: true,
              snis: ['foo.test', 'example.com'],
              sources: [{ ip: '10.1.0.0/16', port: 1234 }, { ip: '10.2.2.2' }, { port: 9123 }],
              destinations: [{ ip: '10.1.0.0/16', port: 1234 }, { ip: '10.2.2.2' }, { port: 9123 }],
              tags: ['user-level', 'low-priority'],
              service: { id: 'af8330d3-dbdc-48bd-b1be-55b98608834b' },
            },
          },
          required: [
            'protocols',
            'https_redirect_status_code',
            'preserve_host',
            'request_buffering',
            'response_buffering',
          ],
        }),
      examples: {
        'Create a route': {
          value: {
            name: 'my-route',
            protocols: ['http', 'https'],
            methods: ['GET', 'POST'],
            hosts: ['example.com', 'foo.test'],
            paths: ['/foo', '/bar'],
            headers: { 'x-my-header': ['foo', 'bar'], 'x-another-header': ['bla'] },
            https_redirect_status_code: 426,
            regex_priority: 0,
            strip_path: true,
            path_handling: 'v0',
            preserve_host: false,
            request_buffering: true,
            response_buffering: true,
            tags: ['user-level', 'low-priority'],
            service: { id: 'af8330d3-dbdc-48bd-b1be-55b98608834b' },
          },
        },
      },
    },
  },
}

const ServiceRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .exactOptional()
            .openapi({ description: 'The service name.\n', example: 'my-service' }),
          retries: z
            .int()
            .default(5)
            .exactOptional()
            .openapi({
              description: 'The number of retries to execute upon failure to proxy. Default:`5`.\n',
              example: 5,
            }),
          protocol: z
            .enum([
              'grpc',
              'grpcs',
              'http',
              'https',
              'tcp',
              'tls ',
              'tls_passthrough',
              'udp',
              'ws',
              'wss',
            ])
            .default('http')
            .openapi({
              description:
                'The protocol used to communicate with the upstream. Accepted values are: "`grpc`", "`grpcs`", "`http`", "`https`", "`tcp`", "`tls`", "`tls_passthrough`", "`udp`", "`ws`"\n, "`wss`"\n. Default: "`http`".',
              example: 'http',
            }),
          host: z
            .string()
            .openapi({
              description:
                'The host of the upstream server. Note that the host value is case sensitive.\n',
              example: 'example.com',
            }),
          port: z
            .int()
            .default(80)
            .openapi({ description: 'The upstream server port. Default: `80`.\n', example: 80 }),
          path: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The path to be used in requests to the upstream server.\n',
              example: '/some_api',
            }),
          connect_timeout: z
            .int()
            .default(6000)
            .exactOptional()
            .openapi({
              description:
                'The timeout in milliseconds for establishing a connection to the upstream server.',
              example: 6000,
            }),
          write_timeout: z
            .int()
            .default(6000)
            .exactOptional()
            .openapi({
              description:
                'The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server. Default: `60000`.\n',
              example: 6000,
            }),
          read_timeout: z
            .int()
            .default(6000)
            .exactOptional()
            .openapi({
              description:
                'The timeout in milliseconds between two successive read operations for transmitting a request to the upstream server. Default: `60000`.\n',
              example: 6000,
            }),
          tags: z
            .array(z.string().openapi({ example: 'user-level' }))
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the service for grouping and filtering.\n',
            }),
          client_certificate: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ example: '4e3ad2e4-0bc4-4638-8e34-c84a417ba39b' }),
            })
            .exactOptional()
            .openapi({
              description:
                'Certificate to be used as client certificate while TLS handshaking to the upstream server. With form-encoded, the notation is `client_certificate.id=<client_certificate id>`. With JSON, use `"client_certificate":{"id":"<client_certificate id>"}`.',
              required: [],
            }),
          tls_verify: z
            .boolean()
            .default(true)
            .exactOptional()
            .openapi({
              description:
                'Whether to enable verification of upstream server TLS certificate. If set to null, then the Nginx default is respected.\n',
            }),
          tls_verify_depth: z
            .string()
            .nullable()
            .default(null)
            .exactOptional()
            .openapi({
              description:
                "Maximum depth of chain while verifying Upstream server's TLS certificate. If set to null, then the Nginx default is respected. Default: null.\n",
              example: 'respected',
            }),
          ca_certificates: z
            .array(z.string().openapi({ example: '4e3ad2e4-0bc4-4638-8e34-c84a417ba39b' }))
            .exactOptional()
            .openapi({
              description:
                "Array of CA Certificate object UUIDs that are used to build the trust store while verifying upstream server's TLS certificate. If set to null when Nginx default is respected. \nWith form-encoded, the notation is `ca_certificates[]=4e3ad2e4-0bc4-4638-8e34-c84a417ba39b&ca_certificates[]=51e77dc2-8f3e-4afa-9d0e-0e3bbbcfd515`. With JSON, use an Array.\n",
            }),
          enabled: z
            .boolean()
            .default(true)
            .openapi({
              description:
                'Whether the service is active. If set to `false`, the proxy behavior will be as if any routes attached to it do not exist (404). Default: `true`.\n',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              id: '9748f662-7711-4a90-8186-dc02f10eb0f5',
              created_at: 1422386534,
              updated_at: 1422386534,
              name: 'my-service',
              retries: 5,
              protocol: 'http',
              host: 'example.com',
              port: 80,
              path: '/some_api',
              connect_timeout: 60000,
              write_timeout: 60000,
              read_timeout: 60000,
              tags: ['user-level', 'low-priority'],
              client_certificate: { id: '4e3ad2e4-0bc4-4638-8e34-c84a417ba39b' },
              tls_verify: true,
              tls_verify_depth: null,
              ca_certificates: [
                '4e3ad2e4-0bc4-4638-8e34-c84a417ba39b',
                '51e77dc2-8f3e-4afa-9d0e-0e3bbbcfd515',
              ],
              enabled: true,
            },
          },
          required: ['protocol', 'host', 'port', 'enabled'],
        }),
      examples: {
        Example: {
          value: {
            name: 'my-service',
            retries: 5,
            protocol: 'http',
            host: 'example.com',
            port: 80,
            path: '/some_api',
            connect_timeout: 6000,
            write_timeout: 6000,
            read_timeout: 6000,
            tags: ['user-level'],
            client_certificate: { id: '4e3ad2e4-0bc4-4638-8e34-c84a417ba39b' },
            tls_verify: true,
            tls_verify_depth: null,
            ca_certificates: ['4e3ad2e4-0bc4-4638-8e34-c84a417ba39b'],
            enabled: true,
          },
        },
      },
    },
  },
}

const UpstreamRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          name: z
            .string()
            .openapi({
              description: 'This is a hostname, which must be equal to the `host` of a service.',
              example: 'my-upstream',
            }),
          algorithm: z
            .enum(['consistent-hashing', 'least-connections', 'round-robin', 'latency'])
            .default('round-robin')
            .exactOptional()
            .openapi({
              description:
                'Which load balancing algorithm to use. Accepted values are: `"consistent-hashing"`, `"least-connections"`,` "round-robin"`. Default: `"round-robin"`.\n',
              example: 'round-robin',
            }),
          hash_on: z
            .enum(['none', 'consumer', 'ip', 'cookie', 'uri_capture', 'path', 'query_arg'])
            .default('none')
            .exactOptional()
            .openapi({
              description:
                'What to use as hashing input. Using none results in a weighted-round-robin scheme with no hashing',
            }),
          hash_fallback: z
            .enum(['none', 'consumer', 'ip', 'cookie', 'uri_capture', 'path', 'query_arg'])
            .default('none')
            .exactOptional()
            .openapi({
              description:
                'What to use as hashing input if the primary hash_on does not return a hash (eg. header is missing, or no Consumer identified). Not available if hash_on is set to cookie.',
              example: 'none',
            }),
          hash_on_header: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The header name to take the value from as hash input. Only required when `hash_on` is set to header.',
              example: 'none',
            }),
          hash_fallback_header: z
            .string()
            .default('none')
            .exactOptional()
            .openapi({
              description:
                'The header name to take the value from as hash input. Only required when hash_fallback is set to header.',
              example: 'none',
            }),
          hash_on_cookie: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The cookie name to take the value from as hash input. Only required when `hash_on` or `hash_fallback` is set to `cookie`. If the specified cookie is not in the request, Kong will generate a value and set the cookie in the response.',
              example: 'none',
            }),
          hash_on_cookie_path: z
            .string()
            .default('/')
            .exactOptional()
            .openapi({
              description:
                'The cookie path to set in the response headers. Only required when `hash_on` or `hash_fallback` is set to `cookie`.',
              example: '/',
            }),
          hash_on_query_arg: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name of the query string argument to take the value from as hash input. Only required when `hash_on` is set to `query_arg`.',
              example: 'hash_value',
            }),
          hash_fallback_query_arg: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name of the query string argument to take the value from as hash input. Only required when `hash_fallback` is set to `query_arg`.',
              example: 'hash_value',
            }),
          hash_on_uri_capture: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name of the route URI capture to take the value from as hash input. Only required when `hash_on` is set to `uri_capture`.',
              example: 'hash_value',
            }),
          hash_fallback_uri_capture: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The name of the route URI capture to take the value from as hash input. Only required when `hash_fallback` is set to `uri_capture`.',
              example: 'hash_value',
            }),
          slots: z
            .int()
            .min(10)
            .max(65536)
            .default(10000)
            .exactOptional()
            .openapi({
              description:
                'The number of slots in the load balancer algorithm. If the algorithm is set to `round-robin`, this setting determines the maximum number of slots. If the algorithm is set to `consistent-hashing`, this setting determines the actual number of slots in the algorithm. Accepts an integer in the range 10-65536.',
              example: 5000,
            }),
          healthchecks: z
            .object({
              passive: z
                .object({
                  type: z
                    .enum(['tcp', 'http', 'https', 'grpc', 'grpcs'])
                    .default('http')
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether to perform passive health checks interpreting HTTP/HTTPS statuses, or just check for TCP connection success. In passive checks, http and https options are equivalent. Accepted values are `tcp`, `http`, `https`, `grpc`, `grpcs`.',
                      example: 'tcp',
                    }),
                  healthy: z
                    .object({
                      http_statuses: z
                        .array(
                          z.union([
                            z.literal(200),
                            z.literal(201),
                            z.literal(202),
                            z.literal(203),
                            z.literal(204),
                            z.literal(205),
                            z.literal(206),
                            z.literal(207),
                            z.literal(208),
                            z.literal(226),
                            z.literal(300),
                            z.literal(301),
                            z.literal(302),
                            z.literal(303),
                            z.literal(304),
                            z.literal(305),
                            z.literal(306),
                            z.literal(307),
                            z.literal(308),
                          ]),
                        )
                        .default([
                          200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304,
                          305, 306, 307, 308,
                        ])
                        .exactOptional()
                        .openapi({
                          description:
                            'An array of HTTP statuses which represent healthiness when produced by proxied traffic, as observed by passive health checks.  With form-encoded, the notation is `http_statuses[]=200&http_statuses[]=201`. With JSON, use an array.',
                          example: [200, 201, 202],
                        }),
                      successes: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of successes in proxied traffic (as defined by `healthchecks.passive.healthy.http_statuses`) to consider a target healthy, as observed by passive health checks.',
                          example: 2,
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  unhealthy: z
                    .object({
                      http_statuses: z
                        .array(z.union([z.literal(429), z.literal(500), z.literal(503)]))
                        .default([429, 500, 503])
                        .exactOptional()
                        .openapi({
                          description:
                            'An array of HTTP statuses which represent unhealthiness when produced by proxied traffic, as observed by passive health checks. With form-encoded, the notation is `http_statuses[]=429&http_statuses[]=500`. With JSON, use an array.',
                          example: [500, 503],
                        }),
                      timeouts: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of timeouts in proxied traffic to consider a target unhealthy, as observed by passive health checks.',
                          example: 1,
                        }),
                      http_failures: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of HTTP failures in proxied traffic (as defined by `healthchecks.passive.unhealthy.http_statuses`) to consider a target unhealthy, as observed by passive health checks.',
                          example: 3,
                        }),
                      tcp_failures: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of TCP connection failures to consider a target unhealthy, as observed by passive health checks.',
                          example: 1,
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              active: z
                .object({
                  https_verify_certificate: z.boolean().exactOptional(),
                  healthy: z
                    .object({
                      http_statuses: z
                        .array(z.int())
                        .default([200, 302])
                        .exactOptional()
                        .openapi({
                          description:
                            'An array of HTTP statuses to consider a success, indicating healthiness, when returned by a probe in active health checks. With form-encoded, the notation is `http_statuses[]=200&http_statuses[]=302`. With JSON, use an array.',
                          example: [200, 201],
                        }),
                      successes: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of successes in active probes (as defined by `healthchecks.active.healthy.http_statuses`) to consider a target healthy.',
                          example: 3,
                        }),
                      interval: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Interval between active health checks for healthy targets (in seconds). A value of zero indicates that active probes for healthy targets should not be performed.',
                          example: 30,
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  unhealthy: z
                    .object({
                      http_failures: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of HTTP failures in active probes (as defined by `healthchecks.active.unhealthy.http_statuses`) to consider a target unhealthy.',
                          example: 2,
                        }),
                      http_statuses: z
                        .array(z.int())
                        .default([429, 404, 500, 501, 502, 503, 504, 505])
                        .exactOptional()
                        .openapi({
                          description:
                            'An array of HTTP statuses to consider a failure, indicating unhealthiness, when returned by a probe in active health checks. With form-encoded, the notation is `http_statuses[]=429&http_statuses[]=404`. With JSON, use an array.',
                          example: [400, 404],
                        }),
                      timeouts: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of timeouts in active probes to consider a target unhealthy.',
                          example: 2,
                        }),
                      tcp_failures: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of TCP failures in active probes to consider a target unhealthy.',
                          example: 1,
                        }),
                      interval: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({
                          description:
                            'Interval between active health checks for unhealthy targets (in seconds). A value of zero indicates that active probes for unhealthy targets should not be performed.',
                          example: 10,
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  type: z
                    .enum(['tcp', 'http', 'https', 'grpc', 'grpcs'])
                    .default('http')
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether to perform active health checks using HTTP or HTTPS, or just attempt a TCP connection.',
                      example: 'https',
                    }),
                  concurrency: z
                    .int()
                    .default(10)
                    .exactOptional()
                    .openapi({
                      description:
                        'Number of targets to check concurrently in active health checks.',
                      example: 5,
                    }),
                  headers: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      description:
                        'One or more lists of values indexed by header name to use in GET HTTP request to run as a probe on active health checks. Values must be pre-formatted.',
                      example: { 'x-my-header': ['foo', 'bar'], 'x-another-header': ['bla'] },
                    }),
                  timeout: z
                    .int()
                    .default(1)
                    .exactOptional()
                    .openapi({
                      description: 'Socket timeout for active health checks (in seconds).',
                      example: 5,
                    }),
                  http_path: z
                    .string()
                    .default('/')
                    .exactOptional()
                    .openapi({
                      description:
                        'Path to use in GET HTTP request to run as a probe on active health checks.',
                    }),
                  https_sni: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "The hostname to use as an SNI (Server Name Identification) when performing active health checks using HTTPS. This is particularly useful when Targets are configured using IPs, so that the target host's certificate can be verified with the proper SNI.",
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              threshold: z
                .int()
                .min(0)
                .max(100)
                .default(0)
                .exactOptional()
                .openapi({
                  description:
                    "The minimum percentage of the upstream's targets' weight that must be available for the whole upstream to be considered healthy.",
                }),
            })
            .exactOptional()
            .openapi({ required: [] }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Upstream for grouping and filtering.',
              example: ['user-level', 'low-priority'],
            }),
          host_header: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The hostname to be used as Host header when proxying requests through Kong.',
            }),
          client_certificate: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ example: 'ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6' }),
            })
            .exactOptional()
            .openapi({
              description:
                'If set, the certificate to be used as client certificate while TLS handshaking to the upstream server.',
              required: [],
            }),
          use_srv_name: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'If set, the balancer will use SRV hostname(if DNS Answer has SRV record) as the proxy upstream Host.',
              example: false,
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              id: '58c8ccbb-eafb-4566-991f-2ed4f678fa70',
              created_at: 1422386534,
              name: 'my-upstream',
              algorithm: 'round-robin',
              hash_on: 'none',
              hash_fallback: 'none',
              hash_on_cookie_path: '/',
              slots: 10000,
              healthchecks: {
                passive: {
                  type: 'http',
                  healthy: {
                    http_statuses: [
                      200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304,
                      305, 306, 307, 308,
                    ],
                    successes: 0,
                  },
                  unhealthy: {
                    http_statuses: [429, 500, 503],
                    timeouts: 0,
                    http_failures: 0,
                    tcp_failures: 0,
                  },
                },
                active: {
                  https_verify_certificate: true,
                  healthy: { http_statuses: [200, 302], successes: 0, interval: 0 },
                  unhealthy: {
                    http_failures: 0,
                    http_statuses: [429, 404, 500, 501, 502, 503, 504, 505],
                    timeouts: 0,
                    tcp_failures: 0,
                    interval: 0,
                  },
                  type: 'http',
                  concurrency: 10,
                  headers: [{ 'x-my-header': ['foo', 'bar'], 'x-another-header': ['bla'] }],
                  timeout: 1,
                  http_path: '/',
                  https_sni: 'example.com',
                },
                threshold: 0,
              },
              tags: ['user-level', 'low-priority'],
              host_header: 'example.com',
              client_certificate: { id: 'ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6' },
              use_srv_name: false,
            },
          },
          required: ['name'],
        }),
      examples: {
        Upstream: {
          value: {
            name: 'my-upstream',
            algorithm: 'round-robin',
            hash_on: 'none',
            hash_fallback: 'none',
            hash_on_cookie_path: '/',
            slots: 10000,
            healthchecks: {
              passive: {
                type: 'http',
                healthy: {
                  http_statuses: [
                    200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305,
                    306, 307, 308,
                  ],
                  successes: 0,
                },
                unhealthy: {
                  http_statuses: [429, 500, 503],
                  timeouts: 0,
                  http_failures: 0,
                  tcp_failures: 0,
                },
              },
              active: {
                https_verify_certificate: true,
                healthy: { http_statuses: [200, 302], successes: 0, interval: 0 },
                unhealthy: {
                  http_failures: 0,
                  http_statuses: [429, 404, 500, 501, 502, 503, 504, 505],
                  timeouts: 0,
                  tcp_failures: 0,
                  interval: 0,
                },
                type: 'http',
                concurrency: 10,
                headers: {
                  type: 'object',
                  properties: {
                    'x-my-header': {
                      type: 'array',
                      items: { type: 'string' },
                      description: 'The value(s) of the x-my-header header.',
                    },
                    'x-another-header': {
                      type: 'array',
                      items: { type: 'string' },
                      description: 'The value(s) of the x-another-header header.',
                    },
                  },
                },
                timeout: 1,
                http_path: '/',
                https_sni: 'example.com',
              },
              threshold: 0,
            },
            tags: ['user-level', 'low-priority'],
            host_header: 'example.com',
            client_certificate: { id: 'ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6' },
            use_srv_name: false,
          },
        },
        'Example request': {
          value: {
            name: 'my-upstream',
            tags: ['user-level', 'low-priority'],
            algorithm: 'round-robin',
          },
        },
      },
    },
  },
}

const TargetRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          target: z
            .string()
            .default('example.com:8000')
            .exactOptional()
            .openapi({ description: 'The target for the upstream' }),
          weight: z
            .int()
            .min(0)
            .max(65535)
            .default(100)
            .exactOptional()
            .openapi({
              description:
                'The weight this target gets within the upstream loadbalancer (`0`-`65535`). If the hostname resolves to an SRV record, the `weight` value will be overridden by the value from the DNS record.',
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Target for grouping and filtering.',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              upstream: { id: 'bdab0e47-4e37-4f0b-8fd0-87d95cc4addc' },
              target: 'example.com:8000',
              weight: 100,
              tags: ['user-level', 'low-priority'],
            },
          },
          required: [],
        }),
      examples: {
        Example: { value: { target: 'example.com:8000', weight: 100, tags: ['string'] } },
      },
    },
  },
}

const VaultRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          prefix: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'The unique prefix (or identifier) for this Vault configuration. The prefix is used to load the right Vault configuration and implementation when referencing secrets with the other entities.\n',
              example: 'env',
            }),
          name: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "The name of the Vault that's going to be added. Currently, the Vault implementation must be installed in every Kong instance.\n",
              example: 'env',
            }),
          description: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The description of the Vault object.\n',
              example: 'This vault is used to retrieve redis database access credentials',
            }),
          config: z
            .object({ prefix: z.string().exactOptional().openapi({ example: 'SSL_' }) })
            .exactOptional()
            .openapi({
              description:
                "The configuration properties for the Vault which can be found on the vaults' documentation page.\n",
              required: [],
            }),
          tags: z
            .array(z.string())
            .exactOptional()
            .openapi({
              description:
                'An optional set of strings associated with the Vault for grouping and filtering.\n',
            }),
        })
        .openapi({
          'x-examples': {
            'Example 1': {
              prefix: 'env',
              name: 'env',
              description: 'This vault is used to retrieve redis database access credentials',
              config: { prefix: 'SSL_' },
              tags: ['database-credentials', 'data-plane'],
            },
          },
          required: [],
        }),
      examples: {
        'Example 1': {
          value: {
            prefix: 'env',
            name: 'env',
            description: 'This vault is used to retrieve redis database access credentials',
            config: { prefix: 'SSL_' },
            tags: ['database-credentials', 'data-plane'],
          },
        },
      },
    },
  },
}

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Information'],
  summary: "Get Kong's instance information",
  description:
    'Returns detailed information about the Kong gateway instance, including the full Kong configuration, available and unavailable plugins, version, edition (enterprise or community), a tagline, the unique node identifier, and other metadata.\n',
  operationId: 'geInfo',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The version number of the Kong instance.',
                  example: '2.3.3',
                }),
              edition: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the Kong instance is the Community or Enterprise edition.',
                  example: 'Community',
                }),
              tagline: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A tagline or slogan for the Kong instance.',
                  example: 'Welcome to Kong',
                }),
              node_id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description: 'A unique identifier for the node, in UUID format.',
                  example: 'a74d7c4f-ef83-4bbe-a5e7-3f5409f4a0b9',
                }),
              hostname: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The hostname of the Kong node.',
                  example: 'kong-node.example.com',
                }),
              timers: z
                .object({
                  running: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The number of running timers.', example: 5 }),
                  pending: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The number of pending timers.', example: 2 }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information about running and pending timers.',
                  required: [],
                }),
              plugins: z
                .object({
                  available_on_server: z
                    .record(
                      z.string(),
                      z
                        .object({
                          version: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The version of the plugin.' }),
                          priority: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'The priority of the plugin.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  enabled_in_cluster: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'A list of distinct plugin names enabled in the cluster.',
                      example: ['jwt', 'acl'],
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Information about plugins.', required: [] }),
              lua_version: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The version of Lua used by the Kong instance.',
                  example: 'LuaJIT 2.1.0-beta3',
                }),
              configuration: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'A sanitized version of the Kong configuration, excluding sensitive values.',
                }),
              pids: z
                .object({
                  master: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The PID of the master process.', example: 4321 }),
                  workers: z
                    .array(z.int())
                    .exactOptional()
                    .openapi({
                      description: 'An array of worker process PIDs.',
                      example: [1234, 5678],
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Process IDs for the master process and worker processes.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            openSourceExample: {
              summary: 'Open Source Edition Example Response',
              value: {
                configuration: {
                  _debug_pg_ttl_cleanup_interval: 300,
                  admin_acc_logs: '/usr/local/kong/logs/admin_access.log',
                  admin_access_log: '/dev/stdout',
                },
                edition: 'community',
                hostname: 'b8f553cfbd0c',
                lua_version: 'LuaJIT 2.1.0-20230410',
                node_id: '39bfa49d-3394-4f8e-b9db-94b786bc4e5f',
                pids: { master: 1, workers: [1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285] },
                plugins: {
                  available_on_server: { acl: { priority: 950, version: '3.6.0' } },
                  enabled_in_cluster: [],
                },
                tagline: 'Welcome to kong',
                timers: { pending: 1, running: 145 },
                version: '3.6.0',
              },
            },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
    405: {
      description: 'Method Not Allowed',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
      headers: z.object({
        Server: z
          .string()
          .exactOptional()
          .openapi({
            description: "Kong's server tokens.",
            param: { required: false },
            example: 'kong/2.3.3',
          }),
      }),
    },
  },
})

export const getCaCertificatesRoute = createRoute({
  method: 'get',
  path: '/ca_certificates',
  tags: ['CA Certificates'],
  summary: 'List all CA certificates',
  description:
    'Retrieve a list of all available Certificate Authority (CA) certificates, including the certificate ID, creation date, and other details. You can use query parameters to filter the results by size or tags, for example `/ca-certificates?size=50&tags=enterprise`.',
  operationId: 'list-ca_certificate',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing CA Certificates',
      content: {
        'application/json': { schema: CACertificateSchema, examples: {} },
        'text/plain': { schema: CACertificateSchema },
      },
    },
  },
})

export const postCaCertificatesRoute = createRoute({
  method: 'post',
  path: '/ca_certificates',
  tags: ['CA Certificates'],
  summary: 'Create a new CA certificate',
  description:
    'Create a new Certificate Authority (CA) certificate. The request body must include the `cert` property, the certificate data in PEM format; it can also include `cert_digest`, a digest of the certificate in hex format for verifying the certificates integrity, and `tags`, an optional list of tags to categorize the certificate.',
  operationId: 'create-ca_certificate',
  request: { body: CACertRequestRequestBody },
  responses: {
    201: {
      description: 'The created certificate object.',
      content: { 'application/json': { schema: CACertificateSchema } },
    },
    400: { description: 'Invalid CA certificate' },
    401: HTTP401ErrorResponse,
  },
})

export const getCaCertificatesCaCertificateIdRoute = createRoute({
  method: 'get',
  path: '/ca_certificates/{ca_certificate_id}',
  tags: ['CA Certificates'],
  summary: 'Fetch a CA certificate',
  description:
    'Retrieve details about the specified Certificate Authority (CA) certificate using the provided path parameter `ca_certificate_id`.',
  operationId: 'get-ca_certificate',
  request: {
    params: z.object({
      ca_certificate_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the certificate to retrieve.',
            in: 'path',
            name: 'ca_certificate_id',
            required: true,
            schema: { type: 'string' },
            examples: {
              example: {
                summary: 'Example CA certificate ID',
                value: '04fbeacf-a9f1-4a5d-ae4a-b0407445db3f',
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The specified CA certificate exists in the system, and the response includes details about the certificate.',
      content: { 'application/json': { schema: CACertificateSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putCaCertificatesCaCertificateIdRoute = createRoute({
  method: 'put',
  path: '/ca_certificates/{ca_certificate_id}',
  tags: ['CA Certificates'],
  summary: 'Update a CA Certificate',
  description:
    'Create or Update a CA Certificate using the provided path parameter `ca_certificate_id`.',
  operationId: 'updatet-ca_certificate',
  request: {
    params: z.object({ ca_certificate_id: CaCertificateIdParamsSchema }),
    body: CACertRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted CA Certificate',
      content: { 'application/json': { schema: CACertificateSchema } },
    },
    400: {
      description: 'Invalid CA Certificate',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteCaCertificatesCaCertificateIdRoute = createRoute({
  method: 'delete',
  path: '/ca_certificates/{ca_certificate_id}',
  tags: ['CA Certificates'],
  summary: 'Delete a CA Certificate',
  description:
    'Delete the specified Certificate Authority (CA) certificate using the provided ca_certificate_id.',
  operationId: 'delete-ca_certificate',
  request: { params: z.object({ ca_certificate_id: CaCertificateIdParamsSchema }) },
  responses: {
    204: { description: "Successfully deleted CA Certificate or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchCaCertificatesCaCertificateIdRoute = createRoute({
  method: 'patch',
  path: '/ca_certificates/{ca_certificate_id}',
  tags: ['CA Certificates'],
  summary: 'Update a CA Certificate',
  description:
    'Update the specified Certificate Authority (CA) certificate using the provided ca_certificate_id. Use this endpoint to modify an existing CA certificate in the system. The request body should include the fields of the CA certificate that need to be updated.\n\n> This API is not available in DB-less mode.',
  operationId: 'update-ca_certificate',
  request: {
    params: z.object({ ca_certificate_id: CaCertificateIdParamsSchema }),
    body: CACertRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated CA Certificate',
      content: { 'application/json': { schema: CACertificateSchema } },
    },
    400: {
      description: 'Invalid CA Certificate',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getCertificatesRoute = createRoute({
  method: 'get',
  path: '/certificates',
  tags: ['Certificates'],
  summary: 'List all certificates',
  description:
    'Retrieve a list of all available CA Certificate Authority (CA) certificates. You can use query parameters to filter the results by size or tags, for example `/certificates?size=50&tags=enterprise`.',
  operationId: 'list-certificate',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing Certificates',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CertificateSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postCertificatesRoute = createRoute({
  method: 'post',
  path: '/certificates',
  tags: ['Certificates'],
  summary: 'Create a new Certificate',
  description:
    'Create a new certificate with the provided details. Use this endpoint to add a new certificate to the system. The request body must include the certificate data and other details required for creating a new certificate.\n\n> Note: This API is not available in DB-less mode.',
  operationId: 'create-certificate',
  request: { body: CertRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully created Certificate',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    400: {
      description: 'Invalid Certificate',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getCertificatesCertificateIdRoute = createRoute({
  method: 'get',
  path: '/certificates/{certificate_id}',
  tags: ['Certificates'],
  summary: 'Fetch a Certificate',
  description:
    'Retrieve details about the specified certificate using the provided path parameter `certificate_id`.',
  operationId: 'get-certificate',
  request: { params: z.object({ certificate_id: CertificateIdParamsSchema }) },
  responses: {
    200: {
      description: 'HTTP 200 OK',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putCertificatesCertificateIdRoute = createRoute({
  method: 'put',
  path: '/certificates/{certificate_id}',
  tags: ['Certificates'],
  summary: 'Update a Certificate',
  description:
    'Update details about the specified certificate using the provided path parameter `certificate_id`.\n\nInserts (or replaces) the certificate under the requested `certificate_id`with the definition specified in the request body. When the `name` or `id` attribute has the structure of a UUID, the certificate being inserted/replaced will be identified by its `id`. Otherwise it will be identified by the `name`.\n\nWhen creating a new Certificate without specifying `id` (neither in the path or the request body), then it will be auto-generated.\n\n\n\n> Note: This API is not available in DB-less mode.\n',
  operationId: 'update-certificate-put',
  request: {
    params: z.object({ certificate_id: CertificateIdParamsSchema }),
    body: CertRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted Certificate',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    400: {
      description: 'Invalid Certificate',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteCertificatesCertificateIdRoute = createRoute({
  method: 'delete',
  path: '/certificates/{certificate_id}',
  tags: ['Certificates'],
  summary: 'Delete a Certificate',
  description: 'Delete a Certificate\n\n>Note: This API is not available in DB-less mode.\n',
  operationId: 'delete-certificate',
  request: {
    params: z.object({
      certificate_id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Certificate to delete',
            in: 'path',
            name: 'certificate_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: "Successfully deleted Certificate or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchCertificatesCertificateIdRoute = createRoute({
  method: 'patch',
  path: '/certificates/{certificate_id}',
  tags: ['Certificates'],
  summary: 'Update a Certificate',
  description:
    'Update a Certificate\n\nInserts (or replaces) the certificate under the requested `certificate_id`with the definition specified in the request body. When the `name` or `id` attribute has the structure of a UUID, the certificate being inserted/replaced will be identified by its `id`. Otherwise it will be identified by the `name`.\n\nWhen creating a new Certificate without specifying `id` (neither in the path or the request body), then it will be auto-generated.\n\n>Note: This API is not available in DB-less mode.',
  operationId: 'update-certificate',
  request: {
    params: z.object({
      certificate_id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Certificate to update',
            in: 'path',
            name: 'certificate_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: CertRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Certificate',
      content: { 'application/json': { schema: CertificateSchema } },
    },
    400: { description: 'Invalid Certificate' },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getCertificatesCertificateNameOrIdSnisRoute = createRoute({
  method: 'get',
  path: '/certificates/{certificate_name_or_id}/snis',
  tags: ['SNIs'],
  summary: 'List SNIs associated with a certificate',
  description:
    'Retrieve a paginated list of all SNIs associated with a certificate. Use this endpoint to retrieve a list of SNIs that are linked to a specific certificate. You can use the optional query parameters to filter the results based on specific criteria. The response will include the list of SNIs and pagination information. See the response schema for details on the expected format of the response body.',
  operationId: 'get-sni-with-certificate',
  request: {
    params: z.object({ certificate_name_or_id: CertificateNameOrIdParamsSchema }),
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: { 200: SniResponseResponse, 401: HTTP401ErrorResponse },
})

export const postCertificatesCertificateNameOrIdSnisRoute = createRoute({
  method: 'post',
  path: '/certificates/{certificate_name_or_id}/snis',
  tags: ['SNIs'],
  summary: 'Create a new SNI associated with a Certificate',
  description:
    'Create a new SNI and associate it with a certificate in the system. Use this endpoint to add a new SNI to the system and link it to a specific certificate.',
  operationId: 'create-sni-for-certificate',
  request: {
    params: z.object({ certificate_name_or_id: CertificateNameOrIdParamsSchema }),
    body: CreateSniRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully created SNI',
      content: { 'application/json': { schema: SNISchema } },
    },
    400: {
      description: 'Invalid SNI',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getCertificatesCertificateIdSnisSniNameOrIdRoute = createRoute({
  method: 'get',
  path: '/certificates/{certificate_id}/snis/{sni_name_or_id}',
  tags: ['SNIs'],
  summary: 'Fetch an SNI associated with a certificate',
  description: 'Get an SNI associated with a Certificate using ID or name.',
  operationId: 'fetch-sni-with-certificate',
  request: {
    params: z.object({
      certificate_id: z
        .string()
        .openapi({
          param: {
            name: 'certificate_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: '7fca84d6-7d37-4a74-a7b0-93e576089a41' },
            description: 'The unique identifier of the Certificate to retrieve.',
          },
          example: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
        }),
      sni_name_or_id: z
        .string()
        .openapi({
          param: {
            name: 'sni_name_or_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-sni' },
            description: 'The unique identifier or the name of the SNI to retrieve.',
          },
          example: 'my-sni',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched SNI',
      content: { 'application/json': { schema: SNISchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putCertificatesCertificateIdSnisSniNameOrIdRoute = createRoute({
  method: 'put',
  path: '/certificates/{certificate_id}/snis/{sni_name_or_id}',
  tags: ['SNIs'],
  summary: 'Upsert an SNI associated with a certificate',
  description:
    'Create or Update an SNI associated with a Certificate using ID or name.\n\nInserts (or replaces) the SNI under the requested resource with the definition specified in the body. The SNI will be identified via the name or id attribute.\n\nWhen the name or id attribute has the structure of a UUID, the SNI being inserted/replaced will be identified by its id. Otherwise it will be identified by its name.\n\nWhen creating a new SNI without specifying id (neither in the URL nor in the body), then it will be auto-generated.\n',
  operationId: 'upsert-sni-for-certificate',
  request: {
    params: z.object({
      certificate_id: z
        .string()
        .openapi({
          param: {
            name: 'certificate_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: '7fca84d6-7d37-4a74-a7b0-93e576089a41' },
            description: 'The unique identifier of the Certificate to retrieve.',
          },
          example: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
        }),
      sni_name_or_id: z
        .string()
        .openapi({
          param: {
            name: 'sni_name_or_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-sni' },
            description: 'The unique identifier or the name of the SNI to retrieve.',
          },
          example: 'my-sni',
        }),
    }),
    body: CreateSniRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted SNI',
      content: { 'application/json': { schema: SNISchema } },
    },
    400: {
      description: 'Invalid SNI',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteCertificatesCertificateIdSnisSniNameOrIdRoute = createRoute({
  method: 'delete',
  path: '/certificates/{certificate_id}/snis/{sni_name_or_id}',
  tags: ['SNIs'],
  summary: 'Delete a an SNI associated with a Certificate',
  description: 'Delete a an SNI associated with a Certificate using ID or name.\n',
  operationId: 'delete-sni-for-certificate',
  request: {
    params: z.object({
      certificate_id: z
        .string()
        .openapi({
          param: {
            name: 'certificate_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: '7fca84d6-7d37-4a74-a7b0-93e576089a41' },
            description: 'The unique identifier of the Certificate to retrieve.',
          },
          example: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
        }),
      sni_name_or_id: z
        .string()
        .openapi({
          param: {
            name: 'sni_name_or_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-sni' },
            description: 'The unique identifier or the name of the SNI to retrieve.',
          },
          example: 'my-sni',
        }),
    }),
  },
  responses: {
    204: { description: "Successfully deleted SNI or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchCertificatesCertificateIdSnisSniNameOrIdRoute = createRoute({
  method: 'patch',
  path: '/certificates/{certificate_id}/snis/{sni_name_or_id}',
  tags: ['SNIs'],
  summary: 'Update SNI associated to a certificate',
  description:
    '\n\n\n Update an existing SNI associated with a certificate in the system using the SNI ID or name. The request body should include the fields of the SNI that need to be updated, such as the name, description, or other properties. If the request body contains valid data, the endpoint will update the SNI and return a success response.\n',
  operationId: 'update-sni-for-certificate',
  request: {
    params: z.object({
      certificate_id: z
        .string()
        .openapi({
          param: {
            name: 'certificate_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: '7fca84d6-7d37-4a74-a7b0-93e576089a41' },
            description: 'The unique identifier of the Certificate to retrieve.',
          },
          example: '7fca84d6-7d37-4a74-a7b0-93e576089a41',
        }),
      sni_name_or_id: z
        .string()
        .openapi({
          param: {
            name: 'sni_name_or_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-sni' },
            description: 'The unique identifier or the name of the SNI to retrieve.',
          },
          example: 'my-sni',
        }),
    }),
    body: CreateSniRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated SNI',
      content: { 'application/json': { schema: SNISchema } },
    },
    400: {
      description: 'Invalid SNI',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getConsumersRoute = createRoute({
  method: 'get',
  path: '/consumers',
  tags: ['Consumers'],
  summary: 'List all Consumers',
  description:
    'Retrieve a list of all consumers.You can use query parameters to filter the results by size or tags, for example `/consumers?size=50&tags=enterprise`.',
  operationId: 'list-consumer',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing Consumers',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ConsumerSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postConsumersRoute = createRoute({
  method: 'post',
  path: '/consumers',
  tags: ['Consumers'],
  summary: 'Create a new Consumer',
  description: 'Create a new Consumer',
  operationId: 'create-consumer',
  request: { body: ConsumerRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully created Consumer',
      content: { 'application/json': { schema: ConsumerSchema } },
    },
    400: {
      description: 'Invalid Consumer',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getConsumersConsumerUsernameOrIdRoute = createRoute({
  method: 'get',
  path: '/consumers/{consumer_username_or_id}',
  tags: ['Consumers'],
  summary: 'Fetch a Consumer',
  description:
    'Retrieve the details of a specific consumer in the system using either the consumer ID or the consumer username. If the consumer with the specified ID or username cannot be found, the endpoint will return a 404.',
  operationId: 'get-consumer',
  request: {
    params: z.object({
      consumer_username_or_id: z
        .string()
        .openapi({
          param: {
            name: 'consumer_username_or_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-username' },
            description: 'The unique identifier or the username of the Consumer to retrieve.',
          },
          example: 'my-username',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched Consumer',
      content: { 'application/json': { schema: ConsumerSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putConsumersConsumerUsernameOrIdRoute = createRoute({
  method: 'put',
  path: '/consumers/{consumer_username_or_id}',
  tags: ['Consumers'],
  summary: 'Update a Consumer',
  description:
    'Create or Update Consumer using ID or username. The consumer will be identified via the username or id attribute.If the consumer with the specified ID or username cannot be found, the endpoint will return a 404.\n\nWhen the username or id attribute has the structure of a UUID, the Consumer being inserted/replaced will be identified by its id. Otherwise it will be identified by its username.\n\nWhen creating a new Consumer without specifying id (neither in the URL nor in the body), then it will be auto-generated.\n\nNotice that specifying a username in the URL and a different one in the request body is not allowed.\n\n> Note: This API is not available in DB-less mode.',
  operationId: 'upsert-consumer',
  request: {
    params: z.object({
      consumer_username_or_id: z
        .string()
        .openapi({
          param: {
            name: 'consumer_username_or_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-username' },
            description: 'The unique identifier or the username of the Consumer to retrieve.',
          },
          example: 'my-username',
        }),
    }),
    body: ConsumerRequestRequestBody,
  },
  responses: {
    200: ConsumerResponseDataResponse,
    400: { description: 'Bad Request' },
    401: HTTP401ErrorResponse,
    404: { description: 'Not Found' },
  },
})

export const deleteConsumersConsumerUsernameOrIdRoute = createRoute({
  method: 'delete',
  path: '/consumers/{consumer_username_or_id}',
  tags: ['Consumers'],
  summary: 'Delete a Consumer',
  description:
    'Delete a specific consumer from the system using either the consumer ID or the consumer username. This operation is irreversible and permanently removes all data associated with the specified consumer. If the consumer was deleted succesfully the endpoint will return a 204 response indicating that the resource did not exist.',
  operationId: 'delete-consumer',
  request: {
    params: z.object({
      consumer_username_or_id: z
        .string()
        .openapi({
          param: {
            name: 'consumer_username_or_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-username' },
            description: 'The unique identifier or the username of the Consumer to retrieve.',
          },
          example: 'my-username',
        }),
    }),
  },
  responses: {
    204: { description: "Successfully deleted Consumer or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchConsumersConsumerUsernameOrIdRoute = createRoute({
  method: 'patch',
  path: '/consumers/{consumer_username_or_id}',
  tags: ['Consumers'],
  summary: 'Update a Consumer',
  description:
    'Update the details of a specific consumer in the system using either the consumer ID or the consumer username.If the consumer with the specified ID or username cannot be found, the endpoint will return a 404.',
  operationId: 'update-consumer',
  request: {
    params: z.object({
      consumer_username_or_id: z
        .string()
        .openapi({
          param: {
            name: 'consumer_username_or_id',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-username' },
            description: 'The unique identifier or the username of the Consumer to retrieve.',
          },
          example: 'my-username',
        }),
    }),
    body: ConsumerRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Consumer',
      content: { 'application/json': { schema: ConsumerSchema } },
    },
    400: {
      description: 'Invalid Consumer',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getConsumersConsumerUsernameOrIdPluginsRoute = createRoute({
  method: 'get',
  path: '/consumers/{consumer_username_or_id}/plugins',
  tags: ['Plugins'],
  summary: 'List all plugins associated with a consumer',
  description: 'Retrieve a list of all plugins associated with a consumer.',
  operationId: 'list-plugins-for-consumer',
  request: {
    params: z.object({ consumer_username_or_id: ConsumerUsernameOrIdParamsSchema }),
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: { 200: PluginResponseResponse },
})

export const postConsumersConsumerUsernameOrIdPluginsRoute = createRoute({
  method: 'post',
  path: '/consumers/{consumer_username_or_id}/plugins',
  tags: ['Plugins'],
  summary: 'Create a new Plugin associated with a Consumer',
  description: 'Create a new Plugin associated with a Consumer',
  operationId: 'create-plugin-for-consumer',
  request: {
    params: z.object({ consumer_username_or_id: ConsumerUsernameOrIdParamsSchema }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully created Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getConsumersConsumerUsernameOrIdPluginsPluginIdRoute = createRoute({
  method: 'get',
  path: '/consumers/{consumer_username_or_id}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Fetch a Plugin associated with a Consumer',
  description: 'Get a Plugin associated with a Consumer using ID.',
  operationId: 'fetch-plugin-for-consumer',
  request: {
    params: z.object({
      consumer_username_or_id: ConsumerUsernameOrIdParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putConsumersConsumerUsernameOrIdPluginsPluginIdRoute = createRoute({
  method: 'put',
  path: '/consumers/{consumer_username_or_id}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Upsert a Plugin associated with a Consumer',
  description: 'Create or Update a Plugin associated with a Consumer using ID.',
  operationId: 'upsert-plugin-for-consumer',
  request: {
    params: z.object({
      consumer_username_or_id: ConsumerUsernameOrIdParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
    body: PluginRequestRequestBody,
  },
  responses: { 200: PluginResponseResponse, 401: HTTP401ErrorResponse },
})

export const deleteConsumersConsumerUsernameOrIdPluginsPluginIdRoute = createRoute({
  method: 'delete',
  path: '/consumers/{consumer_username_or_id}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Delete a Plugin associated with a Consumer',
  description: 'Delete a Plugin associated with a Consumer using ID.',
  operationId: 'delete-plugin-for-consumer',
  request: {
    params: z.object({
      consumer_username_or_id: ConsumerUsernameOrIdParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
  },
  responses: {
    204: { description: "Successfully deleted Plugin or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchConsumersConsumerUsernameOrIdPluginsPluginIdRoute = createRoute({
  method: 'patch',
  path: '/consumers/{consumer_username_or_id}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Update a Plugin associated with a Consumer',
  description: 'Update a Plugin associated with a consumer using the consumer username or ID.',
  operationId: 'update-plugin-for-consumer',
  request: {
    params: z.object({
      consumer_username_or_id: ConsumerUsernameOrIdParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: PluginResponseResponse,
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getKeySetsRoute = createRoute({
  method: 'get',
  path: '/key-sets',
  tags: ['Key-sets'],
  summary: 'List all Key-sets',
  description:
    'Retrieve a list of all Key-sets in the system. A Key Set object holds a collection of asymmetric key objects. This entity allows to logically group keys by their purpose. Key Sets can be both tagged and filtered by tags.\n',
  operationId: 'list-key-set',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: { 200: KeySetResponseResponse, 401: HTTP401ErrorResponse },
})

export const postKeySetsRoute = createRoute({
  method: 'post',
  path: '/key-sets',
  tags: ['Key-sets'],
  summary: 'Create a new Key-set',
  description:
    'This endpoint allows creating a new Key-set by sending a JSON object that describes the Key-set to be created.The request body must contain all the fields required to create a new Key-set.',
  operationId: 'create-key-set',
  request: { body: KeySetRequestRequestBody },
  responses: {
    200: KeySetResponseResponse,
    400: { description: 'Returned if the request contains invalid data.' },
    401: HTTP401ErrorResponse,
  },
})

export const getKeySetsKeySetIdOrNameRoute = createRoute({
  method: 'get',
  path: '/key-sets/{key-set_id_or_name}',
  tags: ['Key-sets'],
  summary: 'Fetch a Key-set',
  description:
    'This endpoint retrieves information about a specific key-set based on its ID or name.',
  operationId: 'get-key-set',
  request: { params: z.object({ 'key-set_id_or_name': KeySetIdOrNameParamsSchema }) },
  responses: {
    200: KeySetResponseResponse,
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putKeySetsKeySetIdOrNameRoute = createRoute({
  method: 'put',
  path: '/key-sets/{key-set_id_or_name}',
  tags: ['Key-sets'],
  summary: 'Update a Key-set',
  description:
    'Update a Key-set using ID or name.\n\n> Note: This API is not available in DB-less mode.',
  operationId: 'upsert-key-set',
  request: {
    params: z.object({ 'key-set_id_or_name': KeySetIdOrNameParamsSchema }),
    body: KeySetRequestRequestBody,
  },
  responses: {
    200: KeySetResponseResponse,
    400: {
      description: 'Invalid Key-set',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteKeySetsKeySetIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/key-sets/{key-set_id_or_name}',
  tags: ['Key-sets'],
  summary: 'Delete a Key-set',
  description: 'Delete a Key-set\n\n> Note: This API is not available in DB-less mode.',
  operationId: 'delete-key-set',
  request: { params: z.object({ 'key-set_id_or_name': KeySetIdOrNameParamsSchema }) },
  responses: {
    204: { description: "Successfully deleted Key-set or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchKeySetsKeySetIdOrNameRoute = createRoute({
  method: 'patch',
  path: '/key-sets/{key-set_id_or_name}',
  tags: ['Key-sets'],
  summary: 'Update a Key-set',
  description:
    'Update a Key-set using ID or name.\n\n> Note: This API is not available in DB-less mode.\n\nInserts (or replaces) the Key Set under the requested resource with the definition specified in the body. The Key Set will be identified via the name or id attribute.\n\nWhen the name or id attribute has the structure of a UUID, the Key Set being inserted/replaced will be identified by its id. Otherwise it will be identified by its name.\n\nWhen creating a new Key Set without specifying id (neither in the URL nor in the body), then it will be auto-generated.\n\nNotice that specifying a name in the URL and a different one in the request body is not allowed.',
  operationId: 'update-key-set',
  request: {
    params: z.object({ 'key-set_id_or_name': KeySetIdOrNameParamsSchema }),
    body: KeySetRequestRequestBody,
  },
  responses: {
    200: KeySetResponseResponse,
    400: {
      description: 'Invalid Key-set',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getKeysRoute = createRoute({
  method: 'get',
  path: '/keys',
  tags: ['Keys'],
  summary: 'List all Keys',
  description: 'List all Keys',
  operationId: 'list-key',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing Keys',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(KeySchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postKeysRoute = createRoute({
  method: 'post',
  path: '/keys',
  tags: ['Keys'],
  summary: 'Create a new Key',
  description:
    'This API endpoint allows you to create a new key. When the request is successful, the API will respond with a 200 status code and a JSON object that represents the newly created key. If the request is invalid, the API will respond with a `400` status code and an error message in the response body.\n\n> Note: This API is not available in DB-less mode.\n',
  operationId: 'create-key',
  request: { body: KeysRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully created Key',
      content: { 'application/json': { schema: KeySchema } },
    },
    400: {
      description: 'Invalid Key',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getKeysKeyIdOrNameRoute = createRoute({
  method: 'get',
  path: '/keys/{key_id_or_name}',
  tags: ['Keys'],
  summary: 'Fetch a Key',
  description: 'Get a Key using ID or name.',
  operationId: 'get-key',
  request: { params: z.object({ key_id_or_name: KeyIdOrNameParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully fetched Key',
      content: {
        'application/json': {
          schema: KeySchema,
          examples: {
            example: {
              value: {
                id: 'd958f66b-8e99-44d2-b0b4-edd5bbf24658',
                jwk: '{"alg":"RSA",  "kid": "42",  ...}',
                kid: '42',
                name: 'a-key',
                pem: { private_key: '-----BEGIN', public_key: '-----BEGIN' },
                set: { id: 'b86b331c-dcd0-4b3e-97ce-47c5a9543031' },
              },
            },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putKeysKeyIdOrNameRoute = createRoute({
  method: 'put',
  path: '/keys/{key_id_or_name}',
  tags: ['Keys'],
  summary: 'Upsert a Key',
  description: 'Create or Update Key using ID or name.',
  operationId: 'upsert-key',
  request: {
    params: z.object({ key_id_or_name: KeyIdOrNameParamsSchema }),
    body: KeysRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted Key',
      content: {
        'application/json': {
          schema: KeySchema,
          examples: {
            Example: {
              value: {
                id: 'd958f66b-8e99-44d2-b0b4-edd5bbf24658',
                jwk: '{"alg":"RSA",  "kid": "42",  ...}',
                kid: '42',
                name: 'a-key',
                pem: { private_key: '-----BEGIN', public_key: '-----BEGIN' },
                set: { id: 'b86b331c-dcd0-4b3e-97ce-47c5a9543031' },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Key',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteKeysKeyIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/keys/{key_id_or_name}',
  tags: ['Keys'],
  summary: 'Delete a Key',
  description: 'Delete a Key',
  operationId: 'delete-key',
  request: { params: z.object({ key_id_or_name: KeyIdOrNameParamsSchema }) },
  responses: {
    204: { description: "Successfully deleted Key or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchKeysKeyIdOrNameRoute = createRoute({
  method: 'patch',
  path: '/keys/{key_id_or_name}',
  tags: ['Keys'],
  summary: 'Update a Key',
  description: 'Update a Key',
  operationId: 'update-key',
  request: {
    params: z.object({ key_id_or_name: KeyIdOrNameParamsSchema }),
    body: KeysRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Key',
      content: {
        'application/json': {
          schema: KeySchema,
          examples: {
            Example: {
              value: {
                id: '24D0DBDA-671C-11ED-BA0B-EF1DCCD3725F',
                set: { id: '46CA83EE-671C-11ED-BFAB-2FE47512C77A' },
                name: 'my-key',
                kid: '42',
                jwk: '{"alg":"RSA",  "kid": "42",  ...}',
                pem: { private_key: '-----BEGIN', public_key: '-----BEGIN' },
                tags: ['application-a', 'public-key-xyz'],
                created_at: 1422386534,
                updated_at: 1422386534,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Key',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getPluginsRoute = createRoute({
  method: 'get',
  path: '/plugins',
  tags: ['Plugins'],
  summary: 'List all Plugins',
  description:
    'This endpoint allows you to list all the plugins. You can use query parameters to filter the results by size or tags, for example `/plugins?size=50&tags=enterprise`.',
  operationId: 'list-plugin',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: { 200: PluginResponseResponse, 401: HTTP401ErrorResponse },
})

export const postPluginsRoute = createRoute({
  method: 'post',
  path: '/plugins',
  tags: ['Plugins'],
  summary: 'Create a new Plugin',
  description: 'Create a new Plugin\n\n>Note: This API is not available in DB-less mode.',
  operationId: 'create-plugin',
  request: { body: PluginRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully created Plugin',
      content: {
        'application/json': {
          schema: PluginSchema,
          examples: {
            example: {
              value: {
                config: {
                  anonymous: null,
                  hide_credentials: false,
                  key_in_body: false,
                  key_in_header: true,
                  key_in_query: true,
                  key_names: ['apikey'],
                  run_on_preflight: true,
                },
                enabled: true,
                id: '3fd1eea1-885a-4011-b986-289943ff8177',
                name: 'key-auth',
                protocols: ['grpc', 'grpcs', 'http', 'https'],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getPluginsPluginIdRoute = createRoute({
  method: 'get',
  path: '/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Fetch a Plugin',
  description: 'Get a Plugin using ID.',
  operationId: 'get-plugin',
  request: { params: z.object({ plugin_id: PluginIdParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully fetched Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putPluginsPluginIdRoute = createRoute({
  method: 'put',
  path: '/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Upsert a Plugin',
  description: 'Create or Update Plugin using ID.',
  operationId: 'upsert-plugin',
  request: {
    params: z.object({ plugin_id: PluginIdParamsSchema }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted Plugin',
      content: {
        'application/json': {
          schema: PluginSchema,
          examples: {
            example: {
              value: {
                config: {
                  anonymous: null,
                  hide_credentials: false,
                  key_in_body: false,
                  key_in_header: true,
                  key_in_query: true,
                  key_names: ['apikey'],
                  run_on_preflight: true,
                },
                enabled: true,
                id: '3fd1eea1-885a-4011-b986-289943ff8177',
                name: 'key-auth',
                protocols: ['grpc', 'grpcs', 'http', 'https'],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deletePluginsPluginIdRoute = createRoute({
  method: 'delete',
  path: '/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Delete a Plugin',
  description: 'Delete a Plugin',
  operationId: 'delete-plugin',
  request: { params: z.object({ plugin_id: PluginIdParamsSchema }) },
  responses: {
    204: { description: "Successfully deleted Plugin or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchPluginsPluginIdRoute = createRoute({
  method: 'patch',
  path: '/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Update a Plugin',
  description: 'Update a Plugin',
  operationId: 'update-plugin',
  request: {
    params: z.object({ plugin_id: PluginIdParamsSchema }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Plugin',
      content: {
        'application/json': {
          schema: PluginSchema,
          examples: {
            example: {
              value: {
                config: {
                  anonymous: null,
                  hide_credentials: false,
                  key_in_body: false,
                  key_in_header: true,
                  key_in_query: true,
                  key_names: ['apikey'],
                  run_on_preflight: true,
                },
                enabled: true,
                id: '3fd1eea1-885a-4011-b986-289943ff8177',
                name: 'key-auth',
                protocols: ['grpc', 'grpcs', 'http', 'https'],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getRoutesRoute = createRoute({
  method: 'get',
  path: '/routes',
  tags: ['Routes'],
  summary: 'List all routes',
  description:
    'List all routes\n\nroute entities define rules to match client requests. Each route is associated with a service, and a service may have multiple routes associated to it. Every request matching a given route will be proxied to its associated service.\n\n> Note: Path handling algorithms v1 was deprecated in Kong 3.0. From Kong 3.0, when router_flavor is set to expressions, route.path_handling will be unconfigurable and the path handling behavior will be "v0"; when router_flavor is set to traditional_compatible, the path handling behavior will be "v0" regardless of the value of route.path_handling. Only router_flavor = traditional will support path_handling "v1" behavior.',
  operationId: 'list-route',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing routes',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RouteSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postRoutesRoute = createRoute({
  method: 'post',
  path: '/routes',
  tags: ['Routes'],
  summary: 'Create a new route',
  description: 'Create a new route',
  operationId: 'create-route',
  request: { body: RouteRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully created route',
      content: { 'application/json': { schema: RouteSchema } },
    },
    400: {
      description: 'Invalid route',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getRoutesRouteIdOrNameRoute = createRoute({
  method: 'get',
  path: '/routes/{route_id_or_name}',
  tags: ['Routes'],
  summary: 'Fetch a route',
  description: 'Get a route using ID or name.',
  operationId: 'get-route',
  request: { params: z.object({ route_id_or_name: RouteIdOrNameParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully fetched route',
      content: { 'application/json': { schema: RouteSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putRoutesRouteIdOrNameRoute = createRoute({
  method: 'put',
  path: '/routes/{route_id_or_name}',
  tags: ['Routes'],
  summary: 'Update a route',
  description:
    'Create or Update route using ID or name.\n\n\n> Note: This API is not available in DB-less mode.',
  operationId: 'upsert-route',
  request: {
    params: z.object({ route_id_or_name: RouteIdOrNameParamsSchema }),
    body: RouteRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted route',
      content: { 'application/json': { schema: RouteSchema } },
    },
    400: {
      description: 'Invalid route',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteRoutesRouteIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/routes/{route_id_or_name}',
  tags: ['Routes'],
  summary: 'Delete a route',
  description: 'Delete a route\n\n\n> Note: This API is not available in DB-less mode.',
  operationId: 'delete-route',
  request: { params: z.object({ route_id_or_name: RouteIdOrNameParamsSchema }) },
  responses: {
    204: { description: "Successfully deleted route or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchRoutesRouteIdOrNameRoute = createRoute({
  method: 'patch',
  path: '/routes/{route_id_or_name}',
  tags: ['Routes'],
  summary: 'Update a route',
  description: 'Update a route\n\n> Note: This API is not available in DB-less mode.',
  operationId: 'update-route',
  request: {
    params: z.object({ route_id_or_name: RouteIdOrNameParamsSchema }),
    body: RouteRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated route',
      content: { 'application/json': { schema: RouteSchema } },
    },
    400: {
      description: 'Invalid route',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getRoutesRouteIdOrNamePluginsRoute = createRoute({
  method: 'get',
  path: '/routes/{route_id_or_name}/plugins',
  tags: ['Plugins'],
  summary: 'List all Plugins associated with a route',
  description: 'List all Plugins associated with a route',
  operationId: 'list-plugins-for-route',
  request: {
    params: z.object({
      route_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'route_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-route' },
            description: 'The unique identifier or the name of the route to retrieve.',
          },
          example: 'my-route',
        }),
    }),
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing Plugins',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PluginSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postRoutesRouteIdOrNamePluginsRoute = createRoute({
  method: 'post',
  path: '/routes/{route_id_or_name}/plugins',
  tags: ['Plugins'],
  summary: 'Create a new Plugin associated with a route',
  description: 'Create a new Plugin associated with a route',
  operationId: 'create-plugin-for-route',
  request: {
    params: z.object({
      route_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'route_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-route' },
            description: 'The unique identifier or the name of the route to retrieve.',
          },
          example: 'my-route',
        }),
    }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully created Plugin',
      content: {
        'application/json': {
          schema: PluginSchema,
          examples: {
            example: {
              value: {
                config: {
                  anonymous: null,
                  hide_credentials: false,
                  key_in_body: false,
                  key_in_header: true,
                  key_in_query: true,
                  key_names: ['apikey'],
                  run_on_preflight: true,
                },
                enabled: true,
                id: '3fd1eea1-885a-4011-b986-289943ff8177',
                name: 'key-auth',
                protocols: ['grpc', 'grpcs', 'http', 'https'],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getRoutesRouteIdOrNamePluginsPluginIdRoute = createRoute({
  method: 'get',
  path: '/routes/{route_id_or_name}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Fetch a Plugin associated with a route',
  description: 'Get a Plugin associated with a route using ID.',
  operationId: 'fetch-plugin-for-route',
  request: {
    params: z.object({
      route_id_or_name: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the related route',
            in: 'path',
            name: 'route_id_or_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      plugin_id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the route to lookup',
            in: 'path',
            name: 'plugin_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putRoutesRouteIdOrNamePluginsPluginIdRoute = createRoute({
  method: 'put',
  path: '/routes/{route_id_or_name}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Upsert a Plugin associated with a route',
  description: 'Create or Update a Plugin associated with a route using ID.',
  operationId: 'upsert-plugin-for-route',
  request: {
    params: z.object({
      route_id_or_name: RouteIdOrNameParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteRoutesRouteIdOrNamePluginsPluginIdRoute = createRoute({
  method: 'delete',
  path: '/routes/{route_id_or_name}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Delete a Plugin associated with a route',
  description: 'Delete a Plugin associated with a route using ID.',
  operationId: 'delete-plugin-for-route',
  request: {
    params: z.object({
      route_id_or_name: RouteIdOrNameParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
  },
  responses: {
    204: { description: "Successfully deleted Plugin or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchRoutesRouteIdOrNamePluginsPluginIdRoute = createRoute({
  method: 'patch',
  path: '/routes/{route_id_or_name}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Update a Plugin associated with a route',
  description: 'Update a Plugin associated with a route using ID.',
  operationId: 'update-plugin-for-route',
  request: {
    params: z.object({
      route_id_or_name: RouteIdOrNameParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getServicesRoute = createRoute({
  method: 'get',
  path: '/services',
  tags: ['Services'],
  summary: 'List all services',
  description: 'List all services',
  operationId: 'list-service',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing services',
      content: {
        'application/json': { schema: ServiceSchema },
        'application/xml': { schema: z.looseObject({}) },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postServicesRoute = createRoute({
  method: 'post',
  path: '/services',
  tags: ['Services'],
  summary: 'Create a new service',
  description: 'Create a new service',
  operationId: 'create-service',
  request: { body: ServiceRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully created service',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    400: {
      description: 'Invalid service',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getServicesServiceIdOrNameRoute = createRoute({
  method: 'get',
  path: '/services/{service_id_or_name}',
  tags: ['Services'],
  summary: 'Fetch a service',
  description: 'Get a service using ID or name.',
  operationId: 'get-service',
  request: { params: z.object({ service_id_or_name: ServiceIdOrNameParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully fetched service',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putServicesServiceIdOrNameRoute = createRoute({
  method: 'put',
  path: '/services/{service_id_or_name}',
  tags: ['Services'],
  summary: 'Upsert a service',
  description: 'Create or Update service using ID or name.',
  operationId: 'upsert-service',
  request: {
    params: z.object({
      service_id_or_name: z
        .string()
        .openapi({
          param: {
            description: 'Name or ID of the service to lookup',
            in: 'path',
            name: 'service_id_or_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ServiceRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted service',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    400: {
      description: 'Invalid service',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteServicesServiceIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/services/{service_id_or_name}',
  tags: ['Services'],
  summary: 'Delete a service',
  description: 'Delete a service',
  operationId: 'delete-service',
  request: {
    params: z.object({
      service_id_or_name: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the service to delete',
            in: 'path',
            name: 'service_id_or_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: "Successfully deleted service or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchServicesServiceIdOrNameRoute = createRoute({
  method: 'patch',
  path: '/services/{service_id_or_name}',
  tags: ['Services'],
  summary: 'Update a service',
  description: 'Update a service',
  operationId: 'update-service',
  request: {
    params: z.object({
      service_id_or_name: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the service to update',
            in: 'path',
            name: 'service_id_or_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ServiceRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated service',
      content: { 'application/json': { schema: ServiceSchema } },
    },
    400: {
      description: 'Invalid service',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getServicesServiceIdOrNamePluginsRoute = createRoute({
  method: 'get',
  path: '/services/{service_id_or_name}plugins',
  tags: ['Plugins'],
  summary: 'List all Plugins associated with a service',
  description: 'List all Plugins associated with a service',
  operationId: 'get-plugins-for-service',
  request: {
    params: z.object({ service_id_or_name: ServiceIdOrNameParamsSchema }),
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing Plugins',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PluginSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postServicesServiceIdOrNamePluginsRoute = createRoute({
  method: 'post',
  path: '/services/{service_id_or_name}plugins',
  tags: ['Plugins'],
  summary: 'Create a new Plugin associated with a service',
  description: 'Create a new Plugin associated with a service',
  operationId: 'create-plugin-for-service',
  request: {
    params: z.object({ service_id_or_name: ServiceIdOrNameParamsSchema }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully created Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getServicesServiceIdOrNamePluginsPluginIdRoute = createRoute({
  method: 'get',
  path: '/services/{service_id_or_name}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Fetch a Plugin associated with a service',
  description: 'Get a Plugin associated with a service using ID.',
  operationId: 'fetch-plugin-with-a-service',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putServicesServiceIdOrNamePluginsPluginIdRoute = createRoute({
  method: 'put',
  path: '/services/{service_id_or_name}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Upsert a plugin associated with a service',
  description: 'Create or Update a Plugin associated with a service using ID.',
  operationId: 'upsert-plugin-for-a-service',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteServicesServiceIdOrNamePluginsPluginIdRoute = createRoute({
  method: 'delete',
  path: '/services/{service_id_or_name}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Delete a plugin associated with a service',
  description: 'Delete a Plugin associated with a service using ID.',
  operationId: 'delete-plugin-for-a-service',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
  },
  responses: {
    204: { description: "Successfully deleted Plugin or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchServicesServiceIdOrNamePluginsPluginIdRoute = createRoute({
  method: 'patch',
  path: '/services/{service_id_or_name}/plugins/{plugin_id}',
  tags: ['Plugins'],
  summary: 'Update a plugin associated with a service',
  description: 'Update a Plugin associated with a service using ID.',
  operationId: 'update-plugin-for-a-service',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      plugin_id: PluginIdParamsSchema,
    }),
    body: PluginRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Plugin',
      content: { 'application/json': { schema: PluginSchema } },
    },
    400: {
      description: 'Invalid Plugin',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getServicesServiceIdOrNameRoutesRoute = createRoute({
  method: 'get',
  path: '/services/{service_id_or_name}/routes',
  tags: ['Routes'],
  summary: 'List all routes associated with a service',
  description: 'List all routes associated with a service',
  operationId: 'list-routes-for-service',
  request: {
    params: z.object({
      service_id_or_name: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the related service',
            in: 'path',
            name: 'service_id_or_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing routes',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RouteSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                data: [
                  {
                    hosts: ['foo.example.com', 'bar.example.com'],
                    id: '56c4566c-14cc-4132-9011-4139fcbbe50a',
                    name: 'example-route',
                    paths: ['/v1', '/v2'],
                    service: { id: 'bd380f99-659d-415e-b0e7-72ea05df3218' },
                  },
                ],
                offset: 'string',
              },
            },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postServicesServiceIdOrNameRoutesRoute = createRoute({
  method: 'post',
  path: '/services/{service_id_or_name}/routes',
  tags: ['Routes'],
  summary: 'Create a new route associated with a service',
  description: 'Create a new route associated with a service',
  operationId: 'create-route-for-service',
  request: {
    params: z.object({
      service_id_or_name: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the related service',
            in: 'path',
            name: 'service_id_or_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: RouteRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully created route',
      content: {
        'application/json': {
          schema: RouteSchema,
          examples: {
            example: {
              value: {
                hosts: ['foo.example.com', 'bar.example.com'],
                id: '56c4566c-14cc-4132-9011-4139fcbbe50a',
                name: 'example-route',
                paths: ['/v1', '/v2'],
                service: { id: 'bd380f99-659d-415e-b0e7-72ea05df3218' },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid route',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getServicesServiceIdOrNameRoutesRouteIdOrNameRoute = createRoute({
  method: 'get',
  path: '/services/{service_id_or_name}/routes/{route_id_or_name}',
  tags: ['Routes'],
  summary: 'Fetch a route associated with a service',
  description: 'Get a route associated with a service using ID or name.',
  operationId: 'fetch-route-for-service',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      route_id_or_name: RouteIdOrNameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched route',
      content: {
        'application/json': {
          schema: RouteSchema,
          examples: {
            'Example 1': {
              value: {
                hosts: ['foo.example.com', 'bar.example.com'],
                id: '56c4566c-14cc-4132-9011-4139fcbbe50a',
                name: 'example-route',
                paths: ['/v1', '/v2'],
                service: { id: 'bd380f99-659d-415e-b0e7-72ea05df3218' },
              },
            },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putServicesServiceIdOrNameRoutesRouteIdOrNameRoute = createRoute({
  method: 'put',
  path: '/services/{service_id_or_name}/routes/{route_id_or_name}',
  tags: ['Routes'],
  summary: 'Upsert a route associated with a service',
  description: 'Create or Update a route associated with a service using ID or name.',
  operationId: 'upsert-route-for-service',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      route_id_or_name: RouteIdOrNameParamsSchema,
    }),
    body: RouteRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted route',
      content: {
        'application/json': {
          schema: RouteSchema,
          examples: {
            'Example 1': {
              value: {
                hosts: ['foo.example.com', 'bar.example.com'],
                id: '56c4566c-14cc-4132-9011-4139fcbbe50a',
                name: 'example-route',
                paths: ['/v1', '/v2'],
                service: { id: 'bd380f99-659d-415e-b0e7-72ea05df3218' },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid route',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteServicesServiceIdOrNameRoutesRouteIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/services/{service_id_or_name}/routes/{route_id_or_name}',
  tags: ['Routes'],
  summary: 'Delete a route associated with a service',
  description: 'Delete a route associated with a service using ID or name.',
  operationId: 'delete-route-for-service',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      route_id_or_name: RouteIdOrNameParamsSchema,
    }),
  },
  responses: {
    204: { description: "Successfully deleted route or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchServicesServiceIdOrNameRoutesRouteIdOrNameRoute = createRoute({
  method: 'patch',
  path: '/services/{service_id_or_name}/routes/{route_id_or_name}',
  tags: ['Routes'],
  summary: 'Update a route associated with a service',
  description: 'Update a route associated with a service using ID or name.',
  operationId: 'update-route-for-service',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      route_id_or_name: RouteIdOrNameParamsSchema,
    }),
    body: RouteRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated route',
      content: {
        'application/json': {
          schema: RouteSchema,
          examples: {
            'Example 1': {
              value: {
                hosts: ['foo.example.com', 'bar.example.com'],
                id: '56c4566c-14cc-4132-9011-4139fcbbe50a',
                name: 'example-route',
                paths: ['/v1', '/v2'],
                service: { id: 'bd380f99-659d-415e-b0e7-72ea05df3218' },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid route',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getSnisRoute = createRoute({
  method: 'get',
  path: '/snis',
  tags: ['SNIs'],
  summary: 'List all SNIs',
  description: 'List all SNIs',
  operationId: 'list-sni',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: { 200: SniResponseResponse, 401: HTTP401ErrorResponse },
})

export const postSnisRoute = createRoute({
  method: 'post',
  path: '/snis',
  tags: ['SNIs'],
  summary: 'Create a new SNI',
  description: 'Create a new SNI',
  operationId: 'create-sni',
  request: { body: CreateSniRequestBody },
  responses: {
    200: SniResponseResponse,
    400: {
      description: 'Invalid SNI',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getSnisSniNameOrIdRoute = createRoute({
  method: 'get',
  path: '/snis/{sni_name_or_id}',
  tags: ['SNIs'],
  summary: 'Fetch an SNI',
  description: 'Get an SNI using ID or name.',
  operationId: 'get-sni',
  request: { params: z.object({ sni_name_or_id: SniNameOrIdParamsSchema }) },
  responses: {
    200: SniResponseResponse,
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putSnisSniNameOrIdRoute = createRoute({
  method: 'put',
  path: '/snis/{sni_name_or_id}',
  tags: ['SNIs'],
  summary: 'Update an SNI',
  description: 'Create or Update SNI using ID or name.',
  operationId: 'upsert-sni',
  request: {
    params: z.object({ sni_name_or_id: SniNameOrIdParamsSchema }),
    body: CreateSniRequestBody,
  },
  responses: {
    200: SniResponseResponse,
    400: {
      description: 'Invalid SNI',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteSnisSniNameOrIdRoute = createRoute({
  method: 'delete',
  path: '/snis/{sni_name_or_id}',
  tags: ['SNIs'],
  summary: 'Delete an SNI',
  description: 'Delete an SNI',
  operationId: 'delete-sni',
  request: { params: z.object({ sni_name_or_id: SniNameOrIdParamsSchema }) },
  responses: {
    204: { description: "Successfully deleted SNI or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchSnisSniNameOrIdRoute = createRoute({
  method: 'patch',
  path: '/snis/{sni_name_or_id}',
  tags: ['SNIs'],
  summary: 'Update an SNI',
  description: 'Update an SNI',
  operationId: 'update-sni',
  request: {
    params: z.object({ sni_name_or_id: SniNameOrIdParamsSchema }),
    body: CreateSniRequestBody,
  },
  responses: {
    200: SniResponseResponse,
    400: {
      description: 'Invalid SNI',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getUpstreamsRoute = createRoute({
  method: 'get',
  path: '/upstreams',
  tags: ['Upstreams'],
  summary: 'List all Upstreams',
  description:
    'List all registered upstreams. You can filter the results by pagination size, offset, or tags like `/upstreams?size=10&offset=0`.\n',
  operationId: 'list-upstream',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing Upstreams',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(UpstreamSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            example: {
              value: {
                data: [
                  {
                    algorithm: 'round-robin',
                    hash_fallback: 'none',
                    hash_on: 'none',
                    hash_on_cookie_path: '/',
                    healthchecks: {
                      active: {
                        concurrency: 10,
                        healthy: { http_statuses: [200, 302], interval: 0, successes: 0 },
                        http_path: '/',
                        https_verify_certificate: true,
                        timeout: 1,
                        type: 'http',
                        unhealthy: {
                          http_failures: 0,
                          http_statuses: [429, 404, 500, 501, 502, 503, 504, 505],
                          interval: 0,
                          tcp_failures: 0,
                          timeouts: 0,
                        },
                      },
                      passive: {
                        healthy: {
                          http_statuses: [
                            200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303,
                            304, 305, 306, 307, 308,
                          ],
                          successes: 0,
                        },
                        type: 'http',
                        unhealthy: {
                          http_failures: 0,
                          http_statuses: [429, 500, 503],
                          tcp_failures: 0,
                          timeouts: 0,
                        },
                      },
                      threshold: 0,
                    },
                    id: '6eed5e9c-5398-4026-9a4c-d48f18a2431e',
                    name: 'api.example.internal',
                    slots: 10000,
                  },
                ],
                offset: 'string',
              },
            },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postUpstreamsRoute = createRoute({
  method: 'post',
  path: '/upstreams',
  tags: ['Upstreams'],
  summary: 'Create a new Upstream',
  description: 'Create a new Upstream\n',
  operationId: 'create-upstream',
  request: { body: UpstreamRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully created Upstream',
      content: { 'application/json': { schema: UpstreamSchema } },
    },
    400: {
      description: 'Invalid Upstream',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getUpstreamsUpstreamIdOrNameRoute = createRoute({
  method: 'get',
  path: '/upstreams/{upstream_id_or_name}',
  tags: ['Upstreams'],
  summary: 'Fetch an Upstream',
  description: 'Get an Upstream using ID or name.',
  operationId: 'get-upstream',
  request: { params: z.object({ upstream_id_or_name: UpstreamIdOrNameParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully fetched Upstream',
      content: { 'application/json': { schema: UpstreamSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putUpstreamsUpstreamIdOrNameRoute = createRoute({
  method: 'put',
  path: '/upstreams/{upstream_id_or_name}',
  tags: ['Upstreams'],
  summary: 'Update an Upstream',
  description: 'Create or Update Upstream using ID or name.',
  operationId: 'upsert-upstream',
  request: {
    params: z.object({ upstream_id_or_name: UpstreamIdOrNameParamsSchema }),
    body: UpstreamRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted Upstream',
      content: {
        'application/json': {
          schema: UpstreamSchema,
          examples: {
            'Example 1': {
              value: {
                id: '58c8ccbb-eafb-4566-991f-2ed4f678fa70',
                created_at: 1422386534,
                name: 'my-upstream',
                algorithm: 'round-robin',
                hash_on: 'none',
                hash_fallback: 'none',
                hash_on_cookie_path: '/',
                slots: 10000,
                healthchecks: {
                  passive: {
                    type: 'http',
                    healthy: {
                      http_statuses: [
                        200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304,
                        305, 306, 307, 308,
                      ],
                      successes: 0,
                    },
                    unhealthy: {
                      http_statuses: [429, 500, 503],
                      timeouts: 0,
                      http_failures: 0,
                      tcp_failures: 0,
                    },
                  },
                  active: {
                    https_verify_certificate: true,
                    healthy: { http_statuses: [200, 302], successes: 0, interval: 0 },
                    unhealthy: {
                      http_failures: 0,
                      http_statuses: [429, 404, 500, 501, 502, 503, 504, 505],
                      timeouts: 0,
                      tcp_failures: 0,
                      interval: 0,
                    },
                    type: 'http',
                    concurrency: 10,
                    headers: {
                      type: 'object',
                      properties: {
                        'x-my-header': {
                          type: 'array',
                          items: { type: 'string' },
                          description: 'The value(s) of the x-my-header header.',
                        },
                        'x-another-header': {
                          type: 'array',
                          items: { type: 'string' },
                          description: 'The value(s) of the x-another-header header.',
                        },
                      },
                    },
                    timeout: 1,
                    http_path: '/',
                    https_sni: 'example.com',
                  },
                  threshold: 0,
                },
                tags: ['user-level', 'low-priority'],
                host_header: 'example.com',
                client_certificate: { id: 'ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6' },
                use_srv_name: false,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Upstream',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteUpstreamsUpstreamIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/upstreams/{upstream_id_or_name}',
  tags: ['Upstreams'],
  summary: 'Delete an Upstream',
  description: 'Delete an Upstream',
  operationId: 'delete-upstream',
  request: { params: z.object({ upstream_id_or_name: UpstreamIdOrNameParamsSchema }) },
  responses: {
    204: { description: "Successfully deleted Upstream or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchUpstreamsUpstreamIdOrNameRoute = createRoute({
  method: 'patch',
  path: '/upstreams/{upstream_id_or_name}',
  tags: ['Upstreams'],
  summary: 'Update an Upstream',
  description: 'Update an Upstream',
  operationId: 'update-upstream',
  request: {
    params: z.object({ upstream_id_or_name: UpstreamIdOrNameParamsSchema }),
    body: UpstreamRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Upstream',
      content: {
        'application/json': {
          schema: UpstreamSchema,
          examples: {
            'Example 1': {
              value: {
                id: '58c8ccbb-eafb-4566-991f-2ed4f678fa70',
                created_at: 1422386534,
                name: 'my-upstream',
                algorithm: 'round-robin',
                hash_on: 'none',
                hash_fallback: 'none',
                hash_on_cookie_path: '/',
                slots: 10000,
                healthchecks: {
                  passive: {
                    type: 'http',
                    healthy: {
                      http_statuses: [
                        200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304,
                        305, 306, 307, 308,
                      ],
                      successes: 0,
                    },
                    unhealthy: {
                      http_statuses: [429, 500, 503],
                      timeouts: 0,
                      http_failures: 0,
                      tcp_failures: 0,
                    },
                  },
                  active: {
                    https_verify_certificate: true,
                    healthy: { http_statuses: [200, 302], successes: 0, interval: 0 },
                    unhealthy: {
                      http_failures: 0,
                      http_statuses: [429, 404, 500, 501, 502, 503, 504, 505],
                      timeouts: 0,
                      tcp_failures: 0,
                      interval: 0,
                    },
                    type: 'http',
                    concurrency: 10,
                    headers: { 'x-my-header': ['foo', 'bar'], 'x-another-header': ['bla'] },
                    timeout: 1,
                    http_path: '/',
                    https_sni: 'example.com',
                  },
                  threshold: 0,
                },
                tags: ['user-level', 'low-priority'],
                host_header: 'example.com',
                client_certificate: { id: 'ea29aaa3-3b2d-488c-b90c-56df8e0dd8c6' },
                use_srv_name: false,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Upstream',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getUpstreamsUpstreamIdOrNameTargetsRoute = createRoute({
  method: 'get',
  path: '/upstreams/{upstream_id_or_name}/targets',
  tags: ['Targets'],
  summary: 'List all Targets associated with an Upstream',
  description: 'List all Targets associated with a an Upstream',
  operationId: 'list-targets-for-upstream',
  request: {
    params: z.object({
      upstream_id_or_name: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the related Upstream',
            in: 'path',
            name: 'upstream_id_or_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing Targets',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(TargetSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postUpstreamsUpstreamIdOrNameTargetsRoute = createRoute({
  method: 'post',
  path: '/upstreams/{upstream_id_or_name}/targets',
  tags: ['Targets'],
  summary: 'Create a new Target associated with an Upstream',
  description: 'Create a new Target associated with an Upstream',
  operationId: 'create-target-for-upstream',
  request: {
    params: z.object({
      upstream_id_or_name: z
        .string()
        .openapi({
          param: {
            description: 'ID or name of the related Upstream',
            in: 'path',
            name: 'upstream_id_or_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: TargetRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully created Target',
      content: {
        'application/json': {
          schema: TargetSchema,
          examples: {
            'Successfully created Target': {
              value: {
                id: '173a6cee-90d1-40a7-89cf-0329eca780a6',
                created_at: 1422386534,
                upstream: { id: 'bdab0e47-4e37-4f0b-8fd0-87d95cc4addc' },
                target: 'example.com:8000',
                weight: 100,
                tags: ['user-level', 'low-priority'],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid Target',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute = createRoute({
  method: 'get',
  path: '/upstreams/{upstream_id_or_name}/targets/{target_id_or_target}',
  tags: ['Targets'],
  summary: 'Fetch a Target associated with an Upstream',
  description: 'Get a Target associated with an Upstream using ID or target.',
  operationId: 'fetch-target-for-upstream',
  request: {
    params: z.object({
      upstream_id_or_name: UpstreamIdOrNameParamsSchema,
      target_id_or_target: TargetIdOrTargetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successfully fetched Target',
      content: { 'application/json': { schema: TargetSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute = createRoute({
  method: 'put',
  path: '/upstreams/{upstream_id_or_name}/targets/{target_id_or_target}',
  tags: ['Targets'],
  summary: 'Upsert a Target associated with an Upstream',
  description: 'Create or Update a Target associated with an Upstream using ID or target.',
  operationId: 'upsert-target-for-upstream',
  request: {
    params: z.object({
      upstream_id_or_name: UpstreamIdOrNameParamsSchema,
      target_id_or_target: TargetIdOrTargetParamsSchema,
    }),
    body: TargetRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted Target',
      content: { 'application/json': { schema: TargetSchema } },
    },
    400: {
      description: 'Invalid Target',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute = createRoute({
  method: 'delete',
  path: '/upstreams/{upstream_id_or_name}/targets/{target_id_or_target}',
  tags: ['Targets'],
  summary: 'Delete a Target associated with a an Upstream',
  description: 'Delete a Target associated with a an Upstream using ID or target.',
  operationId: 'delete-upstream-target',
  request: {
    params: z.object({
      upstream_id_or_name: UpstreamIdOrNameParamsSchema,
      target_id_or_target: TargetIdOrTargetParamsSchema,
    }),
  },
  responses: {
    204: { description: "Successfully deleted Target or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute = createRoute({
  method: 'patch',
  path: '/upstreams/{upstream_id_or_name}/targets/{target_id_or_target}',
  tags: ['Targets'],
  summary: 'Update a target associated with an Upstream',
  description: 'Update a Target associated with a an Upstream using ID or target.',
  operationId: 'update-target-for-upstream',
  request: {
    params: z.object({
      upstream_id_or_name: UpstreamIdOrNameParamsSchema,
      target_id_or_target: TargetIdOrTargetParamsSchema,
    }),
    body: TargetRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Target',
      content: { 'application/json': { schema: TargetSchema } },
    },
    400: {
      description: 'Invalid Target',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getVaultsRoute = createRoute({
  method: 'get',
  path: '/vaults',
  tags: ['Vaults'],
  summary: 'List all Vaults',
  description: 'List all Vaults',
  operationId: 'list-vault',
  request: {
    query: z.object({
      size: PaginationSizeParamsSchema,
      offset: PaginationOffsetParamsSchema,
      tags: PaginationTagsFilterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A successful response listing Vaults',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VaultSchema).exactOptional(),
              offset: PaginationOffsetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postVaultsRoute = createRoute({
  method: 'post',
  path: '/vaults',
  tags: ['Vaults'],
  summary: 'Create a new Vault',
  description: 'Create a new Vault',
  operationId: 'create-vault',
  request: { body: VaultRequestRequestBody },
  responses: {
    200: {
      description: 'Successfully created Vault',
      content: { 'application/json': { schema: VaultSchema } },
    },
    400: {
      description: 'Invalid Vault',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getVaultsVaultIdOrPrefixRoute = createRoute({
  method: 'get',
  path: '/vaults/{vault_id_or_prefix}',
  tags: ['Vaults'],
  summary: 'Fetch a Vault',
  description:
    'Get a Vault using ID or prefix.\n\nVault entities are used to configure different Vault connectors.',
  operationId: 'get-vault',
  request: { params: z.object({ vault_id_or_prefix: VaultIdOrPrefixParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully fetched Vault',
      content: { 'application/json': { schema: VaultSchema } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const putVaultsVaultIdOrPrefixRoute = createRoute({
  method: 'put',
  path: '/vaults/{vault_id_or_prefix}',
  tags: ['Vaults'],
  summary: 'Upsert a Vault',
  description: 'Create or Update Vault using ID or prefix.',
  operationId: 'upsert-vault',
  request: {
    params: z.object({
      vault_id_or_prefix: z
        .string()
        .openapi({
          param: {
            description: 'Name or ID of the Vault to lookup',
            in: 'path',
            name: 'vault_id_or_prefix',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: VaultRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully upserted Vault',
      content: { 'application/json': { schema: VaultSchema } },
    },
    400: {
      description: 'Invalid Vault',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const deleteVaultsVaultIdOrPrefixRoute = createRoute({
  method: 'delete',
  path: '/vaults/{vault_id_or_prefix}',
  tags: ['Vaults'],
  summary: 'Delete a Vault',
  description: 'Delete a Vault',
  operationId: 'delete-vault',
  request: {
    params: z.object({
      vault_id_or_prefix: z
        .string()
        .openapi({
          param: {
            description: 'ID or prefix of the Vault to delete',
            in: 'path',
            name: 'vault_id_or_prefix',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: "Successfully deleted Vault or the resource didn't exist" },
    401: HTTP401ErrorResponse,
  },
})

export const patchVaultsVaultIdOrPrefixRoute = createRoute({
  method: 'patch',
  path: '/vaults/{vault_id_or_prefix}',
  tags: ['Vaults'],
  summary: 'Update a Vault',
  description: 'Update a Vault',
  operationId: 'update-vault',
  request: {
    params: z.object({
      vault_id_or_prefix: z
        .string()
        .openapi({
          param: {
            description: 'ID or prefix of the Vault to update',
            in: 'path',
            name: 'vault_id_or_prefix',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: VaultRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Successfully updated Vault',
      content: { 'application/json': { schema: VaultSchema } },
    },
    400: {
      description: 'Invalid Vault',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Resource does not exist' },
  },
})

export const getEndpointsRoute = createRoute({
  method: 'get',
  path: '/endpoints',
  tags: ['Information'],
  summary: 'List all endpoints',
  description: 'List all available endpoints provided by the Admin API.',
  operationId: 'get-endpoints',
  responses: { 200: GetEndpointsResponse, 401: HTTP401ErrorResponse },
})

export const optionsEndpointRoute = createRoute({
  method: 'options',
  path: '/{endpoint}',
  tags: ['Information'],
  summary: 'List method by endpoint',
  description:
    'List all the supported HTTP methods by an endpoint. This can also be used with a CORS preflight request.\n',
  operationId: 'options-endpoint',
  request: {
    params: z.object({
      endpoint: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'key' },
            name: 'endpoint',
            in: 'path',
            required: true,
            description: 'Any available endpoint',
          },
          example: 'key',
        }),
    }),
  },
  responses: {
    204: {
      description: 'No Content',
      headers: z.object({
        Date: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The date and time at which the message was originated',
            example: 'Fri, 14 Apr 2023 17:24:17 GMT',
            param: { required: false },
          }),
        Connection: z
          .enum(['keep-alive', 'close'])
          .exactOptional()
          .openapi({
            description:
              'Indicates whether the connection will be closed after the message is completed',
            example: 'keep-alive',
            param: { required: false },
          }),
        'Access-Control-Allow-Origin': z
          .string()
          .exactOptional()
          .openapi({
            description: 'Indicates whether the resource can be accessed by any origin',
            param: { required: false },
            example: '*',
          }),
        'Access-Control-Allow-Headers': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Used in response to a preflight request to indicate which HTTP headers can be used during the actual request',
            param: { required: false },
            example: 'Content-Type, Kong-Admin-Token, Kong-Request-Type, Cache-Control',
          }),
        'X-Kong-Admin-Request-ID': z
          .string()
          .exactOptional()
          .openapi({
            description: 'A unique identifier for the request, generated by Kong',
            param: { required: false },
            example: 'gDP1cF3OsNbrgcKPhRNE0RXRNfS7NcoG',
          }),
        Allow: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Lists the HTTP methods that are supported for the resource',
            param: { required: false },
            example: 'OPTIONS, PATCH, POST',
          }),
        'Access-Control-Allow-Methods': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Indicates the methods allowed when accessing the resource in response to a preflight request',
            param: { required: false },
            example: 'OPTIONS, PATCH, POST',
          }),
        'X-Kong-Admin-Latency': z
          .int()
          .exactOptional()
          .openapi({
            description: 'The time taken to process the request on the server, in milliseconds',
            param: { required: false },
            example: 5,
          }),
        Server: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The software used by the origin server to handle the request',
            param: { required: false },
            example: 'kong/3.2.2.0-enterprise-edition',
          }),
      }),
    },
    400: { description: 'Bad Request' },
    401: HTTP401ErrorResponse,
  },
})

export const headEndpointRoute = createRoute({
  method: 'head',
  path: '/{endpoint}',
  tags: ['Information'],
  summary: 'Check endpoint or entity existence',
  description:
    'Similar to `HTTP` GET, but does not return the body. Returns HTTP 200 when the endpoint exits or HTTP 404 when it does not. Other status codes are possible.\n',
  operationId: 'head-endpoints',
  request: {
    params: z.object({
      endpoint: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'key' },
            name: 'endpoint',
            in: 'path',
            required: true,
            description: 'Any available endpoint',
          },
          example: 'key',
        }),
    }),
  },
  responses: {
    204: {
      description: 'No Content',
      headers: z.object({
        Date: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The date and time at which the message was originated',
            example: 'Fri, 14 Apr 2023 17:38:29 GMT',
            param: { required: false },
          }),
        'Content-Type': z
          .string()
          .exactOptional()
          .openapi({
            description: 'The media type of the message content',
            param: { required: false },
            example: 'text/html; charset=UTF-8',
          }),
        Connection: z
          .enum(['keep-alive', 'close'])
          .exactOptional()
          .openapi({
            description:
              'Indicates whether the connection will be closed after the message is completed',
            example: 'keep-alive',
            param: { required: false },
          }),
        'Access-Control-Allow-Origin': z
          .string()
          .exactOptional()
          .openapi({
            description: 'Indicates whether the resource can be accessed by any origin',
            param: { required: false },
            example: '*',
          }),
        'X-Kong-Admin-Request-ID': z
          .string()
          .exactOptional()
          .openapi({
            description: 'A unique identifier for the request, generated by Kong',
            param: { required: false },
            example: 'aqETeVmkeiGnAMzdUT2JRWroB2myY1lB',
          }),
        'X-Kong-Admin-Latency': z
          .int()
          .exactOptional()
          .openapi({
            description: 'The time taken to process the request on the server, in milliseconds',
            param: { required: false },
            example: 5,
          }),
        Server: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The software used by the origin server to handle the request',
            param: { required: false },
            example: 'kong/3.2.2.0-enterprise-edition',
          }),
      }),
    },
    401: HTTP401ErrorResponse,
    404: { description: 'Endpoint does not exist', headers: z.object({}) },
  },
})

export const getSchemasEntityRoute = createRoute({
  method: 'get',
  path: '/schemas/{entity}',
  tags: ['Information'],
  summary: 'Retrieve entity schema',
  description:
    'Retrieve the schema of an entity. This is useful to understand what fields an entity accepts, and can be used for building third-party integrations with Kong.',
  operationId: 'get-schemas-entity',
  request: {
    params: z.object({
      entity: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, name: 'entity', in: 'path', required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              fields: z
                .array(
                  z
                    .object({
                      id: z
                        .object({
                          auto: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'A value of a schema' }),
                          type: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'A value of a schema' }),
                          uuid: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'A value of a schema' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'A value of a schema', required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'A value of a schema' }),
            })
            .openapi({
              'x-examples': {
                'Example 1': { fields: [{ id: { auto: true, type: 'string', uuid: true } }] },
              },
              required: [],
            }),
          examples: {
            'A mock schema': {
              value: {
                fields: [
                  { id: { auto: true, type: 'string', uuid: true } },
                  { created_at: { auto: true, timestamp: true, type: 'integer' } },
                ],
              },
            },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const postSchemasEntityValidateRoute = createRoute({
  method: 'post',
  path: '/schemas/{entity}/validate',
  tags: ['Information'],
  summary: 'Validate a configuration against a schema',
  description:
    'Check validity of a configuration against its entity schema. This allows you to test your input before submitting a request to the entity endpoints of the Admin API.\n\nA requests to the entity endpoint using the given configuration may still fail due to other reasons, such as invalid foreign key relationships or uniqueness check failures against the contents of the data store.',
  operationId: 'post-schemas-entity-validate',
  request: {
    params: z.object({
      entity: z
        .string()
        .openapi({
          param: { schema: { type: 'string' }, name: 'entity', in: 'path', required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              Message: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'schema validation successful',
                  description: 'A success message',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            'schema validation successful': { value: { Message: 'schema validation successful' } },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getSchemasFiltersFilterNameRoute = createRoute({
  method: 'get',
  path: '/schemas/filters/{filter_name}',
  tags: ['Information'],
  summary: 'Retrieve Proxy-Wasm Filter JSON Schema',
  description:
    "Retrieve the JSON Schema of a Proxy-Wasm filter's configuration. This is useful to understand what fields a filter accepts, and can be used for building third-party integrations to the Kong's filter chain system.\n",
  operationId: 'get-schemas-filters-filter_name',
  request: {
    params: z.object({
      filter_name: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'go-rate-limiting' },
            name: 'filter_name',
            in: 'path',
            required: true,
            description: 'The name of a Proxy-Wasm filter',
          },
          example: 'go-rate-limiting',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .looseObject({})
            .openapi({
              description:
                'JSON Schema object describing the expected configuration for the filter. This endpoints always returns a JSON Schema object describing the filter configuration, even if the filter does not include JSON Schema metadata: if the configuration is expected as a raw string, the JSON Schema configuration returned by this endpoint will indicate so.\n',
            }),
          examples: {
            'filter returning a JSON Schema included in the filter metadata': {
              value: {
                $schema: 'http://json-schema.org/draft-04/schema#',
                type: 'object',
                properties: {
                  add: {
                    type: 'object',
                    properties: { headers: { type: 'array', items: { type: 'string' } } },
                    required: ['headers'],
                  },
                },
                required: ['add'],
              },
            },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getSchemasPluginsPluginNameRoute = createRoute({
  method: 'get',
  path: '/schemas/plugins/{plugin_name}',
  tags: ['Information'],
  summary: 'Retrieve Plugin Schema',
  description:
    "Retrieve the schema of a plugin's configuration. This is useful to understand what fields a plugin accepts, and can be used for building third-party integrations to the Kong's plugin system.\n",
  operationId: 'get-schemas-plugins-plugin_name',
  request: {
    params: z.object({
      plugin_name: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'basic-auth' },
            name: 'plugin_name',
            in: 'path',
            required: true,
            description: 'The name of a Kong plugin',
          },
          example: 'basic-auth',
        }),
    }),
  },
  responses: { 200: { description: 'OK' }, 401: HTTP401ErrorResponse },
})

export const postSchemasPluginsValidateRoute = createRoute({
  method: 'post',
  path: '/schemas/plugins/validate',
  tags: ['Information'],
  summary: 'Validate plugin schema',
  description:
    'Check validity of a plugin configuration against the plugins entity schema. This allows you to test your input before submitting a request to the entity endpoints of the Admin API.\n\n\nThis only performs the schema validation checks, checking that the input configuration is well-formed. A requests to the entity endpoint using the given configuration may still fail due to other reasons, such as invalid foreign key relationships or uniqueness check failures against the contents of the data store.',
  operationId: 'post-schemas-plugins-validate',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A successful message',
                  example: 'schema validation successful',
                }),
            })
            .openapi({
              'x-examples': { 'Example 1': { message: 'schema validation successful' } },
              required: [],
            }),
          examples: {
            'schema validation successful': { value: { message: 'schema validation successful' } },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getTimersRoute = createRoute({
  method: 'get',
  path: '/timers',
  tags: ['Information'],
  summary: "Retrieve Runtime Debugging Info of Kong's Timers",
  description:
    'Retrieve runtime stats data from [lua-resty-timer-ng](https://github.com/Kong/lua-resty-timer-ng).',
  operationId: 'get-timers',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              stats: z
                .object({
                  sys: z
                    .object({
                      total: z
                        .int()
                        .default(7)
                        .exactOptional()
                        .openapi({
                          description: 'The total number of timers (running + pending + waiting)',
                          example: 7,
                        }),
                      waiting: z
                        .int()
                        .default(7)
                        .exactOptional()
                        .openapi({ description: 'The number of unexpired timers', example: 7 }),
                      runs: z
                        .int()
                        .default(7)
                        .exactOptional()
                        .openapi({
                          description: 'The total number of runs for the timers',
                          example: 7,
                        }),
                      pending: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({ description: 'The number of pending timers', example: 0 }),
                      running: z
                        .int()
                        .default(0)
                        .exactOptional()
                        .openapi({ description: 'The number of running timers', example: 0 }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'List of the number of different type of timers',
                      required: [],
                    }),
                  flamegraph: z
                    .object({
                      pending: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The number of pending timers for the flamegraph',
                          example:
                            '@./kong/init.lua:706:init_worker();@./kong/runloop/handler.lua:1086:before() 0\n',
                        }),
                      running: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The number of running timers for the flamegraph',
                          example:
                            '@./kong/init.lua:706:init_worker();@./kong/runloop/handler.lua:1086:before() 0\n',
                        }),
                      elapsed_time: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The elapsed time for the flamegraph',
                          example:
                            '@./kong/init.lua:706:init_worker();@./kong/runloop/handler.lua:1086:before() 17\n',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'String-encoded timer-related flamegraph data',
                      required: [],
                    }),
                  timers: z
                    .object({
                      meta: z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: "The name of the timer's metadata",
                              example: '@/build/luarocks/share/lua/5.1/resty/counter.lua:71:new()',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Program callstack of created timers',
                          required: [],
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Timer statistics for the worker', required: [] }),
                })
                .exactOptional()
                .openapi({ description: 'Statistics about the worker', required: [] }),
              worker: z
                .object({
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The ordinal number of the current Nginx worker processes (starting from number 0).',
                    }),
                  count: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The total number of the Nginx worker processes.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  stats: {
                    sys: { total: 13, waiting: 12, runs: 6771, pending: 0, running: 1 },
                    flamegraph: { pending: '', running: '', elapsed_time: '' },
                    timers: {
                      'router-rebuild': {
                        is_running: false,
                        name: 'router-rebuild',
                        stats: {
                          runs: 464,
                          elapsed_time: { avg: 0, min: 9999999, max: -1, variance: 0 },
                          finish: 464,
                          last_err_msg: '',
                        },
                        meta: { callstack: 'debug off', name: 'debug off' },
                      },
                      'unix_timestamp=1681492692484.000000;counter=7:meta=debug off': {
                        is_running: false,
                        name: 'unix_timestamp=1681492692484.000000;counter=7:meta=debug off',
                        stats: {
                          runs: 3,
                          elapsed_time: { avg: 0, min: 9999999, max: -1, variance: 0 },
                          finish: 3,
                          last_err_msg: '',
                        },
                        meta: { callstack: 'debug off', name: 'debug off' },
                      },
                    },
                  },
                  worker: { id: 0, count: 5 },
                },
              },
              required: [],
            }),
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['Information'],
  summary: 'Health Routes',
  description:
    "Retrieve usage information about a node, with some basic information about the connections being processed by the underlying nginx process, the status of the database connection, and node's memory usage.\n\nIf you want to monitor the Kong process, since Kong is built on top of nginx, every existing nginx monitoring tool or agent can be used.",
  operationId: 'get-status',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              memory: z
                .object({
                  lua_shared_dicts: z
                    .object({
                      kong_core_db_cache: z
                        .object({
                          capacity: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '128.00 MiB', description: 'Memory capacity' }),
                          allocated_slabs: z
                            .string()
                            .exactOptional()
                            .openapi({
                              example: '128.00 MiB',
                              description: 'Total allocated memory',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'An array of information about dictionaries that are shared with all workers in a Kong node, where each array node contains how much memory is dedicated for the specific shared dictionary (capacity) and how much of said memory is in use (allocated_slabs).',
                      required: [],
                    }),
                  workers_lua_vms: z
                    .array(
                      z
                        .object({
                          http_allocated_gc: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                "HTTP submodule's Lua virtual machine's memory usage information, as reported by\n",
                            }),
                          pid: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: "worker's process identification number.",
                              example: 18478,
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'An array with all workers of the Kong node, each entry contains a `http_allocated_gc` string and a `pid`.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Metrics about the memory usage.', required: [] }),
              database: z
                .object({
                  reachable: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value reflecting the state of the database connection. Please note that this flag does not reflect the health of the database itself.',
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Metrics about the database', required: [] }),
              server: z
                .object({
                  connections_reading: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The current number of connections where Kong is reading the request header.',
                      example: 3,
                    }),
                  connections_writing: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The current number of connections where nginx is writing the response back to the client.',
                      example: 1,
                    }),
                  total_requests: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The total number of client requests.', example: 1 }),
                  connections_waiting: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The current number of idle client connections waiting for a request.',
                      example: 1,
                    }),
                  connections_handled: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The total number of handled connections. Generally, the parameter value is the same as accepts unless some resource limits have been reached.',
                      example: 1,
                    }),
                  connections_active: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The current number of active client connections including Waiting connections.',
                      example: 1,
                    }),
                  connections_accepted: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'The total number of accepted client connections.',
                      example: 1,
                    }),
                })
                .exactOptional()
                .openapi({ description: 'Metrics about the nginx HTTP/S server', required: [] }),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  memory: {
                    lua_shared_dicts: {
                      kong_core_db_cache: { capacity: '128.00 MiB', allocated_slabs: '0.76 MiB' },
                      kong_core_db_cache_miss: {
                        capacity: '12.00 MiB',
                        allocated_slabs: '0.08 MiB',
                      },
                      kong_db_cache: { capacity: '128.00 MiB', allocated_slabs: '0.78 MiB' },
                      kong_db_cache_miss: { capacity: '12.00 MiB', allocated_slabs: '0.08 MiB' },
                      kong_vitals_counters: { capacity: '50.00 MiB', allocated_slabs: '0.30 MiB' },
                      kong_vitals_lists: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                      kong_vitals: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                      kong_counters: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                      kong_reports_consumers: {
                        capacity: '10.00 MiB',
                        allocated_slabs: '0.07 MiB',
                      },
                      kong_reports_routes: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                      kong_reports_services: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                      kong_profiling_state: { capacity: '1.50 MiB', allocated_slabs: '0.02 MiB' },
                      prometheus_metrics: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                      kong: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                      kong_locks: { capacity: '8.00 MiB', allocated_slabs: '0.06 MiB' },
                      kong_healthchecks: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                      kong_process_events: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                      kong_cluster_events: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                      kong_rate_limiting_counters: {
                        capacity: '12.00 MiB',
                        allocated_slabs: '0.08 MiB',
                      },
                    },
                    workers_lua_vms: [
                      { http_allocated_gc: '51.92 MiB', pid: 2323 },
                      { http_allocated_gc: '51.48 MiB', pid: 2324 },
                      { http_allocated_gc: '51.48 MiB', pid: 2325 },
                      { http_allocated_gc: '51.48 MiB', pid: 2326 },
                      { http_allocated_gc: '51.48 MiB', pid: 2327 },
                    ],
                  },
                  database: { reachable: true },
                  server: {
                    connections_reading: 0,
                    connections_writing: 6,
                    total_requests: 28,
                    connections_waiting: 0,
                    connections_handled: 15,
                    connections_active: 6,
                    connections_accepted: 15,
                  },
                },
              },
              required: [],
            }),
          examples: {
            'Status endpoint response': {
              value: {
                memory: {
                  lua_shared_dicts: {
                    kong_core_db_cache: { capacity: '128.00 MiB', allocated_slabs: '0.76 MiB' },
                    kong_core_db_cache_miss: { capacity: '12.00 MiB', allocated_slabs: '0.08 MiB' },
                    kong_db_cache: { capacity: '128.00 MiB', allocated_slabs: '0.78 MiB' },
                    kong_db_cache_miss: { capacity: '12.00 MiB', allocated_slabs: '0.08 MiB' },
                    kong_vitals_counters: { capacity: '50.00 MiB', allocated_slabs: '0.30 MiB' },
                    kong_vitals_lists: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                    kong_vitals: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                    kong_counters: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                    kong_reports_consumers: { capacity: '10.00 MiB', allocated_slabs: '0.07 MiB' },
                    kong_reports_routes: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                    kong_reports_services: { capacity: '1.00 MiB', allocated_slabs: '0.02 MiB' },
                    kong_profiling_state: { capacity: '1.50 MiB', allocated_slabs: '0.02 MiB' },
                    prometheus_metrics: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                    kong: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                    kong_locks: { capacity: '8.00 MiB', allocated_slabs: '0.06 MiB' },
                    kong_healthchecks: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                    kong_process_events: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                    kong_cluster_events: { capacity: '5.00 MiB', allocated_slabs: '0.04 MiB' },
                    kong_rate_limiting_counters: {
                      capacity: '12.00 MiB',
                      allocated_slabs: '0.08 MiB',
                    },
                  },
                  workers_lua_vms: [
                    { http_allocated_gc: '51.92 MiB', pid: 2323 },
                    { http_allocated_gc: '51.48 MiB', pid: 2324 },
                    { http_allocated_gc: '51.48 MiB', pid: 2325 },
                    { http_allocated_gc: '51.48 MiB', pid: 2326 },
                    { http_allocated_gc: '51.48 MiB', pid: 2327 },
                  ],
                },
                database: { reachable: true },
                server: {
                  connections_reading: 0,
                  connections_writing: 6,
                  total_requests: 28,
                  connections_waiting: 0,
                  connections_handled: 15,
                  connections_active: 6,
                  connections_accepted: 15,
                },
              },
            },
          },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getStatusDnsRoute = createRoute({
  method: 'get',
  path: '/status/dns',
  tags: ['Information'],
  summary: 'DNS Status',
  description:
    'Retrieve DNS worker and stats information. If the legacy DNS client is in use, it returns a 501 status with a message.\n',
  operationId: 'getDnsStatus',
  responses: {
    200: {
      description: 'DNS worker and stats information',
      content: {
        'application/json': {
          schema: z
            .object({
              worker: z
                .object({
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The worker ID.', example: 1 }),
                  count: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The total number of workers.', example: 4 }),
                })
                .exactOptional()
                .openapi({ description: 'Worker information.', required: [] }),
              stats: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'DNS stats information (specific details depend on the Kong instance).',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: HTTP401ErrorResponse,
    501: {
      description: 'Legacy DNS client in use',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Message indicating that the endpoint is not implemented with the legacy DNS client.',
                  example: 'not implemented with the legacy DNS client',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'List all tags',
  description:
    'Returns a paginated list of all the tags in the system.\n\nThe list of entities will not be restricted to a single entity type: all the entities tagged with tags will be present on this list.\n\nIf an entity is tagged with more than one tag, the entity_id for that entity will appear more than once in the resulting list. Similarly, if several entities have been tagged with the same tag, the tag will appear in several items of this list.',
  operationId: 'get-tags',
  responses: { 200: TagsResponseResponse, 401: HTTP401ErrorResponse },
})

export const getTagsTagsRoute = createRoute({
  method: 'get',
  path: '/tags/{tags}',
  tags: ['Tags'],
  summary: 'List entity by tag',
  description:
    'Returns the entities that have been tagged with the specified tag.\n\nThe list of entities will not be restricted to a single entity type: all the entities tagged with tags will be present on this list.',
  operationId: 'get-tags-tags',
  request: { params: z.object({ tags: TagParamsSchema }) },
  responses: { 200: TagsResponseResponse, 401: HTTP401ErrorResponse },
})

export const putDebugClusterControlPlanesNodesLogLevelLogLevelRoute = createRoute({
  method: 'put',
  path: '/debug/cluster/control-planes-nodes/log-level/{log_level}',
  tags: ['Debug'],
  summary: 'Set Node Log Level of All Control Plane Nodes',
  description:
    "Change the log level of all control plane nodes deployed in a hybrid (CP/DP) cluster.\n\nSee the [NGINX docs](http://nginx.org/en/docs/ngx_core_module.html#error_log) for a list of accepted values.\n\nCare must be taken when changing the log level of a node to `debug` in a production environment because the disk could fill up quickly. As soon as the debug logging finishes, revert back to a higher level such as notice.\n\nIt's currently not possible to change the log level of DP and DB-less nodes.\n",
  operationId: 'put-debug-cluster-control-planes-nodes-log-level-log_level',
  request: { params: z.object({ log_level: LogLevelParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Response message', example: 'log level changed' }),
            })
            .openapi({
              'x-examples': { 'Example 1': { message: 'log level changed' } },
              required: [],
            }),
          examples: { 'log level changed': { value: { message: 'log level changed' } } },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const putDebugClusterLogLevelLogLevelRoute = createRoute({
  method: 'put',
  path: '/debug/cluster/log-level/{log_level}',
  tags: ['Debug'],
  summary: 'Set Node Log Level of All Nodes',
  description:
    "Change the log level of all nodes in a cluster.\n\n\n\nSee the [NGINX docs](http://nginx.org/en/docs/ngx_core_module.html#error_log) for a list of accepted values.\n\nIt's currently not possible to change the log level of DP and DB-less nodes.\n\nCurrently, when a user dynamically changes the log level for the entire cluster, if a new node joins a cluster the new node will run at the previous log level, not at the log level that was previously set dynamically for the entire cluster.\n",
  operationId: 'put-debug-cluster-log-level-log_level',
  request: { params: z.object({ log_level: LogLevelParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'log level changed',
                  description: 'A message containing information about the log level',
                }),
            })
            .openapi({
              'x-examples': { 'Example 1': { message: 'log level changed' } },
              required: [],
            }),
          examples: { 'log level changed': { value: { message: 'log level changed' } } },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getDebugNodeLogLevelRoute = createRoute({
  method: 'get',
  path: '/debug/node/log-level',
  tags: ['Debug'],
  summary: 'Retrieve Node Log Level of A Node',
  description:
    'Retrieve the current log level of a node.\n\nSee the [NGINX documentation](http://nginx.org/en/docs/ngx_core_module.html#error_log) for the list of possible return values.',
  operationId: 'get-debug-node-log-level',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'log level: debug',
                  description: 'A message containing the current log level of the node.',
                }),
            })
            .openapi({
              'x-examples': { 'Example 1': { message: 'log level: debug' } },
              required: [],
            }),
          examples: { 'Example 1': { value: { message: 'log level: debug' } } },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const putDebugNodeLogLevelLogLevelRoute = createRoute({
  method: 'put',
  path: '/debug/node/log-level/{log_level}',
  tags: ['Debug'],
  summary: 'Set log level of a single node',
  description:
    'Change the log level of a node.\n\nSee the [NGINX documentation](http://nginx.org/en/docs/ngx_core_module.html#error_log) for the list of possible return values.\n',
  operationId: 'put-debug-node-log-level-log_level',
  request: { params: z.object({ log_level: LogLevelParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A message confirming the log level change',
                  example: 'log level changed',
                }),
            })
            .openapi({
              'x-examples': { 'Example 1': { message: 'log level changed' } },
              required: [],
            }),
          examples: { 'log level changed': { value: { message: 'log level changed' } } },
        },
      },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getSchemasVaultsVaultNameRoute = createRoute({
  method: 'get',
  path: '/schemas/vaults/{vault_name}',
  tags: ['Information'],
  summary: 'Retrieve Vault Schema',
  description: 'Retrieve the schema of a vault.',
  operationId: 'get-schemas-vaults-vault_name',
  request: {
    params: z.object({
      vault_name: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'vault_name',
            in: 'path',
            required: true,
            description: 'The vault schema to be returned',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: VaultSchema } } },
    401: HTTP401ErrorResponse,
    404: { description: 'No vault named' },
  },
})

export const postSchemasVaultsVaultNameRoute = createRoute({
  method: 'post',
  path: '/schemas/vaults/{vault_name}',
  tags: ['Validation'],
  summary: 'Validate Vault Schema',
  description: 'Validates the given vault schema data against predefined validation rules.',
  operationId: 'post-schemas-vaults-validate',
  request: {
    params: z.object({
      vault_name: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'vault_name',
            in: 'path',
            required: true,
            description: 'The vault schema to be returned',
          },
        }),
    }),
    body: {
      description: 'Payload containing the schema data to validate',
      content: {
        'application/json': {
          schema: z
            .object({
              schemaData: z
                .string()
                .exactOptional()
                .openapi({ description: 'JSON string containing the vault schema data' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Validation successful',
      content: {
        'application/json': {
          schema: z
            .object({
              validation: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Indicates if the schema is valid' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad request due to invalid schema data' },
    405: { description: 'Method Not Allowed' },
  },
})

export const getFilterChainsRoute = createRoute({
  method: 'get',
  path: '/filter-chains',
  tags: ['filter-chains'],
  summary: 'List Filter Chains',
  description: 'List All Filter Chains\n',
  operationId: 'get-filter-chains',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FilterChainsSchema } } },
    401: HTTP401ErrorResponse,
  },
})

export const postFilterChainsRoute = createRoute({
  method: 'post',
  path: '/filter-chains',
  tags: ['filter-chains'],
  summary: 'Add Filter Chain',
  description: 'Create Filter Chain\nNote: This API is not available in DB-less mode.\n',
  operationId: 'post-filter-chains',
  request: { body: FilterChainsRequestRequestBody },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: FilterChainsSchema } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getRoutesRouteIdOrNameFilterChainsRoute = createRoute({
  method: 'get',
  path: '/routes/{route_id_or_name}/filter-chains',
  tags: ['filter-chains'],
  summary: 'List Filter Chains Associated to a Specific Route',
  description: 'List Filter Chains Associated to a Specific Route\n',
  operationId: 'get-routes-route_id_or_name-filter-chains',
  request: {
    params: z.object({
      route_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'route_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-route' },
            description: 'The unique identifier or the name of the route to retrieve.',
          },
          example: 'my-route',
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FilterChainsSchema } } },
  },
})

export const postRoutesRouteIdOrNameFilterChainsRoute = createRoute({
  method: 'post',
  path: '/routes/{route_id_or_name}/filter-chains',
  tags: ['filter-chains'],
  summary: 'Add Filter Chain',
  description: 'Create Filter Chain Associated to a Specific Route\n',
  operationId: 'get-routes-route_name_or_id-filter-chains',
  request: {
    params: z.object({
      route_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'route_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-route' },
            description: 'The unique identifier or the name of the route to retrieve.',
          },
          example: 'my-route',
        }),
    }),
    body: FilterChainsRequestRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: FilterChainsSchema } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const patchRoutesRouteIdOrNameFilterChainsRoute = createRoute({
  method: 'patch',
  path: '/routes/{route_id_or_name}/filter-chains',
  tags: ['filter-chains'],
  summary: 'Update Filter Chain Associated to a Specific Route',
  description: 'Update Filter Chain Associated to a Specific Route\n',
  operationId: 'patch-routes-route_id_or_name-filter-chains',
  request: {
    params: z.object({
      route_id_or_name: z
        .string()
        .openapi({
          param: {
            name: 'route_id_or_name',
            in: 'path',
            required: true,
            schema: { type: 'string', example: 'my-route' },
            description: 'The unique identifier or the name of the route to retrieve.',
          },
          example: 'my-route',
        }),
    }),
    body: FilterChainsRequestRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: FilterChainsSchema } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getServicesServiceIdOrNameFilterChainsRoute = createRoute({
  method: 'get',
  path: '/services/{service_id_or_name}/filter-chains',
  tags: ['filter-chains'],
  summary: 'List Filter Chains Associated to a Specific Service',
  description: 'List Filter Chains Associated to a Specific Service\n',
  operationId: 'get-service_id_or_name-filter-chains',
  request: { params: z.object({ service_id_or_name: ServiceIdOrNameParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FilterChainsSchema } } },
    401: HTTP401ErrorResponse,
  },
})

export const postServicesServiceIdOrNameFilterChainsRoute = createRoute({
  method: 'post',
  path: '/services/{service_id_or_name}/filter-chains',
  tags: ['filter-chains'],
  summary: 'Create Filter Chain Associated to a Specific Service',
  description: 'Add filter chain Associated to a Specific Service\n',
  operationId: 'get-services-service_id_or_name-filter-chains',
  request: {
    params: z.object({ service_id_or_name: ServiceIdOrNameParamsSchema }),
    body: FilterChainsRequestRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: FilterChainsSchema } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getFilterChainsFilterChainIdRoute = createRoute({
  method: 'get',
  path: '/filter-chains/{filter_chain_id}',
  tags: ['filter-chains'],
  summary: 'Retrieve Filter Chain',
  description: "Retrieve Filter Chain\n'401':\n  $ref: '#/components/responses/HTTP401Error'\n",
  operationId: 'get-filter-chains-filter_chain_id',
  request: { params: z.object({ filter_chain_id: FilterChainIdParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FilterChainsSchema } } },
  },
})

export const putFilterChainsFilterChainIdRoute = createRoute({
  method: 'put',
  path: '/filter-chains/{filter_chain_id}',
  tags: ['filter-chains'],
  summary: 'Update Or Create Filter Chain',
  description:
    'Inserts (or replaces) the filter chain under the requested resource with the definition specified in the body. The filter chain is identified via the name or ID attribute.\n\nWhen the name or ID attribute has the structure of a UUID, the filter chain being inserted or replaced is identified by its ID. Otherwise, it is identified by its name.\n\nWhen creating a new filter chain without specifying an ID (neither in the URL nor in the body), the ID will be auto-generated.\n\nNotice that specifying a name in the URL and a different one in the request body is not allowed.',
  operationId: 'put-filter-chains-filter_chain_id',
  request: {
    params: z.object({ filter_chain_id: FilterChainIdParamsSchema }),
    body: FilterChainsRequestRequestBody,
  },
  responses: { 200: { description: 'OK' }, 401: HTTP401ErrorResponse },
})

export const deleteFilterChainsFilterChainIdRoute = createRoute({
  method: 'delete',
  path: '/filter-chains/{filter_chain_id}',
  tags: ['filter-chains'],
  summary: 'Delete Filter Chain',
  description: 'Delete filter chain.\n',
  operationId: 'delete-filter-chains-filter_chain_id',
  request: { params: z.object({ filter_chain_id: FilterChainIdParamsSchema }) },
  responses: { 204: { description: 'No Content' }, 401: HTTP401ErrorResponse },
})

export const patchFilterChainsFilterChainIdRoute = createRoute({
  method: 'patch',
  path: '/filter-chains/{filter_chain_id}',
  tags: ['filter-chains'],
  summary: 'Update Filter Chain',
  description: 'Update Filter Chain\nNote: This API is not available in DB-less mode.\n',
  operationId: 'patch-filter-chains-filter_chain_id',
  request: {
    params: z.object({ filter_chain_id: FilterChainIdParamsSchema }),
    body: FilterChainsRequestRequestBody,
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: FilterChainsSchema } },
    },
    401: HTTP401ErrorResponse,
  },
})

export const getRoutesRouteIdOrNameFilterChainsFilterChainIdRoute = createRoute({
  method: 'get',
  path: '/routes/{route_id_or_name}/filter-chains/{filter_chain_id}',
  tags: ['filter-chains'],
  summary: 'List Filter Chains Associated to a Specific Route',
  description: 'Retrieve filter chain associated to a specific route.\n',
  operationId: 'get-routes-route_id_or_name-filter-chains-filter_chain_id',
  request: {
    params: z.object({
      route_id_or_name: RouteIdOrNameParamsSchema,
      filter_chain_id: FilterChainIdParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FilterChainsSchema } } },
    401: HTTP401ErrorResponse,
  },
})

export const putRoutesRouteIdOrNameFilterChainsFilterChainIdRoute = createRoute({
  method: 'put',
  path: '/routes/{route_id_or_name}/filter-chains/{filter_chain_id}',
  tags: ['filter-chains'],
  summary: 'Create Or Update Filter Chain Associated to a Specific Route',
  description: 'Create or update filter chain associated to a specific route.\n',
  operationId: 'put-routes-route_id_or_name-filter-chains-filter_chain_id',
  request: {
    params: z.object({
      route_id_or_name: RouteIdOrNameParamsSchema,
      filter_chain_id: FilterChainIdParamsSchema,
    }),
    body: FilterChainsRequestRequestBody,
  },
  responses: { 200: { description: 'OK' }, 401: HTTP401ErrorResponse },
})

export const deleteRoutesRouteIdOrNameFilterChainIdRoute = createRoute({
  method: 'delete',
  path: '/routes/{route_id_or_name}/{filter_chain_id}',
  tags: ['filter-chains'],
  summary: 'Delete Filter Chain Associated to a Specific Route',
  description: 'Delete filter chain associated to a specific route.\n',
  operationId: 'get-routes-route_id_or_name-filter_chain_id',
  request: {
    params: z.object({
      filter_chain_id: FilterChainIdParamsSchema,
      route_id_or_name: RouteIdOrNameParamsSchema,
    }),
  },
  responses: { 204: { description: 'No Content' }, 401: HTTP401ErrorResponse },
})

export const deleteServicesServiceIdOrNameFilterChainsFilterChainIdRoute = createRoute({
  method: 'delete',
  path: '/services/{service_id_or_name}/filter-chains/{filter_chain_id}',
  tags: ['filter-chains'],
  summary: 'Delete Filter Chain Associated to a Specific Service',
  description: 'Delete filter chain associated to a specific service.\n',
  operationId: 'delete-services-service_id_or_name-filter-chains-filter_chain_id',
  request: {
    params: z.object({
      service_id_or_name: ServiceIdOrNameParamsSchema,
      filter_chain_id: FilterChainIdParamsSchema,
    }),
  },
  responses: { 204: { description: 'No Content' }, 401: HTTP401ErrorResponse },
})

export const getClusteringDataPlanesRoute = createRoute({
  method: 'get',
  path: '/clustering/data-planes',
  tags: ['clustering'],
  summary: 'Retrieve connected data planes',
  description:
    'Retrieve a list of all data planes connected to the control plane. This endpoint is only accessible when Kong Gateway is running in hybrid mode.\n',
  operationId: 'getDataPlanes',
  responses: {
    200: {
      description: 'A list of connected data planes.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      ip: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The IP address of the data plane.' }),
                      updated_at: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Unix timestamp of the last update.' }),
                      config_hash: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The hash of the current configuration on the data plane.',
                        }),
                      sync_status: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The sync status of the data plane.' }),
                      version: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The version of Kong running on the data plane.' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Unique identifier of the data plane.' }),
                      hostname: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The hostname of the data plane.' }),
                      ttl: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Time-to-live for the connection.' }),
                      last_seen: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Unix timestamp when the data plane was last seen by the control plane.',
                        }),
                      labels: z
                        .object({
                          deployment: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The deployment name.' }),
                          region: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The region of the data plane.' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Metadata labels attached to the data plane.',
                          required: [],
                        }),
                      cert_details: z
                        .object({
                          expiry_timestamp: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Timestamp for when the certificate expires.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Kong is not running as a control plane.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'This endpoint is only available when Kong is running as a control plane for the cluster.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getClusteringStatusRoute = createRoute({
  method: 'get',
  path: '/clustering/status',
  tags: ['clustering'],
  summary: 'Retrieve the status of connected data planes',
  description:
    'Retrieve a status report for all data planes connected to the control plane. It includes information like the config hash, hostname, IP address, and last seen timestamp. This endpoint is only accessible when Kong Gateway is running in hybrid mode.\n',
  operationId: 'getDataPlaneStatus',
  responses: {
    200: {
      description: 'The status of all connected data planes.',
      content: {
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .object({
                config_hash: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Hash of the configuration running on the data plane.' }),
                hostname: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Hostname of the data plane.' }),
                ip: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The IP address of the data plane.' }),
                last_seen: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'Unix timestamp of the last interaction between the data plane and control plane.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
      headers: z.object({
        Deprecation: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Indicates that the endpoint may be deprecated in the future.\n',
            param: { required: false },
          }),
      }),
    },
    400: {
      description: 'Kong is not running as a control plane.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'This endpoint is only available when Kong is running as a control plane for the cluster.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCacheKeyRoute = createRoute({
  method: 'get',
  path: '/cache/{key}',
  tags: ['cache'],
  summary: 'Get cache value by key',
  description:
    'Retrieve the cached value for a specific key. This endpoint probes both `kong.cache` and `kong.core_cache`.  If the key exists, it returns the associated value and TTL. If not found, it returns a 404.\n',
  operationId: 'getCacheByKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            description: 'The cache key to retrieve.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cached value found.',
      content: {
        'application/json': {
          schema: z
            .object({
              ttl: z
                .int()
                .exactOptional()
                .openapi({ description: 'Time-to-live (TTL) of the cached entry.' }),
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Cached value or a message.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Cache key not found.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional().openapi({ example: 'Not found' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteCacheKeyRoute = createRoute({
  method: 'delete',
  path: '/cache/{key}',
  tags: ['cache'],
  summary: 'Invalidate cache by key',
  description:
    'Invalidate the cache for a specific key in both `kong.cache` and `kong.core_cache`.\n',
  operationId: 'deleteCacheByKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'path',
            required: true,
            description: 'The cache key to invalidate.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Cache invalidated successfully.' } },
})

export const deleteCacheRoute = createRoute({
  method: 'delete',
  path: '/cache',
  tags: ['cache'],
  summary: 'Purge all cache entries',
  description: 'Purge all cache entries in both `kong.cache` and `kong.core_cache`.\n',
  operationId: 'purgeAllCache',
  responses: { 204: { description: 'All cache entries purged successfully.' } },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['config'],
  summary: 'Get Declarative Config',
  description: 'Get the current configuration. Note: This API is only available in DB-less mode.\n',
  operationId: 'get-config',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ config: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postConfigRoute = createRoute({
  method: 'post',
  path: '/config',
  tags: ['config'],
  summary: 'Apply Declarative Config',
  description:
    'Apply a configuration from a declarative JSON or YAML file. Any existing configuration will be overwritten. Note: This API is only available in DB-less mode.\n',
  operationId: 'post-config',
  request: {
    body: {
      content: {
        'application/json': { schema: z.looseObject({}) },
        'application/yaml': {
          schema: z.looseObject({}),
          example:
            'services:\n  - name: example-service\n    url: http://example.com\n    routes:\n      - name: example-route\n        paths:\n          - /example\n',
        },
        'multipart/form-data': {
          schema: z
            .object({
              config: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  example: '/path/to/<config-file>',
                  description: 'Configuration file in JSON or YAML.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: z.looseObject({}) } } },
  },
})
