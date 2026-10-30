import { createRoute, z } from '@hono/zod-openapi'

const VerifiableCredentialProofSchema = z
  .object({ jwt: z.string().exactOptional(), proof_type: z.string().exactOptional() })
  .openapi({
    title: 'VerifiableCredentialProof contains the proof of a verifiable credential.',
    required: [],
  })
  .openapi('VerifiableCredentialProof')

const CreateVerifiableCredentialRequestBodySchema = z
  .object({
    format: z.string().exactOptional(),
    proof: VerifiableCredentialProofSchema.exactOptional(),
    types: z.array(z.string()).exactOptional(),
  })
  .openapi({
    title:
      'CreateVerifiableCredentialRequestBody contains the request body to request a verifiable credential.',
    required: [],
  })
  .openapi('CreateVerifiableCredentialRequestBody')

const DefaultErrorSchema = z
  .any()
  .openapi({
    description:
      'From https://go.dev/wiki/CodeReviewComments#receiver-type:\n> Can function or methods, either concurrently or when called from this method, be mutating the receiver? A value type creates a copy of the receiver when the method is invoked, so outside updates will not be applied to this receiver. If changes must be visible in the original receiver, the receiver must be a pointer.\n> If the receiver is a struct, array or slice and any of its elements is a pointer to something that might be mutating,\n> prefer a pointer receiver, as it will make the intention clearer to the reader.\n> Don’t mix receiver types. Choose either pointers or struct types for all available methods.',
    title:
      'DefaultError is not safe to shallow copy because it contains\nfields which are not value types, e.g. maps.\nA shallow copy would inadvertently share these underlying fields,\nleading to incorrect behavior and data races in a concurrent context.\nConsequently, all methods take the type by pointer and not by value.',
  })
  .openapi('DefaultError')

const NullDurationSchema = z
  .string()
  .regex(/^([0-9]+([.][0-9]+)?(ns|us|µs|ms|s|m|h))+$/)
  .openapi({
    description: 'Specify a time duration in milliseconds, seconds, minutes, hours.',
    title: 'Time duration',
  })
  .openapi('NullDuration')

const JsonWebKeySchema = z
  .object({
    alg: z
      .string()
      .openapi({
        description:
          'The "alg" (algorithm) parameter identifies the algorithm intended for\nuse with the key.  The values used should either be registered in the\nIANA "JSON Web Signature and Encryption Algorithms" registry\nestablished by [JWA] or be a value that contains a Collision-\nResistant Name.',
        example: 'RS256',
      }),
    crv: z.string().exactOptional().openapi({ example: 'P-256' }),
    d: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'T_N8I-6He3M8a7X1vWt6TGIx4xB_GP3Mb4SsZSA4v-orvJzzRiQhLlRR81naWYxfQAYt5isDI6_C2L9bdWo4FFPjGQFvNoRX-_sBJyBI_rl-TBgsZYoUlAj3J92WmY2inbA-PwyJfsaIIDceYBC-eX-xiCu6qMqkZi3MwQAFL6bMdPEM0z4JBcwFT3VdiWAIRUuACWQwrXMq672x7fMuaIaHi7XDGgt1ith23CLfaREmJku9PQcchbt_uEY-hqrFY6ntTtS4paWWQj86xLL94S-Tf6v6xkL918PfLSOTq6XCzxvlFwzBJqApnAhbwqLjpPhgUG04EDRrqrSBc5Y1BLevn6Ip5h1AhessBp3wLkQgz_roeckt-ybvzKTjESMuagnpqLvOT7Y9veIug2MwPJZI2VjczRc1vzMs25XrFQ8DpUy-bNdp89TmvAXwctUMiJdgHloJw23Cv03gIUAkDnsTqZmkpbIf-crpgNKFmQP_EDKoe8p_PXZZgfbRri3NoEVGP7Mk6yEu8LjJhClhZaBNjuWw2-KlBfOA3g79mhfBnkInee5KO9mGR50qPk1V-MorUYNTFMZIm0kFE6eYVWFBwJHLKYhHU34DoiK1VP-svZpC2uAMFNA_UJEwM9CQ2b8qe4-5e9aywMvwcuArRkAB5mBIfOaOJao3mfukKAE',
      }),
    dp: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'G4sPXkc6Ya9y8oJW9_ILj4xuppu0lzi_H7VTkS8xj5SdX3coE0oimYwxIi2emTAue0UOa5dpgFGyBJ4c8tQ2VF402XRugKDTP8akYhFo5tAA77Qe_NmtuYZc3C3m3I24G2GvR5sSDxUyAN2zq8Lfn9EUms6rY3Ob8YeiKkTiBj0',
      }),
    dq: z
      .string()
      .exactOptional()
      .openapi({
        example:
          's9lAH9fggBsoFR8Oac2R_E2gw282rT2kGOAhvIllETE1efrA6huUUvMfBcMpn8lqeW6vzznYY5SSQF7pMdC_agI3nG8Ibp1BUb0JUiraRNqUfLhcQb_d9GF4Dh7e74WbRsobRonujTYN1xCaP6TO61jvWrX-L18txXw494Q_cgk',
      }),
    e: z.string().exactOptional().openapi({ example: 'AQAB' }),
    k: z.string().exactOptional().openapi({ example: 'GawgguFyGrWKav7AX4VKUg' }),
    kid: z
      .string()
      .openapi({
        description:
          'The "kid" (key ID) parameter is used to match a specific key.  This\nis used, for instance, to choose among a set of keys within a JWK Set\nduring key rollover.  The structure of the "kid" value is\nunspecified.  When "kid" values are used within a JWK Set, different\nkeys within the JWK Set SHOULD use distinct "kid" values.  (One\nexample in which different keys might use the same "kid" value is if\nthey have different "kty" (key type) values but are considered to be\nequivalent alternatives by the application using them.)  The "kid"\nvalue is a case-sensitive string.',
        example: '1603dfe0af8f4596',
      }),
    kty: z
      .string()
      .openapi({
        description:
          'The "kty" (key type) parameter identifies the cryptographic algorithm\nfamily used with the key, such as "RSA" or "EC". "kty" values should\neither be registered in the IANA "JSON Web Key Types" registry\nestablished by [JWA] or be a value that contains a Collision-\nResistant Name.  The "kty" value is a case-sensitive string.',
        example: 'RSA',
      }),
    n: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'vTqrxUyQPl_20aqf5kXHwDZrel-KovIp8s7ewJod2EXHl8tWlRB3_Rem34KwBfqlKQGp1nqah-51H4Jzruqe0cFP58hPEIt6WqrvnmJCXxnNuIB53iX_uUUXXHDHBeaPCSRoNJzNysjoJ30TIUsKBiirhBa7f235PXbKiHducLevV6PcKxJ5cY8zO286qJLBWSPm-OIevwqsIsSIH44Qtm9sioFikhkbLwoqwWORGAY0nl6XvVOlhADdLjBSqSAeT1FPuCDCnXwzCDR8N9IFB_IjdStFkC-rVt2K5BYfPd0c3yFp_vHR15eRd0zJ8XQ7woBC8Vnsac6Et1pKS59pX6256DPWu8UDdEOolKAPgcd_g2NpA76cAaF_jcT80j9KrEzw8Tv0nJBGesuCjPNjGs_KzdkWTUXt23Hn9QJsdc1MZuaW0iqXBepHYfYoqNelzVte117t4BwVp0kUM6we0IqyXClaZgOI8S-WDBw2_Ovdm8e5NmhYAblEVoygcX8Y46oH6bKiaCQfKCFDMcRgChme7AoE1yZZYsPbaG_3IjPrC4LBMHQw8rM9dWjJ8ImjicvZ1pAm0dx-KHCP3y5PVKrxBDf1zSOsBRkOSjB8TPODnJMz6-jd5hTtZxpZPwPoIdCanTZ3ZD6uRBpTmDwtpRGm63UQs1m5FWPwb0T2IF0',
      }),
    p: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '6NbkXwDWUhi-eR55Cgbf27FkQDDWIamOaDr0rj1q0f1fFEz1W5A_09YvG09Fiv1AO2-D8Rl8gS1Vkz2i0zCSqnyy8A025XOcRviOMK7nIxE4OH_PEsko8dtIrb3TmE2hUXvCkmzw9EsTF1LQBOGC6iusLTXepIC1x9ukCKFZQvdgtEObQ5kzd9Nhq-cdqmSeMVLoxPLd1blviVT9Vm8-y12CtYpeJHOaIDtVPLlBhJiBoPKWg3vxSm4XxIliNOefqegIlsmTIa3MpS6WWlCK3yHhat0Q-rRxDxdyiVdG_wzJvp0Iw_2wms7pe-PgNPYvUWH9JphWP5K38YqEBiJFXQ',
      }),
    q: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '0A1FmpOWR91_RAWpqreWSavNaZb9nXeKiBo0DQGBz32DbqKqQ8S4aBJmbRhJcctjCLjain-ivut477tAUMmzJwVJDDq2MZFwC9Q-4VYZmFU4HJityQuSzHYe64RjN-E_NQ02TWhG3QGW6roq6c57c99rrUsETwJJiwS8M5p15Miuz53DaOjv-uqqFAFfywN5WkxHbraBcjHtMiQuyQbQqkCFh-oanHkwYNeytsNhTu2mQmwR5DR2roZ2nPiFjC6nsdk-A7E3S3wMzYYFw7jvbWWoYWo9vB40_MY2Y0FYQSqcDzcBIcq_0tnnasf3VW4Fdx6m80RzOb2Fsnln7vKXAQ',
      }),
    qi: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'GyM_p6JrXySiz1toFgKbWV-JdI3jQ4ypu9rbMWx3rQJBfmt0FoYzgUIZEVFEcOqwemRN81zoDAaa-Bk0KWNGDjJHZDdDmFhW3AN7lI-puxk_mHZGJ11rxyR8O55XLSe3SPmRfKwZI6yU24ZxvQKFYItdldUKGzO6Ia6zTKhAVRU',
      }),
    use: z
      .string()
      .openapi({
        description:
          'Use ("public key use") identifies the intended use of\nthe public key. The "use" parameter is employed to indicate whether\na public key is used for encrypting data or verifying the signature\non data. Values are commonly "sig" (signature) or "enc" (encryption).',
        example: 'sig',
      }),
    x: z
      .string()
      .exactOptional()
      .openapi({ example: 'f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU' }),
    x5c: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The "x5c" (X.509 certificate chain) parameter contains a chain of one\nor more PKIX certificates [RFC5280].  The certificate chain is\nrepresented as a JSON array of certificate value strings.  Each\nstring in the array is a base64-encoded (Section 4 of [RFC4648] --\nnot base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.\nThe PKIX certificate containing the key value MUST be the first\ncertificate.',
      }),
    y: z
      .string()
      .exactOptional()
      .openapi({ example: 'x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0' }),
  })
  .openapi({ required: ['use', 'kty', 'kid', 'alg'] })
  .openapi('JsonWebKey')

const JsonWebKeySetSchema = z
  .object({
    keys: z
      .array(JsonWebKeySchema)
      .exactOptional()
      .openapi({
        description:
          'List of JSON Web Keys\n\nThe value of the "keys" parameter is an array of JSON Web Key (JWK)\nvalues. By default, the order of the JWK values within the array does\nnot imply an order of preference among them, although applications\nof JWK Sets can choose to assign a meaning to the order for their\npurposes, if desired.',
      }),
  })
  .openapi({ description: 'JSON Web Key Set', required: [] })
  .openapi('JsonWebKeySet')

const JSONRawMessageSchema = z
  .any()
  .openapi({
    title:
      'JSONRawMessage represents a json.RawMessage that works well with JSON, SQL, and Swagger.',
  })
  .openapi('JSONRawMessage')

const OAuth2ClientSchema = z
  .object({
    access_token_strategy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Access Token Strategy\n\nAccessTokenStrategy is the strategy used to generate access tokens.\nValid options are `jwt` and `opaque`. `jwt` is a bad idea, see https://www.ory.com/docs/oauth2-oidc/jwt-access-token\nSetting the strategy here overrides the global setting in `strategies.access_token`.',
      }),
    allowed_cors_origins: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "OAuth 2.0 Client Allowed CORS Origins\n\nOne or more URLs (scheme://host[:port]) which are allowed to make CORS requests\nto the /oauth/token endpoint. If this array is empty, the server's CORS origin configuration (`CORS_ALLOWED_ORIGINS`)\nwill be used instead. If this array is set, the allowed origins are appended to the server's CORS origin configuration.\nBe aware that environment variable `CORS_ENABLED` MUST be set to `true` for this to work.",
      }),
    audience: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Audience\n\nAn allow-list defining the audiences this client is allowed to request tokens for. An audience limits\nthe applicability of an OAuth 2.0 Access Token to, for example, certain API endpoints. The value is a list\nof URLs. URLs MUST NOT contain whitespaces.',
        example: 'https://mydomain.com/api/users, https://mydomain.com/api/posts',
      }),
    authorization_code_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    authorization_code_grant_id_token_lifespan: NullDurationSchema.exactOptional(),
    authorization_code_grant_refresh_token_lifespan: NullDurationSchema.exactOptional(),
    backchannel_logout_session_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Back-Channel Logout Session Required\n\nBoolean value specifying whether the RP requires that a sid (session ID) Claim be included in the Logout\nToken to identify the RP session with the OP when the backchannel_logout_uri is used.\nIf omitted, the default value is false.',
      }),
    backchannel_logout_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Back-Channel Logout URI\n\nRP URL that will cause the RP to log itself out when sent a Logout Token by the OP.',
      }),
    client_credentials_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client ID\n\nThe ID is immutable. If no ID is provided, a UUID4 will be generated.',
      }),
    client_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Name\n\nThe human-readable name of the client to be presented to the\nend-user during authorization.',
      }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Secret\n\nThe secret will be included in the create request as cleartext, and then\nnever again. The secret is kept in hashed format and is not recoverable once lost.',
      }),
    client_secret_expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'OAuth 2.0 Client Secret Expires At\n\nThe field is currently not supported and its value is always 0.',
      }),
    client_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client URI\n\nClientURI is a URL string of a web page providing information about the client.\nIf present, the server SHOULD display this URL to the end-user in\na clickable fashion.',
      }),
    contacts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Contact\n\nAn array of strings representing ways to contact people responsible\nfor this client, typically email addresses.',
        example: 'help@example.org',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "OAuth 2.0 Client Creation Date\n\nCreatedAt returns the timestamp of the client's creation.",
      }),
    device_authorization_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    device_authorization_grant_id_token_lifespan: NullDurationSchema.exactOptional(),
    device_authorization_grant_refresh_token_lifespan: NullDurationSchema.exactOptional(),
    frontchannel_logout_session_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Front-Channel Logout Session Required\n\nBoolean value specifying whether the RP requires that iss (issuer) and sid (session ID) query parameters be\nincluded to identify the RP session with the OP when the frontchannel_logout_uri is used.\nIf omitted, the default value is false.',
      }),
    frontchannel_logout_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Front-Channel Logout URI\n\nRP URL that will cause the RP to log itself out when rendered in an iframe by the OP. An iss (issuer) query\nparameter and a sid (session ID) query parameter MAY be included by the OP to enable the RP to validate the\nrequest and to determine which of the potentially multiple sessions is to be logged out; if either is\nincluded, both MUST be.',
      }),
    grant_types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Grant Types\n\nAn array of OAuth 2.0 grant types the client is allowed to use. Can be one\nof:\n\nClient Credentials Grant: `client_credentials`\nAuthorization Code Grant: `authorization_code`\nOpenID Connect Implicit Grant (deprecated!): `implicit`\nRefresh Token Grant: `refresh_token`\nOAuth 2.0 Token Exchange: `urn:ietf:params:oauth:grant-type:jwt-bearer`\nOAuth 2.0 Device Code Grant: `urn:ietf:params:oauth:grant-type:device_code`',
      }),
    implicit_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    implicit_grant_id_token_lifespan: NullDurationSchema.exactOptional(),
    jwks: JsonWebKeySetSchema.exactOptional(),
    jwks_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "OAuth 2.0 Client JSON Web Key Set URL\n\nURL for the Client's JSON Web Key Set [JWK] document. If the Client signs requests to the Server, it contains\nthe signing key(s) the Server uses to validate signatures from the Client. The JWK Set MAY also contain the\nClient's encryption keys(s), which are used by the Server to encrypt responses to the Client. When both signing\nand encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced\nJWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both\nsignatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used\nto provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST\nmatch those in the certificate.",
      }),
    jwt_bearer_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    logo_uri: z
      .string()
      .exactOptional()
      .openapi({
        description: "OAuth 2.0 Client Logo URI\n\nA URL string referencing the client's logo.",
      }),
    metadata: JSONRawMessageSchema.exactOptional(),
    owner: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Owner\n\nOwner is a string identifying the owner of the OAuth 2.0 Client.',
      }),
    policy_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Policy URI\n\nPolicyURI is a URL string that points to a human-readable privacy policy document\nthat describes how the deployment organization collects, uses,\nretains, and discloses personal data.',
      }),
    post_logout_redirect_uris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Allowed Post-Redirect Logout URIs\n\nArray of URLs supplied by the RP to which it MAY request that the End-User's User Agent be redirected using the\npost_logout_redirect_uri parameter after a logout has been performed.",
      }),
    redirect_uris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Redirect URIs\n\nRedirectURIs is an array of allowed redirect urls for the client.',
        example: 'http://mydomain/oauth/callback',
      }),
    refresh_token_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    refresh_token_grant_id_token_lifespan: NullDurationSchema.exactOptional(),
    refresh_token_grant_refresh_token_lifespan: NullDurationSchema.exactOptional(),
    registration_access_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Dynamic Client Registration Access Token\n\nRegistrationAccessToken can be used to update, get, or delete the OAuth2 Client. It is sent when creating a client\nusing Dynamic Client Registration.',
      }),
    registration_client_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Dynamic Client Registration URL\n\nRegistrationClientURI is the URL used to update, get, or delete the OAuth2 Client.',
      }),
    request_object_signing_alg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Request Object Signing Algorithm\n\nJWS [JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. All Request Objects\nfrom this Client MUST be rejected, if not signed with this algorithm.',
      }),
    request_uris: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Request URIs\n\nArray of request_uri values that are pre-registered by the RP for use at the OP. Servers MAY cache the\ncontents of the files referenced by these URIs and not retrieve them at the time they are used in a request.\nOPs can require that request_uri values used be pre-registered with the require_request_uri_registration\ndiscovery parameter.',
      }),
    response_types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Response Types\n\nAn array of the OAuth 2.0 response type strings that the client can\nuse at the authorization endpoint. Possible values are:\n\n`code` for Authorization Code Grant.\n`token` or `id_token` or `token id_token` for OpenID Connect Implicit Grant (not recommended).\n`code token` or `code id_token` or `code token id_token` for OpenID Connect Hybrid Flow (not recommended).',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Scope\n\nScope is a string containing a space-separated list of scope values (as\ndescribed in Section 3.3 of OAuth 2.0 [RFC6749]) that the client\ncan use when requesting access tokens.',
        example: 'scope1 scope-2 scope.3 scope:4',
      }),
    sector_identifier_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Sector Identifier URI\n\nURL using the https scheme to be used in calculating Pseudonymous Identifiers by the OP. The URL references a\nfile with a single JSON array of redirect_uri values.',
      }),
    skip_consent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'SkipConsent skips the consent screen for this client. This field can only\nbe set from the admin API.',
      }),
    skip_logout_consent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'SkipLogoutConsent skips the logout consent screen for this client. This field can only\nbe set from the admin API.',
      }),
    subject_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Subject Type\n\nThe `subject_types_supported` Discovery parameter contains a\nlist of the supported subject_type values for this server. Valid types include `pairwise` and `public`.',
      }),
    token_endpoint_auth_method: z
      .string()
      .default('client_secret_basic')
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Token Endpoint Authentication Method\n\nRequested Client Authentication method for the Token Endpoint. The options are:\n\n`client_secret_basic`: (default) Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` encoded in the HTTP Authorization header.\n`client_secret_post`: Send `client_id` and `client_secret` as `application/x-www-form-urlencoded` in the HTTP body.\n`private_key_jwt`: Use JSON Web Tokens to authenticate the client.\n`none`: Used for public clients (native apps, mobile apps) which can not have secrets.',
      }),
    token_endpoint_auth_signing_alg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Token Endpoint Signing Algorithm\n\nRequested Client Authentication signing algorithm for the Token Endpoint.',
      }),
    tos_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Terms of Service URI\n\nA URL string pointing to a human-readable terms of service\ndocument for the client that describes a contractual relationship\nbetween the end-user and the client that the end-user accepts when\nauthorizing the client.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Client Last Update Date\n\nUpdatedAt returns the timestamp of the last update.',
      }),
    userinfo_signed_response_alg: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Request Userinfo Signed Response Algorithm\n\nJWS alg algorithm [JWA] REQUIRED for signing UserInfo Responses. If this is specified, the response will be JWT\n[JWT] serialized, and signed using JWS. The default, if omitted, is for the UserInfo Response to return the Claims\nas a UTF-8 encoded JSON object using the application/json content-type.',
      }),
  })
  .openapi({
    description:
      'OAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are\ngenerated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.',
    title: 'OAuth 2.0 Client',
    required: [],
  })
  .openapi('OAuth2Client')

const NullTime2Schema = z.iso
  .datetime({ offset: true })
  .openapi({ title: 'NullTime implements sql.NullTime functionality.' })
  .openapi('NullTime2')

const DeviceUserAuthRequestSchema = z
  .object({
    challenge: z
      .string()
      .openapi({
        description:
          'ID is the identifier ("device challenge") of the device grant request. It is used to\nidentify the session.',
      }),
    client: OAuth2ClientSchema.exactOptional(),
    handled_at: NullTime2Schema.exactOptional(),
    request_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'RequestURL is the original Device Authorization URL requested.' }),
    requested_access_token_audience: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'RequestedAudience contains the access token audience as requested by the OAuth 2.0 Client.',
      }),
    requested_scope: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.',
      }),
  })
  .openapi({
    required: ['challenge'],
    title: 'Contains information on an ongoing device grant request.',
  })
  .openapi('DeviceUserAuthRequest')

const NullBoolSchema = z.boolean().nullable().openapi('NullBool')

const NullIntSchema = z.int().nullable().openapi('NullInt')

const NullStringSchema = z.string().nullable().openapi('NullString')

const NullTimeSchema = z.iso.datetime({ offset: true }).nullable().openapi('NullTime')

const NullUUIDSchema = z.string().nullable().openapi('NullUUID')

const RFC6749ErrorJsonSchema = z
  .object({
    error: z.string().exactOptional(),
    error_debug: z.string().exactOptional(),
    error_description: z.string().exactOptional(),
    error_hint: z.string().exactOptional(),
    status_code: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    title: 'RFC6749ErrorJson is a helper struct for JSON encoding/decoding of RFC6749Error.',
    required: [],
  })
  .openapi('RFC6749ErrorJson')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const UUIDSchema = z.string().openapi('UUID')

const AcceptDeviceUserCodeRequestSchema = z
  .object({ user_code: z.string().exactOptional() })
  .openapi({ description: 'Contains information on an device verification', required: [] })
  .openapi('AcceptDeviceUserCodeRequest')

const AcceptOAuth2ConsentRequestSessionSchema = z
  .object({
    access_token: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'AccessToken sets session data for the access and refresh token, as well as any future tokens issued by the\nrefresh grant. Keep in mind that this data will be available to anyone performing OAuth 2.0 Challenge Introspection.\nIf only your services can perform OAuth 2.0 Challenge Introspection, this is usually fine. But if third parties\ncan access that endpoint as well, sensitive data from the session might be exposed to them. Use with care!',
      }),
    id_token: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "IDToken sets session data for the OpenID Connect ID token. Keep in mind that the session'id payloads are readable\nby anyone that has access to the ID Challenge. Use with care!",
      }),
  })
  .openapi({ title: 'Pass session data to a consent request.', required: [] })
  .openapi('AcceptOAuth2ConsentRequestSession')

const AcceptOAuth2ConsentRequestSchema = z
  .object({
    context: JSONRawMessageSchema.exactOptional(),
    grant_access_token_audience: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'GrantedAudience sets the audience the user authorized the client to use. Should be a subset of `requested_access_token_audience`.',
      }),
    grant_scope: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'GrantScope sets the scope the user authorized the client to use. Should be a subset of `requested_scope`.',
      }),
    remember: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same\nclient asks the same user for the same, or a subset of, scope.',
      }),
    remember_for: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the\nauthorization will be remembered indefinitely.',
      }),
    session: AcceptOAuth2ConsentRequestSessionSchema.exactOptional(),
  })
  .openapi({ title: 'The request payload used to accept a consent request.', required: [] })
  .openapi('AcceptOAuth2ConsentRequest')

const AcceptOAuth2LoginRequestSchema = z
  .object({
    acr: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ACR sets the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it\nto express that, for example, a user authenticated using two-factor authentication.',
      }),
    amr: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'AMR sets the Authentication Methods References value for this\nauthentication session. You can use it to specify the method a user used to\nauthenticate. For example, if the acr indicates a user used two-factor\nauthentication, the amr can express they used a software-secured key.',
      }),
    context: JSONRawMessageSchema.exactOptional(),
    extend_session_lifespan: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Extend OAuth2 authentication session lifespan\n\nIf set to `true`, the OAuth2 authentication cookie lifespan is extended. This is for example useful if you want the user to be able to use `prompt=none` continuously.\n\nThis value can only be set to `true` if the user has an authentication, which is the case if the `skip` value is `true`.',
      }),
    force_subject_identifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ForceSubjectIdentifier forces the "pairwise" user ID of the end-user that authenticated. The "pairwise" user ID refers to the\n(Pairwise Identifier Algorithm)[http://openid.net/specs/openid-connect-core-1_0.html#PairwiseAlg] of the OpenID\nConnect specification. It allows you to set an obfuscated subject ("user") identifier that is unique to the client.\n\nPlease note that this changes the user ID on endpoint /userinfo and sub claim of the ID Token. It does not change the\nsub claim in the OAuth 2.0 Introspection.\n\nPer default, ORY Hydra handles this value with its own algorithm. In case you want to set this yourself\nyou can use this field. Please note that setting this field has no effect if `pairwise` is not configured in\nORY Hydra or the OAuth 2.0 Client does not expect a pairwise identifier (set via `subject_type` key in the client\'s\nconfiguration).\n\nPlease also be aware that ORY Hydra is unable to properly compute this value during authentication. This implies\nthat you have to compute this value on every authentication process (probably depending on the client ID or some\nother unique value).\n\nIf you fail to compute the proper value, then authentication processes which have id_token_hint set might fail.',
      }),
    identity_provider_session_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IdentityProviderSessionID is the session ID of the end-user that authenticated.\nIf specified, we will use this value to propagate the logout.',
      }),
    remember: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Remember, if set to true, tells Ory Hydra to remember this user by telling the user agent (browser) to store\na cookie with authentication data. If the same user performs another OAuth 2.0 Authorization Request, they\nwill not be asked to log in again.',
      }),
    remember_for: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'RememberFor sets how long the authentication should be remembered for in seconds. If set to `0`, the\nauthorization will be remembered for the duration of the browser session (using a session cookie).',
      }),
    subject: z
      .string()
      .openapi({ description: 'Subject is the user ID of the end-user that authenticated.' }),
  })
  .openapi({
    required: ['subject'],
    title: 'HandledLoginRequest is the request payload used to accept a login request.',
  })
  .openapi('AcceptOAuth2LoginRequest')

const CreateJsonWebKeySetSchema = z
  .object({
    alg: z
      .string()
      .openapi({
        description:
          'JSON Web Key Algorithm\n\nThe algorithm to be used for creating the key. Supports `RS256`, `ES256`, `ES512`, `HS512`, and `HS256`.',
      }),
    kid: z
      .string()
      .openapi({ description: 'JSON Web Key ID\n\nThe Key ID of the key to be created.' }),
    use: z
      .string()
      .openapi({
        description:
          'JSON Web Key Use\n\nThe "use" (public key use) parameter identifies the intended use of\nthe public key. The "use" parameter is employed to indicate whether\na public key is used for encrypting data or verifying the signature\non data. Valid values are "enc" and "sig".',
      }),
  })
  .openapi({ description: 'Create JSON Web Key Set Request Body', required: ['alg', 'use', 'kid'] })
  .openapi('CreateJsonWebKeySet')

const CredentialSupportedDraft00Schema = z
  .object({
    cryptographic_binding_methods_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Verifiable Credentials Cryptographic Binding Methods Supported\n\nContains a list of cryptographic binding methods supported for signing the proof.',
      }),
    cryptographic_suites_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Verifiable Credentials Cryptographic Suites Supported\n\nContains a list of cryptographic suites methods supported for signing the proof.',
      }),
    format: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Verifiable Credentials Format\n\nContains the format that is supported by this authorization server.',
      }),
    types: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Verifiable Credentials Types\n\nContains the types of verifiable credentials supported.',
      }),
  })
  .openapi({
    description: 'Includes information about the supported verifiable credentials.',
    title: 'Verifiable Credentials Metadata (Draft 00)',
    required: [],
  })
  .openapi('CredentialSupportedDraft00')

const DeviceAuthorizationSchema = z
  .object({
    device_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The device verification code.',
        example: 'ory_dc_smldfksmdfkl.mslkmlkmlk',
      }),
    expires_in: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The lifetime in seconds of the "device_code" and "user_code".',
        example: 16830,
      }),
    interval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The minimum amount of time in seconds that the client\nSHOULD wait between polling requests to the token endpoint.  If no\nvalue is provided, clients MUST use 5 as the default.',
        example: 5,
      }),
    user_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end-user verification code.', example: 'AAAAAA' }),
    verification_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end-user verification URI on the authorization\nserver.  The URI should be short and easy to remember as end users\nwill be asked to manually type it into their user agent.',
        example: 'https://auth.ory.sh/tv',
      }),
    verification_uri_complete: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A verification URI that includes the "user_code" (or\nother information with the same function as the "user_code"),\nwhich is designed for non-textual transmission.',
        example: 'https://auth.ory.sh/tv?user_code=AAAAAA',
      }),
  })
  .openapi({
    description: "# Ory's OAuth 2.0 Device Authorization API",
    title: 'OAuth2 Device Flow',
    required: [],
  })
  .openapi('DeviceAuthorization')

const ErrorOAuth2Schema = z
  .object({
    error: z.string().exactOptional().openapi({ description: 'Error' }),
    error_debug: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error Debug Information\n\nOnly available in dev mode.' }),
    error_description: z.string().exactOptional().openapi({ description: 'Error Description' }),
    error_hint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Error Hint\n\nHelps the user identify the error cause.',
        example: 'The redirect URL is not allowed.',
      }),
    status_code: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'HTTP Status Code', example: 401 }),
  })
  .openapi({ description: 'Error', required: [] })
  .openapi('ErrorOAuth2')

const GenericErrorSchema = z
  .object({
    code: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', description: 'The status code', example: 404 }),
    debug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Debug information\n\nThis field is often not exposed to protect against leaking\nsensitive information.',
        example: 'SQL field "foo" is not a bool.',
      }),
    details: z.any().exactOptional().openapi({ description: 'Further error details' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The error ID\n\nUseful when trying to identify various errors in application logic.',
      }),
    message: z
      .string()
      .openapi({
        description: "Error message\n\nThe error's message.",
        example: 'The resource could not be found',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable reason for the error',
        example: 'User with ID 1234 does not exist.',
      }),
    request: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The request ID\n\nThe request ID is often exposed internally in order to trace\nerrors across service architectures. This is often a UUID.',
        example: 'd7ef54b1-ec15-46e6-bccb-524b82c035e6',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status description', example: 'Not Found' }),
  })
  .openapi({ required: ['message'] })
  .openapi('GenericError')

const HealthNotReadyStatusSchema = z
  .object({
    errors: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Errors contains a list of errors that caused the not ready status.',
      }),
  })
  .openapi({ title: 'The not ready status of the service.', required: [] })
  .openapi('HealthNotReadyStatus')

const HealthStatusSchema = z
  .object({
    status: z.string().exactOptional().openapi({ description: 'Status always contains "ok".' }),
  })
  .openapi({ title: 'The health status of the service.', required: [] })
  .openapi('HealthStatus')

const IntrospectedOAuth2TokenSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description:
          'Active is a boolean indicator of whether or not the presented token\nis currently active.  The specifics of a token\'s "active" state\nwill vary depending on the implementation of the authorization\nserver and the information it keeps about its tokens, but a "true"\nvalue return for the "active" property will generally indicate\nthat a given token has been issued by this authorization server,\nhas not been revoked by the resource owner, and is within its\ngiven time window of validity (e.g., after its issuance time and\nbefore its expiration time).',
      }),
    aud: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "Audience contains a list of the token's intended audiences." }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID is a client identifier for the OAuth 2.0 client that\nrequested this token.',
      }),
    exp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Expires at is an integer timestamp, measured in the number of seconds\nsince January 1 1970 UTC, indicating when this token will expire.',
      }),
    ext: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Extra is arbitrary data set by the session.' }),
    iat: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Issued at is an integer timestamp, measured in the number of seconds\nsince January 1 1970 UTC, indicating when this token was\noriginally issued.',
      }),
    iss: z
      .string()
      .exactOptional()
      .openapi({ description: 'IssuerURL is a string representing the issuer of this token' }),
    nbf: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'NotBefore is an integer timestamp, measured in the number of seconds\nsince January 1 1970 UTC, indicating when this token is not to be\nused before.',
      }),
    obfuscated_subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ObfuscatedSubject is set when the subject identifier algorithm was set to "pairwise" during authorization.\nIt is the `sub` value of the ID Token that was issued.',
      }),
    scope: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Scope is a JSON string containing a space-separated list of\nscopes associated with this token.',
      }),
    sub: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subject of the token, as defined in JWT [RFC7519].\nUsually a machine-readable identifier of the resource owner who\nauthorized this token.',
      }),
    token_type: z
      .string()
      .exactOptional()
      .openapi({ description: "TokenType is the introspected token's type, typically `Bearer`." }),
    token_use: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "TokenUse is the introspected token's use, for example `access_token` or `refresh_token`.",
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Username is a human-readable identifier for the resource owner who\nauthorized this token.',
      }),
  })
  .openapi({
    description:
      "Introspection contains an access token's session data as specified by\n[IETF RFC 7662](https://tools.ietf.org/html/rfc7662)",
    required: ['active'],
  })
  .openapi('IntrospectedOAuth2Token')

const JsonPatchSchema = z
  .object({
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is used together with operation "move" and uses JSON Pointer notation.\n\nLearn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).',
        example: '/name',
      }),
    op: z
      .string()
      .openapi({
        description:
          'The operation to be performed. One of "add", "remove", "replace", "move", "copy", or "test".',
        example: 'replace',
      }),
    path: z
      .string()
      .openapi({
        description:
          'The path to the target path. Uses JSON pointer notation.\n\nLearn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).',
        example: '/name',
      }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The value to be used within the operations.\n\nLearn more [about JSON Pointers](https://datatracker.ietf.org/doc/html/rfc6901#section-5).',
        example: 'foobar',
      }),
  })
  .openapi({ description: 'A JSONPatch document as defined by RFC 6902', required: ['op', 'path'] })
  .openapi('JsonPatch')

const JsonPatchDocumentSchema = z
  .array(JsonPatchSchema)
  .openapi({ description: 'A JSONPatchDocument request' })
  .openapi('JsonPatchDocument')

const KeysetPaginationRequestParametersSchema = z
  .object({
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .default(250n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        default: 250,
        description:
          'Items per Page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
      }),
    page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
      }),
  })
  .openapi({
    description:
      'For details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
    title: 'Pagination Request Parameters',
    required: [],
  })
  .openapi('KeysetPaginationRequestParameters')

const KeysetPaginationResponseHeadersSchema = z
  .object({
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Link HTTP Header\n\nThe `Link` header contains a comma-delimited list of links to the following pages:\n\nfirst: The first page of results.\nnext: The next page of results.\n\nPages are omitted if they do not exist. For example, if there is no next page, the `next` link is omitted. Examples:\n\n</admin/sessions?page_size=250&page_token={last_item_uuid}; rel="first",/admin/sessions?page_size=250&page_token=>; rel="next"',
      }),
  })
  .openapi({
    description:
      'The `Link` HTTP header contains multiple links (`first`, `next`) formatted as:\n`<https://{project-slug}.projects.oryapis.com/admin/sessions?page_size=250&page_token=>; rel="first"`\n\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
    title: 'Pagination Response Header',
    required: [],
  })
  .openapi('KeysetPaginationResponseHeaders')

const NullInt64Schema = z.int().nullable().openapi('NullInt64')

const OAuth2ClientTokenLifespansSchema = z
  .object({
    authorization_code_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    authorization_code_grant_id_token_lifespan: NullDurationSchema.exactOptional(),
    authorization_code_grant_refresh_token_lifespan: NullDurationSchema.exactOptional(),
    client_credentials_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    device_authorization_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    device_authorization_grant_id_token_lifespan: NullDurationSchema.exactOptional(),
    device_authorization_grant_refresh_token_lifespan: NullDurationSchema.exactOptional(),
    implicit_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    implicit_grant_id_token_lifespan: NullDurationSchema.exactOptional(),
    jwt_bearer_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    refresh_token_grant_access_token_lifespan: NullDurationSchema.exactOptional(),
    refresh_token_grant_id_token_lifespan: NullDurationSchema.exactOptional(),
    refresh_token_grant_refresh_token_lifespan: NullDurationSchema.exactOptional(),
  })
  .openapi({
    description: 'Lifespans of different token types issued for this OAuth 2.0 Client.',
    title: 'OAuth 2.0 Client Token Lifespans',
    required: [],
  })
  .openapi('OAuth2ClientTokenLifespans')

const OAuth2ConsentRequestOpenIDConnectContextSchema = z
  .object({
    acr_values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'ACRValues is the Authentication AuthorizationContext Class Reference requested in the OAuth 2.0 Authorization request.\nIt is a parameter defined by OpenID Connect and expresses which level of authentication (e.g. 2FA) is required.\n\nOpenID Connect defines it as follows:\n> Requested Authentication AuthorizationContext Class Reference values. Space-separated string that specifies the acr values\nthat the Authorization Server is being requested to use for processing this Authentication Request, with the\nvalues appearing in order of preference. The Authentication AuthorizationContext Class satisfied by the authentication\nperformed is returned as the acr Claim Value, as specified in Section 2. The acr Claim is requested as a\nVoluntary Claim by this parameter.',
      }),
    display: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display is a string value that specifies how the Authorization Server displays the authentication and consent user interface pages to the End-User.\nThe defined values are:\npage: The Authorization Server SHOULD display the authentication and consent UI consistent with a full User Agent page view. If the display parameter is not specified, this is the default display mode.\npopup: The Authorization Server SHOULD display the authentication and consent UI consistent with a popup User Agent window. The popup User Agent window should be of an appropriate size for a login-focused dialog and should not obscure the entire window that it is popping up over.\ntouch: The Authorization Server SHOULD display the authentication and consent UI consistent with a device that leverages a touch interface.\nwap: The Authorization Server SHOULD display the authentication and consent UI consistent with a "feature phone" type display.\n\nThe Authorization Server MAY also attempt to detect the capabilities of the User Agent and present an appropriate display.',
      }),
    id_token_hint_claims: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          "IDTokenHintClaims are the claims of the ID Token previously issued by the Authorization Server being passed as a hint about the\nEnd-User's current or past authenticated session with the Client.",
      }),
    login_hint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'LoginHint hints about the login identifier the End-User might use to log in (if necessary).\nThis hint can be used by an RP if it first asks the End-User for their e-mail address (or other identifier)\nand then wants to pass that value as a hint to the discovered authorization service. This value MAY also be a\nphone number in the format specified for the phone_number Claim. The use of this parameter is optional.',
      }),
    ui_locales: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'UILocales is the End-User\'id preferred languages and scripts for the user interface, represented as a\nspace-separated list of BCP47 [RFC5646] language tag values, ordered by preference. For instance, the value\n"fr-CA fr en" represents a preference for French as spoken in Canada, then French (without a region designation),\nfollowed by English (without a region designation). An error SHOULD NOT result if some or all of the requested\nlocales are not supported by the OpenID Provider.',
      }),
  })
  .openapi({
    title: 'Contains optional information about the OpenID Connect request.',
    required: [],
  })
  .openapi('OAuth2ConsentRequestOpenIDConnectContext')

const OAuth2ConsentRequestSchema = z
  .object({
    acr: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ACR represents the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it\nto express that, for example, a user authenticated using two factor authentication.',
      }),
    amr: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'AMR is the Authentication Methods References value for this\nauthentication session. You can use it to specify the method a user used to\nauthenticate. For example, if the acr indicates a user used two factor\nauthentication, the amr can express they used a software-secured key.',
      }),
    challenge: z
      .string()
      .openapi({ description: 'Challenge is used to retrieve/accept/deny the consent request.' }),
    client: OAuth2ClientSchema.exactOptional(),
    consent_request_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ConsentRequestID is the ID of the consent request.' }),
    context: JSONRawMessageSchema.exactOptional(),
    login_challenge: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'LoginChallenge is the login challenge this consent challenge belongs to. It can be used to associate\na login and consent request in the login & consent app.',
      }),
    login_session_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'LoginSessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag)\nthis ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false)\nthis will be a new random value. This value is used as the "sid" parameter in the ID Token and in OIDC Front-/Back-\nchannel logout. It\'s value can generally be used to associate consecutive login requests by a certain user.',
      }),
    oidc_context: OAuth2ConsentRequestOpenIDConnectContextSchema.exactOptional(),
    request_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which\ninitiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but\nmight come in handy if you want to deal with additional request parameters.',
      }),
    requested_access_token_audience: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'RequestedAudience contains the access token audience as requested by the OAuth 2.0 Client.',
      }),
    requested_scope: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.',
      }),
    skip: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Skip, if true, implies that the client has requested the same scopes from the same user previously.\nIf true, you must not ask the user to grant the requested scopes. You must however either allow or deny the\nconsent request using the usual API call.',
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope\nrequested by the OAuth 2.0 client.',
      }),
  })
  .openapi({
    required: ['challenge'],
    title: 'Contains information on an ongoing consent request.',
  })
  .openapi('OAuth2ConsentRequest')

const OAuth2ConsentSessionSchema = z
  .object({
    consent_request: OAuth2ConsentRequestSchema.exactOptional(),
    consent_request_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ConsentRequestID is the identifier of the consent request that initiated this consent session.',
      }),
    context: JSONRawMessageSchema.exactOptional(),
    grant_access_token_audience: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Audience Granted\n\nGrantedAudience sets the audience the user authorized the client to use. Should be a subset of `requested_access_token_audience`.',
      }),
    grant_scope: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Scope Granted\n\nGrantScope sets the scope the user authorized the client to use. Should be a subset of `requested_scope`.',
      }),
    handled_at: NullTime2Schema.exactOptional(),
    remember: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Remember Consent\n\nRemember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same\nclient asks the same user for the same, or a subset of, scope.',
      }),
    remember_for: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Remember Consent For\n\nRememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the\nauthorization will be remembered indefinitely.',
      }),
    session: AcceptOAuth2ConsentRequestSessionSchema.exactOptional(),
  })
  .openapi({
    description: 'A completed OAuth 2.0 Consent Session.',
    title: 'OAuth 2.0 Consent Session',
    required: [],
  })
  .openapi('OAuth2ConsentSession')

const OAuth2ConsentSessionsSchema = z
  .array(OAuth2ConsentSessionSchema)
  .openapi({ description: 'List of OAuth 2.0 Consent Sessions' })
  .openapi('OAuth2ConsentSessions')

const OAuth2LoginRequestSchema = z
  .object({
    challenge: z.string().openapi({ description: 'ID is the identifier of the login request.' }),
    client: OAuth2ClientSchema,
    oidc_context: OAuth2ConsentRequestOpenIDConnectContextSchema.exactOptional(),
    request_url: z
      .string()
      .openapi({
        description:
          'RequestURL is the original OAuth 2.0 Authorization URL requested by the OAuth 2.0 client. It is the URL which\ninitiates the OAuth 2.0 Authorization Code or OAuth 2.0 Implicit flow. This URL is typically not needed, but\nmight come in handy if you want to deal with additional request parameters.',
      }),
    requested_access_token_audience: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'RequestedAudience contains the access token audience as requested by the OAuth 2.0 Client.',
      }),
    requested_scope: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.',
      }),
    session_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SessionID is the login session ID. If the user-agent reuses a login session (via cookie / remember flag)\nthis ID will remain the same. If the user-agent did not have an existing authentication session (e.g. remember is false)\nthis will be a new random value. This value is used as the "sid" parameter in the ID Token and in OIDC Front-/Back-\nchannel logout. It\'s value can generally be used to associate consecutive login requests by a certain user.',
      }),
    skip: z
      .boolean()
      .openapi({
        description:
          'Skip, if true, implies that the client has requested the same scopes from the same user previously.\nIf true, you can skip asking the user to grant the requested scopes, and simply forward the user to the redirect URL.\n\nThis feature allows you to update / set session information.',
      }),
    subject: z
      .string()
      .openapi({
        description:
          'Subject is the user ID of the end-user that authenticated. Now, that end user needs to grant or deny the scope\nrequested by the OAuth 2.0 client. If this value is set and `skip` is true, you MUST include this subject type\nwhen accepting the login request, or the request will fail.',
      }),
  })
  .openapi({
    required: ['challenge', 'skip', 'subject', 'client', 'request_url'],
    title: 'Contains information on an ongoing login request.',
  })
  .openapi('OAuth2LoginRequest')

const OAuth2LogoutRequestSchema = z
  .object({
    challenge: z
      .string()
      .exactOptional()
      .openapi({ description: 'Challenge is used to retrieve/accept/deny the logout request.' }),
    client: OAuth2ClientSchema.exactOptional(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    request_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'RequestURL is the original Logout URL requested.' }),
    requested_at: z.iso.datetime({ offset: true }).exactOptional(),
    rp_initiated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'RPInitiated is set to true if the request was initiated by a Relying Party (RP), also known as an OAuth 2.0 Client.',
      }),
    sid: z
      .string()
      .exactOptional()
      .openapi({ description: 'SessionID is the login session ID that was requested to log out.' }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subject is the user for whom the logout was requested.' }),
  })
  .openapi({ title: 'Contains information about an ongoing logout request.', required: [] })
  .openapi('OAuth2LogoutRequest')

const OAuth2RedirectToSchema = z
  .object({
    redirect_to: z
      .string()
      .openapi({
        description:
          "RedirectURL is the URL which you should redirect the user's browser to once the authentication process is completed.",
      }),
  })
  .openapi({
    description: 'Contains a redirect URL used to complete a login, consent, or logout request.',
    required: ['redirect_to'],
    title: 'OAuth 2.0 Redirect Browser To',
  })
  .openapi('OAuth2RedirectTo')

const OAuth2TokenExchangeSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The access token issued by the authorization server.' }),
    expires_in: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The lifetime in seconds of the access token. For\nexample, the value "3600" denotes that the access token will\nexpire in one hour from the time the response was generated.',
      }),
    id_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'To retrieve a refresh token request the id_token scope.' }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The refresh token, which can be used to obtain new\naccess tokens. To retrieve it add the scope "offline" to your access token request.',
      }),
    scope: z.string().exactOptional().openapi({ description: 'The scope of the access token' }),
    token_type: z.string().exactOptional().openapi({ description: 'The type of the token issued' }),
  })
  .openapi({ description: 'OAuth2 Token Exchange Result', required: [] })
  .openapi('OAuth2TokenExchange')

const OidcConfigurationSchema = z
  .object({
    authorization_endpoint: z
      .string()
      .openapi({
        description: 'OAuth 2.0 Authorization Endpoint URL',
        example: 'https://playground.ory.sh/ory-hydra/public/oauth2/auth',
      }),
    backchannel_logout_session_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Back-Channel Logout Session Required\n\nBoolean value specifying whether the OP can pass a sid (session ID) Claim in the Logout Token to identify the RP\nsession with the OP. If supported, the sid Claim is also included in ID Tokens issued by the OP',
      }),
    backchannel_logout_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Back-Channel Logout Supported\n\nBoolean value specifying whether the OP supports back-channel logout, with true indicating support.',
      }),
    claims_parameter_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Claims Parameter Parameter Supported\n\nBoolean value specifying whether the OP supports use of the claims parameter, with true indicating support.',
      }),
    claims_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Supported Claims\n\nJSON array containing a list of the Claim Names of the Claims that the OpenID Provider MAY be able to supply\nvalues for. Note that for privacy or other reasons, this might not be an exhaustive list.',
      }),
    code_challenge_methods_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 PKCE Supported Code Challenge Methods\n\nJSON array containing a list of Proof Key for Code Exchange (PKCE) [RFC7636] code challenge methods supported\nby this authorization server.',
      }),
    credentials_endpoint_draft_00: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Verifiable Credentials Endpoint\n\nContains the URL of the Verifiable Credentials Endpoint.',
      }),
    credentials_supported_draft_00: z
      .array(CredentialSupportedDraft00Schema)
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Verifiable Credentials Supported\n\nJSON array containing a list of the Verifiable Credentials supported by this authorization server.',
      }),
    device_authorization_endpoint: z
      .string()
      .openapi({
        description: 'OAuth 2.0 Device Authorization Endpoint URL',
        example: 'https://playground.ory.sh/ory-hydra/public/oauth2/device/oauth',
      }),
    end_session_endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect End-Session Endpoint\n\nURL at the OP to which an RP can perform a redirect to request that the End-User be logged out at the OP.',
      }),
    frontchannel_logout_session_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Front-Channel Logout Session Required\n\nBoolean value specifying whether the OP can pass iss (issuer) and sid (session ID) query parameters to identify\nthe RP session with the OP when the frontchannel_logout_uri is used. If supported, the sid Claim is also\nincluded in ID Tokens issued by the OP.',
      }),
    frontchannel_logout_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Front-Channel Logout Supported\n\nBoolean value specifying whether the OP supports HTTP-based logout, with true indicating support.',
      }),
    grant_types_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Supported Grant Types\n\nJSON array containing a list of the OAuth 2.0 Grant Type values that this OP supports.',
      }),
    id_token_signed_response_alg: z
      .array(z.string())
      .openapi({
        description:
          'OpenID Connect Default ID Token Signing Algorithms\n\nAlgorithm used to sign OpenID Connect ID Tokens.',
      }),
    id_token_signing_alg_values_supported: z
      .array(z.string())
      .openapi({
        description:
          'OpenID Connect Supported ID Token Signing Algorithms\n\nJSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for the ID Token\nto encode the Claims in a JWT.',
      }),
    issuer: z
      .string()
      .openapi({
        description:
          'OpenID Connect Issuer URL\n\nAn URL using the https scheme with no query or fragment component that the OP asserts as its IssuerURL Identifier.\nIf IssuerURL discovery is supported , this value MUST be identical to the issuer value returned\nby WebFinger. This also MUST be identical to the iss Claim value in ID Tokens issued from this IssuerURL.',
        example: 'https://playground.ory.sh/ory-hydra/public/',
      }),
    jwks_uri: z
      .string()
      .openapi({
        description:
          "OpenID Connect Well-Known JSON Web Keys URL\n\nURL of the OP's JSON Web Key Set [JWK] document. This contains the signing key(s) the RP uses to validate\nsignatures from the OP. The JWK Set MAY also contain the Server's encryption key(s), which are used by RPs\nto encrypt requests to the Server. When both signing and encryption keys are made available, a use (Key Use)\nparameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key's intended usage.\nAlthough some algorithms allow the same key to be used for both signatures and encryption, doing so is\nNOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of\nkeys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.",
        example: 'https://{slug}.projects.oryapis.com/.well-known/jwks.json',
      }),
    registration_endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'OpenID Connect Dynamic Client Registration Endpoint URL',
        example: 'https://playground.ory.sh/ory-hydra/admin/client',
      }),
    request_object_signing_alg_values_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Supported Request Object Signing Algorithms\n\nJSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for Request Objects,\nwhich are described in Section 6.1 of OpenID Connect Core 1.0 [OpenID.Core]. These algorithms are used both when\nthe Request Object is passed by value (using the request parameter) and when it is passed by reference\n(using the request_uri parameter).',
      }),
    request_parameter_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Request Parameter Supported\n\nBoolean value specifying whether the OP supports use of the request parameter, with true indicating support.',
      }),
    request_uri_parameter_supported: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Request URI Parameter Supported\n\nBoolean value specifying whether the OP supports use of the request_uri parameter, with true indicating support.',
      }),
    require_request_uri_registration: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Requires Request URI Registration\n\nBoolean value specifying whether the OP requires any request_uri values used to be pre-registered\nusing the request_uris registration parameter.',
      }),
    response_modes_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Supported Response Modes\n\nJSON array containing a list of the OAuth 2.0 response_mode values that this OP supports.',
      }),
    response_types_supported: z
      .array(z.string())
      .openapi({
        description:
          'OAuth 2.0 Supported Response Types\n\nJSON array containing a list of the OAuth 2.0 response_type values that this OP supports. Dynamic OpenID\nProviders MUST support the code, id_token, and the token id_token Response Type values.',
      }),
    revocation_endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "OAuth 2.0 Token Revocation URL\n\nURL of the authorization server's OAuth 2.0 revocation endpoint.",
      }),
    scopes_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Supported Scope Values\n\nJSON array containing a list of the OAuth 2.0 [RFC6749] scope values that this server supports. The server MUST\nsupport the openid scope value. Servers MAY choose not to advertise some supported scope values even when this parameter is used',
      }),
    subject_types_supported: z
      .array(z.string())
      .openapi({
        description:
          'OpenID Connect Supported Subject Types\n\nJSON array containing a list of the Subject Identifier types that this OP supports. Valid types include\npairwise and public.',
      }),
    token_endpoint: z
      .string()
      .openapi({
        description: 'OAuth 2.0 Token Endpoint URL',
        example: 'https://playground.ory.sh/ory-hydra/public/oauth2/token',
      }),
    token_endpoint_auth_methods_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OAuth 2.0 Supported Client Authentication Methods\n\nJSON array containing a list of Client Authentication methods supported by this Token Endpoint. The options are\nclient_secret_post, client_secret_basic, client_secret_jwt, and private_key_jwt, as described in Section 9 of OpenID Connect Core 1.0',
      }),
    userinfo_endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: "OpenID Connect Userinfo URL\n\nURL of the OP's UserInfo Endpoint.",
      }),
    userinfo_signed_response_alg: z
      .array(z.string())
      .openapi({
        description:
          'OpenID Connect User Userinfo Signing Algorithm\n\nAlgorithm used to sign OpenID Connect Userinfo Responses.',
      }),
    userinfo_signing_alg_values_supported: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'OpenID Connect Supported Userinfo Signing Algorithm\n\nJSON array containing a list of the JWS [JWS] signing algorithms (alg values) [JWA] supported by the UserInfo Endpoint to encode the Claims in a JWT [JWT].',
      }),
  })
  .openapi({
    description:
      'Includes links to several endpoints (for example `/oauth2/token`) and exposes information on supported signature algorithms\namong others.',
    required: [
      'issuer',
      'authorization_endpoint',
      'device_authorization_endpoint',
      'token_endpoint',
      'jwks_uri',
      'subject_types_supported',
      'response_types_supported',
      'id_token_signing_alg_values_supported',
      'id_token_signed_response_alg',
      'userinfo_signed_response_alg',
    ],
    title: 'OpenID Connect Discovery Metadata',
  })
  .openapi('OidcConfiguration')

const OidcUserInfoSchema = z
  .object({
    birthdate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "End-User's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. The year MAY be 0000, indicating that it is omitted. To represent only the year, YYYY format is allowed. Note that depending on the underlying platform's date related function, providing just year can result in varying month and day, so the implementers need to take this factor into account to correctly process the dates.",
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "End-User's preferred e-mail address. Its value MUST conform to the RFC 5322 [RFC5322] addr-spec syntax. The RP MUST NOT rely upon this value being unique, as discussed in Section 5.7.",
      }),
    email_verified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "True if the End-User's e-mail address has been verified; otherwise false. When this Claim Value is true, this means that the OP took affirmative steps to ensure that this e-mail address was controlled by the End-User at the time the verification was performed. The means by which an e-mail address is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating.",
      }),
    family_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.',
      }),
    gender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "End-User's gender. Values defined by this specification are female and male. Other values MAY be used when neither of the defined values are applicable.",
      }),
    given_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.',
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "End-User's locale, represented as a BCP47 [RFC5646] language tag. This is typically an ISO 639-1 Alpha-2 [ISO639‑1] language code in lowercase and an ISO 3166-1 Alpha-2 [ISO3166‑1] country code in uppercase, separated by a dash. For example, en-US or fr-CA. As a compatibility note, some implementations have used an underscore as the separator rather than a dash, for example, en_US; Relying Parties MAY choose to accept this locale syntax as well.",
      }),
    middle_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.",
      }),
    nickname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.',
      }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "End-User's preferred telephone number. E.164 [E.164] is RECOMMENDED as the format of this Claim, for example, +1 (425) 555-1212 or +56 (2) 687 2400. If the phone number contains an extension, it is RECOMMENDED that the extension be represented using the RFC 3966 [RFC3966] extension syntax, for example, +1 (604) 555-1234;ext=5678.",
      }),
    phone_number_verified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "True if the End-User's phone number has been verified; otherwise false. When this Claim Value is true, this means that the OP took affirmative steps to ensure that this phone number was controlled by the End-User at the time the verification was performed. The means by which a phone number is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating. When true, the phone_number Claim MUST be in E.164 format and any extensions MUST be represented in RFC 3966 format.",
      }),
    picture: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file), rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User.",
      }),
    preferred_username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Non-unique shorthand name by which the End-User wishes to be referred to at the RP, such as janedoe or j.doe. This value MAY be any valid JSON string including special characters such as @, /, or whitespace.',
      }),
    profile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL of the End-User's profile page. The contents of this Web page SHOULD be about the End-User.",
      }),
    sub: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subject - Identifier for the End-User at the IssuerURL.' }),
    updated_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "Time the End-User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.",
      }),
    website: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL of the End-User's Web page or blog. This Web page SHOULD contain information published by the End-User or an organization that the End-User is affiliated with.",
      }),
    zoneinfo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "String from zoneinfo [zoneinfo] time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.",
      }),
  })
  .openapi({ description: 'OpenID Connect Userinfo', required: [] })
  .openapi('OidcUserInfo')

const RejectOAuth2RequestSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).\n\nDefaults to `request_denied`.',
      }),
    error_debug: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Debug contains information to help resolve the problem as a developer. Usually not exposed\nto the public but only in the server logs.',
      }),
    error_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the error in a human readable format.' }),
    error_hint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hint to help resolve the error.' }),
    status_code: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Represents the HTTP status code of the error (e.g. 401 or 403)\n\nDefaults to 400',
      }),
  })
  .openapi({
    title: 'The request payload used to accept a login or consent request.',
    required: [],
  })
  .openapi('RejectOAuth2Request')

const TokenPaginationSchema = z
  .object({
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1000n),
      )
      .default(250n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1000,
        default: 250,
        description:
          'Items per page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
      }),
    page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
      }),
  })
  .openapi({ required: [] })
  .openapi('TokenPagination')

const TokenPaginationHeadersSchema = z
  .object({
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The link header contains pagination links.\n\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).\n\nin: header',
      }),
    'x-total-count': z
      .string()
      .exactOptional()
      .openapi({ description: 'The total number of clients.\n\nin: header' }),
  })
  .openapi({ required: [] })
  .openapi('TokenPaginationHeaders')

const TokenPaginationRequestParametersSchema = z
  .object({
    page_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(500n),
      )
      .default(250n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 500,
        default: 250,
        description:
          'Items per Page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
      }),
    page_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
      }),
  })
  .openapi({
    description:
      'The `Link` HTTP header contains multiple links (`first`, `next`, `last`, `previous`) formatted as:\n`<https://{project-slug}.projects.oryapis.com/admin/clients?page_size={limit}&page_token={offset}>; rel="{page}"`\n\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
    title: 'Pagination Request Parameters',
    required: [],
  })
  .openapi('TokenPaginationRequestParameters')

const TokenPaginationResponseHeadersSchema = z
  .object({
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Link HTTP Header\n\nThe `Link` header contains a comma-delimited list of links to the following pages:\n\nfirst: The first page of results.\nnext: The next page of results.\nprev: The previous page of results.\nlast: The last page of results.\n\nPages are omitted if they do not exist. For example, if there is no next page, the `next` link is omitted. Examples:\n\n</clients?page_size=5&page_token=0>; rel="first",</clients?page_size=5&page_token=15>; rel="next",</clients?page_size=5&page_token=5>; rel="prev",</clients?page_size=5&page_token=20>; rel="last"',
      }),
    'x-total-count': z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The X-Total-Count HTTP Header\n\nThe `X-Total-Count` header contains the total number of items in the collection.',
      }),
  })
  .openapi({
    description:
      'The `Link` HTTP header contains multiple links (`first`, `next`, `last`, `previous`) formatted as:\n`<https://{project-slug}.projects.oryapis.com/admin/clients?page_size={limit}&page_token={offset}>; rel="{page}"`\n\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
    title: 'Pagination Response Header',
    required: [],
  })
  .openapi('TokenPaginationResponseHeaders')

const TrustOAuth2JwtGrantIssuerSchema = z
  .object({
    allow_any_subject: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The "allow_any_subject" indicates that the issuer is allowed to have any principal as the subject of the JWT.',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The "expires_at" indicates, when grant will expire, so we will reject assertion from "issuer" targeting "subject".',
      }),
    issuer: z
      .string()
      .openapi({
        description:
          'The "issuer" identifies the principal that issued the JWT assertion (same as "iss" claim in JWT).',
        example: 'https://jwt-idp.example.com',
      }),
    jwk: JsonWebKeySchema,
    scope: z
      .array(z.string())
      .openapi({
        description:
          'The "scope" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])',
        example: ['openid', 'offline'],
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The "subject" identifies the principal that is the subject of the JWT.',
        example: 'mike@example.com',
      }),
  })
  .openapi({
    description: 'Trust OAuth2 JWT Bearer Grant Type Issuer Request Body',
    required: ['issuer', 'scope', 'jwk', 'expires_at'],
  })
  .openapi('TrustOAuth2JwtGrantIssuer')

const TrustedOAuth2JwtGrantJsonWebKeySchema = z
  .object({
    kid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The "key_id" is key unique identifier (same as kid header in jws/jwt).',
        example: '123e4567-e89b-12d3-a456-426655440000',
      }),
    set: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The "set" is basically a name for a group(set) of keys. Will be the same as "issuer" in grant.',
        example: 'https://jwt-idp.example.com',
      }),
  })
  .openapi({
    description: 'OAuth2 JWT Bearer Grant Type Issuer Trusted JSON Web Key',
    required: [],
  })
  .openapi('TrustedOAuth2JwtGrantJsonWebKey')

const TrustedOAuth2JwtGrantIssuerSchema = z
  .object({
    allow_any_subject: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The "allow_any_subject" indicates that the issuer is allowed to have any principal as the subject of the JWT.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The "created_at" indicates, when grant was created.' }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The "expires_at" indicates, when grant will expire, so we will reject assertion from "issuer" targeting "subject".',
      }),
    id: z.string().exactOptional().openapi({ example: '9edc811f-4e28-453c-9b46-4de65f00217f' }),
    issuer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The "issuer" identifies the principal that issued the JWT assertion (same as "iss" claim in JWT).',
        example: 'https://jwt-idp.example.com',
      }),
    public_key: TrustedOAuth2JwtGrantJsonWebKeySchema.exactOptional(),
    scope: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The "scope" contains list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749])',
        example: ['openid', 'offline'],
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The "subject" identifies the principal that is the subject of the JWT.',
        example: 'mike@example.com',
      }),
  })
  .openapi({ description: 'OAuth2 JWT Bearer Grant Type Issuer Trust Relationship', required: [] })
  .openapi('TrustedOAuth2JwtGrantIssuer')

const TrustedOAuth2JwtGrantIssuersSchema = z
  .array(TrustedOAuth2JwtGrantIssuerSchema)
  .openapi({ description: 'OAuth2 JWT Bearer Grant Type Issuer Trust Relationships' })
  .openapi('TrustedOAuth2JwtGrantIssuers')

const UnexpectedErrorSchema = z.string().openapi('UnexpectedError')

const VerifiableCredentialPrimingResponseSchema = z
  .object({
    c_nonce: z.string().exactOptional(),
    c_nonce_expires_in: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    error: z.string().exactOptional(),
    error_debug: z.string().exactOptional(),
    error_description: z.string().exactOptional(),
    error_hint: z.string().exactOptional(),
    format: z.string().exactOptional(),
    status_code: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    title:
      'VerifiableCredentialPrimingResponse contains the nonce to include in the proof-of-possession JWT.',
    required: [],
  })
  .openapi('VerifiableCredentialPrimingResponse')

const VerifiableCredentialResponseSchema = z
  .object({ credential_draft_00: z.string().exactOptional(), format: z.string().exactOptional() })
  .openapi({
    title: 'VerifiableCredentialResponse contains the verifiable credential.',
    required: [],
  })
  .openapi('VerifiableCredentialResponse')

const VerifyUserCodeRequestSchema = z
  .object({
    client: OAuth2ClientSchema.exactOptional(),
    device_code_request_id: z.string().exactOptional(),
    request_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'RequestURL is the original Device Authorization URL requested.' }),
    requested_access_token_audience: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'RequestedAudience contains the access token audience as requested by the OAuth 2.0 Client.',
      }),
    requested_scope: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'RequestedScope contains the OAuth 2.0 Scope requested by the OAuth 2.0 Client.',
      }),
  })
  .openapi({
    title: 'HandledDeviceUserAuthRequest is the request payload used to accept a device user_code.',
    required: [],
  })
  .openapi('VerifyUserCodeRequest')

const VersionSchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({ description: "Version is the service's version." }),
  })
  .openapi({ required: [] })
  .openapi('Version')

const EmptyResponseResponse = {
  description:
    'Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is\ntypically 204.',
}

const ErrorOAuth2BadRequestResponse = {
  description: 'Bad Request Error Response',
  content: { 'application/json': { schema: ErrorOAuth2Schema } },
}

const ErrorOAuth2DefaultResponse = {
  description: 'Default Error Response',
  content: { 'application/json': { schema: ErrorOAuth2Schema } },
}

const ErrorOAuth2NotFoundResponse = {
  description: 'Not Found Error Response',
  content: { 'application/json': { schema: ErrorOAuth2Schema } },
}

const ListOAuth2ClientsResponse = {
  description: 'Paginated OAuth2 Client List Response',
  content: { 'application/json': { schema: z.array(OAuth2ClientSchema) } },
}

const BasicSecurityScheme = { scheme: 'basic', type: 'http' }

const BearerSecurityScheme = { scheme: 'bearer', type: 'http' }

const Oauth2SecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://hydra.demo.ory.sh/oauth2/auth',
      scopes: {
        offline: 'A scope required when requesting refresh tokens (alias for `offline_access`)',
        offline_access: 'A scope required when requesting refresh tokens',
        openid: 'Request an OpenID Connect ID Token',
      },
      tokenUrl: 'https://hydra.demo.ory.sh/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getWellKnownJwksJsonRoute = createRoute({
  method: 'get',
  path: '/.well-known/jwks.json',
  tags: ['wellknown'],
  summary: 'Discover Well-Known JSON Web Keys',
  description:
    'This endpoint returns JSON Web Keys required to verifying OpenID Connect ID Tokens and,\nif enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like\n[node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.\n\nAdding custom keys requires first creating a keyset via the createJsonWebKeySet operation,\nand then configuring the webfinger.jwks.broadcast_keys configuration value to include the keyset name.',
  operationId: 'discoverJsonWebKeys',
  responses: {
    200: {
      description: 'jsonWebKeySet',
      content: { 'application/json': { schema: JsonWebKeySetSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getWellKnownOpenidConfigurationRoute = createRoute({
  method: 'get',
  path: '/.well-known/openid-configuration',
  tags: ['oidc'],
  summary: 'OpenID Connect Discovery',
  description:
    "A mechanism for an OpenID Connect Relying Party to discover the End-User's OpenID Provider and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.\n\nPopular libraries for OpenID Connect clients include oidc-client-js (JavaScript), go-oidc (Golang), and others.\nFor a full list of clients go here: https://openid.net/developers/certified/",
  operationId: 'discoverOidcConfiguration',
  responses: {
    200: {
      description: 'oidcConfiguration',
      content: { 'application/json': { schema: OidcConfigurationSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getAdminClientsRoute = createRoute({
  method: 'get',
  path: '/admin/clients',
  tags: ['oAuth2'],
  summary: 'List OAuth 2.0 Clients',
  description:
    'This endpoint lists all clients in the database, and never returns client secrets.\nAs a default it lists the first 100 clients.',
  operationId: 'listOAuth2Clients',
  request: {
    query: z.object({
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Items per Page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      client_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the clients to filter by.',
            in: 'query',
            name: 'client_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The owner of the clients to filter by.',
            in: 'query',
            name: 'owner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: ListOAuth2ClientsResponse, default: ErrorOAuth2DefaultResponse },
})

export const postAdminClientsRoute = createRoute({
  method: 'post',
  path: '/admin/clients',
  tags: ['oAuth2'],
  summary: 'Create OAuth 2.0 Client',
  description:
    'Create a new OAuth 2.0 client. If you pass `client_secret` the secret is used, otherwise a random secret\nis generated. The secret is echoed in the response. It is not possible to retrieve it later on.',
  operationId: 'createOAuth2Client',
  request: {
    body: {
      description: 'OAuth 2.0 Client Request Body',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    400: ErrorOAuth2BadRequestResponse,
    default: ErrorOAuth2DefaultResponse,
  },
})

export const getAdminClientsIdRoute = createRoute({
  method: 'get',
  path: '/admin/clients/{id}',
  tags: ['oAuth2'],
  summary: 'Get an OAuth 2.0 Client',
  description:
    'Get an OAuth 2.0 client by its ID. This endpoint never returns the client secret.\n\nOAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are\ngenerated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.',
  operationId: 'getOAuth2Client',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the OAuth 2.0 Client.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    default: ErrorOAuth2DefaultResponse,
  },
})

export const putAdminClientsIdRoute = createRoute({
  method: 'put',
  path: '/admin/clients/{id}',
  tags: ['oAuth2'],
  summary: 'Set OAuth 2.0 Client',
  description:
    'Replaces an existing OAuth 2.0 Client with the payload you send. If you pass `client_secret` the secret is used,\notherwise the existing secret is used. Rotated secrets will be cleared if you pass a new `client_secret`.\n\nIf set, the secret is echoed in the response. It is not possible to retrieve it later on.\n\nTo perform a seamless client secret rotation, use the `rotateOAuth2ClientSecret` endpoint instead.\n\nOAuth 2.0 Clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are\ngenerated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.',
  operationId: 'setOAuth2Client',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Client ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'OAuth 2.0 Client Request Body',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    400: ErrorOAuth2BadRequestResponse,
    404: ErrorOAuth2NotFoundResponse,
    default: ErrorOAuth2DefaultResponse,
  },
})

export const deleteAdminClientsIdRoute = createRoute({
  method: 'delete',
  path: '/admin/clients/{id}',
  tags: ['oAuth2'],
  summary: 'Delete OAuth 2.0 Client',
  description:
    'Delete an existing OAuth 2.0 Client by its ID.\n\nOAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are\ngenerated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.\n\nMake sure that this endpoint is well protected and only callable by first-party components.',
  operationId: 'deleteOAuth2Client',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the OAuth 2.0 Client.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'genericError',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
  },
})

export const patchAdminClientsIdRoute = createRoute({
  method: 'patch',
  path: '/admin/clients/{id}',
  tags: ['oAuth2'],
  summary: 'Patch OAuth 2.0 Client',
  description:
    'Patch an existing OAuth 2.0 Client using JSON Patch. If you update\n`client_secret`, the secret will be updated and returned via the API. This is\nthe only time you will be able to retrieve the client secret. Passing a new\n`client_secret` will clear all rotated secrets.\n\nTo perform a seamless client secret rotation, use the `rotateOAuth2ClientSecret` endpoint instead.\n\nOAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are\ngenerated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.',
  operationId: 'patchOAuth2Client',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the OAuth 2.0 Client.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'OAuth 2.0 Client JSON Patch Body',
      content: { 'application/json': { schema: JsonPatchDocumentSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    404: ErrorOAuth2NotFoundResponse,
    default: ErrorOAuth2DefaultResponse,
  },
})

export const putAdminClientsIdLifespansRoute = createRoute({
  method: 'put',
  path: '/admin/clients/{id}/lifespans',
  tags: ['oAuth2'],
  summary: 'Set OAuth2 Client Token Lifespans',
  description:
    'Set lifespans of different token types issued for this OAuth 2.0 client. Does not modify other fields.',
  operationId: 'setOAuth2ClientLifespans',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Client ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OAuth2ClientTokenLifespansSchema } } },
  },
  responses: {
    200: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    default: {
      description: 'genericError',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
  },
})

export const postAdminClientsIdSecretsRotateRoute = createRoute({
  method: 'post',
  path: '/admin/clients/{id}/secrets/rotate',
  tags: ['oAuth2'],
  summary: 'Rotate OAuth 2.0 Client Secret',
  description:
    "Rotates an OAuth 2.0 client's secrets. The old secret will remain valid for\nauthentication, allowing for zero-downtime secret rotations. A new secret\nwill be generated and returned in the response.\n\nUp to five rotated secrets are retained. Use the\n`deleteRotatedOAuth2ClientSecrets` endpoint to remove old rotated secrets\nwhen they are no longer needed.",
  operationId: 'rotateOAuth2ClientSecret',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Client ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    404: ErrorOAuth2NotFoundResponse,
    default: ErrorOAuth2DefaultResponse,
  },
})

export const deleteAdminClientsIdSecretsRotateRoute = createRoute({
  method: 'delete',
  path: '/admin/clients/{id}/secrets/rotate',
  tags: ['oAuth2'],
  summary: 'Delete Rotated OAuth 2.0 Client Secrets',
  description:
    'Removes all rotated secrets from an OAuth 2.0 client. This should be called after all services\nhave been updated to use the new secret and the old secrets are no longer needed.',
  operationId: 'deleteRotatedOAuth2ClientSecrets',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Client ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    404: ErrorOAuth2NotFoundResponse,
    default: ErrorOAuth2DefaultResponse,
  },
})

export const getAdminKeysSetRoute = createRoute({
  method: 'get',
  path: '/admin/keys/{set}',
  tags: ['jwk'],
  summary: 'Retrieve a JSON Web Key Set',
  description:
    'This endpoint can be used to retrieve JWK Sets stored in ORY Hydra.\n\nA JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.',
  operationId: 'getJsonWebKeySet',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            description: 'JSON Web Key Set ID',
            in: 'path',
            name: 'set',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'jsonWebKeySet',
      content: { 'application/json': { schema: JsonWebKeySetSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminKeysSetRoute = createRoute({
  method: 'put',
  path: '/admin/keys/{set}',
  tags: ['jwk'],
  summary: 'Update a JSON Web Key Set',
  description:
    'Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.\n\nThis operation replaces the entire JSON Web Key Set: keys that exist in the set but are not part of the request body are deleted. To add a newly generated key to the set while keeping the existing keys, use the `createJsonWebKeySet` operation (`POST /admin/keys/{set}`).\n\nA JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.',
  operationId: 'setJsonWebKeySet',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            description: 'The JSON Web Key Set ID',
            in: 'path',
            name: 'set',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JsonWebKeySetSchema } } },
  },
  responses: {
    200: {
      description: 'jsonWebKeySet',
      content: { 'application/json': { schema: JsonWebKeySetSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const postAdminKeysSetRoute = createRoute({
  method: 'post',
  path: '/admin/keys/{set}',
  tags: ['jwk'],
  summary: 'Create JSON Web Key',
  description:
    'This endpoint is capable of generating JSON Web Key Sets for you. There are different strategies available, such as symmetric cryptographic keys (HS256, HS512) and asymmetric cryptographic keys (RS256, ECDSA). If the specified JSON Web Key Set does not exist, it will be created.\n\nIf the set already exists, the newly generated key is added to it and all existing keys are kept. This allows you to rotate keys: tokens signed with an older key in the set remain verifiable. Exception: when Ory Hydra is configured to use a Hardware Security Module (HSM), generating a key replaces the set, which then contains only the new key. To replace a set and all of its keys instead, use the `setJsonWebKeySet` operation (`PUT /admin/keys/{set}`).\n\nA JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.',
  operationId: 'createJsonWebKeySet',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            description: 'The JSON Web Key Set ID',
            in: 'path',
            name: 'set',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateJsonWebKeySetSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'jsonWebKeySet',
      content: { 'application/json': { schema: JsonWebKeySetSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const deleteAdminKeysSetRoute = createRoute({
  method: 'delete',
  path: '/admin/keys/{set}',
  tags: ['jwk'],
  summary: 'Delete JSON Web Key Set',
  description:
    'Use this endpoint to delete a complete JSON Web Key Set and all the keys in that set.\n\nA JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.',
  operationId: 'deleteJsonWebKeySet',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            description: 'The JSON Web Key Set',
            in: 'path',
            name: 'set',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getAdminKeysSetKidRoute = createRoute({
  method: 'get',
  path: '/admin/keys/{set}/{kid}',
  tags: ['jwk'],
  summary: 'Get JSON Web Key',
  description:
    'This endpoint returns a singular JSON Web Key contained in a set. It is identified by the set and the specific key ID (kid).',
  operationId: 'getJsonWebKey',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            description: 'JSON Web Key Set ID',
            in: 'path',
            name: 'set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      kid: z
        .string()
        .openapi({
          param: {
            description: 'JSON Web Key ID',
            in: 'path',
            name: 'kid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'jsonWebKeySet',
      content: { 'application/json': { schema: JsonWebKeySetSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminKeysSetKidRoute = createRoute({
  method: 'put',
  path: '/admin/keys/{set}/{kid}',
  tags: ['jwk'],
  summary: 'Set JSON Web Key',
  description:
    'Use this method if you do not want to let Hydra generate the JWKs for you, but instead save your own.\n\nWarning: the key is created or updated under the `kid` given in the request body. The `{kid}` path parameter exists for historical reasons only: it is ignored and not validated against the body.\n\nA JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A JWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses this functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens), and allows storing user-defined keys as well.',
  operationId: 'setJsonWebKey',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            description: 'The JSON Web Key Set ID',
            in: 'path',
            name: 'set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      kid: z
        .string()
        .openapi({
          param: {
            description: 'JSON Web Key ID',
            in: 'path',
            name: 'kid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JsonWebKeySchema } } },
  },
  responses: {
    200: {
      description: 'jsonWebKey',
      content: { 'application/json': { schema: JsonWebKeySchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const deleteAdminKeysSetKidRoute = createRoute({
  method: 'delete',
  path: '/admin/keys/{set}/{kid}',
  tags: ['jwk'],
  summary: 'Delete JSON Web Key',
  description:
    'Use this endpoint to delete a single JSON Web Key.\n\nA JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. A\nJWK Set is a JSON data structure that represents a set of JWKs. A JSON Web Key is identified by its set and key id. ORY Hydra uses\nthis functionality to store cryptographic keys used for TLS and JSON Web Tokens (such as OpenID Connect ID tokens),\nand allows storing user-defined keys as well.',
  operationId: 'deleteJsonWebKey',
  request: {
    params: z.object({
      set: z
        .string()
        .openapi({
          param: {
            description: 'The JSON Web Key Set',
            in: 'path',
            name: 'set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      kid: z
        .string()
        .openapi({
          param: {
            description: 'The JSON Web Key ID (kid)',
            in: 'path',
            name: 'kid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getAdminOauth2AuthRequestsConsentRoute = createRoute({
  method: 'get',
  path: '/admin/oauth2/auth/requests/consent',
  tags: ['oAuth2'],
  summary: 'Get OAuth 2.0 Consent Request',
  description:
    "When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider\nto authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if\nthe OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject's behalf.\n\nThe consent challenge is appended to the consent provider's URL to which the subject's user-agent (browser) is redirected to. The consent\nprovider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted\nor rejected the request.\n\nThe default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please\nhead over to the OAuth 2.0 documentation.",
  operationId: 'getOAuth2ConsentRequest',
  request: {
    query: z.object({
      consent_challenge: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Consent Request Challenge',
            in: 'query',
            name: 'consent_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2ConsentRequest',
      content: { 'application/json': { schema: OAuth2ConsentRequestSchema } },
    },
    410: {
      description: 'oAuth2RedirectTo',
      content: { 'application/json': { schema: OAuth2RedirectToSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminOauth2AuthRequestsConsentAcceptRoute = createRoute({
  method: 'put',
  path: '/admin/oauth2/auth/requests/consent/accept',
  tags: ['oAuth2'],
  summary: 'Accept OAuth 2.0 Consent Request',
  description:
    "When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider\nto authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if\nthe OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject's behalf.\n\nThe consent challenge is appended to the consent provider's URL to which the subject's user-agent (browser) is redirected to. The consent\nprovider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted\nor rejected the request.\n\nThis endpoint tells Ory that the subject has authorized the OAuth 2.0 client to access resources on his/her behalf.\nThe consent provider includes additional information, such as session data for access and ID tokens, and if the\nconsent request should be used as basis for future requests.\n\nThe response contains a redirect URL which the consent provider should redirect the user-agent to.\n\nThe default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please\nhead over to the OAuth 2.0 documentation.",
  operationId: 'acceptOAuth2ConsentRequest',
  request: {
    query: z.object({
      consent_challenge: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Consent Request Challenge',
            in: 'query',
            name: 'consent_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptOAuth2ConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'oAuth2RedirectTo',
      content: { 'application/json': { schema: OAuth2RedirectToSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminOauth2AuthRequestsConsentRejectRoute = createRoute({
  method: 'put',
  path: '/admin/oauth2/auth/requests/consent/reject',
  tags: ['oAuth2'],
  summary: 'Reject OAuth 2.0 Consent Request',
  description:
    "When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider\nto authenticate the subject and then tell Ory now about it. If the subject authenticated, he/she must now be asked if\nthe OAuth 2.0 Client which initiated the flow should be allowed to access the resources on the subject's behalf.\n\nThe consent challenge is appended to the consent provider's URL to which the subject's user-agent (browser) is redirected to. The consent\nprovider uses that challenge to fetch information on the OAuth2 request and then tells Ory if the subject accepted\nor rejected the request.\n\nThis endpoint tells Ory that the subject has not authorized the OAuth 2.0 client to access resources on his/her behalf.\nThe consent provider must include a reason why the consent was not granted.\n\nThe response contains a redirect URL which the consent provider should redirect the user-agent to.\n\nThe default consent provider is available via the Ory Managed Account Experience. To customize the consent provider, please\nhead over to the OAuth 2.0 documentation.",
  operationId: 'rejectOAuth2ConsentRequest',
  request: {
    query: z.object({
      consent_challenge: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Consent Request Challenge',
            in: 'query',
            name: 'consent_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RejectOAuth2RequestSchema } } },
  },
  responses: {
    200: {
      description: 'oAuth2RedirectTo',
      content: { 'application/json': { schema: OAuth2RedirectToSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminOauth2AuthRequestsDeviceAcceptRoute = createRoute({
  method: 'put',
  path: '/admin/oauth2/auth/requests/device/accept',
  tags: ['oAuth2'],
  summary: 'Accepts a device grant user_code request',
  description: 'Accepts a device grant user_code request',
  operationId: 'acceptUserCodeRequest',
  request: {
    query: z.object({
      device_challenge: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'device_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptDeviceUserCodeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'oAuth2RedirectTo',
      content: { 'application/json': { schema: OAuth2RedirectToSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getAdminOauth2AuthRequestsLoginRoute = createRoute({
  method: 'get',
  path: '/admin/oauth2/auth/requests/login',
  tags: ['oAuth2'],
  summary: 'Get OAuth 2.0 Login Request',
  description:
    'When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider\nto authenticate the subject and then tell the Ory OAuth2 Service about it.\n\nPer default, the login provider is Ory itself. You may use a different login provider which needs to be a web-app\nyou write and host, and it must be able to authenticate ("show the subject a login screen")\na subject (in OAuth2 the proper name for subject is "resource owner").\n\nThe authentication challenge is appended to the login provider URL to which the subject\'s user-agent (browser) is redirected to. The login\nprovider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.',
  operationId: 'getOAuth2LoginRequest',
  request: {
    query: z.object({
      login_challenge: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Login Request Challenge',
            in: 'query',
            name: 'login_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2LoginRequest',
      content: { 'application/json': { schema: OAuth2LoginRequestSchema } },
    },
    410: {
      description: 'oAuth2RedirectTo',
      content: { 'application/json': { schema: OAuth2RedirectToSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminOauth2AuthRequestsLoginAcceptRoute = createRoute({
  method: 'put',
  path: '/admin/oauth2/auth/requests/login/accept',
  tags: ['oAuth2'],
  summary: 'Accept OAuth 2.0 Login Request',
  description:
    "When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider\nto authenticate the subject and then tell the Ory OAuth2 Service about it.\n\nThe authentication challenge is appended to the login provider URL to which the subject's user-agent (browser) is redirected to. The login\nprovider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.\n\nThis endpoint tells Ory that the subject has successfully authenticated and includes additional information such as\nthe subject's ID and if Ory should remember the subject's subject agent for future authentication attempts by setting\na cookie.\n\nThe response contains a redirect URL which the login provider should redirect the user-agent to.",
  operationId: 'acceptOAuth2LoginRequest',
  request: {
    query: z.object({
      login_challenge: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Login Request Challenge',
            in: 'query',
            name: 'login_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptOAuth2LoginRequestSchema } } },
  },
  responses: {
    200: {
      description: 'oAuth2RedirectTo',
      content: { 'application/json': { schema: OAuth2RedirectToSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminOauth2AuthRequestsLoginRejectRoute = createRoute({
  method: 'put',
  path: '/admin/oauth2/auth/requests/login/reject',
  tags: ['oAuth2'],
  summary: 'Reject OAuth 2.0 Login Request',
  description:
    "When an authorization code, hybrid, or implicit OAuth 2.0 Flow is initiated, Ory asks the login provider\nto authenticate the subject and then tell the Ory OAuth2 Service about it.\n\nThe authentication challenge is appended to the login provider URL to which the subject's user-agent (browser) is redirected to. The login\nprovider uses that challenge to fetch information on the OAuth2 request and then accept or reject the requested authentication process.\n\nThis endpoint tells Ory that the subject has not authenticated and includes a reason why the authentication\nwas denied.\n\nThe response contains a redirect URL which the login provider should redirect the user-agent to.",
  operationId: 'rejectOAuth2LoginRequest',
  request: {
    query: z.object({
      login_challenge: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Login Request Challenge',
            in: 'query',
            name: 'login_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RejectOAuth2RequestSchema } } },
  },
  responses: {
    200: {
      description: 'oAuth2RedirectTo',
      content: { 'application/json': { schema: OAuth2RedirectToSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getAdminOauth2AuthRequestsLogoutRoute = createRoute({
  method: 'get',
  path: '/admin/oauth2/auth/requests/logout',
  tags: ['oAuth2'],
  summary: 'Get OAuth 2.0 Session Logout Request',
  description: 'Use this endpoint to fetch an Ory OAuth 2.0 logout request.',
  operationId: 'getOAuth2LogoutRequest',
  request: {
    query: z.object({
      logout_challenge: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'logout_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2LogoutRequest',
      content: { 'application/json': { schema: OAuth2LogoutRequestSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminOauth2AuthRequestsLogoutAcceptRoute = createRoute({
  method: 'put',
  path: '/admin/oauth2/auth/requests/logout/accept',
  tags: ['oAuth2'],
  summary: 'Accept OAuth 2.0 Session Logout Request',
  description:
    'When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to confirm that logout request.\n\nThe response contains a redirect URL which the consent provider should redirect the user-agent to.',
  operationId: 'acceptOAuth2LogoutRequest',
  request: {
    query: z.object({
      logout_challenge: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Logout Request Challenge',
            in: 'query',
            name: 'logout_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2RedirectTo',
      content: { 'application/json': { schema: OAuth2RedirectToSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const putAdminOauth2AuthRequestsLogoutRejectRoute = createRoute({
  method: 'put',
  path: '/admin/oauth2/auth/requests/logout/reject',
  tags: ['oAuth2'],
  summary: 'Reject OAuth 2.0 Session Logout Request',
  description:
    'When a user or an application requests Ory OAuth 2.0 to remove the session state of a subject, this endpoint is used to deny that logout request.\nNo HTTP request body is required.\n\nThe response is empty as the logout provider has to chose what action to perform next.',
  operationId: 'rejectOAuth2LogoutRequest',
  request: {
    query: z.object({
      logout_challenge: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'logout_challenge',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getAdminOauth2AuthSessionsConsentRoute = createRoute({
  method: 'get',
  path: '/admin/oauth2/auth/sessions/consent',
  tags: ['oAuth2'],
  summary: 'List OAuth 2.0 Consent Sessions of a Subject',
  description:
    "This endpoint lists all subject's granted consent sessions, including client and granted scope.\nIf the subject is unknown or has not granted any consent sessions yet, the endpoint returns an\nempty JSON array with status code 200 OK.",
  operationId: 'listOAuth2ConsentSessions',
  request: {
    query: z.object({
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(500n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Items per Page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subject: z
        .string()
        .openapi({
          param: {
            description: 'The subject to list the consent sessions for.',
            in: 'query',
            name: 'subject',
            required: true,
            schema: { type: 'string' },
          },
        }),
      login_session_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The login session id to list the consent sessions for.',
            in: 'query',
            name: 'login_session_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2ConsentSessions',
      content: { 'application/json': { schema: OAuth2ConsentSessionsSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const deleteAdminOauth2AuthSessionsConsentRoute = createRoute({
  method: 'delete',
  path: '/admin/oauth2/auth/sessions/consent',
  tags: ['oAuth2'],
  summary: 'Revoke OAuth 2.0 Consent Sessions of a Subject',
  description:
    "This endpoint revokes a subject's granted consent sessions and invalidates all\nassociated OAuth 2.0 Access Tokens. You may also only revoke sessions for a specific OAuth 2.0 Client ID.",
  operationId: 'revokeOAuth2ConsentSessions',
  request: {
    query: z.object({
      subject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'OAuth 2.0 Consent Subject\n\nThe subject whose consent sessions should be deleted.',
            in: 'query',
            name: 'subject',
            schema: { type: 'string' },
            required: false,
          },
        }),
      client: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'OAuth 2.0 Client ID\n\nIf set, deletes only those consent sessions that have been granted to the specified OAuth 2.0 Client ID.',
            in: 'query',
            name: 'client',
            schema: { type: 'string' },
            required: false,
          },
        }),
      consent_request_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Consent Request ID\n\nIf set, revoke all token chains derived from this particular consent request ID.',
            in: 'query',
            name: 'consent_request_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Revoke All Consent Sessions\n\nIf set to `true` deletes all consent sessions by the Subject that have been granted.',
            in: 'query',
            name: 'all',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const deleteAdminOauth2AuthSessionsLoginRoute = createRoute({
  method: 'delete',
  path: '/admin/oauth2/auth/sessions/login',
  tags: ['oAuth2'],
  summary: 'Revokes OAuth 2.0 Login Sessions by either a Subject or a SessionID',
  description:
    'This endpoint invalidates authentication sessions. After revoking the authentication session(s), the subject\nhas to re-authenticate at the Ory OAuth2 Provider. This endpoint does not invalidate any tokens.\n\nIf you send the subject in a query param, all authentication sessions that belong to that subject are revoked.\nNo OpenID Connect Front- or Back-channel logout is performed in this case.\n\nAlternatively, you can send a SessionID via `sid` query param, in which case, only the session that is connected\nto that SessionID is revoked. OpenID Connect Back-channel logout is performed in this case.\n\nWhen using Ory for the identity provider, the login provider will also invalidate the session cookie.',
  operationId: 'revokeOAuth2LoginSessions',
  request: {
    query: z.object({
      subject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'OAuth 2.0 Subject\n\nThe subject to revoke authentication sessions for.',
            in: 'query',
            name: 'subject',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Login Session ID\n\nThe login session to revoke.',
            in: 'query',
            name: 'sid',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const postAdminOauth2IntrospectRoute = createRoute({
  method: 'post',
  path: '/admin/oauth2/introspect',
  tags: ['oAuth2'],
  summary: 'Introspect OAuth2 Access and Refresh Tokens',
  description:
    'The introspection endpoint allows to check if a token (both refresh and access) is active or not. An active token\nis neither expired nor revoked. If a token is active, additional information on the token will be included. You can\nset additional data for a token by setting `session.access_token` during the consent flow.',
  operationId: 'introspectOAuth2Token',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional, space separated list of required scopes. If the access token was not granted one of the\nscopes, the result of active will be false.',
                  'x-formData-name': 'scope',
                }),
              token: z
                .string()
                .openapi({
                  description:
                    'The string value of the token. For access tokens, this\nis the "access_token" value returned from the token endpoint\ndefined in OAuth 2.0. For refresh tokens, this is the "refresh_token"\nvalue returned.',
                  required: ['token'],
                  'x-formData-name': 'token',
                }),
            })
            .openapi({ required: ['token'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'introspectedOAuth2Token',
      content: { 'application/json': { schema: IntrospectedOAuth2TokenSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const deleteAdminOauth2TokensRoute = createRoute({
  method: 'delete',
  path: '/admin/oauth2/tokens',
  tags: ['oAuth2'],
  summary: 'Delete OAuth 2.0 Access Tokens from specific OAuth 2.0 Client',
  description:
    'This endpoint deletes OAuth2 access tokens issued to an OAuth 2.0 Client from the database.',
  operationId: 'deleteOAuth2Token',
  request: {
    query: z.object({
      client_id: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Client ID',
            in: 'query',
            name: 'client_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getAdminTrustGrantsJwtBearerIssuersRoute = createRoute({
  method: 'get',
  path: '/admin/trust/grants/jwt-bearer/issuers',
  tags: ['oAuth2'],
  summary: 'List Trusted OAuth2 JWT Bearer Grant Type Issuers',
  description: 'Use this endpoint to list all trusted JWT Bearer Grant Type Issuers.',
  operationId: 'listTrustedOAuth2JwtGrantIssuers',
  request: {
    query: z.object({
      page_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(1000n))
        .default(250n)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Items per Page\n\nThis is the number of items per page to return.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_size',
            schema: { default: 250, format: 'int64', maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Next Page Token\n\nThe next page token.\nFor details on pagination please head over to the [pagination documentation](https://www.ory.com/docs/ecosystem/api-design#pagination).',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      issuer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If optional "issuer" is supplied, only jwt-bearer grants with this issuer will be returned.',
            in: 'query',
            name: 'issuer',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'trustedOAuth2JwtGrantIssuers',
      content: { 'application/json': { schema: TrustedOAuth2JwtGrantIssuersSchema } },
    },
    default: {
      description: 'genericError',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
  },
})

export const postAdminTrustGrantsJwtBearerIssuersRoute = createRoute({
  method: 'post',
  path: '/admin/trust/grants/jwt-bearer/issuers',
  tags: ['oAuth2'],
  summary: 'Trust OAuth2 JWT Bearer Grant Type Issuer',
  description:
    'Use this endpoint to establish a trust relationship for a JWT issuer\nto perform JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication\nand Authorization Grants [RFC7523](https://datatracker.ietf.org/doc/html/rfc7523).',
  operationId: 'trustOAuth2JwtGrantIssuer',
  request: {
    body: { content: { 'application/json': { schema: TrustOAuth2JwtGrantIssuerSchema } } },
  },
  responses: {
    201: {
      description: 'trustedOAuth2JwtGrantIssuer',
      content: { 'application/json': { schema: TrustedOAuth2JwtGrantIssuerSchema } },
    },
    default: {
      description: 'genericError',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
  },
})

export const getAdminTrustGrantsJwtBearerIssuersIdRoute = createRoute({
  method: 'get',
  path: '/admin/trust/grants/jwt-bearer/issuers/{id}',
  tags: ['oAuth2'],
  summary: 'Get Trusted OAuth2 JWT Bearer Grant Type Issuer',
  description:
    'Use this endpoint to get a trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you\ncreated the trust relationship.',
  operationId: 'getTrustedOAuth2JwtGrantIssuer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the desired grant',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'trustedOAuth2JwtGrantIssuer',
      content: { 'application/json': { schema: TrustedOAuth2JwtGrantIssuerSchema } },
    },
    default: {
      description: 'genericError',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
  },
})

export const deleteAdminTrustGrantsJwtBearerIssuersIdRoute = createRoute({
  method: 'delete',
  path: '/admin/trust/grants/jwt-bearer/issuers/{id}',
  tags: ['oAuth2'],
  summary: 'Delete Trusted OAuth2 JWT Bearer Grant Type Issuer',
  description:
    'Use this endpoint to delete trusted JWT Bearer Grant Type Issuer. The ID is the one returned when you\ncreated the trust relationship.\n\nOnce deleted, the associated issuer will no longer be able to perform the JSON Web Token (JWT) Profile\nfor OAuth 2.0 Client Authentication and Authorization Grant.',
  operationId: 'deleteTrustedOAuth2JwtGrantIssuer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the desired grant',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'genericError',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
  },
})

export const postCredentialsRoute = createRoute({
  method: 'post',
  path: '/credentials',
  tags: ['oidc'],
  summary: 'Issues a Verifiable Credential',
  description:
    'This endpoint creates a verifiable credential that attests that the user\nauthenticated with the provided access token owns a certain public/private key\npair.\n\nMore information can be found at\nhttps://openid.net/specs/openid-connect-userinfo-vc-1_0.html.',
  operationId: 'createVerifiableCredential',
  request: {
    body: {
      content: { 'application/json': { schema: CreateVerifiableCredentialRequestBodySchema } },
    },
  },
  responses: {
    200: {
      description: 'verifiableCredentialResponse',
      content: { 'application/json': { schema: VerifiableCredentialResponseSchema } },
    },
    400: {
      description: 'verifiableCredentialPrimingResponse',
      content: { 'application/json': { schema: VerifiableCredentialPrimingResponseSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getHealthAliveRoute = createRoute({
  method: 'get',
  path: '/health/alive',
  tags: ['metadata'],
  summary: 'Check HTTP Server Status',
  description:
    'This endpoint returns a HTTP 200 status code when Ory Hydra is accepting incoming\nHTTP requests. This status does currently not include checks whether the database connection is working.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of this service, the health status will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'isAlive',
  responses: {
    200: {
      description: 'Ory Hydra is ready to accept connections.',
      content: { 'application/json': { schema: HealthStatusSchema } },
    },
    500: {
      description: 'genericError',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
  },
})

export const getHealthReadyRoute = createRoute({
  method: 'get',
  path: '/health/ready',
  tags: ['metadata'],
  summary: 'Check HTTP Server and Database Status',
  description:
    'This endpoint returns a HTTP 200 status code when Ory Hydra is up running and the environment dependencies (e.g.\nthe database) are responsive as well.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of Ory Hydra, the health status will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'isReady',
  responses: {
    200: {
      description: 'Ory Hydra is ready to accept requests.',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ description: 'Always "ok".' }) })
            .openapi({ required: [] }),
        },
      },
    },
    503: {
      description: 'Ory Kratos is not yet ready to accept requests.',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description: 'Errors contains a list of errors that caused the not ready status.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getOauth2AuthRoute = createRoute({
  method: 'get',
  path: '/oauth2/auth',
  tags: ['oAuth2'],
  summary: 'OAuth 2.0 Authorize Endpoint',
  description:
    'Use open source libraries to perform OAuth 2.0 and OpenID Connect\navailable for any programming language. You can find a list of libraries at https://oauth.net/code/\n\nThis endpoint should not be used via the Ory SDK and is only included for technical reasons.\nInstead, use one of the libraries linked above.',
  operationId: 'oAuth2Authorize',
  responses: {
    302: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const postOauth2DeviceAuthRoute = createRoute({
  method: 'post',
  path: '/oauth2/device/auth',
  tags: ['oAuth2'],
  summary: 'The OAuth 2.0 Device Authorize Endpoint',
  description:
    'This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows.\nOAuth2 is a very popular protocol and a library for your programming language will exist.\n\nTo learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc8628',
  operationId: 'oAuth2DeviceFlow',
  responses: {
    200: {
      description: 'deviceAuthorization',
      content: { 'application/json': { schema: DeviceAuthorizationSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const getOauth2DeviceVerifyRoute = createRoute({
  method: 'get',
  path: '/oauth2/device/verify',
  tags: ['oAuth2'],
  summary: 'OAuth 2.0 Device Verification Endpoint',
  description:
    'This is the device user verification endpoint. The user is redirected here when trying to log in using the device flow.',
  operationId: 'performOAuth2DeviceVerificationFlow',
  responses: {
    302: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
})

export const postOauth2RegisterRoute = createRoute({
  method: 'post',
  path: '/oauth2/register',
  tags: ['oidc'],
  summary: 'Register OAuth2 Client using OpenID Dynamic Client Registration',
  description:
    'This endpoint behaves like the administrative counterpart (`createOAuth2Client`) but is capable of facing the\npublic internet directly and can be used in self-service. It implements the OpenID Connect\nDynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint\nis disabled by default. It can be enabled by an administrator.\n\nPlease note that using this endpoint you are not able to choose the `client_secret` nor the `client_id` as those\nvalues will be server generated when specifying `token_endpoint_auth_method` as `client_secret_basic` or\n`client_secret_post`.\n\nThe `client_secret` will be returned in the response and you will not be able to retrieve it later on.\nWrite the secret down and keep it somewhere safe.',
  operationId: 'createOidcDynamicClient',
  request: {
    body: {
      description: 'Dynamic Client Registration Request Body',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    400: ErrorOAuth2BadRequestResponse,
    default: ErrorOAuth2DefaultResponse,
  },
})

export const getOauth2RegisterIdRoute = createRoute({
  method: 'get',
  path: '/oauth2/register/{id}',
  tags: ['oidc'],
  summary: 'Get OAuth2 Client using OpenID Dynamic Client Registration',
  description:
    "This endpoint behaves like the administrative counterpart (`getOAuth2Client`) but is capable of facing the\npublic internet directly and can be used in self-service. It implements the OpenID Connect\nDynamic Client Registration Protocol.\n\nTo use this endpoint, you will need to present the client's authentication credentials. If the OAuth2 Client\nuses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query.\nIf it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.",
  operationId: 'getOidcDynamicClient',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the OAuth 2.0 Client.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    default: ErrorOAuth2DefaultResponse,
  },
  security: [{ bearer: [] }],
})

export const putOauth2RegisterIdRoute = createRoute({
  method: 'put',
  path: '/oauth2/register/{id}',
  tags: ['oidc'],
  summary: 'Set OAuth2 Client using OpenID Dynamic Client Registration',
  description:
    "This endpoint behaves like the administrative counterpart (`setOAuth2Client`) but is capable of facing the\npublic internet directly to be used by third parties. It implements the OpenID Connect\nDynamic Client Registration Protocol.\n\nThis feature is disabled per default. It can be enabled by a system administrator.\n\nIf you pass `client_secret` the secret is used, otherwise the existing secret is used. If set, the secret is echoed in the response.\nIt is not possible to retrieve it later on.\n\nTo use this endpoint, you will need to present the client's authentication credentials. If the OAuth2 Client\nuses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query.\nIf it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.\n\nOAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are\ngenerated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.",
  operationId: 'setOidcDynamicClient',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'OAuth 2.0 Client ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'OAuth 2.0 Client Request Body',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'oAuth2Client',
      content: { 'application/json': { schema: OAuth2ClientSchema } },
    },
    404: ErrorOAuth2NotFoundResponse,
    default: ErrorOAuth2DefaultResponse,
  },
  security: [{ bearer: [] }],
})

export const deleteOauth2RegisterIdRoute = createRoute({
  method: 'delete',
  path: '/oauth2/register/{id}',
  tags: ['oidc'],
  summary:
    'Delete OAuth 2.0 Client using the OpenID Dynamic Client Registration Management Protocol',
  description:
    "This endpoint behaves like the administrative counterpart (`deleteOAuth2Client`) but is capable of facing the\npublic internet directly and can be used in self-service. It implements the OpenID Connect\nDynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint\nis disabled by default. It can be enabled by an administrator.\n\nTo use this endpoint, you will need to present the client's authentication credentials. If the OAuth2 Client\nuses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query.\nIf it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.\n\nOAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are\ngenerated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.",
  operationId: 'deleteOidcDynamicClient',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the OAuth 2.0 Client.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: EmptyResponseResponse,
    default: {
      description: 'genericError',
      content: { 'application/json': { schema: GenericErrorSchema } },
    },
  },
  security: [{ bearer: [] }],
})

export const postOauth2RevokeRoute = createRoute({
  method: 'post',
  path: '/oauth2/revoke',
  tags: ['oAuth2'],
  summary: 'Revoke OAuth 2.0 Access or Refresh Token',
  description:
    'Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no\nlonger be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token.\nRevoking a refresh token also invalidates the access token that was created with it. A token may only be revoked by\nthe client the token was generated for.',
  operationId: 'revokeOAuth2Token',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z.string().exactOptional().openapi({ 'x-formData-name': 'client_id' }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({ 'x-formData-name': 'client_secret' }),
              token: z.string().openapi({ required: ['token'], 'x-formData-name': 'token' }),
            })
            .openapi({ required: ['token'] }),
        },
      },
    },
  },
  responses: {
    200: EmptyResponseResponse,
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
  security: [{ basic: [] }, { oauth2: [] }],
})

export const getOauth2SessionsLogoutRoute = createRoute({
  method: 'get',
  path: '/oauth2/sessions/logout',
  tags: ['oidc'],
  summary: 'OpenID Connect Front- and Back-channel Enabled Logout',
  description:
    'This endpoint initiates and completes user logout at the Ory OAuth2 & OpenID provider and initiates OpenID Connect Front- / Back-channel logout:\n\nhttps://openid.net/specs/openid-connect-frontchannel-1_0.html\nhttps://openid.net/specs/openid-connect-backchannel-1_0.html\n\nBack-channel logout is performed asynchronously and does not affect logout flow.',
  operationId: 'revokeOidcSession',
  responses: { 302: EmptyResponseResponse },
})

export const postOauth2TokenRoute = createRoute({
  method: 'post',
  path: '/oauth2/token',
  tags: ['oAuth2'],
  summary: 'The OAuth 2.0 Token Endpoint',
  description:
    'Use open source libraries to perform OAuth 2.0 and OpenID Connect\navailable for any programming language. You can find a list of libraries here https://oauth.net/code/\n\nThis endpoint should not be used via the Ory SDK and is only included for technical reasons.\nInstead, use one of the libraries linked above.',
  operationId: 'oauth2TokenExchange',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z.string().exactOptional().openapi({ 'x-formData-name': 'client_id' }),
              code: z.string().exactOptional().openapi({ 'x-formData-name': 'code' }),
              grant_type: z
                .string()
                .openapi({ required: ['grant_type'], 'x-formData-name': 'grant_type' }),
              redirect_uri: z
                .string()
                .exactOptional()
                .openapi({ 'x-formData-name': 'redirect_uri' }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({ 'x-formData-name': 'refresh_token' }),
            })
            .openapi({ required: ['grant_type'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'oAuth2TokenExchange',
      content: { 'application/json': { schema: OAuth2TokenExchangeSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
  security: [{ basic: [] }, { oauth2: [] }],
})

export const getUserinfoRoute = createRoute({
  method: 'get',
  path: '/userinfo',
  tags: ['oidc'],
  summary: 'OpenID Connect Userinfo',
  description:
    "This endpoint returns the payload of the ID Token, including `session.id_token` values, of\nthe provided OAuth 2.0 Access Token's consent request.\n\nIn the case of authentication error, a WWW-Authenticate header might be set in the response\nwith more information about the error. See [the spec](https://datatracker.ietf.org/doc/html/rfc6750#section-3)\nfor more details about header format.",
  operationId: 'getOidcUserInfo',
  responses: {
    200: {
      description: 'oidcUserInfo',
      content: { 'application/json': { schema: OidcUserInfoSchema } },
    },
    default: {
      description: 'errorOAuth2',
      content: { 'application/json': { schema: ErrorOAuth2Schema } },
    },
  },
  security: [{ oauth2: [] }],
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['metadata'],
  summary: 'Return Running Software Version.',
  description:
    'This endpoint returns the version of Ory Hydra.\n\nIf the service supports TLS Edge Termination, this endpoint does not require the\n`X-Forwarded-Proto` header to be set.\n\nBe aware that if you are running multiple nodes of this service, the version will never\nrefer to the cluster state, only to a single instance.',
  operationId: 'getVersion',
  responses: {
    200: {
      description: 'Returns the Ory Hydra version.',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .string()
                .exactOptional()
                .openapi({ description: 'The version of Ory Hydra.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
