type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type UserDetailsScope = 'v2-private' | 'v2-local' | 'v2-federated' | 'v2-published'
type UserDetailsQuota = {
  free?: number | bigint | undefined
  quota?: number | bigint | string | undefined
  relative?: number | bigint | undefined
  total?: number | bigint | undefined
  used?: number | bigint | undefined
}
type UserDetails = {
  additional_mail: string[]
  additional_mailScope?: UserDetailsScope[] | undefined
  address: string
  addressScope?: UserDetailsScope | undefined
  avatarScope?: UserDetailsScope | undefined
  backend: string
  backendCapabilities: { setDisplayName: boolean; setPassword: boolean }
  biography: string
  biographyScope?: UserDetailsScope | undefined
  'display-name': string
  displayname: string
  displaynameScope?: UserDetailsScope | undefined
  email: string | null
  emailScope?: UserDetailsScope | undefined
  enabled?: boolean | undefined
  fediverse: string
  fediverseScope?: UserDetailsScope | undefined
  groups: string[]
  headline: string
  headlineScope?: UserDetailsScope | undefined
  id: string
  language: string
  firstLoginTimestamp: bigint
  lastLoginTimestamp: bigint
  lastLogin: bigint
  locale: string
  manager: string
  notify_email: string | null
  organisation: string
  organisationScope?: UserDetailsScope | undefined
  phone: string
  phoneScope?: UserDetailsScope | undefined
  profile_enabled: string
  profile_enabledScope?: UserDetailsScope | undefined
  pronouns: string
  pronounsScope?: UserDetailsScope | undefined
  quota: UserDetailsQuota
  role: string
  roleScope?: UserDetailsScope | undefined
  storageLocation?: string | undefined
  subadmin: string[]
  timezone: string
  twitter: string
  twitterScope?: UserDetailsScope | undefined
  bluesky: string
  blueskyScope?: UserDetailsScope | undefined
  website: string
  websiteScope?: UserDetailsScope | undefined
}
type GroupDetails = {
  id: string
  displayname: string
  usercount: boolean | bigint
  disabled: boolean | bigint
  canAdd: boolean
  canRemove: boolean
}
type UserDetailsGroupDisplayname = { id: string; displayname: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/cloud/apps': {
      $get:
        | {
            input: { query: { filter?: 'enabled' | 'disabled' | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { apps: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: 'enabled' | 'disabled' | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { filter?: 'enabled' | 'disabled' | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/cloud/apps/:app': {
      $get:
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { [x: string]: { [x: string]: unknown } | null } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/cloud/groups/:groupId/subadmins': {
      $get:
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/cloud/groups': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { groupid: string; displayname?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { groupid: string; displayname?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { groupid: string; displayname?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { groups: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/groups/:groupId': {
      $put:
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { key: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { key: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { key: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { users: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/recent': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
                enabled?: (boolean | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { users: { [x: string]: UserDetails | { id: string } } } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
                enabled?: (boolean | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
                enabled?: (boolean | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/subadmins': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { groupid: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { groupid: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { groupid: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { param: { userId: string } } & { query: { groupid: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { groupid: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { groupid: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { data: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app': {
      $get:
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { data: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app: string } } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | { ocs: { meta: OCSMeta; data: { data: { message: string } } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/:app/:key': {
      $get:
        | {
            input: { param: { app: string; key: string } } & {
              query: { defaultValue?: string | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { data: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app: string; key: string } } & {
              query: { defaultValue?: string | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app: string; key: string } } & {
              query: { defaultValue?: string | undefined }
            } & { header: { 'OCS-APIRequest': boolean } }
            output:
              | { ocs: { meta: OCSMeta; data: { data: { message: string } } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $delete:
        | {
            input: { param: { app: string; key: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app: string; key: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { data: { message: string } } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app: string; key: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app: string; key: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output:
              | { ocs: { meta: OCSMeta; data: { data: { message: string } } } }
              | { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { app: string; key: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { value: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app: string; key: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { value: string } }
            output: { ocs: { meta: OCSMeta; data: { data: { message: string } } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { app: string; key: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { value: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app: string; key: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { value: string } }
            output: { ocs: { meta: OCSMeta; data: { data: { message: string } } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/cloud/groups/details': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { groups: GroupDetails[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/groups/:groupId/users': {
      $get:
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { users: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { groupId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/cloud/groups/:groupId/users/details': {
      $get:
        | {
            input: { param: { groupId: string } } & {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
                enabled?: (boolean | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  users: { [x: string]: UserDetails | { id: string } }
                  groups: UserDetailsGroupDisplayname[]
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
                enabled?: (boolean | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { users: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                userid: string
                password?: string | undefined
                displayName?: string | undefined
                email?: string | undefined
                groups?: string[] | undefined
                subadmin?: string[] | undefined
                quota?: string | undefined
                language?: string | undefined
                manager?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { id: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                userid: string
                password?: string | undefined
                displayName?: string | undefined
                email?: string | undefined
                groups?: string[] | undefined
                subadmin?: string[] | undefined
                quota?: string | undefined
                language?: string | undefined
                manager?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                userid: string
                password?: string | undefined
                displayName?: string | undefined
                email?: string | undefined
                groups?: string[] | undefined
                subadmin?: string[] | undefined
                quota?: string | undefined
                language?: string | undefined
                manager?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/details': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
                enabled?: (boolean | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: {
                meta: OCSMeta
                data: {
                  users: { [x: string]: UserDetails | { id: string } }
                  groups: UserDetailsGroupDisplayname[]
                }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
                enabled?: (boolean | null) | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/disabled': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: {
              ocs: { meta: OCSMeta; data: { users: { [x: string]: UserDetails | { id: string } } } }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: (bigint | null) | undefined
                offset?: bigint | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/search/by-phone': {
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { location: string; search: { [x: string]: string[] } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { location: string; search: { [x: string]: string[] } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: { location: string; search: { [x: string]: string[] } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: UserDetails } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { key: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { key: string; value: string }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                displayName?: (string | null) | undefined
                password?: (string | null) | undefined
                email?: (string | null) | undefined
                quota?: (string | null) | undefined
                language?: (string | null) | undefined
                manager?: (string | null) | undefined
                groups?: (string[] | null) | undefined
                subadminGroups?: (string[] | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: UserDetails } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                displayName?: (string | null) | undefined
                password?: (string | null) | undefined
                email?: (string | null) | undefined
                quota?: (string | null) | undefined
                language?: (string | null) | undefined
                manager?: (string | null) | undefined
                groups?: (string[] | null) | undefined
                subadminGroups?: (string[] | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                displayName?: (string | null) | undefined
                password?: (string | null) | undefined
                email?: (string | null) | undefined
                quota?: (string | null) | undefined
                language?: (string | null) | undefined
                manager?: (string | null) | undefined
                groups?: (string[] | null) | undefined
                subadminGroups?: (string[] | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { errors: { [x: string]: string } } } }
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/user': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: UserDetails } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/user/fields': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/user/fields/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/user/apps': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { apps: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/:collectionName': {
      $put:
        | {
            input: { param: { userId: string; collectionName: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { key: string; value: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; collectionName: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { key: string; value: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/wipe': {
      $post:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/enable': {
      $put:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/disable': {
      $put:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/groups': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { groups: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { groupid?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { groupid?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { userId: string } } & { query: { groupid: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { groupid: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/groups/details': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { groups: GroupDetails[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/subadmins/details': {
      $get:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { groups: GroupDetails[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/cloud/users/:userId/welcome': {
      $post:
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId/:configKey': {
      $post:
        | {
            input: { param: { appId: string; configKey: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { configValue: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; configKey: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { configValue: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appId: string; configKey: string } } & {
              header: { 'OCS-APIRequest': boolean }
            } & { json: { configValue: string } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { appId: string; configKey: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string; configKey: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appId: string; configKey: string } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/provisioning_api/api/v1/config/users/:appId': {
      $post:
        | {
            input: { param: { appId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { configs: { [x: string]: string } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { configs: { [x: string]: string } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appId: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { configs: { [x: string]: string } }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { appId: string } } & { query: { 'configKeys[]': string[] } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: string } } & { query: { 'configKeys[]': string[] } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { appId: string } } & { query: { 'configKeys[]': string[] } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
