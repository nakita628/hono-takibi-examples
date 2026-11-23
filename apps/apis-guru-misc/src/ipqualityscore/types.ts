declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/json/email/:YOUR_API_KEY_HERE/:USER_EMAIL_HERE': {
      $get:
        | {
            input: { param: { YOUR_API_KEY_HERE: string; USER_EMAIL_HERE: string } }
            output: {
              associated_names?:
                | { names?: string[] | undefined; status?: string | undefined }
                | undefined
              associated_phone_numbers?:
                | { phone_numbers?: string[] | undefined; status?: string | undefined }
                | undefined
              catch_all?: boolean | undefined
              common?: boolean | undefined
              deliverability?: string | undefined
              disposable?: boolean | undefined
              dns_valid?: boolean | undefined
              domain_age?:
                | {
                    human?: string | undefined
                    iso?: string | undefined
                    timestamp?: number | undefined
                  }
                | undefined
              domain_velocity?: string | undefined
              first_name?: string | undefined
              first_seen?:
                | {
                    human?: string | undefined
                    iso?: string | undefined
                    timestamp?: number | undefined
                  }
                | undefined
              fraud_score?: number | undefined
              frequent_complainer?: boolean | undefined
              generic?: boolean | undefined
              honeypot?: boolean | undefined
              leaked?: boolean | undefined
              message?: string | undefined
              overall_score?: number | undefined
              recent_abuse?: boolean | undefined
              request_id?: string | undefined
              sanitized_email?: string | undefined
              smtp_score?: number | undefined
              spam_trap_score?: string | undefined
              success?: boolean | undefined
              suggested_domain?: string | undefined
              suspect?: boolean | undefined
              timed_out?: boolean | undefined
              user_activity?: string | undefined
              valid?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { YOUR_API_KEY_HERE: string; USER_EMAIL_HERE: string } }
            output: {
              message?: string | undefined
              request_id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { YOUR_API_KEY_HERE: string; USER_EMAIL_HERE: string } }
            output: {
              message?: string | undefined
              request_id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/json/phone/:YOUR_API_KEY_HERE/:USER_PHONE_HERE': {
      $get:
        | {
            input: { param: { YOUR_API_KEY_HERE: string; USER_PHONE_HERE: string } } & {
              query: { country?: string | undefined }
            }
            output: {
              VOIP?: boolean | undefined
              active?: boolean | undefined
              active_status?: string | undefined
              associated_email_addresses?:
                | { emails?: string[] | undefined; status?: string | undefined }
                | undefined
              carrier?: string | undefined
              city?: string | undefined
              country?: string | undefined
              dialing_code?: number | undefined
              do_not_call?: boolean | undefined
              formatted?: string | undefined
              fraud_score?: number | undefined
              leaked?: boolean | undefined
              line_type?: string | undefined
              local_format?: string | undefined
              mcc?: string | undefined
              message?: string | undefined
              mnc?: string | undefined
              name?: string | undefined
              prepaid?: string | undefined
              recent_abuse?: boolean | undefined
              region?: string | undefined
              request_id?: string | undefined
              risky?: boolean | undefined
              sms_domain?: string | undefined
              sms_email?: string | undefined
              spammer?: boolean | undefined
              success?: boolean | undefined
              timezone?: string | undefined
              user_activity?: string | undefined
              valid?: boolean | undefined
              zip_code?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { YOUR_API_KEY_HERE: string; USER_PHONE_HERE: string } } & {
              query: { country?: string | undefined }
            }
            output: {
              message?: string | undefined
              request_id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { YOUR_API_KEY_HERE: string; USER_PHONE_HERE: string } } & {
              query: { country?: string | undefined }
            }
            output: {
              message?: string | undefined
              request_id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/json/url/:YOUR_API_KEY_HERE/:URL_HERE': {
      $get:
        | {
            input: { param: { YOUR_API_KEY_HERE: string; URL_HERE: string } }
            output: {
              adult?: boolean | undefined
              category?: string | undefined
              content_type?: string | undefined
              dns_valid?: boolean | undefined
              domain?: string | undefined
              domain_age?:
                | {
                    human?: string | undefined
                    iso?: string | undefined
                    timestamp?: number | undefined
                  }
                | undefined
              domain_rank?: number | undefined
              ip_address?: string | undefined
              malware?: boolean | undefined
              message?: string | undefined
              page_size?: number | undefined
              parking?: boolean | undefined
              phishing?: boolean | undefined
              request_id?: string | undefined
              risk_score?: number | undefined
              server?: string | undefined
              spamming?: boolean | undefined
              status_code?: number | undefined
              success?: boolean | undefined
              suspicious?: boolean | undefined
              unsafe?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { YOUR_API_KEY_HERE: string; URL_HERE: string } }
            output: {
              message?: string | undefined
              request_id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { YOUR_API_KEY_HERE: string; URL_HERE: string } }
            output: {
              message?: string | undefined
              request_id?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
