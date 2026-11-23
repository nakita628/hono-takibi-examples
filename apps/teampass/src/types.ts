type Problem = {
  type?: string | undefined
  title?: string | undefined
  status?: number | undefined
  detail?: string | undefined
  error?: string | undefined
}
type CustomField = {
  id?: number | undefined
  title?: string | undefined
  type?: string | undefined
  masked?: number | undefined
  value?: string | undefined
}
type Item = {
  id?: number | undefined
  revision?: number | undefined
  revision_changed_at?: (number | null) | undefined
  label?: string | undefined
  description?: string | undefined
  pwd?: string | undefined
  url?: string | undefined
  login?: string | undefined
  email?: string | undefined
  viewed_no?: number | undefined
  fa_icon?: (string | null) | undefined
  inactif?: number | undefined
  perso?: number | undefined
  id_tree?: number | undefined
  folder_label?: (string | null) | undefined
  path?: string | undefined
  totp?: (string | null) | undefined
  totp_algorithm?: 'sha1' | 'sha256' | 'sha512' | undefined
  totp_digits?: 6 | 8 | undefined
  totp_period?: number | undefined
  favicon_url?: (string | null) | undefined
  tags?: (string | null) | undefined
  anyone_can_modify?: number | string | undefined
  fields?: CustomField[] | undefined
  renewal_period?: number | undefined
}
type ItemSummary = {
  id?: number | undefined
  revision?: number | undefined
  revision_changed_at?: (number | null) | undefined
  label?: string | undefined
  login?: string | undefined
  url?: string | undefined
  folder_id?: number | undefined
  has_otp?: number | undefined
  favicon_url?: string | undefined
}
type ItemCreateBody = {
  label: string
  folder_id: number
  password: string
  description?: string | undefined
  login: string
  email: string
  url: string
  tags: string
  anyone_can_modify: number
  icon?: string | undefined
  totp?: string | undefined
  totp_algorithm?: 'sha1' | 'sha256' | 'sha512' | undefined
  totp_digits?: 6 | 8 | undefined
  totp_period?: number | undefined
  fields?: { id?: number | undefined; value?: string | undefined }[] | undefined
  renewal_period?: number | undefined
}
type CreatedResult = {
  error?: boolean | undefined
  message?: string | undefined
  newId?: number | undefined
  revision?: number | undefined
  revision_changed_at?: (number | null) | undefined
}
type ItemUpdateBody = {
  id: number
  revision?: number | undefined
  label?: string | undefined
  password?: string | undefined
  description?: string | undefined
  login?: string | undefined
  email?: string | undefined
  url?: string | undefined
  tags?: string | undefined
  anyone_can_modify?: number | undefined
  icon?: string | undefined
  folder_id?: number | undefined
  totp?: string | undefined
  totp_algorithm?: 'sha1' | 'sha256' | 'sha512' | undefined
  totp_digits?: 6 | 8 | undefined
  totp_period?: number | undefined
  fields?: { id?: number | undefined; value?: string | undefined }[] | undefined
  renewal_period?: number | undefined
}
type FolderNode = {
  id?: number | undefined
  title?: string | undefined
  isVisible?: boolean | undefined
  complexity?: 0 | 20 | 38 | 48 | 60 | undefined
  childrens?: FolderNode[] | undefined
}
type WritableFolder = {
  id: number
  label: string
  level: number
  parent_id: number
  first_position: number
  position: number
  complexity: 0 | 20 | 38 | 48 | 60
  is_readonly: 0 | 1
  access_type: 'R' | 'W' | 'NE' | 'ND' | 'NDNE'
  can_create: 0 | 1
  can_edit: 0 | 1
  can_delete: 0 | 1
  is_personal: 0 | 1
  is_personal_root: 0 | 1
  deletion_protected: 0 | 1
  contains_deletion_protected: 0 | 1
  can_create_subfolder: 0 | 1
  can_rename_folder: 0 | 1
  can_move_folder: 0 | 1
  can_delete_folder: 0 | 1
}
type FolderCreateBody = {}
type FolderUpdateBody = {
  id: number
  title?: string | undefined
  parent_id?: number | undefined
  complexity?: 0 | 20 | 38 | 48 | 60 | undefined
  duration?: number | undefined
  create_auth_without?: number | undefined
  edit_auth_without?: number | undefined
  deletion_protected?: 0 | 1 | undefined
  icon?: string | undefined
  icon_selected?: string | undefined
}
type FolderUpdateResult = {
  error?: boolean | undefined
  message?: string | undefined
  id?: number | undefined
}
type FolderDeleteResult = {
  error?: boolean | undefined
  message?: string | undefined
  deleted_folders?: number[] | undefined
  deleted_items_count?: number | undefined
}
type User = {
  id?: number | undefined
  login?: string | undefined
  name?: (string | null) | undefined
  lastname?: (string | null) | undefined
  email?: (string | null) | undefined
  admin?: number | undefined
  gestionnaire?: number | undefined
  disabled?: number | undefined
  last_connection_time?: (number | string | null) | undefined
  is_ready_for_usage?: number | undefined
  personal_folder?: number | undefined
  auth_type?: string | undefined
}
type WebauthnCreateBody = {
  item_id: number
  rp_id: string
  rp_name?: string | undefined
  user_handle: string
  user_name?: string | undefined
  user_display_name?: string | undefined
  pub_key_cred_params?:
    | (number | { type?: string | undefined; alg?: number | undefined })[]
    | undefined
  client_data_json: string
  user_verified?: boolean | undefined
  excluded_credential_ids?: string[] | undefined
}
type WebauthnCreatedCredential = {
  id: number
  item_id: number
  rp_id: string
  credential_id: string
  user_handle: string
  attestation_object: string
  authenticator_data: string
  public_key: string
  public_key_algorithm: -7
  transports: string[]
}
type WebauthnCredential = {
  id?: number | undefined
  credential_id?: string | undefined
  rp_id?: string | undefined
  rp_name?: (string | null) | undefined
  user_handle?: string | undefined
  user_name?: (string | null) | undefined
  user_display_name?: (string | null) | undefined
  item_id?: number | undefined
  item_label?: string | undefined
  folder_id?: number | undefined
  created_at?: number | undefined
  last_used_at?: (number | null) | undefined
}
type WebauthnAssertBody = {
  credential_id: string
  rp_id: string
  client_data_json: string
  user_verified?: boolean | undefined
}
type WebauthnAssertion = {
  credential_id: string
  authenticator_data: string
  signature: string
  user_handle: string
}
type SecureSendPolicy = {
  enabled: boolean
  item_send_allowed: boolean
  note_send_allowed: boolean
  require_passphrase: boolean
  passphrase_max_bytes: 1024
  note_max_bytes: 16000
  days: { max: number; default: number }
  views: { max: number; default: number }
  public_address_available: boolean
  totp_allowed: boolean
  email: { allowed: boolean; configured: boolean }
  sender_name_shown: boolean
}
type SecureSendCreateBody = {}
type SecureSendCreated = {
  id: number
  type: 'item' | 'note'
  url: string
  item_id: number | null
  expires_at: number
  max_views: number
  has_passphrase: boolean
  public_address: boolean
  totp_included: boolean
  description_truncated: boolean
  email_queued: boolean
}
type SecureSendProblem = {
  type?: string | undefined
  title?: string | undefined
  status?: number | undefined
  detail?: string | undefined
  error?: string | undefined
  reason?:
    | 'secure_send_disabled'
    | 'invalid_payload'
    | 'invalid_email'
    | 'empty_note'
    | 'not_found'
    | 'not_allowed'
    | 'email_not_allowed'
    | 'notes_not_allowed'
    | 'passphrase_required'
    | 'cannot_decrypt'
    | 'totp_unusable'
    | 'email_requires_https'
    | 'email_rate_limited'
    | 'email_not_configured'
    | 'invalid_public_url'
    | 'server_error'
    | undefined
}
type SecureSendLink = {
  id: number
  type: 'item' | 'note'
  item_id: number | null
  folder_id: number | null
  label: string | null
  has_passphrase: boolean
  expires_at: number
  max_views: number
  remaining_views: number
  suspended: boolean
  email_status: null | 'queued' | 'accepted' | 'failed' | 'not_sent' | 'unknown'
}
type SecureSendRevoked = { id: number }
type DevicePairingCapabilities = {
  type: 'teampass.device-pairing'
  version: 1
  experimental: true
  algorithm: 'RSA-OAEP-256'
  key_bits: 3072
  credential_status?: true | undefined
  credential_lifetime_days?: number | undefined
  ttl: 180
  poll_interval: 2
}
type DevicePairingClaim = {
  pairing_id: string
  pairing_secret: string
  challenge: string
  public_key: string
  device_label: string
}
type DevicePairingState = {
  pairing_id: string
  state:
    | 'awaiting_scan'
    | 'awaiting_approval'
    | 'approved'
    | 'delivered'
    | 'completed'
    | 'rejected'
    | 'cancelled'
    | 'expired'
  expires_at: number
  server_time: number
  poll_interval: 2
  claim_id?: string | undefined
  comparison_code?: string | undefined
  key_fingerprint?: string | undefined
  handoff?:
    | {
        version: 1
        algorithm: 'RSA-OAEP-256'
        key_fingerprint: string
        ciphertext: string
        server_url: string
        username: string
        delivery_until: number
        credential_id: number
        credential_expires_at: number
      }
    | undefined
}
type DevicePairingProof = { pairing_id: string; claim_id: string; verifier: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/authorize': {
      $post:
        | {
            input: { json: { login: string; password: string; apikey: string } } & {
              form: { login: string; password: string; apikey: string }
            }
            output: {
              token: string
              teampass_version: string
              teampass_version_major: string
              teampass_version_minor: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { login: string; password: string; apikey: string } } & {
              form: { login: string; password: string; apikey: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { login: string; password: string; apikey: string } } & {
              form: { login: string; password: string; apikey: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { login: string; password: string; apikey: string } } & {
              form: { login: string; password: string; apikey: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { login: string; password: string; apikey: string } } & {
              form: { login: string; password: string; apikey: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: { login: string; password: string; apikey: string } } & {
              form: { login: string; password: string; apikey: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { login: string; password: string; apikey: string } } & {
              form: { login: string; password: string; apikey: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/authorizeToken': {
      $post:
        | {
            input: { json: { login: string; token: string } } & {
              form: { login: string; token: string }
            }
            output: {
              token: string
              teampass_version: string
              teampass_version_major: string
              teampass_version_minor: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { login: string; token: string } } & {
              form: { login: string; token: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { login: string; token: string } } & {
              form: { login: string; token: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { login: string; token: string } } & {
              form: { login: string; token: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { login: string; token: string } } & {
              form: { login: string; token: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: { login: string; token: string } } & {
              form: { login: string; token: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { login: string; token: string } } & {
              form: { login: string; token: string }
            }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/auth/logout': {
      $post:
        | {
            input: {}
            output: { error?: boolean | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/item/get': {
      $get:
        | {
            input: {
              query: {
                id?: number | undefined
                label?: string | undefined
                description?: string | undefined
                like?: 0 | 1 | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Item[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: number | undefined
                label?: string | undefined
                description?: string | undefined
                like?: 0 | 1 | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: number | undefined
                label?: string | undefined
                description?: string | undefined
                like?: 0 | 1 | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: number | undefined
                label?: string | undefined
                description?: string | undefined
                like?: 0 | 1 | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                id?: number | undefined
                label?: string | undefined
                description?: string | undefined
                like?: 0 | 1 | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                id?: number | undefined
                label?: string | undefined
                description?: string | undefined
                like?: 0 | 1 | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                id?: number | undefined
                label?: string | undefined
                description?: string | undefined
                like?: 0 | 1 | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/item/inFolders': {
      $get:
        | {
            input: {
              query: { folders: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: Item[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { folders: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { folders: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { folders: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { folders: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: { folders: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { folders: string; limit?: number | undefined; offset?: number | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/item/findByUrl': {
      $get:
        | {
            input: { query: { url: string } }
            output: ItemSummary[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { url: string } }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { query: { url: string } }; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: { query: { url: string } }; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: { query: { url: string } }; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: { query: { url: string } }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { query: { url: string } }; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/item/getOtp': {
      $get:
        | {
            input: { query: { id: number } }
            output: {
              otp_code?: string | undefined
              expires_in?: number | undefined
              item_id?: number | undefined
              algorithm?: 'sha1' | 'sha256' | 'sha512' | undefined
              digits?: 6 | 8 | undefined
              period?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 404 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/item/changes': {
      $get:
        | {
            input: { query: { since: number; limit?: number | undefined } }
            output: {
              cursor?: number | undefined
              has_more?: boolean | undefined
              full_sync_required?: boolean | undefined
              changed?: Item[] | undefined
              removed?:
                | {
                    id?: number | undefined
                    revision?: number | undefined
                    revision_changed_at?: number | undefined
                    reason?: 'deleted' | 'purged' | 'out_of_scope' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { since: number; limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { since: number; limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { since: number; limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { since: number; limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { since: number; limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { since: number; limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/item/allTags': {
      $get:
        | { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/item/create': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: CreatedResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: ItemCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/item/update': {
      $put:
        | {
            input: { json: ItemUpdateBody }
            output: {
              error?: boolean | undefined
              message?: string | undefined
              item_id?: number | undefined
              revision?: number | undefined
              revision_changed_at?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 404 }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 409 }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 422 }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { json: ItemUpdateBody }; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/item/delete': {
      $delete:
        | {
            input: { query: { id: number; revision?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: {
              error?: boolean | undefined
              message?: string | undefined
              item_id?: number | undefined
              revision?: number | undefined
              revision_changed_at?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number; revision?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id: number; revision?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id: number; revision?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: number; revision?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { id: number; revision?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { id: number; revision?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { id: number; revision?: number | undefined } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/folder/listFolders': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: FolderNode[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/folder/writableFolders': {
      $get:
        | { input: {}; output: WritableFolder[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/folder/create': {
      $post:
        | {
            input: { json: FolderCreateBody }
            output: CreatedResult
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: FolderCreateBody }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { json: FolderCreateBody }; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: { json: FolderCreateBody }; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: { json: FolderCreateBody }; output: Problem; outputFormat: 'json'; status: 422 }
        | { input: { json: FolderCreateBody }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { json: FolderCreateBody }; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/folder/update': {
      $put:
        | {
            input: { json: FolderUpdateBody }
            output: FolderUpdateResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: FolderUpdateBody }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { json: FolderUpdateBody }; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: { json: FolderUpdateBody }; output: Problem; outputFormat: 'json'; status: 404 }
        | { input: { json: FolderUpdateBody }; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: { json: FolderUpdateBody }; output: Problem; outputFormat: 'json'; status: 422 }
        | { input: { json: FolderUpdateBody }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { json: FolderUpdateBody }; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/folder/delete': {
      $delete:
        | {
            input: { query: { id: number } }
            output: FolderDeleteResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 404 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 409 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/user/list': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/misc/refreshExtensionSettings': {
      $get:
        | {
            input: {}
            output: {
              extension_fqdn: string
              extension_key: string
              extension_url: string
              teampass_version: string
              teampass_version_major: string
              teampass_version_minor: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: {}
            output: {
              extension_fqdn: string
              extension_key: string
              extension_url: string
              teampass_version: string
              teampass_version_major: string
              teampass_version_minor: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/webauthn/create': {
      $post:
        | {
            input: { json: WebauthnCreateBody }
            output: WebauthnCreatedCredential
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: WebauthnCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/webauthn/list': {
      $get:
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: WebauthnCredential[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { rp_id?: string | undefined; item_id?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/webauthn/assert': {
      $post:
        | {
            input: { json: WebauthnAssertBody }
            output: WebauthnAssertion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: WebauthnAssertBody }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/webauthn/delete': {
      $delete:
        | {
            input: { query: { id: number } }
            output: {
              error?: boolean | undefined
              id?: number | undefined
              item_id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 404 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 500 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/secureSend/policy': {
      $get:
        | { input: {}; output: SecureSendPolicy; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/secureSend/create': {
      $post:
        | {
            input: { json: SecureSendCreateBody }
            output: SecureSendCreated
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SecureSendCreateBody }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SecureSendCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SecureSendCreateBody }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SecureSendCreateBody }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SecureSendCreateBody }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: SecureSendCreateBody }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SecureSendCreateBody }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: SecureSendCreateBody }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SecureSendCreateBody }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/secureSend/list': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: SecureSendLink[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/secureSend/revoke': {
      $delete:
        | {
            input: { query: { id: number } }
            output: SecureSendRevoked
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: number } }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 400
          }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 403 }
        | {
            input: { query: { id: number } }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 404
          }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 429 }
        | {
            input: { query: { id: number } }
            output: SecureSendProblem
            outputFormat: 'json'
            status: 500
          }
        | { input: { query: { id: number } }; output: Problem; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/openapi.json': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/devicePairing/capabilities': {
      $get:
        | { input: {}; output: DevicePairingCapabilities; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 405 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 409 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Problem; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/devicePairing/credentialStatus': {
      $post:
        | {
            input: { json: { token: string } }
            output: {
              credential_id: number
              state: 'active' | 'pending' | 'suspended' | 'invalidated'
              reason:
                | null
                | 'revoked'
                | 'expired'
                | 'access_removed'
                | 'keys_changed'
                | 'not_confirmed'
              expires_at: number | null
              server_time: number
              server_url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { token: string } }; output: Problem; outputFormat: 'json'; status: 400 }
        | { input: { json: { token: string } }; output: Problem; outputFormat: 'json'; status: 401 }
        | { input: { json: { token: string } }; output: Problem; outputFormat: 'json'; status: 403 }
        | { input: { json: { token: string } }; output: Problem; outputFormat: 'json'; status: 429 }
        | { input: { json: { token: string } }; output: Problem; outputFormat: 'json'; status: 500 }
        | { input: { json: { token: string } }; output: Problem; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/devicePairing/claim': {
      $post:
        | {
            input: { json: DevicePairingClaim }
            output: DevicePairingState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DevicePairingClaim }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DevicePairingClaim }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DevicePairingClaim }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DevicePairingClaim }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: DevicePairingClaim }
            output: Problem
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: DevicePairingClaim }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: DevicePairingClaim }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: DevicePairingClaim }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/devicePairing/status': {
      $post:
        | {
            input: { json: DevicePairingProof }
            output: DevicePairingState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/devicePairing/consume': {
      $post:
        | {
            input: { json: DevicePairingProof }
            output: DevicePairingState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: DevicePairingProof }
            output: Problem
            outputFormat: 'json'
            status: 503
          }
    }
  },
  '/'
>
export default routes
