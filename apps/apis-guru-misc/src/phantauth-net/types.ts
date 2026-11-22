declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/client': {
      $post: {
        input: {
          json: {
            '@id'?: string | undefined
            client_id: string
            client_name?: string | undefined
            client_secret?: string | undefined
            client_uri?: string | undefined
            contacts?: { [x: string]: unknown }[] | undefined
            grant_types?: { [x: string]: unknown }[] | undefined
            jwks?: { [x: string]: unknown }[] | undefined
            jwks_uri?: string | undefined
            logo_email?: string | undefined
            logo_uri?: string | undefined
            policy_uri?: string | undefined
            redirect_uris?: { [x: string]: unknown }[] | undefined
            response_types?: { [x: string]: unknown }[] | undefined
            scope?: string | undefined
            software_id?: string | undefined
            software_version?: string | undefined
            token_endpoint_auth_method?: string | undefined
            tos_uri?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/client/:client_id': {
      $get: {
        input: { param: { client_id: string } }
        output: {
          '@id'?: string | undefined
          client_id: string
          client_name?: string | undefined
          client_secret?: string | undefined
          client_uri?: string | undefined
          contacts?: { [x: string]: unknown }[] | undefined
          grant_types?: { [x: string]: unknown }[] | undefined
          jwks?: { [x: string]: unknown }[] | undefined
          jwks_uri?: string | undefined
          logo_email?: string | undefined
          logo_uri?: string | undefined
          policy_uri?: string | undefined
          redirect_uris?: { [x: string]: unknown }[] | undefined
          response_types?: { [x: string]: unknown }[] | undefined
          scope?: string | undefined
          software_id?: string | undefined
          software_version?: string | undefined
          token_endpoint_auth_method?: string | undefined
          tos_uri?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/client/:client_id/token/:kind': {
      $get: {
        input: { param: { client_id: string; kind: "'registration'" | "'selfie'" | "'plain'" } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/domain/:domainname': {
      $get: {
        input: { param: { domainname: string } }
        output: {
          '@id'?: string | undefined
          logo?: string | undefined
          members?: { [x: string]: unknown }[] | undefined
          name?: string | undefined
          profile?: string | undefined
          sub?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/fleet/:fleetname': {
      $get: {
        input: { param: { fleetname: string } }
        output: {
          '@id'?: string | undefined
          logo?: string | undefined
          logo_email?: string | undefined
          members?: { [x: string]: unknown }[] | undefined
          name?: string | undefined
          profile?: string | undefined
          sub: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/team/:teamname': {
      $get: {
        input: { param: { teamname: string } }
        output: {
          '@id'?: string | undefined
          logo?: string | undefined
          logo_email?: string | undefined
          members?: { [x: string]: unknown }[] | undefined
          name?: string | undefined
          profile?: string | undefined
          sub: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenant/:tenantname': {
      $get: {
        input: { param: { tenantname: string } }
        output: {
          '@id'?: string | undefined
          about?: string | undefined
          attribution?: string | undefined
          depot?: string | undefined
          depots?: { [x: string]: unknown }[] | undefined
          domain?: boolean | undefined
          factories?: { [x: string]: unknown }[] | undefined
          factory?: string | undefined
          favicon?: string | undefined
          issuer: string
          logo?: string | undefined
          name?: string | undefined
          script?: string | undefined
          sheet?: string | undefined
          sub: string
          subtenant?: boolean | undefined
          summary?: string | undefined
          template?: string | undefined
          theme?: string | undefined
          userinfo?: string | undefined
          website?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user': {
      $post: {
        input: {
          json: {
            '@id'?: string | undefined
            address?:
              | {
                  country?: string | undefined
                  formatted?: string | undefined
                  locality?: string | undefined
                  postal_code?: string | undefined
                  region?: string | undefined
                  street_address?: string | undefined
                }
              | undefined
            birthdate?: string | undefined
            email?: string | undefined
            email_verified?: boolean | undefined
            family_name?: string | undefined
            gender?: string | undefined
            given_name?: string | undefined
            locale?: string | undefined
            me?: string | undefined
            middle_name?: string | undefined
            name?: string | undefined
            nickname?: string | undefined
            password?: string | undefined
            phone_number?: string | undefined
            phone_number_verified?: boolean | undefined
            picture?: string | undefined
            preferred_username?: string | undefined
            profile?: string | undefined
            sub: string
            uid?: string | undefined
            updated_at?: number | undefined
            webmail?: string | undefined
            website?: string | undefined
            zoneinfo?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/user/:username': {
      $get: {
        input: { param: { username: string } }
        output: {
          '@id'?: string | undefined
          address?:
            | {
                country?: string | undefined
                formatted?: string | undefined
                locality?: string | undefined
                postal_code?: string | undefined
                region?: string | undefined
                street_address?: string | undefined
              }
            | undefined
          birthdate?: string | undefined
          email?: string | undefined
          email_verified?: boolean | undefined
          family_name?: string | undefined
          gender?: string | undefined
          given_name?: string | undefined
          locale?: string | undefined
          me?: string | undefined
          middle_name?: string | undefined
          name?: string | undefined
          nickname?: string | undefined
          password?: string | undefined
          phone_number?: string | undefined
          phone_number_verified?: boolean | undefined
          picture?: string | undefined
          preferred_username?: string | undefined
          profile?: string | undefined
          sub: string
          uid?: string | undefined
          updated_at?: number | undefined
          webmail?: string | undefined
          website?: string | undefined
          zoneinfo?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:username/token/:kind': {
      $get: {
        input: {
          param: {
            username: string
            kind: "'access'" | "'refresh'" | "'authorization'" | "'id'" | "'selfie'" | "'plain'"
          }
        } & { query: { scope?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
