declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/order/feedback': {
      $post: {
        input: {
          query: {
            id: string
            key: string
            format?: 'json' | 'xml' | undefined
            action: 'APPROVE' | 'REJECT' | 'REJECT_BLACKLIST'
            notes?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/order/screen': {
      $post: {
        input: {
          query: {
            ip: string
            key: string
            format?: 'json' | 'xml' | undefined
            last_name?: string | undefined
            first_name?: string | undefined
            bill_addr?: string | undefined
            bill_city?: string | undefined
            bill_state?: string | undefined
            bill_country?: string | undefined
            bill_zip_code?: string | undefined
            ship_addr?: string | undefined
            ship_city?: string | undefined
            ship_state?: string | undefined
            ship_country?: string | undefined
            ship_zip_code?: string | undefined
            email_domain?: string | undefined
            user_phone?: string | undefined
            email?: string | undefined
            email_hash?: string | undefined
            username_hash?: string | undefined
            password_hash?: string | undefined
            bin_no?: string | undefined
            card_hash?: string | undefined
            avs_result?: string | undefined
            cvv_result?: string | undefined
            user_order_id?: string | undefined
            user_order_memo?: string | undefined
            amount?: number | undefined
            quantity?: number | undefined
            currency?: string | undefined
            department?: string | undefined
            payment_mode?: string | undefined
            flp_checksum?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
