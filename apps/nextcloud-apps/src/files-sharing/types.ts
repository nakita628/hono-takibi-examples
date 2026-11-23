type ShareInfo = {
  id: bigint
  parentId: bigint
  mtime: bigint
  name: string
  permissions: bigint
  mimetype: string
  size: bigint | number
  type: string
  etag: string
  children?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type Share = {
  attributes: string | null
  can_delete: boolean
  can_edit: boolean
  displayname_file_owner: string
  displayname_owner: string
  expiration: string | null
  file_parent: bigint
  file_source: bigint
  file_target: string
  has_preview: boolean
  hide_download: 0n | 1n
  is_trusted_server?: boolean | undefined
  'is-mount-root': boolean
  id: string
  item_mtime: bigint
  item_permissions?: bigint | undefined
  item_size: number | bigint
  item_source: bigint
  item_type: 'file' | 'folder'
  label: string
  mail_send: 0n | 1n
  mimetype: string
  'mount-type': string
  note: string
  original_displayname: string | null
  parent: { [x: string]: unknown } | null
  password?: (string | null) | undefined
  password_expiration_time?: (string | null) | undefined
  path: string | null
  permissions: bigint
  send_password_by_talk?: boolean | undefined
  share_type: bigint
  share_with?: (string | null) | undefined
  share_with_avatar?: string | undefined
  share_with_displayname?: string | undefined
  share_with_displayname_unique?: (string | null) | undefined
  share_with_link?: string | undefined
  status?:
    | { clearAt: bigint | null; icon: string | null; message: string | null; status: string }
    | undefined
  stime: bigint
  storage: bigint
  storage_id: string
  token: string | null
  uid_file_owner: string
  uid_owner: string
  url?: (string | null) | undefined
}
type DeletedShare = {
  id: string
  share_type: bigint
  uid_owner: string
  displayname_owner: string
  permissions: bigint
  stime: bigint
  uid_file_owner: string
  displayname_file_owner: string
  path: string
  item_type: string
  mimetype: string
  storage: bigint
  item_source: bigint
  file_source: bigint
  file_parent: bigint
  file_target: bigint
  expiration: string | null
  share_with: string | null
  share_with_displayname: string | null
  share_with_link: string | null
}
type ShareeCircle = {
  label: string
  shareWithDescription: string
  value: { shareType: bigint; shareWith: string; circle: string }
}
type ShareeValue = { shareType: bigint; shareWith: string }
type ShareeEmail = {
  label: string
  uuid: string
  name: string
  type: string
  shareWithDisplayNameUnique: string
  value: ShareeValue
}
type ShareeGroup = { label: string; value: ShareeValue }
type ShareeRemoteGroup = {
  label: string
  guid: string
  name: string
  value: { shareType: bigint; shareWith: string; server: string }
}
type ShareeRemote = {
  label: string
  uuid: string
  name: string
  type: string
  value: { shareType: bigint; shareWith: string; server: string }
}
type ShareeRoom = { label: string; value: ShareeValue }
type ShareeUser = {
  label: string
  subline: string
  icon: string
  shareWithDisplayNameUnique: string
  status: { status: string; message: string; icon: string; clearAt: bigint | null }
  value: ShareeValue
}
type ShareeLookup = {
  label: string
  extra: {
    federationId: string
    name: { value: string; verified: bigint }
    email: { value: string; verified: bigint }
    address: { value: string; verified: bigint }
    website: { value: string; verified: bigint }
    twitter: { value: string; verified: bigint }
    phone: { value: string; verified: bigint }
    twitter_signature: { value: string; verified: bigint }
    website_signature: { value: string; verified: bigint }
    userid: { value: string; verified: bigint }
  }
  value: { shareType: bigint; shareWith: string; globalScale: boolean }
}
type ShareesSearchResult = {
  exact: {
    circles: ShareeCircle[]
    emails: ShareeEmail[]
    groups: ShareeGroup[]
    remote_groups: ShareeRemoteGroup[]
    remotes: ShareeRemote[]
    rooms: ShareeRoom[]
    users: ShareeUser[]
  }
  circles: ShareeCircle[]
  emails: ShareeEmail[]
  groups: ShareeGroup[]
  lookup: ShareeLookup[]
  remote_groups: ShareeRemoteGroup[]
  remotes: ShareeRemote[]
  rooms: ShareeRoom[]
  users: ShareeUser[]
  lookupEnabled: boolean
}
type ShareesRecommendedResult = {
  exact: {
    emails: ShareeEmail[]
    groups: ShareeGroup[]
    remote_groups: ShareeRemoteGroup[]
    remotes: ShareeRemote[]
    users: ShareeUser[]
  }
  emails: ShareeEmail[]
  groups: ShareeGroup[]
  remote_groups: ShareeRemoteGroup[]
  remotes: ShareeRemote[]
  users: ShareeUser[]
}
type RemoteShare = {
  accepted: bigint
  file_id: bigint | null
  id: string
  mimetype: string | null
  mountpoint: string
  mtime: bigint | null
  name: string
  owner: string
  parent: string | null
  permissions: bigint | null
  remote: string
  remote_id: string
  refresh_token: string
  share_type: bigint
  type: string | null
  user: string
  item_size: bigint | number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/s/:token/preview': {
      $get:
        | { input: { param: { token: string } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/index.php/apps/files_sharing/publicpreview/:token': {
      $get:
        | {
            input: { param: { token: string } } & {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                mimeFallback?: boolean | undefined
              }
            } & { header: { 'x-nc-preview'?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { token: string } } & {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                mimeFallback?: boolean | undefined
              }
            } & { header: { 'x-nc-preview'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { param: { token: string } } & {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                mimeFallback?: boolean | undefined
              }
            } & { header: { 'x-nc-preview'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } } & {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                mimeFallback?: boolean | undefined
              }
            } & { header: { 'x-nc-preview'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { token: string } } & {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
                mimeFallback?: boolean | undefined
              }
            } & { header: { 'x-nc-preview'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/index.php/apps/files_sharing/shareinfo': {
      $post:
        | {
            input: {
              json: {
                t: string
                password?: (string | null) | undefined
                dir?: (string | null) | undefined
                depth?: bigint | undefined
              }
            }
            output: ShareInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                t: string
                password?: (string | null) | undefined
                dir?: (string | null) | undefined
                depth?: bigint | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                t: string
                password?: (string | null) | undefined
                dir?: (string | null) | undefined
                depth?: bigint | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/shares': {
      $get:
        | {
            input: {
              query: {
                shared_with_me?: string | undefined
                reshares?: string | undefined
                subfiles?: string | undefined
                path?: string | undefined
                include_tags?: string | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Share[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                shared_with_me?: string | undefined
                reshares?: string | undefined
                subfiles?: string | undefined
                path?: string | undefined
                include_tags?: string | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                shared_with_me?: string | undefined
                reshares?: string | undefined
                subfiles?: string | undefined
                path?: string | undefined
                include_tags?: string | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path?: (string | null) | undefined
                permissions?: (bigint | null) | undefined
                shareType?: bigint | undefined
                shareWith?: (string | null) | undefined
                publicUpload?: 'true' | 'false' | undefined
                password?: string | undefined
                sendPasswordByTalk?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: string | undefined
                label?: string | undefined
                attributes?: (string | null) | undefined
                sendMail?: 'false' | 'true' | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path?: (string | null) | undefined
                permissions?: (bigint | null) | undefined
                shareType?: bigint | undefined
                shareWith?: (string | null) | undefined
                publicUpload?: 'true' | 'false' | undefined
                password?: string | undefined
                sendPasswordByTalk?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: string | undefined
                label?: string | undefined
                attributes?: (string | null) | undefined
                sendMail?: 'false' | 'true' | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path?: (string | null) | undefined
                permissions?: (bigint | null) | undefined
                shareType?: bigint | undefined
                shareWith?: (string | null) | undefined
                publicUpload?: 'true' | 'false' | undefined
                password?: string | undefined
                sendPasswordByTalk?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: string | undefined
                label?: string | undefined
                attributes?: (string | null) | undefined
                sendMail?: 'false' | 'true' | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path?: (string | null) | undefined
                permissions?: (bigint | null) | undefined
                shareType?: bigint | undefined
                shareWith?: (string | null) | undefined
                publicUpload?: 'true' | 'false' | undefined
                password?: string | undefined
                sendPasswordByTalk?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: string | undefined
                label?: string | undefined
                attributes?: (string | null) | undefined
                sendMail?: 'false' | 'true' | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                path?: (string | null) | undefined
                permissions?: (bigint | null) | undefined
                shareType?: bigint | undefined
                shareWith?: (string | null) | undefined
                publicUpload?: 'true' | 'false' | undefined
                password?: string | undefined
                sendPasswordByTalk?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: string | undefined
                label?: string | undefined
                attributes?: (string | null) | undefined
                sendMail?: 'false' | 'true' | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/shares/inherited': {
      $get:
        | {
            input: { query: { path: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Share[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { path: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { path: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { path: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/shares/pending': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Share[] } }
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
    '/ocs/v2.php/apps/files_sharing/api/v1/shares/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include_tags?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: Share[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include_tags?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include_tags?: boolean | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                permissions?: (bigint | null) | undefined
                password?: (string | null) | undefined
                sendPasswordByTalk?: (string | null) | undefined
                publicUpload?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: (string | null) | undefined
                label?: (string | null) | undefined
                hideDownload?: (string | null) | undefined
                attributes?: (string | null) | undefined
                sendMail?: (string | null) | undefined
                token?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: Share } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                permissions?: (bigint | null) | undefined
                password?: (string | null) | undefined
                sendPasswordByTalk?: (string | null) | undefined
                publicUpload?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: (string | null) | undefined
                label?: (string | null) | undefined
                hideDownload?: (string | null) | undefined
                attributes?: (string | null) | undefined
                sendMail?: (string | null) | undefined
                token?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                permissions?: (bigint | null) | undefined
                password?: (string | null) | undefined
                sendPasswordByTalk?: (string | null) | undefined
                publicUpload?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: (string | null) | undefined
                label?: (string | null) | undefined
                hideDownload?: (string | null) | undefined
                attributes?: (string | null) | undefined
                sendMail?: (string | null) | undefined
                token?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                permissions?: (bigint | null) | undefined
                password?: (string | null) | undefined
                sendPasswordByTalk?: (string | null) | undefined
                publicUpload?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: (string | null) | undefined
                label?: (string | null) | undefined
                hideDownload?: (string | null) | undefined
                attributes?: (string | null) | undefined
                sendMail?: (string | null) | undefined
                token?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                permissions?: (bigint | null) | undefined
                password?: (string | null) | undefined
                sendPasswordByTalk?: (string | null) | undefined
                publicUpload?: (string | null) | undefined
                expireDate?: (string | null) | undefined
                note?: (string | null) | undefined
                label?: (string | null) | undefined
                hideDownload?: (string | null) | undefined
                attributes?: (string | null) | undefined
                sendMail?: (string | null) | undefined
                token?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/shares/:id/send-email': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { password?: string | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/shares/pending/:id': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/deletedshares': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: DeletedShare[] } }
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
    '/ocs/v2.php/apps/files_sharing/api/v1/deletedshares/:id': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/sharees': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                itemType?: (string | null) | undefined
                page?: bigint | undefined
                perPage?: bigint | undefined
                shareType?: bigint | bigint[] | undefined
                lookup?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: ShareesSearchResult } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                itemType?: (string | null) | undefined
                page?: bigint | undefined
                perPage?: bigint | undefined
                shareType?: bigint | bigint[] | undefined
                lookup?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                search?: string | undefined
                itemType?: (string | null) | undefined
                page?: bigint | undefined
                perPage?: bigint | undefined
                shareType?: bigint | bigint[] | undefined
                lookup?: boolean | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/sharees_recommended': {
      $get:
        | {
            input: { query: { itemType: string; shareType?: bigint | bigint[] | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: ShareesRecommendedResult } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { itemType: string; shareType?: bigint | bigint[] | undefined } } & {
              header: { 'OCS-APIRequest': boolean }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: RemoteShare[] } }
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
    '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: RemoteShare[] } }
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
    '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/pending/:id': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/remote_shares/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: RemoteShare } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/files_sharing/api/v1/token': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { token: string } } }
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
  },
  '/'
>
export default routes
