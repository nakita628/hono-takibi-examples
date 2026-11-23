declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/campaigns/data_series': {
      $get: {
        input: {
          query: {
            campaign_id?: string | undefined
            length?: string | undefined
            ending_at?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/campaigns/details': {
      $get: {
        input: { query: { campaign_id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/campaigns/list': {
      $get: {
        input: {
          query: {
            page?: string | undefined
            include_archived?: string | undefined
            sort_direction?: string | undefined
            'last_edit.time[gt]'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/canvas/data_series': {
      $get: {
        input: {
          query: {
            canvas_id?: string | undefined
            ending_at?: string | undefined
            starting_at?: string | undefined
            length?: string | undefined
            include_variant_breakdown?: string | undefined
            include_step_breakdown?: string | undefined
            include_deleted_step_data?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/canvas/data_summary': {
      $get: {
        input: {
          query: {
            canvas_id?: string | undefined
            ending_at?: string | undefined
            starting_at?: string | undefined
            length?: string | undefined
            include_variant_breakdown?: string | undefined
            include_step_breakdown?: string | undefined
            include_deleted_step_data?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/canvas/details': {
      $get: {
        input: { query: { canvas_id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/canvas/list': {
      $get: {
        input: {
          query: {
            page?: string | undefined
            include_archived?: string | undefined
            sort_direction?: string | undefined
            'last_edit.time[gt]'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/canvas/trigger/schedule/create': {
      $post: {
        input: {
          json: {
            audience?:
              | {
                  AND?:
                    | {
                        custom_attribute?:
                          | {
                              comparison?: string | undefined
                              custom_attribute_name?: string | undefined
                              value?: string | undefined
                            }
                          | undefined
                      }[]
                    | undefined
                }
              | undefined
            broadcast?: boolean | undefined
            canvas_entry_properties?: { [x: string]: unknown } | undefined
            canvas_id?: string | undefined
            recipients?:
              | {
                  canvas_entry_properties?: { [x: string]: unknown } | undefined
                  external_user_id?: string | undefined
                  trigger_properties?: string | undefined
                  user_alias?: string | undefined
                }[]
              | undefined
            schedule?:
              | {
                  at_optimal_time?: boolean | undefined
                  in_local_time?: boolean | undefined
                  time?: string | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/content_blocks/info': {
      $get: {
        input: {
          query: {
            content_block_id?: string | undefined
            include_inclusion_data?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/content_blocks/list': {
      $get: {
        input: {
          query: {
            modified_after?: string | undefined
            modified_before?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/hard_bounces': {
      $get: {
        input: {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
            email?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/email/unsubscribes': {
      $get: {
        input: {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
            sort_direction?: string | undefined
            email?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/events/data_series': {
      $get: {
        input: {
          query: {
            event?: string | undefined
            length?: string | undefined
            unit?: string | undefined
            ending_at?: string | undefined
            app_id?: string | undefined
            segment_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/events/list': {
      $get: {
        input: { query: { page?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/feed/data_series': {
      $get: {
        input: {
          query: {
            card_id?: string | undefined
            length?: string | undefined
            unit?: string | undefined
            ending_at?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/feed/details': {
      $get: {
        input: { query: { card_id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/feed/list': {
      $get: {
        input: {
          query: {
            page?: string | undefined
            include_archived?: string | undefined
            sort_direction?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/kpi/dau/data_series': {
      $get: {
        input: {
          query: {
            length?: string | undefined
            ending_at?: string | undefined
            app_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/kpi/mau/data_series': {
      $get: {
        input: {
          query: {
            length?: string | undefined
            ending_at?: string | undefined
            app_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/kpi/new_users/data_series': {
      $get: {
        input: {
          query: {
            length?: string | undefined
            ending_at?: string | undefined
            app_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/kpi/uninstalls/data_series': {
      $get: {
        input: {
          query: {
            length?: string | undefined
            ending_at?: string | undefined
            app_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/messages/scheduled_broadcasts': {
      $get: {
        input: { query: { end_time?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/segments/data_series': {
      $get: {
        input: {
          query: {
            segment_id?: string | undefined
            length?: string | undefined
            ending_at?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/segments/details': {
      $get: {
        input: { query: { segment_id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/segments/list': {
      $get: {
        input: { query: { page?: string | undefined; sort_direction?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sends/data_series': {
      $get: {
        input: {
          query: {
            campaign_id?: string | undefined
            send_id?: string | undefined
            length?: string | undefined
            ending_at?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sessions/data_series': {
      $get: {
        input: {
          query: {
            length?: string | undefined
            unit?: string | undefined
            ending_at?: string | undefined
            app_id?: string | undefined
            segment_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscription/status/get': {
      $get: {
        input: {
          query: {
            subscription_group_id?: string | undefined
            external_id?: string | undefined
            phone?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/subscription/user/status': {
      $get: {
        input: {
          query: {
            external_id?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
            phone?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/templates/email/info': {
      $get: {
        input: { query: { email_template_id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/templates/email/list': {
      $get: {
        input: {
          query: {
            modified_after?: string | undefined
            modified_before?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
