declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            account_name: string
            country: string
            password: string
            user_email: string
            user_first_name: string
            user_last_name: string
            user_phone: string
            username: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: {
          json: {
            account_name: string
            country: string
            password: string
            private_uploads?: number | undefined
            setting_sms_hide_business_name?: number | undefined
            setting_sms_hide_your_number?: number | undefined
            timezone: string
            user_email: string
            user_first_name: string
            user_last_name: string
            user_phone: string
            username: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/account-verify/send': {
      $put: {
        input: {
          json: {
            country?: string | undefined
            type?: string | undefined
            user_phone?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/account-verify/verify/:activation_token': {
      $put: {
        input: { param: { activation_token: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/account/usage/:year/:month/:type': {
      $get: {
        input: { param: { year: number; month: number; type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/email/receipt': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            action: string
            action_address: string
            enabled: number
            match_type: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/email/receipt/:rule_id': {
      $delete: {
        input: { param: { rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { rule_id: number } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { rule_id: number } } & {
          json: {
            action?: string | undefined
            action_address?: string | undefined
            enabled?: number | undefined
            match_type?: number | undefined
            rule_name?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/fax/inbound': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            action: string
            action_address: string
            dedicated_number: string
            enabled: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/fax/inbound/:inbound_rule_id': {
      $delete: {
        input: { param: { inbound_rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { inbound_rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { inbound_rule_id: number } } & {
          json: {
            action: string
            action_address: string
            dedicated_number: string
            enabled: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/fax/receipts': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            action: string
            action_address: string
            enabled: number
            match_type: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/fax/receipts/:rule_id': {
      $delete: {
        input: { param: { rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { rule_id: number } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { rule_id: number } } & {
          json: {
            action?: string | undefined
            action_address?: string | undefined
            enabled?: number | undefined
            match_type?: number | undefined
            rule_name?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/sms/inbound': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/automations/sms/inbound/': {
      $post: {
        input: {
          json: {
            action: string
            action_address: string
            dedicated_number: number
            enabled: number
            message_search_term: string
            message_search_type: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/sms/inbound/:inbound_rule_id': {
      $delete: {
        input: { param: { inbound_rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { inbound_rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { inbound_rule_id: number } } & {
          json: {
            action: string
            action_address: string
            dedicated_number: string
            enabled: number
            message_search_term: string
            message_search_type: number
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/sms/receipts': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            action: string
            action_address: string
            enabled: number
            match_type: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/sms/receipts/:receipt_rule_id': {
      $delete: {
        input: { param: { receipt_rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { receipt_rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { receipt_rule_id: number } } & {
          json: {
            action: string
            action_address: string
            enabled: number
            match_type: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/voice/receipts': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            action: string
            action_address: string
            enabled: number
            match_type: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/automations/voice/receipts/:receipt_rule_id': {
      $delete: {
        input: { param: { receipt_rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { receipt_rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { receipt_rule_id: number } } & {
          json: {
            action: string
            action_address: string
            enabled: number
            match_type: number
            rule_name: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/contact-suggestions': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/countries': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/delivery-issues': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            client_comments?: string | undefined
            description: string
            email_address: string
            message_id: string
            type: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email-campaigns': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/email-campaigns/price': {
      $post: {
        input: {
          json: {
            from_email_address_id: number
            from_name: string
            list_id: number
            name: string
            schedule?: number | undefined
            subject: string
            template_id: number
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email-campaigns/send': {
      $post: {
        input: {
          json: {
            from_email_address_id: number
            from_name: string
            list_id: number
            name: string
            schedule?: number | undefined
            subject: string
            template_id: number
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email-campaigns/:campaign_id/history': {
      $get: {
        input: { param: { campaign_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email-campaigns/:email_campaign_id': {
      $get: {
        input: { param: { email_campaign_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { email_campaign_id: number } } & {
          json: {
            from_email_address_id?: number | undefined
            from_name?: string | undefined
            list_id?: number | undefined
            name?: string | undefined
            schedule?: number | undefined
            subject?: string | undefined
            template_id?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email-campaigns/:email_campaign_id/cancel': {
      $put: {
        input: { param: { email_campaign_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/address-verify/:email_address_id/send': {
      $put: {
        input: { param: { email_address_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/address-verify/:email_address_id/verify/:activation_token': {
      $put: {
        input: { param: { email_address_id: number; activation_token: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/addresses': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { Body?: string | undefined; email_address: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/addresses/:email_address_id': {
      $delete: {
        input: { param: { email_address_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { email_address_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/history': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/email/history/export?filename=:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/master-templates': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/email/master-templates-categories': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/email/master-templates-categories/:category_id': {
      $get: {
        input: { param: { category_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/master-templates-categories/:category_id/master-templates': {
      $get: {
        input: { param: { category_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/master-templates/:template_id': {
      $get: {
        input: { param: { template_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/price': {
      $post: {
        input: {
          json: {
            attachments: { [x: string]: unknown }[]
            bcc?: { [x: string]: unknown }[] | undefined
            body: string
            cc?: { [x: string]: unknown }[] | undefined
            'from.email_address_id': number
            'from.name'?: string | undefined
            subject: string
            to: { [x: string]: unknown }[]
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/receipts': {
      $post: { input: { json: { url: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/email/send': {
      $post: {
        input: {
          json: {
            attachments?: { [x: string]: unknown }[] | undefined
            bcc?: { [x: string]: unknown }[] | undefined
            body: string
            cc?: { [x: string]: unknown }[] | undefined
            'from.email_address_id': number
            'from.name'?: string | undefined
            schedule?: number | undefined
            to: { [x: string]: unknown }[]
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/templates': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { template_id_master: number; template_name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/templates-images/:template_id': {
      $post: {
        input: { param: { template_id: string } } & {
          json: { image?: string | undefined; url?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/templates/:template_id': {
      $delete: {
        input: { param: { template_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { template_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { template_id: number } } & {
          json: { body: string; template_name: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fax/history/export?filename=:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fax/history?date_from=:date_from&date_to=:date_to&q=:q&order_by=:order_by': {
      $get: {
        input: { param: { date_from: number; date_to: number; q: string; order_by: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fax/price': {
      $post: {
        input: {
          json: {
            country?: string | undefined
            custom_string?: string | undefined
            file_url: string
            from?: string | undefined
            from_email?: string | undefined
            list_id?: number | undefined
            messages: { [x: string]: unknown }[]
            schedule?: number | undefined
            source?: string | undefined
            to: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fax/receipts': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: { url: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/fax/receipts-read': {
      $put: {
        input: { json: { date_before?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fax/receipts/:message_id': {
      $get: {
        input: { param: { message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fax/send': {
      $post: {
        input: {
          json: {
            country?: string | undefined
            custom_string?: string | undefined
            file_url: string
            from?: string | undefined
            from_email?: string | undefined
            list_id?: number | undefined
            messages: { [x: string]: unknown }[]
            schedule?: number | undefined
            source?: string | undefined
            to: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/forgot-password': {
      $put: { input: { json: { username: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/forgot-password/verify': {
      $put: {
        input: { json: { activation_token: string; password: string; subaccount_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/forgot-username': {
      $put: {
        input: {
          json: {
            country?: string | undefined
            email?: string | undefined
            phone_number?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { list_name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:from_list_id/contacts/:contact_id/:to_list_id': {
      $put: {
        input: { param: { from_list_id: number; contact_id: number; to_list_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:list_id': {
      $delete: {
        input: { param: { list_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { list_id: number } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { list_id: number } } & { json: { list_name?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:list_id/contacts': {
      $get: { input: { param: { list_id: number } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { list_id: number } } & {
          json: {
            address_city?: string | undefined
            address_country?: string | undefined
            address_line_1?: string | undefined
            address_line_2?: string | undefined
            address_postal_code?: string | undefined
            address_state?: string | undefined
            custom_1?: string | undefined
            custom_2?: string | undefined
            custom_3?: string | undefined
            custom_4?: string | undefined
            email?: string | undefined
            fax_number?: string | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            organization_name?: string | undefined
            phone_number: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:list_id/contacts/:contact_id': {
      $delete: {
        input: { param: { list_id: number; contact_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { list_id: number; contact_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { list_id: number; contact_id: number } } & {
          json: {
            address_city?: string | undefined
            address_country?: string | undefined
            address_line_1?: string | undefined
            address_line_2?: string | undefined
            address_postal_code?: string | undefined
            address_state?: string | undefined
            custom_1?: string | undefined
            custom_2?: string | undefined
            custom_3?: string | undefined
            custom_4?: string | undefined
            email?: string | undefined
            fax_number?: string | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            organization_name?: string | undefined
            phone_number?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:list_id/export?filename=:filename': {
      $get: {
        input: { param: { filename: string; list_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:list_id/import': {
      $post: {
        input: { param: { list_id: number } } & {
          json: { field_order: { [x: string]: unknown }[]; file_url: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:list_id/import-csv-preview': {
      $post: {
        input: { param: { list_id: number } } & { json: { file_url: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:list_id/import-fields': {
      $get: { input: { param: { list_id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/lists/:list_id/remove-duplicates': {
      $put: {
        input: { param: { list_id: number } } & { json: { fields: { [x: string]: unknown }[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:list_id/remove-opted-out-contacts/:opt_out_list_id': {
      $put: {
        input: { param: { list_id: number; opt_out_list_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mms/cancel-all': { $put: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/mms/history/export?filename=:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mms/history?q=:q&order_by=:order_by&date_from=:date_from&date_to=:date_to': {
      $get: {
        input: { param: { q: string; order_by: string; date_from: string; date_to: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mms/price': {
      $post: {
        input: {
          json: {
            body: string
            country?: string | undefined
            custom_string?: string | undefined
            from?: string | undefined
            from_email?: string | undefined
            list_id?: number | undefined
            media_file: string
            schedule?: number | undefined
            source?: string | undefined
            subject: string
            to: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mms/receipts': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/mms/receipts-read': { $put: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/mms/receipts/:message_id': {
      $get: {
        input: { param: { message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mms/send': {
      $post: {
        input: {
          json: {
            body: string
            country?: string | undefined
            custom_string?: string | undefined
            from?: string | undefined
            from_email?: string | undefined
            list_id?: number | undefined
            media_file: string
            schedule?: number | undefined
            source?: string | undefined
            subject: string
            to: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mms/:message_id/cancel': {
      $put: {
        input: { param: { message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/numbers': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/numbers/buy/:dedicated_number': {
      $post: {
        input: { param: { dedicated_number: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/numbers/search/:country?:search=1&:search_type=2': {
      $get: {
        input: { param: { country: string; search: string; search_type: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/direct-mail/campaigns': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/post/direct-mail/campaigns/price': {
      $post: {
        input: {
          json: {
            areas?: { [x: string]: unknown }[] | undefined
            file_urls: { [x: string]: unknown }[]
            name: string
            schedule?: number | undefined
            size: string
            source?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/direct-mail/campaigns/send': {
      $post: {
        input: {
          json: {
            areas?: { [x: string]: unknown }[] | undefined
            file_urls: { [x: string]: unknown }[]
            name: string
            schedule?: number | undefined
            size: string
            source?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/direct-mail/locations/search/:country/?q=:query': {
      $get: {
        input: { param: { country: string; query: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/letters/detect-address': {
      $post: {
        input: { json: { content: string } | { address: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/letters/history': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/post/letters/history/export?filename=:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/letters/price': {
      $post: {
        input: {
          json: {
            colour?: number | undefined
            duplex?: number | undefined
            file_url: string
            priority_post?: number | undefined
            recipients?: { [x: string]: unknown }[] | undefined
            template_used?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/letters/send': {
      $post: {
        input: {
          json: {
            colour?: number | undefined
            duplex?: number | undefined
            file_url: string
            priority_post?: number | undefined
            recipients?: { [x: string]: unknown }[] | undefined
            template_used?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/postcards/export?filename=:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/postcards/history': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/post/postcards/price': {
      $post: {
        input: {
          json: { file_urls: { [x: string]: unknown }[]; recipients: { [x: string]: unknown }[] }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/postcards/send': {
      $post: {
        input: {
          json: { file_urls: { [x: string]: unknown }[]; recipients: { [x: string]: unknown }[] }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/return-addresses': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            address_city: string
            address_country: string
            address_line_1: string
            address_line_2?: string | undefined
            address_name: string
            address_postal_code: number
            address_state: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/post/return-addresses/:return_address_id': {
      $delete: {
        input: { param: { return_address_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { return_address_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { return_address_id: number } } & {
          json: {
            address_city: string
            address_country: string
            address_line_1: string
            address_line_2?: string | undefined
            address_name: string
            address_postal_code: number
            address_state: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pricing/:country?currency=:currency': {
      $get: {
        input: { param: { country: string; currency: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/recharge/credit-card': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: {
          json: {
            bank_name: string
            cvc: number
            expiry_month: number
            expiry_year?: number | undefined
            name: string
            number?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/recharge/packages?country=:country': {
      $get: { input: { param: { country: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/recharge/purchase/:package_id': {
      $put: {
        input: { param: { package_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/recharge/transactions': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/recharge/transactions/:transaction_id': {
      $get: {
        input: { param: { transaction_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/referral/accounts': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/reseller': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: {
          json: {
            allow_public_signups: number
            colour_navigation: string
            company_name: string
            default_margin: number
            default_margin_numbers: number
            logo_url_dark: string
            logo_url_light: string
            subdomain: string
            trial_balance: number
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/reseller/accounts': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            account_name: string
            country: string
            password: string
            user_email: string
            user_first_name: string
            user_last_name: string
            user_phone: string
            username: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/reseller/accounts-public': {
      $post: {
        input: {
          json: {
            account_name: string
            country: string
            password: string
            reseller_user_id: number
            user_email: string
            user_first_name: string
            user_last_name: string
            user_phone: string
            username: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/reseller/accounts/:client_user_id': {
      $get: {
        input: { param: { client_user_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { client_user_id: number } } & {
          json: {
            account_name: string
            country: string
            password: string
            user_email: string
            user_first_name: string
            user_last_name: string
            user_phone: string
            username: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/reseller/transfer-credit': {
      $put: {
        input: { json: { balance: number; client_user_id: string; currency: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/reseller/:subdomain': {
      $get: {
        input: { param: { subdomain: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sdk-download/:type': {
      $get: { input: { param: { type: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/search/contacts-lists?q=:q': {
      $get: { input: { param: { q: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sms-campaigns': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sms-campaigns/price': {
      $post: {
        input: { json: { body: string; from?: string | undefined; list_id: number; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms-campaigns/send': {
      $post: {
        input: {
          json: {
            body: string
            from?: string | undefined
            list_id: number
            name: string
            schedule?: number | undefined
            url_to_shorten: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms-campaigns/:campaign_id/link-export?filename=:filename': {
      $get: {
        input: { param: { campaign_id: number; filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms-campaigns/:campaign_id/link-statistics': {
      $get: {
        input: { param: { campaign_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms-campaigns/:campaign_id/link-tracking': {
      $get: {
        input: { param: { campaign_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms-campaigns/:sms_campaign_id': {
      $get: {
        input: { param: { sms_campaign_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { sms_campaign_id: number } } & {
          json: {
            body: string
            from?: string | undefined
            list_id: number
            name: string
            schedule?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms-campaigns/:sms_campaign_id/cancel': {
      $put: {
        input: { param: { sms_campaign_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/cancel-all': { $put: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sms/email-sms': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { email_address: string; from?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/email-sms-stripped-strings': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { strip_string: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/email-sms-stripped-strings/:rule_id': {
      $delete: {
        input: { param: { rule_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: { param: { rule_id: number } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { rule_id: number } } & { json: { strip_string?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/email-sms/:email_address_id': {
      $delete: {
        input: { param: { email_address_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { email_address_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { email_address_id: number } } & {
          json: { email_address: string; from?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/history/export?filename=:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/history?date_from=:date_from&date_to=:date_to': {
      $get: {
        input: { param: { date_from: string; date_to: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/inbound': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: { url: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sms/inbound-read': {
      $put: {
        input: { json: { date_before: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/inbound-read/:message_id': {
      $put: {
        input: { param: { message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/inbound/:outbound_message_id': {
      $get: {
        input: { param: { outbound_message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/price': {
      $post: {
        input: {
          json: {
            body: string
            country?: string | undefined
            custom_string?: string | undefined
            from?: string | undefined
            list_id?: number | undefined
            schedule?: number | undefined
            source?: string | undefined
            to: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/receipts': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: { url: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sms/receipts-read': {
      $put: {
        input: { json: { date_before?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/receipts/:message_id': {
      $get: {
        input: { param: { message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/send': {
      $post: {
        input: {
          json: {
            body: string
            country?: string | undefined
            custom_string?: string | undefined
            from?: string | undefined
            from_email?: string | undefined
            list_id?: number | undefined
            schedule?: number | undefined
            source?: string | undefined
            to: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/templates': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { body: string; template_name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/templates/:template_id': {
      $delete: {
        input: { param: { template_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { template_id: string } } & {
          json: { body: string; template_name: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sms/:message_id/cancel': {
      $put: {
        input: { param: { message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/statistics/sms': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/statistics/voice': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/subaccounts': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: {
          json: {
            access_billing?: number | undefined
            access_contacts?: number | undefined
            access_reporting?: number | undefined
            access_settings?: number | undefined
            access_users?: number | undefined
            api_username: string
            email: string
            first_name: string
            last_name: string
            password: string
            phone_number: string
            share_campaigns?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subaccounts/:subaccount_id': {
      $delete: {
        input: { param: { subaccount_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { subaccount_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { subaccount_id: number } } & {
          json: {
            access_billing?: number | undefined
            access_contacts?: number | undefined
            access_reporting?: number | undefined
            access_settings?: number | undefined
            access_users?: number | undefined
            email?: string | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            password?: string | undefined
            phone_number?: string | undefined
            share_campaigns?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subaccounts/:subaccount_id/regen-api-key': {
      $put: {
        input: { param: { subaccount_id: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/timezones': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/uploads?convert=:convert': {
      $post: {
        input: { json: { content: string; convert: string } | { convert: string; file: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/voice/cancel-all': { $put: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/voice/history/export?filename=:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/voice/history?date_from=:date_from&date_to=:date_to': {
      $get: {
        input: { param: { date_from: string; date_to: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/voice/lang': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/voice/price': {
      $post: {
        input: {
          json: {
            body: string
            country?: string | undefined
            custom_string?: string | undefined
            lang?: string | undefined
            list_id?: number | undefined
            require_input?: number | undefined
            schedule?: number | undefined
            source?: string | undefined
            to: string
            voice: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/voice/receipts': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: { url: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/voice/receipts-read?date_before=:date_before': {
      $put: {
        input: { param: { date_before: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/voice/receipts/:message_id': {
      $get: {
        input: { param: { message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/voice/send': {
      $post: {
        input: {
          json: {
            body: string
            country?: string | undefined
            custom_string?: string | undefined
            lang?: string | undefined
            list_id?: number | undefined
            machine_detection?: number | undefined
            require_input?: number | undefined
            schedule?: number | undefined
            source?: string | undefined
            to: string
            voice: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/voice/:message_id/cancel': {
      $put: {
        input: { param: { message_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
