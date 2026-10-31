import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    country: z.string().exactOptional().openapi({ description: 'Country name component.' }),
    formatted: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.',
      }),
    locality: z.string().exactOptional().openapi({ description: 'City or locality component.' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Zip code or postal code component.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'State, province, prefecture, or region component.' }),
    street_address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Address')

const ClientSchema = z
  .object({
    '@id': z
      .string()
      .exactOptional()
      .openapi({ description: "URL of the Client's JSON representation." }),
    client_id: z.string().openapi({ description: 'OAuth 2.0 client identifier string.' }),
    client_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable string name of the client to be presented to the end-user during authorization.',
      }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'OAuth 2.0 client secret string. ' }),
    client_uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL string of a web page providing information about the client.' }),
    contacts: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Array of strings representing ways to contact people responsible for this client, typically email addresses.',
      }),
    grant_types: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Array of OAuth 2.0 grant type strings that the client can use at the token endpoint.',
      }),
    jwks: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          "Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set.",
      }),
    jwks_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys.",
      }),
    logo_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'An email address used to generate a gravatar.com logo_uri.' }),
    logo_uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL string that references a logo for the client.' }),
    policy_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.',
      }),
    redirect_uris: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows.',
      }),
    response_types: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.',
      }),
    software_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered.',
      }),
    software_version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A version identifier string for the client software identified by software_id.',
      }),
    token_endpoint_auth_method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String indicator of the requested authentication method for the token endpoint.',
      }),
    tos_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.',
      }),
  })
  .openapi({ required: ['client_id'] })
  .openapi('Client')

const DomainSchema = z
  .object({
    '@id': z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the domain's JSON representation." }),
    logo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the domain logo. The image from this address is displayed on the webpage of the domain.',
      }),
    members: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'The tenants included in a domain.' }),
    name: z.string().exactOptional().openapi({ description: 'The displayed domain name.' }),
    profile: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the domain's webpage." }),
    sub: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fully qualified DNS name of the domain (e.g. phantauth.net).' }),
  })
  .openapi({ required: [] })
  .openapi('Domain')

const FleetSchema = z
  .object({
    '@id': z
      .string()
      .exactOptional()
      .openapi({ description: "URL of the Fleet's JSON representation." }),
    logo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.',
      }),
    logo_email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address.',
      }),
    members: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'The client objects included in a fleet.' }),
    name: z.string().exactOptional().openapi({ description: 'The displayed fleet name.' }),
    profile: z.string().exactOptional().openapi({ description: 'The URL of the Fleet profile.' }),
    sub: z
      .string()
      .openapi({
        description:
          'The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.',
      }),
  })
  .openapi({ required: ['sub'] })
  .openapi('Fleet')

const TeamSchema = z
  .object({
    '@id': z
      .string()
      .exactOptional()
      .openapi({ description: "URL of the Teams's JSON representation." }),
    logo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.',
      }),
    logo_email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address.',
      }),
    members: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'The user objects that generate a team member.' }),
    name: z.string().exactOptional().openapi({ description: 'The displayed team name.' }),
    profile: z.string().exactOptional().openapi({ description: 'The URL of the Team profile.' }),
    sub: z
      .string()
      .openapi({
        description:
          'The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.',
      }),
  })
  .openapi({ required: ['sub'] })
  .openapi('Team')

const TenantSchema = z
  .object({
    '@id': z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the tenant's JSON representation." }),
    about: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description.',
      }),
    attribution: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links.',
      }),
    depot: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.\nThe URI template receives the type of the object to be generated (user, team) in the `kind` parameter.\n\nThe first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.\nIn the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).",
      }),
    depots: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description: 'A list of resource types supported by the external CSV set in `depot`.',
      }),
    domain: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True in the case of a domain tenant collecting several tenants, otherwise false.',
      }),
    factories: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'A list of resource types supported by the external generator set in `factory`.',
      }),
    factory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.\nThe URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.',
      }),
    favicon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages.",
      }),
    issuer: z
      .string()
      .openapi({
        description:
          'The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).\nAs a webpage, it contains information on the use if the given tenant.',
      }),
    logo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages.",
      }),
    script: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages.',
      }),
    sheet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.\nIn the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).",
      }),
    sub: z
      .string()
      .openapi({
        description:
          'The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).',
      }),
    subtenant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True in the case of a tenant referred to in a domain tenant, otherwise false.',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text.",
      }),
    template: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.\nThe URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.',
      }),
    theme: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URL of the CSS style sheet used for the tenant's webpages.\nThe default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.",
      }),
    userinfo: z.string().exactOptional(),
    website: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property.",
      }),
  })
  .openapi({ required: ['sub', 'issuer'] })
  .openapi('Tenant')

const UserSchema = z
  .object({
    '@id': z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the user's JSON representation." }),
    address: AddressSchema.exactOptional(),
    birthdate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format.",
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's preferred email address." }),
    email_verified: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "True if the user's e-mail address has been verified; otherwise false.",
      }),
    family_name: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's surname(s) or last name(s)." }),
    gender: z
      .string()
      .exactOptional()
      .openapi({
        description: "The enduser's gender. Possible values are: female, male, and unknown.",
      }),
    given_name: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's given name(s) or first name(s)." }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash.",
      }),
    me: z
      .string()
      .exactOptional()
      .openapi({ description: "The simplified URL of the user's profile page." }),
    middle_name: z.string().exactOptional().openapi({ description: "The user's middle name(s)." }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences.",
      }),
    nickname: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A casual name of the User that may or may not be the same as the given_name.',
      }),
    password: z.string().exactOptional().openapi({ description: "The user's generated password." }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's preferred telephone number." }),
    phone_number_verified: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "True if the enduser's phone number has been verified; otherwise false.",
      }),
    picture: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the user's profile picture." }),
    preferred_username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A shorthand name by which the user wishes to be referred to at the Relying Party.',
      }),
    profile: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the user's profile page." }),
    sub: z.string().openapi({ description: 'Subject - User identifier at the issuer.' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's simplified, shortened identifier at the Issuer." }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.",
      }),
    webmail: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of user's mailbox in a webmail application." }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the user's webpage or blog." }),
    zoneinfo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles.",
      }),
  })
  .openapi({ required: ['sub'] })
  .openapi('User')

export const postClientRoute = createRoute({
  method: 'post',
  path: '/client',
  tags: ['Client'],
  summary: 'Create a Client Selfie',
  description:
    'To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.\nLater, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.\nBy the use of a selfie token, you can use your own client objects in the authentication process.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              '@id': z
                .string()
                .exactOptional()
                .openapi({ description: "URL of the Client's JSON representation." }),
              client_id: z.string().openapi({ description: 'OAuth 2.0 client identifier string.' }),
              client_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Human-readable string name of the client to be presented to the end-user during authorization.',
                }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({ description: 'OAuth 2.0 client secret string. ' }),
              client_uri: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL string of a web page providing information about the client.',
                }),
              contacts: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array of strings representing ways to contact people responsible for this client, typically email addresses.',
                }),
              grant_types: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array of OAuth 2.0 grant type strings that the client can use at the token endpoint.',
                }),
              jwks: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    "Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set.",
                }),
              jwks_uri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys.",
                }),
              logo_email: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An email address used to generate a gravatar.com logo_uri.',
                }),
              logo_uri: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL string that references a logo for the client.' }),
              policy_uri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.',
                }),
              redirect_uris: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows.',
                }),
              response_types: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.',
                }),
              software_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered.',
                }),
              software_version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A version identifier string for the client software identified by software_id.',
                }),
              token_endpoint_auth_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'String indicator of the requested authentication method for the token endpoint.',
                }),
              tos_uri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.',
                }),
            })
            .openapi({
              example: {
                client_id: 'magic.toolbox',
                client_name: 'Magic Toolbox',
                client_secret: 'O68dVlLk',
                logo_email: 'magic.toolbox.OUUWE4A@mailinator.com',
                logo_uri:
                  'https://www.gravatar.com/avatar/23a9c0277d8e4062b01f1097037f0d5b?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2F9b68RVeE.png',
                policy_uri: 'https://phantauth.net/client/magic.toolbox/policy',
                software_id: 'igG6Jgx7mfzPdjhBvHvqRQ',
                software_version: '3.8.0',
                tos_uri: 'https://phantauth.net/client/magic.toolbox/tos',
              },
              required: ['client_id'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getClientClientIdRoute = createRoute({
  method: 'get',
  path: '/client/{client_id}',
  tags: ['Client'],
  summary: 'Get a Client',
  description:
    'Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.\nIn the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.\nIn lack of a client ID, all calls generate a different client object to the randomly generated client ID.\n\nBy providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.\n\nIf the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`\n\nThe result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.\nThe members of a fleet are clients randomly generated from the fleet name.',
  request: {
    params: z.object({
      client_id: z
        .string()
        .openapi({
          param: {
            description: 'A client ID or email.',
            in: 'path',
            name: 'client_id',
            required: true,
            schema: { type: 'string' },
          },
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
              '@id': z
                .string()
                .exactOptional()
                .openapi({ description: "URL of the Client's JSON representation." }),
              client_id: z.string().openapi({ description: 'OAuth 2.0 client identifier string.' }),
              client_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Human-readable string name of the client to be presented to the end-user during authorization.',
                }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({ description: 'OAuth 2.0 client secret string. ' }),
              client_uri: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL string of a web page providing information about the client.',
                }),
              contacts: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array of strings representing ways to contact people responsible for this client, typically email addresses.',
                }),
              grant_types: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array of OAuth 2.0 grant type strings that the client can use at the token endpoint.',
                }),
              jwks: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    "Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set.",
                }),
              jwks_uri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys.",
                }),
              logo_email: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An email address used to generate a gravatar.com logo_uri.',
                }),
              logo_uri: z
                .string()
                .exactOptional()
                .openapi({ description: 'URL string that references a logo for the client.' }),
              policy_uri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.',
                }),
              redirect_uris: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows.',
                }),
              response_types: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.',
                }),
              software_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered.',
                }),
              software_version: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A version identifier string for the client software identified by software_id.',
                }),
              token_endpoint_auth_method: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'String indicator of the requested authentication method for the token endpoint.',
                }),
              tos_uri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.',
                }),
            })
            .openapi({ required: ['client_id'] }),
          examples: {
            response: {
              value: {
                '@id': 'https://phantauth.net/client/magic.toolbox',
                client_id: 'magic.toolbox',
                client_name: 'Magic Toolbox',
                client_secret: 'O68dVlLk',
                client_uri: 'https://phantauth.net/client/magic.toolbox/profile',
                logo_email: 'magic.toolbox.OUUWE4A@mailinator.com',
                logo_uri:
                  'https://www.gravatar.com/avatar/23a9c0277d8e4062b01f1097037f0d5b?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2F9b68RVeE.png',
                policy_uri: 'https://phantauth.net/client/magic.toolbox/policy',
                software_id: 'igG6Jgx7mfzPdjhBvHvqRQ',
                software_version: '3.8.0',
                tos_uri: 'https://phantauth.net/client/magic.toolbox/tos',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getClientClientIdTokenKindRoute = createRoute({
  method: 'get',
  path: '/client/{client_id}/token/{kind}',
  tags: ['Client'],
  summary: 'Get a Client Token',
  description:
    'It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.\n\nIt is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.',
  request: {
    params: z.object({
      client_id: z
        .string()
        .openapi({
          param: {
            description: 'A client ID or email.',
            in: 'path',
            name: 'client_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      kind: z
        .enum(["'registration'", "'selfie'", "'plain'"])
        .openapi({
          param: {
            description: 'Token type',
            in: 'path',
            name: 'kind',
            required: true,
            schema: { enum: ["'registration'", "'selfie'", "'plain'"], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getDomainDomainnameRoute = createRoute({
  method: 'get',
  path: '/domain/{domainname}',
  tags: ['Domain'],
  summary: 'Get a Domain',
  description:
    "This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.\nIt is, therefore, mainly used for debug/diagnostic purposes in tenant customization.\n\nDomainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).",
  request: {
    params: z.object({
      domainname: z
        .string()
        .openapi({
          param: {
            description: 'The domain ID integrated in the `sub` property.',
            in: 'path',
            name: 'domainname',
            required: true,
            schema: { type: 'string' },
          },
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
              '@id': z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the domain's JSON representation." }),
              logo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL of the domain logo. The image from this address is displayed on the webpage of the domain.',
                }),
              members: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The tenants included in a domain.' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The displayed domain name.' }),
              profile: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the domain's webpage." }),
              sub: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The fully qualified DNS name of the domain (e.g. phantauth.net).',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                '@id': 'https://phantauth.net/domain/phantauth.net',
                logo: 'https://www.phantauth.net/logo/phantauth-logo.svg',
                members: [
                  {
                    '@id': 'https://phantauth.net/tenant/default',
                    domain: false,
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    issuer: 'https://phantauth.net',
                    logo: 'https://default.phantauth.net/logo/phantauth-logo-light.svg',
                    name: 'PhantAuth Default',
                    sub: 'default',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    website: 'https://phantauth.net',
                  },
                  {
                    '@id': 'https://phantauth.net/_gods/tenant/gods',
                    attribution:
                      'God pictures come from  [Theoi Project](https://www.theoi.com/), a site exploring Greek mythology and the gods in classical literature and art.',
                    depot:
                      'https://docs.google.com/spreadsheets/d/1Xa4mRcLWroJr2vUDhrJXGBcobYmpS8fNZxFpXw-M9DY/gviz/tq?tqx=out:csv',
                    depots: ['user', 'team'],
                    domain: false,
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    flags: 'medium',
                    issuer: 'https://phantauth.net/_gods',
                    logo: 'https://cdn.staticaly.com/favicons/www.theoi.com',
                    name: 'Greek Gods',
                    sub: 'gods',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme:
                      'https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sandstone/bootstrap.min.css',
                    website: 'https://phantauth.net/_gods',
                  },
                  {
                    '@id': 'https://phantauth.net/_casual/tenant/casual',
                    domain: false,
                    factories: ['user'],
                    factory:
                      'https://wt-51217f7b3eee6aead0123eeafe3b83e8-0.sandbox.auth0-extend.com/user{?name}',
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    issuer: 'https://phantauth.net/_casual',
                    logo: 'https://www.phantauth.net/logo/phantauth-logo-gray.svg',
                    name: 'PhantAuth Casual',
                    sub: 'casual',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme:
                      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                    website: 'https://phantauth.net/_casual',
                  },
                  {
                    '@id': 'https://phantauth.net/_faker/tenant/faker',
                    domain: false,
                    factories: ['team', 'user'],
                    factory: 'https://faker.phantauth.net/api{/kind,name}',
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    flags: 'small',
                    issuer: 'https://phantauth.net/_faker',
                    logo: 'https://phantauth-faker.now.sh/faker-logo.svg',
                    name: 'PhantAuth Faker',
                    sub: 'faker',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme:
                      'https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/united/bootstrap.min.css',
                    website: 'https://phantauth.net/_faker',
                  },
                  {
                    '@id': 'https://phantauth.net/_uinames/tenant/uinames',
                    attribution:
                      'User data generated using [uinames.com API](https://uinames.com).',
                    domain: false,
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    flags: 'small',
                    issuer: 'https://phantauth.net/_uinames',
                    logo: 'https://uinames.com/assets/img/ios-precomposed.png',
                    name: 'uinames',
                    script: 'https://www.phantauth.net/selfie/uinames.js',
                    sub: 'uinames',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme:
                      'https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/minty/bootstrap.min.css',
                    website: 'https://phantauth.net/_uinames',
                  },
                  {
                    '@id': 'https://phantauth.net/_chance/tenant/chance',
                    domain: false,
                    factories: ['user', 'team'],
                    factory: 'https://chance.phantauth.net/api{/kind,name}',
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    flags: 'small',
                    issuer: 'https://phantauth.net/_chance',
                    logo: 'https://phantauth-chance.now.sh/chance-logo.png',
                    name: 'PhantAuth Chance',
                    sub: 'chance',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme:
                      'https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/united/bootstrap.min.css',
                    website: 'https://phantauth.net/_chance',
                  },
                  {
                    '@id': 'https://phantauth.net/_sketch/tenant/sketch',
                    domain: false,
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    flags: 'sketch;small',
                    issuer: 'https://phantauth.net/_sketch',
                    logo: 'https://www.phantauth.net/logo/phantauth-sketch.svg',
                    name: 'PhantAuth Sketch',
                    sub: 'sketch',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme:
                      'https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sketchy/bootstrap.min.css',
                    website: 'https://phantauth.net/_sketch',
                  },
                  {
                    '@id': 'https://phantauth.net/_randomuser/tenant/randomuser',
                    attribution:
                      'User data generated using [RANDOM USER GENERATOR](https://randomuser.me/).',
                    domain: false,
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    flags: 'small',
                    issuer: 'https://phantauth.net/_randomuser',
                    logo: 'https://cdn.staticaly.com/favicons/randomuser.me',
                    name: 'RANDOM USER',
                    script: 'https://www.phantauth.net/selfie/randomuser.js',
                    sub: 'randomuser',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme:
                      'https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sandstone/bootstrap.min.css',
                    website: 'https://phantauth.net/_randomuser',
                  },
                  {
                    '@id': 'https://phantauth.net/_mockaroo/tenant/mockaroo',
                    attribution:
                      "User data generated using [Mockaroo's Mock APIs](https://mockaroo.com/mock_apis).",
                    domain: false,
                    favicon: 'https://default.phantauth.net/logo/phantauth-favicon.png',
                    flags: 'small',
                    issuer: 'https://phantauth.net/_mockaroo',
                    logo: 'https://www.phantauth.net/selfie/kongaroo.svg',
                    name: 'Mockaroo',
                    script: 'https://www.phantauth.net/selfie/mockaroo.js',
                    sub: 'mockaroo',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme:
                      'https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/minty/bootstrap.min.css',
                    website: 'https://phantauth.net/_mockaroo',
                  },
                  {
                    '@id': 'https://mockuser.ga/tenant/mockuser.ga',
                    domain: false,
                    favicon: 'https://www.phantauth.net/brand/mockuser/mockuser-favicon.png',
                    issuer: 'https://mockuser.ga',
                    logo: 'https://www.phantauth.net/brand/mockuser/mockuser-logo-light.svg',
                    name: 'Mock User',
                    sub: 'mockuser.ga',
                    subtenant: false,
                    template: 'https://default.phantauth.net{/resource}',
                    theme: 'https://www.phantauth.net/brand/mockuser/bootstrap-mockuser.min.css',
                    website: 'https://www.mockuser.ga',
                  },
                ],
                name: 'PhantAuth Domain',
                profile: 'https://phantauth.net/domain/phantauth.net/profile',
                sub: 'phantauth.net',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getFleetFleetnameRoute = createRoute({
  method: 'get',
  path: '/fleet/{fleetname}',
  tags: ['Fleet'],
  summary: 'Get a Fleet',
  description:
    'Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.\nIn the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.\nIn lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.',
  request: {
    params: z.object({
      fleetname: z
        .string()
        .openapi({
          param: {
            description:
              '\nThe identifier or email address of the fleet; it is integrated in the `sub` property and is the basis of the other generated properties.\n',
            in: 'path',
            name: 'fleetname',
            required: true,
            schema: { type: 'string' },
          },
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
              '@id': z
                .string()
                .exactOptional()
                .openapi({ description: "URL of the Fleet's JSON representation." }),
              logo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.',
                }),
              logo_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address.',
                }),
              members: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The client objects included in a fleet.' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The displayed fleet name.' }),
              profile: z
                .string()
                .exactOptional()
                .openapi({ description: 'The URL of the Fleet profile.' }),
              sub: z
                .string()
                .openapi({
                  description:
                    'The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.',
                }),
            })
            .openapi({ required: ['sub'] }),
          examples: {
            response: {
              value: {
                '@id': 'https://phantauth.net/fleet/blue.fleet',
                logo: 'https://www.gravatar.com/avatar/60757eca81bdd6768421ed3b669b651d?s=256&d=identicon',
                logo_email: 'blue.fleet.6JBLL7Y@mailinator.com',
                members: [
                  {
                    '@id': 'https://phantauth.net/client/zamit%7Eueyonuvxhz0',
                    client_id: 'zamit~ueyonuvxhz0',
                    client_name: 'Zamit',
                    client_secret: 'o0Ie0Ph4',
                    client_uri: 'https://phantauth.net/client/zamit%7Eueyonuvxhz0/profile',
                    logo_email: 'zamit.6UTF3FA@mailinator.com',
                    logo_uri:
                      'https://www.gravatar.com/avatar/849f9934a6aec97935cb40eadbf06d60?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2Fpnelv7bK.png',
                    policy_uri: 'https://phantauth.net/client/zamit%7Eueyonuvxhz0/policy',
                    software_id: 'tzpm4afosVpE65jyw55ZLA',
                    software_version: '8.0.8',
                    tos_uri: 'https://phantauth.net/client/zamit%7Eueyonuvxhz0/tos',
                  },
                  {
                    '@id': 'https://phantauth.net/client/otcom%7Ekzwnwi3dcjc',
                    client_id: 'otcom~kzwnwi3dcjc',
                    client_name: 'Otcom',
                    client_secret: 'W0UFeZTo',
                    client_uri: 'https://phantauth.net/client/otcom%7Ekzwnwi3dcjc/profile',
                    logo_email: 'otcom.DVC7D4Y@mailinator.com',
                    logo_uri:
                      'https://www.gravatar.com/avatar/102ea74126cec525eded6e2511ee4960?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2FQBeXrkby.png',
                    policy_uri: 'https://phantauth.net/client/otcom%7Ekzwnwi3dcjc/policy',
                    software_id: 'RqrMOl5ZNZeEoYNkCdg1AA',
                    software_version: '8.0.9',
                    tos_uri: 'https://phantauth.net/client/otcom%7Ekzwnwi3dcjc/tos',
                  },
                  {
                    '@id': 'https://phantauth.net/client/greenlam%7Eo3sbolv1qjc',
                    client_id: 'greenlam~o3sbolv1qjc',
                    client_name: 'Greenlam',
                    client_secret: 'jeXBkxJ4',
                    client_uri: 'https://phantauth.net/client/greenlam%7Eo3sbolv1qjc/profile',
                    logo_email: 'greenlam.2XD4DYQ@mailinator.com',
                    logo_uri:
                      'https://www.gravatar.com/avatar/0d304aa152b8edd056d1e7862364dec2?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2FLDdwLJe1.png',
                    policy_uri: 'https://phantauth.net/client/greenlam%7Eo3sbolv1qjc/policy',
                    software_id: '0dQ9wd0fb1v2RPd1de-m6A',
                    software_version: '6.4.2',
                    tos_uri: 'https://phantauth.net/client/greenlam%7Eo3sbolv1qjc/tos',
                  },
                  {
                    '@id': 'https://phantauth.net/client/holdlamis%7E1jvzg8zw3ie',
                    client_id: 'holdlamis~1jvzg8zw3ie',
                    client_name: 'Holdlamis',
                    client_secret: 'N0dEVTVQ',
                    client_uri: 'https://phantauth.net/client/holdlamis%7E1jvzg8zw3ie/profile',
                    logo_email: 'holdlamis.4AP3BGI@mailinator.com',
                    logo_uri:
                      'https://www.gravatar.com/avatar/14d66b1256d484d2ab268cbe58694bb9?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2FRb4x6nbB.png',
                    policy_uri: 'https://phantauth.net/client/holdlamis%7E1jvzg8zw3ie/policy',
                    software_id: 'ReiInzn-af_1XjFhBwl2Kw',
                    software_version: '9.0.5',
                    tos_uri: 'https://phantauth.net/client/holdlamis%7E1jvzg8zw3ie/tos',
                  },
                  {
                    '@id': 'https://phantauth.net/client/asoka%7Evu9rsfdq16m',
                    client_id: 'asoka~vu9rsfdq16m',
                    client_name: 'Asoka',
                    client_secret: '92Qz6rSU',
                    client_uri: 'https://phantauth.net/client/asoka%7Evu9rsfdq16m/profile',
                    logo_email: 'asoka.K2ZLAYQ@mailinator.com',
                    logo_uri:
                      'https://www.gravatar.com/avatar/7acc74527505772449417aed086c3b24?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2F6dBB3xd7.png',
                    policy_uri: 'https://phantauth.net/client/asoka%7Evu9rsfdq16m/policy',
                    software_id: 's0GXgtm6HqPy0nayXt8g4w',
                    software_version: '3.9.6',
                    tos_uri: 'https://phantauth.net/client/asoka%7Evu9rsfdq16m/tos',
                  },
                ],
                name: 'Blue Fleet',
                profile: 'https://phantauth.net/fleet/blue.fleet/profile',
                sub: 'blue.fleet',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getTeamTeamnameRoute = createRoute({
  method: 'get',
  path: '/team/{teamname}',
  tags: ['Team'],
  summary: 'Get a Team',
  description:
    'Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.\nIn the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.\nIn lack of a team name, all calls generate a different team object to the randomly generated team name.',
  request: {
    params: z.object({
      teamname: z
        .string()
        .openapi({
          param: {
            description:
              '\nThe identifier or email address of the team; it is integrated in the `sub` property and is the basis of the other generated properties.\n',
            in: 'path',
            name: 'teamname',
            required: true,
            schema: { type: 'string' },
          },
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
              '@id': z
                .string()
                .exactOptional()
                .openapi({ description: "URL of the Teams's JSON representation." }),
              logo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.',
                }),
              logo_email: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address.',
                }),
              members: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'The user objects that generate a team member.' }),
              name: z.string().exactOptional().openapi({ description: 'The displayed team name.' }),
              profile: z
                .string()
                .exactOptional()
                .openapi({ description: 'The URL of the Team profile.' }),
              sub: z
                .string()
                .openapi({
                  description:
                    'The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.',
                }),
            })
            .openapi({ required: ['sub'] }),
          examples: {
            response: {
              value: {
                '@id': 'https://phantauth.net/team/dream.team',
                logo: 'https://www.gravatar.com/avatar/0d6fbd4eb21c269933ca5bba043ab4aa?s=256&d=identicon',
                logo_email: 'dream.team.HIECLNQ@mailinator.com',
                members: [
                  {
                    '@id': 'https://phantauth.net/user/ariana.riley.hudson',
                    address: {
                      country: 'USA',
                      formatted: '62 Highland Place APT 63\nMiami 30927',
                      locality: 'Miami',
                      postal_code: '30927',
                      street_address: '62 Highland Place APT 63',
                    },
                    birthdate: '1938-11-19',
                    email: 'ariana.riley.hudson.VJ2ABXA@mailinator.com',
                    email_verified: false,
                    family_name: 'Hudson',
                    gender: 'female',
                    given_name: 'Ariana',
                    locale: 'en_US',
                    me: 'https://phantauth.net/~ariana.riley.hudson',
                    middle_name: 'Riley',
                    name: 'Ariana Hudson',
                    nickname: 'Ariana',
                    password: 'cuTCy0IZ',
                    phone_number: '552-769-0026',
                    phone_number_verified: true,
                    picture:
                      'https://www.gravatar.com/avatar/8b0562dd7dd8ff1d8d872fcf58972d6d?s=256&d=https://avatars.phantauth.net/ai/female/BeXDnkey.jpg',
                    preferred_username: 'ahudson',
                    profile: 'https://phantauth.net/user/ariana.riley.hudson/profile',
                    sub: 'ariana.riley.hudson',
                    uid: '1sKcrGacQtY',
                    updated_at: 1542585600,
                    webmail:
                      'https://www.mailinator.com/v3/?zone=public&query=ariana.riley.hudson.VJ2ABXA',
                    website: 'https://phantauth.net',
                    zoneinfo: 'America/Chicago',
                  },
                  {
                    '@id': 'https://phantauth.net/user/madeline.randall',
                    address: {
                      country: 'UnitedKingdom',
                      formatted: '140 Atkins Avenue APT 126\nSan Francisco 48571',
                      locality: 'San Francisco',
                      postal_code: '48571',
                      street_address: '140 Atkins Avenue APT 126',
                    },
                    birthdate: '1966-08-28',
                    email: 'madeline.randall.P545AFI@mailinator.com',
                    email_verified: true,
                    family_name: 'Randall',
                    gender: 'female',
                    given_name: 'Madeline',
                    locale: 'en_GB',
                    me: 'https://phantauth.net/~madeline.randall',
                    name: 'Madeline Randall',
                    nickname: 'Madeline',
                    password: 'xi89SZWX',
                    phone_number: '747-136-9890',
                    phone_number_verified: true,
                    picture:
                      'https://www.gravatar.com/avatar/eb3bac3d1654c56efbb93645770e5a60?s=256&d=https://avatars.phantauth.net/ai/female/pmbkErez.jpg',
                    preferred_username: 'mrandall',
                    profile: 'https://phantauth.net/user/madeline.randall/profile',
                    sub: 'madeline.randall',
                    uid: '5xjXrNaK8eU',
                    updated_at: 1535414400,
                    webmail:
                      'https://www.mailinator.com/v3/?zone=public&query=madeline.randall.P545AFI',
                    website: 'https://phantauth.net',
                    zoneinfo: 'Europe/London',
                  },
                  {
                    '@id': 'https://phantauth.net/user/alexa.brooklyn.rollins',
                    address: {
                      country: 'Canada',
                      formatted: '104 Herzi Street APT 39\nWashington 22412',
                      locality: 'Washington',
                      postal_code: '22412',
                      street_address: '104 Herzi Street APT 39',
                    },
                    birthdate: '1920-02-29',
                    email: 'alexa.brooklyn.rollins.WHW7KNY@mailinator.com',
                    email_verified: false,
                    family_name: 'Rollins',
                    gender: 'female',
                    given_name: 'Alexa',
                    locale: 'fr_CA',
                    me: 'https://phantauth.net/~alexa.brooklyn.rollins',
                    middle_name: 'Brooklyn',
                    name: 'Alexa Rollins',
                    nickname: 'Alexa',
                    password: '8h3tEVhM',
                    phone_number: '335-295-2273',
                    phone_number_verified: true,
                    picture:
                      'https://www.gravatar.com/avatar/404e4bf6b700625b670d84336fa38d52?s=256&d=https://avatars.phantauth.net/ai/female/pmbkyvez.jpg',
                    preferred_username: 'arollins',
                    profile: 'https://phantauth.net/user/alexa.brooklyn.rollins/profile',
                    sub: 'alexa.brooklyn.rollins',
                    uid: 'ji7mQ76imjY',
                    updated_at: 1519776000,
                    webmail:
                      'https://www.mailinator.com/v3/?zone=public&query=alexa.brooklyn.rollins.WHW7KNY',
                    website: 'https://phantauth.net',
                    zoneinfo: 'Canada/Central',
                  },
                  {
                    '@id': 'https://phantauth.net/user/cameron.barnes',
                    address: {
                      country: 'Australia',
                      formatted: '139 Aster Court\nNew York 20333',
                      locality: 'New York',
                      postal_code: '20333',
                      street_address: '139 Aster Court',
                    },
                    birthdate: '1960-07-17',
                    email: 'cameron.barnes.UW4JUXI@mailinator.com',
                    email_verified: false,
                    family_name: 'Barnes',
                    gender: 'male',
                    given_name: 'Cameron',
                    locale: 'en_AU',
                    me: 'https://phantauth.net/~cameron.barnes',
                    name: 'Cameron Barnes',
                    nickname: 'Cameron',
                    password: 'OL4y4cpb',
                    phone_number: '449-465-925',
                    phone_number_verified: true,
                    picture:
                      'https://www.gravatar.com/avatar/6cc04628ef7fb47eaa9a262b56b61e7d?s=256&d=https://avatars.phantauth.net/ai/male/wdL96rej.jpg',
                    preferred_username: 'cbarnes',
                    profile: 'https://phantauth.net/user/cameron.barnes/profile',
                    sub: 'cameron.barnes',
                    uid: 'N4DJJyHMhUg',
                    updated_at: 1531785600,
                    webmail:
                      'https://www.mailinator.com/v3/?zone=public&query=cameron.barnes.UW4JUXI',
                    website: 'https://phantauth.net',
                    zoneinfo: 'Australia/Sydney',
                  },
                  {
                    '@id': 'https://phantauth.net/user/kayden.abbott',
                    address: {
                      country: 'Canada',
                      formatted: '110 Aster Court APT 299\nMiami 16321',
                      locality: 'Miami',
                      postal_code: '16321',
                      street_address: '110 Aster Court APT 299',
                    },
                    birthdate: '2016-02-28',
                    email: 'kayden.abbott.6VBRMHI@mailinator.com',
                    email_verified: true,
                    family_name: 'Abbott',
                    gender: 'unknown',
                    given_name: 'Kayden',
                    locale: 'fr_CA',
                    me: 'https://phantauth.net/~kayden.abbott',
                    name: 'Kayden Abbott',
                    nickname: 'Kayden',
                    password: 'RUEJG2Vj',
                    phone_number: '988-622-6683',
                    phone_number_verified: false,
                    picture:
                      'https://www.gravatar.com/avatar/0e72d45f96c44213f80f10b593ccba13?s=256&d=https://avatars.phantauth.net/ai/unknown/X7axLPay.jpg',
                    preferred_username: 'kabbott',
                    profile: 'https://phantauth.net/user/kayden.abbott/profile',
                    sub: 'kayden.abbott',
                    uid: 'VHNoCwU/+LE',
                    updated_at: 1519776000,
                    webmail:
                      'https://www.mailinator.com/v3/?zone=public&query=kayden.abbott.6VBRMHI',
                    website: 'https://phantauth.net',
                    zoneinfo: 'Canada/Central',
                  },
                ],
                name: 'Dream Team',
                profile: 'https://phantauth.net/team/dream.team/profile',
                sub: 'dream.team',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getTenantTenantnameRoute = createRoute({
  method: 'get',
  path: '/tenant/{tenantname}',
  tags: ['Tenant'],
  summary: 'Get a Tenant',
  description:
    "This endpoint allows you to get the data of a given PhantAuth tenant. To use the PhantAuth services, you don't need this endpoint.\nIt is, therefore, mainly used for debug/diagnostic purposes in tenant customization.\n\nTenantname is the name of the full DNS domain of the tenant you get.\nIn the case of an official and shared tenant (phantauth.net and phantauth.cf DNS domains), the DNS domain can be omitted (e.g. *default* or *faker*).",
  request: {
    params: z.object({
      tenantname: z
        .string()
        .openapi({
          param: {
            description: 'The tenant ID integrated in the `sub` property.',
            in: 'path',
            name: 'tenantname',
            required: true,
            schema: { type: 'string' },
          },
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
              '@id': z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the tenant's JSON representation." }),
              about: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description.',
                }),
              attribution: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links.',
                }),
              depot: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.\nThe URI template receives the type of the object to be generated (user, team) in the `kind` parameter.\n\nThe first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.\nIn the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).",
                }),
              depots: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'A list of resource types supported by the external CSV set in `depot`.',
                }),
              domain: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'True in the case of a domain tenant collecting several tenants, otherwise false.',
                }),
              factories: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description:
                    'A list of resource types supported by the external generator set in `factory`.',
                }),
              factory: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.\nThe URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.',
                }),
              favicon: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages.",
                }),
              issuer: z
                .string()
                .openapi({
                  description:
                    'The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).\nAs a webpage, it contains information on the use if the given tenant.',
                }),
              logo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants.",
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages.",
                }),
              script: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages.',
                }),
              sheet: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.\nIn the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).",
                }),
              sub: z
                .string()
                .openapi({
                  description:
                    'The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).',
                }),
              subtenant: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'True in the case of a tenant referred to in a domain tenant, otherwise false.',
                }),
              summary: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text.",
                }),
              template: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.\nThe URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.',
                }),
              theme: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The URL of the CSS style sheet used for the tenant's webpages.\nThe default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.",
                }),
              userinfo: z.string().exactOptional(),
              website: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property.",
                }),
            })
            .openapi({ required: ['sub', 'issuer'] }),
          examples: {
            response: {
              value: {
                '@id': 'https://phantauth.net/_faker/tenant/faker',
                domain: false,
                factories: ['team', 'user'],
                factory: 'https://faker.phantauth.net/api{/kind,name}',
                flags: 'small',
                issuer: 'https://phantauth.net/_faker',
                logo: 'https://phantauth-faker.now.sh/faker-logo.svg',
                name: 'PhantAuth Faker',
                sub: 'faker',
                subtenant: false,
                template: 'https://default.phantauth.net{/resource}',
                theme:
                  'https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/united/bootstrap.min.css',
                website: 'https://phantauth.net/_faker',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postUserRoute = createRoute({
  method: 'post',
  path: '/user',
  tags: ['User'],
  summary: 'Create a User Selfie',
  description:
    'To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.\nLater, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.\nBy the use of a selfie token, you can use your own user objects during the authentication process.\n\nIts use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              '@id': z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the user's JSON representation." }),
              address: z
                .object({
                  country: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Country name component.' }),
                  formatted: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.',
                    }),
                  locality: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'City or locality component.' }),
                  postal_code: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Zip code or postal code component.' }),
                  region: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'State, province, prefecture, or region component.' }),
                  street_address: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.',
                    }),
                })
                .exactOptional()
                .openapi({ description: "The user's preferred postal address.", required: [] }),
              birthdate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format.",
                }),
              email: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's preferred email address." }),
              email_verified: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "True if the user's e-mail address has been verified; otherwise false.",
                }),
              family_name: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's surname(s) or last name(s)." }),
              gender: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The enduser's gender. Possible values are: female, male, and unknown.",
                }),
              given_name: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's given name(s) or first name(s)." }),
              locale: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash.",
                }),
              me: z
                .string()
                .exactOptional()
                .openapi({ description: "The simplified URL of the user's profile page." }),
              middle_name: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's middle name(s)." }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences.",
                }),
              nickname: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A casual name of the User that may or may not be the same as the given_name.',
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's generated password." }),
              phone_number: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's preferred telephone number." }),
              phone_number_verified: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "True if the enduser's phone number has been verified; otherwise false.",
                }),
              picture: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the user's profile picture." }),
              preferred_username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A shorthand name by which the user wishes to be referred to at the Relying Party.',
                }),
              profile: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the user's profile page." }),
              sub: z.string().openapi({ description: 'Subject - User identifier at the issuer.' }),
              uid: z
                .string()
                .exactOptional()
                .openapi({
                  description: "The user's simplified, shortened identifier at the Issuer.",
                }),
              updated_at: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.",
                }),
              webmail: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of user's mailbox in a webmail application." }),
              website: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the user's webpage or blog." }),
              zoneinfo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles.",
                }),
            })
            .openapi({
              example: {
                address: {
                  country: 'USA',
                  formatted: '160 Washington Walk\nSan Francisco 98239',
                  locality: 'San Francisco',
                  postal_code: '98239',
                  street_address: '160 Washington Walk',
                },
                birthdate: '1950-02-10',
                email: 'john.smith.XPKEFHI@mailinator.com',
                email_verified: false,
                family_name: 'Smith',
                gender: 'male',
                given_name: 'John',
                locale: 'en_US',
                name: 'John Smith',
                nickname: 'John',
                password: 'Opha8TV2',
                phone_number: '747-178-7374',
                phone_number_verified: true,
                picture:
                  'https://www.gravatar.com/avatar/54c27dd1891df67163ef53616549933f?s=256&d=https://avatars.phantauth.net/ai/male/Vyb8Yrdv.jpg',
                preferred_username: 'jsmith',
                sub: 'john.smith',
                updated_at: 1518220800,
                zoneinfo: 'America/Chicago',
              },
              required: ['sub'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getUserUsernameRoute = createRoute({
  method: 'get',
  path: '/user/{username}',
  tags: ['User'],
  summary: 'Get a User',
  description:
    'Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.\nIn the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.\nIn lack of a user name, all calls generate a different user object to the randomly generated user name.\n\nBy providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.\n\nIf the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.\nIn this case, these cahracters play the role of separator between the units of the full name (family name, given name).`\n\nThe result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.\nThe members of a team are users randomly generated from the team name.',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username or email used for generation purposes.',
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
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              '@id': z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the user's JSON representation." }),
              address: z
                .object({
                  country: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Country name component.' }),
                  formatted: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.',
                    }),
                  locality: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'City or locality component.' }),
                  postal_code: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Zip code or postal code component.' }),
                  region: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'State, province, prefecture, or region component.' }),
                  street_address: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.',
                    }),
                })
                .exactOptional()
                .openapi({ description: "The user's preferred postal address.", required: [] }),
              birthdate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format.",
                }),
              email: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's preferred email address." }),
              email_verified: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "True if the user's e-mail address has been verified; otherwise false.",
                }),
              family_name: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's surname(s) or last name(s)." }),
              gender: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The enduser's gender. Possible values are: female, male, and unknown.",
                }),
              given_name: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's given name(s) or first name(s)." }),
              locale: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash.",
                }),
              me: z
                .string()
                .exactOptional()
                .openapi({ description: "The simplified URL of the user's profile page." }),
              middle_name: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's middle name(s)." }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences.",
                }),
              nickname: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A casual name of the User that may or may not be the same as the given_name.',
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's generated password." }),
              phone_number: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's preferred telephone number." }),
              phone_number_verified: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "True if the enduser's phone number has been verified; otherwise false.",
                }),
              picture: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the user's profile picture." }),
              preferred_username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A shorthand name by which the user wishes to be referred to at the Relying Party.',
                }),
              profile: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the user's profile page." }),
              sub: z.string().openapi({ description: 'Subject - User identifier at the issuer.' }),
              uid: z
                .string()
                .exactOptional()
                .openapi({
                  description: "The user's simplified, shortened identifier at the Issuer.",
                }),
              updated_at: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    "The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.",
                }),
              webmail: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of user's mailbox in a webmail application." }),
              website: z
                .string()
                .exactOptional()
                .openapi({ description: "The URL of the user's webpage or blog." }),
              zoneinfo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles.",
                }),
            })
            .openapi({ required: ['sub'] }),
          examples: {
            response: {
              value: {
                '@id': 'https://phantauth.net/user/john.smith',
                address: {
                  country: 'USA',
                  formatted: '160 Washington Walk\nSan Francisco 98239',
                  locality: 'San Francisco',
                  postal_code: '98239',
                  street_address: '160 Washington Walk',
                },
                birthdate: '1950-02-10',
                email: 'john.smith.XPKEFHI@mailinator.com',
                email_verified: false,
                family_name: 'Smith',
                gender: 'male',
                given_name: 'John',
                locale: 'en_US',
                me: 'https://phantauth.net/~john.smith',
                name: 'John Smith',
                nickname: 'John',
                password: 'Opha8TV2',
                phone_number: '747-178-7374',
                phone_number_verified: true,
                picture:
                  'https://www.gravatar.com/avatar/54c27dd1891df67163ef53616549933f?s=256&d=https://avatars.phantauth.net/ai/male/Vyb8Yrdv.jpg',
                preferred_username: 'jsmith',
                profile: 'https://phantauth.net/user/john.smith/profile',
                sub: 'john.smith',
                uid: 'tf+gMsdUWj0',
                updated_at: 1518220800,
                webmail: 'https://www.mailinator.com/v3/?zone=public&query=john.smith.XPKEFHI',
                website: 'https://phantauth.net',
                zoneinfo: 'America/Chicago',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getUserUsernameTokenKindRoute = createRoute({
  method: 'get',
  path: '/user/{username}/token/{kind}',
  tags: ['User'],
  summary: 'Get a User Token',
  description:
    'It is used to generate OpenID Connect tokens as path parameters to a user of a given name.\n\nThis method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.\nGenerating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'A username or email.',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
      kind: z
        .enum(["'access'", "'refresh'", "'authorization'", "'id'", "'selfie'", "'plain'"])
        .openapi({
          param: {
            description: 'Token type',
            in: 'path',
            name: 'kind',
            required: true,
            schema: {
              enum: ["'access'", "'refresh'", "'authorization'", "'id'", "'selfie'", "'plain'"],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'OpenID Connect scope',
            in: 'query',
            name: 'scope',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})
