import { createRoute, z } from '@hono/zod-openapi'

export const postV1OrderFeedbackRoute = createRoute({
  method: 'post',
  path: '/v1/order/feedback',
  description: 'Feedback the status of an order transaction.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'id', required: true, schema: { type: 'string' } },
        }),
      key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'key', required: true, schema: { type: 'string' } },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
      action: z
        .enum(['APPROVE', 'REJECT', 'REJECT_BLACKLIST'])
        .openapi({
          param: {
            in: 'query',
            name: 'action',
            required: true,
            schema: { enum: ['APPROVE', 'REJECT', 'REJECT_BLACKLIST'], type: 'string' },
          },
        }),
      notes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'notes',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Feedback order response',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: { '0': { value: '{"fraudlabspro_error_code":"","fraudlabspro_message":""}' } },
        },
      },
    },
  },
})

export const postV1OrderScreenRoute = createRoute({
  method: 'post',
  path: '/v1/order/screen',
  description: 'Screen order for payment fraud.',
  request: {
    query: z.object({
      ip: z
        .string()
        .openapi({
          param: { in: 'query', name: 'ip', required: true, schema: { type: 'string' } },
        }),
      key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'key', required: true, schema: { type: 'string' } },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
      last_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'last_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      first_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'first_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bill_addr: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bill_addr',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bill_city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bill_city',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bill_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bill_state',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bill_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bill_country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bill_zip_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bill_zip_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ship_addr: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'ship_addr',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ship_city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'ship_city',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ship_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'ship_state',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ship_country: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'ship_country', schema: { type: 'string' }, required: false },
        }),
      ship_zip_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'ship_zip_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email_domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'email_domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user_phone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'user_phone',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email_hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'email_hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username_hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'username_hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
      password_hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'password_hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
      bin_no: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'bin_no',
            schema: { type: 'string' },
            required: false,
          },
        }),
      card_hash: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'card_hash',
            schema: { type: 'string' },
            required: false,
          },
        }),
      avs_result: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'avs_result',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cvv_result: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'cvv_result',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user_order_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'user_order_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user_order_memo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'user_order_memo',
            schema: { type: 'string' },
            required: false,
          },
        }),
      amount: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'amount',
            schema: { type: 'number' },
            required: false,
          },
        }),
      quantity: z
        .preprocess(
          (val) => (val === '' ? undefined : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            )
            .optional(),
        )
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'quantity',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
          },
        }),
      department: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'department',
            schema: { type: 'string' },
            required: false,
          },
        }),
      payment_mode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'payment_mode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      flp_checksum: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            in: 'query',
            name: 'flp_checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Screen order response',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: {
            '0': {
              value:
                '{"is_country_match":"","is_high_risk_country":"","distance_in_km":"-","distance_in_mile":"-","ip_country":"","ip_continent":"","ip_region":"","ip_city":"","ip_latitude":"","ip_longitude":"","ip_timezone":"","ip_elevation":"","ip_domain":"","ip_mobile_mnc":"","ip_mobile_mcc":"","ip_mobile_brand":"","ip_netspeed":"","ip_isp_name":"","ip_usage_type":"","is_free_email":"","is_new_domain_name":"","is_domain_exists":"","is_proxy_ip_address":"","is_bin_found":"","is_bin_country_match":"","is_bin_name_match":"","is_bin_phone_match":"","is_bin_prepaid":"","is_address_ship_forward":"NA","is_bill_ship_city_match":"","is_bill_ship_state_match":"","is_bill_ship_country_match":"","is_bill_ship_postal_match":"","is_ship_address_blacklist":"","is_phone_blacklist":"","is_ip_blacklist":"","is_email_blacklist":"","is_credit_card_blacklist":"","is_device_blacklist":"","is_user_blacklist":"","is_high_risk_username_password":"","is_export_controlled_country":"","is_malware_exploit":"","user_order_id":"","user_order_memo":"","fraudlabspro_score":0,"fraudlabspro_distribution":0,"fraudlabspro_status":"","fraudlabspro_id":"NA","fraudlabspro_version":"1.5.0","fraudlabspro_error_code":"","fraudlabspro_message":"","fraudlabspro_credits":"0"}',
            },
          },
        },
      },
    },
  },
})
