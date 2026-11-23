type AuthenticationError = { error: string; status?: 'error' | undefined }
type CombinedSubmissionAction = {
  action_category: 'notification' | 'file_upload'
  action_type: 'webhook' | 'slack_webhook' | 'email' | 'aws_s3_upload'
  id: string
  integration_id: string | null
  result_data: { [x: string]: unknown }
  state: 'pending' | 'processed' | 'failed' | 'error'
}
type Error = { error: string; status: 'error' }
type InvalidRequest = { errors: string[]; status: 'error' }
type SubmissionDataRequest = {
  auth_phone_number_hash?: (string | null) | undefined
  auth_provider?: (string | null) | undefined
  auth_second_factor_type?:
    | 'none'
    | 'phone_number'
    | 'totp'
    | 'mobile_push'
    | 'security_key'
    | 'fingerprint'
    | undefined
  auth_session_id_hash?: (string | null) | undefined
  auth_session_started_at?: (string | null) | undefined
  auth_type?:
    | 'none'
    | 'password'
    | 'oauth'
    | 'email_link'
    | 'phone_number'
    | 'ldap'
    | 'saml'
    | undefined
  auth_user_id_hash?: (string | null) | undefined
  auth_username_hash?: (string | null) | undefined
  completed_at?: (string | null) | undefined
  email: string | null
  fields: string[] | null
  id: string
  ip_address?: (string | null) | undefined
  metadata: { [x: string]: unknown }
  name: string | null
  order: number
  sort_order: number
  state: 'pending' | 'completed'
  submission_id?: string | undefined
  user_agent?: (string | null) | undefined
  viewed_at?: (string | null) | undefined
}
type SubmissionAction = {
  action_category: 'notification' | 'file_upload'
  action_type: 'webhook' | 'slack_webhook' | 'email' | 'aws_s3_upload'
  id: string
  integration_id: string | null
  result_data: { [x: string]: unknown }
  state: 'pending' | 'processed' | 'failed' | 'error'
}
type Submission = {
  actions?: SubmissionAction[] | undefined
  batch_id?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  data_requests?: SubmissionDataRequest[] | undefined
  download_url?: (string | null) | undefined
  editable?: (boolean | null) | undefined
  expired: boolean
  expires_at?: (string | null) | undefined
  id: string
  metadata?: { [x: string]: unknown } | undefined
  pdf_hash?: (string | null) | undefined
  permanent_download_url?: (string | null) | undefined
  processed_at?: (string | null) | undefined
  referrer?: (string | null) | undefined
  source?: (string | null) | undefined
  state:
    | 'pending'
    | 'processed'
    | 'invalid_data'
    | 'error'
    | 'image_download_failed'
    | 'image_processing_failed'
    | 'waiting_for_data_requests'
    | 'syntax_error'
    | 'account_suspended'
    | 'license_revoked'
    | 'accidental'
  template_id?: string | undefined
  test: boolean
  truncated_text?: { [x: string]: unknown } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/authentication': {
      $get:
        | { input: {}; output: { status: 'success' }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AuthenticationError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/combined_submissions': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: {
              actions?: CombinedSubmissionAction[] | undefined
              download_url?: (string | null) | undefined
              error_message?: (string | null) | undefined
              expired: boolean
              expires_at?: (string | null) | undefined
              expires_in?: (number | null) | undefined
              id: string
              metadata?: { [x: string]: unknown } | undefined
              password?: (string | null) | undefined
              pdf_hash?: (string | null) | undefined
              source_pdfs: (
                | {
                    id: string
                    type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                  }
                | { type: 'url'; url: string }
              )[]
              state: 'pending' | 'processed' | 'error'
              submission_ids: string[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                expires_in?: number | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                submission_ids: string[]
                test?: boolean | undefined
              }
            }
            output: {
              combined_submission: {
                actions?: CombinedSubmissionAction[] | undefined
                download_url?: (string | null) | undefined
                error_message?: (string | null) | undefined
                expired: boolean
                expires_at?: (string | null) | undefined
                expires_in?: (number | null) | undefined
                id: string
                metadata?: { [x: string]: unknown } | undefined
                password?: (string | null) | undefined
                pdf_hash?: (string | null) | undefined
                source_pdfs: (
                  | {
                      id: string
                      type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                    }
                  | { type: 'url'; url: string }
                )[]
                state: 'pending' | 'processed' | 'error'
                submission_ids: string[]
              }
              errors?: string[] | undefined
              status: 'success' | 'error'
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                expires_in?: number | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                submission_ids: string[]
                test?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                expires_in?: number | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                submission_ids: string[]
                test?: boolean | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                expires_in?: number | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                submission_ids: string[]
                test?: boolean | undefined
              }
            }
            output: InvalidRequest
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/combined_submissions/:combined_submission_id': {
      $delete:
        | {
            input: { param: { combined_submission_id: string } }
            output: {
              actions?: CombinedSubmissionAction[] | undefined
              download_url?: (string | null) | undefined
              error_message?: (string | null) | undefined
              expired: boolean
              expires_at?: (string | null) | undefined
              expires_in?: (number | null) | undefined
              id: string
              metadata?: { [x: string]: unknown } | undefined
              password?: (string | null) | undefined
              pdf_hash?: (string | null) | undefined
              source_pdfs: (
                | {
                    id: string
                    type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                  }
                | { type: 'url'; url: string }
              )[]
              state: 'pending' | 'processed' | 'error'
              submission_ids: string[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { combined_submission_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { combined_submission_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { combined_submission_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { combined_submission_id: string } }
            output: {
              actions?: CombinedSubmissionAction[] | undefined
              download_url?: (string | null) | undefined
              error_message?: (string | null) | undefined
              expired: boolean
              expires_at?: (string | null) | undefined
              expires_in?: (number | null) | undefined
              id: string
              metadata?: { [x: string]: unknown } | undefined
              password?: (string | null) | undefined
              pdf_hash?: (string | null) | undefined
              source_pdfs: (
                | {
                    id: string
                    type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                  }
                | { type: 'url'; url: string }
              )[]
              state: 'pending' | 'processed' | 'error'
              submission_ids: string[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { combined_submission_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { combined_submission_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/combined_submissions?v=2': {
      $post:
        | {
            input: {
              json: {
                delete_custom_files?: boolean | undefined
                expires_in?: number | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                source_pdfs: (
                  | {
                      id: string
                      type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                    }
                  | { type: 'url'; url: string }
                )[]
                test?: boolean | undefined
              }
            }
            output: {
              combined_submission: {
                actions?: CombinedSubmissionAction[] | undefined
                download_url?: (string | null) | undefined
                error_message?: (string | null) | undefined
                expired: boolean
                expires_at?: (string | null) | undefined
                expires_in?: (number | null) | undefined
                id: string
                metadata?: { [x: string]: unknown } | undefined
                password?: (string | null) | undefined
                pdf_hash?: (string | null) | undefined
                source_pdfs: (
                  | {
                      id: string
                      type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                    }
                  | { type: 'url'; url: string }
                )[]
                state: 'pending' | 'processed' | 'error'
                submission_ids: string[]
              }
              errors?: string[] | undefined
              status: 'success' | 'error'
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                delete_custom_files?: boolean | undefined
                expires_in?: number | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                source_pdfs: (
                  | {
                      id: string
                      type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                    }
                  | { type: 'url'; url: string }
                )[]
                test?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                delete_custom_files?: boolean | undefined
                expires_in?: number | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                source_pdfs: (
                  | {
                      id: string
                      type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                    }
                  | { type: 'url'; url: string }
                )[]
                test?: boolean | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                delete_custom_files?: boolean | undefined
                expires_in?: number | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                source_pdfs: (
                  | {
                      id: string
                      type: 'submission' | 'combined_submission' | 'template' | 'custom_file'
                    }
                  | { type: 'url'; url: string }
                )[]
                test?: boolean | undefined
              }
            }
            output: InvalidRequest
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/custom_files': {
      $post:
        | {
            input: { json: { cache_id: string } }
            output: {
              custom_file: { id: string; url: string }
              errors?: string[] | undefined
              status: 'success' | 'error'
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { cache_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/data_requests/:data_request_id': {
      $get:
        | {
            input: { param: { data_request_id: string } }
            output: SubmissionDataRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { data_request_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { data_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { data_request_id: string } } & {
              json: {
                auth_phone_number_hash?: (string | null) | undefined
                auth_provider?: (string | null) | undefined
                auth_second_factor_type?:
                  | 'none'
                  | 'phone_number'
                  | 'totp'
                  | 'mobile_push'
                  | 'security_key'
                  | 'fingerprint'
                  | undefined
                auth_session_id_hash?: (string | null) | undefined
                auth_session_started_at?: (string | null) | undefined
                auth_type?:
                  | 'none'
                  | 'password'
                  | 'oauth'
                  | 'email_link'
                  | 'phone_number'
                  | 'ldap'
                  | 'saml'
                  | undefined
                auth_user_id_hash?: (string | null) | undefined
                auth_username_hash?: (string | null) | undefined
                email?: (string | null) | undefined
                fields?: string[] | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: (string | null) | undefined
                order?: number | undefined
              }
            }
            output: {
              data_request: SubmissionDataRequest
              errors?: string[] | undefined
              status: 'success' | 'error'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { data_request_id: string } } & {
              json: {
                auth_phone_number_hash?: (string | null) | undefined
                auth_provider?: (string | null) | undefined
                auth_second_factor_type?:
                  | 'none'
                  | 'phone_number'
                  | 'totp'
                  | 'mobile_push'
                  | 'security_key'
                  | 'fingerprint'
                  | undefined
                auth_session_id_hash?: (string | null) | undefined
                auth_session_started_at?: (string | null) | undefined
                auth_type?:
                  | 'none'
                  | 'password'
                  | 'oauth'
                  | 'email_link'
                  | 'phone_number'
                  | 'ldap'
                  | 'saml'
                  | undefined
                auth_user_id_hash?: (string | null) | undefined
                auth_username_hash?: (string | null) | undefined
                email?: (string | null) | undefined
                fields?: string[] | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: (string | null) | undefined
                order?: number | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { data_request_id: string } } & {
              json: {
                auth_phone_number_hash?: (string | null) | undefined
                auth_provider?: (string | null) | undefined
                auth_second_factor_type?:
                  | 'none'
                  | 'phone_number'
                  | 'totp'
                  | 'mobile_push'
                  | 'security_key'
                  | 'fingerprint'
                  | undefined
                auth_session_id_hash?: (string | null) | undefined
                auth_session_started_at?: (string | null) | undefined
                auth_type?:
                  | 'none'
                  | 'password'
                  | 'oauth'
                  | 'email_link'
                  | 'phone_number'
                  | 'ldap'
                  | 'saml'
                  | undefined
                auth_user_id_hash?: (string | null) | undefined
                auth_username_hash?: (string | null) | undefined
                email?: (string | null) | undefined
                fields?: string[] | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: (string | null) | undefined
                order?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { data_request_id: string } } & {
              json: {
                auth_phone_number_hash?: (string | null) | undefined
                auth_provider?: (string | null) | undefined
                auth_second_factor_type?:
                  | 'none'
                  | 'phone_number'
                  | 'totp'
                  | 'mobile_push'
                  | 'security_key'
                  | 'fingerprint'
                  | undefined
                auth_session_id_hash?: (string | null) | undefined
                auth_session_started_at?: (string | null) | undefined
                auth_type?:
                  | 'none'
                  | 'password'
                  | 'oauth'
                  | 'email_link'
                  | 'phone_number'
                  | 'ldap'
                  | 'saml'
                  | undefined
                auth_user_id_hash?: (string | null) | undefined
                auth_username_hash?: (string | null) | undefined
                email?: (string | null) | undefined
                fields?: string[] | undefined
                metadata?: { [x: string]: unknown } | undefined
                name?: (string | null) | undefined
                order?: number | undefined
              }
            }
            output: InvalidRequest
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data_requests/:data_request_id/tokens': {
      $post:
        | {
            input: { param: { data_request_id: string } }
            output: {
              errors?: string[] | undefined
              status: 'success' | 'error'
              token: { data_request_url: string; expires_at: string; id: string; secret: string }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { data_request_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/folders/': {
      $get:
        | {
            input: { query: { parent_folder_id?: string | undefined } }
            output: {
              id?: string | undefined
              name?: string | undefined
              parent_folder_id?: (string | null) | undefined
              path?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { parent_folder_id?: string | undefined } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { folder: { name: string; parent_folder_id?: string | undefined } } }
            output: {
              id?: string | undefined
              name?: string | undefined
              parent_folder_id?: (string | null) | undefined
              path?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { folder: { name: string; parent_folder_id?: string | undefined } } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { folder: { name: string; parent_folder_id?: string | undefined } } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { folder: { name: string; parent_folder_id?: string | undefined } } }
            output: {
              id?: string | undefined
              name?: string | undefined
              parent_folder_id?: (string | null) | undefined
              path?: string | undefined
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/folders/:folder_id': {
      $delete:
        | {
            input: { param: { folder_id: string } }
            output: {
              id?: string | undefined
              name?: string | undefined
              parent_folder_id?: (string | null) | undefined
              path?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { folder_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/folders/:folder_id/move': {
      $post:
        | {
            input: { param: { folder_id: string } } & {
              json: { parent_folder_id?: string | undefined }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              parent_folder_id?: (string | null) | undefined
              path?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { parent_folder_id?: string | undefined }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_id: string } } & {
              json: { parent_folder_id?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/folders/:folder_id/rename': {
      $post:
        | {
            input: { param: { folder_id: string } } & { json: { name: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { folder_id: string } } & { json: { name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { folder_id: string } } & { json: { name: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/submissions': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                type?: string | undefined
                include_data?: boolean | undefined
              }
            }
            output: { limit: number; next_cursor: string | null; submissions: Submission[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                type?: string | undefined
                include_data?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                type?: string | undefined
                include_data?: boolean | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/submissions/batches': {
      $post:
        | {
            input: {
              json: {
                metadata?: { [x: string]: unknown } | undefined
                submissions: {
                  css?: string | undefined
                  data: { [x: string]: unknown }
                  html?: string | undefined
                  metadata?: { [x: string]: unknown } | undefined
                  template_id: string | null
                  test?: boolean | undefined
                }[]
                template_id?: (string | null) | undefined
                test?: boolean | undefined
              }
            }
            output: {
              error?: string | undefined
              errors?: string[] | undefined
              status: 'success' | 'error'
              submission_batch: {
                completion_percentage: number
                error_count: number
                id: string
                metadata: { [x: string]: unknown }
                pending_count: number
                processed_at: string | null
                state: 'pending' | 'processed' | 'error'
                submissions?: Submission[] | undefined
                total_count: number
              }
              submissions: {
                errors?: string[] | undefined
                status: 'success' | 'error' | 'valid_but_not_saved'
                submission?: Submission | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                metadata?: { [x: string]: unknown } | undefined
                submissions: {
                  css?: string | undefined
                  data: { [x: string]: unknown }
                  html?: string | undefined
                  metadata?: { [x: string]: unknown } | undefined
                  template_id: string | null
                  test?: boolean | undefined
                }[]
                template_id?: (string | null) | undefined
                test?: boolean | undefined
              }
            }
            output: {
              error?: string | undefined
              errors?: string[] | undefined
              status: 'success' | 'error'
              submission_batch: {
                completion_percentage: number
                error_count: number
                id: string
                metadata: { [x: string]: unknown }
                pending_count: number
                processed_at: string | null
                state: 'pending' | 'processed' | 'error'
                submissions?: Submission[] | undefined
                total_count: number
              }
              submissions: {
                errors?: string[] | undefined
                status: 'success' | 'error' | 'valid_but_not_saved'
                submission?: Submission | undefined
              }[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                metadata?: { [x: string]: unknown } | undefined
                submissions: {
                  css?: string | undefined
                  data: { [x: string]: unknown }
                  html?: string | undefined
                  metadata?: { [x: string]: unknown } | undefined
                  template_id: string | null
                  test?: boolean | undefined
                }[]
                template_id?: (string | null) | undefined
                test?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                metadata?: { [x: string]: unknown } | undefined
                submissions: {
                  css?: string | undefined
                  data: { [x: string]: unknown }
                  html?: string | undefined
                  metadata?: { [x: string]: unknown } | undefined
                  template_id: string | null
                  test?: boolean | undefined
                }[]
                template_id?: (string | null) | undefined
                test?: boolean | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/submissions/batches/:submission_batch_id': {
      $get:
        | {
            input: { param: { submission_batch_id: string } } & {
              query: { include_submissions?: boolean | undefined }
            }
            output: {
              completion_percentage: number
              error_count: number
              id: string
              metadata: { [x: string]: unknown }
              pending_count: number
              processed_at: string | null
              state: 'pending' | 'processed' | 'error'
              submissions?: Submission[] | undefined
              total_count: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { submission_batch_id: string } } & {
              query: { include_submissions?: boolean | undefined }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { submission_batch_id: string } } & {
              query: { include_submissions?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/submissions/:submission_id': {
      $delete:
        | {
            input: { param: { submission_id: string } }
            output: Submission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { submission_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { submission_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { submission_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { submission_id: string } } & {
              query: { include_data?: boolean | undefined }
            }
            output: Submission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { submission_id: string } } & {
              query: { include_data?: boolean | undefined }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { submission_id: string } } & {
              query: { include_data?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/templates': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                parent_folder_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {
              allow_additional_properties: boolean
              description: string | null
              document_url: string | null
              editable_submissions: boolean
              expiration_interval: 'minutes' | 'hours' | 'days'
              expire_after: number
              expire_submissions: boolean
              id: string
              locked: boolean
              name: string | null
              page_dimensions: number[][] | null
              parent_folder_id: string | null
              path: string
              permanent_document_url: string | null
              public_submissions: boolean
              public_web_form: boolean
              redirect_url: string | null
              slack_webhook_url: string | null
              template_type: string
              webhook_url: string | null
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                parent_folder_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                parent_folder_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: {
              form: {
                'template[document]': File
                'template[name]': string
                'template[parent_folder_id]'?: string | undefined
              }
            }
            output: {
              allow_additional_properties: boolean
              description: string | null
              editable_submissions: boolean
              expiration_interval?: 'minutes' | 'hours' | 'days' | undefined
              expire_after?: number | undefined
              expire_submissions: boolean
              id: string
              locked: boolean
              name: string | null
              parent_folder_id?: (string | null) | undefined
              path?: string | undefined
              public_submissions: boolean
              public_web_form: boolean
              redirect_url: string | null
              slack_webhook_url: string | null
              template_type: string
              webhook_url: string | null
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              form: {
                'template[document]': File
                'template[name]': string
                'template[parent_folder_id]'?: string | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/templates/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: {
              allow_additional_properties: boolean
              description: string | null
              document_url: string | null
              editable_submissions: boolean
              expiration_interval: 'minutes' | 'hours' | 'days'
              expire_after: number
              expire_submissions: boolean
              id: string
              locked: boolean
              name: string | null
              page_dimensions: number[][] | null
              parent_folder_id: string | null
              path: string
              permanent_document_url: string | null
              public_submissions: boolean
              public_web_form: boolean
              redirect_url: string | null
              slack_webhook_url: string | null
              template_type: string
              webhook_url: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put: {
        input: { param: { template_id: string } } & {
          json: {
            template: {
              allow_additional_properties?: boolean | undefined
              description?: (string | null) | undefined
              editable_submissions?: boolean | undefined
              expiration_interval?: 'minutes' | 'hours' | 'days' | undefined
              expire_after?: number | undefined
              expire_submissions?: boolean | undefined
              footer_html?: (string | null) | undefined
              header_html?: (string | null) | undefined
              html?: (string | null) | undefined
              name?: (string | null) | undefined
              public_submissions?: boolean | undefined
              public_web_form?: boolean | undefined
              redirect_url?: (string | null) | undefined
              scss?: (string | null) | undefined
              slack_webhook_url?: (string | null) | undefined
              webhook_url?: (string | null) | undefined
            }
          }
        }
        output: { errors?: string[] | undefined; status: 'success' | 'error' }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/:template_id/add_fields': {
      $put:
        | {
            input: { param: { template_id: string } } & {
              json: {
                fields: {
                  alignment?: 'left' | 'center' | 'right' | undefined
                  autoCalculateMaxLength?: boolean | undefined
                  backgroundColor?: string | undefined
                  backgroundColorFieldName?: string | undefined
                  backgroundColorFieldRequired?: boolean | undefined
                  barcodeSymbology?: string | undefined
                  bold?: boolean | undefined
                  characterSpacing?: number | undefined
                  checkCharacter?:
                    | '&#10003;'
                    | '&#10004;'
                    | '&#10006;'
                    | '&#10007;'
                    | '&#10008;'
                    | undefined
                  checkColor?: string | undefined
                  checkColorFieldName?: string | undefined
                  checkColorFieldRequired?: boolean | undefined
                  color?: string | undefined
                  colorFieldName?: string | undefined
                  colorFieldRequired?: boolean | undefined
                  comb?: boolean | undefined
                  combNumberOfCells?: number | undefined
                  combValueOffset?: number | undefined
                  combinedFieldFormat?: string | undefined
                  combinedFieldNames?: string | undefined
                  combinedFieldSeparator?: string | undefined
                  combinedFieldType?: string | undefined
                  condition?: string | undefined
                  currency?: boolean | undefined
                  dateTimeFormat?: string | undefined
                  decimalPlaces?: number | undefined
                  default?: string | undefined
                  description?: string | undefined
                  displayType?:
                    | 'text'
                    | 'check'
                    | 'qrcode'
                    | 'barcode'
                    | 'image'
                    | 'shape'
                    | undefined
                  exclusiveMaximum?: boolean | undefined
                  exclusiveMinimum?: boolean | undefined
                  falseText?: string | undefined
                  fontSize?: number | undefined
                  height?: number | undefined
                  hidden?: boolean | undefined
                  id?: number | undefined
                  imageGravity?:
                    | 'NorthWest'
                    | 'North'
                    | 'NorthEast'
                    | 'West'
                    | 'Center'
                    | 'East'
                    | 'SouthWest'
                    | 'South'
                    | 'SouthEast'
                    | undefined
                  imageScaleType?: 'fit' | 'fill' | 'stretch' | undefined
                  includeTime?: boolean | undefined
                  integer?: boolean | undefined
                  invertBooleanCondition?: boolean | undefined
                  maxLength?: number | undefined
                  maximum?: number | undefined
                  metadata?: string | undefined
                  minLength?: number | undefined
                  minimum?: number | undefined
                  multiline?: boolean | undefined
                  multilineLines?: number | undefined
                  name: string
                  numberConditionRangeExclusiveMax?: boolean | undefined
                  numberConditionRangeExclusiveMin?: boolean | undefined
                  numberConditionRangeMax?: number | undefined
                  numberConditionRangeMin?: number | undefined
                  numberConditionType?: 'equals' | 'range' | 'gte' | 'gt' | 'lte' | 'lt' | undefined
                  opacity?: number | undefined
                  optionList?: string | undefined
                  overflow?: 'shrink_to_fit' | 'truncate' | undefined
                  page: number
                  placeholder?: string | undefined
                  qrcodeColor?: string | undefined
                  qrcodeColorFieldName?: string | undefined
                  qrcodeColorFieldRequired?: boolean | undefined
                  required?: boolean | undefined
                  rotation?: number | undefined
                  shapeBorderColor?: string | undefined
                  shapeBorderColorFieldName?: string | undefined
                  shapeBorderColorFieldRequired?: boolean | undefined
                  shapeBorderWidth?: number | undefined
                  shapeFillColor?: string | undefined
                  shapeFillColorFieldName?: string | undefined
                  shapeFillColorFieldRequired?: boolean | undefined
                  shapeType?: 'square' | 'rectangle' | 'circle' | 'ellipse' | undefined
                  signatureAllowDraw?: boolean | undefined
                  signatureAllowType?: boolean | undefined
                  static?: boolean | undefined
                  strikethrough?: boolean | undefined
                  stringConditionType?:
                    | 'equals'
                    | 'contains'
                    | 'starts_with'
                    | 'ends_with'
                    | 'regex'
                    | undefined
                  title?: string | undefined
                  trueText?: string | undefined
                  type?:
                    | 'string'
                    | 'number'
                    | 'boolean'
                    | 'date'
                    | 'address'
                    | 'country'
                    | 'email'
                    | 'url'
                    | 'image'
                    | 'signature'
                    | 'barcode'
                    | 'combined'
                    | undefined
                  typeface?: string | undefined
                  uppercase?: boolean | undefined
                  vAlignment?: 'bottom' | 'center' | 'top' | undefined
                  width?: number | undefined
                  x?: number | undefined
                  y?: number | undefined
                }[]
              }
            }
            output: {
              errors?: string[] | undefined
              new_field_ids?: number[] | undefined
              status: 'success' | 'error'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              json: {
                fields: {
                  alignment?: 'left' | 'center' | 'right' | undefined
                  autoCalculateMaxLength?: boolean | undefined
                  backgroundColor?: string | undefined
                  backgroundColorFieldName?: string | undefined
                  backgroundColorFieldRequired?: boolean | undefined
                  barcodeSymbology?: string | undefined
                  bold?: boolean | undefined
                  characterSpacing?: number | undefined
                  checkCharacter?:
                    | '&#10003;'
                    | '&#10004;'
                    | '&#10006;'
                    | '&#10007;'
                    | '&#10008;'
                    | undefined
                  checkColor?: string | undefined
                  checkColorFieldName?: string | undefined
                  checkColorFieldRequired?: boolean | undefined
                  color?: string | undefined
                  colorFieldName?: string | undefined
                  colorFieldRequired?: boolean | undefined
                  comb?: boolean | undefined
                  combNumberOfCells?: number | undefined
                  combValueOffset?: number | undefined
                  combinedFieldFormat?: string | undefined
                  combinedFieldNames?: string | undefined
                  combinedFieldSeparator?: string | undefined
                  combinedFieldType?: string | undefined
                  condition?: string | undefined
                  currency?: boolean | undefined
                  dateTimeFormat?: string | undefined
                  decimalPlaces?: number | undefined
                  default?: string | undefined
                  description?: string | undefined
                  displayType?:
                    | 'text'
                    | 'check'
                    | 'qrcode'
                    | 'barcode'
                    | 'image'
                    | 'shape'
                    | undefined
                  exclusiveMaximum?: boolean | undefined
                  exclusiveMinimum?: boolean | undefined
                  falseText?: string | undefined
                  fontSize?: number | undefined
                  height?: number | undefined
                  hidden?: boolean | undefined
                  id?: number | undefined
                  imageGravity?:
                    | 'NorthWest'
                    | 'North'
                    | 'NorthEast'
                    | 'West'
                    | 'Center'
                    | 'East'
                    | 'SouthWest'
                    | 'South'
                    | 'SouthEast'
                    | undefined
                  imageScaleType?: 'fit' | 'fill' | 'stretch' | undefined
                  includeTime?: boolean | undefined
                  integer?: boolean | undefined
                  invertBooleanCondition?: boolean | undefined
                  maxLength?: number | undefined
                  maximum?: number | undefined
                  metadata?: string | undefined
                  minLength?: number | undefined
                  minimum?: number | undefined
                  multiline?: boolean | undefined
                  multilineLines?: number | undefined
                  name: string
                  numberConditionRangeExclusiveMax?: boolean | undefined
                  numberConditionRangeExclusiveMin?: boolean | undefined
                  numberConditionRangeMax?: number | undefined
                  numberConditionRangeMin?: number | undefined
                  numberConditionType?: 'equals' | 'range' | 'gte' | 'gt' | 'lte' | 'lt' | undefined
                  opacity?: number | undefined
                  optionList?: string | undefined
                  overflow?: 'shrink_to_fit' | 'truncate' | undefined
                  page: number
                  placeholder?: string | undefined
                  qrcodeColor?: string | undefined
                  qrcodeColorFieldName?: string | undefined
                  qrcodeColorFieldRequired?: boolean | undefined
                  required?: boolean | undefined
                  rotation?: number | undefined
                  shapeBorderColor?: string | undefined
                  shapeBorderColorFieldName?: string | undefined
                  shapeBorderColorFieldRequired?: boolean | undefined
                  shapeBorderWidth?: number | undefined
                  shapeFillColor?: string | undefined
                  shapeFillColorFieldName?: string | undefined
                  shapeFillColorFieldRequired?: boolean | undefined
                  shapeType?: 'square' | 'rectangle' | 'circle' | 'ellipse' | undefined
                  signatureAllowDraw?: boolean | undefined
                  signatureAllowType?: boolean | undefined
                  static?: boolean | undefined
                  strikethrough?: boolean | undefined
                  stringConditionType?:
                    | 'equals'
                    | 'contains'
                    | 'starts_with'
                    | 'ends_with'
                    | 'regex'
                    | undefined
                  title?: string | undefined
                  trueText?: string | undefined
                  type?:
                    | 'string'
                    | 'number'
                    | 'boolean'
                    | 'date'
                    | 'address'
                    | 'country'
                    | 'email'
                    | 'url'
                    | 'image'
                    | 'signature'
                    | 'barcode'
                    | 'combined'
                    | undefined
                  typeface?: string | undefined
                  uppercase?: boolean | undefined
                  vAlignment?: 'bottom' | 'center' | 'top' | undefined
                  width?: number | undefined
                  x?: number | undefined
                  y?: number | undefined
                }[]
              }
            }
            output: {
              errors?: string[] | undefined
              new_field_ids?: number[] | undefined
              status: 'success' | 'error'
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/templates/:template_id/copy': {
      $post:
        | {
            input: { param: { template_id: string } } & {
              json: { name?: string | undefined; parent_folder_id: string }
            }
            output: {
              allow_additional_properties: boolean
              description: string | null
              document_url: string | null
              editable_submissions: boolean
              expiration_interval: 'minutes' | 'hours' | 'days'
              expire_after: number
              expire_submissions: boolean
              id: string
              locked: boolean
              name: string | null
              page_dimensions: number[][] | null
              parent_folder_id: string | null
              path: string
              permanent_document_url: string | null
              public_submissions: boolean
              public_web_form: boolean
              redirect_url: string | null
              slack_webhook_url: string | null
              template_type: string
              webhook_url: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              json: { name?: string | undefined; parent_folder_id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/templates/:template_id/move': {
      $post:
        | {
            input: { param: { template_id: string } } & { json: { parent_folder_id: string } }
            output: {
              allow_additional_properties: boolean
              description: string | null
              document_url: string | null
              editable_submissions: boolean
              expiration_interval: 'minutes' | 'hours' | 'days'
              expire_after: number
              expire_submissions: boolean
              id: string
              locked: boolean
              name: string | null
              page_dimensions: number[][] | null
              parent_folder_id: string | null
              path: string
              permanent_document_url: string | null
              public_submissions: boolean
              public_web_form: boolean
              redirect_url: string | null
              slack_webhook_url: string | null
              template_type: string
              webhook_url: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & { json: { parent_folder_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/templates/:template_id/schema': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: {
              $schema?: string | undefined
              additionalProperties?: boolean | undefined
              definitions?: { [x: string]: unknown } | undefined
              description?: string | undefined
              id?: string | undefined
              properties?: { [x: string]: unknown } | undefined
              required?: { [x: string]: unknown }[] | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/templates/:template_id/submissions': {
      $get:
        | {
            input: { param: { template_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                type?: string | undefined
                include_data?: boolean | undefined
              }
            }
            output: { limit: number; next_cursor: string | null; submissions: Submission[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                created_after?: string | undefined
                created_before?: string | undefined
                type?: string | undefined
                include_data?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { template_id: string } } & {
              json: {
                css?: string | undefined
                data: { [x: string]: unknown }
                data_requests?:
                  | {
                      auth_phone_number_hash?: (string | null) | undefined
                      auth_provider?: (string | null) | undefined
                      auth_second_factor_type?:
                        | 'none'
                        | 'phone_number'
                        | 'totp'
                        | 'mobile_push'
                        | 'security_key'
                        | 'fingerprint'
                        | undefined
                      auth_session_id_hash?: (string | null) | undefined
                      auth_session_started_at?: (string | null) | undefined
                      auth_type:
                        | 'none'
                        | 'password'
                        | 'oauth'
                        | 'email_link'
                        | 'phone_number'
                        | 'ldap'
                        | 'saml'
                      auth_user_id_hash?: (string | null) | undefined
                      auth_username_hash?: (string | null) | undefined
                      email: string | null
                      fields?: (string[] | null) | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      name?: (string | null) | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                expires_in?: number | undefined
                field_overrides?: { [x: string]: unknown } | undefined
                html?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                test?: boolean | undefined
              }
            }
            output: {
              errors?: string[] | undefined
              status: 'success' | 'error'
              submission: Submission
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { template_id: string } } & {
              json: {
                css?: string | undefined
                data: { [x: string]: unknown }
                data_requests?:
                  | {
                      auth_phone_number_hash?: (string | null) | undefined
                      auth_provider?: (string | null) | undefined
                      auth_second_factor_type?:
                        | 'none'
                        | 'phone_number'
                        | 'totp'
                        | 'mobile_push'
                        | 'security_key'
                        | 'fingerprint'
                        | undefined
                      auth_session_id_hash?: (string | null) | undefined
                      auth_session_started_at?: (string | null) | undefined
                      auth_type:
                        | 'none'
                        | 'password'
                        | 'oauth'
                        | 'email_link'
                        | 'phone_number'
                        | 'ldap'
                        | 'saml'
                      auth_user_id_hash?: (string | null) | undefined
                      auth_username_hash?: (string | null) | undefined
                      email: string | null
                      fields?: (string[] | null) | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      name?: (string | null) | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                expires_in?: number | undefined
                field_overrides?: { [x: string]: unknown } | undefined
                html?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                test?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } } & {
              json: {
                css?: string | undefined
                data: { [x: string]: unknown }
                data_requests?:
                  | {
                      auth_phone_number_hash?: (string | null) | undefined
                      auth_provider?: (string | null) | undefined
                      auth_second_factor_type?:
                        | 'none'
                        | 'phone_number'
                        | 'totp'
                        | 'mobile_push'
                        | 'security_key'
                        | 'fingerprint'
                        | undefined
                      auth_session_id_hash?: (string | null) | undefined
                      auth_session_started_at?: (string | null) | undefined
                      auth_type:
                        | 'none'
                        | 'password'
                        | 'oauth'
                        | 'email_link'
                        | 'phone_number'
                        | 'ldap'
                        | 'saml'
                      auth_user_id_hash?: (string | null) | undefined
                      auth_username_hash?: (string | null) | undefined
                      email: string | null
                      fields?: (string[] | null) | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      name?: (string | null) | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                expires_in?: number | undefined
                field_overrides?: { [x: string]: unknown } | undefined
                html?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                test?: boolean | undefined
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_id: string } } & {
              json: {
                css?: string | undefined
                data: { [x: string]: unknown }
                data_requests?:
                  | {
                      auth_phone_number_hash?: (string | null) | undefined
                      auth_provider?: (string | null) | undefined
                      auth_second_factor_type?:
                        | 'none'
                        | 'phone_number'
                        | 'totp'
                        | 'mobile_push'
                        | 'security_key'
                        | 'fingerprint'
                        | undefined
                      auth_session_id_hash?: (string | null) | undefined
                      auth_session_started_at?: (string | null) | undefined
                      auth_type:
                        | 'none'
                        | 'password'
                        | 'oauth'
                        | 'email_link'
                        | 'phone_number'
                        | 'ldap'
                        | 'saml'
                      auth_user_id_hash?: (string | null) | undefined
                      auth_username_hash?: (string | null) | undefined
                      email: string | null
                      fields?: (string[] | null) | undefined
                      metadata?: { [x: string]: unknown } | undefined
                      name?: (string | null) | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                expires_in?: number | undefined
                field_overrides?: { [x: string]: unknown } | undefined
                html?: string | undefined
                metadata?: { [x: string]: unknown } | undefined
                password?: string | undefined
                test?: boolean | undefined
              }
            }
            output: InvalidRequest
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/templates/:template_id/submissions/batch': {
      $post:
        | {
            input: { param: { template_id: string } } & { json: { [x: string]: unknown }[] }
            output: {
              errors?: string[] | undefined
              status: 'success' | 'error'
              submission: Submission
            }[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { template_id: string } } & { json: { [x: string]: unknown }[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } } & { json: { [x: string]: unknown }[] }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_id: string } } & { json: { [x: string]: unknown }[] }
            output: InvalidRequest[]
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/templates/:template_id?full=true': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: {
              allow_additional_properties: boolean
              defaults: { color: string | null; fontSize: number; typeface: string }
              demo: boolean
              description: string | null
              document_filename: string | null
              document_md5: string | null
              document_parse_error: boolean
              document_processed: boolean
              document_state: string
              document_url: string | null
              editable_submissions: boolean
              embed_domains: string[] | null
              encrypt_pdfs: boolean
              encrypt_pdfs_password: string | null
              expiration_interval: 'minutes' | 'hours' | 'days'
              expire_after: number
              expire_submissions: boolean
              field_order: number[][]
              fields: { [x: string]: unknown }
              first_template: boolean
              footer_html: string | null
              header_html: string | null
              html: string | null
              id: string
              locked: boolean
              name: string | null
              page_count: number
              page_dimensions: number[][] | null
              parent_folder_id: string | null
              path: string
              permanent_document_url: string | null
              public_submissions: boolean
              public_web_form: boolean
              redirect_url: string | null
              scss: string | null
              shared_field_data: { [x: string]: unknown }
              slack_webhook_url: string | null
              template_type: string
              webhook_url: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/templates?desc=cached_upload': {
      $post:
        | {
            input: {
              json: {
                template: {
                  allow_additional_properties?: boolean | undefined
                  description?: (string | null) | undefined
                  document?:
                    | {
                        id: string
                        metadata: { filename: string; mime_type: 'application/pdf'; size: number }
                        storage: 'cache'
                      }
                    | undefined
                  editable_submissions?: boolean | undefined
                  expiration_interval?: 'minutes' | 'hours' | 'days' | undefined
                  expire_after?: number | undefined
                  expire_submissions?: boolean | undefined
                  footer_html?: (string | null) | undefined
                  header_html?: (string | null) | undefined
                  html?: (string | null) | undefined
                  name: string | null
                  public_submissions?: boolean | undefined
                  public_web_form?: boolean | undefined
                  redirect_url?: (string | null) | undefined
                  scss?: (string | null) | undefined
                  slack_webhook_url?: (string | null) | undefined
                  template_type?: 'pdf' | 'html' | undefined
                  webhook_url?: (string | null) | undefined
                }
              }
            }
            output: {
              allow_additional_properties: boolean
              description: string | null
              editable_submissions: boolean
              expiration_interval?: 'minutes' | 'hours' | 'days' | undefined
              expire_after?: number | undefined
              expire_submissions: boolean
              id: string
              locked: boolean
              name: string | null
              parent_folder_id?: (string | null) | undefined
              path?: string | undefined
              public_submissions: boolean
              public_web_form: boolean
              redirect_url: string | null
              slack_webhook_url: string | null
              template_type: string
              webhook_url: string | null
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                template: {
                  allow_additional_properties?: boolean | undefined
                  description?: (string | null) | undefined
                  document?:
                    | {
                        id: string
                        metadata: { filename: string; mime_type: 'application/pdf'; size: number }
                        storage: 'cache'
                      }
                    | undefined
                  editable_submissions?: boolean | undefined
                  expiration_interval?: 'minutes' | 'hours' | 'days' | undefined
                  expire_after?: number | undefined
                  expire_submissions?: boolean | undefined
                  footer_html?: (string | null) | undefined
                  header_html?: (string | null) | undefined
                  html?: (string | null) | undefined
                  name: string | null
                  public_submissions?: boolean | undefined
                  public_web_form?: boolean | undefined
                  redirect_url?: (string | null) | undefined
                  scss?: (string | null) | undefined
                  slack_webhook_url?: (string | null) | undefined
                  template_type?: 'pdf' | 'html' | undefined
                  webhook_url?: (string | null) | undefined
                }
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/templates?desc=html': {
      $post:
        | {
            input: {
              json: {
                template: {
                  allow_additional_properties?: boolean | undefined
                  description?: (string | null) | undefined
                  editable_submissions?: boolean | undefined
                  expiration_interval?: 'minutes' | 'hours' | 'days' | undefined
                  expire_after?: number | undefined
                  expire_submissions?: boolean | undefined
                  footer_html?: (string | null) | undefined
                  header_html?: (string | null) | undefined
                  html?: (string | null) | undefined
                  name: string | null
                  public_submissions?: boolean | undefined
                  public_web_form?: boolean | undefined
                  redirect_url?: (string | null) | undefined
                  scss?: (string | null) | undefined
                  slack_webhook_url?: (string | null) | undefined
                  template_type?: 'pdf' | 'html' | undefined
                  webhook_url?: (string | null) | undefined
                }
              }
            }
            output: {
              allow_additional_properties: boolean
              description: string | null
              editable_submissions: boolean
              expiration_interval?: 'minutes' | 'hours' | 'days' | undefined
              expire_after?: number | undefined
              expire_submissions: boolean
              id: string
              locked: boolean
              name: string | null
              parent_folder_id?: (string | null) | undefined
              path?: string | undefined
              public_submissions: boolean
              public_web_form: boolean
              redirect_url: string | null
              slack_webhook_url: string | null
              template_type: string
              webhook_url: string | null
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                template: {
                  allow_additional_properties?: boolean | undefined
                  description?: (string | null) | undefined
                  editable_submissions?: boolean | undefined
                  expiration_interval?: 'minutes' | 'hours' | 'days' | undefined
                  expire_after?: number | undefined
                  expire_submissions?: boolean | undefined
                  footer_html?: (string | null) | undefined
                  header_html?: (string | null) | undefined
                  html?: (string | null) | undefined
                  name: string | null
                  public_submissions?: boolean | undefined
                  public_web_form?: boolean | undefined
                  redirect_url?: (string | null) | undefined
                  scss?: (string | null) | undefined
                  slack_webhook_url?: (string | null) | undefined
                  template_type?: 'pdf' | 'html' | undefined
                  webhook_url?: (string | null) | undefined
                }
              }
            }
            output: AuthenticationError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/uploads/presign': {
      $get:
        | {
            input: {}
            output: {
              fields: {
                key: string
                policy: string
                'x-amz-algorithm': string
                'x-amz-credential': string
                'x-amz-date': string
                'x-amz-signature': string
              }
              headers: { [x: string]: unknown }
              method?: 'post' | undefined
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: AuthenticationError; outputFormat: 'json'; status: 401 }
    }
  },
  '/'
>
export default routes
