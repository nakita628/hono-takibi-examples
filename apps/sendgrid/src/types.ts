type MailBatchResponse = { batch_id?: string | undefined }
type ErrorResponse = {
  errors?:
    | {
        message?: string | undefined
        field?: (string | null) | undefined
        help?: { [x: string]: unknown } | undefined
      }[]
    | undefined
  id?: string | undefined
}
type ContentEncoding = 'gzip'
type MailFrom = { email: string; name?: string | undefined }
type MailTo = { email: string; name?: string | undefined }
type Disposition = 'inline' | 'attachment'
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/mail/batch': {
      $post:
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: MailBatchResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { header: { 'on-behalf-of'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v3/mail/batch/:batch_id': {
      $get:
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: MailBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { batch_id: string } } & {
              header: { 'on-behalf-of'?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v3/mail/send': {
      $post:
        | {
            input: { header: { 'Content-Encoding'?: ContentEncoding | undefined } } & {
              json: {
                personalizations: {
                  from?: MailFrom | undefined
                  to: MailTo[]
                  cc?: MailTo[] | undefined
                  bcc?: MailTo[] | undefined
                  subject?: string | undefined
                  headers?: { [x: string]: unknown } | undefined
                  substitutions?: { [x: string]: string } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                }[]
                from: MailFrom
                reply_to?: MailTo | undefined
                reply_to_list?: MailTo[] | undefined
                subject?: string | undefined
                content?: { type: string; value: string }[] | undefined
                attachments?:
                  | {
                      content: string
                      type?: string | undefined
                      filename: string
                      disposition?: Disposition | undefined
                      content_id?: string | undefined
                    }[]
                  | undefined
                template_id?: string | undefined
                headers?: { [x: string]: unknown } | undefined
                categories?: string[] | undefined
                custom_args?: string | undefined
                send_at?: number | undefined
                batch_id?: string | undefined
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                          }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_source?: string | undefined
                            utm_medium?: string | undefined
                            utm_term?: string | undefined
                            utm_content?: string | undefined
                            utm_campaign?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { 'Content-Encoding'?: ContentEncoding | undefined } } & {
              json: {
                personalizations: {
                  from?: MailFrom | undefined
                  to: MailTo[]
                  cc?: MailTo[] | undefined
                  bcc?: MailTo[] | undefined
                  subject?: string | undefined
                  headers?: { [x: string]: unknown } | undefined
                  substitutions?: { [x: string]: string } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                }[]
                from: MailFrom
                reply_to?: MailTo | undefined
                reply_to_list?: MailTo[] | undefined
                subject?: string | undefined
                content?: { type: string; value: string }[] | undefined
                attachments?:
                  | {
                      content: string
                      type?: string | undefined
                      filename: string
                      disposition?: Disposition | undefined
                      content_id?: string | undefined
                    }[]
                  | undefined
                template_id?: string | undefined
                headers?: { [x: string]: unknown } | undefined
                categories?: string[] | undefined
                custom_args?: string | undefined
                send_at?: number | undefined
                batch_id?: string | undefined
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                          }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_source?: string | undefined
                            utm_medium?: string | undefined
                            utm_term?: string | undefined
                            utm_content?: string | undefined
                            utm_campaign?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Content-Encoding'?: ContentEncoding | undefined } } & {
              json: {
                personalizations: {
                  from?: MailFrom | undefined
                  to: MailTo[]
                  cc?: MailTo[] | undefined
                  bcc?: MailTo[] | undefined
                  subject?: string | undefined
                  headers?: { [x: string]: unknown } | undefined
                  substitutions?: { [x: string]: string } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                }[]
                from: MailFrom
                reply_to?: MailTo | undefined
                reply_to_list?: MailTo[] | undefined
                subject?: string | undefined
                content?: { type: string; value: string }[] | undefined
                attachments?:
                  | {
                      content: string
                      type?: string | undefined
                      filename: string
                      disposition?: Disposition | undefined
                      content_id?: string | undefined
                    }[]
                  | undefined
                template_id?: string | undefined
                headers?: { [x: string]: unknown } | undefined
                categories?: string[] | undefined
                custom_args?: string | undefined
                send_at?: number | undefined
                batch_id?: string | undefined
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                          }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_source?: string | undefined
                            utm_medium?: string | undefined
                            utm_term?: string | undefined
                            utm_content?: string | undefined
                            utm_campaign?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Content-Encoding'?: ContentEncoding | undefined } } & {
              json: {
                personalizations: {
                  from?: MailFrom | undefined
                  to: MailTo[]
                  cc?: MailTo[] | undefined
                  bcc?: MailTo[] | undefined
                  subject?: string | undefined
                  headers?: { [x: string]: unknown } | undefined
                  substitutions?: { [x: string]: string } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                }[]
                from: MailFrom
                reply_to?: MailTo | undefined
                reply_to_list?: MailTo[] | undefined
                subject?: string | undefined
                content?: { type: string; value: string }[] | undefined
                attachments?:
                  | {
                      content: string
                      type?: string | undefined
                      filename: string
                      disposition?: Disposition | undefined
                      content_id?: string | undefined
                    }[]
                  | undefined
                template_id?: string | undefined
                headers?: { [x: string]: unknown } | undefined
                categories?: string[] | undefined
                custom_args?: string | undefined
                send_at?: number | undefined
                batch_id?: string | undefined
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                          }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_source?: string | undefined
                            utm_medium?: string | undefined
                            utm_term?: string | undefined
                            utm_content?: string | undefined
                            utm_campaign?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Content-Encoding'?: ContentEncoding | undefined } } & {
              json: {
                personalizations: {
                  from?: MailFrom | undefined
                  to: MailTo[]
                  cc?: MailTo[] | undefined
                  bcc?: MailTo[] | undefined
                  subject?: string | undefined
                  headers?: { [x: string]: unknown } | undefined
                  substitutions?: { [x: string]: string } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                }[]
                from: MailFrom
                reply_to?: MailTo | undefined
                reply_to_list?: MailTo[] | undefined
                subject?: string | undefined
                content?: { type: string; value: string }[] | undefined
                attachments?:
                  | {
                      content: string
                      type?: string | undefined
                      filename: string
                      disposition?: Disposition | undefined
                      content_id?: string | undefined
                    }[]
                  | undefined
                template_id?: string | undefined
                headers?: { [x: string]: unknown } | undefined
                categories?: string[] | undefined
                custom_args?: string | undefined
                send_at?: number | undefined
                batch_id?: string | undefined
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                          }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_source?: string | undefined
                            utm_medium?: string | undefined
                            utm_term?: string | undefined
                            utm_content?: string | undefined
                            utm_campaign?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Content-Encoding'?: ContentEncoding | undefined } } & {
              json: {
                personalizations: {
                  from?: MailFrom | undefined
                  to: MailTo[]
                  cc?: MailTo[] | undefined
                  bcc?: MailTo[] | undefined
                  subject?: string | undefined
                  headers?: { [x: string]: unknown } | undefined
                  substitutions?: { [x: string]: string } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                }[]
                from: MailFrom
                reply_to?: MailTo | undefined
                reply_to_list?: MailTo[] | undefined
                subject?: string | undefined
                content?: { type: string; value: string }[] | undefined
                attachments?:
                  | {
                      content: string
                      type?: string | undefined
                      filename: string
                      disposition?: Disposition | undefined
                      content_id?: string | undefined
                    }[]
                  | undefined
                template_id?: string | undefined
                headers?: { [x: string]: unknown } | undefined
                categories?: string[] | undefined
                custom_args?: string | undefined
                send_at?: number | undefined
                batch_id?: string | undefined
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                          }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_source?: string | undefined
                            utm_medium?: string | undefined
                            utm_term?: string | undefined
                            utm_content?: string | undefined
                            utm_campaign?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { header: { 'Content-Encoding'?: ContentEncoding | undefined } } & {
              json: {
                personalizations: {
                  from?: MailFrom | undefined
                  to: MailTo[]
                  cc?: MailTo[] | undefined
                  bcc?: MailTo[] | undefined
                  subject?: string | undefined
                  headers?: { [x: string]: unknown } | undefined
                  substitutions?: { [x: string]: string } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                }[]
                from: MailFrom
                reply_to?: MailTo | undefined
                reply_to_list?: MailTo[] | undefined
                subject?: string | undefined
                content?: { type: string; value: string }[] | undefined
                attachments?:
                  | {
                      content: string
                      type?: string | undefined
                      filename: string
                      disposition?: Disposition | undefined
                      content_id?: string | undefined
                    }[]
                  | undefined
                template_id?: string | undefined
                headers?: { [x: string]: unknown } | undefined
                categories?: string[] | undefined
                custom_args?: string | undefined
                send_at?: number | undefined
                batch_id?: string | undefined
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                          }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_source?: string | undefined
                            utm_medium?: string | undefined
                            utm_term?: string | undefined
                            utm_content?: string | undefined
                            utm_campaign?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { header: { 'Content-Encoding'?: ContentEncoding | undefined } } & {
              json: {
                personalizations: {
                  from?: MailFrom | undefined
                  to: MailTo[]
                  cc?: MailTo[] | undefined
                  bcc?: MailTo[] | undefined
                  subject?: string | undefined
                  headers?: { [x: string]: unknown } | undefined
                  substitutions?: { [x: string]: string } | undefined
                  dynamic_template_data?: { [x: string]: unknown } | undefined
                  custom_args?: { [x: string]: unknown } | undefined
                  send_at?: number | undefined
                }[]
                from: MailFrom
                reply_to?: MailTo | undefined
                reply_to_list?: MailTo[] | undefined
                subject?: string | undefined
                content?: { type: string; value: string }[] | undefined
                attachments?:
                  | {
                      content: string
                      type?: string | undefined
                      filename: string
                      disposition?: Disposition | undefined
                      content_id?: string | undefined
                    }[]
                  | undefined
                template_id?: string | undefined
                headers?: { [x: string]: unknown } | undefined
                categories?: string[] | undefined
                custom_args?: string | undefined
                send_at?: number | undefined
                batch_id?: string | undefined
                asm?: { group_id: number; groups_to_display?: number[] | undefined } | undefined
                ip_pool_name?: string | undefined
                mail_settings?:
                  | {
                      bypass_list_management?: { enable?: boolean | undefined } | undefined
                      bypass_spam_management?: { enable?: boolean | undefined } | undefined
                      bypass_bounce_management?: { enable?: boolean | undefined } | undefined
                      bypass_unsubscribe_management?: { enable?: boolean | undefined } | undefined
                      footer?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                          }
                        | undefined
                      sandbox_mode?: { enable?: boolean | undefined } | undefined
                    }
                  | undefined
                tracking_settings?:
                  | {
                      click_tracking?:
                        | { enable?: boolean | undefined; enable_text?: boolean | undefined }
                        | undefined
                      open_tracking?:
                        | { enable?: boolean | undefined; substitution_tag?: string | undefined }
                        | undefined
                      subscription_tracking?:
                        | {
                            enable?: boolean | undefined
                            text?: string | undefined
                            html?: string | undefined
                            substitution_tag?: string | undefined
                          }
                        | undefined
                      ganalytics?:
                        | {
                            enable?: boolean | undefined
                            utm_source?: string | undefined
                            utm_medium?: string | undefined
                            utm_term?: string | undefined
                            utm_content?: string | undefined
                            utm_campaign?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
