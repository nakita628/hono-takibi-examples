declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:apiVersion/account': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              active_promotions?:
                | {
                    credit_monthly_cap?: string | undefined
                    credit_remaining?: string | undefined
                    description?: string | undefined
                    expire_dt?: string | undefined
                    image_url?: string | undefined
                    service_type?:
                      | 'all'
                      | 'backup'
                      | 'blockstorage'
                      | 'db_mysql'
                      | 'ip_v4'
                      | 'linode'
                      | 'linode_disk'
                      | 'linode_memory'
                      | 'longview'
                      | 'managed'
                      | 'nodebalancer'
                      | 'objectstorage'
                      | 'placement_group'
                      | 'transfer_tx'
                      | undefined
                    summary?: string | undefined
                    this_month_credit_remaining?: string | undefined
                  }[]
                | undefined
              active_since?: string | undefined
              address_1?: string | undefined
              address_2?: string | undefined
              balance?: number | undefined
              balance_uninvoiced?: number | undefined
              billing_source?: 'akamai' | 'linode' | undefined
              capabilities?: string[] | undefined
              city?: string | undefined
              company?: string | undefined
              country?: string | undefined
              credit_card?:
                | { expiry?: string | undefined; last_four?: string | undefined }
                | undefined
              email?: string | undefined
              euuid?: string | undefined
              first_name?: string | undefined
              last_name?: string | undefined
              phone?: string | undefined
              state?: string | undefined
              tax_id?: string | undefined
              zip?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                active_promotions?:
                  | {
                      credit_monthly_cap?: string | undefined
                      credit_remaining?: string | undefined
                      description?: string | undefined
                      expire_dt?: string | undefined
                      image_url?: string | undefined
                      service_type?:
                        | 'all'
                        | 'backup'
                        | 'blockstorage'
                        | 'db_mysql'
                        | 'ip_v4'
                        | 'linode'
                        | 'linode_disk'
                        | 'linode_memory'
                        | 'longview'
                        | 'managed'
                        | 'nodebalancer'
                        | 'objectstorage'
                        | 'placement_group'
                        | 'transfer_tx'
                        | undefined
                      summary?: string | undefined
                      this_month_credit_remaining?: string | undefined
                    }[]
                  | undefined
                active_since?: string | undefined
                address_1?: string | undefined
                address_2?: string | undefined
                balance?: number | undefined
                balance_uninvoiced?: number | undefined
                billing_source?: 'akamai' | 'linode' | undefined
                capabilities?: string[] | undefined
                city?: string | undefined
                company?: string | undefined
                country?: string | undefined
                credit_card?:
                  | { expiry?: string | undefined; last_four?: string | undefined }
                  | undefined
                email?: string | undefined
                euuid?: string | undefined
                first_name?: string | undefined
                last_name?: string | undefined
                phone?: string | undefined
                state?: string | undefined
                tax_id?: string | undefined
                zip?: string | undefined
              }
            }
            output: {
              active_promotions?:
                | {
                    credit_monthly_cap?: string | undefined
                    credit_remaining?: string | undefined
                    description?: string | undefined
                    expire_dt?: string | undefined
                    image_url?: string | undefined
                    service_type?:
                      | 'all'
                      | 'backup'
                      | 'blockstorage'
                      | 'db_mysql'
                      | 'ip_v4'
                      | 'linode'
                      | 'linode_disk'
                      | 'linode_memory'
                      | 'longview'
                      | 'managed'
                      | 'nodebalancer'
                      | 'objectstorage'
                      | 'placement_group'
                      | 'transfer_tx'
                      | undefined
                    summary?: string | undefined
                    this_month_credit_remaining?: string | undefined
                  }[]
                | undefined
              active_since?: string | undefined
              address_1?: string | undefined
              address_2?: string | undefined
              balance?: number | undefined
              balance_uninvoiced?: number | undefined
              billing_source?: 'akamai' | 'linode' | undefined
              capabilities?: string[] | undefined
              city?: string | undefined
              company?: string | undefined
              country?: string | undefined
              credit_card?:
                | { expiry?: string | undefined; last_four?: string | undefined }
                | undefined
              email?: string | undefined
              euuid?: string | undefined
              first_name?: string | undefined
              last_name?: string | undefined
              phone?: string | undefined
              state?: string | undefined
              tax_id?: string | undefined
              zip?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                active_promotions?:
                  | {
                      credit_monthly_cap?: string | undefined
                      credit_remaining?: string | undefined
                      description?: string | undefined
                      expire_dt?: string | undefined
                      image_url?: string | undefined
                      service_type?:
                        | 'all'
                        | 'backup'
                        | 'blockstorage'
                        | 'db_mysql'
                        | 'ip_v4'
                        | 'linode'
                        | 'linode_disk'
                        | 'linode_memory'
                        | 'longview'
                        | 'managed'
                        | 'nodebalancer'
                        | 'objectstorage'
                        | 'placement_group'
                        | 'transfer_tx'
                        | undefined
                      summary?: string | undefined
                      this_month_credit_remaining?: string | undefined
                    }[]
                  | undefined
                active_since?: string | undefined
                address_1?: string | undefined
                address_2?: string | undefined
                balance?: number | undefined
                balance_uninvoiced?: number | undefined
                billing_source?: 'akamai' | 'linode' | undefined
                capabilities?: string[] | undefined
                city?: string | undefined
                company?: string | undefined
                country?: string | undefined
                credit_card?:
                  | { expiry?: string | undefined; last_four?: string | undefined }
                  | undefined
                email?: string | undefined
                euuid?: string | undefined
                first_name?: string | undefined
                last_name?: string | undefined
                phone?: string | undefined
                state?: string | undefined
                tax_id?: string | undefined
                zip?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/agreements': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                billing_agreement?: boolean | undefined
                eu_model?: boolean | undefined
                master_service_agreement?: boolean | undefined
                privacy_policy?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                billing_agreement?: boolean | undefined
                eu_model?: boolean | undefined
                master_service_agreement?: boolean | undefined
                privacy_policy?: boolean | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              billing_agreement?: boolean | undefined
              eu_model?: boolean | undefined
              master_service_agreement?: boolean | undefined
              privacy_policy?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/availability': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    available?: string[] | undefined
                    region?: string | undefined
                    unavailable?: string[] | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/availability/:regionId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string } }
            output: {
              available?: string[] | undefined
              region?: string | undefined
              unavailable?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/betas': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & { json: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & { json: { id: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    description?: (string | null) | undefined
                    ended?: (string | null) | undefined
                    enrolled?: string | undefined
                    id?: string | undefined
                    label?: string | undefined
                    started?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/betas/:betaId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; betaId: string } }
            output: {
              description?: (string | null) | undefined
              ended?: (string | null) | undefined
              enrolled?: string | undefined
              id?: string | undefined
              label?: string | undefined
              started?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; betaId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/cancel': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { comments?: string | undefined }
            }
            output: { survey_link?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { comments?: string | undefined }
            }
            output: { errors?: { reason?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { comments?: string | undefined }
            }
            output: { errors?: { reason?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 504
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { comments?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/child-accounts': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    active_since?: string | undefined
                    address_1?: string | undefined
                    address_2?: string | undefined
                    balance?: number | undefined
                    balance_uninvoiced?: number | undefined
                    billing_source?: 'external' | undefined
                    capabilities?: string[] | undefined
                    city?: string | undefined
                    company?: string | undefined
                    country?: string | undefined
                    credit_card?:
                      | { expiry?: string | undefined; last_four?: string | undefined }
                      | undefined
                    email?: string | undefined
                    euuid?: string | undefined
                    first_name?: string | undefined
                    last_name?: string | undefined
                    phone?: string | undefined
                    state?: string | undefined
                    tax_id?: string | undefined
                    zip?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/child-accounts/:euuId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; euuId: string } }
            output: {
              active_since?: string | undefined
              address_1?: string | undefined
              address_2?: string | undefined
              balance?: number | undefined
              balance_uninvoiced?: number | undefined
              billing_source?: 'external' | undefined
              capabilities?: string[] | undefined
              city?: string | undefined
              company?: string | undefined
              country?: string | undefined
              credit_card?:
                | { expiry?: string | undefined; last_four?: string | undefined }
                | undefined
              email?: string | undefined
              euuid?: string | undefined
              first_name?: string | undefined
              last_name?: string | undefined
              phone?: string | undefined
              state?: string | undefined
              tax_id?: string | undefined
              zip?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; euuId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/child-accounts/:euuId/token': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; euuId: string } }
            output: {
              created?: string | undefined
              expiry?: string | undefined
              id?: number | undefined
              label?: string | undefined
              scopes?: string | undefined
              token?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; euuId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/credit-card': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { card_number: string; cvv: string; expiry_month: number; expiry_year: number }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { card_number: string; cvv: string; expiry_month: number; expiry_year: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/entity-transfers': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { entities: { linodes?: number[] | undefined } }
            }
            output: {
              created?: string | undefined
              entities?: { linodes?: number[] | undefined } | undefined
              expiry?: string | undefined
              is_sender?: boolean | undefined
              status?:
                | 'accepted'
                | 'canceled'
                | 'completed'
                | 'failed'
                | 'pending'
                | 'stale'
                | undefined
              token?: string | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { entities: { linodes?: number[] | undefined } }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    created?: string | undefined
                    entities?: { linodes?: number[] | undefined } | undefined
                    expiry?: string | undefined
                    is_sender?: boolean | undefined
                    status?:
                      | 'accepted'
                      | 'canceled'
                      | 'completed'
                      | 'failed'
                      | 'pending'
                      | 'stale'
                      | undefined
                    token?: string | undefined
                    updated?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/entity-transfers/:token': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: {
              created?: string | undefined
              entities?: { linodes?: number[] | undefined } | undefined
              expiry?: string | undefined
              is_sender?: boolean | undefined
              status?:
                | 'accepted'
                | 'canceled'
                | 'completed'
                | 'failed'
                | 'pending'
                | 'stale'
                | undefined
              token?: string | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/entity-transfers/:token/accept': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/events': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & {
              header: {
                'X-Filter'?:
                  | { [x: string]: unknown }
                  | {
                      '+and'?: { [x: string]: unknown }[] | undefined
                      '+contains'?: string | undefined
                      '+gt'?: number | undefined
                      '+gte'?: number | undefined
                      '+lt'?: number | undefined
                      '+lte'?: number | undefined
                      '+neq'?: string | undefined
                      '+or'?: { [x: string]: unknown }[] | undefined
                      '+order'?: 'asc' | 'desc' | undefined
                      '+order_by'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              data?:
                | {
                    action?:
                      | 'account_agreement_eu_model'
                      | 'account_promo_apply'
                      | 'account_update'
                      | 'account_settings_update'
                      | 'backups_enable'
                      | 'backups_cancel'
                      | 'backups_restore'
                      | 'community_question_reply'
                      | 'community_like'
                      | 'community_mention'
                      | 'credit_card_updated'
                      | 'database_create'
                      | 'database_delete'
                      | 'database_update'
                      | 'database_failed'
                      | 'database_degraded'
                      | 'database_create_failed'
                      | 'database_update_failed'
                      | 'database_backup_create'
                      | 'database_backup_restore'
                      | 'database_backup_delete'
                      | 'database_credentials_reset'
                      | 'database_low_disk_space'
                      | 'database_scale'
                      | 'database_resize'
                      | 'database_resize_create'
                      | 'database_migrate'
                      | 'database_upgrade'
                      | 'database_suspend'
                      | 'database_resume'
                      | 'disk_create'
                      | 'disk_delete'
                      | 'disk_update'
                      | 'disk_duplicate'
                      | 'disk_imagize'
                      | 'disk_resize'
                      | 'dns_record_create'
                      | 'dns_record_delete'
                      | 'dns_record_update'
                      | 'dns_zone_create'
                      | 'dns_zone_delete'
                      | 'dns_zone_import'
                      | 'dns_zone_update'
                      | 'entity_transfer_accept'
                      | 'entity_transfer_accept_recipient'
                      | 'entity_transfer_cancel'
                      | 'entity_transfer_create'
                      | 'entity_transfer_fail'
                      | 'entity_transfer_stale'
                      | 'firewall_apply'
                      | 'firewall_create'
                      | 'firewall_delete'
                      | 'firewall_disable'
                      | 'firewall_enable'
                      | 'firewall_update'
                      | 'firewall_device_add'
                      | 'firewall_device_remove'
                      | 'firewall_rules_update'
                      | 'host_reboot'
                      | 'image_delete'
                      | 'image_update'
                      | 'image_upload'
                      | 'interface_create'
                      | 'interface_delete'
                      | 'interface_update'
                      | 'ipaddress_update'
                      | 'ipv6pool_add'
                      | 'ipv6pool_delete'
                      | 'lassie_reboot'
                      | 'lish_boot'
                      | 'linode_addip'
                      | 'linode_boot'
                      | 'linode_clone'
                      | 'linode_create'
                      | 'linode_delete'
                      | 'linode_update'
                      | 'linode_deleteip'
                      | 'linode_kvmify'
                      | 'linode_migrate'
                      | 'linode_migrate_datacenter'
                      | 'linode_migrate_datacenter_create'
                      | 'linode_mutate'
                      | 'linode_mutate_create'
                      | 'linode_poweroff_on'
                      | 'linode_reboot'
                      | 'linode_rebuild'
                      | 'linode_resize'
                      | 'linode_resize_create'
                      | 'linode_resize_warm_create'
                      | 'linode_shutdown'
                      | 'linode_snapshot'
                      | 'linode_config_create'
                      | 'linode_config_delete'
                      | 'linode_config_update'
                      | 'lke_cluster_create'
                      | 'lke_cluster_update'
                      | 'lke_cluster_delete'
                      | 'lke_cluster_recycle'
                      | 'lke_cluster_regenerate'
                      | 'lke_control_plane_acl_create'
                      | 'lke_control_plane_acl_update'
                      | 'lke_control_plane_acl_delete'
                      | 'lke_node_create'
                      | 'lke_node_delete'
                      | 'lke_node_recycle'
                      | 'lke_pool_create'
                      | 'lke_pool_delete'
                      | 'lke_pool_recycle'
                      | 'lke_kubeconfig_regenerate'
                      | 'lke_token_rotate'
                      | 'longviewclient_create'
                      | 'longviewclient_delete'
                      | 'longviewclient_update'
                      | 'managed_disabled'
                      | 'managed_enabled'
                      | 'managed_service_create'
                      | 'managed_service_delete'
                      | 'nodebalancer_create'
                      | 'nodebalancer_delete'
                      | 'nodebalancer_update'
                      | 'nodebalancer_config_create'
                      | 'nodebalancer_config_delete'
                      | 'nodebalancer_config_update'
                      | 'nodebalancer_node_create'
                      | 'nodebalancer_node_delete'
                      | 'nodebalancer_node_update'
                      | 'oauth_client_create'
                      | 'oauth_client_delete'
                      | 'oauth_client_secret_reset'
                      | 'oauth_client_update'
                      | 'obj_access_key_create'
                      | 'obj_access_key_delete'
                      | 'obj_access_key_update'
                      | 'password_reset'
                      | 'payment_method_add'
                      | 'payment_submitted'
                      | 'placement_group_assign'
                      | 'placement_group_became_compliant'
                      | 'placement_group_became_non_compliant'
                      | 'placement_group_create'
                      | 'placement_group_delete'
                      | 'placement_group_unassign'
                      | 'placement_group_update'
                      | 'profile_update'
                      | 'stackscript_create'
                      | 'stackscript_delete'
                      | 'stackscript_update'
                      | 'stackscript_publicize'
                      | 'stackscript_revise'
                      | 'subnet_create'
                      | 'subnet_delete'
                      | 'subnet_update'
                      | 'tag_create'
                      | 'tag_delete'
                      | 'tag_update'
                      | 'tax_id_valid'
                      | 'tax_id_invalid'
                      | 'tfa_disabled'
                      | 'tfa_enabled'
                      | 'ticket_attachment_upload'
                      | 'ticket_create'
                      | 'ticket_update'
                      | 'token_create'
                      | 'token_delete'
                      | 'token_update'
                      | 'user_create'
                      | 'user_update'
                      | 'user_delete'
                      | 'user_ssh_key_add'
                      | 'user_ssh_key_delete'
                      | 'user_ssh_key_update'
                      | 'vlan_attach'
                      | 'vlan_detach'
                      | 'volume_attach'
                      | 'volume_clone'
                      | 'volume_create'
                      | 'volume_delete'
                      | 'volume_update'
                      | 'volume_detach'
                      | 'volume_resize'
                      | 'volume_migrate'
                      | 'volume_migrate_scheduled'
                      | 'vpc_create'
                      | 'vpc_delete'
                      | 'vpc_update'
                      | undefined
                    created?: string | undefined
                    details?:
                      | {
                          complete_time?: string | undefined
                          description?:
                            | 'Scheduled Maintenance'
                            | 'Emergency Maintenance'
                            | undefined
                          maintenance_policy_set?: string | undefined
                          not_before?: string | undefined
                          source?: 'platform' | 'user' | undefined
                          start_time?: string | undefined
                        }
                      | undefined
                    duration?: number | undefined
                    entity?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          type?:
                            | 'account'
                            | 'backups'
                            | 'community'
                            | 'disks'
                            | 'domain'
                            | 'entity_transfer'
                            | 'firewall'
                            | 'image'
                            | 'ipaddress'
                            | 'linode'
                            | 'longview'
                            | 'loadbalancer'
                            | 'managed_service'
                            | 'nodebalancer'
                            | 'oauth_client'
                            | 'profile'
                            | 'stackscript'
                            | 'tag'
                            | 'ticket'
                            | 'token'
                            | 'user'
                            | 'user_ssh_key'
                            | 'volume'
                            | undefined
                          url?: string | undefined
                        }
                      | undefined
                    id?: number | undefined
                    message?: (string | null) | undefined
                    percent_complete?: (number | null) | undefined
                    rate?: (string | null) | undefined
                    secondary_entity?:
                      | {
                          id?: string | undefined
                          label?: string | undefined
                          type?: string | undefined
                          url?: string | undefined
                        }
                      | undefined
                    seen?: boolean | undefined
                    status?:
                      | 'completed'
                      | 'failed'
                      | 'finished'
                      | 'in_progress'
                      | 'notification'
                      | 'scheduled'
                      | 'started'
                      | undefined
                    time_remaining?: (string | null) | undefined
                    username?: (string | null) | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & {
              header: {
                'X-Filter'?:
                  | { [x: string]: unknown }
                  | {
                      '+and'?: { [x: string]: unknown }[] | undefined
                      '+contains'?: string | undefined
                      '+gt'?: number | undefined
                      '+gte'?: number | undefined
                      '+lt'?: number | undefined
                      '+lte'?: number | undefined
                      '+neq'?: string | undefined
                      '+or'?: { [x: string]: unknown }[] | undefined
                      '+order'?: 'asc' | 'desc' | undefined
                      '+order_by'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/events/:eventId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; eventId: number } }
            output: {
              action?:
                | 'account_agreement_eu_model'
                | 'account_promo_apply'
                | 'account_update'
                | 'account_settings_update'
                | 'backups_enable'
                | 'backups_cancel'
                | 'backups_restore'
                | 'community_question_reply'
                | 'community_like'
                | 'community_mention'
                | 'credit_card_updated'
                | 'database_create'
                | 'database_delete'
                | 'database_update'
                | 'database_failed'
                | 'database_degraded'
                | 'database_create_failed'
                | 'database_update_failed'
                | 'database_backup_create'
                | 'database_backup_restore'
                | 'database_backup_delete'
                | 'database_credentials_reset'
                | 'database_low_disk_space'
                | 'database_scale'
                | 'database_resize'
                | 'database_resize_create'
                | 'database_migrate'
                | 'database_upgrade'
                | 'database_suspend'
                | 'database_resume'
                | 'disk_create'
                | 'disk_delete'
                | 'disk_update'
                | 'disk_duplicate'
                | 'disk_imagize'
                | 'disk_resize'
                | 'dns_record_create'
                | 'dns_record_delete'
                | 'dns_record_update'
                | 'dns_zone_create'
                | 'dns_zone_delete'
                | 'dns_zone_import'
                | 'dns_zone_update'
                | 'entity_transfer_accept'
                | 'entity_transfer_accept_recipient'
                | 'entity_transfer_cancel'
                | 'entity_transfer_create'
                | 'entity_transfer_fail'
                | 'entity_transfer_stale'
                | 'firewall_apply'
                | 'firewall_create'
                | 'firewall_delete'
                | 'firewall_disable'
                | 'firewall_enable'
                | 'firewall_update'
                | 'firewall_device_add'
                | 'firewall_device_remove'
                | 'firewall_rules_update'
                | 'host_reboot'
                | 'image_delete'
                | 'image_update'
                | 'image_upload'
                | 'interface_create'
                | 'interface_delete'
                | 'interface_update'
                | 'ipaddress_update'
                | 'ipv6pool_add'
                | 'ipv6pool_delete'
                | 'lassie_reboot'
                | 'lish_boot'
                | 'linode_addip'
                | 'linode_boot'
                | 'linode_clone'
                | 'linode_create'
                | 'linode_delete'
                | 'linode_update'
                | 'linode_deleteip'
                | 'linode_kvmify'
                | 'linode_migrate'
                | 'linode_migrate_datacenter'
                | 'linode_migrate_datacenter_create'
                | 'linode_mutate'
                | 'linode_mutate_create'
                | 'linode_poweroff_on'
                | 'linode_reboot'
                | 'linode_rebuild'
                | 'linode_resize'
                | 'linode_resize_create'
                | 'linode_resize_warm_create'
                | 'linode_shutdown'
                | 'linode_snapshot'
                | 'linode_config_create'
                | 'linode_config_delete'
                | 'linode_config_update'
                | 'lke_control_plane_acl_create'
                | 'lke_control_plane_acl_update'
                | 'lke_control_plane_acl_delete'
                | 'lke_cluster_create'
                | 'lke_cluster_update'
                | 'lke_cluster_delete'
                | 'lke_cluster_recycle'
                | 'lke_cluster_regenerate'
                | 'lke_node_create'
                | 'lke_node_delete'
                | 'lke_node_recycle'
                | 'lke_pool_create'
                | 'lke_pool_delete'
                | 'lke_pool_recycle'
                | 'lke_kubeconfig_regenerate'
                | 'lke_token_rotate'
                | 'longviewclient_create'
                | 'longviewclient_delete'
                | 'longviewclient_update'
                | 'managed_disabled'
                | 'managed_enabled'
                | 'managed_service_create'
                | 'managed_service_delete'
                | 'nodebalancer_create'
                | 'nodebalancer_delete'
                | 'nodebalancer_update'
                | 'nodebalancer_config_create'
                | 'nodebalancer_config_delete'
                | 'nodebalancer_config_update'
                | 'nodebalancer_node_create'
                | 'nodebalancer_node_delete'
                | 'nodebalancer_node_update'
                | 'oauth_client_create'
                | 'oauth_client_delete'
                | 'oauth_client_secret_reset'
                | 'oauth_client_update'
                | 'obj_access_key_create'
                | 'obj_access_key_delete'
                | 'obj_access_key_update'
                | 'password_reset'
                | 'payment_method_add'
                | 'payment_submitted'
                | 'placement_group_assign'
                | 'placement_group_became_compliant'
                | 'placement_group_became_non_compliant'
                | 'placement_group_create'
                | 'placement_group_delete'
                | 'placement_group_unassign'
                | 'placement_group_update'
                | 'profile_update'
                | 'stackscript_create'
                | 'stackscript_delete'
                | 'stackscript_update'
                | 'stackscript_publicize'
                | 'stackscript_revise'
                | 'subnet_create'
                | 'subnet_delete'
                | 'subnet_update'
                | 'tag_create'
                | 'tag_delete'
                | 'tag_update'
                | 'tax_id_valid'
                | 'tax_id_invalid'
                | 'tfa_disabled'
                | 'tfa_enabled'
                | 'ticket_attachment_upload'
                | 'ticket_create'
                | 'ticket_update'
                | 'token_create'
                | 'token_delete'
                | 'token_update'
                | 'user_create'
                | 'user_update'
                | 'user_delete'
                | 'user_ssh_key_add'
                | 'user_ssh_key_delete'
                | 'user_ssh_key_update'
                | 'vlan_attach'
                | 'vlan_detach'
                | 'volume_attach'
                | 'volume_clone'
                | 'volume_create'
                | 'volume_delete'
                | 'volume_update'
                | 'volume_detach'
                | 'volume_resize'
                | 'volume_migrate'
                | 'volume_migrate_scheduled'
                | 'vpc_create'
                | 'vpc_delete'
                | 'vpc_update'
                | undefined
              created?: string | undefined
              details?:
                | {
                    complete_time?: string | undefined
                    description?: 'Scheduled Maintenance' | 'Emergency Maintenance' | undefined
                    maintenance_policy_set?: string | undefined
                    not_before?: string | undefined
                    source?: 'platform' | 'user' | undefined
                    start_time?: string | undefined
                  }
                | undefined
              duration?: number | undefined
              entity?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    type?:
                      | 'account'
                      | 'backups'
                      | 'community'
                      | 'disks'
                      | 'domain'
                      | 'entity_transfer'
                      | 'firewall'
                      | 'image'
                      | 'ipaddress'
                      | 'linode'
                      | 'longview'
                      | 'loadbalancer'
                      | 'managed_service'
                      | 'nodebalancer'
                      | 'oauth_client'
                      | 'profile'
                      | 'stackscript'
                      | 'tag'
                      | 'ticket'
                      | 'token'
                      | 'user'
                      | 'user_ssh_key'
                      | 'volume'
                      | undefined
                    url?: string | undefined
                  }
                | undefined
              id?: number | undefined
              message?: (string | null) | undefined
              percent_complete?: (number | null) | undefined
              rate?: (string | null) | undefined
              secondary_entity?:
                | {
                    id?: string | undefined
                    label?: string | undefined
                    type?: string | undefined
                    url?: string | undefined
                  }
                | undefined
              seen?: boolean | undefined
              status?: 'failed' | 'finished' | 'notification' | 'scheduled' | 'started' | undefined
              time_remaining?: (string | null) | undefined
              username?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; eventId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/events/:eventId/seen': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; eventId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; eventId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/invoices': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & {
              header: {
                'X-Filter'?:
                  | { [x: string]: unknown }
                  | {
                      '+and'?: { [x: string]: unknown }[] | undefined
                      '+contains'?: string | undefined
                      '+gt'?: number | undefined
                      '+gte'?: number | undefined
                      '+lt'?: number | undefined
                      '+lte'?: number | undefined
                      '+neq'?: string | undefined
                      '+or'?: { [x: string]: unknown }[] | undefined
                      '+order'?: 'asc' | 'desc' | undefined
                      '+order_by'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              data?:
                | {
                    billing_source?: 'akamai' | 'linode' | undefined
                    date?: string | undefined
                    id?: number | undefined
                    label?: string | undefined
                    subtotal?: number | undefined
                    tax?: number | undefined
                    tax_summary?:
                      | { name?: string | undefined; tax?: number | undefined }[]
                      | undefined
                    total?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & {
              header: {
                'X-Filter'?:
                  | { [x: string]: unknown }
                  | {
                      '+and'?: { [x: string]: unknown }[] | undefined
                      '+contains'?: string | undefined
                      '+gt'?: number | undefined
                      '+gte'?: number | undefined
                      '+lt'?: number | undefined
                      '+lte'?: number | undefined
                      '+neq'?: string | undefined
                      '+or'?: { [x: string]: unknown }[] | undefined
                      '+order'?: 'asc' | 'desc' | undefined
                      '+order_by'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/invoices/:invoiceId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; invoiceId: number } }
            output: {
              billing_source?: 'akamai' | 'linode' | undefined
              date?: string | undefined
              id?: number | undefined
              label?: string | undefined
              subtotal?: number | undefined
              tax?: number | undefined
              tax_summary?: { name?: string | undefined; tax?: number | undefined }[] | undefined
              total?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; invoiceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/invoices/:invoiceId/items': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; invoiceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    amount?: number | undefined
                    from?: string | undefined
                    label?: string | undefined
                    quantity?: number | undefined
                    region?: (string | null) | undefined
                    tax?: number | undefined
                    to?: string | undefined
                    total?: number | undefined
                    type?: 'hourly' | 'misc' | undefined
                    unit_price?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; invoiceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/logins': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    datetime?: string | undefined
                    id?: number | undefined
                    ip?: string | undefined
                    restricted?: boolean | undefined
                    status?: 'successful' | 'failed' | undefined
                    username?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/logins/:loginId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; loginId: number } }
            output: {
              datetime?: string | undefined
              id?: number | undefined
              ip?: string | undefined
              restricted?: boolean | undefined
              status?: 'successful' | 'failed' | undefined
              username?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; loginId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/maintenance': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    complete_time?: string | undefined
                    description?: 'Scheduled Maintenance' | 'Emergency Maintenance' | undefined
                    entity?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          type?: string | undefined
                          url?: string | undefined
                        }
                      | undefined
                    maintenance_policy_set?: string | undefined
                    not_before?: string | undefined
                    reason?: string | undefined
                    source?: 'platform' | 'user' | undefined
                    start_time?: string | undefined
                    status?:
                      | 'pending'
                      | 'scheduled'
                      | 'started'
                      | 'in-progress'
                      | 'completed'
                      | 'canceled'
                      | undefined
                    type?:
                      | 'reboot'
                      | 'cold_migration'
                      | 'live_migration'
                      | 'migrate'
                      | 'power_off_on'
                      | undefined
                    when?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/notifications': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    body?: (string | null) | undefined
                    entity?:
                      | ({
                          id?: (number | null) | undefined
                          label?: (string | null) | undefined
                          type?:
                            | 'account'
                            | 'entity_transfer'
                            | 'linode'
                            | 'loadbalancers'
                            | 'nodebalancer'
                            | 'promotion'
                            | 'region'
                            | 'ticket'
                            | 'volume'
                            | undefined
                          url?: (string | null) | undefined
                        } | null)
                      | undefined
                    label?: string | undefined
                    message?: string | undefined
                    severity?: 'minor' | 'major' | 'critical' | undefined
                    type?:
                      | 'migration_scheduled'
                      | 'migration_imminent'
                      | 'migration_pending'
                      | 'reboot_scheduled'
                      | 'outage'
                      | 'payment_due'
                      | 'ticket_important'
                      | 'ticket_abuse'
                      | 'notice'
                      | 'maintenance'
                      | 'maintenance_scheduled'
                      | 'promotion'
                      | 'security_reboot_maintenance_scheduled'
                      | 'tax_id_verifying'
                      | undefined
                    until?: (string | null) | undefined
                    when?: (string | null) | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/oauth-clients': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                id?: string | undefined
                label?: string | undefined
                public?: boolean | undefined
                redirect_uri?: string | undefined
                secret?: string | undefined
                status?: 'active' | 'disabled' | 'suspended' | undefined
                thumbnail_url?: (string | null) | undefined
              }
            }
            output: {
              id?: string | undefined
              label?: string | undefined
              public?: boolean | undefined
              redirect_uri?: string | undefined
              secret?: string | undefined
              status?: 'active' | 'disabled' | 'suspended' | undefined
              thumbnail_url?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                id?: string | undefined
                label?: string | undefined
                public?: boolean | undefined
                redirect_uri?: string | undefined
                secret?: string | undefined
                status?: 'active' | 'disabled' | 'suspended' | undefined
                thumbnail_url?: (string | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    id?: string | undefined
                    label?: string | undefined
                    public?: boolean | undefined
                    redirect_uri?: string | undefined
                    secret?: string | undefined
                    status?: 'active' | 'disabled' | 'suspended' | undefined
                    thumbnail_url?: (string | null) | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/oauth-clients/:clientId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: {
              id?: string | undefined
              label?: string | undefined
              public?: boolean | undefined
              redirect_uri?: string | undefined
              secret?: string | undefined
              status?: 'active' | 'disabled' | 'suspended' | undefined
              thumbnail_url?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } } & {
              json: {
                id?: string | undefined
                label?: string | undefined
                public?: boolean | undefined
                redirect_uri?: string | undefined
                secret?: string | undefined
                status?: 'active' | 'disabled' | 'suspended' | undefined
                thumbnail_url?: (string | null) | undefined
              }
            }
            output: {
              id?: string | undefined
              label?: string | undefined
              public?: boolean | undefined
              redirect_uri?: string | undefined
              secret?: string | undefined
              status?: 'active' | 'disabled' | 'suspended' | undefined
              thumbnail_url?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } } & {
              json: {
                id?: string | undefined
                label?: string | undefined
                public?: boolean | undefined
                redirect_uri?: string | undefined
                secret?: string | undefined
                status?: 'active' | 'disabled' | 'suspended' | undefined
                thumbnail_url?: (string | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/oauth-clients/:clientId/reset-secret': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: {
              id?: string | undefined
              label?: string | undefined
              public?: boolean | undefined
              redirect_uri?: string | undefined
              secret?: string | undefined
              status?: 'active' | 'disabled' | 'suspended' | undefined
              thumbnail_url?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/oauth-clients/:clientId/thumbnail': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/payment-methods': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                data: {
                  card_number: string
                  cvv: string
                  expiry_month: number
                  expiry_year: number
                }
                is_default: boolean
                type: 'credit_card'
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                data: {
                  card_number: string
                  cvv: string
                  expiry_month: number
                  expiry_year: number
                }
                is_default: boolean
                type: 'credit_card'
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    data?:
                      | {
                          card_type?: string | undefined
                          expiry?: string | undefined
                          last_four?: string | undefined
                        }
                      | {
                          card_type?: string | undefined
                          expiry?: string | undefined
                          last_four?: string | undefined
                        }
                      | { email?: string | undefined; paypal_id?: string | undefined }
                      | undefined
                    id?: number | undefined
                    is_default?: boolean | undefined
                    type?: 'credit_card' | 'google_pay' | 'paypal' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/payment-methods/:paymentMethodId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; paymentMethodId: number } }
            output: {
              created?: string | undefined
              data?:
                | {
                    card_type?: string | undefined
                    expiry?: string | undefined
                    last_four?: string | undefined
                  }
                | {
                    card_type?: string | undefined
                    expiry?: string | undefined
                    last_four?: string | undefined
                  }
                | { email?: string | undefined; paypal_id?: string | undefined }
                | undefined
              id?: number | undefined
              is_default?: boolean | undefined
              type?: 'credit_card' | 'google_pay' | 'paypal' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; paymentMethodId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; paymentMethodId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; paymentMethodId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/payment-methods/:paymentMethodId/make-default': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; paymentMethodId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; paymentMethodId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/payments': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { payment_method_id?: number | undefined; usd?: string | undefined }
            }
            output: { date?: string | undefined; id?: number | undefined; usd?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { payment_method_id?: number | undefined; usd?: string | undefined }
            }
            output: {
              warnings?: { details?: string | undefined; title?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { payment_method_id?: number | undefined; usd?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & {
              header: {
                'X-Filter'?:
                  | { [x: string]: unknown }
                  | {
                      '+and'?: { [x: string]: unknown }[] | undefined
                      '+contains'?: string | undefined
                      '+gt'?: number | undefined
                      '+gte'?: number | undefined
                      '+lt'?: number | undefined
                      '+lte'?: number | undefined
                      '+neq'?: string | undefined
                      '+or'?: { [x: string]: unknown }[] | undefined
                      '+order'?: 'asc' | 'desc' | undefined
                      '+order_by'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              data?:
                | { date?: string | undefined; id?: number | undefined; usd?: number | undefined }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & {
              header: {
                'X-Filter'?:
                  | { [x: string]: unknown }
                  | {
                      '+and'?: { [x: string]: unknown }[] | undefined
                      '+contains'?: string | undefined
                      '+gt'?: number | undefined
                      '+gte'?: number | undefined
                      '+lt'?: number | undefined
                      '+lte'?: number | undefined
                      '+neq'?: string | undefined
                      '+or'?: { [x: string]: unknown }[] | undefined
                      '+order'?: 'asc' | 'desc' | undefined
                      '+order_by'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/payments/paypal': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { cancel_url: string; redirect_url: string; usd: string }
            }
            output: { checkout_token?: string | undefined; payment_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { cancel_url: string; redirect_url: string; usd: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/payments/paypal/execute': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { payer_id: string; payment_id: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { payer_id: string; payment_id: string }
            }
            output: {
              warnings?: { details?: string | undefined; title?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { payer_id: string; payment_id: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/payments/:paymentId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; paymentId: number } }
            output: { date?: string | undefined; id?: number | undefined; usd?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; paymentId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/promo-codes': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & { json: { promo_code: string } }
            output: {
              credit_monthly_cap?: string | undefined
              credit_remaining?: string | undefined
              description?: string | undefined
              expire_dt?: string | undefined
              image_url?: string | undefined
              service_type?:
                | 'all'
                | 'backup'
                | 'blockstorage'
                | 'db_mysql'
                | 'ip_v4'
                | 'linode'
                | 'linode_disk'
                | 'linode_memory'
                | 'longview'
                | 'managed'
                | 'nodebalancer'
                | 'objectstorage'
                | 'placement_group'
                | 'transfer_tx'
                | undefined
              summary?: string | undefined
              this_month_credit_remaining?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & { json: { promo_code: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/service-transfers': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { entities: { linodes?: number[] | undefined } }
            }
            output: {
              created?: string | undefined
              entities?: { linodes?: number[] | undefined } | undefined
              expiry?: string | undefined
              is_sender?: boolean | undefined
              status?:
                | 'accepted'
                | 'canceled'
                | 'completed'
                | 'failed'
                | 'pending'
                | 'stale'
                | undefined
              token?: string | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { entities: { linodes?: number[] | undefined } }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    entities?: { linodes?: number[] | undefined } | undefined
                    expiry?: string | undefined
                    is_sender?: boolean | undefined
                    status?:
                      | 'accepted'
                      | 'canceled'
                      | 'completed'
                      | 'failed'
                      | 'pending'
                      | 'stale'
                      | undefined
                    token?: string | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/service-transfers/:token': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: {
              created?: string | undefined
              entities?: { linodes?: number[] | undefined } | undefined
              expiry?: string | undefined
              is_sender?: boolean | undefined
              status?:
                | 'accepted'
                | 'canceled'
                | 'completed'
                | 'failed'
                | 'pending'
                | 'stale'
                | undefined
              token?: string | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/service-transfers/:token/accept': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; token: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/settings': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              backups_enabled?: boolean | undefined
              interfaces_for_new_linodes?:
                | 'legacy_config_only'
                | 'legacy_config_default_but_linode_allowed'
                | 'linode_default_but_legacy_config_allowed'
                | 'linode_only'
                | undefined
              longview_subscription?: string | undefined
              maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
              managed?: boolean | undefined
              network_helper?: boolean | undefined
              object_storage?: 'disabled' | 'suspended' | 'active' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                backups_enabled?: boolean | undefined
                interfaces_for_new_linodes?:
                  | 'legacy_config_only'
                  | 'legacy_config_default_but_linode_allowed'
                  | 'linode_default_but_legacy_config_allowed'
                  | 'linode_only'
                  | undefined
                longview_subscription?: string | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                managed?: boolean | undefined
                network_helper?: boolean | undefined
                object_storage?: 'disabled' | 'suspended' | 'active' | undefined
              }
            }
            output: {
              backups_enabled?: boolean | undefined
              interfaces_for_new_linodes?:
                | 'legacy_config_only'
                | 'legacy_config_default_but_linode_allowed'
                | 'linode_default_but_legacy_config_allowed'
                | 'linode_only'
                | undefined
              longview_subscription?: string | undefined
              maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
              managed?: boolean | undefined
              network_helper?: boolean | undefined
              object_storage?: 'disabled' | 'suspended' | 'active' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                backups_enabled?: boolean | undefined
                interfaces_for_new_linodes?:
                  | 'legacy_config_only'
                  | 'legacy_config_default_but_linode_allowed'
                  | 'linode_default_but_legacy_config_allowed'
                  | 'linode_only'
                  | undefined
                longview_subscription?: string | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                managed?: boolean | undefined
                network_helper?: boolean | undefined
                object_storage?: 'disabled' | 'suspended' | 'active' | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/settings/managed-enable': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/transfer': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              billable?: number | undefined
              quota?: number | undefined
              region_transfers?:
                | {
                    billable?: number | undefined
                    id?: string | undefined
                    quota?: number | undefined
                    used?: number | undefined
                  }[]
                | undefined
              used?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/users': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                email?: string | undefined
                last_login?:
                  | ({
                      login_datetime?: string | undefined
                      status?: 'successful' | 'failed' | undefined
                    } | null)
                  | undefined
                password_created?: (string | null) | undefined
                restricted?: boolean | undefined
                ssh_keys?: string[] | undefined
                tfa_enabled?: boolean | undefined
                username?: string | undefined
                verified_phone_number?: (string | null) | undefined
              }
            }
            output: {
              email?: string | undefined
              last_login?:
                | ({
                    login_datetime?: string | undefined
                    status?: 'successful' | 'failed' | undefined
                  } | null)
                | undefined
              password_created?: (string | null) | undefined
              restricted?: boolean | undefined
              ssh_keys?: string[] | undefined
              tfa_enabled?: boolean | undefined
              username?: string | undefined
              verified_phone_number?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                email?: string | undefined
                last_login?:
                  | ({
                      login_datetime?: string | undefined
                      status?: 'successful' | 'failed' | undefined
                    } | null)
                  | undefined
                password_created?: (string | null) | undefined
                restricted?: boolean | undefined
                ssh_keys?: string[] | undefined
                tfa_enabled?: boolean | undefined
                username?: string | undefined
                verified_phone_number?: (string | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    email?: string | undefined
                    last_login?:
                      | ({
                          login_datetime?: string | undefined
                          status?: 'successful' | 'failed' | undefined
                        } | null)
                      | undefined
                    password_created?: (string | null) | undefined
                    restricted?: boolean | undefined
                    ssh_keys?: string[] | undefined
                    tfa_enabled?: boolean | undefined
                    username?: string | undefined
                    verified_phone_number?: (string | null) | undefined
                    user_type?: 'parent' | 'child' | 'proxy' | 'default' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/users/:username': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } }
            output: {
              email?: string | undefined
              last_login?:
                | ({
                    login_datetime?: string | undefined
                    status?: 'successful' | 'failed' | undefined
                  } | null)
                | undefined
              password_created?: (string | null) | undefined
              restricted?: boolean | undefined
              ssh_keys?: string[] | undefined
              tfa_enabled?: boolean | undefined
              username?: string | undefined
              verified_phone_number?: (string | null) | undefined
              user_type?: 'parent' | 'child' | 'proxy' | 'default' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } } & {
              json: {
                email?: string | undefined
                last_login?:
                  | ({
                      login_datetime?: string | undefined
                      status?: 'successful' | 'failed' | undefined
                    } | null)
                  | undefined
                password_created?: (string | null) | undefined
                restricted?: boolean | undefined
                ssh_keys?: string[] | undefined
                tfa_enabled?: boolean | undefined
                username?: string | undefined
                verified_phone_number?: (string | null) | undefined
              }
            }
            output: {
              email?: string | undefined
              last_login?:
                | ({
                    login_datetime?: string | undefined
                    status?: 'successful' | 'failed' | undefined
                  } | null)
                | undefined
              password_created?: (string | null) | undefined
              restricted?: boolean | undefined
              ssh_keys?: string[] | undefined
              tfa_enabled?: boolean | undefined
              username?: string | undefined
              verified_phone_number?: (string | null) | undefined
              user_type?: 'parent' | 'child' | 'proxy' | 'default' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } } & {
              json: {
                email?: string | undefined
                last_login?:
                  | ({
                      login_datetime?: string | undefined
                      status?: 'successful' | 'failed' | undefined
                    } | null)
                  | undefined
                password_created?: (string | null) | undefined
                restricted?: boolean | undefined
                ssh_keys?: string[] | undefined
                tfa_enabled?: boolean | undefined
                username?: string | undefined
                verified_phone_number?: (string | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/account/users/:username/grants': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } }
            output: {
              database?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              domain?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              firewall?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              global?:
                | {
                    account_access?: 'read_only' | 'read_write' | undefined
                    add_databases?: boolean | undefined
                    add_domains?: boolean | undefined
                    add_firewalls?: boolean | undefined
                    add_images?: boolean | undefined
                    add_linodes?: boolean | undefined
                    add_longview?: boolean | undefined
                    add_nodebalancers?: boolean | undefined
                    add_stackscripts?: boolean | undefined
                    add_volumes?: boolean | undefined
                    add_vpcs?: boolean | undefined
                    cancel_account?: boolean | undefined
                    child_account_access?: (boolean | null) | undefined
                    longview_subscription?: boolean | undefined
                  }
                | undefined
              image?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              linode?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              longview?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              nodebalancer?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              stackscript?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              volume?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              vpc?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } } & {
              json: {
                database?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                domain?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                firewall?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                global?:
                  | {
                      account_access?: 'read_only' | 'read_write' | undefined
                      add_databases?: boolean | undefined
                      add_domains?: boolean | undefined
                      add_firewalls?: boolean | undefined
                      add_images?: boolean | undefined
                      add_linodes?: boolean | undefined
                      add_longview?: boolean | undefined
                      add_nodebalancers?: boolean | undefined
                      add_stackscripts?: boolean | undefined
                      add_volumes?: boolean | undefined
                      add_vpcs?: boolean | undefined
                      cancel_account?: boolean | undefined
                      child_account_access?: (boolean | null) | undefined
                      longview_subscription?: boolean | undefined
                    }
                  | undefined
                image?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                linode?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                longview?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                nodebalancer?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                stackscript?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                volume?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                vpc?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              database?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              domain?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              firewall?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              global?:
                | {
                    account_access?: 'read_only' | 'read_write' | undefined
                    add_databases?: boolean | undefined
                    add_domains?: boolean | undefined
                    add_firewalls?: boolean | undefined
                    add_images?: boolean | undefined
                    add_linodes?: boolean | undefined
                    add_longview?: boolean | undefined
                    add_nodebalancers?: boolean | undefined
                    add_stackscripts?: boolean | undefined
                    add_volumes?: boolean | undefined
                    add_vpcs?: boolean | undefined
                    cancel_account?: boolean | undefined
                    child_account_access?: (boolean | null) | undefined
                    longview_subscription?: boolean | undefined
                  }
                | undefined
              image?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              linode?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              longview?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              nodebalancer?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              stackscript?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              volume?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              vpc?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; username: string } } & {
              json: {
                database?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                domain?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                firewall?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                global?:
                  | {
                      account_access?: 'read_only' | 'read_write' | undefined
                      add_databases?: boolean | undefined
                      add_domains?: boolean | undefined
                      add_firewalls?: boolean | undefined
                      add_images?: boolean | undefined
                      add_linodes?: boolean | undefined
                      add_longview?: boolean | undefined
                      add_nodebalancers?: boolean | undefined
                      add_stackscripts?: boolean | undefined
                      add_volumes?: boolean | undefined
                      add_vpcs?: boolean | undefined
                      cancel_account?: boolean | undefined
                      child_account_access?: (boolean | null) | undefined
                      longview_subscription?: boolean | undefined
                    }
                  | undefined
                image?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                linode?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                longview?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                nodebalancer?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                stackscript?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                volume?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
                vpc?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      permissions?: 'read_only' | 'read_write' | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/betas': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    description?: (string | null) | undefined
                    ended?: (string | null) | undefined
                    greenlight_only?: boolean | undefined
                    id?: string | undefined
                    label?: string | undefined
                    more_info?: (string | null) | undefined
                    started?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/betas/:betaId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; betaId: string } }
            output: {
              description?: (string | null) | undefined
              ended?: (string | null) | undefined
              greenlight_only?: boolean | undefined
              id?: string | undefined
              label?: string | undefined
              more_info?: (string | null) | undefined
              started?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; betaId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/engines': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    engine?: string | undefined
                    id?: string | undefined
                    version?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/engines/:engineId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; engineId: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              engine?: string | undefined
              id?: string | undefined
              version?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; engineId: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/instances': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    allow_list?: string[] | undefined
                    cluster_size?: 1 | 2 | 3 | undefined
                    created?: string | undefined
                    encrypted?: boolean | undefined
                    engine?: 'mysql' | 'postgresql' | undefined
                    fork?:
                      | { restore_time?: string | undefined; source?: number | undefined }
                      | undefined
                    hosts?:
                      | {
                          primary?: (string | null) | undefined
                          secondary?: (string | null) | undefined
                        }
                      | undefined
                    id?: number | undefined
                    instance_uri?: string | undefined
                    label?: string | undefined
                    members?: { [x: string]: unknown } | undefined
                    oldest_restore_time?: string | undefined
                    platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
                    port?: number | undefined
                    region?: string | undefined
                    status?:
                      | 'provisioning'
                      | 'active'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'failed'
                      | 'degraded'
                      | 'updating'
                      | 'resizing'
                      | undefined
                    total_disk_size_gb?: number | undefined
                    type?: string | undefined
                    updated?: string | undefined
                    updates?:
                      | {
                          day_of_week?: number | undefined
                          duration?: number | undefined
                          frequency?: 'weekly' | undefined
                          hour_of_day?: number | undefined
                          pending?:
                            | {
                                deadline?: (string | null) | undefined
                                description?: string | undefined
                                planned_for?: (string | null) | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    used_disk_size_gb?: number | undefined
                    version?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/config': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              binlog_retention_period?: number | undefined
              mysql?:
                | {
                    connect_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    default_time_zone?:
                      | {
                          description?: string | undefined
                          example?: string | undefined
                          maxLength?: number | undefined
                          minLength?: number | undefined
                          pattern?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    group_concat_max_len?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    information_schema_stats_expiry?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_change_buffer_max_size?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_flush_neighbors?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_ft_min_token_size?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_ft_server_stopword_table?:
                      | ({
                          description?: string | undefined
                          example?: string | undefined
                          maxLength?: number | undefined
                          pattern?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        } | null)
                      | undefined
                    innodb_lock_wait_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_log_buffer_size?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_online_alter_log_max_size?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_read_io_threads?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_rollback_on_timeout?:
                      | {
                          description?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_thread_concurrency?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    innodb_write_io_threads?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    interactive_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    internal_tmp_mem_storage_engine?:
                      | {
                          description?: string | undefined
                          enum?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_allowed_packet?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_heap_table_size?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    net_buffer_length?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    net_read_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    net_write_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    sql_mode?:
                      | {
                          description?: string | undefined
                          example?: string | undefined
                          maxLength?: number | undefined
                          pattern?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    sql_require_primary_key?:
                      | {
                          description?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    tmp_table_size?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    wait_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/instances': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                allow_list?: string[] | undefined
                cluster_size?: 1 | 2 | 3 | undefined
                engine: string
                engine_config?:
                  | {
                      binlog_retention_period?: number | undefined
                      mysql?:
                        | {
                            connect_timeout?: number | undefined
                            default_time_zone?: string | undefined
                            group_concat_max_len?: number | undefined
                            information_schema_stats_expiry?: number | undefined
                            innodb_change_buffer_max_size?: number | undefined
                            innodb_flush_neighbors?: number | undefined
                            innodb_ft_min_token_size?: number | undefined
                            innodb_ft_server_stopword_table?: (string | null) | undefined
                            innodb_lock_wait_timeout?: number | undefined
                            innodb_log_buffer_size?: number | undefined
                            innodb_online_alter_log_max_size?: number | undefined
                            innodb_read_io_threads?: number | undefined
                            innodb_rollback_on_timeout?: boolean | undefined
                            innodb_thread_concurrency?: number | undefined
                            innodb_write_io_threads?: number | undefined
                            interactive_timeout?: number | undefined
                            internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
                            max_allowed_packet?: number | undefined
                            max_heap_table_size?: number | undefined
                            net_buffer_length?: number | undefined
                            net_read_timeout?: number | undefined
                            net_write_timeout?: number | undefined
                            sql_mode?: string | undefined
                            sql_require_primary_key?: boolean | undefined
                            tmp_table_size?: number | undefined
                            wait_timeout?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                fork?: { restore_time?: string | undefined; source: number } | undefined
                label: string
                private_network?:
                  | ({
                      public_access?: boolean | undefined
                      subnet_id?: number | undefined
                      vpc_id?: number | undefined
                    } | null)
                  | undefined
                region: string
                ssl_connection?: boolean | undefined
                type: string
              }
            }
            output: {
              allow_list?: string[] | undefined
              cluster_size?: 1 | 2 | 3 | undefined
              created?: string | undefined
              encrypted?: boolean | undefined
              engine?: string | undefined
              engine_config?:
                | {
                    binlog_retention_period?: number | undefined
                    mysql?:
                      | {
                          connect_timeout?: number | undefined
                          default_time_zone?: string | undefined
                          group_concat_max_len?: number | undefined
                          information_schema_stats_expiry?: number | undefined
                          innodb_change_buffer_max_size?: number | undefined
                          innodb_flush_neighbors?: number | undefined
                          innodb_ft_min_token_size?: number | undefined
                          innodb_ft_server_stopword_table?: (string | null) | undefined
                          innodb_lock_wait_timeout?: number | undefined
                          innodb_log_buffer_size?: number | undefined
                          innodb_online_alter_log_max_size?: number | undefined
                          innodb_read_io_threads?: number | undefined
                          innodb_rollback_on_timeout?: boolean | undefined
                          innodb_thread_concurrency?: number | undefined
                          innodb_write_io_threads?: number | undefined
                          interactive_timeout?: number | undefined
                          internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
                          max_allowed_packet?: number | undefined
                          max_heap_table_size?: number | undefined
                          net_buffer_length?: number | undefined
                          net_read_timeout?: number | undefined
                          net_write_timeout?: number | undefined
                          sql_mode?: string | undefined
                          sql_require_primary_key?: boolean | undefined
                          tmp_table_size?: number | undefined
                          wait_timeout?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              fork?: { restore_time?: string | undefined; source?: number | undefined } | undefined
              hosts?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              id?: number | undefined
              label?: string | undefined
              members?: { [x: string]: unknown } | undefined
              oldest_restore_time?: string | undefined
              platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
              port?: number | undefined
              private_network?:
                | ({
                    public_access?: boolean | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  } | null)
                | undefined
              region?: string | undefined
              ssl_connection?: boolean | undefined
              status?:
                | 'provisioning'
                | 'active'
                | 'suspending'
                | 'suspended'
                | 'resuming'
                | 'failed'
                | 'degraded'
                | 'updating'
                | 'resizing'
                | undefined
              total_disk_size_gb?: number | undefined
              type?: string | undefined
              updated?: string | undefined
              updates?:
                | {
                    day_of_week?: number | undefined
                    duration?: number | undefined
                    frequency?: 'weekly' | undefined
                    hour_of_day?: number | undefined
                    pending?:
                      | {
                          deadline?: (string | null) | undefined
                          description?: string | undefined
                          planned_for?: (string | null) | undefined
                        }[]
                      | undefined
                  }
                | undefined
              used_disk_size_gb?: number | undefined
              version?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                allow_list?: string[] | undefined
                cluster_size?: 1 | 2 | 3 | undefined
                engine: string
                engine_config?:
                  | {
                      binlog_retention_period?: number | undefined
                      mysql?:
                        | {
                            connect_timeout?: number | undefined
                            default_time_zone?: string | undefined
                            group_concat_max_len?: number | undefined
                            information_schema_stats_expiry?: number | undefined
                            innodb_change_buffer_max_size?: number | undefined
                            innodb_flush_neighbors?: number | undefined
                            innodb_ft_min_token_size?: number | undefined
                            innodb_ft_server_stopword_table?: (string | null) | undefined
                            innodb_lock_wait_timeout?: number | undefined
                            innodb_log_buffer_size?: number | undefined
                            innodb_online_alter_log_max_size?: number | undefined
                            innodb_read_io_threads?: number | undefined
                            innodb_rollback_on_timeout?: boolean | undefined
                            innodb_thread_concurrency?: number | undefined
                            innodb_write_io_threads?: number | undefined
                            interactive_timeout?: number | undefined
                            internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
                            max_allowed_packet?: number | undefined
                            max_heap_table_size?: number | undefined
                            net_buffer_length?: number | undefined
                            net_read_timeout?: number | undefined
                            net_write_timeout?: number | undefined
                            sql_mode?: string | undefined
                            sql_require_primary_key?: boolean | undefined
                            tmp_table_size?: number | undefined
                            wait_timeout?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                fork?: { restore_time?: string | undefined; source: number } | undefined
                label: string
                private_network?:
                  | ({
                      public_access?: boolean | undefined
                      subnet_id?: number | undefined
                      vpc_id?: number | undefined
                    } | null)
                  | undefined
                region: string
                ssl_connection?: boolean | undefined
                type: string
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    allow_list?: string[] | undefined
                    cluster_size?: 1 | 2 | 3 | undefined
                    created?: string | undefined
                    encrypted?: boolean | undefined
                    engine?: string | undefined
                    engine_config?:
                      | {
                          binlog_retention_period?: number | undefined
                          mysql?:
                            | {
                                connect_timeout?: number | undefined
                                default_time_zone?: string | undefined
                                group_concat_max_len?: number | undefined
                                information_schema_stats_expiry?: number | undefined
                                innodb_change_buffer_max_size?: number | undefined
                                innodb_flush_neighbors?: number | undefined
                                innodb_ft_min_token_size?: number | undefined
                                innodb_ft_server_stopword_table?: (string | null) | undefined
                                innodb_lock_wait_timeout?: number | undefined
                                innodb_log_buffer_size?: number | undefined
                                innodb_online_alter_log_max_size?: number | undefined
                                innodb_read_io_threads?: number | undefined
                                innodb_rollback_on_timeout?: boolean | undefined
                                innodb_thread_concurrency?: number | undefined
                                innodb_write_io_threads?: number | undefined
                                interactive_timeout?: number | undefined
                                internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
                                max_allowed_packet?: number | undefined
                                max_heap_table_size?: number | undefined
                                net_buffer_length?: number | undefined
                                net_read_timeout?: number | undefined
                                net_write_timeout?: number | undefined
                                sql_mode?: string | undefined
                                sql_require_primary_key?: boolean | undefined
                                tmp_table_size?: number | undefined
                                wait_timeout?: number | undefined
                              }
                            | undefined
                        }
                      | undefined
                    fork?:
                      | { restore_time?: string | undefined; source?: number | undefined }
                      | undefined
                    hosts?:
                      | {
                          primary?: (string | null) | undefined
                          secondary?: (string | null) | undefined
                        }
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    members?: { [x: string]: unknown } | undefined
                    oldest_restore_time?: string | undefined
                    platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
                    port?: number | undefined
                    private_network?:
                      | ({
                          public_access?: boolean | undefined
                          subnet_id?: number | undefined
                          vpc_id?: number | undefined
                        } | null)
                      | undefined
                    region?: string | undefined
                    ssl_connection?: boolean | undefined
                    status?:
                      | 'provisioning'
                      | 'active'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'failed'
                      | 'degraded'
                      | 'updating'
                      | 'resizing'
                      | undefined
                    total_disk_size_gb?: number | undefined
                    type?: string | undefined
                    updated?: string | undefined
                    updates?:
                      | {
                          day_of_week?: number | undefined
                          duration?: number | undefined
                          frequency?: 'weekly' | undefined
                          hour_of_day?: number | undefined
                          pending?:
                            | {
                                deadline?: (string | null) | undefined
                                description?: string | undefined
                                planned_for?: (string | null) | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    used_disk_size_gb?: number | undefined
                    version?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/instances/:instanceId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              allow_list?: string[] | undefined
              cluster_size?: 1 | 2 | 3 | undefined
              created?: string | undefined
              encrypted?: boolean | undefined
              engine?: string | undefined
              engine_config?:
                | {
                    binlog_retention_period?: number | undefined
                    mysql?:
                      | {
                          connect_timeout?: number | undefined
                          default_time_zone?: string | undefined
                          group_concat_max_len?: number | undefined
                          information_schema_stats_expiry?: number | undefined
                          innodb_change_buffer_max_size?: number | undefined
                          innodb_flush_neighbors?: number | undefined
                          innodb_ft_min_token_size?: number | undefined
                          innodb_ft_server_stopword_table?: (string | null) | undefined
                          innodb_lock_wait_timeout?: number | undefined
                          innodb_log_buffer_size?: number | undefined
                          innodb_online_alter_log_max_size?: number | undefined
                          innodb_read_io_threads?: number | undefined
                          innodb_rollback_on_timeout?: boolean | undefined
                          innodb_thread_concurrency?: number | undefined
                          innodb_write_io_threads?: number | undefined
                          interactive_timeout?: number | undefined
                          internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
                          max_allowed_packet?: number | undefined
                          max_heap_table_size?: number | undefined
                          net_buffer_length?: number | undefined
                          net_read_timeout?: number | undefined
                          net_write_timeout?: number | undefined
                          sql_mode?: string | undefined
                          sql_require_primary_key?: boolean | undefined
                          tmp_table_size?: number | undefined
                          wait_timeout?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              fork?: { restore_time?: string | undefined; source?: number | undefined } | undefined
              hosts?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              id?: number | undefined
              label?: string | undefined
              members?: { [x: string]: unknown } | undefined
              oldest_restore_time?: string | undefined
              platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
              port?: number | undefined
              private_network?:
                | ({
                    public_access?: boolean | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  } | null)
                | undefined
              region?: string | undefined
              ssl_connection?: boolean | undefined
              status?:
                | 'provisioning'
                | 'active'
                | 'suspending'
                | 'suspended'
                | 'resuming'
                | 'failed'
                | 'degraded'
                | 'updating'
                | 'resizing'
                | undefined
              total_disk_size_gb?: number | undefined
              type?: string | undefined
              updated?: string | undefined
              updates?:
                | {
                    day_of_week?: number | undefined
                    duration?: number | undefined
                    frequency?: 'weekly' | undefined
                    hour_of_day?: number | undefined
                    pending?:
                      | {
                          deadline?: (string | null) | undefined
                          description?: string | undefined
                          planned_for?: (string | null) | undefined
                        }[]
                      | undefined
                  }
                | undefined
              used_disk_size_gb?: number | undefined
              version?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } } & {
              json: {
                allow_list?: string[] | undefined
                engine_config?:
                  | {
                      binlog_retention_period?: number | undefined
                      mysql?:
                        | {
                            connect_timeout?: number | undefined
                            default_time_zone?: string | undefined
                            group_concat_max_len?: number | undefined
                            information_schema_stats_expiry?: number | undefined
                            innodb_change_buffer_max_size?: number | undefined
                            innodb_flush_neighbors?: number | undefined
                            innodb_ft_min_token_size?: number | undefined
                            innodb_ft_server_stopword_table?: (string | null) | undefined
                            innodb_lock_wait_timeout?: number | undefined
                            innodb_log_buffer_size?: number | undefined
                            innodb_online_alter_log_max_size?: number | undefined
                            innodb_read_io_threads?: number | undefined
                            innodb_rollback_on_timeout?: boolean | undefined
                            innodb_thread_concurrency?: number | undefined
                            innodb_write_io_threads?: number | undefined
                            interactive_timeout?: number | undefined
                            internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
                            max_allowed_packet?: number | undefined
                            max_heap_table_size?: number | undefined
                            net_buffer_length?: number | undefined
                            net_read_timeout?: number | undefined
                            net_write_timeout?: number | undefined
                            sql_mode?: string | undefined
                            sql_require_primary_key?: boolean | undefined
                            tmp_table_size?: number | undefined
                            wait_timeout?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                label?: string | undefined
                private_network?:
                  | ({
                      public_access?: boolean | undefined
                      subnet_id?: number | undefined
                      vpc_id?: number | undefined
                    } | null)
                  | undefined
                type?: string | undefined
                updates?:
                  | {
                      day_of_week?: number | undefined
                      duration?: number | undefined
                      frequency?: 'weekly' | undefined
                      hour_of_day?: number | undefined
                      pending?:
                        | {
                            deadline?: (string | null) | undefined
                            description?: string | undefined
                            planned_for?: (string | null) | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                version?: string | undefined
              }
            }
            output: {
              allow_list?: string[] | undefined
              cluster_size?: 1 | 2 | 3 | undefined
              created?: string | undefined
              encrypted?: boolean | undefined
              engine?: string | undefined
              engine_config?:
                | {
                    binlog_retention_period?: number | undefined
                    mysql?:
                      | {
                          connect_timeout?: number | undefined
                          default_time_zone?: string | undefined
                          group_concat_max_len?: number | undefined
                          information_schema_stats_expiry?: number | undefined
                          innodb_change_buffer_max_size?: number | undefined
                          innodb_flush_neighbors?: number | undefined
                          innodb_ft_min_token_size?: number | undefined
                          innodb_ft_server_stopword_table?: (string | null) | undefined
                          innodb_lock_wait_timeout?: number | undefined
                          innodb_log_buffer_size?: number | undefined
                          innodb_online_alter_log_max_size?: number | undefined
                          innodb_read_io_threads?: number | undefined
                          innodb_rollback_on_timeout?: boolean | undefined
                          innodb_thread_concurrency?: number | undefined
                          innodb_write_io_threads?: number | undefined
                          interactive_timeout?: number | undefined
                          internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
                          max_allowed_packet?: number | undefined
                          max_heap_table_size?: number | undefined
                          net_buffer_length?: number | undefined
                          net_read_timeout?: number | undefined
                          net_write_timeout?: number | undefined
                          sql_mode?: string | undefined
                          sql_require_primary_key?: boolean | undefined
                          tmp_table_size?: number | undefined
                          wait_timeout?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              fork?: { restore_time?: string | undefined; source?: number | undefined } | undefined
              hosts?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              id?: number | undefined
              label?: string | undefined
              members?: { [x: string]: unknown } | undefined
              oldest_restore_time?: string | undefined
              platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
              port?: number | undefined
              private_network?:
                | ({
                    public_access?: boolean | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  } | null)
                | undefined
              region?: string | undefined
              ssl_connection?: boolean | undefined
              status?:
                | 'provisioning'
                | 'active'
                | 'suspending'
                | 'suspended'
                | 'resuming'
                | 'failed'
                | 'degraded'
                | 'updating'
                | 'resizing'
                | undefined
              total_disk_size_gb?: number | undefined
              type?: string | undefined
              updated?: string | undefined
              updates?:
                | {
                    day_of_week?: number | undefined
                    duration?: number | undefined
                    frequency?: 'weekly' | undefined
                    hour_of_day?: number | undefined
                    pending?:
                      | {
                          deadline?: (string | null) | undefined
                          description?: string | undefined
                          planned_for?: (string | null) | undefined
                        }[]
                      | undefined
                  }
                | undefined
              used_disk_size_gb?: number | undefined
              version?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } } & {
              json: {
                allow_list?: string[] | undefined
                engine_config?:
                  | {
                      binlog_retention_period?: number | undefined
                      mysql?:
                        | {
                            connect_timeout?: number | undefined
                            default_time_zone?: string | undefined
                            group_concat_max_len?: number | undefined
                            information_schema_stats_expiry?: number | undefined
                            innodb_change_buffer_max_size?: number | undefined
                            innodb_flush_neighbors?: number | undefined
                            innodb_ft_min_token_size?: number | undefined
                            innodb_ft_server_stopword_table?: (string | null) | undefined
                            innodb_lock_wait_timeout?: number | undefined
                            innodb_log_buffer_size?: number | undefined
                            innodb_online_alter_log_max_size?: number | undefined
                            innodb_read_io_threads?: number | undefined
                            innodb_rollback_on_timeout?: boolean | undefined
                            innodb_thread_concurrency?: number | undefined
                            innodb_write_io_threads?: number | undefined
                            interactive_timeout?: number | undefined
                            internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
                            max_allowed_packet?: number | undefined
                            max_heap_table_size?: number | undefined
                            net_buffer_length?: number | undefined
                            net_read_timeout?: number | undefined
                            net_write_timeout?: number | undefined
                            sql_mode?: string | undefined
                            sql_require_primary_key?: boolean | undefined
                            tmp_table_size?: number | undefined
                            wait_timeout?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                label?: string | undefined
                private_network?:
                  | ({
                      public_access?: boolean | undefined
                      subnet_id?: number | undefined
                      vpc_id?: number | undefined
                    } | null)
                  | undefined
                type?: string | undefined
                updates?:
                  | {
                      day_of_week?: number | undefined
                      duration?: number | undefined
                      frequency?: 'weekly' | undefined
                      hour_of_day?: number | undefined
                      pending?:
                        | {
                            deadline?: (string | null) | undefined
                            description?: string | undefined
                            planned_for?: (string | null) | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                version?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/instances/:instanceId/credentials': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { password?: string | undefined; username?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/instances/:instanceId/credentials/reset': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/instances/:instanceId/patch': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/instances/:instanceId/resume': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/instances/:instanceId/ssl': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { ca_certificate?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/mysql/instances/:instanceId/suspend': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/config': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              pg?:
                | {
                    autovacuum_analyze_scale_factor?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    autovacuum_analyze_threshold?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    autovacuum_max_workers?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    autovacuum_naptime?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    autovacuum_vacuum_cost_delay?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    autovacuum_vacuum_cost_limit?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    autovacuum_vacuum_scale_factor?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    autovacuum_vacuum_threshold?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    bgwriter_delay?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    bgwriter_flush_after?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    bgwriter_lru_maxpages?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    bgwriter_lru_multiplier?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    deadlock_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    default_toast_compression?:
                      | {
                          description?: string | undefined
                          enum?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    idle_in_transaction_session_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    jit?:
                      | {
                          description?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_files_per_process?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_locks_per_transaction?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_logical_replication_workers?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_parallel_workers?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_parallel_workers_per_gather?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_pred_locks_per_transaction?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_replication_slots?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_slot_wal_keep_size?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_stack_depth?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_standby_archive_delay?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_standby_streaming_delay?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_wal_senders?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    max_worker_processes?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    password_encryption?:
                      | {
                          description?: string | undefined
                          enum?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    'pg_partman_bgw.interval'?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    'pg_partman_bgw.role'?:
                      | {
                          description?: string | undefined
                          example?: string | undefined
                          maxLength?: number | undefined
                          pattern?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    'pg_stat_monitor.pgsm_enable_query_plan'?:
                      | {
                          description?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    'pg_stat_monitor.pgsm_max_buckets'?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    'pg_stat_statements.track'?:
                      | {
                          description?: string | undefined
                          enum?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: number[] | undefined
                        }
                      | undefined
                    temp_file_limit?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    timezone?:
                      | {
                          description?: string | undefined
                          example?: string | undefined
                          maxLength?: number | undefined
                          pattern?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    track_activity_query_size?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    track_commit_timestamp?:
                      | {
                          description?: string | undefined
                          enum?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    track_functions?:
                      | {
                          description?: string | undefined
                          enum?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    track_io_timing?:
                      | {
                          description?: string | undefined
                          enum?: string | undefined
                          example?: string | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    wal_sender_timeout?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                    wal_writer_delay?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              pg_stat_monitor_enable?:
                | {
                    description?: string | undefined
                    requires_restart?: boolean | undefined
                    type?: string | undefined
                  }
                | undefined
              pglookout?:
                | {
                    max_failover_replication_time_lag?:
                      | {
                          description?: string | undefined
                          example?: number | undefined
                          maximum?: number | undefined
                          minimum?: number | undefined
                          requires_restart?: boolean | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              shared_buffers_percentage?:
                | {
                    description?: string | undefined
                    example?: number | undefined
                    maximum?: number | undefined
                    minimum?: number | undefined
                    requires_restart?: boolean | undefined
                    type?: string | undefined
                  }
                | undefined
              work_mem?:
                | {
                    description?: string | undefined
                    example?: number | undefined
                    maximum?: number | undefined
                    minimum?: number | undefined
                    requires_restart?: boolean | undefined
                    type?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/instances': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                allow_list?: string[] | undefined
                cluster_size?: 1 | 2 | 3 | undefined
                engine: string
                engine_config?:
                  | {
                      pg?:
                        | {
                            autovacuum_analyze_scale_factor?: number | undefined
                            autovacuum_analyze_threshold?: number | undefined
                            autovacuum_max_workers?: number | undefined
                            autovacuum_naptime?: number | undefined
                            autovacuum_vacuum_cost_delay?: number | undefined
                            autovacuum_vacuum_cost_limit?: number | undefined
                            autovacuum_vacuum_scale_factor?: number | undefined
                            autovacuum_vacuum_threshold?: number | undefined
                            bgwriter_delay?: number | undefined
                            bgwriter_flush_after?: number | undefined
                            bgwriter_lru_maxpages?: number | undefined
                            bgwriter_lru_multiplier?: number | undefined
                            deadlock_timeout?: number | undefined
                            default_toast_compression?: 'lz4' | 'pglz' | undefined
                            idle_in_transaction_session_timeout?: number | undefined
                            jit?: boolean | undefined
                            max_files_per_process?: number | undefined
                            max_locks_per_transaction?: number | undefined
                            max_logical_replication_workers?: number | undefined
                            max_parallel_workers?: number | undefined
                            max_parallel_workers_per_gather?: number | undefined
                            max_pred_locks_per_transaction?: number | undefined
                            max_replication_slots?: number | undefined
                            max_slot_wal_keep_size?: number | undefined
                            max_stack_depth?: number | undefined
                            max_standby_archive_delay?: number | undefined
                            max_standby_streaming_delay?: number | undefined
                            max_wal_senders?: number | undefined
                            max_worker_processes?: number | undefined
                            password_encryption?: 'scram-sh-256' | 'md5' | undefined
                            'pg_partman_bgw.interval'?: number | undefined
                            'pg_partman_bgw.role'?: string | undefined
                            'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
                            'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
                            'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
                            temp_file_limit?: number | undefined
                            timezone?: string | undefined
                            track_activity_query_size?: number | undefined
                            track_commit_timestamp?: 'on' | 'off' | undefined
                            track_functions?: 'all' | 'pl' | 'none' | undefined
                            track_io_timing?: 'on' | 'off' | undefined
                            wal_sender_timeout?: number | undefined
                            wal_writer_delay?: number | undefined
                          }
                        | undefined
                      pg_stat_monitor_enable?: boolean | undefined
                      pglookout?:
                        | { max_failover_replication_time_lag?: number | undefined }
                        | undefined
                      shared_buffers_percentage?: number | undefined
                      work_mem?: number | undefined
                    }
                  | undefined
                fork?: { restore_time?: string | undefined; source: number } | undefined
                label: string
                private_network?:
                  | ({
                      public_access?: boolean | undefined
                      subnet_id?: number | undefined
                      vpc_id?: number | undefined
                    } | null)
                  | undefined
                region: string
                ssl_connection?: boolean | undefined
                type: string
              }
            }
            output: {
              allow_list?: string[] | undefined
              cluster_size?: 1 | 2 | 3 | undefined
              created?: string | undefined
              encrypted?: boolean | undefined
              engine?: string | undefined
              engine_config?:
                | {
                    pg?:
                      | {
                          autovacuum_analyze_scale_factor?: number | undefined
                          autovacuum_analyze_threshold?: number | undefined
                          autovacuum_max_workers?: number | undefined
                          autovacuum_naptime?: number | undefined
                          autovacuum_vacuum_cost_delay?: number | undefined
                          autovacuum_vacuum_cost_limit?: number | undefined
                          autovacuum_vacuum_scale_factor?: number | undefined
                          autovacuum_vacuum_threshold?: number | undefined
                          bgwriter_delay?: number | undefined
                          bgwriter_flush_after?: number | undefined
                          bgwriter_lru_maxpages?: number | undefined
                          bgwriter_lru_multiplier?: number | undefined
                          deadlock_timeout?: number | undefined
                          default_toast_compression?: 'lz4' | 'pglz' | undefined
                          idle_in_transaction_session_timeout?: number | undefined
                          jit?: boolean | undefined
                          max_files_per_process?: number | undefined
                          max_locks_per_transaction?: number | undefined
                          max_logical_replication_workers?: number | undefined
                          max_parallel_workers?: number | undefined
                          max_parallel_workers_per_gather?: number | undefined
                          max_pred_locks_per_transaction?: number | undefined
                          max_replication_slots?: number | undefined
                          max_slot_wal_keep_size?: number | undefined
                          max_stack_depth?: number | undefined
                          max_standby_archive_delay?: number | undefined
                          max_standby_streaming_delay?: number | undefined
                          max_wal_senders?: number | undefined
                          max_worker_processes?: number | undefined
                          password_encryption?: 'scram-sh-256' | 'md5' | undefined
                          'pg_partman_bgw.interval'?: number | undefined
                          'pg_partman_bgw.role'?: string | undefined
                          'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
                          'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
                          'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
                          temp_file_limit?: number | undefined
                          timezone?: string | undefined
                          track_activity_query_size?: number | undefined
                          track_commit_timestamp?: 'on' | 'off' | undefined
                          track_functions?: 'all' | 'pl' | 'none' | undefined
                          track_io_timing?: 'on' | 'off' | undefined
                          wal_sender_timeout?: number | undefined
                          wal_writer_delay?: number | undefined
                        }
                      | undefined
                    pg_stat_monitor_enable?: boolean | undefined
                    pglookout?:
                      | { max_failover_replication_time_lag?: number | undefined }
                      | undefined
                    shared_buffers_percentage?: number | undefined
                    work_mem?: number | undefined
                  }
                | undefined
              fork?: { restore_time?: string | undefined; source?: number | undefined } | undefined
              hosts?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              id?: number | undefined
              label?: string | undefined
              members?: { [x: string]: unknown } | undefined
              platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
              port?: number | undefined
              region?: string | undefined
              ssl_connection?: boolean | undefined
              status?:
                | 'provisioning'
                | 'active'
                | 'suspending'
                | 'suspended'
                | 'resuming'
                | 'failed'
                | 'degraded'
                | 'updating'
                | 'resizing'
                | undefined
              total_disk_size_gb?: number | undefined
              type?: string | undefined
              updated?: string | undefined
              updates?:
                | {
                    day_of_week?: number | undefined
                    duration?: number | undefined
                    frequency?: 'weekly' | undefined
                    hour_of_day?: number | undefined
                    pending?:
                      | {
                          deadline?: (string | null) | undefined
                          description?: string | undefined
                          planned_for?: (string | null) | undefined
                        }[]
                      | undefined
                  }
                | undefined
              used_disk_size_gb?: number | undefined
              version?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                allow_list?: string[] | undefined
                cluster_size?: 1 | 2 | 3 | undefined
                engine: string
                engine_config?:
                  | {
                      pg?:
                        | {
                            autovacuum_analyze_scale_factor?: number | undefined
                            autovacuum_analyze_threshold?: number | undefined
                            autovacuum_max_workers?: number | undefined
                            autovacuum_naptime?: number | undefined
                            autovacuum_vacuum_cost_delay?: number | undefined
                            autovacuum_vacuum_cost_limit?: number | undefined
                            autovacuum_vacuum_scale_factor?: number | undefined
                            autovacuum_vacuum_threshold?: number | undefined
                            bgwriter_delay?: number | undefined
                            bgwriter_flush_after?: number | undefined
                            bgwriter_lru_maxpages?: number | undefined
                            bgwriter_lru_multiplier?: number | undefined
                            deadlock_timeout?: number | undefined
                            default_toast_compression?: 'lz4' | 'pglz' | undefined
                            idle_in_transaction_session_timeout?: number | undefined
                            jit?: boolean | undefined
                            max_files_per_process?: number | undefined
                            max_locks_per_transaction?: number | undefined
                            max_logical_replication_workers?: number | undefined
                            max_parallel_workers?: number | undefined
                            max_parallel_workers_per_gather?: number | undefined
                            max_pred_locks_per_transaction?: number | undefined
                            max_replication_slots?: number | undefined
                            max_slot_wal_keep_size?: number | undefined
                            max_stack_depth?: number | undefined
                            max_standby_archive_delay?: number | undefined
                            max_standby_streaming_delay?: number | undefined
                            max_wal_senders?: number | undefined
                            max_worker_processes?: number | undefined
                            password_encryption?: 'scram-sh-256' | 'md5' | undefined
                            'pg_partman_bgw.interval'?: number | undefined
                            'pg_partman_bgw.role'?: string | undefined
                            'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
                            'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
                            'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
                            temp_file_limit?: number | undefined
                            timezone?: string | undefined
                            track_activity_query_size?: number | undefined
                            track_commit_timestamp?: 'on' | 'off' | undefined
                            track_functions?: 'all' | 'pl' | 'none' | undefined
                            track_io_timing?: 'on' | 'off' | undefined
                            wal_sender_timeout?: number | undefined
                            wal_writer_delay?: number | undefined
                          }
                        | undefined
                      pg_stat_monitor_enable?: boolean | undefined
                      pglookout?:
                        | { max_failover_replication_time_lag?: number | undefined }
                        | undefined
                      shared_buffers_percentage?: number | undefined
                      work_mem?: number | undefined
                    }
                  | undefined
                fork?: { restore_time?: string | undefined; source: number } | undefined
                label: string
                private_network?:
                  | ({
                      public_access?: boolean | undefined
                      subnet_id?: number | undefined
                      vpc_id?: number | undefined
                    } | null)
                  | undefined
                region: string
                ssl_connection?: boolean | undefined
                type: string
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    allow_list?: string[] | undefined
                    cluster_size?: 1 | 2 | 3 | undefined
                    created?: string | undefined
                    encrypted?: boolean | undefined
                    engine?: string | undefined
                    engine_config?:
                      | {
                          pg?:
                            | {
                                autovacuum_analyze_scale_factor?: number | undefined
                                autovacuum_analyze_threshold?: number | undefined
                                autovacuum_max_workers?: number | undefined
                                autovacuum_naptime?: number | undefined
                                autovacuum_vacuum_cost_delay?: number | undefined
                                autovacuum_vacuum_cost_limit?: number | undefined
                                autovacuum_vacuum_scale_factor?: number | undefined
                                autovacuum_vacuum_threshold?: number | undefined
                                bgwriter_delay?: number | undefined
                                bgwriter_flush_after?: number | undefined
                                bgwriter_lru_maxpages?: number | undefined
                                bgwriter_lru_multiplier?: number | undefined
                                deadlock_timeout?: number | undefined
                                default_toast_compression?: 'lz4' | 'pglz' | undefined
                                idle_in_transaction_session_timeout?: number | undefined
                                jit?: boolean | undefined
                                max_files_per_process?: number | undefined
                                max_locks_per_transaction?: number | undefined
                                max_logical_replication_workers?: number | undefined
                                max_parallel_workers?: number | undefined
                                max_parallel_workers_per_gather?: number | undefined
                                max_pred_locks_per_transaction?: number | undefined
                                max_replication_slots?: number | undefined
                                max_slot_wal_keep_size?: number | undefined
                                max_stack_depth?: number | undefined
                                max_standby_archive_delay?: number | undefined
                                max_standby_streaming_delay?: number | undefined
                                max_wal_senders?: number | undefined
                                max_worker_processes?: number | undefined
                                password_encryption?: 'scram-sh-256' | 'md5' | undefined
                                'pg_partman_bgw.interval'?: number | undefined
                                'pg_partman_bgw.role'?: string | undefined
                                'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
                                'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
                                'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
                                temp_file_limit?: number | undefined
                                timezone?: string | undefined
                                track_activity_query_size?: number | undefined
                                track_commit_timestamp?: 'on' | 'off' | undefined
                                track_functions?: 'all' | 'pl' | 'none' | undefined
                                track_io_timing?: 'on' | 'off' | undefined
                                wal_sender_timeout?: number | undefined
                                wal_writer_delay?: number | undefined
                              }
                            | undefined
                          pg_stat_monitor_enable?: boolean | undefined
                          pglookout?:
                            | { max_failover_replication_time_lag?: number | undefined }
                            | undefined
                          shared_buffers_percentage?: number | undefined
                          work_mem?: number | undefined
                        }
                      | undefined
                    fork?:
                      | { restore_time?: string | undefined; source?: number | undefined }
                      | undefined
                    hosts?:
                      | {
                          primary?: (string | null) | undefined
                          secondary?: (string | null) | undefined
                        }
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    members?: { [x: string]: unknown } | undefined
                    oldest_restore_time?: string | undefined
                    platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
                    port?: number | undefined
                    private_network?:
                      | ({
                          public_access?: boolean | undefined
                          subnet_id?: number | undefined
                          vpc_id?: number | undefined
                        } | null)
                      | undefined
                    region?: string | undefined
                    ssl_connection?: boolean | undefined
                    status?:
                      | 'provisioning'
                      | 'active'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'failed'
                      | 'degraded'
                      | 'updating'
                      | 'resizing'
                      | undefined
                    total_disk_size_gb?: number | undefined
                    type?: string | undefined
                    updated?: string | undefined
                    updates?:
                      | {
                          day_of_week?: number | undefined
                          duration?: number | undefined
                          frequency?: 'weekly' | undefined
                          hour_of_day?: number | undefined
                          pending?:
                            | {
                                deadline?: (string | null) | undefined
                                description?: string | undefined
                                planned_for?: (string | null) | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    used_disk_size_gb?: number | undefined
                    version?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/instances/:instanceId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              allow_list?: string[] | undefined
              cluster_size?: 1 | 2 | 3 | undefined
              created?: string | undefined
              encrypted?: boolean | undefined
              engine?: string | undefined
              engine_config?:
                | {
                    pg?:
                      | {
                          autovacuum_analyze_scale_factor?: number | undefined
                          autovacuum_analyze_threshold?: number | undefined
                          autovacuum_max_workers?: number | undefined
                          autovacuum_naptime?: number | undefined
                          autovacuum_vacuum_cost_delay?: number | undefined
                          autovacuum_vacuum_cost_limit?: number | undefined
                          autovacuum_vacuum_scale_factor?: number | undefined
                          autovacuum_vacuum_threshold?: number | undefined
                          bgwriter_delay?: number | undefined
                          bgwriter_flush_after?: number | undefined
                          bgwriter_lru_maxpages?: number | undefined
                          bgwriter_lru_multiplier?: number | undefined
                          deadlock_timeout?: number | undefined
                          default_toast_compression?: 'lz4' | 'pglz' | undefined
                          idle_in_transaction_session_timeout?: number | undefined
                          jit?: boolean | undefined
                          max_files_per_process?: number | undefined
                          max_locks_per_transaction?: number | undefined
                          max_logical_replication_workers?: number | undefined
                          max_parallel_workers?: number | undefined
                          max_parallel_workers_per_gather?: number | undefined
                          max_pred_locks_per_transaction?: number | undefined
                          max_replication_slots?: number | undefined
                          max_slot_wal_keep_size?: number | undefined
                          max_stack_depth?: number | undefined
                          max_standby_archive_delay?: number | undefined
                          max_standby_streaming_delay?: number | undefined
                          max_wal_senders?: number | undefined
                          max_worker_processes?: number | undefined
                          password_encryption?: 'scram-sh-256' | 'md5' | undefined
                          'pg_partman_bgw.interval'?: number | undefined
                          'pg_partman_bgw.role'?: string | undefined
                          'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
                          'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
                          'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
                          temp_file_limit?: number | undefined
                          timezone?: string | undefined
                          track_activity_query_size?: number | undefined
                          track_commit_timestamp?: 'on' | 'off' | undefined
                          track_functions?: 'all' | 'pl' | 'none' | undefined
                          track_io_timing?: 'on' | 'off' | undefined
                          wal_sender_timeout?: number | undefined
                          wal_writer_delay?: number | undefined
                        }
                      | undefined
                    pg_stat_monitor_enable?: boolean | undefined
                    pglookout?:
                      | { max_failover_replication_time_lag?: number | undefined }
                      | undefined
                    shared_buffers_percentage?: number | undefined
                    work_mem?: number | undefined
                  }
                | undefined
              fork?: { restore_time?: string | undefined; source?: number | undefined } | undefined
              hosts?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              id?: number | undefined
              label?: string | undefined
              members?: { [x: string]: unknown } | undefined
              oldest_restore_time?: string | undefined
              platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
              port?: number | undefined
              private_network?:
                | ({
                    public_access?: boolean | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  } | null)
                | undefined
              region?: string | undefined
              ssl_connection?: boolean | undefined
              status?:
                | 'provisioning'
                | 'active'
                | 'suspending'
                | 'suspended'
                | 'resuming'
                | 'failed'
                | 'degraded'
                | 'updating'
                | 'resizing'
                | undefined
              total_disk_size_gb?: number | undefined
              type?: string | undefined
              updated?: string | undefined
              updates?:
                | {
                    day_of_week?: number | undefined
                    duration?: number | undefined
                    frequency?: 'weekly' | undefined
                    hour_of_day?: number | undefined
                    pending?:
                      | {
                          deadline?: (string | null) | undefined
                          description?: string | undefined
                          planned_for?: (string | null) | undefined
                        }[]
                      | undefined
                  }
                | undefined
              used_disk_size_gb?: number | undefined
              version?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } } & {
              json: {
                allow_list?: string[] | undefined
                engine_config?:
                  | {
                      pg?:
                        | {
                            autovacuum_analyze_scale_factor?: number | undefined
                            autovacuum_analyze_threshold?: number | undefined
                            autovacuum_max_workers?: number | undefined
                            autovacuum_naptime?: number | undefined
                            autovacuum_vacuum_cost_delay?: number | undefined
                            autovacuum_vacuum_cost_limit?: number | undefined
                            autovacuum_vacuum_scale_factor?: number | undefined
                            autovacuum_vacuum_threshold?: number | undefined
                            bgwriter_delay?: number | undefined
                            bgwriter_flush_after?: number | undefined
                            bgwriter_lru_maxpages?: number | undefined
                            bgwriter_lru_multiplier?: number | undefined
                            deadlock_timeout?: number | undefined
                            default_toast_compression?: 'lz4' | 'pglz' | undefined
                            idle_in_transaction_session_timeout?: number | undefined
                            jit?: boolean | undefined
                            max_files_per_process?: number | undefined
                            max_locks_per_transaction?: number | undefined
                            max_logical_replication_workers?: number | undefined
                            max_parallel_workers?: number | undefined
                            max_parallel_workers_per_gather?: number | undefined
                            max_pred_locks_per_transaction?: number | undefined
                            max_replication_slots?: number | undefined
                            max_slot_wal_keep_size?: number | undefined
                            max_stack_depth?: number | undefined
                            max_standby_archive_delay?: number | undefined
                            max_standby_streaming_delay?: number | undefined
                            max_wal_senders?: number | undefined
                            max_worker_processes?: number | undefined
                            password_encryption?: 'scram-sh-256' | 'md5' | undefined
                            'pg_partman_bgw.interval'?: number | undefined
                            'pg_partman_bgw.role'?: string | undefined
                            'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
                            'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
                            'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
                            temp_file_limit?: number | undefined
                            timezone?: string | undefined
                            track_activity_query_size?: number | undefined
                            track_commit_timestamp?: 'on' | 'off' | undefined
                            track_functions?: 'all' | 'pl' | 'none' | undefined
                            track_io_timing?: 'on' | 'off' | undefined
                            wal_sender_timeout?: number | undefined
                            wal_writer_delay?: number | undefined
                          }
                        | undefined
                      pg_stat_monitor_enable?: boolean | undefined
                      pglookout?:
                        | { max_failover_replication_time_lag?: number | undefined }
                        | undefined
                      shared_buffers_percentage?: number | undefined
                      work_mem?: number | undefined
                    }
                  | undefined
                label?: string | undefined
                private_network?:
                  | ({
                      public_access?: boolean | undefined
                      subnet_id?: number | undefined
                      vpc_id?: number | undefined
                    } | null)
                  | undefined
                type?: string | undefined
                updates?:
                  | {
                      day_of_week?: number | undefined
                      duration?: number | undefined
                      frequency?: 'weekly' | undefined
                      hour_of_day?: number | undefined
                      pending?:
                        | {
                            deadline?: (string | null) | undefined
                            description?: string | undefined
                            planned_for?: (string | null) | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                version?: string | undefined
              }
            }
            output: {
              allow_list?: string[] | undefined
              cluster_size?: 1 | 2 | 3 | undefined
              created?: string | undefined
              encrypted?: boolean | undefined
              engine?: string | undefined
              engine_config?:
                | {
                    pg?:
                      | {
                          autovacuum_analyze_scale_factor?: number | undefined
                          autovacuum_analyze_threshold?: number | undefined
                          autovacuum_max_workers?: number | undefined
                          autovacuum_naptime?: number | undefined
                          autovacuum_vacuum_cost_delay?: number | undefined
                          autovacuum_vacuum_cost_limit?: number | undefined
                          autovacuum_vacuum_scale_factor?: number | undefined
                          autovacuum_vacuum_threshold?: number | undefined
                          bgwriter_delay?: number | undefined
                          bgwriter_flush_after?: number | undefined
                          bgwriter_lru_maxpages?: number | undefined
                          bgwriter_lru_multiplier?: number | undefined
                          deadlock_timeout?: number | undefined
                          default_toast_compression?: 'lz4' | 'pglz' | undefined
                          idle_in_transaction_session_timeout?: number | undefined
                          jit?: boolean | undefined
                          max_files_per_process?: number | undefined
                          max_locks_per_transaction?: number | undefined
                          max_logical_replication_workers?: number | undefined
                          max_parallel_workers?: number | undefined
                          max_parallel_workers_per_gather?: number | undefined
                          max_pred_locks_per_transaction?: number | undefined
                          max_replication_slots?: number | undefined
                          max_slot_wal_keep_size?: number | undefined
                          max_stack_depth?: number | undefined
                          max_standby_archive_delay?: number | undefined
                          max_standby_streaming_delay?: number | undefined
                          max_wal_senders?: number | undefined
                          max_worker_processes?: number | undefined
                          password_encryption?: 'scram-sh-256' | 'md5' | undefined
                          'pg_partman_bgw.interval'?: number | undefined
                          'pg_partman_bgw.role'?: string | undefined
                          'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
                          'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
                          'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
                          temp_file_limit?: number | undefined
                          timezone?: string | undefined
                          track_activity_query_size?: number | undefined
                          track_commit_timestamp?: 'on' | 'off' | undefined
                          track_functions?: 'all' | 'pl' | 'none' | undefined
                          track_io_timing?: 'on' | 'off' | undefined
                          wal_sender_timeout?: number | undefined
                          wal_writer_delay?: number | undefined
                        }
                      | undefined
                    pg_stat_monitor_enable?: boolean | undefined
                    pglookout?:
                      | { max_failover_replication_time_lag?: number | undefined }
                      | undefined
                    shared_buffers_percentage?: number | undefined
                    work_mem?: number | undefined
                  }
                | undefined
              fork?: { restore_time?: string | undefined; source?: number | undefined } | undefined
              hosts?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              id?: number | undefined
              label?: string | undefined
              members?: { [x: string]: unknown } | undefined
              oldest_restore_time?: string | undefined
              platform?: 'rdbms-legacy' | 'rdbms-default' | undefined
              port?: number | undefined
              private_network?:
                | ({
                    public_access?: boolean | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  } | null)
                | undefined
              region?: string | undefined
              ssl_connection?: boolean | undefined
              status?:
                | 'provisioning'
                | 'active'
                | 'suspending'
                | 'suspended'
                | 'resuming'
                | 'failed'
                | 'degraded'
                | 'updating'
                | 'resizing'
                | undefined
              total_disk_size_gb?: number | undefined
              type?: string | undefined
              updated?: string | undefined
              updates?:
                | {
                    day_of_week?: number | undefined
                    duration?: number | undefined
                    frequency?: 'weekly' | undefined
                    hour_of_day?: number | undefined
                    pending?:
                      | {
                          deadline?: (string | null) | undefined
                          description?: string | undefined
                          planned_for?: (string | null) | undefined
                        }[]
                      | undefined
                  }
                | undefined
              used_disk_size_gb?: number | undefined
              version?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } } & {
              json: {
                allow_list?: string[] | undefined
                engine_config?:
                  | {
                      pg?:
                        | {
                            autovacuum_analyze_scale_factor?: number | undefined
                            autovacuum_analyze_threshold?: number | undefined
                            autovacuum_max_workers?: number | undefined
                            autovacuum_naptime?: number | undefined
                            autovacuum_vacuum_cost_delay?: number | undefined
                            autovacuum_vacuum_cost_limit?: number | undefined
                            autovacuum_vacuum_scale_factor?: number | undefined
                            autovacuum_vacuum_threshold?: number | undefined
                            bgwriter_delay?: number | undefined
                            bgwriter_flush_after?: number | undefined
                            bgwriter_lru_maxpages?: number | undefined
                            bgwriter_lru_multiplier?: number | undefined
                            deadlock_timeout?: number | undefined
                            default_toast_compression?: 'lz4' | 'pglz' | undefined
                            idle_in_transaction_session_timeout?: number | undefined
                            jit?: boolean | undefined
                            max_files_per_process?: number | undefined
                            max_locks_per_transaction?: number | undefined
                            max_logical_replication_workers?: number | undefined
                            max_parallel_workers?: number | undefined
                            max_parallel_workers_per_gather?: number | undefined
                            max_pred_locks_per_transaction?: number | undefined
                            max_replication_slots?: number | undefined
                            max_slot_wal_keep_size?: number | undefined
                            max_stack_depth?: number | undefined
                            max_standby_archive_delay?: number | undefined
                            max_standby_streaming_delay?: number | undefined
                            max_wal_senders?: number | undefined
                            max_worker_processes?: number | undefined
                            password_encryption?: 'scram-sh-256' | 'md5' | undefined
                            'pg_partman_bgw.interval'?: number | undefined
                            'pg_partman_bgw.role'?: string | undefined
                            'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
                            'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
                            'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
                            temp_file_limit?: number | undefined
                            timezone?: string | undefined
                            track_activity_query_size?: number | undefined
                            track_commit_timestamp?: 'on' | 'off' | undefined
                            track_functions?: 'all' | 'pl' | 'none' | undefined
                            track_io_timing?: 'on' | 'off' | undefined
                            wal_sender_timeout?: number | undefined
                            wal_writer_delay?: number | undefined
                          }
                        | undefined
                      pg_stat_monitor_enable?: boolean | undefined
                      pglookout?:
                        | { max_failover_replication_time_lag?: number | undefined }
                        | undefined
                      shared_buffers_percentage?: number | undefined
                      work_mem?: number | undefined
                    }
                  | undefined
                label?: string | undefined
                private_network?:
                  | ({
                      public_access?: boolean | undefined
                      subnet_id?: number | undefined
                      vpc_id?: number | undefined
                    } | null)
                  | undefined
                type?: string | undefined
                updates?:
                  | {
                      day_of_week?: number | undefined
                      duration?: number | undefined
                      frequency?: 'weekly' | undefined
                      hour_of_day?: number | undefined
                      pending?:
                        | {
                            deadline?: (string | null) | undefined
                            description?: string | undefined
                            planned_for?: (string | null) | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                version?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/instances/:instanceId/credentials': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { password?: string | undefined; username?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/instances/:instanceId/credentials/reset': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/instances/:instanceId/patch': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/instances/:instanceId/resume': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/instances/:instanceId/ssl': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: { ca_certificate?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/postgresql/instances/:instanceId/suspend': {
      $post:
        | {
            input: { param: { apiVersion: 'v4'; instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4'; instanceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/types': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    class?: 'dedicated' | 'shared' | 'premium' | undefined
                    disk?: number | undefined
                    engines?:
                      | {
                          mysql?:
                            | {
                                price?:
                                  | { hourly?: number | undefined; monthly?: number | undefined }
                                  | undefined
                                quantity?: 1 | 2 | 3 | undefined
                              }[]
                            | undefined
                          postgresql?:
                            | {
                                price?:
                                  | { hourly?: number | undefined; monthly?: number | undefined }
                                  | undefined
                                quantity?: 1 | 2 | 3 | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    id?: string | undefined
                    label?: string | undefined
                    memory?: number | undefined
                    vcpus?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/databases/types/:typeId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; typeId: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              class?: 'dedicated' | 'shared' | 'premium' | undefined
              disk?: number | undefined
              engines?:
                | {
                    mysql?:
                      | {
                          price?:
                            | { hourly?: number | undefined; monthly?: number | undefined }
                            | undefined
                          quantity?: 1 | 2 | 3 | undefined
                        }[]
                      | undefined
                    postgresql?:
                      | {
                          price?:
                            | { hourly?: number | undefined; monthly?: number | undefined }
                            | undefined
                          quantity?: 1 | 2 | 3 | undefined
                        }[]
                      | undefined
                  }
                | undefined
              id?: string | undefined
              label?: string | undefined
              memory?: number | undefined
              vcpus?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; typeId: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/domains': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                axfr_ips?: string[] | undefined
                description?: (string | null) | undefined
                domain?: string | undefined
                expire_sec?: number | undefined
                group?: (string | null) | undefined
                id?: number | undefined
                master_ips?: string[] | undefined
                refresh_sec?: number | undefined
                retry_sec?: number | undefined
                soa_email?: string | undefined
                status?: 'disabled' | 'active' | undefined
                tags?: string[] | undefined
                ttl_sec?: number | undefined
                type?: 'master' | 'slave' | undefined
              }
            }
            output: {
              axfr_ips?: string[] | undefined
              description?: (string | null) | undefined
              domain?: string | undefined
              expire_sec?: number | undefined
              group?: (string | null) | undefined
              id?: number | undefined
              master_ips?: string[] | undefined
              refresh_sec?: number | undefined
              retry_sec?: number | undefined
              soa_email?: string | undefined
              status?: 'disabled' | 'active' | undefined
              tags?: string[] | undefined
              ttl_sec?: number | undefined
              type?: 'master' | 'slave' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                axfr_ips?: string[] | undefined
                description?: (string | null) | undefined
                domain?: string | undefined
                expire_sec?: number | undefined
                group?: (string | null) | undefined
                id?: number | undefined
                master_ips?: string[] | undefined
                refresh_sec?: number | undefined
                retry_sec?: number | undefined
                soa_email?: string | undefined
                status?: 'disabled' | 'active' | undefined
                tags?: string[] | undefined
                ttl_sec?: number | undefined
                type?: 'master' | 'slave' | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    axfr_ips?: string[] | undefined
                    description?: (string | null) | undefined
                    domain?: string | undefined
                    expire_sec?: number | undefined
                    group?: (string | null) | undefined
                    id?: number | undefined
                    master_ips?: string[] | undefined
                    refresh_sec?: number | undefined
                    retry_sec?: number | undefined
                    soa_email?: string | undefined
                    status?: 'disabled' | 'active' | undefined
                    tags?: string[] | undefined
                    ttl_sec?: number | undefined
                    type?: 'master' | 'slave' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/domains/import': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { domain: string; remote_nameserver: string }
            }
            output: {
              axfr_ips?: string[] | undefined
              description?: (string | null) | undefined
              domain?: string | undefined
              expire_sec?: number | undefined
              group?: (string | null) | undefined
              id?: number | undefined
              master_ips?: string[] | undefined
              refresh_sec?: number | undefined
              retry_sec?: number | undefined
              soa_email?: string | undefined
              status?: 'disabled' | 'active' | undefined
              tags?: string[] | undefined
              ttl_sec?: number | undefined
              type?: 'master' | 'slave' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { domain: string; remote_nameserver: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/domains/:domainId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } }
            output: {
              axfr_ips?: string[] | undefined
              description?: (string | null) | undefined
              domain?: string | undefined
              expire_sec?: number | undefined
              group?: (string | null) | undefined
              id?: number | undefined
              master_ips?: string[] | undefined
              refresh_sec?: number | undefined
              retry_sec?: number | undefined
              soa_email?: string | undefined
              status?: 'disabled' | 'active' | undefined
              tags?: string[] | undefined
              ttl_sec?: number | undefined
              type?: 'master' | 'slave' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } } & {
              json: {
                axfr_ips?: string[] | undefined
                description?: (string | null) | undefined
                domain?: string | undefined
                expire_sec?: number | undefined
                group?: (string | null) | undefined
                id?: number | undefined
                master_ips?: string[] | undefined
                refresh_sec?: number | undefined
                retry_sec?: number | undefined
                soa_email?: string | undefined
                status?: 'disabled' | 'active' | undefined
                tags?: string[] | undefined
                ttl_sec?: number | undefined
                type?: 'master' | 'slave' | undefined
              }
            }
            output: {
              axfr_ips?: string[] | undefined
              description?: (string | null) | undefined
              domain?: string | undefined
              expire_sec?: number | undefined
              group?: (string | null) | undefined
              id?: number | undefined
              master_ips?: string[] | undefined
              refresh_sec?: number | undefined
              retry_sec?: number | undefined
              soa_email?: string | undefined
              status?: 'disabled' | 'active' | undefined
              tags?: string[] | undefined
              ttl_sec?: number | undefined
              type?: 'master' | 'slave' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } } & {
              json: {
                axfr_ips?: string[] | undefined
                description?: (string | null) | undefined
                domain?: string | undefined
                expire_sec?: number | undefined
                group?: (string | null) | undefined
                id?: number | undefined
                master_ips?: string[] | undefined
                refresh_sec?: number | undefined
                retry_sec?: number | undefined
                soa_email?: string | undefined
                status?: 'disabled' | 'active' | undefined
                tags?: string[] | undefined
                ttl_sec?: number | undefined
                type?: 'master' | 'slave' | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/domains/:domainId/clone': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: string } } & {
              json: { domain: string }
            }
            output: {
              axfr_ips?: string[] | undefined
              description?: (string | null) | undefined
              domain?: string | undefined
              expire_sec?: number | undefined
              group?: (string | null) | undefined
              id?: number | undefined
              master_ips?: string[] | undefined
              refresh_sec?: number | undefined
              retry_sec?: number | undefined
              soa_email?: string | undefined
              status?: 'disabled' | 'active' | undefined
              tags?: string[] | undefined
              ttl_sec?: number | undefined
              type?: 'master' | 'slave' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: string } } & {
              json: { domain: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/domains/:domainId/records': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } } & {
              json: {
                created?: string | undefined
                id?: number | undefined
                name?: string | undefined
                port?: number | undefined
                priority?: number | undefined
                protocol?: (string | null) | undefined
                service?: (string | null) | undefined
                tag?: 'issue' | 'issuewild' | 'iodef' | undefined
                target?: string | undefined
                ttl_sec?: number | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'NS'
                  | 'MX'
                  | 'CNAME'
                  | 'TXT'
                  | 'SRV'
                  | 'PTR'
                  | 'CAA'
                  | undefined
                updated?: string | undefined
                weight?: number | undefined
              }
            }
            output: {
              created?: string | undefined
              id?: number | undefined
              name?: string | undefined
              port?: number | undefined
              priority?: number | undefined
              protocol?: (string | null) | undefined
              service?: (string | null) | undefined
              tag?: 'issue' | 'issuewild' | 'iodef' | undefined
              target?: string | undefined
              ttl_sec?: number | undefined
              type?:
                | 'A'
                | 'AAAA'
                | 'NS'
                | 'MX'
                | 'CNAME'
                | 'TXT'
                | 'SRV'
                | 'PTR'
                | 'CAA'
                | undefined
              updated?: string | undefined
              weight?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } } & {
              json: {
                created?: string | undefined
                id?: number | undefined
                name?: string | undefined
                port?: number | undefined
                priority?: number | undefined
                protocol?: (string | null) | undefined
                service?: (string | null) | undefined
                tag?: 'issue' | 'issuewild' | 'iodef' | undefined
                target?: string | undefined
                ttl_sec?: number | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'NS'
                  | 'MX'
                  | 'CNAME'
                  | 'TXT'
                  | 'SRV'
                  | 'PTR'
                  | 'CAA'
                  | undefined
                updated?: string | undefined
                weight?: number | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get: {
        input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number } } & {
          query: { page?: number | undefined; page_size?: number | undefined }
        }
        output: {
          data?:
            | {
                created?: string | undefined
                id?: number | undefined
                name?: string | undefined
                port?: number | undefined
                priority?: number | undefined
                protocol?: (string | null) | undefined
                service?: (string | null) | undefined
                tag?: 'issue' | 'issuewild' | 'iodef' | undefined
                target?: string | undefined
                ttl_sec?: number | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'NS'
                  | 'MX'
                  | 'CNAME'
                  | 'TXT'
                  | 'SRV'
                  | 'PTR'
                  | 'CAA'
                  | undefined
                updated?: string | undefined
                weight?: number | undefined
              }[]
            | undefined
          page?: number | undefined
          pages?: number | undefined
          results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:apiVersion/domains/:domainId/records/:recordId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number; recordId: number } }
            output: {
              created?: string | undefined
              id?: number | undefined
              name?: string | undefined
              port?: number | undefined
              priority?: number | undefined
              protocol?: (string | null) | undefined
              service?: (string | null) | undefined
              tag?: 'issue' | 'issuewild' | 'iodef' | undefined
              target?: string | undefined
              ttl_sec?: number | undefined
              type?:
                | 'A'
                | 'AAAA'
                | 'NS'
                | 'MX'
                | 'CNAME'
                | 'TXT'
                | 'SRV'
                | 'PTR'
                | 'CAA'
                | undefined
              updated?: string | undefined
              weight?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number; recordId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; domainId: number; recordId: number }
            } & {
              json: {
                name?: string | undefined
                port?: number | undefined
                priority?: number | undefined
                protocol?: (string | null) | undefined
                service?: (string | null) | undefined
                tag?: 'issue' | 'issuewild' | 'iodef' | undefined
                target?: string | undefined
                ttl_sec?: number | undefined
                weight?: number | undefined
              }
            }
            output: {
              created?: string | undefined
              id?: number | undefined
              name?: string | undefined
              port?: number | undefined
              priority?: number | undefined
              protocol?: (string | null) | undefined
              service?: (string | null) | undefined
              tag?: 'issue' | 'issuewild' | 'iodef' | undefined
              target?: string | undefined
              ttl_sec?: number | undefined
              type?:
                | 'A'
                | 'AAAA'
                | 'NS'
                | 'MX'
                | 'CNAME'
                | 'TXT'
                | 'SRV'
                | 'PTR'
                | 'CAA'
                | undefined
              updated?: string | undefined
              weight?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; domainId: number; recordId: number }
            } & {
              json: {
                name?: string | undefined
                port?: number | undefined
                priority?: number | undefined
                protocol?: (string | null) | undefined
                service?: (string | null) | undefined
                tag?: 'issue' | 'issuewild' | 'iodef' | undefined
                target?: string | undefined
                ttl_sec?: number | undefined
                weight?: number | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number; recordId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: number; recordId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/domains/:domainId/zone-file': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: string } }
            output: { zone_file?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; domainId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                cloud_init?: boolean | undefined
                description?: string | undefined
                disk_id: number
                label?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {
              capabilities: string[]
              created: string
              created_by: string
              deprecated: boolean
              description: string | null
              eol: string | null
              expiry: string | null
              id: string
              image_sharing:
                | {
                    shared_by: { [x: string]: unknown } | null
                    shared_with: { sharegroup_count: number; sharegroup_list_url: string }
                  }
                | {
                    shared_by: {
                      sharegroup_id: number
                      sharegroup_label: string
                      sharegroup_uuid: string
                      source_image_id: string | null
                    }
                    shared_with: { [x: string]: unknown } | null
                  }
              is_public: boolean
              is_shared: true | false | 'none'
              label: string
              regions: {
                region?: string | undefined
                status?:
                  | 'available'
                  | 'creating'
                  | 'pending'
                  | 'pending deletion'
                  | 'pending replication'
                  | 'replicating'
                  | undefined
              }[]
              size: number
              status: 'creating' | 'pending_upload' | 'available'
              tags: string[]
              total_size: number
              type: 'manual' | 'automatic' | 'shared'
              updated: string
              vendor: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                cloud_init?: boolean | undefined
                description?: string | undefined
                disk_id: number
                label?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    capabilities: string[]
                    created: string
                    created_by: string
                    deprecated: boolean
                    description: string | null
                    eol: string | null
                    expiry: string | null
                    id: string
                    image_sharing:
                      | {
                          shared_by: { [x: string]: unknown } | null
                          shared_with: { sharegroup_count: number; sharegroup_list_url: string }
                        }
                      | {
                          shared_by: {
                            sharegroup_id: number
                            sharegroup_label: string
                            sharegroup_uuid: string
                            source_image_id: string | null
                          }
                          shared_with: { [x: string]: unknown } | null
                        }
                    is_public: boolean
                    is_shared: true | false | 'none'
                    label: string
                    regions: {
                      region?: string | undefined
                      status?:
                        | 'available'
                        | 'creating'
                        | 'pending'
                        | 'pending deletion'
                        | 'pending replication'
                        | 'replicating'
                        | undefined
                    }[]
                    size: number
                    status: 'creating' | 'pending_upload' | 'available'
                    tags: string[]
                    total_size: number
                    type: 'manual' | 'automatic' | 'shared'
                    updated: string
                    vendor: string | null
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                description?: string | undefined
                images?:
                  | { description?: string | undefined; id: string; label?: string | undefined }[]
                  | undefined
                label: string
              }
            }
            output: {
              created: string
              description: string | null
              expiry: string | null
              id: number
              images_count: number
              is_suspended: boolean
              label: string
              members_count: number
              updated: string | null
              uuid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                description?: string | undefined
                images?:
                  | { description?: string | undefined; id: string; label?: string | undefined }[]
                  | undefined
                label: string
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data: {
                created: string
                description: string | null
                expiry: string | null
                id: number
                images_count: number
                is_suspended: boolean
                label: string
                members_count: number
                updated: string | null
                uuid: string
              }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/tokens': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { label?: string | undefined; valid_for_sharegroup_uuid: string }
            }
            output: {
              created: string
              expiry: string | null
              label: string | null
              sharegroup_label: string
              sharegroup_uuid: string
              status: 'pending' | 'active' | 'revoked' | 'expired'
              token: string
              token_uuid: string
              updated: string | null
              valid_for_sharegroup_uuid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { label?: string | undefined; valid_for_sharegroup_uuid: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data: {
                created: string
                expiry: string | null
                label: string
                sharegroup_label: string
                sharegroup_uuid: string
                status: 'pending' | 'active' | 'revoked' | 'expired'
                token_uuid: string
                updated: string | null
                valid_for_sharegroup_uuid: string
              }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/tokens/:tokenUuid': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } }
            output: {
              created: string
              expiry: string | null
              label: string
              sharegroup_label: string
              sharegroup_uuid: string
              status: 'pending' | 'active' | 'revoked' | 'expired'
              token_uuid: string
              updated: string | null
              valid_for_sharegroup_uuid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } } & {
              json: { label: string }
            }
            output: {
              created: string
              expiry: string | null
              label: string
              sharegroup_label: string
              sharegroup_uuid: string
              status: 'pending' | 'active' | 'revoked' | 'expired'
              token_uuid: string
              updated: string | null
              valid_for_sharegroup_uuid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } } & {
              json: { label: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/tokens/:tokenUuid/sharegroup': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } }
            output: {
              created: string
              description: string | null
              id: number
              is_suspended: boolean
              label: string
              updated: string | null
              uuid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/tokens/:tokenUuid/sharegroup/images': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } }
            output: {
              data: {
                capabilities: string[]
                created: string
                created_by: string | null
                deprecated: boolean
                description: string
                eol: string | null
                expiry: string | null
                id: string
                image_sharing: {
                  shared_by?:
                    | {
                        sharegroup_id: number
                        sharegroup_label: string
                        sharegroup_uuid: string
                        source_image_id: string
                      }
                    | undefined
                  shared_with?: ({ [x: string]: unknown } | null) | undefined
                }
                is_public: boolean
                is_shared: true | false | 'none'
                label: string
                regions: {
                  region?: string | undefined
                  status?:
                    | 'available'
                    | 'creating'
                    | 'pending'
                    | 'pending deletion'
                    | 'pending replication'
                    | 'replicating'
                    | undefined
                }[]
                size: number
                status: 'creating' | 'pending_upload' | 'available'
                tags: string[]
                total_size: number
                type: 'manual' | 'automatic' | 'shared'
                updated: string | null
                vendor: string | null
              }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenUuid: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/:sharegroupId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } }
            output: {
              created: string
              description: string | null
              expiry: string | null
              id: number
              images_count: number
              is_suspended: boolean
              label: string
              members_count: number
              updated: string | null
              uuid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } } & {
              json: { description?: string | undefined; label?: string | undefined }
            }
            output: {
              created: string
              description: string | null
              expiry: string | null
              id: number
              images_count: number
              is_suspended: boolean
              label: string
              members_count: number
              updated: string | null
              uuid: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } } & {
              json: { description?: string | undefined; label?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/:sharegroupId/images': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } } & {
              json: {
                images: {
                  description?: string | undefined
                  id: string
                  label?: string | undefined
                }[]
              }
            }
            output: {
              capabilities: string[]
              created: string
              created_by: string | null
              deprecated: boolean
              description: string
              eol: string | null
              expiry: string | null
              id: string
              image_sharing: {
                shared_by?:
                  | {
                      sharegroup_id: number
                      sharegroup_label: string
                      sharegroup_uuid: string
                      source_image_id: string
                    }
                  | undefined
                shared_with?: ({ [x: string]: unknown } | null) | undefined
              }
              is_public: boolean
              is_shared: true | false | 'none'
              label: string
              regions: {
                region?: string | undefined
                status?:
                  | 'available'
                  | 'creating'
                  | 'pending'
                  | 'pending deletion'
                  | 'pending replication'
                  | 'replicating'
                  | undefined
              }[]
              size: number
              status: 'creating' | 'pending_upload' | 'available'
              tags: string[]
              total_size: number
              type: 'manual' | 'automatic' | 'shared'
              updated: string | null
              vendor: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } } & {
              json: {
                images: {
                  description?: string | undefined
                  id: string
                  label?: string | undefined
                }[]
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } }
            output: {
              data: {
                capabilities: string[]
                created: string
                created_by: string | null
                deprecated: boolean
                description: string
                eol: string | null
                expiry: string | null
                id: string
                image_sharing: {
                  shared_by?:
                    | {
                        sharegroup_id: number
                        sharegroup_label: string
                        sharegroup_uuid: string
                        source_image_id: string
                      }
                    | undefined
                  shared_with?: ({ [x: string]: unknown } | null) | undefined
                }
                is_public: boolean
                is_shared: true | false | 'none'
                label: string
                regions: {
                  region?: string | undefined
                  status?:
                    | 'available'
                    | 'creating'
                    | 'pending'
                    | 'pending deletion'
                    | 'pending replication'
                    | 'replicating'
                    | undefined
                }[]
                size: number
                status: 'creating' | 'pending_upload' | 'available'
                tags: string[]
                total_size: number
                type: 'manual' | 'automatic' | 'shared'
                updated: string | null
                vendor: string | null
              }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/:sharegroupId/images/:imageId': {
      $put:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; imageId: string }
            } & { json: { description?: string | undefined; label?: string | undefined } }
            output: {
              capabilities: string[]
              created: string
              created_by: string | null
              deprecated: boolean
              description: string
              eol: string | null
              expiry: string | null
              id: string
              image_sharing: {
                shared_by?:
                  | {
                      sharegroup_id: number
                      sharegroup_label: string
                      sharegroup_uuid: string
                      source_image_id: string
                    }
                  | undefined
                shared_with?: ({ [x: string]: unknown } | null) | undefined
              }
              is_public: boolean
              is_shared: true | false | 'none'
              label: string
              regions: {
                region?: string | undefined
                status?:
                  | 'available'
                  | 'creating'
                  | 'pending'
                  | 'pending deletion'
                  | 'pending replication'
                  | 'replicating'
                  | undefined
              }[]
              size: number
              status: 'creating' | 'pending_upload' | 'available'
              tags: string[]
              total_size: number
              type: 'manual' | 'automatic' | 'shared'
              updated: string | null
              vendor: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; imageId: string }
            } & { json: { description?: string | undefined; label?: string | undefined } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; imageId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; imageId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/:sharegroupId/members': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } } & {
              json: { label: string; token: string }
            }
            output: {
              created: string
              expiry: string | null
              label: string
              status: 'active' | 'revoked'
              token_uuid: string
              updated: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } } & {
              json: { label: string; token: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } }
            output: {
              data: {
                created: string
                expiry: string | null
                label: string
                status: 'active' | 'revoked'
                token_uuid: string
                updated: string | null
              }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/sharegroups/:sharegroupId/members/:tokenUuid': {
      $get:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; tokenUuid: string }
            }
            output: {
              created: string
              expiry: string | null
              label: string
              status: 'active' | 'revoked'
              token_uuid: string
              updated: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; tokenUuid: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; tokenUuid: string }
            } & { json: { label: string } }
            output: {
              created: string
              expiry: string | null
              label: string
              status: 'active' | 'revoked'
              token_uuid: string
              updated: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; tokenUuid: string }
            } & { json: { label: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; tokenUuid: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; sharegroupId: number; tokenUuid: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/upload': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                cloud_init?: boolean | undefined
                description?: string | undefined
                label: string
                region: string
                tags?: string[] | undefined
              }
            }
            output: {
              image?:
                | {
                    capabilities: string[]
                    created: string
                    created_by: string
                    deprecated: boolean
                    description: string | null
                    eol: string | null
                    expiry: string | null
                    id: string
                    image_sharing:
                      | {
                          shared_by: { [x: string]: unknown } | null
                          shared_with: { sharegroup_count: number; sharegroup_list_url: string }
                        }
                      | {
                          shared_by: {
                            sharegroup_id: number
                            sharegroup_label: string
                            sharegroup_uuid: string
                            source_image_id: string | null
                          }
                          shared_with: { [x: string]: unknown } | null
                        }
                    is_public: boolean
                    is_shared: true | false | 'none'
                    label: string
                    regions: {
                      region?: string | undefined
                      status?:
                        | 'available'
                        | 'creating'
                        | 'pending'
                        | 'pending deletion'
                        | 'pending replication'
                        | 'replicating'
                        | undefined
                    }[]
                    size: number
                    status: 'creating' | 'pending_upload' | 'available'
                    tags: string[]
                    total_size: number
                    type: 'manual' | 'automatic' | 'shared'
                    updated: string
                    vendor: string | null
                  }
                | undefined
              upload_to?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                cloud_init?: boolean | undefined
                description?: string | undefined
                label: string
                region: string
                tags?: string[] | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/:imageId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } }
            output: {
              capabilities: string[]
              created: string
              created_by: string
              deprecated: boolean
              description: string | null
              eol: string | null
              expiry: string | null
              id: string
              image_sharing:
                | {
                    shared_by: { [x: string]: unknown } | null
                    shared_with: { sharegroup_count: number; sharegroup_list_url: string }
                  }
                | {
                    shared_by: {
                      sharegroup_id: number
                      sharegroup_label: string
                      sharegroup_uuid: string
                      source_image_id: string | null
                    }
                    shared_with: { [x: string]: unknown } | null
                  }
              is_public: boolean
              is_shared: true | false | 'none'
              label: string
              regions: {
                region?: string | undefined
                status?:
                  | 'available'
                  | 'creating'
                  | 'pending'
                  | 'pending deletion'
                  | 'pending replication'
                  | 'replicating'
                  | undefined
              }[]
              size: number
              status: 'creating' | 'pending_upload' | 'available'
              tags: string[]
              total_size: number
              type: 'manual' | 'automatic' | 'shared'
              updated: string
              vendor: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } } & {
              json: {
                capabilities?: string[] | undefined
                created?: string | undefined
                created_by?: string | undefined
                deprecated?: boolean | undefined
                description?: (string | null) | undefined
                eol?: (string | null) | undefined
                expiry?: (string | null) | undefined
                id?: string | undefined
                is_public?: boolean | undefined
                is_shared?: true | false | 'none' | undefined
                label?: string | undefined
                regions?:
                  | {
                      region?: string | undefined
                      status?:
                        | 'available'
                        | 'creating'
                        | 'pending'
                        | 'pending deletion'
                        | 'pending replication'
                        | 'replicating'
                        | undefined
                    }[]
                  | undefined
                size?: number | undefined
                status?: 'creating' | 'pending_upload' | 'available' | undefined
                tags?: string[] | undefined
                total_size?: number | undefined
                type?: 'manual' | 'automatic' | undefined
                updated?: string | undefined
                vendor?: (string | null) | undefined
              }
            }
            output: {
              capabilities: string[]
              created: string
              created_by: string
              deprecated: boolean
              description: string | null
              eol: string | null
              expiry: string | null
              id: string
              image_sharing:
                | {
                    shared_by: { [x: string]: unknown } | null
                    shared_with: { sharegroup_count: number; sharegroup_list_url: string }
                  }
                | {
                    shared_by: {
                      sharegroup_id: number
                      sharegroup_label: string
                      sharegroup_uuid: string
                      source_image_id: string | null
                    }
                    shared_with: { [x: string]: unknown } | null
                  }
              is_public: boolean
              is_shared: true | false | 'none'
              label: string
              regions: {
                region?: string | undefined
                status?:
                  | 'available'
                  | 'creating'
                  | 'pending'
                  | 'pending deletion'
                  | 'pending replication'
                  | 'replicating'
                  | undefined
              }[]
              size: number
              status: 'creating' | 'pending_upload' | 'available'
              tags: string[]
              total_size: number
              type: 'manual' | 'automatic' | 'shared'
              updated: string
              vendor: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } } & {
              json: {
                capabilities?: string[] | undefined
                created?: string | undefined
                created_by?: string | undefined
                deprecated?: boolean | undefined
                description?: (string | null) | undefined
                eol?: (string | null) | undefined
                expiry?: (string | null) | undefined
                id?: string | undefined
                is_public?: boolean | undefined
                is_shared?: true | false | 'none' | undefined
                label?: string | undefined
                regions?:
                  | {
                      region?: string | undefined
                      status?:
                        | 'available'
                        | 'creating'
                        | 'pending'
                        | 'pending deletion'
                        | 'pending replication'
                        | 'replicating'
                        | undefined
                    }[]
                  | undefined
                size?: number | undefined
                status?: 'creating' | 'pending_upload' | 'available' | undefined
                tags?: string[] | undefined
                total_size?: number | undefined
                type?: 'manual' | 'automatic' | undefined
                updated?: string | undefined
                vendor?: (string | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/:imageId/regions': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } } & {
              json: { regions?: string[] | undefined }
            }
            output: {
              capabilities: string[]
              created: string
              created_by: string
              deprecated: boolean
              description: string | null
              eol: string | null
              expiry: string | null
              id: string
              image_sharing:
                | {
                    shared_by: { [x: string]: unknown } | null
                    shared_with: { sharegroup_count: number; sharegroup_list_url: string }
                  }
                | {
                    shared_by: {
                      sharegroup_id: number
                      sharegroup_label: string
                      sharegroup_uuid: string
                      source_image_id: string | null
                    }
                    shared_with: { [x: string]: unknown } | null
                  }
              is_public: boolean
              is_shared: true | false | 'none'
              label: string
              regions: {
                region?: string | undefined
                status?:
                  | 'available'
                  | 'creating'
                  | 'pending'
                  | 'pending deletion'
                  | 'pending replication'
                  | 'replicating'
                  | undefined
              }[]
              size: number
              status: 'creating' | 'pending_upload' | 'available'
              tags: string[]
              total_size: number
              type: 'manual' | 'automatic' | 'shared'
              updated: string
              vendor: string | null
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } } & {
              json: { regions?: string[] | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/images/:imageId/sharegroups': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } }
            output: {
              data: {
                created: string
                description: string | null
                expiry: string | null
                id: number
                images_count: number
                is_suspended: boolean
                label: string
                members_count: number
                updated: string | null
                uuid: string
              }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; imageId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                authorized_keys?: string[] | undefined
                authorized_users?: string[] | undefined
                booted?: boolean | undefined
                disk_encryption?: 'enabled' | 'disabled' | undefined
                image?: (string | null) | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                metadata?: { user_data?: string | undefined } | undefined
                root_pass?: string | undefined
                stackscript_data?: { [x: string]: unknown } | undefined
                stackscript_id?: number | undefined
                backup_id?: number | undefined
                backups_enabled?: boolean | undefined
                firewall_id?: number | undefined
                group?: string | undefined
                interface_generation?: 'legacy_config' | 'linode' | undefined
                interfaces?:
                  | (
                      | {
                          default_route?:
                            | {
                                ipv4?: (boolean | null) | undefined
                                ipv6?: (boolean | null) | undefined
                              }
                            | undefined
                          firewall_id?: (number | null) | undefined
                          public?:
                            | ({
                                ipv4?:
                                  | {
                                      addresses?:
                                        | {
                                            address?: string | 'auto' | string | undefined
                                            primary?: boolean | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                                ipv6?: { ranges?: { range: string }[] | undefined } | undefined
                              } | null)
                            | undefined
                        }
                      | {
                          vlan?:
                            | ({
                                ipam_address?: string | undefined
                                vlan_label?: string | undefined
                              } | null)
                            | undefined
                        }
                      | {
                          default_route?: { ipv4?: (boolean | null) | undefined } | undefined
                          firewall_id?: (number | null) | undefined
                          vpc?:
                            | ({
                                ipv4?:
                                  | {
                                      addresses?:
                                        | {
                                            address?: string | 'auto' | undefined
                                            nat_1_1_address?: string | 'auto' | undefined
                                            primary?: (boolean | null) | undefined
                                          }[]
                                        | undefined
                                      ranges?: { range: string }[] | undefined
                                    }
                                  | undefined
                                subnet_id: number
                              } | null)
                            | undefined
                        }
                      | {
                          active?: boolean | undefined
                          id?: number | undefined
                          ip_ranges?: (string[] | null) | undefined
                          ipam_address?: (string | null) | undefined
                          ipv4?:
                            | {
                                nat_1_1?: string | 'any' | undefined
                                vpc?: (string | null) | undefined
                              }
                            | undefined
                          label?: (string | null) | undefined
                          primary?: boolean | undefined
                          purpose: 'public' | 'vlan' | 'vpc'
                          subnet_id?: (number | null) | undefined
                          vpc_id?: (number | null) | undefined
                        }
                    )[]
                  | undefined
                label?: string | undefined
                network_helper?: (boolean | null) | undefined
                placement_group?: { id?: number | undefined } | undefined
                private_ip?: boolean | undefined
                region?: string | undefined
                swap_size?: number | undefined
                tags?: string[] | undefined
                type?: string | undefined
              }
            }
            output: {
              alerts?:
                | {
                    cpu?: number | undefined
                    io?: number | undefined
                    network_in?: number | undefined
                    network_out?: number | undefined
                    transfer_quota?: number | undefined
                  }
                | undefined
              backups?:
                | {
                    available?: boolean | undefined
                    enabled?: boolean | undefined
                    last_successful?: string | undefined
                    schedule?:
                      | {
                          day?:
                            | 'Scheduling'
                            | 'Sunday'
                            | 'Monday'
                            | 'Tuesday'
                            | 'Wednesday'
                            | 'Thursday'
                            | 'Friday'
                            | 'Saturday'
                            | undefined
                          window?:
                            | 'Scheduling'
                            | 'W0'
                            | 'W2'
                            | 'W4'
                            | 'W6'
                            | 'W8'
                            | 'W10'
                            | 'W12'
                            | 'W14'
                            | 'W16'
                            | 'W18'
                            | 'W20'
                            | 'W22'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              capabilities?: string[] | undefined
              created?: string | undefined
              disk_encryption?: (string | null) | undefined
              group?: string | undefined
              has_user_data?: boolean | undefined
              host_uuid?: string | undefined
              hypervisor?: 'kvm' | undefined
              id?: number | undefined
              image?: {} | undefined
              interface_generation?: 'legacy_config' | 'linode' | undefined
              ipv4?: string[] | undefined
              ipv6?: (string | null) | undefined
              label?: string | undefined
              lke_cluster_id?: (number | null) | undefined
              maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
              placement_group?:
                | ({
                    id?: number | undefined
                    label?: string | undefined
                    placement_group_policy?: 'strict' | 'flexible' | undefined
                    placement_group_type?: 'anti_affinity:local' | undefined
                  } | null)
                | undefined
              region?: string | undefined
              specs?:
                | {
                    disk?: number | undefined
                    gpus?: number | undefined
                    memory?: number | undefined
                    transfer?: number | undefined
                    vcpus?: number | undefined
                  }
                | undefined
              status?:
                | 'running'
                | 'offline'
                | 'booting'
                | 'busy'
                | 'rebooting'
                | 'shutting_down'
                | 'provisioning'
                | 'deleting'
                | 'migrating'
                | 'rebuilding'
                | 'cloning'
                | 'restoring'
                | 'stopped'
                | 'billing_suspension'
                | undefined
              tags?: string[] | undefined
              type?: string | undefined
              updated?: string | undefined
              watchdog_enabled?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                authorized_keys?: string[] | undefined
                authorized_users?: string[] | undefined
                booted?: boolean | undefined
                disk_encryption?: 'enabled' | 'disabled' | undefined
                image?: (string | null) | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                metadata?: { user_data?: string | undefined } | undefined
                root_pass?: string | undefined
                stackscript_data?: { [x: string]: unknown } | undefined
                stackscript_id?: number | undefined
                backup_id?: number | undefined
                backups_enabled?: boolean | undefined
                firewall_id?: number | undefined
                group?: string | undefined
                interface_generation?: 'legacy_config' | 'linode' | undefined
                interfaces?:
                  | (
                      | {
                          default_route?:
                            | {
                                ipv4?: (boolean | null) | undefined
                                ipv6?: (boolean | null) | undefined
                              }
                            | undefined
                          firewall_id?: (number | null) | undefined
                          public?:
                            | ({
                                ipv4?:
                                  | {
                                      addresses?:
                                        | {
                                            address?: string | 'auto' | string | undefined
                                            primary?: boolean | undefined
                                          }[]
                                        | undefined
                                    }
                                  | undefined
                                ipv6?: { ranges?: { range: string }[] | undefined } | undefined
                              } | null)
                            | undefined
                        }
                      | {
                          vlan?:
                            | ({
                                ipam_address?: string | undefined
                                vlan_label?: string | undefined
                              } | null)
                            | undefined
                        }
                      | {
                          default_route?: { ipv4?: (boolean | null) | undefined } | undefined
                          firewall_id?: (number | null) | undefined
                          vpc?:
                            | ({
                                ipv4?:
                                  | {
                                      addresses?:
                                        | {
                                            address?: string | 'auto' | undefined
                                            nat_1_1_address?: string | 'auto' | undefined
                                            primary?: (boolean | null) | undefined
                                          }[]
                                        | undefined
                                      ranges?: { range: string }[] | undefined
                                    }
                                  | undefined
                                subnet_id: number
                              } | null)
                            | undefined
                        }
                      | {
                          active?: boolean | undefined
                          id?: number | undefined
                          ip_ranges?: (string[] | null) | undefined
                          ipam_address?: (string | null) | undefined
                          ipv4?:
                            | {
                                nat_1_1?: string | 'any' | undefined
                                vpc?: (string | null) | undefined
                              }
                            | undefined
                          label?: (string | null) | undefined
                          primary?: boolean | undefined
                          purpose: 'public' | 'vlan' | 'vpc'
                          subnet_id?: (number | null) | undefined
                          vpc_id?: (number | null) | undefined
                        }
                    )[]
                  | undefined
                label?: string | undefined
                network_helper?: (boolean | null) | undefined
                placement_group?: { id?: number | undefined } | undefined
                private_ip?: boolean | undefined
                region?: string | undefined
                swap_size?: number | undefined
                tags?: string[] | undefined
                type?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & {
              header: {
                'X-Filter'?:
                  | { [x: string]: unknown }
                  | {
                      '+and'?: { [x: string]: unknown }[] | undefined
                      '+contains'?: string | undefined
                      '+gt'?: number | undefined
                      '+gte'?: number | undefined
                      '+lt'?: number | undefined
                      '+lte'?: number | undefined
                      '+neq'?: string | undefined
                      '+or'?: { [x: string]: unknown }[] | undefined
                      '+order'?: 'asc' | 'desc' | undefined
                      '+order_by'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              data?:
                | {
                    alerts?:
                      | {
                          cpu?: number | undefined
                          io?: number | undefined
                          network_in?: number | undefined
                          network_out?: number | undefined
                          transfer_quota?: number | undefined
                        }
                      | undefined
                    backups?:
                      | {
                          available?: boolean | undefined
                          enabled?: boolean | undefined
                          last_successful?: string | undefined
                          schedule?:
                            | {
                                day?:
                                  | 'Scheduling'
                                  | 'Sunday'
                                  | 'Monday'
                                  | 'Tuesday'
                                  | 'Wednesday'
                                  | 'Thursday'
                                  | 'Friday'
                                  | 'Saturday'
                                  | undefined
                                window?:
                                  | 'Scheduling'
                                  | 'W0'
                                  | 'W2'
                                  | 'W4'
                                  | 'W6'
                                  | 'W8'
                                  | 'W10'
                                  | 'W12'
                                  | 'W14'
                                  | 'W16'
                                  | 'W18'
                                  | 'W20'
                                  | 'W22'
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    capabilities?: string[] | undefined
                    created?: string | undefined
                    disk_encryption?: 'enabled' | 'disabled' | undefined
                    group?: string | undefined
                    has_user_data?: boolean | undefined
                    host_uuid?: string | undefined
                    hypervisor?: 'kvm' | undefined
                    id?: number | undefined
                    image?: {} | undefined
                    interface_generation?: 'legacy_config' | 'linode' | undefined
                    ipv4?: string[] | undefined
                    ipv6?: (string | null) | undefined
                    label?: string | undefined
                    lke_cluster_id?: (number | null) | undefined
                    maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                    placement_group?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          migrating_to?: (number | null) | undefined
                          placement_group_policy?: 'strict' | 'flexible' | undefined
                          placement_group_type?: 'anti_affinity:local' | undefined
                        } | null)
                      | undefined
                    region?: string | undefined
                    specs?:
                      | {
                          disk?: number | undefined
                          gpus?: number | undefined
                          memory?: number | undefined
                          transfer?: number | undefined
                          vcpus?: number | undefined
                        }
                      | undefined
                    status?:
                      | 'running'
                      | 'offline'
                      | 'booting'
                      | 'busy'
                      | 'rebooting'
                      | 'shutting_down'
                      | 'provisioning'
                      | 'deleting'
                      | 'migrating'
                      | 'rebuilding'
                      | 'cloning'
                      | 'restoring'
                      | 'stopped'
                      | 'billing_suspension'
                      | undefined
                    tags?: string[] | undefined
                    type?: string | undefined
                    updated?: string | undefined
                    watchdog_enabled?: boolean | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & {
              header: {
                'X-Filter'?:
                  | { [x: string]: unknown }
                  | {
                      '+and'?: { [x: string]: unknown }[] | undefined
                      '+contains'?: string | undefined
                      '+gt'?: number | undefined
                      '+gte'?: number | undefined
                      '+lt'?: number | undefined
                      '+lte'?: number | undefined
                      '+neq'?: string | undefined
                      '+or'?: { [x: string]: unknown }[] | undefined
                      '+order'?: 'asc' | 'desc' | undefined
                      '+order_by'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              alerts?:
                | {
                    cpu?: number | undefined
                    io?: number | undefined
                    network_in?: number | undefined
                    network_out?: number | undefined
                    transfer_quota?: number | undefined
                  }
                | undefined
              backups?:
                | {
                    available?: boolean | undefined
                    enabled?: boolean | undefined
                    last_successful?: string | undefined
                    schedule?:
                      | {
                          day?:
                            | 'Scheduling'
                            | 'Sunday'
                            | 'Monday'
                            | 'Tuesday'
                            | 'Wednesday'
                            | 'Thursday'
                            | 'Friday'
                            | 'Saturday'
                            | undefined
                          window?:
                            | 'Scheduling'
                            | 'W0'
                            | 'W2'
                            | 'W4'
                            | 'W6'
                            | 'W8'
                            | 'W10'
                            | 'W12'
                            | 'W14'
                            | 'W16'
                            | 'W18'
                            | 'W20'
                            | 'W22'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              capabilities?: string[] | undefined
              created?: string | undefined
              disk_encryption?: 'enabled' | 'disabled' | undefined
              group?: string | undefined
              has_user_data?: boolean | undefined
              host_uuid?: string | undefined
              hypervisor?: 'kvm' | undefined
              id?: number | undefined
              image?: {} | undefined
              interface_generation?: 'legacy_config' | 'linode' | undefined
              ipv4?: string[] | undefined
              ipv6?: (string | null) | undefined
              label?: string | undefined
              lke_cluster_id?: (number | null) | undefined
              maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
              placement_group?:
                | ({
                    id?: number | undefined
                    label?: string | undefined
                    migrating_to?: (number | null) | undefined
                    placement_group_policy?: 'strict' | 'flexible' | undefined
                    placement_group_type?: 'anti_affinity:local' | undefined
                  } | null)
                | undefined
              region?: string | undefined
              specs?:
                | {
                    disk?: number | undefined
                    gpus?: number | undefined
                    memory?: number | undefined
                    transfer?: number | undefined
                    vcpus?: number | undefined
                  }
                | undefined
              status?:
                | 'running'
                | 'offline'
                | 'booting'
                | 'busy'
                | 'rebooting'
                | 'shutting_down'
                | 'provisioning'
                | 'deleting'
                | 'migrating'
                | 'rebuilding'
                | 'cloning'
                | 'restoring'
                | 'stopped'
                | 'billing_suspension'
                | undefined
              tags?: string[] | undefined
              type?: string | undefined
              updated?: string | undefined
              watchdog_enabled?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                alerts?:
                  | {
                      cpu?: number | undefined
                      io?: number | undefined
                      network_in?: number | undefined
                      network_out?: number | undefined
                      transfer_quota?: number | undefined
                    }
                  | undefined
                backups?:
                  | {
                      available?: boolean | undefined
                      enabled?: boolean | undefined
                      last_successful?: string | undefined
                      schedule?:
                        | {
                            day?:
                              | 'Scheduling'
                              | 'Sunday'
                              | 'Monday'
                              | 'Tuesday'
                              | 'Wednesday'
                              | 'Thursday'
                              | 'Friday'
                              | 'Saturday'
                              | undefined
                            window?:
                              | 'Scheduling'
                              | 'W0'
                              | 'W2'
                              | 'W4'
                              | 'W6'
                              | 'W8'
                              | 'W10'
                              | 'W12'
                              | 'W14'
                              | 'W16'
                              | 'W18'
                              | 'W20'
                              | 'W22'
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                capabilities?: string[] | undefined
                created?: string | undefined
                disk_encryption?: (string | null) | undefined
                group?: string | undefined
                has_user_data?: boolean | undefined
                host_uuid?: string | undefined
                hypervisor?: 'kvm' | undefined
                id?: number | undefined
                image?: {} | undefined
                interface_generation?: 'legacy_config' | 'linode' | undefined
                ipv4?: string[] | undefined
                ipv6?: (string | null) | undefined
                label?: string | undefined
                lke_cluster_id?: (number | null) | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                placement_group?:
                  | ({
                      id?: number | undefined
                      label?: string | undefined
                      placement_group_policy?: 'strict' | 'flexible' | undefined
                      placement_group_type?: 'anti_affinity:local' | undefined
                    } | null)
                  | undefined
                region?: string | undefined
                specs?:
                  | {
                      disk?: number | undefined
                      gpus?: number | undefined
                      memory?: number | undefined
                      transfer?: number | undefined
                      vcpus?: number | undefined
                    }
                  | undefined
                status?:
                  | 'running'
                  | 'offline'
                  | 'booting'
                  | 'busy'
                  | 'rebooting'
                  | 'shutting_down'
                  | 'provisioning'
                  | 'deleting'
                  | 'migrating'
                  | 'rebuilding'
                  | 'cloning'
                  | 'restoring'
                  | 'stopped'
                  | 'billing_suspension'
                  | undefined
                tags?: string[] | undefined
                type?: string | undefined
                updated?: string | undefined
                watchdog_enabled?: boolean | undefined
              }
            }
            output: {
              alerts?:
                | {
                    cpu?: number | undefined
                    io?: number | undefined
                    network_in?: number | undefined
                    network_out?: number | undefined
                    transfer_quota?: number | undefined
                  }
                | undefined
              backups?:
                | {
                    available?: boolean | undefined
                    enabled?: boolean | undefined
                    last_successful?: string | undefined
                    schedule?:
                      | {
                          day?:
                            | 'Scheduling'
                            | 'Sunday'
                            | 'Monday'
                            | 'Tuesday'
                            | 'Wednesday'
                            | 'Thursday'
                            | 'Friday'
                            | 'Saturday'
                            | undefined
                          window?:
                            | 'Scheduling'
                            | 'W0'
                            | 'W2'
                            | 'W4'
                            | 'W6'
                            | 'W8'
                            | 'W10'
                            | 'W12'
                            | 'W14'
                            | 'W16'
                            | 'W18'
                            | 'W20'
                            | 'W22'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              capabilities?: string[] | undefined
              created?: string | undefined
              disk_encryption?: (string | null) | undefined
              group?: string | undefined
              has_user_data?: boolean | undefined
              host_uuid?: string | undefined
              hypervisor?: 'kvm' | undefined
              id?: number | undefined
              image?: {} | undefined
              interface_generation?: 'legacy_config' | 'linode' | undefined
              ipv4?: string[] | undefined
              ipv6?: (string | null) | undefined
              label?: string | undefined
              lke_cluster_id?: (number | null) | undefined
              maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
              placement_group?:
                | ({
                    id?: number | undefined
                    label?: string | undefined
                    placement_group_policy?: 'strict' | 'flexible' | undefined
                    placement_group_type?: 'anti_affinity:local' | undefined
                  } | null)
                | undefined
              region?: string | undefined
              specs?:
                | {
                    disk?: number | undefined
                    gpus?: number | undefined
                    memory?: number | undefined
                    transfer?: number | undefined
                    vcpus?: number | undefined
                  }
                | undefined
              status?:
                | 'running'
                | 'offline'
                | 'booting'
                | 'busy'
                | 'rebooting'
                | 'shutting_down'
                | 'provisioning'
                | 'deleting'
                | 'migrating'
                | 'rebuilding'
                | 'cloning'
                | 'restoring'
                | 'stopped'
                | 'billing_suspension'
                | undefined
              tags?: string[] | undefined
              type?: string | undefined
              updated?: string | undefined
              watchdog_enabled?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                alerts?:
                  | {
                      cpu?: number | undefined
                      io?: number | undefined
                      network_in?: number | undefined
                      network_out?: number | undefined
                      transfer_quota?: number | undefined
                    }
                  | undefined
                backups?:
                  | {
                      available?: boolean | undefined
                      enabled?: boolean | undefined
                      last_successful?: string | undefined
                      schedule?:
                        | {
                            day?:
                              | 'Scheduling'
                              | 'Sunday'
                              | 'Monday'
                              | 'Tuesday'
                              | 'Wednesday'
                              | 'Thursday'
                              | 'Friday'
                              | 'Saturday'
                              | undefined
                            window?:
                              | 'Scheduling'
                              | 'W0'
                              | 'W2'
                              | 'W4'
                              | 'W6'
                              | 'W8'
                              | 'W10'
                              | 'W12'
                              | 'W14'
                              | 'W16'
                              | 'W18'
                              | 'W20'
                              | 'W22'
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                capabilities?: string[] | undefined
                created?: string | undefined
                disk_encryption?: (string | null) | undefined
                group?: string | undefined
                has_user_data?: boolean | undefined
                host_uuid?: string | undefined
                hypervisor?: 'kvm' | undefined
                id?: number | undefined
                image?: {} | undefined
                interface_generation?: 'legacy_config' | 'linode' | undefined
                ipv4?: string[] | undefined
                ipv6?: (string | null) | undefined
                label?: string | undefined
                lke_cluster_id?: (number | null) | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                placement_group?:
                  | ({
                      id?: number | undefined
                      label?: string | undefined
                      placement_group_policy?: 'strict' | 'flexible' | undefined
                      placement_group_type?: 'anti_affinity:local' | undefined
                    } | null)
                  | undefined
                region?: string | undefined
                specs?:
                  | {
                      disk?: number | undefined
                      gpus?: number | undefined
                      memory?: number | undefined
                      transfer?: number | undefined
                      vcpus?: number | undefined
                    }
                  | undefined
                status?:
                  | 'running'
                  | 'offline'
                  | 'booting'
                  | 'busy'
                  | 'rebooting'
                  | 'shutting_down'
                  | 'provisioning'
                  | 'deleting'
                  | 'migrating'
                  | 'rebuilding'
                  | 'cloning'
                  | 'restoring'
                  | 'stopped'
                  | 'billing_suspension'
                  | undefined
                tags?: string[] | undefined
                type?: string | undefined
                updated?: string | undefined
                watchdog_enabled?: boolean | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/backups': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { label: string }
            }
            output: {
              available?: boolean | undefined
              configs?: string[] | undefined
              created?: string | undefined
              disks?:
                | {
                    filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
                    label?: string | undefined
                    size?: number | undefined
                  }[]
                | undefined
              finished?: string | undefined
              id?: number | undefined
              label?: (string | null) | undefined
              status?:
                | 'paused'
                | 'pending'
                | 'running'
                | 'needsPostProcessing'
                | 'successful'
                | 'failed'
                | 'userAborted'
                | undefined
              type?: 'auto' | 'snapshot' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { label: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              automatic?:
                | {
                    available?: boolean | undefined
                    configs?: string[] | undefined
                    created?: string | undefined
                    disks?:
                      | {
                          filesystem?:
                            | 'raw'
                            | 'swap'
                            | 'ext2'
                            | 'ext3'
                            | 'ext4'
                            | 'initrd'
                            | undefined
                          label?: string | undefined
                          size?: number | undefined
                        }[]
                      | undefined
                    finished?: string | undefined
                    id?: number | undefined
                    label?: (string | null) | undefined
                    status?:
                      | 'paused'
                      | 'pending'
                      | 'running'
                      | 'needsPostProcessing'
                      | 'successful'
                      | 'failed'
                      | 'userAborted'
                      | undefined
                    type?: string | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              snapshot?:
                | {
                    current?:
                      | {
                          available?: boolean | undefined
                          configs?: string[] | undefined
                          created?: string | undefined
                          disks?:
                            | {
                                filesystem?:
                                  | 'raw'
                                  | 'swap'
                                  | 'ext2'
                                  | 'ext3'
                                  | 'ext4'
                                  | 'initrd'
                                  | undefined
                                label?: string | undefined
                                size?: number | undefined
                              }[]
                            | undefined
                          finished?: string | undefined
                          id?: number | undefined
                          label?: (string | null) | undefined
                          status?:
                            | 'paused'
                            | 'pending'
                            | 'running'
                            | 'needsPostProcessing'
                            | 'successful'
                            | 'failed'
                            | 'userAborted'
                            | undefined
                          type?: 'auto' | 'snapshot' | undefined
                          updated?: string | undefined
                        }
                      | undefined
                    in_progress?:
                      | {
                          available?: boolean | undefined
                          configs?: string[] | undefined
                          created?: string | undefined
                          disks?:
                            | {
                                filesystem?:
                                  | 'raw'
                                  | 'swap'
                                  | 'ext2'
                                  | 'ext3'
                                  | 'ext4'
                                  | 'initrd'
                                  | undefined
                                label?: string | undefined
                                size?: number | undefined
                              }[]
                            | undefined
                          finished?: string | undefined
                          id?: number | undefined
                          label?: (string | null) | undefined
                          status?:
                            | 'paused'
                            | 'pending'
                            | 'running'
                            | 'needsPostProcessing'
                            | 'successful'
                            | 'failed'
                            | 'userAborted'
                            | undefined
                          type?: 'auto' | 'snapshot' | undefined
                          updated?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/backups/cancel': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/backups/enable': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/backups/:backupId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; backupId: number } }
            output: {
              available?: boolean | undefined
              configs?: string[] | undefined
              created?: string | undefined
              disks?:
                | {
                    filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
                    label?: string | undefined
                    size?: number | undefined
                  }[]
                | undefined
              finished?: string | undefined
              id?: number | undefined
              label?: (string | null) | undefined
              status?:
                | 'paused'
                | 'pending'
                | 'running'
                | 'needsPostProcessing'
                | 'successful'
                | 'failed'
                | 'userAborted'
                | undefined
              type?: 'auto' | 'snapshot' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; backupId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/backups/:backupId/restore': {
      $post:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; backupId: number }
            } & { json: { linode_id: number; overwrite?: boolean | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; backupId: number }
            } & { json: { linode_id: number; overwrite?: boolean | undefined } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/boot': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { config_id?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { config_id?: (number | null) | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/clone': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                backups_enabled?: boolean | undefined
                configs?: number[] | undefined
                disks?: number[] | undefined
                group?: string | undefined
                label?: string | undefined
                linode_id?: number | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                metadata?: { user_data?: string | undefined } | undefined
                placement_group?: { id: number } | undefined
                private_ip?: boolean | undefined
                region?: string | undefined
                type?: string | undefined
              }
            }
            output: {
              alerts?:
                | {
                    cpu?: number | undefined
                    io?: number | undefined
                    network_in?: number | undefined
                    network_out?: number | undefined
                    transfer_quota?: number | undefined
                  }
                | undefined
              backups?:
                | {
                    available?: boolean | undefined
                    enabled?: boolean | undefined
                    last_successful?: string | undefined
                    schedule?:
                      | {
                          day?:
                            | 'Scheduling'
                            | 'Sunday'
                            | 'Monday'
                            | 'Tuesday'
                            | 'Wednesday'
                            | 'Thursday'
                            | 'Friday'
                            | 'Saturday'
                            | undefined
                          window?:
                            | 'Scheduling'
                            | 'W0'
                            | 'W2'
                            | 'W4'
                            | 'W6'
                            | 'W8'
                            | 'W10'
                            | 'W12'
                            | 'W14'
                            | 'W16'
                            | 'W18'
                            | 'W20'
                            | 'W22'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              capabilities?: string[] | undefined
              created?: string | undefined
              disk_encryption?: (string | null) | undefined
              group?: string | undefined
              has_user_data?: boolean | undefined
              host_uuid?: string | undefined
              hypervisor?: 'kvm' | undefined
              id?: number | undefined
              image?: {} | undefined
              interface_generation?: 'legacy_config' | 'linode' | undefined
              ipv4?: string[] | undefined
              ipv6?: (string | null) | undefined
              label?: string | undefined
              lke_cluster_id?: (number | null) | undefined
              maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
              placement_group?:
                | ({
                    id?: number | undefined
                    label?: string | undefined
                    placement_group_policy?: 'strict' | 'flexible' | undefined
                    placement_group_type?: 'anti_affinity:local' | undefined
                  } | null)
                | undefined
              region?: string | undefined
              specs?:
                | {
                    disk?: number | undefined
                    gpus?: number | undefined
                    memory?: number | undefined
                    transfer?: number | undefined
                    vcpus?: number | undefined
                  }
                | undefined
              status?:
                | 'running'
                | 'offline'
                | 'booting'
                | 'busy'
                | 'rebooting'
                | 'shutting_down'
                | 'provisioning'
                | 'deleting'
                | 'migrating'
                | 'rebuilding'
                | 'cloning'
                | 'restoring'
                | 'stopped'
                | 'billing_suspension'
                | undefined
              tags?: string[] | undefined
              type?: string | undefined
              updated?: string | undefined
              watchdog_enabled?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                backups_enabled?: boolean | undefined
                configs?: number[] | undefined
                disks?: number[] | undefined
                group?: string | undefined
                label?: string | undefined
                linode_id?: number | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                metadata?: { user_data?: string | undefined } | undefined
                placement_group?: { id: number } | undefined
                private_ip?: boolean | undefined
                region?: string | undefined
                type?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/configs': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                comments?: (string | null) | undefined
                devices?:
                  | {
                      sda?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdb?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdc?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdd?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sde?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdf?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdg?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdh?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                    }
                  | undefined
                helpers?:
                  | {
                      devtmpfs_automount?: boolean | undefined
                      distro?: boolean | undefined
                      modules_dep?: boolean | undefined
                      network?: (boolean | null) | undefined
                      updatedb_disabled?: boolean | undefined
                    }
                  | undefined
                id?: number | undefined
                interfaces?:
                  | {
                      active?: boolean | undefined
                      id?: number | undefined
                      ip_ranges?: (string[] | null) | undefined
                      ipam_address?: (string | null) | undefined
                      ipv4?:
                        | {
                            nat_1_1?: string | 'any' | undefined
                            vpc?: (string | null) | undefined
                          }
                        | undefined
                      label?: (string | null) | undefined
                      primary?: boolean | undefined
                      purpose: 'public' | 'vlan' | 'vpc'
                      subnet_id?: (number | null) | undefined
                      vpc_id?: (number | null) | undefined
                    }[]
                  | undefined
                kernel?: string | undefined
                label?: string | undefined
                memory_limit?: number | undefined
                root_device?: string | undefined
                run_level?: 'default' | 'single' | 'binbash' | undefined
                virt_mode?: 'paravirt' | 'fullvirt' | undefined
              }
            }
            output: {
              comments?: (string | null) | undefined
              devices?:
                | {
                    sda?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdb?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdc?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdd?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sde?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdf?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdg?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdh?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                  }
                | undefined
              helpers?:
                | {
                    devtmpfs_automount?: boolean | undefined
                    distro?: boolean | undefined
                    modules_dep?: boolean | undefined
                    network?: (boolean | null) | undefined
                    updatedb_disabled?: boolean | undefined
                  }
                | undefined
              id?: number | undefined
              interfaces?:
                | {
                    active?: boolean | undefined
                    id?: number | undefined
                    ip_ranges?: (string[] | null) | undefined
                    ipam_address?: (string | null) | undefined
                    ipv4?:
                      | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                      | undefined
                    label?: (string | null) | undefined
                    primary?: boolean | undefined
                    purpose: 'public' | 'vlan' | 'vpc'
                    subnet_id?: (number | null) | undefined
                    vpc_id?: (number | null) | undefined
                  }[]
                | undefined
              kernel?: string | undefined
              label?: string | undefined
              memory_limit?: number | undefined
              root_device?: string | undefined
              run_level?: 'default' | 'single' | 'binbash' | undefined
              virt_mode?: 'paravirt' | 'fullvirt' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                comments?: (string | null) | undefined
                devices?:
                  | {
                      sda?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdb?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdc?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdd?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sde?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdf?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdg?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdh?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                    }
                  | undefined
                helpers?:
                  | {
                      devtmpfs_automount?: boolean | undefined
                      distro?: boolean | undefined
                      modules_dep?: boolean | undefined
                      network?: (boolean | null) | undefined
                      updatedb_disabled?: boolean | undefined
                    }
                  | undefined
                id?: number | undefined
                interfaces?:
                  | {
                      active?: boolean | undefined
                      id?: number | undefined
                      ip_ranges?: (string[] | null) | undefined
                      ipam_address?: (string | null) | undefined
                      ipv4?:
                        | {
                            nat_1_1?: string | 'any' | undefined
                            vpc?: (string | null) | undefined
                          }
                        | undefined
                      label?: (string | null) | undefined
                      primary?: boolean | undefined
                      purpose: 'public' | 'vlan' | 'vpc'
                      subnet_id?: (number | null) | undefined
                      vpc_id?: (number | null) | undefined
                    }[]
                  | undefined
                kernel?: string | undefined
                label?: string | undefined
                memory_limit?: number | undefined
                root_device?: string | undefined
                run_level?: 'default' | 'single' | 'binbash' | undefined
                virt_mode?: 'paravirt' | 'fullvirt' | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get: {
        input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
          query: { page?: number | undefined; page_size?: number | undefined }
        }
        output: {
          data?:
            | {
                comments?: (string | null) | undefined
                devices?:
                  | {
                      sda?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdb?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdc?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdd?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sde?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdf?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdg?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdh?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                    }
                  | undefined
                helpers?:
                  | {
                      devtmpfs_automount?: boolean | undefined
                      distro?: boolean | undefined
                      modules_dep?: boolean | undefined
                      network?: (boolean | null) | undefined
                      updatedb_disabled?: boolean | undefined
                    }
                  | undefined
                id?: number | undefined
                interfaces?:
                  | {
                      active?: boolean | undefined
                      id?: number | undefined
                      ip_ranges?: (string[] | null) | undefined
                      ipam_address?: (string | null) | undefined
                      ipv4?:
                        | {
                            nat_1_1?: string | 'any' | undefined
                            vpc?: (string | null) | undefined
                          }
                        | undefined
                      label?: (string | null) | undefined
                      primary?: boolean | undefined
                      purpose: 'public' | 'vlan' | 'vpc'
                      subnet_id?: (number | null) | undefined
                      vpc_id?: (number | null) | undefined
                    }[]
                  | undefined
                kernel?: string | undefined
                label?: string | undefined
                memory_limit?: number | undefined
                root_device?: string | undefined
                run_level?: 'default' | 'single' | 'binbash' | undefined
                virt_mode?: 'paravirt' | 'fullvirt' | undefined
              }[]
            | undefined
          page?: number | undefined
          pages?: number | undefined
          results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/configs/:configId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number } }
            output: {
              comments?: (string | null) | undefined
              devices?:
                | {
                    sda?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdb?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdc?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdd?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sde?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdf?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdg?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdh?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                  }
                | undefined
              helpers?:
                | {
                    devtmpfs_automount?: boolean | undefined
                    distro?: boolean | undefined
                    modules_dep?: boolean | undefined
                    network?: (boolean | null) | undefined
                    updatedb_disabled?: boolean | undefined
                  }
                | undefined
              id?: number | undefined
              interfaces?:
                | {
                    active?: boolean | undefined
                    id?: number | undefined
                    ip_ranges?: (string[] | null) | undefined
                    ipam_address?: (string | null) | undefined
                    ipv4?:
                      | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                      | undefined
                    label?: (string | null) | undefined
                    primary?: boolean | undefined
                    purpose: 'public' | 'vlan' | 'vpc'
                    subnet_id?: (number | null) | undefined
                    vpc_id?: (number | null) | undefined
                  }[]
                | undefined
              kernel?: string | undefined
              label?: string | undefined
              memory_limit?: number | undefined
              root_device?: string | undefined
              run_level?: 'default' | 'single' | 'binbash' | undefined
              virt_mode?: 'paravirt' | 'fullvirt' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number }
            } & {
              json: {
                comments?: (string | null) | undefined
                devices?:
                  | {
                      sda?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdb?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdc?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdd?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sde?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdf?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdg?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdh?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                    }
                  | undefined
                helpers?:
                  | {
                      devtmpfs_automount?: boolean | undefined
                      distro?: boolean | undefined
                      modules_dep?: boolean | undefined
                      network?: (boolean | null) | undefined
                      updatedb_disabled?: boolean | undefined
                    }
                  | undefined
                id?: number | undefined
                interfaces?:
                  | {
                      active?: boolean | undefined
                      id?: number | undefined
                      ip_ranges?: (string[] | null) | undefined
                      ipam_address?: (string | null) | undefined
                      ipv4?:
                        | {
                            nat_1_1?: string | 'any' | undefined
                            vpc?: (string | null) | undefined
                          }
                        | undefined
                      label?: (string | null) | undefined
                      primary?: boolean | undefined
                      purpose: 'public' | 'vlan' | 'vpc'
                      subnet_id?: (number | null) | undefined
                      vpc_id?: (number | null) | undefined
                    }[]
                  | undefined
                kernel?: string | undefined
                label?: string | undefined
                memory_limit?: number | undefined
                root_device?: string | undefined
                run_level?: 'default' | 'single' | 'binbash' | undefined
                virt_mode?: 'paravirt' | 'fullvirt' | undefined
              }
            }
            output: {
              comments?: (string | null) | undefined
              devices?:
                | {
                    sda?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdb?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdc?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdd?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sde?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdf?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdg?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                    sdh?:
                      | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                      | undefined
                  }
                | undefined
              helpers?:
                | {
                    devtmpfs_automount?: boolean | undefined
                    distro?: boolean | undefined
                    modules_dep?: boolean | undefined
                    network?: (boolean | null) | undefined
                    updatedb_disabled?: boolean | undefined
                  }
                | undefined
              id?: number | undefined
              interfaces?:
                | {
                    active?: boolean | undefined
                    id?: number | undefined
                    ip_ranges?: (string[] | null) | undefined
                    ipam_address?: (string | null) | undefined
                    ipv4?:
                      | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                      | undefined
                    label?: (string | null) | undefined
                    primary?: boolean | undefined
                    purpose: 'public' | 'vlan' | 'vpc'
                    subnet_id?: (number | null) | undefined
                    vpc_id?: (number | null) | undefined
                  }[]
                | undefined
              kernel?: string | undefined
              label?: string | undefined
              memory_limit?: number | undefined
              root_device?: string | undefined
              run_level?: 'default' | 'single' | 'binbash' | undefined
              virt_mode?: 'paravirt' | 'fullvirt' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number }
            } & {
              json: {
                comments?: (string | null) | undefined
                devices?:
                  | {
                      sda?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdb?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdc?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdd?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sde?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdf?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdg?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdh?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                    }
                  | undefined
                helpers?:
                  | {
                      devtmpfs_automount?: boolean | undefined
                      distro?: boolean | undefined
                      modules_dep?: boolean | undefined
                      network?: (boolean | null) | undefined
                      updatedb_disabled?: boolean | undefined
                    }
                  | undefined
                id?: number | undefined
                interfaces?:
                  | {
                      active?: boolean | undefined
                      id?: number | undefined
                      ip_ranges?: (string[] | null) | undefined
                      ipam_address?: (string | null) | undefined
                      ipv4?:
                        | {
                            nat_1_1?: string | 'any' | undefined
                            vpc?: (string | null) | undefined
                          }
                        | undefined
                      label?: (string | null) | undefined
                      primary?: boolean | undefined
                      purpose: 'public' | 'vlan' | 'vpc'
                      subnet_id?: (number | null) | undefined
                      vpc_id?: (number | null) | undefined
                    }[]
                  | undefined
                kernel?: string | undefined
                label?: string | undefined
                memory_limit?: number | undefined
                root_device?: string | undefined
                run_level?: 'default' | 'single' | 'binbash' | undefined
                virt_mode?: 'paravirt' | 'fullvirt' | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces': {
      $post:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number }
            } & {
              json: {
                active?: boolean | undefined
                id?: number | undefined
                ip_ranges?: (string[] | null) | undefined
                ipam_address?: (string | null) | undefined
                ipv4?:
                  | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                  | undefined
                label?: (string | null) | undefined
                primary?: boolean | undefined
                purpose: 'public' | 'vlan' | 'vpc'
                subnet_id?: (number | null) | undefined
                vpc_id?: (number | null) | undefined
              }
            }
            output: {
              active?: boolean | undefined
              id?: number | undefined
              ip_ranges?: (string[] | null) | undefined
              ipam_address?: (string | null) | undefined
              ipv4?:
                | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                | undefined
              label?: (string | null) | undefined
              primary?: boolean | undefined
              purpose: 'public' | 'vlan' | 'vpc'
              subnet_id?: (number | null) | undefined
              vpc_id?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number }
            } & {
              json: {
                active?: boolean | undefined
                id?: number | undefined
                ip_ranges?: (string[] | null) | undefined
                ipam_address?: (string | null) | undefined
                ipv4?:
                  | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                  | undefined
                label?: (string | null) | undefined
                primary?: boolean | undefined
                purpose: 'public' | 'vlan' | 'vpc'
                subnet_id?: (number | null) | undefined
                vpc_id?: (number | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number } }
            output: {
              active?: boolean | undefined
              id?: number | undefined
              ip_ranges?: (string[] | null) | undefined
              ipam_address?: (string | null) | undefined
              ipv4?:
                | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                | undefined
              label?: (string | null) | undefined
              primary?: boolean | undefined
              purpose: 'public' | 'vlan' | 'vpc'
              subnet_id?: (number | null) | undefined
              vpc_id?: (number | null) | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces/order': {
      $post:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number }
            } & { json: { ids: number[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; configId: number }
            } & { json: { ids: number[] } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/configs/:configId/interfaces/:interfaceId': {
      $get:
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                linodeId: number
                configId: number
                interfaceId: number
              }
            }
            output: {
              active?: boolean | undefined
              id?: number | undefined
              ip_ranges?: (string[] | null) | undefined
              ipam_address?: (string | null) | undefined
              ipv4?:
                | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                | undefined
              label?: (string | null) | undefined
              primary?: boolean | undefined
              purpose: 'public' | 'vlan' | 'vpc'
              subnet_id?: (number | null) | undefined
              vpc_id?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                linodeId: number
                configId: number
                interfaceId: number
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                linodeId: number
                configId: number
                interfaceId: number
              }
            } & {
              json: {
                ip_ranges?: string[] | undefined
                ipv4?:
                  | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                  | undefined
                primary?: boolean | undefined
              }
            }
            output: {
              active?: boolean | undefined
              id?: number | undefined
              ip_ranges?: (string[] | null) | undefined
              ipam_address?: (string | null) | undefined
              ipv4?:
                | { nat_1_1?: (string | null) | undefined; vpc?: (string | null) | undefined }
                | undefined
              label?: (string | null) | undefined
              primary?: boolean | undefined
              purpose: 'public' | 'vlan' | 'vpc'
              subnet_id?: (number | null) | undefined
              vpc_id?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                linodeId: number
                configId: number
                interfaceId: number
              }
            } & {
              json: {
                ip_ranges?: string[] | undefined
                ipv4?:
                  | { nat_1_1?: string | 'any' | undefined; vpc?: (string | null) | undefined }
                  | undefined
                primary?: boolean | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                linodeId: number
                configId: number
                interfaceId: number
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                linodeId: number
                configId: number
                interfaceId: number
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/disks': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                authorized_keys?: string[] | undefined
                authorized_users?: string[] | undefined
                filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
                image?: (string | null) | undefined
                label?: string | undefined
                root_pass?: string | undefined
                size?: number | undefined
                stackscript_data?: { [x: string]: unknown } | undefined
                stackscript_id?: number | undefined
              }
            }
            output: {
              created?: string | undefined
              disk_encryption?: string | undefined
              filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
              id?: number | undefined
              label?: string | undefined
              size?: number | undefined
              status?: 'ready' | 'not ready' | 'deleting' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                authorized_keys?: string[] | undefined
                authorized_users?: string[] | undefined
                filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
                image?: (string | null) | undefined
                label?: string | undefined
                root_pass?: string | undefined
                size?: number | undefined
                stackscript_data?: { [x: string]: unknown } | undefined
                stackscript_id?: number | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    disk_encryption?: string | undefined
                    filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
                    id?: number | undefined
                    label?: string | undefined
                    size?: number | undefined
                    status?: 'ready' | 'not ready' | 'deleting' | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/disks/:diskId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } }
            output: {
              created?: string | undefined
              disk_encryption?: string | undefined
              filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
              id?: number | undefined
              label?: string | undefined
              size?: number | undefined
              status?: 'ready' | 'not ready' | 'deleting' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } } & {
              json: { label?: string | undefined }
            }
            output: {
              created?: string | undefined
              disk_encryption?: string | undefined
              filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
              id?: number | undefined
              label?: string | undefined
              size?: number | undefined
              status?: 'ready' | 'not ready' | 'deleting' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } } & {
              json: { label?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/disks/:diskId/clone': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } }
            output: {
              created?: string | undefined
              disk_encryption?: string | undefined
              filesystem?: 'raw' | 'swap' | 'ext2' | 'ext3' | 'ext4' | 'initrd' | undefined
              id?: number | undefined
              label?: string | undefined
              size?: number | undefined
              status?: 'ready' | 'not ready' | 'deleting' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/disks/:diskId/password': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } } & {
              json: { password: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } } & {
              json: { password: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/disks/:diskId/resize': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } } & {
              json: { size: number }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; diskId: number } } & {
              json: { size: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/firewalls': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    entities?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?:
                            | ({
                                id?: number | undefined
                                label?: string | undefined
                                parent_entity?: (string | null) | undefined
                                type?: 'linode' | undefined
                                url?: string | undefined
                              } | null)
                            | undefined
                          type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    rules?:
                      | {
                          fingerprint?: string | undefined
                          inbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          outbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          version?: number | undefined
                        }
                      | undefined
                    status?: 'enabled' | 'disabled' | 'deleted' | undefined
                    tags?: string[] | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & { json: { firewall_ids: number[] } }
            output: {
              data?:
                | {
                    created?: string | undefined
                    entities?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?:
                            | ({
                                id?: number | undefined
                                label?: string | undefined
                                parent_entity?: (string | null) | undefined
                                type?: 'linode' | undefined
                                url?: string | undefined
                              } | null)
                            | undefined
                          type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    rules?:
                      | {
                          fingerprint?: string | undefined
                          inbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          outbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          version?: number | undefined
                        }
                      | undefined
                    status?: 'enabled' | 'disabled' | 'deleted' | undefined
                    tags?: string[] | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & { json: { firewall_ids: number[] } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/firewalls/apply': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/interfaces': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json:
                | {
                    default_route?:
                      | { ipv4?: (boolean | null) | undefined; ipv6?: (boolean | null) | undefined }
                      | undefined
                    firewall_id?: (number | null) | undefined
                    public?:
                      | ({
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address?: string | 'auto' | string | undefined
                                      primary?: boolean | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          ipv6?: { ranges?: { range: string }[] | undefined } | undefined
                        } | null)
                      | undefined
                  }
                | {
                    vlan?:
                      | ({
                          ipam_address?: string | undefined
                          vlan_label?: string | undefined
                        } | null)
                      | undefined
                  }
                | {
                    default_route?: { ipv4?: (boolean | null) | undefined } | undefined
                    firewall_id?: (number | null) | undefined
                    vpc?:
                      | ({
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address?: string | 'auto' | undefined
                                      nat_1_1_address?: string | 'auto' | undefined
                                      primary?: (boolean | null) | undefined
                                    }[]
                                  | undefined
                                ranges?: { range: string }[] | undefined
                              }
                            | undefined
                          subnet_id: number
                        } | null)
                      | undefined
                  }
            }
            output:
              | {
                  created?: string | undefined
                  default_route?:
                    | ({ ipv4?: boolean | undefined; ipv6?: boolean | undefined } | null)
                    | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?:
                    | {
                        ipv4?:
                          | {
                              addresses?:
                                | { address?: string | undefined; primary?: boolean | undefined }[]
                                | undefined
                              shared?:
                                | { address?: string | undefined; linode_id?: string | undefined }[]
                                | undefined
                            }
                          | undefined
                        ipv6?:
                          | {
                              ranges?:
                                | {
                                    range?: string | undefined
                                    route_target?: string | undefined
                                  }[]
                                | undefined
                              shared?:
                                | {
                                    range?: string | undefined
                                    route_target?: string | undefined
                                  }[]
                                | undefined
                              slaac?:
                                | { address?: string | undefined; prefix?: number | undefined }[]
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?: ({ [x: string]: unknown } | null) | undefined
                  vpc?: ({} | null) | undefined
                }
              | {
                  created?: string | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?: ({ [x: string]: unknown } | null) | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?:
                    | {
                        ipam_address?: (string | null) | undefined
                        vlan_label?: string | undefined
                      }
                    | undefined
                  vpc?: ({ [x: string]: unknown } | null) | undefined
                }
              | {
                  created?: string | undefined
                  default_route?: { ipv4?: boolean | undefined } | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?: ({} | null) | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?: ({} | null) | undefined
                  vpc?:
                    | {
                        ipv4?:
                          | {
                              addresses?:
                                | {
                                    address?: string | undefined
                                    nat_1_1_address?: (string | null) | undefined
                                    primary?: boolean | undefined
                                  }[]
                                | undefined
                              ranges?: { range?: string | undefined }[] | undefined
                            }
                          | undefined
                        subnet_id?: number | undefined
                        vpc_id?: number | undefined
                      }
                    | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json:
                | {
                    default_route?:
                      | { ipv4?: (boolean | null) | undefined; ipv6?: (boolean | null) | undefined }
                      | undefined
                    firewall_id?: (number | null) | undefined
                    public?:
                      | ({
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address?: string | 'auto' | string | undefined
                                      primary?: boolean | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          ipv6?: { ranges?: { range: string }[] | undefined } | undefined
                        } | null)
                      | undefined
                  }
                | {
                    vlan?:
                      | ({
                          ipam_address?: string | undefined
                          vlan_label?: string | undefined
                        } | null)
                      | undefined
                  }
                | {
                    default_route?: { ipv4?: (boolean | null) | undefined } | undefined
                    firewall_id?: (number | null) | undefined
                    vpc?:
                      | ({
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address?: string | 'auto' | undefined
                                      nat_1_1_address?: string | 'auto' | undefined
                                      primary?: (boolean | null) | undefined
                                    }[]
                                  | undefined
                                ranges?: { range: string }[] | undefined
                              }
                            | undefined
                          subnet_id: number
                        } | null)
                      | undefined
                  }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              interfaces: (
                | {
                    created?: string | undefined
                    default_route?:
                      | ({ ipv4?: boolean | undefined; ipv6?: boolean | undefined } | null)
                      | undefined
                    id?: number | undefined
                    mac_address?: string | undefined
                    public?:
                      | {
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address?: string | undefined
                                      primary?: boolean | undefined
                                    }[]
                                  | undefined
                                shared?:
                                  | {
                                      address?: string | undefined
                                      linode_id?: string | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          ipv6?:
                            | {
                                ranges?:
                                  | {
                                      range?: string | undefined
                                      route_target?: string | undefined
                                    }[]
                                  | undefined
                                shared?:
                                  | {
                                      range?: string | undefined
                                      route_target?: string | undefined
                                    }[]
                                  | undefined
                                slaac?:
                                  | { address?: string | undefined; prefix?: number | undefined }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    updated?: string | undefined
                    version?: number | undefined
                    vlan?: ({ [x: string]: unknown } | null) | undefined
                    vpc?: ({} | null) | undefined
                  }
                | {
                    created?: string | undefined
                    id?: number | undefined
                    mac_address?: string | undefined
                    public?: ({ [x: string]: unknown } | null) | undefined
                    updated?: string | undefined
                    version?: number | undefined
                    vlan?:
                      | {
                          ipam_address?: (string | null) | undefined
                          vlan_label?: string | undefined
                        }
                      | undefined
                    vpc?: ({ [x: string]: unknown } | null) | undefined
                  }
                | {
                    created?: string | undefined
                    default_route?: { ipv4?: boolean | undefined } | undefined
                    id?: number | undefined
                    mac_address?: string | undefined
                    public?: ({} | null) | undefined
                    updated?: string | undefined
                    version?: number | undefined
                    vlan?: ({} | null) | undefined
                    vpc?:
                      | {
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address?: string | undefined
                                      nat_1_1_address?: (string | null) | undefined
                                      primary?: boolean | undefined
                                    }[]
                                  | undefined
                                ranges?: { range?: string | undefined }[] | undefined
                              }
                            | undefined
                          subnet_id?: number | undefined
                          vpc_id?: number | undefined
                        }
                      | undefined
                  }
              )[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/interfaces/history': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              data?:
                | {
                    created?: string | undefined
                    interface_data?: string | undefined
                    interface_history_id?: number | undefined
                    interface_id?: number | undefined
                    linode_id?: number | undefined
                    version?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/interfaces/settings': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              default_route?:
                | {
                    ipv4_eligible_interface_ids?: number[] | undefined
                    ipv4_interface_id?: (number | null) | undefined
                    ipv6_eligible_interface_ids?: number[] | undefined
                    ipv6_interface_id?: (number | null) | undefined
                  }
                | undefined
              network_helper?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                default_route?:
                  | {
                      ipv4_eligible_interface_ids?: number[] | undefined
                      ipv4_interface_id?: (number | null) | undefined
                      ipv6_eligible_interface_ids?: number[] | undefined
                      ipv6_interface_id?: (number | null) | undefined
                    }
                  | undefined
                network_helper?: boolean | undefined
              }
            }
            output: {
              default_route?:
                | {
                    ipv4_eligible_interface_ids?: number[] | undefined
                    ipv4_interface_id?: (number | null) | undefined
                    ipv6_eligible_interface_ids?: number[] | undefined
                    ipv6_interface_id?: (number | null) | undefined
                  }
                | undefined
              network_helper?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                default_route?:
                  | {
                      ipv4_eligible_interface_ids?: number[] | undefined
                      ipv4_interface_id?: (number | null) | undefined
                      ipv6_eligible_interface_ids?: number[] | undefined
                      ipv6_interface_id?: (number | null) | undefined
                    }
                  | undefined
                network_helper?: boolean | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/interfaces/:interfaceId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; interfaceId: number } }
            output:
              | {
                  created?: string | undefined
                  default_route?:
                    | ({ ipv4?: boolean | undefined; ipv6?: boolean | undefined } | null)
                    | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?:
                    | {
                        ipv4?:
                          | {
                              addresses?:
                                | { address?: string | undefined; primary?: boolean | undefined }[]
                                | undefined
                              shared?:
                                | { address?: string | undefined; linode_id?: string | undefined }[]
                                | undefined
                            }
                          | undefined
                        ipv6?:
                          | {
                              ranges?:
                                | {
                                    range?: string | undefined
                                    route_target?: string | undefined
                                  }[]
                                | undefined
                              shared?:
                                | {
                                    range?: string | undefined
                                    route_target?: string | undefined
                                  }[]
                                | undefined
                              slaac?:
                                | { address?: string | undefined; prefix?: number | undefined }[]
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?: ({ [x: string]: unknown } | null) | undefined
                  vpc?: ({} | null) | undefined
                }
              | {
                  created?: string | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?: ({ [x: string]: unknown } | null) | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?:
                    | {
                        ipam_address?: (string | null) | undefined
                        vlan_label?: string | undefined
                      }
                    | undefined
                  vpc?: ({ [x: string]: unknown } | null) | undefined
                }
              | {
                  created?: string | undefined
                  default_route?: { ipv4?: boolean | undefined } | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?: ({} | null) | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?: ({} | null) | undefined
                  vpc?:
                    | {
                        ipv4?:
                          | {
                              addresses?:
                                | {
                                    address?: string | undefined
                                    nat_1_1_address?: (string | null) | undefined
                                    primary?: boolean | undefined
                                  }[]
                                | undefined
                              ranges?: { range?: string | undefined }[] | undefined
                            }
                          | undefined
                        subnet_id?: number | undefined
                        vpc_id?: number | undefined
                      }
                    | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; interfaceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; interfaceId: number }
            } & {
              json:
                | {
                    default_route?:
                      | { ipv4?: (boolean | null) | undefined; ipv6?: (boolean | null) | undefined }
                      | undefined
                    public?:
                      | ({
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address?: string | undefined
                                      primary?: (boolean | null) | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          ipv6?: { ranges?: { range: string }[] | undefined } | undefined
                        } | null)
                      | undefined
                  }
                | {
                    vlan?:
                      | {
                          ipam_address?: (string | null) | undefined
                          vlan_label?: string | undefined
                        }
                      | undefined
                  }
                | {
                    default_route?: { ipv4?: (boolean | null) | undefined } | undefined
                    vpc?:
                      | ({
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address: string
                                      nat_1_1_address?: string | undefined
                                      primary?: (boolean | null) | undefined
                                    }[]
                                  | undefined
                                ranges?: { range?: (string | null) | undefined }[] | undefined
                              }
                            | undefined
                          subnet_id: number
                        } | null)
                      | undefined
                  }
            }
            output:
              | {
                  created?: string | undefined
                  default_route?:
                    | ({ ipv4?: boolean | undefined; ipv6?: boolean | undefined } | null)
                    | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?:
                    | {
                        ipv4?:
                          | {
                              addresses?:
                                | { address?: string | undefined; primary?: boolean | undefined }[]
                                | undefined
                              shared?:
                                | { address?: string | undefined; linode_id?: string | undefined }[]
                                | undefined
                            }
                          | undefined
                        ipv6?:
                          | {
                              ranges?:
                                | {
                                    range?: string | undefined
                                    route_target?: string | undefined
                                  }[]
                                | undefined
                              shared?:
                                | {
                                    range?: string | undefined
                                    route_target?: string | undefined
                                  }[]
                                | undefined
                              slaac?:
                                | { address?: string | undefined; prefix?: number | undefined }[]
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?: ({ [x: string]: unknown } | null) | undefined
                  vpc?: ({} | null) | undefined
                }
              | {
                  created?: string | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?: ({ [x: string]: unknown } | null) | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?:
                    | {
                        ipam_address?: (string | null) | undefined
                        vlan_label?: string | undefined
                      }
                    | undefined
                  vpc?: ({ [x: string]: unknown } | null) | undefined
                }
              | {
                  created?: string | undefined
                  default_route?: { ipv4?: boolean | undefined } | undefined
                  id?: number | undefined
                  mac_address?: string | undefined
                  public?: ({} | null) | undefined
                  updated?: string | undefined
                  version?: number | undefined
                  vlan?: ({} | null) | undefined
                  vpc?:
                    | {
                        ipv4?:
                          | {
                              addresses?:
                                | {
                                    address?: string | undefined
                                    nat_1_1_address?: (string | null) | undefined
                                    primary?: boolean | undefined
                                  }[]
                                | undefined
                              ranges?: { range?: string | undefined }[] | undefined
                            }
                          | undefined
                        subnet_id?: number | undefined
                        vpc_id?: number | undefined
                      }
                    | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; interfaceId: number }
            } & {
              json:
                | {
                    default_route?:
                      | { ipv4?: (boolean | null) | undefined; ipv6?: (boolean | null) | undefined }
                      | undefined
                    public?:
                      | ({
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address?: string | undefined
                                      primary?: (boolean | null) | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                          ipv6?: { ranges?: { range: string }[] | undefined } | undefined
                        } | null)
                      | undefined
                  }
                | {
                    vlan?:
                      | {
                          ipam_address?: (string | null) | undefined
                          vlan_label?: string | undefined
                        }
                      | undefined
                  }
                | {
                    default_route?: { ipv4?: (boolean | null) | undefined } | undefined
                    vpc?:
                      | ({
                          ipv4?:
                            | {
                                addresses?:
                                  | {
                                      address: string
                                      nat_1_1_address?: string | undefined
                                      primary?: (boolean | null) | undefined
                                    }[]
                                  | undefined
                                ranges?: { range?: (string | null) | undefined }[] | undefined
                              }
                            | undefined
                          subnet_id: number
                        } | null)
                      | undefined
                  }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; interfaceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; interfaceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/interfaces/:interfaceId/firewalls': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; interfaceId: number } }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    created?: string | undefined
                    entities?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?:
                            | ({
                                id?: number | undefined
                                label?: string | undefined
                                parent_entity?: (string | null) | undefined
                                type?: 'linode' | undefined
                                url?: string | undefined
                              } | null)
                            | undefined
                          type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    rules?:
                      | {
                          fingerprint?: string | undefined
                          inbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          outbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          version?: number | undefined
                        }
                      | undefined
                    status?: 'enabled' | 'disabled' | 'deleted' | undefined
                    tags?: string[] | undefined
                    updated?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; interfaceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/ips': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { public: boolean; type: 'ipv4' }
            }
            output: {
              address?: string | undefined
              gateway?: (string | null) | undefined
              interface_id?: (number | null) | undefined
              linode_id?: number | undefined
              prefix?: number | undefined
              public?: boolean | undefined
              rdns?: (string | null) | undefined
              region?: string | undefined
              subnet_mask?: string | undefined
              type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
              vpc_nat_1_1?:
                | {
                    address?: string | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { public: boolean; type: 'ipv4' }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              ipv4?:
                | {
                    private?:
                      | {
                          address?: string | undefined
                          gateway?: (string | null) | undefined
                          linode_id?: number | undefined
                          prefix?: number | undefined
                          public?: boolean | undefined
                          rdns?: (string | null) | undefined
                          region?: string | undefined
                          subnet_mask?: string | undefined
                          type?: string | undefined
                        }[]
                      | undefined
                    public?:
                      | {
                          address?: string | undefined
                          gateway?: (string | null) | undefined
                          interface_id?: (number | null) | undefined
                          linode_id?: number | undefined
                          prefix?: number | undefined
                          public?: boolean | undefined
                          rdns?: (string | null) | undefined
                          region?: string | undefined
                          subnet_mask?: string | undefined
                          type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
                          vpc_nat_1_1?:
                            | {
                                address?: string | undefined
                                subnet_id?: number | undefined
                                vpc_id?: number | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    reserved?:
                      | {
                          address?: string | undefined
                          gateway?: (string | null) | undefined
                          interface_id?: (number | null) | undefined
                          linode_id?: number | undefined
                          prefix?: number | undefined
                          public?: boolean | undefined
                          rdns?: (string | null) | undefined
                          region?: string | undefined
                          subnet_mask?: string | undefined
                          type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
                          vpc_nat_1_1?:
                            | {
                                address?: string | undefined
                                subnet_id?: number | undefined
                                vpc_id?: number | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    shared?:
                      | {
                          address?: string | undefined
                          gateway?: (string | null) | undefined
                          interface_id?: (number | null) | undefined
                          linode_id?: number | undefined
                          prefix?: number | undefined
                          public?: boolean | undefined
                          rdns?: (string | null) | undefined
                          region?: string | undefined
                          subnet_mask?: string | undefined
                          type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
                          vpc_nat_1_1?:
                            | {
                                address?: string | undefined
                                subnet_id?: number | undefined
                                vpc_id?: number | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                    vpc?:
                      | {
                          active?: boolean | undefined
                          address?: (string | null) | undefined
                          address_range?: (string | null) | undefined
                          config_id?: (number | null) | undefined
                          gateway?: (string | null) | undefined
                          interface_id?: number | undefined
                          linode_id?: number | undefined
                          nat_1_1?: string | undefined
                          prefix?: (number | null) | undefined
                          region?: string | undefined
                          subnet_id?: number | undefined
                          subnet_mask?: string | undefined
                          vpc_id?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
              ipv6?:
                | {
                    global?:
                      | {
                          prefix?: number | undefined
                          range?: string | undefined
                          region?: string | undefined
                          route_target?: string | undefined
                        }[]
                      | undefined
                    link_local?:
                      | {
                          address?: string | undefined
                          gateway?: string | undefined
                          linode_id?: number | undefined
                          prefix?: number | undefined
                          public?: boolean | undefined
                          rdns?: (string | null) | undefined
                          region?: string | undefined
                          subnet_mask?: string | undefined
                          type?: string | undefined
                        }
                      | undefined
                    slaac?:
                      | {
                          address?: string | undefined
                          gateway?: string | undefined
                          linode_id?: number | undefined
                          prefix?: number | undefined
                          public?: boolean | undefined
                          rdns?: (string | null) | undefined
                          region?: string | undefined
                          subnet_mask?: string | undefined
                          type?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/ips/:address': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; address: string } }
            output: {
              address?: string | undefined
              gateway?: (string | null) | undefined
              interface_id?: (number | null) | undefined
              linode_id?: number | undefined
              prefix?: number | undefined
              public?: boolean | undefined
              rdns?: (string | null) | undefined
              region?: string | undefined
              subnet_mask?: string | undefined
              type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
              vpc_nat_1_1?:
                | {
                    address?: string | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; address: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; address: string } } & {
              json: { rdns: string | null }
            }
            output: {
              address?: string | undefined
              gateway?: (string | null) | undefined
              interface_id?: (number | null) | undefined
              linode_id?: number | undefined
              prefix?: number | undefined
              public?: boolean | undefined
              rdns?: (string | null) | undefined
              region?: string | undefined
              subnet_mask?: string | undefined
              type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
              vpc_nat_1_1?:
                | {
                    address?: string | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; address: string } } & {
              json: { rdns: string | null }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; address: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; address: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/migrate': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                placement_group?: { id: number } | undefined
                region?: string | undefined
                type?: 'warm' | 'cold' | undefined
                upgrade?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                placement_group?: { id: number } | undefined
                region?: string | undefined
                type?: 'warm' | 'cold' | undefined
                upgrade?: boolean | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/mutate': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { allow_auto_disk_resize?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { allow_auto_disk_resize?: boolean | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/nodebalancers': {
      $get: {
        input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
        output: {
          data?:
            | {
                client_conn_throttle?: number | undefined
                created?: string | undefined
                hostname?: string | undefined
                id?: number | undefined
                ipv4?: string | undefined
                ipv6?: (string | null) | undefined
                label?: string | undefined
                lke_cluster?:
                  | ({
                      id?: string | undefined
                      label?: string | undefined
                      type?: string | undefined
                      url?: string | undefined
                    } | null)
                  | undefined
                region?: string | undefined
                tags?: string[] | undefined
                transfer?:
                  | {
                      in?: (number | null) | undefined
                      out?: (number | null) | undefined
                      total?: (number | null) | undefined
                    }
                  | undefined
                type?: 'common' | 'premium' | undefined
                updated?: string | undefined
              }[]
            | undefined
          page?: number | undefined
          pages?: number | undefined
          results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/password': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { root_pass: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { root_pass: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/reboot': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { config_id?: (number | null) | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: { config_id?: (number | null) | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/rebuild': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                authorized_keys?: string[] | undefined
                authorized_users?: string[] | undefined
                booted?: boolean | undefined
                disk_encryption?: 'enabled' | 'disabled' | undefined
                image?: (string | null) | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                metadata?: { user_data?: string | undefined } | undefined
                root_pass?: string | undefined
                stackscript_data?: { [x: string]: unknown } | undefined
                stackscript_id?: number | undefined
                type?: string | undefined
              }
            }
            output: {
              alerts?:
                | {
                    cpu?: number | undefined
                    io?: number | undefined
                    network_in?: number | undefined
                    network_out?: number | undefined
                    transfer_quota?: number | undefined
                  }
                | undefined
              backups?:
                | {
                    available?: boolean | undefined
                    enabled?: boolean | undefined
                    last_successful?: string | undefined
                    schedule?:
                      | {
                          day?:
                            | 'Scheduling'
                            | 'Sunday'
                            | 'Monday'
                            | 'Tuesday'
                            | 'Wednesday'
                            | 'Thursday'
                            | 'Friday'
                            | 'Saturday'
                            | undefined
                          window?:
                            | 'Scheduling'
                            | 'W0'
                            | 'W2'
                            | 'W4'
                            | 'W6'
                            | 'W8'
                            | 'W10'
                            | 'W12'
                            | 'W14'
                            | 'W16'
                            | 'W18'
                            | 'W20'
                            | 'W22'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              capabilities?: string[] | undefined
              created?: string | undefined
              disk_encryption?: (string | null) | undefined
              group?: string | undefined
              has_user_data?: boolean | undefined
              host_uuid?: string | undefined
              hypervisor?: 'kvm' | undefined
              id?: number | undefined
              image?: {} | undefined
              interface_generation?: 'legacy_config' | 'linode' | undefined
              ipv4?: string[] | undefined
              ipv6?: (string | null) | undefined
              label?: string | undefined
              lke_cluster_id?: (number | null) | undefined
              maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
              placement_group?:
                | ({
                    id?: number | undefined
                    label?: string | undefined
                    placement_group_policy?: 'strict' | 'flexible' | undefined
                    placement_group_type?: 'anti_affinity:local' | undefined
                  } | null)
                | undefined
              region?: string | undefined
              specs?:
                | {
                    disk?: number | undefined
                    gpus?: number | undefined
                    memory?: number | undefined
                    transfer?: number | undefined
                    vcpus?: number | undefined
                  }
                | undefined
              status?:
                | 'running'
                | 'offline'
                | 'booting'
                | 'busy'
                | 'rebooting'
                | 'shutting_down'
                | 'provisioning'
                | 'deleting'
                | 'migrating'
                | 'rebuilding'
                | 'cloning'
                | 'restoring'
                | 'stopped'
                | 'billing_suspension'
                | undefined
              tags?: string[] | undefined
              type?: string | undefined
              updated?: string | undefined
              watchdog_enabled?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                authorized_keys?: string[] | undefined
                authorized_users?: string[] | undefined
                booted?: boolean | undefined
                disk_encryption?: 'enabled' | 'disabled' | undefined
                image?: (string | null) | undefined
                maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                metadata?: { user_data?: string | undefined } | undefined
                root_pass?: string | undefined
                stackscript_data?: { [x: string]: unknown } | undefined
                stackscript_id?: number | undefined
                type?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/rescue': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                devices?:
                  | {
                      sda?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdb?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdc?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdd?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sde?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdf?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdg?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                devices?:
                  | {
                      sda?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdb?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdc?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdd?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sde?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdf?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                      sdg?:
                        | { disk_id?: number | undefined; volume_id?: (number | null) | undefined }
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/resize': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                allow_auto_disk_resize?: boolean | undefined
                migration_type?: 'warm' | 'cold' | undefined
                type: string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                allow_auto_disk_resize?: boolean | undefined
                migration_type?: 'warm' | 'cold' | undefined
                type: string
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/shutdown': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/stats': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              cpu?: number[][] | undefined
              io?: { io?: number[][] | undefined; swap?: number[][] | undefined } | undefined
              netv4?:
                | {
                    in?: number[][] | undefined
                    out?: number[][] | undefined
                    private_in?: number[][] | undefined
                    private_out?: number[][] | undefined
                  }
                | undefined
              netv6?:
                | {
                    in?: number[][] | undefined
                    out?: number[][] | undefined
                    private_in?: number[][] | undefined
                    private_out?: number[][] | undefined
                  }
                | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/stats/:year/:month': {
      $get:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; year: number; month: number }
            }
            output: {
              cpu?: number[][] | undefined
              io?: { io?: number[][] | undefined; swap?: number[][] | undefined } | undefined
              netv4?:
                | {
                    in?: number[][] | undefined
                    out?: number[][] | undefined
                    private_in?: number[][] | undefined
                    private_out?: number[][] | undefined
                  }
                | undefined
              netv6?:
                | {
                    in?: number[][] | undefined
                    out?: number[][] | undefined
                    private_in?: number[][] | undefined
                    private_out?: number[][] | undefined
                  }
                | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; year: number; month: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/transfer': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              billable?: number | undefined
              quota?: number | undefined
              used?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/transfer/:year/:month': {
      $get:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; year: number; month: number }
            }
            output: {
              bytes_in?: number | undefined
              bytes_out?: number | undefined
              bytes_total?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; linodeId: number; year: number; month: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/upgrade-interfaces': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                config_id?: (number | null) | undefined
                dry_run?: boolean | undefined
              } | null
            }
            output: {
              config_id?: number | undefined
              dry_run?: boolean | undefined
              interfaces?:
                | (
                    | {
                        created?: string | undefined
                        default_route?:
                          | ({ ipv4?: boolean | undefined; ipv6?: boolean | undefined } | null)
                          | undefined
                        id?: number | undefined
                        mac_address?: string | undefined
                        public?:
                          | {
                              ipv4?:
                                | {
                                    addresses?:
                                      | {
                                          address?: string | undefined
                                          primary?: boolean | undefined
                                        }[]
                                      | undefined
                                    shared?:
                                      | {
                                          address?: string | undefined
                                          linode_id?: string | undefined
                                        }[]
                                      | undefined
                                  }
                                | undefined
                              ipv6?:
                                | {
                                    ranges?:
                                      | {
                                          range?: string | undefined
                                          route_target?: string | undefined
                                        }[]
                                      | undefined
                                    shared?:
                                      | {
                                          range?: string | undefined
                                          route_target?: string | undefined
                                        }[]
                                      | undefined
                                    slaac?:
                                      | {
                                          address?: string | undefined
                                          prefix?: number | undefined
                                        }[]
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        updated?: string | undefined
                        version?: number | undefined
                        vlan?: ({ [x: string]: unknown } | null) | undefined
                        vpc?: ({} | null) | undefined
                      }
                    | {
                        created?: string | undefined
                        id?: number | undefined
                        mac_address?: string | undefined
                        public?: ({ [x: string]: unknown } | null) | undefined
                        updated?: string | undefined
                        version?: number | undefined
                        vlan?:
                          | {
                              ipam_address?: (string | null) | undefined
                              vlan_label?: string | undefined
                            }
                          | undefined
                        vpc?: ({ [x: string]: unknown } | null) | undefined
                      }
                    | {
                        created?: string | undefined
                        default_route?: { ipv4?: boolean | undefined } | undefined
                        id?: number | undefined
                        mac_address?: string | undefined
                        public?: ({} | null) | undefined
                        updated?: string | undefined
                        version?: number | undefined
                        vlan?: ({} | null) | undefined
                        vpc?:
                          | {
                              ipv4?:
                                | {
                                    addresses?:
                                      | {
                                          address?: string | undefined
                                          nat_1_1_address?: (string | null) | undefined
                                          primary?: boolean | undefined
                                        }[]
                                      | undefined
                                    ranges?: { range?: string | undefined }[] | undefined
                                  }
                                | undefined
                              subnet_id?: number | undefined
                              vpc_id?: number | undefined
                            }
                          | undefined
                      }
                  )[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                config_id?: (number | null) | undefined
                dry_run?: boolean | undefined
              } | null
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/instances/:linodeId/volumes': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    encryption?: 'enabled' | 'disabled' | undefined
                    filesystem_path?: string | undefined
                    hardware_type?: 'hdd' | 'nvme' | undefined
                    id?: number | undefined
                    io_ready?: boolean | undefined
                    label?: string | undefined
                    linode_id?: (number | null) | undefined
                    linode_label?: (string | null) | undefined
                    region?: string | undefined
                    size?: number | undefined
                    status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
                    tags?: string[] | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/kernels': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    architecture?: 'x86_64' | 'i386' | undefined
                    built?: string | undefined
                    deprecated?: boolean | undefined
                    id?: string | undefined
                    kvm?: boolean | undefined
                    label?: string | undefined
                    pvops?: boolean | undefined
                    version?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/kernels/:kernelId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; kernelId: string } }
            output: {
              architecture?: 'x86_64' | 'i386' | undefined
              built?: string | undefined
              deprecated?: boolean | undefined
              id?: string | undefined
              kvm?: boolean | undefined
              label?: string | undefined
              pvops?: boolean | undefined
              version?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; kernelId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/stackscripts': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                created?: string | undefined
                deployments_active?: number | undefined
                deployments_total?: number | undefined
                description?: string | undefined
                id?: number | undefined
                images?: string[] | undefined
                is_public?: boolean | undefined
                label?: string | undefined
                mine?: boolean | undefined
                rev_note?: string | undefined
                script?: string | undefined
                updated?: string | undefined
                user_defined_fields?:
                  | {
                      default?: string | undefined
                      example: string
                      label: string
                      manyOf?: string | undefined
                      name: string
                      oneOf?: string | undefined
                    }[]
                  | undefined
                user_gravatar_id?: string | undefined
                username?: string | undefined
              }
            }
            output: {
              created?: string | undefined
              deployments_active?: number | undefined
              deployments_total?: number | undefined
              description?: string | undefined
              id?: number | undefined
              images?: string[] | undefined
              is_public?: boolean | undefined
              label?: string | undefined
              mine?: boolean | undefined
              rev_note?: string | undefined
              script?: string | undefined
              updated?: string | undefined
              user_defined_fields?:
                | {
                    default?: string | undefined
                    example: string
                    label: string
                    manyOf?: string | undefined
                    name: string
                    oneOf?: string | undefined
                  }[]
                | undefined
              user_gravatar_id?: string | undefined
              username?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                created?: string | undefined
                deployments_active?: number | undefined
                deployments_total?: number | undefined
                description?: string | undefined
                id?: number | undefined
                images?: string[] | undefined
                is_public?: boolean | undefined
                label?: string | undefined
                mine?: boolean | undefined
                rev_note?: string | undefined
                script?: string | undefined
                updated?: string | undefined
                user_defined_fields?:
                  | {
                      default?: string | undefined
                      example: string
                      label: string
                      manyOf?: string | undefined
                      name: string
                      oneOf?: string | undefined
                    }[]
                  | undefined
                user_gravatar_id?: string | undefined
                username?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    deployments_active?: number | undefined
                    deployments_total?: number | undefined
                    description?: string | undefined
                    id?: number | undefined
                    images?: string[] | undefined
                    is_public?: boolean | undefined
                    label?: string | undefined
                    mine?: boolean | undefined
                    rev_note?: string | undefined
                    script?: string | undefined
                    updated?: string | undefined
                    user_defined_fields?:
                      | {
                          default?: string | undefined
                          example: string
                          label: string
                          manyOf?: string | undefined
                          name: string
                          oneOf?: string | undefined
                        }[]
                      | undefined
                    user_gravatar_id?: string | undefined
                    username?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/stackscripts/:stackscriptId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; stackscriptId: string } }
            output: {
              created?: string | undefined
              deployments_active?: number | undefined
              deployments_total?: number | undefined
              description?: string | undefined
              id?: number | undefined
              images?: string[] | undefined
              is_public?: boolean | undefined
              label?: string | undefined
              mine?: boolean | undefined
              rev_note?: string | undefined
              script?: string | undefined
              updated?: string | undefined
              user_defined_fields?:
                | {
                    default?: string | undefined
                    example: string
                    label: string
                    manyOf?: string | undefined
                    name: string
                    oneOf?: string | undefined
                  }[]
                | undefined
              user_gravatar_id?: string | undefined
              username?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; stackscriptId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; stackscriptId: string } } & {
              json: {
                created?: string | undefined
                deployments_active?: number | undefined
                deployments_total?: number | undefined
                description?: string | undefined
                id?: number | undefined
                images?: string[] | undefined
                is_public?: boolean | undefined
                label?: string | undefined
                mine?: boolean | undefined
                rev_note?: string | undefined
                script?: string | undefined
                updated?: string | undefined
                user_defined_fields?:
                  | {
                      default?: string | undefined
                      example: string
                      label: string
                      manyOf?: string | undefined
                      name: string
                      oneOf?: string | undefined
                    }[]
                  | undefined
                user_gravatar_id?: string | undefined
                username?: string | undefined
              }
            }
            output: {
              created?: string | undefined
              deployments_active?: number | undefined
              deployments_total?: number | undefined
              description?: string | undefined
              id?: number | undefined
              images?: string[] | undefined
              is_public?: boolean | undefined
              label?: string | undefined
              mine?: boolean | undefined
              rev_note?: string | undefined
              script?: string | undefined
              updated?: string | undefined
              user_defined_fields?:
                | {
                    default?: string | undefined
                    example: string
                    label: string
                    manyOf?: string | undefined
                    name: string
                    oneOf?: string | undefined
                  }[]
                | undefined
              user_gravatar_id?: string | undefined
              username?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; stackscriptId: string } } & {
              json: {
                created?: string | undefined
                deployments_active?: number | undefined
                deployments_total?: number | undefined
                description?: string | undefined
                id?: number | undefined
                images?: string[] | undefined
                is_public?: boolean | undefined
                label?: string | undefined
                mine?: boolean | undefined
                rev_note?: string | undefined
                script?: string | undefined
                updated?: string | undefined
                user_defined_fields?:
                  | {
                      default?: string | undefined
                      example: string
                      label: string
                      manyOf?: string | undefined
                      name: string
                      oneOf?: string | undefined
                    }[]
                  | undefined
                user_gravatar_id?: string | undefined
                username?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; stackscriptId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; stackscriptId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/types': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    addons?:
                      | {
                          backups?:
                            | {
                                price?:
                                  | { hourly?: number | undefined; monthly?: number | undefined }
                                  | undefined
                                region_prices?:
                                  | {
                                      hourly?: number | undefined
                                      id?: string | undefined
                                      monthly?: number | undefined
                                    }[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    class?:
                      | 'nanode'
                      | 'standard'
                      | 'dedicated'
                      | 'premium'
                      | 'gpu'
                      | 'accelerated'
                      | 'highmem'
                      | undefined
                    disk?: number | undefined
                    gpus?: number | undefined
                    id?: string | undefined
                    label?: string | undefined
                    memory?: number | undefined
                    network_out?: number | undefined
                    price?:
                      | { hourly?: number | undefined; monthly?: number | undefined }
                      | undefined
                    region_prices?:
                      | {
                          hourly?: number | undefined
                          id?: string | undefined
                          monthly?: number | undefined
                        }[]
                      | undefined
                    successor?: (string | null) | undefined
                    transfer?: number | undefined
                    vcpus?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/linode/types/:typeId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; typeId: string } }
            output: {
              addons?:
                | {
                    backups?:
                      | {
                          price?:
                            | { hourly?: number | undefined; monthly?: number | undefined }
                            | undefined
                          region_prices?:
                            | {
                                hourly?: number | undefined
                                id?: string | undefined
                                monthly?: number | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              class?:
                | 'nanode'
                | 'standard'
                | 'dedicated'
                | 'premium'
                | 'gpu'
                | 'accelerated'
                | 'highmem'
                | undefined
              disk?: number | undefined
              gpus?: number | undefined
              id?: string | undefined
              label?: string | undefined
              memory?: number | undefined
              network_out?: number | undefined
              price?: { hourly?: number | undefined; monthly?: number | undefined } | undefined
              region_prices?:
                | {
                    hourly?: number | undefined
                    id?: string | undefined
                    monthly?: number | undefined
                  }[]
                | undefined
              successor?: (string | null) | undefined
              transfer?: number | undefined
              vcpus?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; typeId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                apl_enabled?: boolean | undefined
                control_plane?:
                  | {
                      acl?:
                        | {
                            addresses?:
                              | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                              | undefined
                            enabled?: boolean | undefined
                            'revision-id'?: string | undefined
                          }
                        | undefined
                      audit_logs_enabled?: boolean | undefined
                      high_availability?: boolean | undefined
                    }
                  | undefined
                k8s_version: string
                label: string
                node_pools: {
                  autoscaler?:
                    | {
                        enabled?: boolean | undefined
                        max?: number | undefined
                        min?: number | undefined
                      }
                    | undefined
                  count: number
                  disk_encryption?: 'enabled' | 'disabled' | undefined
                  disks?:
                    | { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }[]
                    | undefined
                  k8s_version?: string | undefined
                  label?: string | undefined
                  labels?: { [x: string]: string } | undefined
                  tags?: string[] | undefined
                  taints?:
                    | {
                        effect: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute'
                        key: string
                        value: string
                      }[]
                    | undefined
                  type: string
                  update_strategy?: 'rolling_update' | 'on_recycle' | undefined
                }[]
                region: string
                stack_type?: 'ipv4' | 'ipv4-ipv6' | undefined
                subnet_id?: number | undefined
                tags?: string[] | undefined
                tier?: 'standard' | 'enterprise' | undefined
                vpc_id?: number | undefined
              }
            }
            output: {
              apl_enabled?: boolean | undefined
              control_plane?:
                | {
                    audit_logs_enabled?: boolean | undefined
                    high_availability?: boolean | undefined
                  }
                | undefined
              created?: string | undefined
              id?: number | undefined
              k8s_version?: string | undefined
              label?: string | undefined
              region?: string | undefined
              stack_type?: 'ipv4' | 'ipv4-ipv6' | undefined
              subnet_id?: number | undefined
              tags?: string[] | undefined
              tier?: 'standard' | 'enterprise' | undefined
              updated?: string | undefined
              vpc_id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                apl_enabled?: boolean | undefined
                control_plane?:
                  | {
                      acl?:
                        | {
                            addresses?:
                              | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                              | undefined
                            enabled?: boolean | undefined
                            'revision-id'?: string | undefined
                          }
                        | undefined
                      audit_logs_enabled?: boolean | undefined
                      high_availability?: boolean | undefined
                    }
                  | undefined
                k8s_version: string
                label: string
                node_pools: {
                  autoscaler?:
                    | {
                        enabled?: boolean | undefined
                        max?: number | undefined
                        min?: number | undefined
                      }
                    | undefined
                  count: number
                  disk_encryption?: 'enabled' | 'disabled' | undefined
                  disks?:
                    | { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }[]
                    | undefined
                  k8s_version?: string | undefined
                  label?: string | undefined
                  labels?: { [x: string]: string } | undefined
                  tags?: string[] | undefined
                  taints?:
                    | {
                        effect: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute'
                        key: string
                        value: string
                      }[]
                    | undefined
                  type: string
                  update_strategy?: 'rolling_update' | 'on_recycle' | undefined
                }[]
                region: string
                stack_type?: 'ipv4' | 'ipv4-ipv6' | undefined
                subnet_id?: number | undefined
                tags?: string[] | undefined
                tier?: 'standard' | 'enterprise' | undefined
                vpc_id?: number | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    apl_enabled?: boolean | undefined
                    control_plane?:
                      | {
                          audit_logs_enabled?: boolean | undefined
                          high_availability?: boolean | undefined
                        }
                      | undefined
                    created?: string | undefined
                    id?: number | undefined
                    k8s_version?: string | undefined
                    label?: string | undefined
                    region?: string | undefined
                    stack_type?: 'ipv4' | 'ipv4-ipv6' | undefined
                    subnet_id?: number | undefined
                    tags?: string[] | undefined
                    tier?: 'standard' | 'enterprise' | undefined
                    updated?: string | undefined
                    vpc_id?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              apl_enabled?: boolean | undefined
              control_plane?:
                | {
                    audit_logs_enabled?: boolean | undefined
                    high_availability?: boolean | undefined
                  }
                | undefined
              created?: string | undefined
              id?: number | undefined
              k8s_version?: string | undefined
              label?: string | undefined
              region?: string | undefined
              stack_type?: 'ipv4' | 'ipv4-ipv6' | undefined
              subnet_id?: number | undefined
              tags?: string[] | undefined
              tier?: 'standard' | 'enterprise' | undefined
              updated?: string | undefined
              vpc_id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put: {
        input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
          json: {
            control_plane?:
              | {
                  acl?:
                    | {
                        addresses?:
                          | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                          | undefined
                        enabled?: boolean | undefined
                        'revision-id'?: string | undefined
                      }
                    | undefined
                  audit_logs_enabled?: boolean | undefined
                  high_availability?: boolean | undefined
                }
              | undefined
            k8s_version?: string | undefined
            label?: string | undefined
            tags?: string[] | undefined
          }
        }
        output: {
          apl_enabled?: boolean | undefined
          control_plane?:
            | { audit_logs_enabled?: boolean | undefined; high_availability?: boolean | undefined }
            | undefined
          created?: string | undefined
          id?: number | undefined
          k8s_version?: string | undefined
          label?: string | undefined
          region?: string | undefined
          stack_type?: 'ipv4' | 'ipv4-ipv6' | undefined
          subnet_id?: number | undefined
          tags?: string[] | undefined
          tier?: 'standard' | 'enterprise' | undefined
          updated?: string | undefined
          vpc_id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/api-endpoints': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              data?: { endpoint?: string | undefined }[] | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/control_plane_acl': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              acl?:
                | {
                    addresses?:
                      | {
                          ipv4?: { [x: string]: unknown } | undefined
                          ipv6?: { [x: string]: unknown } | undefined
                        }
                      | undefined
                    'revision-id'?: { [x: string]: unknown } | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
              json: {
                acl?:
                  | {
                      addresses?:
                        | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                        | undefined
                      enabled?: boolean | undefined
                      'revision-id'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              acl?:
                | {
                    addresses?:
                      | {
                          ipv4?: { [x: string]: unknown } | undefined
                          ipv6?: { [x: string]: unknown } | undefined
                        }
                      | undefined
                    'revision-id'?: { [x: string]: unknown } | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
              json: {
                acl?:
                  | {
                      addresses?:
                        | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                        | undefined
                      enabled?: boolean | undefined
                      'revision-id'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
              json: {
                acl?:
                  | {
                      addresses?:
                        | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                        | undefined
                      enabled?: boolean | undefined
                      'revision-id'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
              json: {
                acl?:
                  | {
                      addresses?:
                        | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                        | undefined
                      enabled?: boolean | undefined
                      'revision-id'?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/dashboard': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/kubeconfig': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: { kubeconfig?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/nodes/:nodeId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; nodeId: string } }
            output: {
              id?: string | undefined
              instance_id?: (number | null) | undefined
              status?: 'ready' | 'not_ready' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; nodeId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; nodeId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; nodeId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/nodes/:nodeId/recycle': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; nodeId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; nodeId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/pools': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
              json: {
                autoscaler?:
                  | {
                      enabled?: boolean | undefined
                      max?: number | undefined
                      min?: number | undefined
                    }
                  | undefined
                count: number
                disk_encryption?: 'enabled' | 'disabled' | undefined
                disks?:
                  | { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }[]
                  | undefined
                k8s_version?: string | undefined
                label?: string | undefined
                labels?: { [x: string]: string } | undefined
                tags?: string[] | undefined
                taints?:
                  | {
                      effect: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute'
                      key: string
                      value: string
                    }[]
                  | undefined
                type: string
                update_strategy?: 'rolling_update' | 'on_recycle' | undefined
              }
            }
            output: {
              autoscaler?:
                | {
                    enabled?: boolean | undefined
                    max?: number | undefined
                    min?: number | undefined
                  }
                | undefined
              count?: number | undefined
              disk_encryption?: 'enabled' | 'disabled' | undefined
              disks?: { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }[] | undefined
              id?: number | undefined
              k8s_version?: string | undefined
              label?: string | undefined
              labels?: { [x: string]: string } | undefined
              nodes?:
                | {
                    id?: string | undefined
                    instance_id?: (number | null) | undefined
                    status?: 'ready' | 'not_ready' | undefined
                  }[]
                | undefined
              tags?: string[] | undefined
              taints?:
                | {
                    effect?: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute' | undefined
                    key?: string | undefined
                    value?: string | undefined
                  }[]
                | undefined
              type?: string | undefined
              update_strategy?: 'rolling_update' | 'on_recycle' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
              json: {
                autoscaler?:
                  | {
                      enabled?: boolean | undefined
                      max?: number | undefined
                      min?: number | undefined
                    }
                  | undefined
                count: number
                disk_encryption?: 'enabled' | 'disabled' | undefined
                disks?:
                  | { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }[]
                  | undefined
                k8s_version?: string | undefined
                label?: string | undefined
                labels?: { [x: string]: string } | undefined
                tags?: string[] | undefined
                taints?:
                  | {
                      effect: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute'
                      key: string
                      value: string
                    }[]
                  | undefined
                type: string
                update_strategy?: 'rolling_update' | 'on_recycle' | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              data?:
                | {
                    autoscaler?:
                      | {
                          enabled?: boolean | undefined
                          max?: number | undefined
                          min?: number | undefined
                        }
                      | undefined
                    count?: number | undefined
                    disk_encryption?: 'enabled' | 'disabled' | undefined
                    disks?:
                      | { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }[]
                      | undefined
                    id?: number | undefined
                    k8s_version?: string | undefined
                    label?: string | undefined
                    labels?: { [x: string]: string } | undefined
                    nodes?:
                      | {
                          id?: string | undefined
                          instance_id?: (number | null) | undefined
                          status?: 'ready' | 'not_ready' | undefined
                        }[]
                      | undefined
                    tags?: string[] | undefined
                    taints?:
                      | {
                          effect?: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute' | undefined
                          key?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    type?: string | undefined
                    update_strategy?: 'rolling_update' | 'on_recycle' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/pools/:poolId': {
      $get: {
        input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; poolId: number } }
        output: {
          autoscaler?:
            | { enabled?: boolean | undefined; max?: number | undefined; min?: number | undefined }
            | undefined
          count?: number | undefined
          disk_encryption?: 'enabled' | 'disabled' | undefined
          disks?: { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }[] | undefined
          id?: number | undefined
          k8s_version?: string | undefined
          label?: string | undefined
          labels?: { [x: string]: string } | undefined
          nodes?:
            | {
                id?: string | undefined
                instance_id?: (number | null) | undefined
                status?: 'ready' | 'not_ready' | undefined
              }[]
            | undefined
          tags?: string[] | undefined
          taints?:
            | {
                effect?: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute' | undefined
                key?: string | undefined
                value?: string | undefined
              }[]
            | undefined
          type?: string | undefined
          update_strategy?: 'rolling_update' | 'on_recycle' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; poolId: number } } & {
          json: {
            autoscaler?:
              | {
                  enabled?: boolean | undefined
                  max?: number | undefined
                  min?: number | undefined
                }
              | undefined
            count?: number | undefined
            labels?: { [x: string]: string } | undefined
            tags?: string[] | undefined
            taints?:
              | {
                  effect: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute'
                  key: string
                  value: string
                }[]
              | undefined
          }
        }
        output: {
          autoscaler?:
            | { enabled?: boolean | undefined; max?: number | undefined; min?: number | undefined }
            | undefined
          count?: number | undefined
          disk_encryption?: 'enabled' | 'disabled' | undefined
          disks?: { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }[] | undefined
          id?: number | undefined
          k8s_version?: string | undefined
          label?: string | undefined
          labels?: { [x: string]: string } | undefined
          nodes?:
            | {
                id?: string | undefined
                instance_id?: (number | null) | undefined
                status?: 'ready' | 'not_ready' | undefined
              }[]
            | undefined
          tags?: string[] | undefined
          taints?:
            | {
                effect?: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute' | undefined
                key?: string | undefined
                value?: string | undefined
              }[]
            | undefined
          type?: string | undefined
          update_strategy?: 'rolling_update' | 'on_recycle' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; poolId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; poolId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/pools/:poolId/recycle': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; poolId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number; poolId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/recycle': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/regenerate': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
              json: { kubeconfig?: boolean | undefined; servicetoken?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } } & {
              json: { kubeconfig?: boolean | undefined; servicetoken?: boolean | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/clusters/:clusterId/servicetoken': {
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/tiers/:tier/versions': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta'; tier: 'standard' | 'enterprise' } }
            output: {
              data?: { id: string; tier: 'standard' | 'enterprise' }[] | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; tier: 'standard' | 'enterprise' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/tiers/:tier/versions/:version': {
      $get:
        | {
            input: {
              param: { apiVersion: 'v4beta'; tier: 'standard' | 'enterprise'; version: string }
            }
            output: { id: string; tier: 'standard' | 'enterprise' }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4beta'; tier: 'standard' | 'enterprise'; version: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/types': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    id?: string | undefined
                    label?: string | undefined
                    price?:
                      | { hourly?: number | undefined; monthly?: number | undefined }
                      | undefined
                    region_prices?:
                      | {
                          hourly?: number | undefined
                          id?: string | undefined
                          monthly?: number | undefined
                        }[]
                      | undefined
                    transfer?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/versions': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?: { id: string }[] | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/lke/versions/:version': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; version: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; version: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/longview/clients': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                api_key?: string | undefined
                apps?:
                  | {
                      apache?: boolean | undefined
                      mysql?: boolean | undefined
                      nginx?: boolean | undefined
                    }
                  | undefined
                created?: string | undefined
                id?: number | undefined
                install_code?: string | undefined
                label?: string | undefined
                updated?: string | undefined
              }
            }
            output: {
              api_key?: string | undefined
              apps?:
                | {
                    apache?: boolean | undefined
                    mysql?: boolean | undefined
                    nginx?: boolean | undefined
                  }
                | undefined
              created?: string | undefined
              id?: number | undefined
              install_code?: string | undefined
              label?: string | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                api_key?: string | undefined
                apps?:
                  | {
                      apache?: boolean | undefined
                      mysql?: boolean | undefined
                      nginx?: boolean | undefined
                    }
                  | undefined
                created?: string | undefined
                id?: number | undefined
                install_code?: string | undefined
                label?: string | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    api_key?: string | undefined
                    apps?:
                      | {
                          apache?: boolean | undefined
                          mysql?: boolean | undefined
                          nginx?: boolean | undefined
                        }
                      | undefined
                    created?: string | undefined
                    id?: number | undefined
                    install_code?: string | undefined
                    label?: string | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/longview/clients/:clientId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: number } }
            output: {
              api_key?: string | undefined
              apps?:
                | {
                    apache?: boolean | undefined
                    mysql?: boolean | undefined
                    nginx?: boolean | undefined
                  }
                | undefined
              created?: string | undefined
              id?: number | undefined
              install_code?: string | undefined
              label?: string | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: number } } & {
              json: {
                api_key?: string | undefined
                apps?:
                  | {
                      apache?: boolean | undefined
                      mysql?: boolean | undefined
                      nginx?: boolean | undefined
                    }
                  | undefined
                created?: string | undefined
                id?: number | undefined
                install_code?: string | undefined
                label?: string | undefined
                updated?: string | undefined
              }
            }
            output: {
              api_key?: string | undefined
              apps?:
                | {
                    apache?: boolean | undefined
                    mysql?: boolean | undefined
                    nginx?: boolean | undefined
                  }
                | undefined
              created?: string | undefined
              id?: number | undefined
              install_code?: string | undefined
              label?: string | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: number } } & {
              json: {
                api_key?: string | undefined
                apps?:
                  | {
                      apache?: boolean | undefined
                      mysql?: boolean | undefined
                      nginx?: boolean | undefined
                    }
                  | undefined
                created?: string | undefined
                id?: number | undefined
                install_code?: string | undefined
                label?: string | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clientId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/longview/plan': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              clients_included?: number | undefined
              id?: 'longview-3' | 'longview-10' | 'longview-40' | 'longview-100' | undefined
              label?: string | undefined
              price?: { hourly?: number | undefined; monthly?: number | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                longview_subscription?:
                  | 'longview-3'
                  | 'longview-10'
                  | 'longview-40'
                  | 'longview-100'
                  | undefined
              }
            }
            output: {
              clients_included?: number | undefined
              id?: 'longview-3' | 'longview-10' | 'longview-40' | 'longview-100' | undefined
              label?: string | undefined
              price?: { hourly?: number | undefined; monthly?: number | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                longview_subscription?:
                  | 'longview-3'
                  | 'longview-10'
                  | 'longview-40'
                  | 'longview-100'
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/longview/subscriptions': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    clients_included?: number | undefined
                    id?: 'longview-3' | 'longview-10' | 'longview-40' | 'longview-100' | undefined
                    label?: string | undefined
                    price?:
                      | { hourly?: number | undefined; monthly?: number | undefined }
                      | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/longview/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; subscriptionId: string } }
            output: {
              clients_included?: number | undefined
              id?: 'longview-3' | 'longview-10' | 'longview-40' | 'longview-100' | undefined
              label?: string | undefined
              price?: { hourly?: number | undefined; monthly?: number | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; subscriptionId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/longview/types': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    id?: string | undefined
                    label?: string | undefined
                    price?:
                      | { hourly?: number | undefined; monthly?: number | undefined }
                      | undefined
                    region_prices?:
                      | {
                          hourly?: number | undefined
                          id?: string | undefined
                          monthly?: number | undefined
                        }[]
                      | undefined
                    transfer?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/maintenance/policies': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              data?:
                | {
                    description?: string | undefined
                    is_default?: boolean | undefined
                    label?: string | undefined
                    notification_period_sec?: number | undefined
                    slug?: string | undefined
                    type?: 'migrate' | 'power_off_on' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/contacts': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                email?: string | undefined
                group?: (string | null) | undefined
                id?: number | undefined
                name?: string | undefined
                phone?:
                  | {
                      primary?: (string | null) | undefined
                      secondary?: (string | null) | undefined
                    }
                  | undefined
                updated?: string | undefined
              }
            }
            output: {
              email?: string | undefined
              group?: (string | null) | undefined
              id?: number | undefined
              name?: string | undefined
              phone?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                email?: string | undefined
                group?: (string | null) | undefined
                id?: number | undefined
                name?: string | undefined
                phone?:
                  | {
                      primary?: (string | null) | undefined
                      secondary?: (string | null) | undefined
                    }
                  | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    email?: string | undefined
                    group?: (string | null) | undefined
                    id?: number | undefined
                    name?: string | undefined
                    phone?:
                      | {
                          primary?: (string | null) | undefined
                          secondary?: (string | null) | undefined
                        }
                      | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/contacts/:contactId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; contactId: number } }
            output: {
              email?: string | undefined
              group?: (string | null) | undefined
              id?: number | undefined
              name?: string | undefined
              phone?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; contactId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; contactId: number } } & {
              json: {
                email?: string | undefined
                group?: (string | null) | undefined
                id?: number | undefined
                name?: string | undefined
                phone?:
                  | {
                      primary?: (string | null) | undefined
                      secondary?: (string | null) | undefined
                    }
                  | undefined
                updated?: string | undefined
              }
            }
            output: {
              email?: string | undefined
              group?: (string | null) | undefined
              id?: number | undefined
              name?: string | undefined
              phone?:
                | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
                | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; contactId: number } } & {
              json: {
                email?: string | undefined
                group?: (string | null) | undefined
                id?: number | undefined
                name?: string | undefined
                phone?:
                  | {
                      primary?: (string | null) | undefined
                      secondary?: (string | null) | undefined
                    }
                  | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; contactId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; contactId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/credentials': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                id?: number | undefined
                label?: string | undefined
                last_decrypted?: string | undefined
                password?: string | undefined
                username?: string | undefined
              }
            }
            output: {
              id?: number | undefined
              label?: string | undefined
              last_decrypted?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                id?: number | undefined
                label?: string | undefined
                last_decrypted?: string | undefined
                password?: string | undefined
                username?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    last_decrypted?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/credentials/sshkey': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: { ssh_key?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/credentials/:credentialId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; credentialId: number } }
            output: {
              id?: number | undefined
              label?: string | undefined
              last_decrypted?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; credentialId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; credentialId: number } } & {
              json: {
                id?: number | undefined
                label?: string | undefined
                last_decrypted?: string | undefined
              }
            }
            output: {
              id?: number | undefined
              label?: string | undefined
              last_decrypted?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; credentialId: number } } & {
              json: {
                id?: number | undefined
                label?: string | undefined
                last_decrypted?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/credentials/:credentialId/revoke': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; credentialId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; credentialId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/credentials/:credentialId/update': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; credentialId: number } } & {
              json: { password: string; username?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; credentialId: number } } & {
              json: { password: string; username?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/issues': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    entity?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          type?: 'ticket' | undefined
                          url?: string | undefined
                        }
                      | undefined
                    id?: number | undefined
                    services?: number[] | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/issues/:issueId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; issueId: number } }
            output: {
              created?: string | undefined
              entity?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    type?: 'ticket' | undefined
                    url?: string | undefined
                  }
                | undefined
              id?: number | undefined
              services?: number[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; issueId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/linode-settings': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    group?: string | undefined
                    id?: number | undefined
                    label?: string | undefined
                    ssh?:
                      | {
                          access?: boolean | undefined
                          ip?: string | undefined
                          port?: (number | null) | undefined
                          user?: (string | null) | undefined
                        }
                      | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/linode-settings/:linodeId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              group?: string | undefined
              id?: number | undefined
              label?: string | undefined
              ssh?:
                | {
                    access?: boolean | undefined
                    ip?: string | undefined
                    port?: (number | null) | undefined
                    user?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                group?: string | undefined
                id?: number | undefined
                label?: string | undefined
                ssh?:
                  | {
                      access?: boolean | undefined
                      ip?: string | undefined
                      port?: (number | null) | undefined
                      user?: (string | null) | undefined
                    }
                  | undefined
              }
            }
            output: {
              group?: string | undefined
              id?: number | undefined
              label?: string | undefined
              ssh?:
                | {
                    access?: boolean | undefined
                    ip?: string | undefined
                    port?: (number | null) | undefined
                    user?: (string | null) | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; linodeId: number } } & {
              json: {
                group?: string | undefined
                id?: number | undefined
                label?: string | undefined
                ssh?:
                  | {
                      access?: boolean | undefined
                      ip?: string | undefined
                      port?: (number | null) | undefined
                      user?: (string | null) | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/services': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                address?: string | undefined
                body?: (string | null) | undefined
                consultation_group?: string | undefined
                created?: string | undefined
                credentials?: number[] | undefined
                id?: number | undefined
                label?: string | undefined
                notes?: (string | null) | undefined
                region?: (string | null) | undefined
                service_type?: 'url' | 'tcp' | undefined
                status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
                timeout?: number | undefined
                updated?: string | undefined
              }
            }
            output: {
              address?: string | undefined
              body?: (string | null) | undefined
              consultation_group?: string | undefined
              created?: string | undefined
              credentials?: number[] | undefined
              id?: number | undefined
              label?: string | undefined
              notes?: (string | null) | undefined
              region?: (string | null) | undefined
              service_type?: 'url' | 'tcp' | undefined
              status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
              timeout?: number | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                address?: string | undefined
                body?: (string | null) | undefined
                consultation_group?: string | undefined
                created?: string | undefined
                credentials?: number[] | undefined
                id?: number | undefined
                label?: string | undefined
                notes?: (string | null) | undefined
                region?: (string | null) | undefined
                service_type?: 'url' | 'tcp' | undefined
                status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
                timeout?: number | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    address?: string | undefined
                    body?: (string | null) | undefined
                    consultation_group?: string | undefined
                    created?: string | undefined
                    credentials?: number[] | undefined
                    id?: number | undefined
                    label?: string | undefined
                    notes?: (string | null) | undefined
                    region?: (string | null) | undefined
                    service_type?: 'url' | 'tcp' | undefined
                    status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
                    timeout?: number | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/services/:serviceId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } }
            output: {
              address?: string | undefined
              body?: (string | null) | undefined
              consultation_group?: string | undefined
              created?: string | undefined
              credentials?: number[] | undefined
              id?: number | undefined
              label?: string | undefined
              notes?: (string | null) | undefined
              region?: (string | null) | undefined
              service_type?: 'url' | 'tcp' | undefined
              status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
              timeout?: number | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } } & {
              json: {
                address?: string | undefined
                body?: (string | null) | undefined
                consultation_group?: string | undefined
                created?: string | undefined
                credentials?: number[] | undefined
                id?: number | undefined
                label?: string | undefined
                notes?: (string | null) | undefined
                region?: (string | null) | undefined
                service_type?: 'url' | 'tcp' | undefined
                status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
                timeout?: number | undefined
                updated?: string | undefined
              }
            }
            output: {
              address?: string | undefined
              body?: (string | null) | undefined
              consultation_group?: string | undefined
              created?: string | undefined
              credentials?: number[] | undefined
              id?: number | undefined
              label?: string | undefined
              notes?: (string | null) | undefined
              region?: (string | null) | undefined
              service_type?: 'url' | 'tcp' | undefined
              status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
              timeout?: number | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } } & {
              json: {
                address?: string | undefined
                body?: (string | null) | undefined
                consultation_group?: string | undefined
                created?: string | undefined
                credentials?: number[] | undefined
                id?: number | undefined
                label?: string | undefined
                notes?: (string | null) | undefined
                region?: (string | null) | undefined
                service_type?: 'url' | 'tcp' | undefined
                status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
                timeout?: number | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/services/:serviceId/disable': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } }
            output: {
              address?: string | undefined
              body?: (string | null) | undefined
              consultation_group?: string | undefined
              created?: string | undefined
              credentials?: number[] | undefined
              id?: number | undefined
              label?: string | undefined
              notes?: (string | null) | undefined
              region?: (string | null) | undefined
              service_type?: 'url' | 'tcp' | undefined
              status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
              timeout?: number | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/services/:serviceId/enable': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } }
            output: {
              address?: string | undefined
              body?: (string | null) | undefined
              consultation_group?: string | undefined
              created?: string | undefined
              credentials?: number[] | undefined
              id?: number | undefined
              label?: string | undefined
              notes?: (string | null) | undefined
              region?: (string | null) | undefined
              service_type?: 'url' | 'tcp' | undefined
              status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
              timeout?: number | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; serviceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/managed/stats': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    cpu?: { x?: number | undefined; y?: number | undefined }[] | undefined
                    disk?: { x?: number | undefined; y?: number | undefined }[] | undefined
                    net_in?: { x?: number | undefined; y?: number | undefined }[] | undefined
                    net_out?: { x?: number | undefined; y?: number | undefined }[] | undefined
                    swap?: { x?: number | undefined; y?: number | undefined }[] | undefined
                  }
                | string[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/alert-channels': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              data?:
                | {
                    alerts?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          type?: string | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    channel_type?: 'email' | undefined
                    content?:
                      | { email?: { email_addresses?: string[] | undefined } | undefined }
                      | undefined
                    created?: string | undefined
                    created_by?: string | undefined
                    id?: number | undefined
                    label?: string | undefined
                    type?: 'system' | 'user' | undefined
                    updated?: string | undefined
                    updated_by?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/alert-definitions': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              data?:
                | {
                    alert_channels?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          type?: 'email' | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    class?: 'shared' | 'dedicated' | undefined
                    created?: string | undefined
                    created_by?: string | undefined
                    description?: string | undefined
                    entity_ids?: string[] | undefined
                    has_more_resources?: boolean | undefined
                    id?: number | undefined
                    label?: string | undefined
                    rule_criteria?:
                      | {
                          rules?:
                            | {
                                aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                                dimension_filters?:
                                  | {
                                      dimension_label?: string | undefined
                                      label?: string | undefined
                                      operator?:
                                        | 'eq'
                                        | 'neq'
                                        | 'startswith'
                                        | 'endswith'
                                        | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                                label?: string | undefined
                                metric?: string | undefined
                                operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                                threshold?: number | undefined
                                unit?:
                                  | 'number'
                                  | 'byte'
                                  | 'second'
                                  | 'percent'
                                  | 'bit_per_second'
                                  | 'millisecond'
                                  | 'KB'
                                  | 'MB'
                                  | 'GB'
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    service_type?: string | undefined
                    severity?: 0 | 1 | 2 | 3 | undefined
                    status?: 'enabled' | 'disabled' | 'in progress' | 'failed' | undefined
                    trigger_conditions?:
                      | {
                          criteria_condition?: 'ALL' | undefined
                          evaluation_period_seconds?: number | undefined
                          polling_interval_seconds?: number | undefined
                          trigger_occurrences?: number | undefined
                        }
                      | undefined
                    type?: 'user' | 'system' | undefined
                    updated?: string | undefined
                    updated_by?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/dashboards': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              data?:
                | {
                    created: string
                    id: number
                    label: string
                    service_type: string
                    type: 'standard'
                    updated: string
                    widgets: {
                      aggregate_function?: 'min' | 'max' | 'avg' | 'sum' | 'rate' | undefined
                      chart_type?: 'line' | 'area' | undefined
                      color?: string | undefined
                      label?: string | undefined
                      metric?: string | undefined
                      size?: '6' | '12' | undefined
                      unit?:
                        | '%'
                        | 'Bytes'
                        | 'sec'
                        | 'bps'
                        | 'msec'
                        | 'Bps'
                        | 'KB'
                        | 'MB'
                        | 'GB'
                        | 'rate'
                        | 'percentile'
                        | 'ratio'
                        | 'OPS'
                        | 'IOPS'
                        | undefined
                      y_label?: string | undefined
                    }[]
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/dashboards/:dashboardId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta'; dashboardId: number } }
            output: {
              created: string
              id: number
              label: string
              service_type: string
              type: 'standard'
              updated: string
              widgets: {
                aggregate_function?: 'min' | 'max' | 'avg' | 'sum' | 'rate' | undefined
                chart_type?: 'line' | 'area' | undefined
                color?: string | undefined
                label?: string | undefined
                metric?: string | undefined
                size?: '6' | '12' | undefined
                unit?:
                  | '%'
                  | 'Bytes'
                  | 'sec'
                  | 'bps'
                  | 'msec'
                  | 'Bps'
                  | 'KB'
                  | 'MB'
                  | 'GB'
                  | 'rate'
                  | 'percentile'
                  | 'ratio'
                  | 'OPS'
                  | 'IOPS'
                  | undefined
                y_label?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; dashboardId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/services': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              data: { label?: string | undefined; service_type?: string | undefined }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/services/:serviceType': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } }
            output: {
              data: { label?: string | undefined; service_type?: string | undefined }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/services/:serviceType/alert-definitions': {
      $post:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } } & {
              json: {
                channel_ids: number[]
                description?: string | undefined
                entity_ids?: string[] | undefined
                label: string
                rule_criteria: {
                  rules?:
                    | {
                        aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                        dimension_filters?:
                          | {
                              dimension_label?: string | undefined
                              operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        metric?: string | undefined
                        operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                        threshold?: number | undefined
                      }[]
                    | undefined
                }
                severity: 0 | 1 | 2 | 3
                trigger_conditions: {
                  criteria_condition?: 'ALL' | undefined
                  evaluation_period_seconds?: number | undefined
                  polling_interval_seconds?: number | undefined
                  trigger_occurrences?: number | undefined
                }
              }
            }
            output: {
              alert_channels?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    type?: 'email' | undefined
                    url?: string | undefined
                  }[]
                | undefined
              class?: 'shared' | 'dedicated' | undefined
              created?: string | undefined
              created_by?: string | undefined
              description?: string | undefined
              entity_ids?: string[] | undefined
              has_more_resources?: boolean | undefined
              id?: number | undefined
              label?: string | undefined
              rule_criteria?:
                | {
                    rules?:
                      | {
                          aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                          dimension_filters?:
                            | {
                                dimension_label?: string | undefined
                                label?: string | undefined
                                operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          label?: string | undefined
                          metric?: string | undefined
                          operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                          threshold?: number | undefined
                          unit?:
                            | 'number'
                            | 'byte'
                            | 'second'
                            | 'percent'
                            | 'bit_per_second'
                            | 'millisecond'
                            | 'KB'
                            | 'MB'
                            | 'GB'
                            | undefined
                        }[]
                      | undefined
                  }
                | undefined
              service_type?: string | undefined
              severity?: 0 | 1 | 2 | 3 | undefined
              status?: 'enabled' | 'disabled' | 'in progress' | 'failed' | undefined
              trigger_conditions?:
                | {
                    criteria_condition?: 'ALL' | undefined
                    evaluation_period_seconds?: number | undefined
                    polling_interval_seconds?: number | undefined
                    trigger_occurrences?: number | undefined
                  }
                | undefined
              type?: 'user' | 'system' | undefined
              updated?: string | undefined
              updated_by?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } } & {
              json: {
                channel_ids: number[]
                description?: string | undefined
                entity_ids?: string[] | undefined
                label: string
                rule_criteria: {
                  rules?:
                    | {
                        aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                        dimension_filters?:
                          | {
                              dimension_label?: string | undefined
                              operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                              value?: string | undefined
                            }[]
                          | undefined
                        metric?: string | undefined
                        operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                        threshold?: number | undefined
                      }[]
                    | undefined
                }
                severity: 0 | 1 | 2 | 3
                trigger_conditions: {
                  criteria_condition?: 'ALL' | undefined
                  evaluation_period_seconds?: number | undefined
                  polling_interval_seconds?: number | undefined
                  trigger_occurrences?: number | undefined
                }
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } }
            output: {
              data?:
                | {
                    alert_channels?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          type?: 'email' | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    class?: 'shared' | 'dedicated' | undefined
                    created?: string | undefined
                    created_by?: string | undefined
                    description?: string | undefined
                    entity_ids?: string[] | undefined
                    has_more_resources?: boolean | undefined
                    id?: number | undefined
                    label?: string | undefined
                    rule_criteria?:
                      | {
                          rules?:
                            | {
                                aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                                dimension_filters?:
                                  | {
                                      dimension_label?: string | undefined
                                      label?: string | undefined
                                      operator?:
                                        | 'eq'
                                        | 'neq'
                                        | 'startswith'
                                        | 'endswith'
                                        | undefined
                                      value?: string | undefined
                                    }[]
                                  | undefined
                                label?: string | undefined
                                metric?: string | undefined
                                operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                                threshold?: number | undefined
                                unit?:
                                  | 'number'
                                  | 'byte'
                                  | 'second'
                                  | 'percent'
                                  | 'bit_per_second'
                                  | 'millisecond'
                                  | 'KB'
                                  | 'MB'
                                  | 'GB'
                                  | undefined
                              }[]
                            | undefined
                        }
                      | undefined
                    service_type?: string | undefined
                    severity?: 0 | 1 | 2 | 3 | undefined
                    status?: 'enabled' | 'disabled' | 'in progress' | 'failed' | undefined
                    trigger_conditions?:
                      | {
                          criteria_condition?: 'ALL' | undefined
                          evaluation_period_seconds?: number | undefined
                          polling_interval_seconds?: number | undefined
                          trigger_occurrences?: number | undefined
                        }
                      | undefined
                    type?: 'user' | 'system' | undefined
                    updated?: string | undefined
                    updated_by?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/services/:serviceType/alert-definitions/:alertId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string; alertId: number } }
            output: {
              alert_channels?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    type?: 'email' | undefined
                    url?: string | undefined
                  }[]
                | undefined
              class?: 'shared' | 'dedicated' | undefined
              created?: string | undefined
              created_by?: string | undefined
              description?: string | undefined
              entity_ids?: string[] | undefined
              has_more_resources?: boolean | undefined
              id?: number | undefined
              label?: string | undefined
              rule_criteria?:
                | {
                    rules?:
                      | {
                          aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                          dimension_filters?:
                            | {
                                dimension_label?: string | undefined
                                label?: string | undefined
                                operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          label?: string | undefined
                          metric?: string | undefined
                          operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                          threshold?: number | undefined
                          unit?:
                            | 'number'
                            | 'byte'
                            | 'second'
                            | 'percent'
                            | 'bit_per_second'
                            | 'millisecond'
                            | 'KB'
                            | 'MB'
                            | 'GB'
                            | undefined
                        }[]
                      | undefined
                  }
                | undefined
              service_type?: string | undefined
              severity?: 0 | 1 | 2 | 3 | undefined
              status?: 'enabled' | 'disabled' | 'in progress' | 'failed' | undefined
              trigger_conditions?:
                | {
                    criteria_condition?: 'ALL' | undefined
                    evaluation_period_seconds?: number | undefined
                    polling_interval_seconds?: number | undefined
                    trigger_occurrences?: number | undefined
                  }
                | undefined
              type?: 'user' | 'system' | undefined
              updated?: string | undefined
              updated_by?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string; alertId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string; alertId: number } } & {
              json: {
                channel_ids?: number[] | undefined
                description?: string | undefined
                entity_ids?: string[] | undefined
                label?: string | undefined
                rule_criteria?:
                  | {
                      rules?:
                        | {
                            aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                            dimension_filters?:
                              | {
                                  dimension_label?: string | undefined
                                  operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                                  value?: string | undefined
                                }[]
                              | undefined
                            metric?: string | undefined
                            operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                            threshold?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                severity?: 0 | 1 | 2 | 3 | undefined
                status?: 'enabled' | 'disabled' | undefined
                trigger_conditions?:
                  | {
                      criteria_condition?: 'ALL' | undefined
                      evaluation_period_seconds?: number | undefined
                      polling_interval_seconds?: number | undefined
                      trigger_occurrences?: number | undefined
                    }
                  | undefined
              }
            }
            output: {
              alert_channels?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    type?: 'email' | undefined
                    url?: string | undefined
                  }[]
                | undefined
              class?: 'shared' | 'dedicated' | undefined
              created?: string | undefined
              created_by?: string | undefined
              description?: string | undefined
              entity_ids?: string[] | undefined
              has_more_resources?: boolean | undefined
              id?: number | undefined
              label?: string | undefined
              rule_criteria?:
                | {
                    rules?:
                      | {
                          aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                          dimension_filters?:
                            | {
                                dimension_label?: string | undefined
                                label?: string | undefined
                                operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                                value?: string | undefined
                              }[]
                            | undefined
                          label?: string | undefined
                          metric?: string | undefined
                          operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                          threshold?: number | undefined
                          unit?:
                            | 'number'
                            | 'byte'
                            | 'second'
                            | 'percent'
                            | 'bit_per_second'
                            | 'millisecond'
                            | 'KB'
                            | 'MB'
                            | 'GB'
                            | undefined
                        }[]
                      | undefined
                  }
                | undefined
              service_type?: string | undefined
              severity?: 0 | 1 | 2 | 3 | undefined
              status?: 'enabled' | 'disabled' | 'in progress' | 'failed' | undefined
              trigger_conditions?:
                | {
                    criteria_condition?: 'ALL' | undefined
                    evaluation_period_seconds?: number | undefined
                    polling_interval_seconds?: number | undefined
                    trigger_occurrences?: number | undefined
                  }
                | undefined
              type?: 'user' | 'system' | undefined
              updated?: string | undefined
              updated_by?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string; alertId: number } } & {
              json: {
                channel_ids?: number[] | undefined
                description?: string | undefined
                entity_ids?: string[] | undefined
                label?: string | undefined
                rule_criteria?:
                  | {
                      rules?:
                        | {
                            aggregate_function?: 'avg' | 'sum' | 'min' | 'max' | undefined
                            dimension_filters?:
                              | {
                                  dimension_label?: string | undefined
                                  operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                                  value?: string | undefined
                                }[]
                              | undefined
                            metric?: string | undefined
                            operator?: 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | undefined
                            threshold?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                severity?: 0 | 1 | 2 | 3 | undefined
                status?: 'enabled' | 'disabled' | undefined
                trigger_conditions?:
                  | {
                      criteria_condition?: 'ALL' | undefined
                      evaluation_period_seconds?: number | undefined
                      polling_interval_seconds?: number | undefined
                      trigger_occurrences?: number | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string; alertId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string; alertId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/services/:serviceType/dashboards': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } }
            output: {
              data: {
                created?: string | undefined
                id?: number | undefined
                label?: string | undefined
                service_type?: string | undefined
                type?: 'standard' | undefined
                updated?: string | undefined
                widgets?:
                  | {
                      aggregate_function?:
                        | 'min'
                        | 'max'
                        | 'avg'
                        | 'sum'
                        | 'rate'
                        | 'increase'
                        | undefined
                      chart_type?: 'line' | 'area' | undefined
                      color?: string | undefined
                      label?: string | undefined
                      metric?: string | undefined
                      size?: '6' | '12' | undefined
                      unit?:
                        | '%'
                        | 'Bytes'
                        | 'sec'
                        | 'bps'
                        | 'msec'
                        | 'Bps'
                        | 'KB'
                        | 'MB'
                        | 'GB'
                        | 'rate'
                        | 'percentile'
                        | 'ratio'
                        | 'OPS'
                        | 'IOPS'
                        | undefined
                      y_label?: string | undefined
                    }[]
                  | undefined
              }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/services/:serviceType/metric-definitions': {
      $get:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } } & {
              header: {
                'X-Filter'?:
                  | { is_alertable?: boolean | undefined }
                  | { metric_type?: 'counter' | 'histogram' | 'gauge' | 'summary' | undefined }
                  | {
                      '+and'?:
                        | {
                            is_alertable?: boolean | undefined
                            metric_type?: 'counter' | 'histogram' | 'gauge' | 'summary' | undefined
                          }[]
                        | undefined
                    }
                  | {
                      '+or'?:
                        | {
                            is_alertable?: boolean | undefined
                            metric_type?: 'counter' | 'histogram' | 'gauge' | 'summary' | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              data: {
                available_aggregate_functions?:
                  | ('min' | 'max' | 'avg' | 'sum' | 'rate' | 'increase')[]
                  | undefined
                dimensions?:
                  | {
                      dimension_label?: string | undefined
                      label?: string | undefined
                      values?: string[] | undefined
                    }[]
                  | undefined
                is_alertable?: boolean | undefined
                label?: string | undefined
                metric?: string | undefined
                metric_type?: 'counter' | 'histogram' | 'gauge' | 'summary' | undefined
                scrape_interval?: string | undefined
                unit?:
                  | '%'
                  | 'Bytes'
                  | 'sec'
                  | 'bps'
                  | 'msec'
                  | 'Bps'
                  | 'KB'
                  | 'MB'
                  | 'GB'
                  | 'rate'
                  | 'percentile'
                  | 'ratio'
                  | 'OPS'
                  | 'IOPS'
                  | undefined
              }[]
              page: number
              pages: number
              results: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } } & {
              header: {
                'X-Filter'?:
                  | { is_alertable?: boolean | undefined }
                  | { metric_type?: 'counter' | 'histogram' | 'gauge' | 'summary' | undefined }
                  | {
                      '+and'?:
                        | {
                            is_alertable?: boolean | undefined
                            metric_type?: 'counter' | 'histogram' | 'gauge' | 'summary' | undefined
                          }[]
                        | undefined
                    }
                  | {
                      '+or'?:
                        | {
                            is_alertable?: boolean | undefined
                            metric_type?: 'counter' | 'histogram' | 'gauge' | 'summary' | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/services/:serviceType/metrics': {
      $post:
        | {
            input: { param: { serviceType: string; apiVersion: 'v2beta' } } & {
              json:
                | {
                    entity_ids: number[]
                    filters?:
                      | {
                          dimension_label?: string | undefined
                          operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    group_by?: string[] | undefined
                    metrics: {
                      aggregate_function?: 'min' | 'max' | 'avg' | 'sum' | undefined
                      name?: string | undefined
                    }[]
                    time_granularity?:
                      | {
                          unit?: 'sec' | 'min' | 'hr' | 'days' | undefined
                          value?: number | undefined
                        }
                      | undefined
                    relative_time_duration?:
                      | {
                          unit?: 'sec' | 'min' | 'hr' | 'days' | undefined
                          value?: number | undefined
                        }
                      | undefined
                  }
                | {
                    entity_ids: number[]
                    filters?:
                      | {
                          dimension_label?: string | undefined
                          operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    group_by?: string[] | undefined
                    metrics: {
                      aggregate_function?: 'min' | 'max' | 'avg' | 'sum' | undefined
                      name?: string | undefined
                    }[]
                    time_granularity?:
                      | {
                          unit?: 'sec' | 'min' | 'hr' | 'days' | undefined
                          value?: number | undefined
                        }
                      | undefined
                    absolute_time_duration?:
                      | { end?: string | undefined; start?: string | undefined }
                      | undefined
                  }
            }
            output: {
              data: {
                result?:
                  | {
                      metric?: { [x: string]: string } | undefined
                      values?: (number | string)[][] | undefined
                    }[]
                  | undefined
                resultType?: 'matrix' | undefined
              }
              isPartial: boolean
              stats: { executionTimeMsec?: number | undefined; seriesFetched?: string | undefined }
              status: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceType: string; apiVersion: 'v2beta' } } & {
              json:
                | {
                    entity_ids: number[]
                    filters?:
                      | {
                          dimension_label?: string | undefined
                          operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    group_by?: string[] | undefined
                    metrics: {
                      aggregate_function?: 'min' | 'max' | 'avg' | 'sum' | undefined
                      name?: string | undefined
                    }[]
                    time_granularity?:
                      | {
                          unit?: 'sec' | 'min' | 'hr' | 'days' | undefined
                          value?: number | undefined
                        }
                      | undefined
                    relative_time_duration?:
                      | {
                          unit?: 'sec' | 'min' | 'hr' | 'days' | undefined
                          value?: number | undefined
                        }
                      | undefined
                  }
                | {
                    entity_ids: number[]
                    filters?:
                      | {
                          dimension_label?: string | undefined
                          operator?: 'eq' | 'neq' | 'startswith' | 'endswith' | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    group_by?: string[] | undefined
                    metrics: {
                      aggregate_function?: 'min' | 'max' | 'avg' | 'sum' | undefined
                      name?: string | undefined
                    }[]
                    time_granularity?:
                      | {
                          unit?: 'sec' | 'min' | 'hr' | 'days' | undefined
                          value?: number | undefined
                        }
                      | undefined
                    absolute_time_duration?:
                      | { end?: string | undefined; start?: string | undefined }
                      | undefined
                  }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/monitor/services/:serviceType/token': {
      $post:
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } } & {
              json: { entity_ids: number[] }
            }
            output: { token: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4beta'; serviceType: string } } & {
              json: { entity_ids: number[] }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/network-transfer/prices': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    id?: string | undefined
                    label?: string | undefined
                    price?:
                      | { hourly?: number | undefined; monthly?: (number | null) | undefined }
                      | undefined
                    region_prices?:
                      | {
                          hourly?: number | undefined
                          id?: string | undefined
                          monthly?: (number | null) | undefined
                        }[]
                      | undefined
                    transfer?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                created?: string | undefined
                entities?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      parent_entity?:
                        | ({
                            id?: number | undefined
                            label?: string | undefined
                            parent_entity?: (string | null) | undefined
                            type?: 'linode' | undefined
                            url?: string | undefined
                          } | null)
                        | undefined
                      type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                label?: string | undefined
                rules?:
                  | {
                      fingerprint?: string | undefined
                      inbound?:
                        | {
                            action?: 'ACCEPT' | 'DROP' | undefined
                            addresses?:
                              | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                              | undefined
                            description?: string | undefined
                            label?: string | undefined
                            ports?: (string | null) | undefined
                            protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                          }[]
                        | undefined
                      inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                      outbound?:
                        | {
                            action?: 'ACCEPT' | 'DROP' | undefined
                            addresses?:
                              | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                              | undefined
                            description?: string | undefined
                            label?: string | undefined
                            ports?: (string | null) | undefined
                            protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                          }[]
                        | undefined
                      outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                      version?: number | undefined
                    }
                  | undefined
                status?: 'enabled' | 'disabled' | 'deleted' | undefined
                tags?: string[] | undefined
                updated?: string | undefined
              }
            }
            output: {
              created?: string | undefined
              entities?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    parent_entity?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?: (string | null) | undefined
                          type?: 'linode' | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                    url?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              label?: string | undefined
              rules?:
                | {
                    fingerprint?: string | undefined
                    inbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    outbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    version?: number | undefined
                  }
                | undefined
              status?: 'enabled' | 'disabled' | 'deleted' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                created?: string | undefined
                entities?:
                  | {
                      id?: number | undefined
                      label?: string | undefined
                      parent_entity?:
                        | ({
                            id?: number | undefined
                            label?: string | undefined
                            parent_entity?: (string | null) | undefined
                            type?: 'linode' | undefined
                            url?: string | undefined
                          } | null)
                        | undefined
                      type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                id?: number | undefined
                label?: string | undefined
                rules?:
                  | {
                      fingerprint?: string | undefined
                      inbound?:
                        | {
                            action?: 'ACCEPT' | 'DROP' | undefined
                            addresses?:
                              | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                              | undefined
                            description?: string | undefined
                            label?: string | undefined
                            ports?: (string | null) | undefined
                            protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                          }[]
                        | undefined
                      inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                      outbound?:
                        | {
                            action?: 'ACCEPT' | 'DROP' | undefined
                            addresses?:
                              | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                              | undefined
                            description?: string | undefined
                            label?: string | undefined
                            ports?: (string | null) | undefined
                            protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                          }[]
                        | undefined
                      outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                      version?: number | undefined
                    }
                  | undefined
                status?: 'enabled' | 'disabled' | 'deleted' | undefined
                tags?: string[] | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    entities?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?:
                            | ({
                                id?: number | undefined
                                label?: string | undefined
                                parent_entity?: (string | null) | undefined
                                type?: 'linode' | undefined
                                url?: string | undefined
                              } | null)
                            | undefined
                          type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    rules?:
                      | {
                          fingerprint?: string | undefined
                          inbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          outbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          version?: number | undefined
                        }
                      | undefined
                    status?: 'enabled' | 'disabled' | 'deleted' | undefined
                    tags?: string[] | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/settings': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              default_firewall_ids?:
                | {
                    linode?: number | undefined
                    nodebalancer?: number | undefined
                    public_interface?: number | undefined
                    vpc_interface?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                default_firewall_ids?:
                  | {
                      linode?: number | undefined
                      nodebalancer?: number | undefined
                      public_interface?: number | undefined
                      vpc_interface?: number | undefined
                    }
                  | undefined
              }
            }
            output: {
              default_firewall_ids?:
                | {
                    linode?: number | undefined
                    nodebalancer?: number | undefined
                    public_interface?: number | undefined
                    vpc_interface?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                default_firewall_ids?:
                  | {
                      linode?: number | undefined
                      nodebalancer?: number | undefined
                      public_interface?: number | undefined
                      vpc_interface?: number | undefined
                    }
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/templates': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    rules?:
                      | {
                          inbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          outbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                        }
                      | undefined
                    slug?: 'vpc' | 'public' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/templates/:slug': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; slug: 'vpc' | 'public' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              rules?:
                | {
                    inbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    outbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                  }
                | undefined
              slug?: 'vpc' | 'public' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; slug: 'vpc' | 'public' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/:firewallId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } }
            output: {
              created?: string | undefined
              entities?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    parent_entity?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?: (string | null) | undefined
                          type?: 'linode' | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                    url?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              label?: string | undefined
              rules?:
                | {
                    fingerprint?: string | undefined
                    inbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    outbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    version?: number | undefined
                  }
                | undefined
              status?: 'enabled' | 'disabled' | 'deleted' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } } & {
              json: {
                label?: string | undefined
                status?: 'enabled' | 'disabled' | undefined
                tags?: string[] | undefined
              }
            }
            output: {
              created?: string | undefined
              entities?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    parent_entity?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?: (string | null) | undefined
                          type?: 'linode' | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                    url?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              label?: string | undefined
              rules?:
                | {
                    fingerprint?: string | undefined
                    inbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    outbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    version?: number | undefined
                  }
                | undefined
              status?: 'enabled' | 'disabled' | 'deleted' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } } & {
              json: {
                label?: string | undefined
                status?: 'enabled' | 'disabled' | undefined
                tags?: string[] | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/:firewallId/devices': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } } & {
              json: {
                id?: number | undefined
                label?: string | undefined
                parent_entity?:
                  | ({
                      id?: number | undefined
                      label?: string | undefined
                      parent_entity?: (string | null) | undefined
                      type?: 'linode' | undefined
                      url?: string | undefined
                    } | null)
                  | undefined
                type?: 'linode' | 'nodebalancer' | 'linode_interface' | undefined
                url?: string | undefined
              }
            }
            output: {
              created?: string | undefined
              entity?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    parent_entity?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?: (string | null) | undefined
                          type?: 'linode' | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    type?: 'linode' | 'nodebalancer' | 'linode_interface' | undefined
                    url?: string | undefined
                  }
                | undefined
              id?: number | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } } & {
              json: {
                id?: number | undefined
                label?: string | undefined
                parent_entity?:
                  | ({
                      id?: number | undefined
                      label?: string | undefined
                      parent_entity?: (string | null) | undefined
                      type?: 'linode' | undefined
                      url?: string | undefined
                    } | null)
                  | undefined
                type?: 'linode' | 'nodebalancer' | 'linode_interface' | undefined
                url?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    entity?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?:
                            | ({
                                id?: number | undefined
                                label?: string | undefined
                                parent_entity?: (string | null) | undefined
                                type?: 'linode' | undefined
                                url?: string | undefined
                              } | null)
                            | undefined
                          type?: 'linode' | 'nodebalancer' | 'linode_interface' | undefined
                          url?: string | undefined
                        }
                      | undefined
                    id?: number | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/:firewallId/devices/:deviceId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number; deviceId: number } }
            output: {
              created?: string | undefined
              entity?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    parent_entity?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?: (string | null) | undefined
                          type?: 'linode' | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    type?: 'linode' | 'nodebalancer' | 'linode_interface' | undefined
                    url?: string | undefined
                  }
                | undefined
              id?: number | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number; deviceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number; deviceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number; deviceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/:firewallId/history': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } }
            output: {
              created?: string | undefined
              entities?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    parent_entity?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?: (string | null) | undefined
                          type?: 'linode' | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                    url?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              label?: string | undefined
              rules?:
                | {
                    fingerprint?: string | undefined
                    inbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    outbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    version?: number | undefined
                  }
                | undefined
              status?: 'enabled' | 'disabled' | 'deleted' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/:firewallId/history/rules/:version': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number; version: number } }
            output: {
              created?: string | undefined
              entities?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    parent_entity?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?: (string | null) | undefined
                          type?: 'linode' | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                    url?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              label?: string | undefined
              rules?:
                | {
                    fingerprint?: string | undefined
                    inbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    outbound?:
                      | {
                          action?: 'ACCEPT' | 'DROP' | undefined
                          addresses?:
                            | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                            | undefined
                          description?: string | undefined
                          label?: string | undefined
                          ports?: (string | null) | undefined
                          protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                        }[]
                      | undefined
                    outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                    version?: number | undefined
                  }
                | undefined
              status?: 'enabled' | 'disabled' | 'deleted' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number; version: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/firewalls/:firewallId/rules': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } }
            output: {
              fingerprint?: string | undefined
              inbound?:
                | {
                    action?: 'ACCEPT' | 'DROP' | undefined
                    addresses?:
                      | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                      | undefined
                    description?: string | undefined
                    label?: string | undefined
                    ports?: (string | null) | undefined
                    protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                  }[]
                | undefined
              inbound_policy?: 'ACCEPT' | 'DROP' | undefined
              outbound?:
                | {
                    action?: 'ACCEPT' | 'DROP' | undefined
                    addresses?:
                      | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                      | undefined
                    description?: string | undefined
                    label?: string | undefined
                    ports?: (string | null) | undefined
                    protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                  }[]
                | undefined
              outbound_policy?: 'ACCEPT' | 'DROP' | undefined
              version?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } } & {
              json: {
                fingerprint?: string | undefined
                inbound?:
                  | {
                      action?: 'ACCEPT' | 'DROP' | undefined
                      addresses?:
                        | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                        | undefined
                      description?: string | undefined
                      label?: string | undefined
                      ports?: (string | null) | undefined
                      protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                    }[]
                  | undefined
                inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                outbound?:
                  | {
                      action?: 'ACCEPT' | 'DROP' | undefined
                      addresses?:
                        | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                        | undefined
                      description?: string | undefined
                      label?: string | undefined
                      ports?: (string | null) | undefined
                      protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                    }[]
                  | undefined
                outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                version?: number | undefined
              }
            }
            output: {
              fingerprint?: string | undefined
              inbound?:
                | {
                    action?: 'ACCEPT' | 'DROP' | undefined
                    addresses?:
                      | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                      | undefined
                    description?: string | undefined
                    label?: string | undefined
                    ports?: (string | null) | undefined
                    protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                  }[]
                | undefined
              inbound_policy?: 'ACCEPT' | 'DROP' | undefined
              outbound?:
                | {
                    action?: 'ACCEPT' | 'DROP' | undefined
                    addresses?:
                      | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                      | undefined
                    description?: string | undefined
                    label?: string | undefined
                    ports?: (string | null) | undefined
                    protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                  }[]
                | undefined
              outbound_policy?: 'ACCEPT' | 'DROP' | undefined
              version?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; firewallId: number } } & {
              json: {
                fingerprint?: string | undefined
                inbound?:
                  | {
                      action?: 'ACCEPT' | 'DROP' | undefined
                      addresses?:
                        | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                        | undefined
                      description?: string | undefined
                      label?: string | undefined
                      ports?: (string | null) | undefined
                      protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                    }[]
                  | undefined
                inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                outbound?:
                  | {
                      action?: 'ACCEPT' | 'DROP' | undefined
                      addresses?:
                        | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                        | undefined
                      description?: string | undefined
                      label?: string | undefined
                      ports?: (string | null) | undefined
                      protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                    }[]
                  | undefined
                outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                version?: number | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ips': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { linode_id: number; public: boolean; type: 'ipv4' }
            }
            output: {
              address?: string | undefined
              gateway?: (string | null) | undefined
              interface_id?: (number | null) | undefined
              linode_id?: number | undefined
              prefix?: number | undefined
              public?: boolean | undefined
              rdns?: (string | null) | undefined
              region?: string | undefined
              subnet_mask?: string | undefined
              type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
              vpc_nat_1_1?:
                | {
                    address?: string | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { linode_id: number; public: boolean; type: 'ipv4' }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { skip_ipv6_rdns?: boolean | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    address?: string | undefined
                    gateway?: (string | null) | undefined
                    interface_id?: (number | null) | undefined
                    linode_id?: number | undefined
                    prefix?: number | undefined
                    public?: boolean | undefined
                    rdns?: (string | null) | undefined
                    region?: string | undefined
                    subnet_mask?: string | undefined
                    type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
                    vpc_nat_1_1?:
                      | {
                          address?: string | undefined
                          subnet_id?: number | undefined
                          vpc_id?: number | undefined
                        }
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { skip_ipv6_rdns?: boolean | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ips/assign': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { assignments: { address: string; linode_id: number }[]; region: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { assignments: { address: string; linode_id: number }[]; region: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ips/share': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { ips: string[]; linode_id: number }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { ips: string[]; linode_id: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ips/:address': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; address: string } }
            output: {
              address?: string | undefined
              gateway?: (string | null) | undefined
              interface_id?: (number | null) | undefined
              linode_id?: number | undefined
              prefix?: number | undefined
              public?: boolean | undefined
              rdns?: (string | null) | undefined
              region?: string | undefined
              subnet_mask?: string | undefined
              type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
              vpc_nat_1_1?:
                | {
                    address?: string | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; address: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; address: string } } & {
              json: { rdns: string | null }
            }
            output: {
              address?: string | undefined
              gateway?: (string | null) | undefined
              interface_id?: (number | null) | undefined
              linode_id?: number | undefined
              prefix?: number | undefined
              public?: boolean | undefined
              rdns?: (string | null) | undefined
              region?: string | undefined
              subnet_mask?: string | undefined
              type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
              vpc_nat_1_1?:
                | {
                    address?: string | undefined
                    subnet_id?: number | undefined
                    vpc_id?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; address: string } } & {
              json: { rdns: string | null }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ipv4/assign': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { assignments: { address: string; linode_id: number }[]; region: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { assignments: { address: string; linode_id: number }[]; region: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ipv4/share': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { ips: string[]; linode_id: number }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { ips: string[]; linode_id: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ipv6/pools': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    prefix?: number | undefined
                    range?: string | undefined
                    region?: string | undefined
                    route_target?: (string | null) | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ipv6/ranges': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                linode_id?: number | undefined
                prefix_length: 56 | 64
                route_target?: string | undefined
              }
            }
            output: { range?: string | undefined; route_target?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                linode_id?: number | undefined
                prefix_length: 56 | 64
                route_target?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    prefix?: number | undefined
                    range?: string | undefined
                    region?: string | undefined
                    route_target?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/ipv6/ranges/:range': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; range: string } }
            output: {
              is_bgp?: boolean | undefined
              linodes?: number[] | undefined
              prefix?: number | undefined
              range?: string | undefined
              region?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; range: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; range: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; range: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/vlans': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    label?: string | undefined
                    linodes?: number[] | undefined
                    region?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/networking/vlans/:regionId/:label': {
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; label: string; regionId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; label: string; regionId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                client_conn_throttle?: number | undefined
                configs?:
                  | (
                      | {
                          algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                          check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                          check_attempts?: number | undefined
                          check_body?: string | undefined
                          check_interval?: number | undefined
                          check_passive?: boolean | undefined
                          check_path?: string | undefined
                          check_timeout?: number | undefined
                          cipher_suite?: string | undefined
                          id?: number | undefined
                          nodebalancer_id?: number | undefined
                          nodes: {
                            address?: string | undefined
                            config_id?: number | undefined
                            id?: number | undefined
                            label?: string | undefined
                            mode?: 'none' | undefined
                            nodebalancer_id?: number | undefined
                            status?: 'unknown' | 'UP' | 'DOWN' | undefined
                            subnet_id?: number | undefined
                            weight?: number | undefined
                          }[]
                          nodes_status?:
                            | { down?: number | undefined; up?: number | undefined }
                            | undefined
                          port?: number | undefined
                          protocol?: 'udp' | undefined
                          proxy_protocol?: string | undefined
                          ssl_cert?: (string | null) | undefined
                          ssl_commonname?: string | undefined
                          ssl_fingerprint?: string | undefined
                          ssl_key?: (string | null) | undefined
                          stickiness?: 'none' | 'session' | 'source_ip' | undefined
                          udp_check_port?: number | undefined
                          udp_session_timeout?: number | undefined
                        }
                      | {
                          algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                          check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                          check_attempts?: number | undefined
                          check_body?: string | undefined
                          check_interval?: number | undefined
                          check_passive?: boolean | undefined
                          check_path?: string | undefined
                          check_timeout?: number | undefined
                          cipher_suite?: string | undefined
                          id?: number | undefined
                          nodebalancer_id?: number | undefined
                          nodes: {
                            address?: string | undefined
                            config_id?: number | undefined
                            id?: number | undefined
                            label?: string | undefined
                            mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                            nodebalancer_id?: number | undefined
                            status?: 'unknown' | 'UP' | 'DOWN' | undefined
                            subnet_id?: number | undefined
                            weight?: number | undefined
                          }[]
                          nodes_status?:
                            | { down?: number | undefined; up?: number | undefined }
                            | undefined
                          port?: number | undefined
                          protocol?: 'tcp' | undefined
                          proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                          ssl_cert?: (string | null) | undefined
                          ssl_commonname?: string | undefined
                          ssl_fingerprint?: string | undefined
                          ssl_key?: (string | null) | undefined
                          stickiness?: 'none' | 'table' | undefined
                        }
                      | {
                          algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                          check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                          check_attempts?: number | undefined
                          check_body?: string | undefined
                          check_interval?: number | undefined
                          check_passive?: boolean | undefined
                          check_path?: string | undefined
                          check_timeout?: number | undefined
                          cipher_suite?: string | undefined
                          id?: number | undefined
                          nodebalancer_id?: number | undefined
                          nodes: {
                            address?: string | undefined
                            config_id?: number | undefined
                            id?: number | undefined
                            label?: string | undefined
                            mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                            nodebalancer_id?: number | undefined
                            status?: 'unknown' | 'UP' | 'DOWN' | undefined
                            subnet_id?: number | undefined
                            weight?: number | undefined
                          }[]
                          nodes_status?:
                            | { down?: number | undefined; up?: number | undefined }
                            | undefined
                          port?: number | undefined
                          protocol?: 'http' | undefined
                          proxy_protocol?: string | undefined
                          ssl_cert?: (string | null) | undefined
                          ssl_commonname?: string | undefined
                          ssl_fingerprint?: string | undefined
                          ssl_key?: (string | null) | undefined
                          stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                        }
                      | {
                          algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                          check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                          check_attempts?: number | undefined
                          check_body?: string | undefined
                          check_interval?: number | undefined
                          check_passive?: boolean | undefined
                          check_path?: string | undefined
                          check_timeout?: number | undefined
                          cipher_suite?: 'recommended' | 'legacy' | undefined
                          id?: number | undefined
                          nodebalancer_id?: number | undefined
                          nodes: {
                            address?: string | undefined
                            config_id?: number | undefined
                            id?: number | undefined
                            label?: string | undefined
                            mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                            nodebalancer_id?: number | undefined
                            status?: 'unknown' | 'UP' | 'DOWN' | undefined
                            subnet_id?: number | undefined
                            weight?: number | undefined
                          }[]
                          nodes_status?:
                            | { down?: number | undefined; up?: number | undefined }
                            | undefined
                          port?: number | undefined
                          protocol?: 'https' | undefined
                          proxy_protocol?: string | undefined
                          ssl_cert?: (string | null) | undefined
                          ssl_commonname?: string | undefined
                          ssl_fingerprint?: string | undefined
                          ssl_key?: (string | null) | undefined
                          stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                        }
                    )[]
                  | undefined
                firewall_id?: number | undefined
                label?: string | undefined
                region: string
                tags?: string[] | undefined
                vpcs?:
                  | {
                      id?: number | undefined
                      ipv4_range?: string | undefined
                      ipv4_range_auto_assign?: (boolean | null) | undefined
                      nodebalancer_id?: number | undefined
                      subnet_id: number
                      vpc_id?: (number | null) | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              client_conn_throttle?: number | undefined
              created?: string | undefined
              hostname?: string | undefined
              id?: number | undefined
              ipv4?: string | undefined
              ipv6?: (string | null) | undefined
              label?: string | undefined
              lke_cluster?:
                | ({
                    id?: string | undefined
                    label?: string | undefined
                    type?: string | undefined
                    url?: string | undefined
                  } | null)
                | undefined
              region?: string | undefined
              tags?: string[] | undefined
              transfer?:
                | {
                    in?: (number | null) | undefined
                    out?: (number | null) | undefined
                    total?: (number | null) | undefined
                  }
                | undefined
              type?: 'common' | 'premium' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                client_conn_throttle?: number | undefined
                configs?:
                  | (
                      | {
                          algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                          check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                          check_attempts?: number | undefined
                          check_body?: string | undefined
                          check_interval?: number | undefined
                          check_passive?: boolean | undefined
                          check_path?: string | undefined
                          check_timeout?: number | undefined
                          cipher_suite?: string | undefined
                          id?: number | undefined
                          nodebalancer_id?: number | undefined
                          nodes: {
                            address?: string | undefined
                            config_id?: number | undefined
                            id?: number | undefined
                            label?: string | undefined
                            mode?: 'none' | undefined
                            nodebalancer_id?: number | undefined
                            status?: 'unknown' | 'UP' | 'DOWN' | undefined
                            subnet_id?: number | undefined
                            weight?: number | undefined
                          }[]
                          nodes_status?:
                            | { down?: number | undefined; up?: number | undefined }
                            | undefined
                          port?: number | undefined
                          protocol?: 'udp' | undefined
                          proxy_protocol?: string | undefined
                          ssl_cert?: (string | null) | undefined
                          ssl_commonname?: string | undefined
                          ssl_fingerprint?: string | undefined
                          ssl_key?: (string | null) | undefined
                          stickiness?: 'none' | 'session' | 'source_ip' | undefined
                          udp_check_port?: number | undefined
                          udp_session_timeout?: number | undefined
                        }
                      | {
                          algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                          check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                          check_attempts?: number | undefined
                          check_body?: string | undefined
                          check_interval?: number | undefined
                          check_passive?: boolean | undefined
                          check_path?: string | undefined
                          check_timeout?: number | undefined
                          cipher_suite?: string | undefined
                          id?: number | undefined
                          nodebalancer_id?: number | undefined
                          nodes: {
                            address?: string | undefined
                            config_id?: number | undefined
                            id?: number | undefined
                            label?: string | undefined
                            mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                            nodebalancer_id?: number | undefined
                            status?: 'unknown' | 'UP' | 'DOWN' | undefined
                            subnet_id?: number | undefined
                            weight?: number | undefined
                          }[]
                          nodes_status?:
                            | { down?: number | undefined; up?: number | undefined }
                            | undefined
                          port?: number | undefined
                          protocol?: 'tcp' | undefined
                          proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                          ssl_cert?: (string | null) | undefined
                          ssl_commonname?: string | undefined
                          ssl_fingerprint?: string | undefined
                          ssl_key?: (string | null) | undefined
                          stickiness?: 'none' | 'table' | undefined
                        }
                      | {
                          algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                          check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                          check_attempts?: number | undefined
                          check_body?: string | undefined
                          check_interval?: number | undefined
                          check_passive?: boolean | undefined
                          check_path?: string | undefined
                          check_timeout?: number | undefined
                          cipher_suite?: string | undefined
                          id?: number | undefined
                          nodebalancer_id?: number | undefined
                          nodes: {
                            address?: string | undefined
                            config_id?: number | undefined
                            id?: number | undefined
                            label?: string | undefined
                            mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                            nodebalancer_id?: number | undefined
                            status?: 'unknown' | 'UP' | 'DOWN' | undefined
                            subnet_id?: number | undefined
                            weight?: number | undefined
                          }[]
                          nodes_status?:
                            | { down?: number | undefined; up?: number | undefined }
                            | undefined
                          port?: number | undefined
                          protocol?: 'http' | undefined
                          proxy_protocol?: string | undefined
                          ssl_cert?: (string | null) | undefined
                          ssl_commonname?: string | undefined
                          ssl_fingerprint?: string | undefined
                          ssl_key?: (string | null) | undefined
                          stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                        }
                      | {
                          algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                          check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                          check_attempts?: number | undefined
                          check_body?: string | undefined
                          check_interval?: number | undefined
                          check_passive?: boolean | undefined
                          check_path?: string | undefined
                          check_timeout?: number | undefined
                          cipher_suite?: 'recommended' | 'legacy' | undefined
                          id?: number | undefined
                          nodebalancer_id?: number | undefined
                          nodes: {
                            address?: string | undefined
                            config_id?: number | undefined
                            id?: number | undefined
                            label?: string | undefined
                            mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                            nodebalancer_id?: number | undefined
                            status?: 'unknown' | 'UP' | 'DOWN' | undefined
                            subnet_id?: number | undefined
                            weight?: number | undefined
                          }[]
                          nodes_status?:
                            | { down?: number | undefined; up?: number | undefined }
                            | undefined
                          port?: number | undefined
                          protocol?: 'https' | undefined
                          proxy_protocol?: string | undefined
                          ssl_cert?: (string | null) | undefined
                          ssl_commonname?: string | undefined
                          ssl_fingerprint?: string | undefined
                          ssl_key?: (string | null) | undefined
                          stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                        }
                    )[]
                  | undefined
                firewall_id?: number | undefined
                label?: string | undefined
                region: string
                tags?: string[] | undefined
                vpcs?:
                  | {
                      id?: number | undefined
                      ipv4_range?: string | undefined
                      ipv4_range_auto_assign?: (boolean | null) | undefined
                      nodebalancer_id?: number | undefined
                      subnet_id: number
                      vpc_id?: (number | null) | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    client_conn_throttle?: number | undefined
                    created?: string | undefined
                    hostname?: string | undefined
                    id?: number | undefined
                    ipv4?: string | undefined
                    ipv6?: (string | null) | undefined
                    label?: string | undefined
                    lke_cluster?:
                      | ({
                          id?: string | undefined
                          label?: string | undefined
                          type?: string | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    region?: string | undefined
                    tags?: string[] | undefined
                    transfer?:
                      | {
                          in?: (number | null) | undefined
                          out?: (number | null) | undefined
                          total?: (number | null) | undefined
                        }
                      | undefined
                    type?: 'common' | 'premium' | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/types': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    id?: string | undefined
                    label?: string | undefined
                    price?:
                      | { hourly?: number | undefined; monthly?: number | undefined }
                      | undefined
                    region_prices?:
                      | {
                          hourly?: number | undefined
                          id?: string | undefined
                          monthly?: number | undefined
                        }[]
                      | undefined
                    transfer?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } }
            output: {
              client_conn_throttle?: number | undefined
              created?: string | undefined
              hostname?: string | undefined
              id?: number | undefined
              ipv4?: string | undefined
              ipv6?: (string | null) | undefined
              label?: string | undefined
              lke_cluster?:
                | ({
                    id?: string | undefined
                    label?: string | undefined
                    type?: string | undefined
                    url?: string | undefined
                  } | null)
                | undefined
              region?: string | undefined
              tags?: string[] | undefined
              transfer?:
                | {
                    in?: (number | null) | undefined
                    out?: (number | null) | undefined
                    total?: (number | null) | undefined
                  }
                | undefined
              type?: 'common' | 'premium' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              json: {
                client_conn_throttle?: number | undefined
                created?: string | undefined
                hostname?: string | undefined
                id?: number | undefined
                ipv4?: string | undefined
                ipv6?: (string | null) | undefined
                label?: string | undefined
                lke_cluster?:
                  | ({
                      id?: string | undefined
                      label?: string | undefined
                      type?: string | undefined
                      url?: string | undefined
                    } | null)
                  | undefined
                region?: string | undefined
                tags?: string[] | undefined
                transfer?:
                  | {
                      in?: (number | null) | undefined
                      out?: (number | null) | undefined
                      total?: (number | null) | undefined
                    }
                  | undefined
                type?: 'common' | 'premium' | undefined
                updated?: string | undefined
              }
            }
            output: {
              client_conn_throttle?: number | undefined
              created?: string | undefined
              hostname?: string | undefined
              id?: number | undefined
              ipv4?: string | undefined
              ipv6?: (string | null) | undefined
              label?: string | undefined
              lke_cluster?:
                | ({
                    id?: string | undefined
                    label?: string | undefined
                    type?: string | undefined
                    url?: string | undefined
                  } | null)
                | undefined
              region?: string | undefined
              tags?: string[] | undefined
              transfer?:
                | {
                    in?: (number | null) | undefined
                    out?: (number | null) | undefined
                    total?: (number | null) | undefined
                  }
                | undefined
              type?: 'common' | 'premium' | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              json: {
                client_conn_throttle?: number | undefined
                created?: string | undefined
                hostname?: string | undefined
                id?: number | undefined
                ipv4?: string | undefined
                ipv6?: (string | null) | undefined
                label?: string | undefined
                lke_cluster?:
                  | ({
                      id?: string | undefined
                      label?: string | undefined
                      type?: string | undefined
                      url?: string | undefined
                    } | null)
                  | undefined
                region?: string | undefined
                tags?: string[] | undefined
                transfer?:
                  | {
                      in?: (number | null) | undefined
                      out?: (number | null) | undefined
                      total?: (number | null) | undefined
                    }
                  | undefined
                type?: 'common' | 'premium' | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              json: {
                nodes: {
                  address?: string | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                  subnet_id?: number | undefined
                  weight?: number | undefined
                }[]
              }
            }
            output:
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'udp' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'session' | 'source_ip' | undefined
                  udp_check_port?: number | undefined
                  udp_session_timeout?: number | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'tcp' | undefined
                  proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'http' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: 'recommended' | 'legacy' | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'https' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              json: {
                nodes: {
                  address?: string | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                  subnet_id?: number | undefined
                  weight?: number | undefined
                }[]
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output:
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'udp' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'session' | 'source_ip' | undefined
                  udp_check_port?: number | undefined
                  udp_session_timeout?: number | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'tcp' | undefined
                  proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'http' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: 'recommended' | 'legacy' | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'https' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId': {
      $get:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            }
            output:
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'udp' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'session' | 'source_ip' | undefined
                  udp_check_port?: number | undefined
                  udp_session_timeout?: number | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'tcp' | undefined
                  proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'http' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: 'recommended' | 'legacy' | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'https' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            } & {
              json:
                | {
                    algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                    check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                    check_attempts?: number | undefined
                    check_body?: string | undefined
                    check_interval?: number | undefined
                    check_passive?: boolean | undefined
                    check_path?: string | undefined
                    check_timeout?: number | undefined
                    cipher_suite?: string | undefined
                    id?: number | undefined
                    nodebalancer_id?: number | undefined
                    nodes_status?:
                      | { down?: number | undefined; up?: number | undefined }
                      | undefined
                    port?: number | undefined
                    protocol?: 'udp' | undefined
                    proxy_protocol?: string | undefined
                    ssl_cert?: (string | null) | undefined
                    ssl_commonname?: string | undefined
                    ssl_fingerprint?: string | undefined
                    ssl_key?: (string | null) | undefined
                    stickiness?: 'none' | 'session' | 'source_ip' | undefined
                    udp_check_port?: number | undefined
                    udp_session_timeout?: number | undefined
                  }
                | {
                    algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                    check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                    check_attempts?: number | undefined
                    check_body?: string | undefined
                    check_interval?: number | undefined
                    check_passive?: boolean | undefined
                    check_path?: string | undefined
                    check_timeout?: number | undefined
                    cipher_suite?: string | undefined
                    id?: number | undefined
                    nodebalancer_id?: number | undefined
                    nodes_status?:
                      | { down?: number | undefined; up?: number | undefined }
                      | undefined
                    port?: number | undefined
                    protocol?: 'tcp' | undefined
                    proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                    ssl_cert?: (string | null) | undefined
                    ssl_commonname?: string | undefined
                    ssl_fingerprint?: string | undefined
                    ssl_key?: (string | null) | undefined
                    stickiness?: 'none' | 'table' | undefined
                  }
                | {
                    algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                    check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                    check_attempts?: number | undefined
                    check_body?: string | undefined
                    check_interval?: number | undefined
                    check_passive?: boolean | undefined
                    check_path?: string | undefined
                    check_timeout?: number | undefined
                    cipher_suite?: string | undefined
                    id?: number | undefined
                    nodebalancer_id?: number | undefined
                    nodes_status?:
                      | { down?: number | undefined; up?: number | undefined }
                      | undefined
                    port?: number | undefined
                    protocol?: 'http' | undefined
                    proxy_protocol?: string | undefined
                    ssl_cert?: (string | null) | undefined
                    ssl_commonname?: string | undefined
                    ssl_fingerprint?: string | undefined
                    ssl_key?: (string | null) | undefined
                    stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                  }
                | {
                    algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                    check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                    check_attempts?: number | undefined
                    check_body?: string | undefined
                    check_interval?: number | undefined
                    check_passive?: boolean | undefined
                    check_path?: string | undefined
                    check_timeout?: number | undefined
                    cipher_suite?: 'recommended' | 'legacy' | undefined
                    id?: number | undefined
                    nodebalancer_id?: number | undefined
                    nodes_status?:
                      | { down?: number | undefined; up?: number | undefined }
                      | undefined
                    port?: number | undefined
                    protocol?: 'https' | undefined
                    proxy_protocol?: string | undefined
                    ssl_cert?: (string | null) | undefined
                    ssl_commonname?: string | undefined
                    ssl_fingerprint?: string | undefined
                    ssl_key?: (string | null) | undefined
                    stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                  }
            }
            output:
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'udp' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'session' | 'source_ip' | undefined
                  udp_check_port?: number | undefined
                  udp_session_timeout?: number | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'tcp' | undefined
                  proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'http' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: 'recommended' | 'legacy' | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'https' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            } & {
              json:
                | {
                    algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                    check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                    check_attempts?: number | undefined
                    check_body?: string | undefined
                    check_interval?: number | undefined
                    check_passive?: boolean | undefined
                    check_path?: string | undefined
                    check_timeout?: number | undefined
                    cipher_suite?: string | undefined
                    id?: number | undefined
                    nodebalancer_id?: number | undefined
                    nodes_status?:
                      | { down?: number | undefined; up?: number | undefined }
                      | undefined
                    port?: number | undefined
                    protocol?: 'udp' | undefined
                    proxy_protocol?: string | undefined
                    ssl_cert?: (string | null) | undefined
                    ssl_commonname?: string | undefined
                    ssl_fingerprint?: string | undefined
                    ssl_key?: (string | null) | undefined
                    stickiness?: 'none' | 'session' | 'source_ip' | undefined
                    udp_check_port?: number | undefined
                    udp_session_timeout?: number | undefined
                  }
                | {
                    algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                    check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                    check_attempts?: number | undefined
                    check_body?: string | undefined
                    check_interval?: number | undefined
                    check_passive?: boolean | undefined
                    check_path?: string | undefined
                    check_timeout?: number | undefined
                    cipher_suite?: string | undefined
                    id?: number | undefined
                    nodebalancer_id?: number | undefined
                    nodes_status?:
                      | { down?: number | undefined; up?: number | undefined }
                      | undefined
                    port?: number | undefined
                    protocol?: 'tcp' | undefined
                    proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                    ssl_cert?: (string | null) | undefined
                    ssl_commonname?: string | undefined
                    ssl_fingerprint?: string | undefined
                    ssl_key?: (string | null) | undefined
                    stickiness?: 'none' | 'table' | undefined
                  }
                | {
                    algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                    check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                    check_attempts?: number | undefined
                    check_body?: string | undefined
                    check_interval?: number | undefined
                    check_passive?: boolean | undefined
                    check_path?: string | undefined
                    check_timeout?: number | undefined
                    cipher_suite?: string | undefined
                    id?: number | undefined
                    nodebalancer_id?: number | undefined
                    nodes_status?:
                      | { down?: number | undefined; up?: number | undefined }
                      | undefined
                    port?: number | undefined
                    protocol?: 'http' | undefined
                    proxy_protocol?: string | undefined
                    ssl_cert?: (string | null) | undefined
                    ssl_commonname?: string | undefined
                    ssl_fingerprint?: string | undefined
                    ssl_key?: (string | null) | undefined
                    stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                  }
                | {
                    algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                    check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                    check_attempts?: number | undefined
                    check_body?: string | undefined
                    check_interval?: number | undefined
                    check_passive?: boolean | undefined
                    check_path?: string | undefined
                    check_timeout?: number | undefined
                    cipher_suite?: 'recommended' | 'legacy' | undefined
                    id?: number | undefined
                    nodebalancer_id?: number | undefined
                    nodes_status?:
                      | { down?: number | undefined; up?: number | undefined }
                      | undefined
                    port?: number | undefined
                    protocol?: 'https' | undefined
                    proxy_protocol?: string | undefined
                    ssl_cert?: (string | null) | undefined
                    ssl_commonname?: string | undefined
                    ssl_fingerprint?: string | undefined
                    ssl_key?: (string | null) | undefined
                    stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                  }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/nodes': {
      $post:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            } & { json: {} }
            output:
              | {
                  address?: string | undefined
                  config_id?: number | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                  nodebalancer_id?: number | undefined
                  status?: 'Unknown' | 'UP' | 'DOWN' | undefined
                  vpc_config_id?: (number | null) | undefined
                  weight?: number | undefined
                }
              | {
                  address?: string | undefined
                  config_id?: number | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'none' | undefined
                  nodebalancer_id?: number | undefined
                  status?: 'Unknown' | 'UP' | 'DOWN' | undefined
                  vpc_config_id?: (number | null) | undefined
                  weight?: number | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            } & { json: {} }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            } & { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?:
                | (
                    | {
                        address?: string | undefined
                        config_id?: number | undefined
                        id?: number | undefined
                        label?: string | undefined
                        mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                        nodebalancer_id?: number | undefined
                        status?: 'Unknown' | 'UP' | 'DOWN' | undefined
                        vpc_config_id?: (number | null) | undefined
                        weight?: number | undefined
                      }
                    | {
                        address?: string | undefined
                        config_id?: number | undefined
                        id?: number | undefined
                        label?: string | undefined
                        mode?: 'none' | undefined
                        nodebalancer_id?: number | undefined
                        status?: 'Unknown' | 'UP' | 'DOWN' | undefined
                        vpc_config_id?: (number | null) | undefined
                        weight?: number | undefined
                      }
                  )[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            } & { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId': {
      $get:
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                nodeBalancerId: number
                configId: number
                nodeId: string
              }
            }
            output:
              | {
                  address?: string | undefined
                  config_id?: number | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                  nodebalancer_id?: number | undefined
                  status?: 'Unknown' | 'UP' | 'DOWN' | undefined
                  vpc_config_id?: (number | null) | undefined
                  weight?: number | undefined
                }
              | {
                  address?: string | undefined
                  config_id?: number | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'none' | undefined
                  nodebalancer_id?: number | undefined
                  status?: 'Unknown' | 'UP' | 'DOWN' | undefined
                  vpc_config_id?: (number | null) | undefined
                  weight?: number | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                nodeBalancerId: number
                configId: number
                nodeId: string
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                nodeBalancerId: number
                configId: number
                nodeId: string
              }
            } & {
              json:
                | {
                    address?: string | undefined
                    config_id?: number | undefined
                    id?: number | undefined
                    label?: string | undefined
                    mode?: 'none' | undefined
                    nodebalancer_id?: number | undefined
                    status?: 'unknown' | 'UP' | 'DOWN' | undefined
                    subnet_id?: number | undefined
                    weight?: number | undefined
                  }
                | {
                    address?: string | undefined
                    config_id?: number | undefined
                    id?: number | undefined
                    label?: string | undefined
                    mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                    nodebalancer_id?: number | undefined
                    status?: 'unknown' | 'UP' | 'DOWN' | undefined
                    subnet_id?: number | undefined
                    weight?: number | undefined
                  }
            }
            output:
              | {
                  address?: string | undefined
                  config_id?: number | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                  nodebalancer_id?: number | undefined
                  status?: 'Unknown' | 'UP' | 'DOWN' | undefined
                  vpc_config_id?: (number | null) | undefined
                  weight?: number | undefined
                }
              | {
                  address?: string | undefined
                  config_id?: number | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'none' | undefined
                  nodebalancer_id?: number | undefined
                  status?: 'Unknown' | 'UP' | 'DOWN' | undefined
                  vpc_config_id?: (number | null) | undefined
                  weight?: number | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                nodeBalancerId: number
                configId: number
                nodeId: string
              }
            } & {
              json:
                | {
                    address?: string | undefined
                    config_id?: number | undefined
                    id?: number | undefined
                    label?: string | undefined
                    mode?: 'none' | undefined
                    nodebalancer_id?: number | undefined
                    status?: 'unknown' | 'UP' | 'DOWN' | undefined
                    subnet_id?: number | undefined
                    weight?: number | undefined
                  }
                | {
                    address?: string | undefined
                    config_id?: number | undefined
                    id?: number | undefined
                    label?: string | undefined
                    mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                    nodebalancer_id?: number | undefined
                    status?: 'unknown' | 'UP' | 'DOWN' | undefined
                    subnet_id?: number | undefined
                    weight?: number | undefined
                  }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                nodeBalancerId: number
                configId: number
                nodeId: string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                nodeBalancerId: number
                configId: number
                nodeId: string
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/configs/:configId/rebuild': {
      $post:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            } & {
              json: {
                nodes: {
                  address?: string | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                  subnet_id?: number | undefined
                  weight?: number | undefined
                }[]
              }
            }
            output:
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'ring_hash' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'udp' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'session' | 'source_ip' | undefined
                  udp_check_port?: number | undefined
                  udp_session_timeout?: number | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'tcp' | undefined
                  proxy_protocol?: 'none' | 'v1' | 'v2' | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: string | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'http' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
              | {
                  algorithm?: 'roundrobin' | 'leastconn' | 'source' | undefined
                  check?: 'none' | 'connection' | 'http' | 'http_body' | undefined
                  check_attempts?: number | undefined
                  check_body?: string | undefined
                  check_interval?: number | undefined
                  check_passive?: boolean | undefined
                  check_path?: string | undefined
                  check_timeout?: number | undefined
                  cipher_suite?: 'recommended' | 'legacy' | undefined
                  id?: number | undefined
                  nodebalancer_id?: number | undefined
                  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                  port?: number | undefined
                  protocol?: 'https' | undefined
                  proxy_protocol?: string | undefined
                  ssl_cert?: (string | null) | undefined
                  ssl_commonname?: string | undefined
                  ssl_fingerprint?: string | undefined
                  ssl_key?: (string | null) | undefined
                  stickiness?: 'none' | 'table' | 'http_cookie' | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number; configId: number }
            } & {
              json: {
                nodes: {
                  address?: string | undefined
                  id?: number | undefined
                  label?: string | undefined
                  mode?: 'accept' | 'reject' | 'drain' | 'backup' | undefined
                  subnet_id?: number | undefined
                  weight?: number | undefined
                }[]
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/firewalls': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    created?: string | undefined
                    entities?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?:
                            | ({
                                id?: number | undefined
                                label?: string | undefined
                                parent_entity?: (string | null) | undefined
                                type?: 'linode' | undefined
                                url?: string | undefined
                              } | null)
                            | undefined
                          type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    rules?:
                      | {
                          fingerprint?: string | undefined
                          inbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          outbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          version?: number | undefined
                        }
                      | undefined
                    status?: 'enabled' | 'disabled' | 'deleted' | undefined
                    tags?: string[] | undefined
                    updated?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & { json: { firewall_ids: number[] } }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    created?: string | undefined
                    entities?:
                      | {
                          id?: number | undefined
                          label?: string | undefined
                          parent_entity?:
                            | ({
                                id?: number | undefined
                                label?: string | undefined
                                parent_entity?: (string | null) | undefined
                                type?: 'linode' | undefined
                                url?: string | undefined
                              } | null)
                            | undefined
                          type?: 'linode' | 'linode_interface' | 'nodebalancer' | undefined
                          url?: string | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    rules?:
                      | {
                          fingerprint?: string | undefined
                          inbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          outbound?:
                            | {
                                action?: 'ACCEPT' | 'DROP' | undefined
                                addresses?:
                                  | { ipv4?: string[] | undefined; ipv6?: string[] | undefined }
                                  | undefined
                                description?: string | undefined
                                label?: string | undefined
                                ports?: (string | null) | undefined
                                protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
                              }[]
                            | undefined
                          outbound_policy?: 'ACCEPT' | 'DROP' | undefined
                          version?: number | undefined
                        }
                      | undefined
                    status?: 'enabled' | 'disabled' | 'deleted' | undefined
                    tags?: string[] | undefined
                    updated?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            } & { json: { firewall_ids: number[] } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/stats': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } }
            output: {
              data?:
                | {
                    connections?: number[] | undefined
                    traffic?: { in?: number[] | undefined; out?: number[] | undefined } | undefined
                  }
                | undefined
              title?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/vpcs': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    id?: number | undefined
                    ipv4_range?: string | undefined
                    ipv4_range_auto_assign?: (boolean | null) | undefined
                    nodebalancer_id?: number | undefined
                    subnet_id: number
                    vpc_id?: (number | null) | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; nodeBalancerId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/nodebalancers/:nodeBalancerId/vpcs/:nodeBalancerVpcConfigId': {
      $get:
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                nodeBalancerId: number
                nodeBalancerVpcConfigId: number
              }
            }
            output: {
              id?: number | undefined
              ipv4_range?: string | undefined
              ipv4_range_auto_assign?: (boolean | null) | undefined
              nodebalancer_id?: number | undefined
              subnet_id: number
              vpc_id?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                apiVersion: 'v4' | 'v4beta'
                nodeBalancerId: number
                nodeBalancerVpcConfigId: number
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/buckets': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | undefined
                cors_enabled?: boolean | undefined
                endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                label: string
                region?: string | undefined
                s3_endpoint?: string | undefined
              }
            }
            output: {
              cluster?: string | undefined
              created?: string | undefined
              endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
              hostname?: string | undefined
              label?: string | undefined
              objects?: number | undefined
              region?: string | undefined
              s3_endpoint?: string | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | undefined
                cors_enabled?: boolean | undefined
                endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                label: string
                region?: string | undefined
                s3_endpoint?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    cluster?: string | undefined
                    created?: string | undefined
                    endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                    hostname?: string | undefined
                    label?: string | undefined
                    objects?: number | undefined
                    region?: string | undefined
                    s3_endpoint?: string | undefined
                    size?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/buckets/:regionId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string } }
            output: {
              data?:
                | {
                    cluster?: string | undefined
                    created?: string | undefined
                    endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                    hostname?: string | undefined
                    label?: string | undefined
                    objects?: number | undefined
                    region?: string | undefined
                    s3_endpoint?: string | undefined
                    size?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/buckets/:regionId/:bucket': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: {
              cluster?: string | undefined
              created?: string | undefined
              endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
              hostname?: string | undefined
              label?: string | undefined
              objects?: number | undefined
              region?: string | undefined
              s3_endpoint?: string | undefined
              size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/access': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                  | undefined
                cors_enabled?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                  | undefined
                cors_enabled?: boolean | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: {
              acl?:
                | 'private'
                | 'public-read'
                | 'authenticated-read'
                | 'public-read-write'
                | 'custom'
                | undefined
              acl_xml?: string | undefined
              cors_enabled?: (boolean | null) | undefined
              cors_xml?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                  | undefined
                cors_enabled?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                  | undefined
                cors_enabled?: boolean | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/object-acl': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              query: { name: string }
            }
            output: {
              acl?:
                | 'private'
                | 'public-read'
                | 'authenticated-read'
                | 'public-read-write'
                | 'custom'
                | undefined
              acl_xml?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              query: { name: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: {
                acl:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                name: string
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: {
                acl:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                name: string
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/object-list': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              query: {
                marker?: string | undefined
                delimiter?: string | undefined
                prefix?: string | undefined
                page_size?: number | undefined
              }
            }
            output: {
              data?:
                | {
                    etag?: string | undefined
                    last_modified?: string | undefined
                    name?: string | undefined
                    owner?: string | undefined
                    size?: number | undefined
                  }[]
                | undefined
              is_truncated?: boolean | undefined
              next_marker?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              query: {
                marker?: string | undefined
                delimiter?: string | undefined
                prefix?: string | undefined
                page_size?: number | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/object-url': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: {
                content_type?: (string | null) | undefined
                expires_in?: (number | null) | undefined
                method: string
                name: string
              }
            }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: {
                content_type?: (string | null) | undefined
                expires_in?: (number | null) | undefined
                method: string
                name: string
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/buckets/:regionId/:bucket/ssl': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: { certificate: string; private_key: string }
            }
            output: { ssl?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } } & {
              json: { certificate: string; private_key: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: { ssl?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string; bucket: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/cancel': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/clusters': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    domain?: string | undefined
                    id?: string | undefined
                    region?: string | undefined
                    static_site_domain?: string | undefined
                    status?: 'available' | 'unavailable' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/clusters/:clusterId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: string } }
            output: {
              domain?: string | undefined
              id?: string | undefined
              region?: string | undefined
              static_site_domain?: string | undefined
              status?: 'available' | 'unavailable' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; clusterId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/endpoints': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                    region?: string | undefined
                    s3_endpoint?: (string | null) | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/keys': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json:
                | {
                    bucket_access?:
                      | (
                          | {
                              bucket_name?: string | undefined
                              permissions?: 'read_write' | 'read_only' | undefined
                              region?: string | undefined
                            }
                          | {
                              bucket_name?: string | undefined
                              cluster?: string | undefined
                              permissions?: 'read_write' | 'read_only' | undefined
                            }
                        )[]
                      | undefined
                    label?: string | undefined
                  }
                | { label?: string | undefined; regions?: string[] | undefined }
            }
            output: {
              access_key?: string | undefined
              bucket_access?:
                | {
                    bucket_name?: string | undefined
                    cluster?: string | undefined
                    permissions?: 'read_write' | 'read_only' | undefined
                    region?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              label?: string | undefined
              limited?: boolean | undefined
              regions?:
                | {
                    endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                    id?: string | undefined
                    s3_endpoint?: string | undefined
                  }[]
                | undefined
              secret_key?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json:
                | {
                    bucket_access?:
                      | (
                          | {
                              bucket_name?: string | undefined
                              permissions?: 'read_write' | 'read_only' | undefined
                              region?: string | undefined
                            }
                          | {
                              bucket_name?: string | undefined
                              cluster?: string | undefined
                              permissions?: 'read_write' | 'read_only' | undefined
                            }
                        )[]
                      | undefined
                    label?: string | undefined
                  }
                | { label?: string | undefined; regions?: string[] | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    access_key?: string | undefined
                    bucket_access?:
                      | {
                          bucket_name?: string | undefined
                          cluster?: string | undefined
                          permissions?: 'read_write' | 'read_only' | undefined
                          region?: string | undefined
                        }[]
                      | undefined
                    id?: number | undefined
                    label?: string | undefined
                    limited?: boolean | undefined
                    regions?:
                      | {
                          endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                          id?: string | undefined
                          s3_endpoint?: string | undefined
                        }[]
                      | undefined
                    secret_key?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/keys/:keyId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; keyId: number } }
            output: {
              access_key?: string | undefined
              bucket_access?:
                | {
                    bucket_name?: string | undefined
                    cluster?: string | undefined
                    permissions?: 'read_write' | 'read_only' | undefined
                    region?: string | undefined
                  }[]
                | undefined
              id?: number | undefined
              label?: string | undefined
              limited?: boolean | undefined
              regions?:
                | {
                    endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                    id?: string | undefined
                    s3_endpoint?: string | undefined
                  }[]
                | undefined
              secret_key?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; keyId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; keyId: number } } & {
              json: { label?: string | undefined; regions?: string[] | undefined }
            }
            output: {
              access_key?: string | undefined
              id?: number | undefined
              label?: string | undefined
              limited?: boolean | undefined
              regions?:
                | {
                    endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                    id?: string | undefined
                    s3_endpoint?: string | undefined
                  }[]
                | undefined
              secret_key?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; keyId: number } } & {
              json: { label?: string | undefined; regions?: string[] | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; keyId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; keyId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/quotas': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    description?: string | undefined
                    endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
                    quota_id?: string | undefined
                    quota_limit?: number | undefined
                    quota_name?:
                      | 'Number of Objects'
                      | 'Number of Buckets'
                      | 'Total Capacity'
                      | undefined
                    resource_metric?: 'bucket' | 'object' | 'byte' | undefined
                    s3_endpoint?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/quotas/:objQuotaId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; objQuotaId: string } }
            output: {
              description?: string | undefined
              endpoint_type?: 'E0' | 'E1' | 'E2' | 'E3' | undefined
              quota_id?: string | undefined
              quota_limit?: number | undefined
              quota_name?: 'Number of Objects' | 'Number of Buckets' | 'Total Capacity' | undefined
              resource_metric?: 'bucket' | 'object' | 'byte' | undefined
              s3_endpoint?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; objQuotaId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/quotas/:objQuotaId/usage': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; objQuotaId: string } }
            output: { quota_limit?: number | undefined; usage?: (number | null) | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; objQuotaId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/transfer': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: { used?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/object-storage/types': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    id?: string | undefined
                    label?: string | undefined
                    price?:
                      | { hourly?: number | undefined; monthly?: number | undefined }
                      | undefined
                    region_prices?:
                      | {
                          hourly?: number | undefined
                          id?: string | undefined
                          monthly?: number | undefined
                        }[]
                      | undefined
                    transfer?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/placement/groups': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                label?: string | undefined
                placement_group_policy?: 'strict' | 'flexible' | undefined
                placement_group_type?: 'anti_affinity:local' | undefined
                region?: string | undefined
              }
            }
            output: {
              id?: number | undefined
              is_compliant?: boolean | undefined
              label?: string | undefined
              members?:
                | { is_compliant?: boolean | undefined; linode_id?: number | undefined }[]
                | undefined
              placement_group_policy?: 'strict' | 'flexible' | undefined
              placement_group_type?: 'anti_affinity:local' | undefined
              region?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                label?: string | undefined
                placement_group_policy?: 'strict' | 'flexible' | undefined
                placement_group_type?: 'anti_affinity:local' | undefined
                region?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    id?: number | undefined
                    is_compliant?: boolean | undefined
                    label?: string | undefined
                    members?:
                      | { is_compliant?: boolean | undefined; linode_id?: number | undefined }[]
                      | undefined
                    migrations?:
                      | ({
                          inbound?: { linode_id?: number | undefined }[] | undefined
                          outbound?: { linode_id?: number | undefined }[] | undefined
                        } | null)
                      | undefined
                    placement_group_policy?: 'strict' | 'flexible' | undefined
                    placement_group_type?: 'anti_affinity:local' | undefined
                    region?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/placement/groups/:groupId': {
      $get: {
        input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } }
        output: {
          id?: number | undefined
          is_compliant?: boolean | undefined
          label?: string | undefined
          members?:
            | { is_compliant?: boolean | undefined; linode_id?: number | undefined }[]
            | undefined
          migrations?:
            | ({
                inbound?: { linode_id?: number | undefined }[] | undefined
                outbound?: { linode_id?: number | undefined }[] | undefined
              } | null)
            | undefined
          placement_group_policy?: 'strict' | 'flexible' | undefined
          placement_group_type?: 'anti_affinity:local' | undefined
          region?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } } & {
              json: { label?: string | undefined }
            }
            output: {
              id?: number | undefined
              is_compliant?: boolean | undefined
              label?: string | undefined
              members?:
                | { is_compliant?: boolean | undefined; linode_id?: number | undefined }[]
                | undefined
              placement_group_policy?: 'strict' | 'flexible' | undefined
              placement_group_type?: 'anti_affinity:local' | undefined
              region?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } } & {
              json: { label?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/placement/groups/:groupId/assign': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } } & {
              json: { linodes?: number[] | undefined }
            }
            output: {
              id?: number | undefined
              is_compliant?: boolean | undefined
              label?: string | undefined
              members?:
                | { is_compliant?: boolean | undefined; linode_id?: number | undefined }[]
                | undefined
              placement_group_policy?: 'strict' | 'flexible' | undefined
              placement_group_type?: 'anti_affinity:local' | undefined
              region?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } } & {
              json: { linodes?: number[] | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/placement/groups/:groupId/unassign': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } } & {
              json: { linodes?: number[] | undefined }
            }
            output: {
              id?: number | undefined
              is_compliant?: boolean | undefined
              label?: string | undefined
              members?:
                | { is_compliant?: boolean | undefined; linode_id?: number | undefined }[]
                | undefined
              placement_group_policy?: 'strict' | 'flexible' | undefined
              placement_group_type?: 'anti_affinity:local' | undefined
              region?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; groupId: number } } & {
              json: { linodes?: number[] | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              authentication_type?: 'password' | 'github' | undefined
              authorized_keys?: (string[] | null) | undefined
              email?: string | undefined
              email_notifications?: boolean | undefined
              ip_whitelist_enabled?: boolean | undefined
              lish_auth_method?: 'password_keys' | 'keys_only' | 'disabled' | undefined
              referrals?:
                | {
                    code?: string | undefined
                    completed?: number | undefined
                    credit?: number | undefined
                    pending?: number | undefined
                    total?: number | undefined
                    url?: string | undefined
                  }
                | undefined
              restricted?: boolean | undefined
              timezone?: string | undefined
              two_factor_auth?: boolean | undefined
              uid?: number | undefined
              username?: string | undefined
              verified_phone_number?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                authentication_type?: 'password' | 'github' | undefined
                authorized_keys?: (string[] | null) | undefined
                email?: string | undefined
                email_notifications?: boolean | undefined
                ip_whitelist_enabled?: boolean | undefined
                lish_auth_method?: 'password_keys' | 'keys_only' | 'disabled' | undefined
                referrals?:
                  | {
                      code?: string | undefined
                      completed?: number | undefined
                      credit?: number | undefined
                      pending?: number | undefined
                      total?: number | undefined
                      url?: string | undefined
                    }
                  | undefined
                restricted?: boolean | undefined
                timezone?: string | undefined
                two_factor_auth?: boolean | undefined
                uid?: number | undefined
                username?: string | undefined
                verified_phone_number?: (string | null) | undefined
              }
            }
            output: {
              authentication_type?: 'password' | 'github' | undefined
              authorized_keys?: (string[] | null) | undefined
              email?: string | undefined
              email_notifications?: boolean | undefined
              ip_whitelist_enabled?: boolean | undefined
              lish_auth_method?: 'password_keys' | 'keys_only' | 'disabled' | undefined
              referrals?:
                | {
                    code?: string | undefined
                    completed?: number | undefined
                    credit?: number | undefined
                    pending?: number | undefined
                    total?: number | undefined
                    url?: string | undefined
                  }
                | undefined
              restricted?: boolean | undefined
              timezone?: string | undefined
              two_factor_auth?: boolean | undefined
              uid?: number | undefined
              username?: string | undefined
              verified_phone_number?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                authentication_type?: 'password' | 'github' | undefined
                authorized_keys?: (string[] | null) | undefined
                email?: string | undefined
                email_notifications?: boolean | undefined
                ip_whitelist_enabled?: boolean | undefined
                lish_auth_method?: 'password_keys' | 'keys_only' | 'disabled' | undefined
                referrals?:
                  | {
                      code?: string | undefined
                      completed?: number | undefined
                      credit?: number | undefined
                      pending?: number | undefined
                      total?: number | undefined
                      url?: string | undefined
                    }
                  | undefined
                restricted?: boolean | undefined
                timezone?: string | undefined
                two_factor_auth?: boolean | undefined
                uid?: number | undefined
                username?: string | undefined
                verified_phone_number?: (string | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/apps': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    expiry?: (string | null) | undefined
                    id?: number | undefined
                    label?: string | undefined
                    scopes?: string | undefined
                    thumbnail_url?: (string | null) | undefined
                    website?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/apps/:appId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; appId: number } }
            output: {
              created?: string | undefined
              expiry?: (string | null) | undefined
              id?: number | undefined
              label?: string | undefined
              scopes?: string | undefined
              thumbnail_url?: (string | null) | undefined
              website?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; appId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; appId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; appId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/devices': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    created?: string | undefined
                    expiry?: string | undefined
                    id?: number | undefined
                    last_authenticated?: string | undefined
                    last_remote_addr?: string | undefined
                    user_agent?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/devices/:deviceId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; deviceId: number } }
            output: {
              created?: string | undefined
              expiry?: string | undefined
              id?: number | undefined
              last_authenticated?: string | undefined
              last_remote_addr?: string | undefined
              user_agent?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; deviceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; deviceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; deviceId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/grants': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              database?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              domain?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              firewall?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              global?:
                | {
                    account_access?: 'read_only' | 'read_write' | undefined
                    add_databases?: boolean | undefined
                    add_domains?: boolean | undefined
                    add_firewalls?: boolean | undefined
                    add_images?: boolean | undefined
                    add_linodes?: boolean | undefined
                    add_longview?: boolean | undefined
                    add_nodebalancers?: boolean | undefined
                    add_stackscripts?: boolean | undefined
                    add_volumes?: boolean | undefined
                    add_vpcs?: boolean | undefined
                    cancel_account?: boolean | undefined
                    child_account_access?: (boolean | null) | undefined
                    longview_subscription?: boolean | undefined
                  }
                | undefined
              image?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              linode?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              longview?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              nodebalancer?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              stackscript?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              volume?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
              vpc?:
                | {
                    id?: number | undefined
                    label?: string | undefined
                    permissions?: 'read_only' | 'read_write' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/logins': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    datetime?: string | undefined
                    id?: number | undefined
                    ip?: string | undefined
                    restricted?: boolean | undefined
                    status?: 'successful' | 'failed' | undefined
                    username?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/logins/:loginId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; loginId: number } }
            output: {
              datetime?: string | undefined
              id?: number | undefined
              ip?: string | undefined
              restricted?: boolean | undefined
              status?: 'successful' | 'failed' | undefined
              username?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; loginId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/phone-number': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { iso_code: string; phone_number: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { iso_code: string; phone_number: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/phone-number/verify': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & { json: { otp_code: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & { json: { otp_code: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/preferences': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & { json: { [x: string]: unknown } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/security-questions': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                security_questions?:
                  | {
                      question_id?: number | undefined
                      response?: string | undefined
                      security_question?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              security_questions?:
                | {
                    question_id?: number | undefined
                    response?: string | undefined
                    security_question?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                security_questions?:
                  | {
                      question_id?: number | undefined
                      response?: string | undefined
                      security_question?: string | undefined
                    }[]
                  | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              security_questions?:
                | {
                    id?: number | undefined
                    question?: string | undefined
                    response?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/sshkeys': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                created?: string | undefined
                id?: number | undefined
                label?: string | undefined
                ssh_key?: string | undefined
              }
            }
            output: {
              created?: string | undefined
              id?: number | undefined
              label?: string | undefined
              ssh_key?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                created?: string | undefined
                id?: number | undefined
                label?: string | undefined
                ssh_key?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    id?: number | undefined
                    label?: string | undefined
                    ssh_key?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/sshkeys/:sshKeyId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sshKeyId: number } }
            output: {
              created?: string | undefined
              id?: number | undefined
              label?: string | undefined
              ssh_key?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sshKeyId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sshKeyId: number } } & {
              json: { label?: string | undefined }
            }
            output: {
              created?: string | undefined
              id?: number | undefined
              label?: string | undefined
              ssh_key?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sshKeyId: number } } & {
              json: { label?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sshKeyId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; sshKeyId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/tfa-disable': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/tfa-enable': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: { expiry?: string | undefined; secret?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/tfa-enable-confirm': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { tfa_code?: string | undefined }
            }
            output: { scratch?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: { tfa_code?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/tokens': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                expiry?: (string | null) | undefined
                label?: string | undefined
                scopes?: string | undefined
              }
            }
            output: {
              created?: string | undefined
              expiry?: string | undefined
              id?: number | undefined
              label?: string | undefined
              scopes?: string | undefined
              token?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                expiry?: (string | null) | undefined
                label?: string | undefined
                scopes?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    created?: string | undefined
                    expiry?: string | undefined
                    id?: number | undefined
                    label?: string | undefined
                    scopes?: string | undefined
                    token?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/profile/tokens/:tokenId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenId: number } }
            output: {
              created?: string | undefined
              expiry?: string | undefined
              id?: number | undefined
              label?: string | undefined
              scopes?: string | undefined
              token?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenId: number } } & {
              json: {
                created?: string | undefined
                expiry?: string | undefined
                id?: number | undefined
                label?: string | undefined
                scopes?: string | undefined
                token?: string | undefined
              }
            }
            output: {
              created?: string | undefined
              expiry?: string | undefined
              id?: number | undefined
              label?: string | undefined
              scopes?: string | undefined
              token?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenId: number } } & {
              json: {
                created?: string | undefined
                expiry?: string | undefined
                id?: number | undefined
                label?: string | undefined
                scopes?: string | undefined
                token?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tokenId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/regions': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    capabilities?: string[] | undefined
                    country?: string | undefined
                    id?: string | undefined
                    label?: string | undefined
                    monitors?: { alerts: string[]; metrics: string[] } | undefined
                    placement_group_limits?:
                      | {
                          maximum_linodes_per_flexible_pg?: (number | null) | undefined
                          maximum_linodes_per_pg?: (number | null) | undefined
                          maximum_pgs_per_customer?: (number | null) | undefined
                        }
                      | undefined
                    resolvers?: { ipv4?: string | undefined; ipv6?: string | undefined } | undefined
                    site_type?: 'core' | 'distributed' | undefined
                    status?: 'ok' | 'outage' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/regions/availability': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    available?: boolean | undefined
                    plan?: string | undefined
                    region?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/regions/:regionId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string } }
            output: {
              capabilities?: string[] | undefined
              country?: string | undefined
              id?: string | undefined
              label?: string | undefined
              monitors?: { alerts: string[]; metrics: string[] } | undefined
              placement_group_limits?:
                | {
                    maximum_linodes_per_flexible_pg?: (number | null) | undefined
                    maximum_linodes_per_pg?: (number | null) | undefined
                    maximum_pgs_per_customer?: (number | null) | undefined
                  }
                | undefined
              resolvers?: { ipv4?: string | undefined; ipv6?: string | undefined } | undefined
              site_type?: 'core' | 'distributed' | undefined
              status?: 'ok' | 'outage' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/regions/:regionId/availability': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string } }
            output: {
              available?: boolean | undefined
              plan?: string | undefined
              region?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; regionId: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/support/tickets': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                bucket?: (string | null) | undefined
                database_id?: (number | null) | undefined
                description: string
                domain_id?: (number | null) | undefined
                firewall_id?: (number | null) | undefined
                linode_id?: (number | null) | undefined
                lkecluster_id?: (number | null) | undefined
                longviewclient_id?: (number | null) | undefined
                managed_issue?: boolean | undefined
                nodebalancer_id?: (number | null) | undefined
                region?: (string | null) | undefined
                severity?: 1 | 2 | 3 | undefined
                summary: string
                vlan?: (string | null) | undefined
                volume_id?: (number | null) | undefined
                vpc_id?: (number | null) | undefined
              }
            }
            output: {
              attachments?: string[] | undefined
              closable?: boolean | undefined
              closed?: (string | null) | undefined
              description?: string | undefined
              entity?:
                | ({
                    id?: number | undefined
                    label?: string | undefined
                    type?:
                      | 'database'
                      | 'domain'
                      | 'firewall'
                      | 'linode'
                      | 'lkecluster'
                      | 'managed_service'
                      | 'nodebalancer'
                      | 'vlan'
                      | 'volume'
                      | 'vpc'
                      | undefined
                    url?: string | undefined
                  } | null)
                | undefined
              gravatar_id?: string | undefined
              id?: number | undefined
              opened?: string | undefined
              opened_by?: string | undefined
              severity?: 'low' | 'moderate' | 'major' | undefined
              status?: 'closed' | 'new' | 'open' | undefined
              summary?: string | undefined
              updated?: string | undefined
              updated_by?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                bucket?: (string | null) | undefined
                database_id?: (number | null) | undefined
                description: string
                domain_id?: (number | null) | undefined
                firewall_id?: (number | null) | undefined
                linode_id?: (number | null) | undefined
                lkecluster_id?: (number | null) | undefined
                longviewclient_id?: (number | null) | undefined
                managed_issue?: boolean | undefined
                nodebalancer_id?: (number | null) | undefined
                region?: (string | null) | undefined
                severity?: 1 | 2 | 3 | undefined
                summary: string
                vlan?: (string | null) | undefined
                volume_id?: (number | null) | undefined
                vpc_id?: (number | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    attachments?: string[] | undefined
                    closable?: boolean | undefined
                    closed?: (string | null) | undefined
                    description?: string | undefined
                    entity?:
                      | ({
                          id?: number | undefined
                          label?: string | undefined
                          type?:
                            | 'database'
                            | 'domain'
                            | 'firewall'
                            | 'linode'
                            | 'lkecluster'
                            | 'managed_service'
                            | 'nodebalancer'
                            | 'vlan'
                            | 'volume'
                            | 'vpc'
                            | undefined
                          url?: string | undefined
                        } | null)
                      | undefined
                    gravatar_id?: string | undefined
                    id?: number | undefined
                    opened?: string | undefined
                    opened_by?: string | undefined
                    severity?: 'low' | 'moderate' | 'major' | undefined
                    status?: 'closed' | 'new' | 'open' | undefined
                    summary?: string | undefined
                    updated?: string | undefined
                    updated_by?: (string | null) | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/support/tickets/:ticketId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } }
            output: {
              attachments?: string[] | undefined
              closable?: boolean | undefined
              closed?: (string | null) | undefined
              description?: string | undefined
              entity?:
                | ({
                    id?: number | undefined
                    label?: string | undefined
                    type?:
                      | 'database'
                      | 'domain'
                      | 'firewall'
                      | 'linode'
                      | 'lkecluster'
                      | 'managed_service'
                      | 'nodebalancer'
                      | 'vlan'
                      | 'volume'
                      | 'vpc'
                      | undefined
                    url?: string | undefined
                  } | null)
                | undefined
              gravatar_id?: string | undefined
              id?: number | undefined
              opened?: string | undefined
              opened_by?: string | undefined
              severity?: 'low' | 'moderate' | 'major' | undefined
              status?: 'closed' | 'new' | 'open' | undefined
              summary?: string | undefined
              updated?: string | undefined
              updated_by?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/support/tickets/:ticketId/attachments': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } } & {
              form: { file: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } } & {
              form: { file: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/support/tickets/:ticketId/close': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/support/tickets/:ticketId/replies': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } } & {
              json: { description: string }
            }
            output: {
              created?: string | undefined
              created_by?: string | undefined
              description?: string | undefined
              from_linode?: boolean | undefined
              gravatar_id?: string | undefined
              id?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } } & {
              json: { description: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    created_by?: string | undefined
                    description?: string | undefined
                    from_linode?: boolean | undefined
                    gravatar_id?: string | undefined
                    id?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; ticketId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/tags': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                domains?: number[] | undefined
                label: string
                linodes?: number[] | undefined
                nodebalancers?: number[] | undefined
                volumes?: number[] | undefined
              }
            }
            output: { label?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                domains?: number[] | undefined
                label: string
                linodes?: number[] | undefined
                nodebalancers?: number[] | undefined
                volumes?: number[] | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: { label?: string | undefined }[] | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/tags/:tagLabel': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tagLabel: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    data?:
                      | {
                          alerts?:
                            | {
                                cpu?: number | undefined
                                io?: number | undefined
                                network_in?: number | undefined
                                network_out?: number | undefined
                                transfer_quota?: number | undefined
                              }
                            | undefined
                          backups?:
                            | {
                                available?: boolean | undefined
                                enabled?: boolean | undefined
                                last_successful?: string | undefined
                                schedule?:
                                  | {
                                      day?:
                                        | 'Scheduling'
                                        | 'Sunday'
                                        | 'Monday'
                                        | 'Tuesday'
                                        | 'Wednesday'
                                        | 'Thursday'
                                        | 'Friday'
                                        | 'Saturday'
                                        | undefined
                                      window?:
                                        | 'Scheduling'
                                        | 'W0'
                                        | 'W2'
                                        | 'W4'
                                        | 'W6'
                                        | 'W8'
                                        | 'W10'
                                        | 'W12'
                                        | 'W14'
                                        | 'W16'
                                        | 'W18'
                                        | 'W20'
                                        | 'W22'
                                        | undefined
                                    }
                                  | undefined
                              }
                            | undefined
                          capabilities?: string[] | undefined
                          created?: string | undefined
                          disk_encryption?: (string | null) | undefined
                          group?: string | undefined
                          has_user_data?: boolean | undefined
                          host_uuid?: string | undefined
                          hypervisor?: 'kvm' | undefined
                          id?: number | undefined
                          image?: {} | undefined
                          interface_generation?: 'legacy_config' | 'linode' | undefined
                          ipv4?: string[] | undefined
                          ipv6?: (string | null) | undefined
                          label?: string | undefined
                          lke_cluster_id?: (number | null) | undefined
                          maintenance_policy?: 'linode/migrate' | 'linode/power_off_on' | undefined
                          placement_group?:
                            | ({
                                id?: number | undefined
                                label?: string | undefined
                                placement_group_policy?: 'strict' | 'flexible' | undefined
                                placement_group_type?: 'anti_affinity:local' | undefined
                              } | null)
                            | undefined
                          region?: string | undefined
                          specs?:
                            | {
                                disk?: number | undefined
                                gpus?: number | undefined
                                memory?: number | undefined
                                transfer?: number | undefined
                                vcpus?: number | undefined
                              }
                            | undefined
                          status?:
                            | 'running'
                            | 'offline'
                            | 'booting'
                            | 'busy'
                            | 'rebooting'
                            | 'shutting_down'
                            | 'provisioning'
                            | 'deleting'
                            | 'migrating'
                            | 'rebuilding'
                            | 'cloning'
                            | 'restoring'
                            | 'stopped'
                            | 'billing_suspension'
                            | undefined
                          tags?: string[] | undefined
                          type?: string | undefined
                          updated?: string | undefined
                          watchdog_enabled?: boolean | undefined
                        }
                      | {
                          axfr_ips?: string[] | undefined
                          description?: (string | null) | undefined
                          domain?: string | undefined
                          expire_sec?: number | undefined
                          group?: (string | null) | undefined
                          id?: number | undefined
                          master_ips?: string[] | undefined
                          refresh_sec?: number | undefined
                          retry_sec?: number | undefined
                          soa_email?: string | undefined
                          status?: 'disabled' | 'active' | undefined
                          tags?: string[] | undefined
                          ttl_sec?: number | undefined
                          type?: 'master' | 'slave' | undefined
                        }
                      | {
                          created?: string | undefined
                          encryption?: 'enabled' | 'disabled' | undefined
                          filesystem_path?: string | undefined
                          hardware_type?: 'hdd' | 'nvme' | undefined
                          id?: number | undefined
                          io_ready?: boolean | undefined
                          label?: string | undefined
                          linode_id?: (number | null) | undefined
                          linode_label?: (string | null) | undefined
                          region?: string | undefined
                          size?: number | undefined
                          status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
                          tags?: string[] | undefined
                          updated?: string | undefined
                        }
                      | {
                          client_conn_throttle?: number | undefined
                          created?: string | undefined
                          hostname?: string | undefined
                          id?: number | undefined
                          ipv4?: string | undefined
                          ipv6?: (string | null) | undefined
                          label?: string | undefined
                          lke_cluster?:
                            | ({
                                id?: string | undefined
                                label?: string | undefined
                                type?: string | undefined
                                url?: string | undefined
                              } | null)
                            | undefined
                          region?: string | undefined
                          tags?: string[] | undefined
                          transfer?:
                            | {
                                in?: (number | null) | undefined
                                out?: (number | null) | undefined
                                total?: (number | null) | undefined
                              }
                            | undefined
                          type?: 'common' | 'premium' | undefined
                          updated?: string | undefined
                        }
                      | undefined
                    type?: 'domain' | 'linode' | 'nodebalancer' | 'volume' | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tagLabel: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tagLabel: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; tagLabel: string } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/volumes': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                config_id?: number | undefined
                encryption?: 'enabled' | 'disabled' | undefined
                label: string
                linode_id?: number | undefined
                region?: (string | null) | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: {
              created?: string | undefined
              encryption?: 'enabled' | 'disabled' | undefined
              filesystem_path?: string | undefined
              hardware_type?: 'hdd' | 'nvme' | undefined
              id?: number | undefined
              io_ready?: boolean | undefined
              label?: string | undefined
              linode_id?: (number | null) | undefined
              linode_label?: (string | null) | undefined
              region?: string | undefined
              size?: number | undefined
              status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                config_id?: number | undefined
                encryption?: 'enabled' | 'disabled' | undefined
                label: string
                linode_id?: number | undefined
                region?: (string | null) | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    created?: string | undefined
                    encryption?: 'enabled' | 'disabled' | undefined
                    filesystem_path?: string | undefined
                    hardware_type?: 'hdd' | 'nvme' | undefined
                    id?: number | undefined
                    io_ready?: boolean | undefined
                    label?: string | undefined
                    linode_id?: (number | null) | undefined
                    linode_label?: (string | null) | undefined
                    region?: string | undefined
                    size?: number | undefined
                    status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
                    tags?: string[] | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/volumes/types': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              data?:
                | {
                    id?: string | undefined
                    label?: string | undefined
                    price?:
                      | { hourly?: number | undefined; monthly?: number | undefined }
                      | undefined
                    region_prices?:
                      | {
                          hourly?: number | undefined
                          id?: string | undefined
                          monthly?: number | undefined
                        }[]
                      | undefined
                    transfer?: number | undefined
                  }[]
                | undefined
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/volumes/:volumeId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              created?: string | undefined
              encryption?: 'enabled' | 'disabled' | undefined
              filesystem_path?: string | undefined
              hardware_type?: 'hdd' | 'nvme' | undefined
              id?: number | undefined
              io_ready?: boolean | undefined
              label?: string | undefined
              linode_id?: (number | null) | undefined
              linode_label?: (string | null) | undefined
              region?: string | undefined
              size?: number | undefined
              status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              json: {
                created?: string | undefined
                encryption?: 'enabled' | 'disabled' | undefined
                filesystem_path?: string | undefined
                hardware_type?: 'hdd' | 'nvme' | undefined
                id?: number | undefined
                io_ready?: boolean | undefined
                label?: string | undefined
                linode_id?: { [x: string]: unknown } | undefined
                linode_label?: (string | null) | undefined
                region?: string | undefined
                size?: { [x: string]: unknown } | undefined
                status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
                tags?: string[] | undefined
                updated?: string | undefined
              }
            }
            output: {
              created?: string | undefined
              encryption?: 'enabled' | 'disabled' | undefined
              filesystem_path?: string | undefined
              hardware_type?: 'hdd' | 'nvme' | undefined
              id?: number | undefined
              io_ready?: boolean | undefined
              label?: string | undefined
              linode_id?: (number | null) | undefined
              linode_label?: (string | null) | undefined
              region?: string | undefined
              size?: number | undefined
              status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              json: {
                created?: string | undefined
                encryption?: 'enabled' | 'disabled' | undefined
                filesystem_path?: string | undefined
                hardware_type?: 'hdd' | 'nvme' | undefined
                id?: number | undefined
                io_ready?: boolean | undefined
                label?: string | undefined
                linode_id?: { [x: string]: unknown } | undefined
                linode_label?: (string | null) | undefined
                region?: string | undefined
                size?: { [x: string]: unknown } | undefined
                status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
                tags?: string[] | undefined
                updated?: string | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/volumes/:volumeId/attach': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              json: {
                config_id?: number | undefined
                linode_id: number
                persist_across_boots?: boolean | undefined
              }
            }
            output: {
              created?: string | undefined
              encryption?: 'enabled' | 'disabled' | undefined
              filesystem_path?: string | undefined
              hardware_type?: 'hdd' | 'nvme' | undefined
              id?: number | undefined
              io_ready?: boolean | undefined
              label?: string | undefined
              linode_id?: (number | null) | undefined
              linode_label?: (string | null) | undefined
              region?: string | undefined
              size?: number | undefined
              status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              json: {
                config_id?: number | undefined
                linode_id: number
                persist_across_boots?: boolean | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/volumes/:volumeId/clone': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              json: { label: string }
            }
            output: {
              created?: string | undefined
              encryption?: 'enabled' | 'disabled' | undefined
              filesystem_path?: string | undefined
              hardware_type?: 'hdd' | 'nvme' | undefined
              id?: number | undefined
              io_ready?: boolean | undefined
              label?: string | undefined
              linode_id?: (number | null) | undefined
              linode_label?: (string | null) | undefined
              region?: string | undefined
              size?: number | undefined
              status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              json: { label: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/volumes/:volumeId/detach': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/volumes/:volumeId/resize': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              json: { size: number }
            }
            output: {
              created?: string | undefined
              encryption?: 'enabled' | 'disabled' | undefined
              filesystem_path?: string | undefined
              hardware_type?: 'hdd' | 'nvme' | undefined
              id?: number | undefined
              io_ready?: boolean | undefined
              label?: string | undefined
              linode_id?: (number | null) | undefined
              linode_label?: (string | null) | undefined
              region?: string | undefined
              size?: number | undefined
              status?: 'creating' | 'active' | 'resizing' | 'key_rotating' | undefined
              tags?: string[] | undefined
              updated?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; volumeId: number } } & {
              json: { size: number }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/vpcs': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                subnets?:
                  | {
                      created?: string | undefined
                      id?: number | undefined
                      ipv4?: string | undefined
                      label?: string | undefined
                      linodes?:
                        | {
                            id?: number | undefined
                            interfaces?:
                              | {
                                  active?: boolean | undefined
                                  config_id?: (number | null) | undefined
                                  id?: number | undefined
                                }[]
                              | undefined
                          }[]
                        | undefined
                      updated?: (string | null) | undefined
                    }[]
                  | undefined
                created?: string | undefined
                description?: string | undefined
                id?: number | undefined
                label?: string | undefined
                region?: string | undefined
                updated?: (string | null) | undefined
              }
            }
            output: {
              created?: string | undefined
              description?: string | undefined
              id?: number | undefined
              label?: string | undefined
              region?: string | undefined
              subnets?:
                | {
                    created?: string | undefined
                    id?: number | undefined
                    ipv4?: string | undefined
                    label?: string | undefined
                    linodes?:
                      | {
                          id?: number | undefined
                          interfaces?:
                            | {
                                active?: boolean | undefined
                                config_id?: (number | null) | undefined
                                id?: number | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                    updated?: (string | null) | undefined
                  }[]
                | undefined
              updated?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              json: {
                subnets?:
                  | {
                      created?: string | undefined
                      id?: number | undefined
                      ipv4?: string | undefined
                      label?: string | undefined
                      linodes?:
                        | {
                            id?: number | undefined
                            interfaces?:
                              | {
                                  active?: boolean | undefined
                                  config_id?: (number | null) | undefined
                                  id?: number | undefined
                                }[]
                              | undefined
                          }[]
                        | undefined
                      updated?: (string | null) | undefined
                    }[]
                  | undefined
                created?: string | undefined
                description?: string | undefined
                id?: number | undefined
                label?: string | undefined
                region?: string | undefined
                updated?: (string | null) | undefined
              }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    created?: string | undefined
                    description?: string | undefined
                    id?: number | undefined
                    label?: string | undefined
                    region?: string | undefined
                    subnets?:
                      | {
                          created?: string | undefined
                          id?: number | undefined
                          ipv4?: string | undefined
                          label?: string | undefined
                          linodes?:
                            | {
                                id?: number | undefined
                                interfaces?:
                                  | {
                                      active?: boolean | undefined
                                      config_id?: (number | null) | undefined
                                      id?: number | undefined
                                    }[]
                                  | undefined
                              }[]
                            | undefined
                          updated?: (string | null) | undefined
                        }[]
                      | undefined
                    updated?: (string | null) | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/vpcs/ips': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    active?: boolean | undefined
                    address?: (string | null) | undefined
                    address_range?: (string | null) | undefined
                    config_id?: (number | null) | undefined
                    gateway?: (string | null) | undefined
                    interface_id?: number | undefined
                    linode_id?: number | undefined
                    nat_1_1?: string | undefined
                    prefix?: (number | null) | undefined
                    region?: string | undefined
                    subnet_id?: number | undefined
                    subnet_mask?: string | undefined
                    vpc_id?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta' } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/vpcs/:vpcId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } }
            output: {
              created?: string | undefined
              description?: string | undefined
              id?: number | undefined
              label?: string | undefined
              region?: string | undefined
              subnets?:
                | {
                    created?: string | undefined
                    id?: number | undefined
                    ipv4?: string | undefined
                    label?: string | undefined
                    linodes?:
                      | {
                          id?: number | undefined
                          interfaces?:
                            | {
                                active?: boolean | undefined
                                config_id?: (number | null) | undefined
                                id?: number | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                    updated?: (string | null) | undefined
                  }[]
                | undefined
              updated?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } } & {
              json: { description?: string | undefined; label?: string | undefined }
            }
            output: {
              created?: string | undefined
              description?: string | undefined
              id?: number | undefined
              label?: string | undefined
              region?: string | undefined
              subnets?:
                | {
                    created?: string | undefined
                    id?: number | undefined
                    ipv4?: string | undefined
                    label?: string | undefined
                    linodes?:
                      | {
                          id?: number | undefined
                          interfaces?:
                            | {
                                active?: boolean | undefined
                                config_id?: (number | null) | undefined
                                id?: number | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                    updated?: (string | null) | undefined
                  }[]
                | undefined
              updated?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } } & {
              json: { description?: string | undefined; label?: string | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/vpcs/:vpcId/ips': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    active?: boolean | undefined
                    address?: (string | null) | undefined
                    address_range?: (string | null) | undefined
                    config_id?: (number | null) | undefined
                    gateway?: (string | null) | undefined
                    interface_id?: number | undefined
                    linode_id?: number | undefined
                    nat_1_1?: string | undefined
                    prefix?: (number | null) | undefined
                    region?: string | undefined
                    subnet_id?: number | undefined
                    subnet_mask?: string | undefined
                    vpc_id?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/vpcs/:vpcId/subnets': {
      $post:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } } & {
              json: { ipv4: string; label: string }
            }
            output: {
              created?: string | undefined
              id?: number | undefined
              ipv4?: string | undefined
              label?: string | undefined
              linodes?:
                | {
                    id?: number | undefined
                    interfaces?:
                      | {
                          active?: boolean | undefined
                          config_id?: (number | null) | undefined
                          id?: number | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
              updated?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } } & {
              json: { ipv4: string; label: string }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: number | undefined
              pages?: number | undefined
              results?: number | undefined
              data?:
                | {
                    created?: string | undefined
                    id?: number | undefined
                    ipv4?: string | undefined
                    label?: string | undefined
                    linodes?:
                      | {
                          id?: number | undefined
                          interfaces?:
                            | {
                                active?: boolean | undefined
                                config_id?: (number | null) | undefined
                                id?: number | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                    updated?: (string | null) | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:apiVersion/vpcs/:vpcId/subnets/:vpcSubnetId': {
      $get:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number; vpcSubnetId: number } }
            output: {
              created?: string | undefined
              id?: number | undefined
              ipv4?: string | undefined
              label?: string | undefined
              linodes?:
                | {
                    id?: number | undefined
                    interfaces?:
                      | {
                          active?: boolean | undefined
                          config_id?: (number | null) | undefined
                          id?: number | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
              updated?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number; vpcSubnetId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; vpcId: number; vpcSubnetId: number }
            } & { json: { label?: string | undefined } }
            output: {
              created?: string | undefined
              id?: number | undefined
              ipv4?: string | undefined
              label?: string | undefined
              linodes?:
                | {
                    id?: number | undefined
                    interfaces?:
                      | {
                          active?: boolean | undefined
                          config_id?: (number | null) | undefined
                          id?: number | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
              updated?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { apiVersion: 'v4' | 'v4beta'; vpcId: number; vpcSubnetId: number }
            } & { json: { label?: string | undefined } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number; vpcSubnetId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiVersion: 'v4' | 'v4beta'; vpcId: number; vpcSubnetId: number } }
            output: {
              errors?: { field?: string | undefined; reason?: string | undefined }[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
