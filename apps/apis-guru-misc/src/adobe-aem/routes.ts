import { createRoute, z } from '@hono/zod-openapi'

const BundleDataPropSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Bundle data key' }),
    value: z.string().exactOptional().openapi({ description: 'Bundle data value' }),
  })
  .openapi({ required: [] })
  .openapi('BundleDataProp')

const BundleDataSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'Bundle category' }),
    fragment: z.boolean().exactOptional().openapi({ description: 'Is bundle a fragment' }),
    id: z.int().exactOptional().openapi({ description: 'Bundle ID' }),
    name: z.string().exactOptional().openapi({ description: 'Bundle name' }),
    props: z.array(BundleDataPropSchema).exactOptional(),
    state: z.string().exactOptional().openapi({ description: 'Bundle state value' }),
    stateRaw: z.int().exactOptional().openapi({ description: 'Numeric raw bundle state value' }),
    symbolicName: z.string().exactOptional().openapi({ description: 'Bundle symbolic name' }),
    version: z.string().exactOptional().openapi({ description: 'Bundle version' }),
  })
  .openapi({ required: [] })
  .openapi('BundleData')

const BundleInfoSchema = z
  .object({
    data: z.array(BundleDataSchema).exactOptional(),
    s: z.array(z.int()).exactOptional(),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Status description of all bundles' }),
  })
  .openapi({ required: [] })
  .openapi('BundleInfo')

const InstallStatusSchema = z
  .object({
    status: z
      .object({ finished: z.boolean().exactOptional(), itemCount: z.int().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('InstallStatus')

const KeystoreChainItemsSchema = z
  .object({
    issuer: z.string().exactOptional().openapi({ description: 'e.g. "CN=Admin"' }),
    notAfter: z
      .string()
      .exactOptional()
      .openapi({ description: 'e.g. "Sun Jun 30 23:59:50 AEST 2019"' }),
    notBefore: z
      .string()
      .exactOptional()
      .openapi({ description: 'e.g. "Sun Jul 01 12:00:00 AEST 2018"' }),
    serialNumber: z.int().exactOptional().openapi({ description: '18165099476682912368' }),
    subject: z.string().exactOptional().openapi({ description: 'e.g. "CN=localhost"' }),
  })
  .openapi({ required: [] })
  .openapi('KeystoreChainItems')

const KeystoreItemsSchema = z
  .object({
    algorithm: z.string().exactOptional().openapi({ description: 'e.g. "RSA"' }),
    alias: z.string().exactOptional().openapi({ description: 'Keystore alias name' }),
    chain: z.array(KeystoreChainItemsSchema).exactOptional(),
    entryType: z.string().exactOptional().openapi({ description: 'e.g. "privateKey"' }),
    format: z.string().exactOptional().openapi({ description: 'e.g. "PKCS#8"' }),
  })
  .openapi({ required: [] })
  .openapi('KeystoreItems')

const KeystoreInfoSchema = z
  .object({
    aliases: z.array(KeystoreItemsSchema).exactOptional(),
    exists: z.boolean().exactOptional().openapi({ description: "False if truststore don't exist" }),
  })
  .openapi({ required: [] })
  .openapi('KeystoreInfo')

const SamlConfigurationPropertyItemsBooleanSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Property description' }),
    is_set: z.boolean().exactOptional().openapi({ description: 'True if property is set' }),
    name: z.string().exactOptional().openapi({ description: 'property name' }),
    optional: z.boolean().exactOptional().openapi({ description: 'True if optional' }),
    type: z
      .int()
      .exactOptional()
      .openapi({ description: 'Property type, 1=String, 3=long, 11=boolean, 12=Password' }),
    value: z.boolean().exactOptional().openapi({ description: 'Property value' }),
  })
  .openapi({ required: [] })
  .openapi('SamlConfigurationPropertyItemsBoolean')

const SamlConfigurationPropertyItemsStringSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Property description' }),
    is_set: z.boolean().exactOptional().openapi({ description: 'True if property is set' }),
    name: z.string().exactOptional().openapi({ description: 'property name' }),
    optional: z.boolean().exactOptional().openapi({ description: 'True if optional' }),
    type: z
      .int()
      .exactOptional()
      .openapi({ description: 'Property type, 1=String, 3=long, 11=boolean, 12=Password' }),
    value: z.string().exactOptional().openapi({ description: 'Property value' }),
  })
  .openapi({ required: [] })
  .openapi('SamlConfigurationPropertyItemsString')

const SamlConfigurationPropertyItemsLongSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Property description' }),
    is_set: z.boolean().exactOptional().openapi({ description: 'True if property is set' }),
    name: z.string().exactOptional().openapi({ description: 'property name' }),
    optional: z.boolean().exactOptional().openapi({ description: 'True if optional' }),
    type: z
      .int()
      .exactOptional()
      .openapi({ description: 'Property type, 1=String, 3=long, 11=boolean, 12=Password' }),
    value: z.int().exactOptional().openapi({ description: 'Property value' }),
  })
  .openapi({ required: [] })
  .openapi('SamlConfigurationPropertyItemsLong')

const SamlConfigurationPropertyItemsArraySchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Property description' }),
    is_set: z.boolean().exactOptional().openapi({ description: 'True if property is set' }),
    name: z.string().exactOptional().openapi({ description: 'property name' }),
    optional: z.boolean().exactOptional().openapi({ description: 'True if optional' }),
    type: z
      .int()
      .exactOptional()
      .openapi({ description: 'Property type, 1=String, 3=long, 11=boolean, 12=Password' }),
    values: z.array(z.string()).exactOptional().openapi({ description: 'Property value' }),
  })
  .openapi({ required: [] })
  .openapi('SamlConfigurationPropertyItemsArray')

const SamlConfigurationPropertiesSchema = z
  .object({
    addGroupMemberships: SamlConfigurationPropertyItemsBooleanSchema.exactOptional().openapi({
      description:
        'Whether or not a user should be automatically added to CRX groups after successful authentication.',
    }),
    assertionConsumerServiceURL: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi(
      {
        description:
          'The (optional) AssertionConsumerServiceURL attribute of an Authn request specifies the location to which a  message MUST be sent to the requester.',
      },
    ),
    clockTolerance: SamlConfigurationPropertyItemsLongSchema.exactOptional().openapi({
      description:
        'Time tolerance in seconds to compensate clock skew between IDP and SP when validating Assertions.',
    }),
    createUser: SamlConfigurationPropertyItemsBooleanSchema.exactOptional().openapi({
      description: 'Whether or not to autocreate nonexisting users in the repository.',
    }),
    defaultGroups: SamlConfigurationPropertyItemsArraySchema.exactOptional().openapi({
      description:
        'A list of default CRX groups users are added to after successful authentication.',
    }),
    defaultRedirectUrl: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description: 'The default location to redirect to after successful authentication.',
    }),
    digestMethod: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description: 'The digest algorithm to use when signing a SAML message.',
    }),
    groupMembershipAttribute: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description:
        'The name of the attribute containing a list of CRX groups this user should be added to.',
    }),
    handleLogout: SamlConfigurationPropertyItemsBooleanSchema.exactOptional().openapi({
      description:
        'Whether or not logout (dropCredentials) requests will be processed by this handler.',
    }),
    idpCertAlias: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description:
        "The alias of the IdP's certificate in the global truststore. If this property is empty the authentication handler is disabled.",
    }),
    idpHttpRedirect: SamlConfigurationPropertyItemsBooleanSchema.exactOptional().openapi({
      description:
        'Use an HTTP Redirect to the IDP URL instead of sending an AuthnRequest-message to request credentials. Use this for IDP initiated authentication.',
    }),
    idpUrl: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description:
        'URL of the IDP where the SAML Authentication Request should be sent to. If this property is empty the authentication handler is disabled. (idpUrl)',
    }),
    keyStorePassword: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description: "The password of the key-store of the 'authentication-service' system user.",
    }),
    logoutUrl: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description:
        "URL of the IDP where the SAML Logout Request should be sent to. If this property is empty the authentication handler won't handle logouts.",
    }),
    nameIdFormat: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description:
        'The value of the NameIDPolicy format parameter to send in the AuthnRequest message.',
    }),
    path: SamlConfigurationPropertyItemsArraySchema.exactOptional().openapi({
      description:
        'Repository path for which this authentication handler should be used by Sling. If this is empty, the authentication handler will be disabled.',
    }),
    'service.ranking': SamlConfigurationPropertyItemsLongSchema.exactOptional().openapi({
      description:
        'OSGi Framework Service Ranking value to indicate the order in which to call this service. This is an int value where higher values designate higher precedence. Default value is 0.',
    }),
    serviceProviderEntityId: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description:
        'ID which uniquely identifies this service provider with the identity provider. If this property is empty the authentication handler is disabled.',
    }),
    signatureMethod: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description: 'The signature algorithm to use when signing a SAML message.',
    }),
    spPrivateKeyAlias: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description:
        "The alias of the SP's private key in the key-store of the 'authentication-service' system user. If this property is empty the handler will not be able to sign or decrypt messages.",
    }),
    synchronizeAttributes: SamlConfigurationPropertyItemsArraySchema.exactOptional().openapi({
      description:
        'A list of attribute mappings (in the format \\attributename=path/relative/to/user/node\\) which should be stored in the repository on user-synchronization.',
    }),
    useEncryption: SamlConfigurationPropertyItemsBooleanSchema.exactOptional().openapi({
      description:
        "Whether or not this authentication handler expects encrypted SAML assertions. If this is enabled the SP's private key must be provided in the key-store of the 'authentication-service' system user (see SP Private Key Alias above).",
    }),
    userIDAttribute: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description:
        'The name of the attribute containing the user ID used to authenticate and create the user in the CRX repository. Leave empty to use the Subject:NameId.',
    }),
    userIntermediatePath: SamlConfigurationPropertyItemsStringSchema.exactOptional().openapi({
      description: 'User intermediate path to store created users.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SamlConfigurationProperties')

const SamlConfigurationInfoSchema = z
  .object({
    bundle_location: z
      .string()
      .exactOptional()
      .openapi({ description: 'needed for configuration binding' }),
    description: z.string().exactOptional().openapi({ description: 'Title' }),
    pid: z.string().exactOptional().openapi({ description: 'Persistent Identity (PID)' }),
    properties: SamlConfigurationPropertiesSchema.exactOptional(),
    service_location: z
      .string()
      .exactOptional()
      .openapi({ description: 'needed for configuraiton binding' }),
    title: z.string().exactOptional().openapi({ description: 'Title' }),
  })
  .openapi({ required: [] })
  .openapi('SamlConfigurationInfo')

const TruststoreItemsSchema = z
  .object({
    alias: z.string().exactOptional().openapi({ description: 'Truststore alias name' }),
    entryType: z.string().exactOptional(),
    issuer: z.string().exactOptional().openapi({ description: 'e.g. "CN=Admin"' }),
    notAfter: z
      .string()
      .exactOptional()
      .openapi({ description: 'e.g. "Sun Jun 30 23:59:50 AEST 2019"' }),
    notBefore: z
      .string()
      .exactOptional()
      .openapi({ description: 'e.g. "Sun Jul 01 12:00:00 AEST 2018"' }),
    serialNumber: z.int().exactOptional().openapi({ description: '18165099476682912368' }),
    subject: z.string().exactOptional().openapi({ description: 'e.g. "CN=localhost"' }),
  })
  .openapi({ required: [] })
  .openapi('TruststoreItems')

const TruststoreInfoSchema = z
  .object({
    aliases: z.array(TruststoreItemsSchema).exactOptional(),
    exists: z.boolean().exactOptional().openapi({ description: "False if truststore don't exist" }),
  })
  .openapi({ required: [] })
  .openapi('TruststoreInfo')

const AemAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postCqactionsHtmlRoute = createRoute({
  method: 'post',
  path: '/.cqactions.html',
  tags: ['cq'],
  operationId: 'postCqActions',
  request: {
    query: z.object({
      authorizableId: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'authorizableId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      changelog: z
        .string()
        .openapi({
          param: { in: 'query', name: 'changelog', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigRoute =
  createRoute({
    method: 'post',
    path: '/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config',
    tags: ['sling'],
    operationId: 'postConfigAdobeGraniteSamlAuthenticationHandler',
    request: {
      query: z.object({
        keyStorePassword: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'keyStorePassword',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'keyStorePassword@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'keyStorePassword@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'service.ranking': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'service.ranking',
              required: false,
              schema: { type: 'integer' },
            },
          }),
        'service.ranking@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'service.ranking@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        idpHttpRedirect: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'idpHttpRedirect',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        'idpHttpRedirect@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'idpHttpRedirect@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        createUser: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'createUser',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        'createUser@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'createUser@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        defaultRedirectUrl: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'defaultRedirectUrl',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'defaultRedirectUrl@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'defaultRedirectUrl@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        userIDAttribute: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'userIDAttribute',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'userIDAttribute@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'userIDAttribute@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        defaultGroups: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              explode: true,
              in: 'query',
              name: 'defaultGroups',
              required: false,
              schema: { items: { type: 'string' }, type: 'array' },
            },
          }),
        'defaultGroups@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'defaultGroups@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        idpCertAlias: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'idpCertAlias',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'idpCertAlias@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'idpCertAlias@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        addGroupMemberships: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'addGroupMemberships',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        'addGroupMemberships@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'addGroupMemberships@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        path: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              explode: true,
              in: 'query',
              name: 'path',
              required: false,
              schema: { items: { type: 'string' }, type: 'array' },
            },
          }),
        'path@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'path@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        synchronizeAttributes: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              explode: true,
              in: 'query',
              name: 'synchronizeAttributes',
              required: false,
              schema: { items: { type: 'string' }, type: 'array' },
            },
          }),
        'synchronizeAttributes@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'synchronizeAttributes@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        clockTolerance: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'clockTolerance',
              required: false,
              schema: { type: 'integer' },
            },
          }),
        'clockTolerance@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'clockTolerance@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        groupMembershipAttribute: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'groupMembershipAttribute',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'groupMembershipAttribute@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'groupMembershipAttribute@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        idpUrl: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'idpUrl', required: false, schema: { type: 'string' } },
          }),
        'idpUrl@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'idpUrl@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        logoutUrl: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'logoutUrl', required: false, schema: { type: 'string' } },
          }),
        'logoutUrl@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'logoutUrl@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        serviceProviderEntityId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'serviceProviderEntityId',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'serviceProviderEntityId@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'serviceProviderEntityId@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        assertionConsumerServiceURL: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'assertionConsumerServiceURL',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'assertionConsumerServiceURL@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'assertionConsumerServiceURL@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        handleLogout: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'handleLogout',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        'handleLogout@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'handleLogout@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        spPrivateKeyAlias: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'spPrivateKeyAlias',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'spPrivateKeyAlias@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'spPrivateKeyAlias@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        useEncryption: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'useEncryption',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        'useEncryption@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'useEncryption@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        nameIdFormat: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'nameIdFormat',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'nameIdFormat@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'nameIdFormat@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        digestMethod: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'digestMethod',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'digestMethod@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'digestMethod@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        signatureMethod: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'signatureMethod',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'signatureMethod@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'signatureMethod@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        userIntermediatePath: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'userIntermediatePath',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'userIntermediatePath@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'userIntermediatePath@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { default: { description: 'Default response' } },
  })

export const postAppsSystemConfigComShinesolutionsAemPasswordresetActivatorRoute = createRoute({
  method: 'post',
  path: '/apps/system/config/com.shinesolutions.aem.passwordreset.Activator',
  tags: ['custom'],
  operationId: 'postConfigAemPasswordReset',
  request: {
    query: z.object({
      'pwdreset.authorizables': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'pwdreset.authorizables',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      'pwdreset.authorizables@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'pwdreset.authorizables@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckRoute =
  createRoute({
    method: 'post',
    path: '/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck',
    tags: ['custom'],
    operationId: 'postConfigAemHealthCheckServlet',
    request: {
      query: z.object({
        'bundles.ignored': z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              explode: true,
              in: 'query',
              name: 'bundles.ignored',
              required: false,
              schema: { items: { type: 'string' }, type: 'array' },
            },
          }),
        'bundles.ignored@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'bundles.ignored@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { default: { description: 'Default response' } },
  })

export const postAppsSystemConfigOrgApacheFelixHttpRoute = createRoute({
  method: 'post',
  path: '/apps/system/config/org.apache.felix.http',
  tags: ['sling'],
  operationId: 'postConfigApacheFelixJettyBasedHttpService',
  request: {
    query: z.object({
      'org.apache.felix.https.nio': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.nio',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'org.apache.felix.https.nio@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.nio@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.keystore': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.keystore',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.keystore@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.keystore@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.keystore.password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.keystore.password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.keystore.password@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.keystore.password@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.keystore.key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.keystore.key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.keystore.key@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.keystore.key@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.keystore.key.password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.keystore.key.password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.keystore.key.password@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.keystore.key.password@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.truststore': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.truststore',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.truststore@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.truststore@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.truststore.password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.truststore.password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.truststore.password@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.truststore.password@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.clientcertificate': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.clientcertificate',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.clientcertificate@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.clientcertificate@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.apache.felix.https.enable': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.enable',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'org.apache.felix.https.enable@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.apache.felix.https.enable@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.osgi.service.http.port.secure': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.osgi.service.http.port.secure',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'org.osgi.service.http.port.secure@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'org.osgi.service.http.port.secure@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigRoute = createRoute({
  method: 'post',
  path: '/apps/system/config/org.apache.http.proxyconfigurator.config',
  tags: ['sling'],
  operationId: 'postConfigApacheHttpComponentsProxyConfiguration',
  request: {
    query: z.object({
      'proxy.host': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'proxy.host', required: false, schema: { type: 'string' } },
        }),
      'proxy.host@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'proxy.host@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'proxy.port': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'proxy.port', required: false, schema: { type: 'integer' } },
        }),
      'proxy.port@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'proxy.port@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'proxy.exceptions': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'proxy.exceptions',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      'proxy.exceptions@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'proxy.exceptions@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'proxy.enabled': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'proxy.enabled',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'proxy.enabled@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'proxy.enabled@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'proxy.user': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'proxy.user', required: false, schema: { type: 'string' } },
        }),
      'proxy.user@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'proxy.user@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'proxy.password': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'proxy.password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'proxy.password@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'proxy.password@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletRoute =
  createRoute({
    method: 'post',
    path: '/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet',
    tags: ['sling'],
    operationId: 'postConfigApacheSlingDavExServlet',
    request: {
      query: z.object({
        alias: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'alias', required: false, schema: { type: 'string' } },
          }),
        'alias@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'alias@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
        'dav.create-absolute-uri': z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'dav.create-absolute-uri',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        'dav.create-absolute-uri@TypeHint': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'dav.create-absolute-uri@TypeHint',
              required: false,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { default: { description: 'Default response' } },
  })

export const postAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterRoute = createRoute({
  method: 'post',
  path: '/apps/system/config/org.apache.sling.security.impl.ReferrerFilter',
  tags: ['sling'],
  operationId: 'postConfigApacheSlingReferrerFilter',
  request: {
    query: z.object({
      'allow.empty': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'allow.empty', required: false, schema: { type: 'boolean' } },
        }),
      'allow.empty@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'allow.empty@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'allow.hosts': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'allow.hosts', required: false, schema: { type: 'string' } },
        }),
      'allow.hosts@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'allow.hosts@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'allow.hosts.regexp': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'allow.hosts.regexp',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'allow.hosts.regexp@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'allow.hosts.regexp@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'filter.methods': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter.methods',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'filter.methods@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'filter.methods@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletRoute = createRoute({
  method: 'post',
  path: '/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet',
  tags: ['sling'],
  operationId: 'postConfigApacheSlingGetServlet',
  request: {
    query: z.object({
      'json.maximumresults': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'json.maximumresults',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'json.maximumresults@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'json.maximumresults@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'enable.html': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'enable.html', required: false, schema: { type: 'boolean' } },
        }),
      'enable.html@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'enable.html@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'enable.txt': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'enable.txt', required: false, schema: { type: 'boolean' } },
        }),
      'enable.txt@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'enable.txt@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'enable.xml': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'enable.xml', required: false, schema: { type: 'boolean' } },
        }),
      'enable.xml@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'enable.xml@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postAppsSystemConfigConfigNodeNameRoute = createRoute({
  method: 'post',
  path: '/apps/system/config/{configNodeName}',
  tags: ['sling'],
  operationId: 'postConfigProperty',
  request: {
    params: z.object({
      configNodeName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'configNodeName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const getBinQuerybuilderJsonRoute = createRoute({
  method: 'get',
  path: '/bin/querybuilder.json',
  tags: ['sling'],
  operationId: 'getQuery',
  request: {
    query: z.object({
      path: z
        .string()
        .openapi({
          param: { in: 'query', name: 'path', required: true, schema: { type: 'string' } },
        }),
      'p.limit': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'query', name: 'p.limit', required: true, schema: { type: 'number' } },
        }),
      '1_property': z
        .string()
        .openapi({
          param: { in: 'query', name: '1_property', required: true, schema: { type: 'string' } },
        }),
      '1_property.value': z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: '1_property.value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const postBinQuerybuilderJsonRoute = createRoute({
  method: 'post',
  path: '/bin/querybuilder.json',
  tags: ['sling'],
  operationId: 'postQuery',
  request: {
    query: z.object({
      path: z
        .string()
        .openapi({
          param: { in: 'query', name: 'path', required: true, schema: { type: 'string' } },
        }),
      'p.limit': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'query', name: 'p.limit', required: true, schema: { type: 'number' } },
        }),
      '1_property': z
        .string()
        .openapi({
          param: { in: 'query', name: '1_property', required: true, schema: { type: 'string' } },
        }),
      '1_property.value': z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: '1_property.value',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const postCrxExplorerUiSetpasswordJspRoute = createRoute({
  method: 'post',
  path: '/crx/explorer/ui/setpassword.jsp',
  tags: ['crx'],
  operationId: 'postSetPassword',
  request: {
    query: z.object({
      old: z
        .string()
        .openapi({
          param: { in: 'query', name: 'old', required: true, schema: { type: 'string' } },
        }),
      plain: z
        .string()
        .openapi({
          param: { in: 'query', name: 'plain', required: true, schema: { type: 'string' } },
        }),
      verify: z
        .string()
        .openapi({
          param: { in: 'query', name: 'verify', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: { description: 'Default response', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getCrxPackmgrInstallstatusJspRoute = createRoute({
  method: 'get',
  path: '/crx/packmgr/installstatus.jsp',
  tags: ['crx'],
  operationId: 'getInstallStatus',
  responses: {
    200: {
      description: 'Retrieved CRX package manager install status',
      content: { 'application/json': { schema: InstallStatusSchema } },
    },
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const postCrxPackmgrServiceJspRoute = createRoute({
  method: 'post',
  path: '/crx/packmgr/service.jsp',
  tags: ['crx'],
  operationId: 'postPackageService',
  request: {
    query: z.object({
      cmd: z
        .string()
        .openapi({
          param: { in: 'query', name: 'cmd', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: { description: 'Default response', content: { 'text/xml': { schema: z.string() } } },
  },
})

export const postCrxPackmgrServiceJsonPathRoute = createRoute({
  method: 'post',
  path: '/crx/packmgr/service/.json/{path}',
  tags: ['crx'],
  operationId: 'postPackageServiceJson',
  request: {
    params: z.object({
      path: z
        .string()
        .openapi({
          param: { in: 'path', name: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      cmd: z
        .string()
        .openapi({
          param: { in: 'query', name: 'cmd', required: true, schema: { type: 'string' } },
        }),
      groupName: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'groupName', required: false, schema: { type: 'string' } },
        }),
      packageName: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'packageName', required: false, schema: { type: 'string' } },
        }),
      packageVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'packageVersion',
            required: false,
            schema: { type: 'string' },
          },
        }),
      _charset_: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: '_charset_', required: false, schema: { type: 'string' } },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', required: false, schema: { type: 'boolean' } },
        }),
      recursive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'recursive', required: false, schema: { type: 'boolean' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              package: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getCrxPackmgrServiceScriptHtmlRoute = createRoute({
  method: 'get',
  path: '/crx/packmgr/service/script.html',
  tags: ['crx'],
  operationId: 'getPackageManagerServlet',
  responses: {
    404: {
      description: 'Package Manager Servlet is disabled',
      content: { 'text/html': { schema: z.string() } },
    },
    405: {
      description: 'Package Manager Servlet is active',
      content: { 'text/html': { schema: z.string() } },
    },
  },
})

export const postCrxPackmgrUpdateJspRoute = createRoute({
  method: 'post',
  path: '/crx/packmgr/update.jsp',
  tags: ['crx'],
  operationId: 'postPackageUpdate',
  request: {
    query: z.object({
      groupName: z
        .string()
        .openapi({
          param: { in: 'query', name: 'groupName', required: true, schema: { type: 'string' } },
        }),
      packageName: z
        .string()
        .openapi({
          param: { in: 'query', name: 'packageName', required: true, schema: { type: 'string' } },
        }),
      version: z
        .string()
        .openapi({
          param: { in: 'query', name: 'version', required: true, schema: { type: 'string' } },
        }),
      path: z
        .string()
        .openapi({
          param: { in: 'query', name: 'path', required: true, schema: { type: 'string' } },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'filter', required: false, schema: { type: 'string' } },
        }),
      _charset_: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: '_charset_', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getCrxServerCrxDefaultJcrRoot1JsonRoute = createRoute({
  method: 'get',
  path: '/crx/server/crx.default/jcr:root/.1.json',
  tags: ['crx'],
  operationId: 'getCrxdeStatus',
  responses: {
    200: { description: 'CRXDE is enabled', content: { 'plain/text': { schema: z.string() } } },
    404: { description: 'CRXDE is disabled', content: { 'plain/text': { schema: z.string() } } },
  },
})

export const getEtcPackagesGroupNameVersionZipRoute = createRoute({
  method: 'get',
  path: '/etc/packages/{group}/{name}-{version}.zip',
  tags: ['sling'],
  operationId: 'getPackage',
  request: {
    params: z.object({
      group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'group', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Default response',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonRoute =
  createRoute({
    method: 'get',
    path: '/etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json',
    tags: ['sling'],
    operationId: 'getPackageFilter',
    request: {
      params: z.object({
        group: z
          .string()
          .openapi({
            param: { in: 'path', name: 'group', required: true, schema: { type: 'string' } },
          }),
        name: z
          .string()
          .openapi({
            param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
          }),
        version: z
          .string()
          .openapi({
            param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      default: {
        description: 'Default response',
        content: { 'application/json': { schema: z.string() } },
      },
    },
  })

export const getEtcReplicationAgentsRunmode1JsonRoute = createRoute({
  method: 'get',
  path: '/etc/replication/agents.{runmode}.-1.json',
  tags: ['sling'],
  operationId: 'getAgents',
  request: {
    params: z.object({
      runmode: z
        .string()
        .openapi({
          param: { in: 'path', name: 'runmode', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getEtcReplicationAgentsRunmodeNameRoute = createRoute({
  method: 'get',
  path: '/etc/replication/agents.{runmode}/{name}',
  tags: ['sling'],
  operationId: 'getAgent',
  request: {
    params: z.object({
      runmode: z
        .string()
        .openapi({
          param: { in: 'path', name: 'runmode', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postEtcReplicationAgentsRunmodeNameRoute = createRoute({
  method: 'post',
  path: '/etc/replication/agents.{runmode}/{name}',
  tags: ['sling'],
  operationId: 'postAgent',
  request: {
    params: z.object({
      runmode: z
        .string()
        .openapi({
          param: { in: 'path', name: 'runmode', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'jcr:content/cq:distribute': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/cq:distribute',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/cq:distribute@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/cq:distribute@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/cq:name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/cq:name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/cq:template': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/cq:template',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/enabled': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/enabled',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/jcr:description': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/jcr:description',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/jcr:lastModified': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/jcr:lastModified',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/jcr:lastModifiedBy': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/jcr:lastModifiedBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/jcr:mixinTypes': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/jcr:mixinTypes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/jcr:title': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/jcr:title',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/logLevel': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/logLevel',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/noStatusUpdate': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/noStatusUpdate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/noVersioning': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/noVersioning',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/protocolConnectTimeout': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolConnectTimeout',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'jcr:content/protocolHTTPConnectionClosed': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolHTTPConnectionClosed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/protocolHTTPExpired': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolHTTPExpired',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/protocolHTTPHeaders': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'jcr:content/protocolHTTPHeaders',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      'jcr:content/protocolHTTPHeaders@TypeHint': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolHTTPHeaders@TypeHint',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/protocolHTTPMethod': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolHTTPMethod',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/protocolHTTPSRelaxed': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolHTTPSRelaxed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/protocolInterface': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolInterface',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/protocolSocketTimeout': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolSocketTimeout',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'jcr:content/protocolVersion': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/protocolVersion',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/proxyNTLMDomain': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/proxyNTLMDomain',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/proxyNTLMHost': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/proxyNTLMHost',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/proxyHost': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/proxyHost',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/proxyPassword': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/proxyPassword',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/proxyPort': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/proxyPort',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'jcr:content/proxyUser': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/proxyUser',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/queueBatchMaxSize': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/queueBatchMaxSize',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'jcr:content/queueBatchMode': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/queueBatchMode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/queueBatchWaitTime': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/queueBatchWaitTime',
            required: false,
            schema: { type: 'number' },
          },
        }),
      'jcr:content/retryDelay': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/retryDelay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/reverseReplication': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/reverseReplication',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/serializationType': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/serializationType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/sling:resourceType': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/sling:resourceType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/ssl': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/ssl',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/transportNTLMDomain': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/transportNTLMDomain',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/transportNTLMHost': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/transportNTLMHost',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/transportPassword': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/transportPassword',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/transportUri': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/transportUri',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/transportUser': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/transportUser',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:content/triggerDistribute': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/triggerDistribute',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/triggerModified': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/triggerModified',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/triggerOnOffTime': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/triggerOnOffTime',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/triggerReceive': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/triggerReceive',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/triggerSpecific': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/triggerSpecific',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      'jcr:content/userId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:content/userId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'jcr:primaryType': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:primaryType',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ':operation': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: ':operation', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const deleteEtcReplicationAgentsRunmodeNameRoute = createRoute({
  method: 'delete',
  path: '/etc/replication/agents.{runmode}/{name}',
  tags: ['sling'],
  operationId: 'deleteAgent',
  request: {
    params: z.object({
      runmode: z
        .string()
        .openapi({
          param: { in: 'path', name: 'runmode', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postEtcTruststoreRoute = createRoute({
  method: 'post',
  path: '/etc/truststore',
  tags: ['sling'],
  operationId: 'postTruststorePKCS12',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              'truststore.p12': z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    default: { description: 'Default response', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getEtcTruststoreTruststoreP12Route = createRoute({
  method: 'get',
  path: '/etc/truststore/truststore.p12',
  tags: ['sling'],
  operationId: 'getTruststore',
  responses: {
    default: {
      description: 'Default response',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const getLibsGraniteCoreContentLoginHtmlRoute = createRoute({
  method: 'get',
  path: '/libs/granite/core/content/login.html',
  tags: ['cq'],
  operationId: 'getLoginPage',
  responses: {
    default: { description: 'Default response', content: { 'text/html': { schema: z.string() } } },
  },
  security: [],
})

export const postLibsGraniteSecurityPostAuthorizablesRoute = createRoute({
  method: 'post',
  path: '/libs/granite/security/post/authorizables',
  tags: ['sling'],
  operationId: 'postAuthorizables',
  request: {
    query: z.object({
      authorizableId: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'authorizableId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      intermediatePath: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'intermediatePath',
            required: true,
            schema: { type: 'string' },
          },
        }),
      createUser: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'createUser', required: false, schema: { type: 'string' } },
        }),
      createGroup: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'createGroup', required: false, schema: { type: 'string' } },
        }),
      'rep:password': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rep:password', required: false, schema: { type: 'string' } },
        }),
      'profile/givenName': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'profile/givenName',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: { description: 'Default response', content: { 'text/html': { schema: z.string() } } },
  },
})

export const postLibsGraniteSecurityPostSslSetupHtmlRoute = createRoute({
  method: 'post',
  path: '/libs/granite/security/post/sslSetup.html',
  tags: ['granite'],
  operationId: 'sslSetup',
  request: {
    query: z.object({
      keystorePassword: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'keystorePassword',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keystorePasswordConfirm: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'keystorePasswordConfirm',
            required: true,
            schema: { type: 'string' },
          },
        }),
      truststorePassword: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'truststorePassword',
            required: true,
            schema: { type: 'string' },
          },
        }),
      truststorePasswordConfirm: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'truststorePasswordConfirm',
            required: true,
            schema: { type: 'string' },
          },
        }),
      httpsHostname: z
        .string()
        .openapi({
          param: { in: 'query', name: 'httpsHostname', required: true, schema: { type: 'string' } },
        }),
      httpsPort: z
        .string()
        .openapi({
          param: { in: 'query', name: 'httpsPort', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              certificateFile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary' }),
              privatekeyFile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    default: { description: 'Default response', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const postLibsGraniteSecurityPostTruststoreRoute = createRoute({
  method: 'post',
  path: '/libs/granite/security/post/truststore',
  tags: ['sling'],
  operationId: 'postTruststore',
  request: {
    query: z.object({
      ':operation': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: ':operation', required: false, schema: { type: 'string' } },
        }),
      newPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'newPassword', required: false, schema: { type: 'string' } },
        }),
      rePassword: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rePassword', required: false, schema: { type: 'string' } },
        }),
      keyStoreType: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'keyStoreType', required: false, schema: { type: 'string' } },
        }),
      removeAlias: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'removeAlias', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              certificate: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    default: { description: 'Default response', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getLibsGraniteSecurityTruststoreJsonRoute = createRoute({
  method: 'get',
  path: '/libs/granite/security/truststore.json',
  tags: ['sling'],
  operationId: 'getTruststoreInfo',
  responses: {
    200: {
      description: 'Retrieved AEM Truststore info',
      content: { 'application/json': { schema: TruststoreInfoSchema } },
    },
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const postLibsReplicationTreeactivationHtmlRoute = createRoute({
  method: 'post',
  path: '/libs/replication/treeactivation.html',
  tags: ['sling'],
  operationId: 'postTreeActivation',
  request: {
    query: z.object({
      ignoredeactivated: z
        .stringbool()
        .openapi({
          param: {
            in: 'query',
            name: 'ignoredeactivated',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      onlymodified: z
        .stringbool()
        .openapi({
          param: { in: 'query', name: 'onlymodified', required: true, schema: { type: 'boolean' } },
        }),
      path: z
        .string()
        .openapi({
          param: { in: 'query', name: 'path', required: true, schema: { type: 'string' } },
        }),
      cmd: z
        .string()
        .default('activate')
        .openapi({
          param: {
            in: 'query',
            name: 'cmd',
            required: true,
            schema: { default: 'activate', type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postSystemConsoleBundlesNameRoute = createRoute({
  method: 'post',
  path: '/system/console/bundles/{name}',
  tags: ['console'],
  operationId: 'postBundle',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      action: z
        .string()
        .openapi({
          param: { in: 'query', name: 'action', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const getSystemConsoleBundlesNameJsonRoute = createRoute({
  method: 'get',
  path: '/system/console/bundles/{name}.json',
  tags: ['console'],
  operationId: 'getBundleInfo',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieved bundle info',
      content: { 'application/json': { schema: BundleInfoSchema } },
    },
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getSystemConsoleConfigMgrRoute = createRoute({
  method: 'get',
  path: '/system/console/configMgr',
  tags: ['console'],
  operationId: 'getConfigMgr',
  responses: {
    200: { description: 'OK', content: { 'text/xml': { schema: z.string() } } },
    '5XX': { description: 'Unexpected error.' },
  },
})

export const postSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerRoute =
  createRoute({
    method: 'post',
    path: '/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler',
    tags: ['console'],
    operationId: 'postSamlConfiguration',
    request: {
      query: z.object({
        post: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'post', required: false, schema: { type: 'boolean' } },
          }),
        apply: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'apply', required: false, schema: { type: 'boolean' } },
          }),
        delete: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'delete', required: false, schema: { type: 'boolean' } },
          }),
        action: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'action', required: false, schema: { type: 'string' } },
          }),
        $location: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: '$location', required: false, schema: { type: 'string' } },
          }),
        path: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              explode: true,
              in: 'query',
              name: 'path',
              required: false,
              schema: { items: { type: 'string' }, type: 'array' },
            },
          }),
        'service.ranking': z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'service.ranking',
              required: false,
              schema: { type: 'integer' },
            },
          }),
        idpUrl: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'idpUrl', required: false, schema: { type: 'string' } },
          }),
        idpCertAlias: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'idpCertAlias',
              required: false,
              schema: { type: 'string' },
            },
          }),
        idpHttpRedirect: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'idpHttpRedirect',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        serviceProviderEntityId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'serviceProviderEntityId',
              required: false,
              schema: { type: 'string' },
            },
          }),
        assertionConsumerServiceURL: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'assertionConsumerServiceURL',
              required: false,
              schema: { type: 'string' },
            },
          }),
        spPrivateKeyAlias: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'spPrivateKeyAlias',
              required: false,
              schema: { type: 'string' },
            },
          }),
        keyStorePassword: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'keyStorePassword',
              required: false,
              schema: { type: 'string' },
            },
          }),
        defaultRedirectUrl: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'defaultRedirectUrl',
              required: false,
              schema: { type: 'string' },
            },
          }),
        userIDAttribute: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'userIDAttribute',
              required: false,
              schema: { type: 'string' },
            },
          }),
        useEncryption: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'useEncryption',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        createUser: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'createUser',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        addGroupMemberships: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'addGroupMemberships',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        groupMembershipAttribute: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'groupMembershipAttribute',
              required: false,
              schema: { type: 'string' },
            },
          }),
        defaultGroups: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              explode: true,
              in: 'query',
              name: 'defaultGroups',
              required: false,
              schema: { items: { type: 'string' }, type: 'array' },
            },
          }),
        nameIdFormat: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'nameIdFormat',
              required: false,
              schema: { type: 'string' },
            },
          }),
        synchronizeAttributes: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              explode: true,
              in: 'query',
              name: 'synchronizeAttributes',
              required: false,
              schema: { items: { type: 'string' }, type: 'array' },
            },
          }),
        handleLogout: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'handleLogout',
              required: false,
              schema: { type: 'boolean' },
            },
          }),
        logoutUrl: z
          .string()
          .exactOptional()
          .openapi({
            param: { in: 'query', name: 'logoutUrl', required: false, schema: { type: 'string' } },
          }),
        clockTolerance: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'clockTolerance',
              required: false,
              schema: { type: 'integer' },
            },
          }),
        digestMethod: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'digestMethod',
              required: false,
              schema: { type: 'string' },
            },
          }),
        signatureMethod: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'signatureMethod',
              required: false,
              schema: { type: 'string' },
            },
          }),
        userIntermediatePath: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'userIntermediatePath',
              required: false,
              schema: { type: 'string' },
            },
          }),
        propertylist: z
          .preprocess(
            (val) =>
              val === undefined
                ? val
                : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                    typeof item === 'string' ? item.split(',') : [item],
                  ),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              explode: false,
              in: 'query',
              name: 'propertylist',
              required: false,
              schema: { items: { type: 'string' }, type: 'array' },
              style: 'form',
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Retrieved AEM SAML Configuration',
        content: { 'text/plain': { schema: SamlConfigurationInfoSchema } },
      },
      302: { description: 'Default response', content: { 'text/plain': { schema: z.string() } } },
      default: {
        description: 'Default response',
        content: { 'text/plain': { schema: z.string() } },
      },
    },
  })

export const postSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionRoute = createRoute({
  method: 'post',
  path: '/system/console/jmx/com.adobe.granite:type=Repository/op/{action}',
  tags: ['console'],
  operationId: 'postJmxRepository',
  request: {
    params: z.object({
      action: z
        .string()
        .openapi({
          param: { in: 'path', name: 'action', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const getSystemConsoleStatusProductinfoJsonRoute = createRoute({
  method: 'get',
  path: '/system/console/status-productinfo.json',
  tags: ['console'],
  operationId: 'getAemProductInfo',
  responses: {
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getSystemHealthRoute = createRoute({
  method: 'get',
  path: '/system/health',
  tags: ['custom'],
  operationId: 'getAemHealthCheck',
  request: {
    query: z.object({
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'tags', required: false, schema: { type: 'string' } },
        }),
      combineTagsOr: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'combineTagsOr',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Default response',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const postIntermediatePathAuthorizableIdKsHtmlRoute = createRoute({
  method: 'post',
  path: '/{intermediatePath}/{authorizableId}.ks.html',
  tags: ['sling'],
  operationId: 'postAuthorizableKeystore',
  request: {
    params: z.object({
      intermediatePath: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'intermediatePath',
            required: true,
            schema: { type: 'string' },
          },
        }),
      authorizableId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'authorizableId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      ':operation': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: ':operation', required: false, schema: { type: 'string' } },
        }),
      currentPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'currentPassword',
            required: false,
            schema: { type: 'string' },
          },
        }),
      newPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'newPassword', required: false, schema: { type: 'string' } },
        }),
      rePassword: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'rePassword', required: false, schema: { type: 'string' } },
        }),
      keyPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'keyPassword', required: false, schema: { type: 'string' } },
        }),
      keyStorePass: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'keyStorePass', required: false, schema: { type: 'string' } },
        }),
      alias: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'alias', required: false, schema: { type: 'string' } },
        }),
      newAlias: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'newAlias', required: false, schema: { type: 'string' } },
        }),
      removeAlias: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'removeAlias', required: false, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              'cert-chain': z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
              keyStore: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
              pk: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Retrieved Authorizable Keystore info',
      content: { 'text/plain': { schema: KeystoreInfoSchema } },
    },
    default: { description: 'Default response', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getIntermediatePathAuthorizableIdKsJsonRoute = createRoute({
  method: 'get',
  path: '/{intermediatePath}/{authorizableId}.ks.json',
  tags: ['sling'],
  operationId: 'getAuthorizableKeystore',
  request: {
    params: z.object({
      intermediatePath: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'intermediatePath',
            required: true,
            schema: { type: 'string' },
          },
        }),
      authorizableId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'authorizableId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieved Authorizable Keystore info',
      content: { 'text/plain': { schema: KeystoreInfoSchema } },
    },
    default: { description: 'Default response', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getIntermediatePathAuthorizableIdKeystoreStoreP12Route = createRoute({
  method: 'get',
  path: '/{intermediatePath}/{authorizableId}/keystore/store.p12',
  tags: ['sling'],
  operationId: 'getKeystore',
  request: {
    params: z.object({
      intermediatePath: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'intermediatePath',
            required: true,
            schema: { type: 'string' },
          },
        }),
      authorizableId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'authorizableId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Default response',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const postPathIndexRoute = createRoute({
  method: 'post',
  path: '/{path}/',
  tags: ['sling'],
  operationId: 'postPath',
  request: {
    params: z.object({
      path: z
        .string()
        .openapi({
          param: { in: 'path', name: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      'jcr:primaryType': z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jcr:primaryType',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ':name': z
        .string()
        .openapi({
          param: { in: 'query', name: ':name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const getPathNameRoute = createRoute({
  method: 'get',
  path: '/{path}/{name}',
  tags: ['sling'],
  operationId: 'getNode',
  request: {
    params: z.object({
      path: z
        .string()
        .openapi({
          param: { in: 'path', name: 'path', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postPathNameRoute = createRoute({
  method: 'post',
  path: '/{path}/{name}',
  tags: ['sling'],
  operationId: 'postNode',
  request: {
    params: z.object({
      path: z
        .string()
        .openapi({
          param: { in: 'path', name: 'path', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      ':operation': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: ':operation', required: false, schema: { type: 'string' } },
        }),
      deleteAuthorizable: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'deleteAuthorizable',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Default response' } },
})

export const deletePathNameRoute = createRoute({
  method: 'delete',
  path: '/{path}/{name}',
  tags: ['sling'],
  operationId: 'deleteNode',
  request: {
    params: z.object({
      path: z
        .string()
        .openapi({
          param: { in: 'path', name: 'path', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})

export const postPathNameRwHtmlRoute = createRoute({
  method: 'post',
  path: '/{path}/{name}.rw.html',
  tags: ['sling'],
  operationId: 'postNodeRw',
  request: {
    params: z.object({
      path: z
        .string()
        .openapi({
          param: { in: 'path', name: 'path', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      addMembers: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'addMembers', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Default response' } },
})
