type AIGatewayKeyCreateRequestBody = {
  budget?: { [x: string]: unknown } | undefined
  description?: string | undefined
  expiry_time?: string | undefined
  name: string
  owner_user_id?: string | undefined
}
type AIGatewayKeyCreateResponse = {
  budget?: { [x: string]: unknown } | undefined
  create_time: string
  description?: string | undefined
  expiry_time?: string | undefined
  key: string
  key_id: string
  key_suffix: string
  name: string
  owner: {
    is_application_user?: boolean | undefined
    real_name?: string | undefined
    user_email?: string | undefined
    user_id: string
  }
  owner_user_id: string
  revocation_time?: string | undefined
  spend?:
    | { daily_spent_usd: string; metered_until?: string | undefined; monthly_spent_usd: string }
    | undefined
}
type AIGatewayKeyListResponse = {
  default_key_budget?:
    | {
        daily: {
          amount_usd: string
          effective_usd: string
          mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
          source: 'own' | 'default' | 'none' | 'unavailable'
        }
        monthly: {
          amount_usd: string
          effective_usd: string
          mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
          source: 'own' | 'default' | 'none' | 'unavailable'
        }
      }
    | undefined
  first?: string | undefined
  keys: {
    budget?: { [x: string]: unknown } | undefined
    create_time: string
    description?: string | undefined
    expiry_time?: string | undefined
    key_id: string
    key_suffix: string
    name: string
    owner: {
      is_application_user?: boolean | undefined
      real_name?: string | undefined
      user_email?: string | undefined
      user_id: string
    }
    owner_user_id: string
    revocation_time?: string | undefined
    spend?:
      | { daily_spent_usd: string; metered_until?: string | undefined; monthly_spent_usd: string }
      | undefined
  }[]
  last?: string | undefined
  next?: string | undefined
  prev?: string | undefined
}
type AIGatewayKeyGetResponse = {
  key: {
    budget?: { [x: string]: unknown } | undefined
    create_time: string
    description?: string | undefined
    expiry_time?: string | undefined
    key_id: string
    key_suffix: string
    name: string
    owner: {
      is_application_user?: boolean | undefined
      real_name?: string | undefined
      user_email?: string | undefined
      user_id: string
    }
    owner_user_id: string
    revocation_time?: string | undefined
    spend?:
      | { daily_spent_usd: string; metered_until?: string | undefined; monthly_spent_usd: string }
      | undefined
  }
}
type AIGatewayKeyUpdateRequestBody = {
  budget?: { [x: string]: unknown } | undefined
  description?: string | undefined
  name?: string | undefined
  owner_user_id?: string | undefined
}
type AIGatewayKeyUpdateResponse = {
  budget?: { [x: string]: unknown } | undefined
  create_time: string
  description?: string | undefined
  expiry_time?: string | undefined
  key_id: string
  key_suffix: string
  name: string
  owner: {
    is_application_user?: boolean | undefined
    real_name?: string | undefined
    user_email?: string | undefined
    user_id: string
  }
  owner_user_id: string
  revocation_time?: string | undefined
  spend?:
    | { daily_spent_usd: string; metered_until?: string | undefined; monthly_spent_usd: string }
    | undefined
}
type AIGatewayKeyOwnerListResponse = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  owners: {
    is_application_user?: boolean | undefined
    real_name?: string | undefined
    user_email?: string | undefined
    user_id: string
  }[]
  prev?: string | undefined
}
type AIGatewayModelListResponse = {
  models: {
    cache_read_usd_per_million_tokens: number
    cache_write_usd_per_million_tokens: number
    context_window_tokens: number
    creator: string
    featured: boolean
    input_usd_per_million_tokens: number
    model_name: string
    output_usd_per_million_tokens: number
    provider: string
  }[]
}
type AIGatewayOrganizationBudgetSetRequestBody = {
  default_key_budget?: { [x: string]: unknown } | undefined
  default_owner_budget?: { [x: string]: unknown } | undefined
  default_project_budget?: { [x: string]: unknown } | undefined
  organization_budget?: { [x: string]: unknown } | undefined
}
type AIGatewayOrganizationBudgetSetResponse = {
  configured: boolean
  default_key_budget: {
    daily: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
    monthly: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
  }
  default_owner_budget: { [x: string]: unknown }
  default_project_budget: { [x: string]: unknown }
  organization_budget: { [x: string]: unknown }
}
type AIGatewayOrganizationBudgetsGetResponse = {
  configured: boolean
  credits?: { charged_usd: string; granted_usd: string; remaining_usd: string } | undefined
  default_key_budget: {
    daily: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
    monthly: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
  }
  default_owner_budget: { [x: string]: unknown }
  default_project_budget: { [x: string]: unknown }
  metered_until?: string | undefined
  organization_budget: {
    daily: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
    daily_spent_usd: string
    monthly: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
    monthly_spent_usd: string
  }
  owners: {
    active_key_count: number
    daily: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
    daily_spent_usd: string
    monthly: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
    monthly_spent_usd: string
    owner: {
      is_application_user?: boolean | undefined
      real_name?: string | undefined
      user_email?: string | undefined
      user_id: string
    }
    owner_user_id: string
    project_ids: string[]
  }[]
  projects: {
    active_key_count: number
    billing_group_id?: string | undefined
    daily: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
    daily_spent_usd: string
    monthly: {
      amount_usd: string
      effective_usd: string
      mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
      source: 'own' | 'default' | 'none' | 'unavailable'
    }
    monthly_spent_usd: string
    project_id: string
    project_name?: string | undefined
  }[]
}
type AIGatewayOrganizationKeyBudgetsUpdateRequestBody = {
  key_ids?: string[] | undefined
  owner_user_id?: string | undefined
}
type AIGatewayOrganizationKeyBudgetsUpdateResponse = { key_ids: string[] }
type AIGatewayOrganizationKeyListResponse = {
  keys: {
    budget?: { [x: string]: unknown } | undefined
    create_time: string
    description?: string | undefined
    expiry_time?: string | undefined
    key_id: string
    key_suffix: string
    name: string
    owner: {
      is_application_user?: boolean | undefined
      real_name?: string | undefined
      user_email?: string | undefined
      user_id: string
    }
    owner_user_id: string
    project_id: string
    project_name: string
    revocation_time?: string | undefined
    spend?:
      | { daily_spent_usd: string; metered_until?: string | undefined; monthly_spent_usd: string }
      | undefined
  }[]
}
type AIGatewayOrganizationOwnerBudgetSetResponse = {
  daily: {
    amount_usd: string
    effective_usd: string
    mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
    source: 'own' | 'default' | 'none' | 'unavailable'
  }
  monthly: {
    amount_usd: string
    effective_usd: string
    mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
    source: 'own' | 'default' | 'none' | 'unavailable'
  }
  owner_user_id: string
}
type AIGatewayProjectBudgetGetResponse = {
  daily: {
    amount_usd: string
    effective_usd: string
    mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
    source: 'own' | 'default' | 'none' | 'unavailable'
  }
  daily_spent_usd: string
  monthly: {
    amount_usd: string
    effective_usd: string
    mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
    source: 'own' | 'default' | 'none' | 'unavailable'
  }
  monthly_spent_usd: string
}
type AIGatewayProjectBudgetSetResponse = {
  daily: {
    amount_usd: string
    effective_usd: string
    mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
    source: 'own' | 'default' | 'none' | 'unavailable'
  }
  daily_spent_usd: string
  monthly: {
    amount_usd: string
    effective_usd: string
    mode: 'limit' | 'inherit' | 'ordinary' | 'exception' | 'unlimited'
    source: 'own' | 'default' | 'none' | 'unavailable'
  }
  monthly_spent_usd: string
}
type AIGatewayUsageGetResponse = {
  usage: {
    cache_read_tokens: number
    cache_write_tokens: number
    estimated_cost_usd?: number | undefined
    input_tokens: number
    key_id?: string | undefined
    model_name: string
    output_tokens: number
    request_count: number
    timestamp: string
    total_tokens: number
    uncached_input_tokens: number
  }[]
}
type AccountAttachPaymentMethodResponse = {
  card: {
    brand: string
    card_id: string
    country: string
    country_code: string
    exp_month: number
    exp_year: number
    last4: string
    name: string
    organization_id?: string | undefined
    projects: string[]
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountPaymentMethodsListResponse = {
  cards: {
    brand: string
    card_id: string
    country: string
    country_code: string
    exp_month: number
    exp_year: number
    last4: string
    name: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountAuthenticationMethodCreateRequestBody = {
  auth_token_extend_when_used?: boolean | undefined
  auth_token_max_age_seconds?: number | undefined
  authentication_method_name: string
  authentication_method_type: 'internal' | 'saml'
  auto_join_team_id?: string | undefined
  auto_join_user_group_id?: string | undefined
  linked_domains?: { domain_id: string }[] | undefined
  saml_assertion_signed_enabled?: boolean | undefined
  saml_authn_requests_signed_enabled?: boolean | undefined
  saml_certificate?: string | undefined
  saml_digest_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512' | undefined
  saml_entity_id?: string | undefined
  saml_field_mapping?:
    | {
        email?: string | undefined
        first_name?: string | undefined
        groups?: string | undefined
        identity?: string | undefined
        last_name?: string | undefined
        real_name?: string | undefined
      }
    | undefined
  saml_idp_login_allowed?: boolean | undefined
  saml_idp_url?: string | undefined
  saml_join_groups?: boolean | undefined
  saml_requested_authn_context_enabled?: boolean | undefined
  saml_signature_algorithm?:
    | 'rsa-sha1'
    | 'dsa-sha1'
    | 'rsa-sha256'
    | 'rsa-sha384'
    | 'rsa-sha512'
    | undefined
  saml_variant?: 'adfs' | undefined
  scim_enabled?: boolean | undefined
}
type AccountAuthenticationMethodCreateResponse = {
  authentication_method: {
    account_id: string
    auth_token_extend_when_used?: boolean | undefined
    auth_token_max_age_seconds?: number | undefined
    authentication_method_enabled: boolean
    authentication_method_id: string
    authentication_method_name?: string | undefined
    authentication_method_type: 'internal' | 'saml'
    auto_join_team_id: string
    auto_join_user_group_id: string
    create_time: string
    delete_time: string
    internal_mcp_enabled?: boolean | undefined
    internal_mcp_read_only?: boolean | undefined
    organization_id?: string | undefined
    saml_acs_url?: string | undefined
    saml_assertion_signed_enabled?: boolean | undefined
    saml_authn_requests_signed_enabled?: boolean | undefined
    saml_cert?: 'adfs' | undefined
    saml_certificate?: string | undefined
    saml_certificate_issuer?: string | undefined
    saml_certificate_not_valid_after?: string | undefined
    saml_certificate_not_valid_before?: string | undefined
    saml_certificate_subject?: string | undefined
    saml_digest_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512' | undefined
    saml_entity_id?: string | undefined
    saml_field_mapping?:
      | {
          email?: string | undefined
          first_name?: string | undefined
          groups?: string | undefined
          identity?: string | undefined
          last_name?: string | undefined
          real_name?: string | undefined
        }
      | undefined
    saml_idp_login_allowed?: boolean | undefined
    saml_idp_url?: string | undefined
    saml_join_groups?: boolean | undefined
    saml_metadata_url?: string | undefined
    saml_requested_authn_context_enabled?: boolean | undefined
    saml_signature_algorithm?:
      | 'rsa-sha1'
      | 'dsa-sha1'
      | 'rsa-sha256'
      | 'rsa-sha384'
      | 'rsa-sha512'
      | undefined
    saml_sp_certificate?: string | undefined
    saml_variant?: 'adfs' | undefined
    scim_enabled?: boolean | undefined
    scim_url?: string | undefined
    state: 'active' | 'deleted' | 'pending_configuration'
    update_time: string
  }
}
type AccountAuthenticationMethodsListResponse = {
  authentication_methods: {
    account_id: string
    auth_token_extend_when_used?: boolean | undefined
    auth_token_max_age_seconds?: number | undefined
    authentication_method_enabled: boolean
    authentication_method_id: string
    authentication_method_name?: string | undefined
    authentication_method_type: 'internal' | 'saml'
    auto_join_team_id: string
    auto_join_user_group_id: string
    create_time: string
    delete_time: string
    internal_mcp_enabled?: boolean | undefined
    internal_mcp_read_only?: boolean | undefined
    organization_id?: string | undefined
    saml_acs_url?: string | undefined
    saml_assertion_signed_enabled?: boolean | undefined
    saml_authn_requests_signed_enabled?: boolean | undefined
    saml_cert?: 'adfs' | undefined
    saml_certificate?: string | undefined
    saml_certificate_issuer?: string | undefined
    saml_certificate_not_valid_after?: string | undefined
    saml_certificate_not_valid_before?: string | undefined
    saml_certificate_subject?: string | undefined
    saml_digest_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512' | undefined
    saml_entity_id?: string | undefined
    saml_field_mapping?:
      | {
          email?: string | undefined
          first_name?: string | undefined
          groups?: string | undefined
          identity?: string | undefined
          last_name?: string | undefined
          real_name?: string | undefined
        }
      | undefined
    saml_idp_login_allowed?: boolean | undefined
    saml_idp_url?: string | undefined
    saml_join_groups?: boolean | undefined
    saml_metadata_url?: string | undefined
    saml_requested_authn_context_enabled?: boolean | undefined
    saml_signature_algorithm?:
      | 'rsa-sha1'
      | 'dsa-sha1'
      | 'rsa-sha256'
      | 'rsa-sha384'
      | 'rsa-sha512'
      | undefined
    saml_sp_certificate?: string | undefined
    saml_variant?: 'adfs' | undefined
    scim_enabled?: boolean | undefined
    scim_url?: string | undefined
    state: 'active' | 'deleted' | 'pending_configuration'
    update_time: string
  }[]
}
type AccountAuthenticationMethodDeleteResponse = { message: string }
type AccountAuthenticationMethodGetResponse = {
  authentication_method: {
    account_id: string
    auth_token_extend_when_used?: boolean | undefined
    auth_token_max_age_seconds?: number | undefined
    authentication_method_enabled: boolean
    authentication_method_id: string
    authentication_method_name?: string | undefined
    authentication_method_type: 'internal' | 'saml'
    auto_join_team_id: string
    auto_join_user_group_id: string
    create_time: string
    delete_time: string
    internal_mcp_enabled?: boolean | undefined
    internal_mcp_read_only?: boolean | undefined
    organization_id?: string | undefined
    saml_acs_url?: string | undefined
    saml_assertion_signed_enabled?: boolean | undefined
    saml_authn_requests_signed_enabled?: boolean | undefined
    saml_cert?: 'adfs' | undefined
    saml_certificate?: string | undefined
    saml_certificate_issuer?: string | undefined
    saml_certificate_not_valid_after?: string | undefined
    saml_certificate_not_valid_before?: string | undefined
    saml_certificate_subject?: string | undefined
    saml_digest_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512' | undefined
    saml_entity_id?: string | undefined
    saml_field_mapping?:
      | {
          email?: string | undefined
          first_name?: string | undefined
          groups?: string | undefined
          identity?: string | undefined
          last_name?: string | undefined
          real_name?: string | undefined
        }
      | undefined
    saml_idp_login_allowed?: boolean | undefined
    saml_idp_url?: string | undefined
    saml_join_groups?: boolean | undefined
    saml_metadata_url?: string | undefined
    saml_requested_authn_context_enabled?: boolean | undefined
    saml_signature_algorithm?:
      | 'rsa-sha1'
      | 'dsa-sha1'
      | 'rsa-sha256'
      | 'rsa-sha384'
      | 'rsa-sha512'
      | undefined
    saml_sp_certificate?: string | undefined
    saml_variant?: 'adfs' | undefined
    scim_enabled?: boolean | undefined
    scim_url?: string | undefined
    state: 'active' | 'deleted' | 'pending_configuration'
    update_time: string
  }
}
type AccountAuthenticationMethodUpdateRequestBody = {
  auth_token_extend_when_used?: boolean | undefined
  auth_token_max_age_seconds?: number | undefined
  authentication_method_enabled?: boolean | undefined
  authentication_method_name?: string | undefined
  auto_join_team_id?: string | undefined
  auto_join_user_group_id?: string | undefined
  saml_assertion_signed_enabled?: boolean | undefined
  saml_authn_requests_signed_enabled?: boolean | undefined
  saml_certificate?: string | undefined
  saml_digest_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512' | undefined
  saml_entity_id?: string | undefined
  saml_field_mapping?:
    | {
        email?: string | undefined
        first_name?: string | undefined
        groups?: string | undefined
        identity?: string | undefined
        last_name?: string | undefined
        real_name?: string | undefined
      }
    | undefined
  saml_idp_login_allowed?: boolean | undefined
  saml_idp_url?: string | undefined
  saml_join_groups?: boolean | undefined
  saml_requested_authn_context_enabled?: boolean | undefined
  saml_signature_algorithm?:
    | 'rsa-sha1'
    | 'dsa-sha1'
    | 'rsa-sha256'
    | 'rsa-sha384'
    | 'rsa-sha512'
    | undefined
  saml_variant?: 'adfs' | undefined
  scim_enabled?: boolean | undefined
}
type AccountAuthenticationMethodUpdateResponse = {
  authentication_method: {
    account_id: string
    auth_token_extend_when_used?: boolean | undefined
    auth_token_max_age_seconds?: number | undefined
    authentication_method_enabled: boolean
    authentication_method_id: string
    authentication_method_name?: string | undefined
    authentication_method_type: 'internal' | 'saml'
    auto_join_team_id: string
    auto_join_user_group_id: string
    create_time: string
    delete_time: string
    internal_mcp_enabled?: boolean | undefined
    internal_mcp_read_only?: boolean | undefined
    organization_id?: string | undefined
    saml_acs_url?: string | undefined
    saml_assertion_signed_enabled?: boolean | undefined
    saml_authn_requests_signed_enabled?: boolean | undefined
    saml_cert?: 'adfs' | undefined
    saml_certificate?: string | undefined
    saml_certificate_issuer?: string | undefined
    saml_certificate_not_valid_after?: string | undefined
    saml_certificate_not_valid_before?: string | undefined
    saml_certificate_subject?: string | undefined
    saml_digest_algorithm?: 'sha1' | 'sha256' | 'sha384' | 'sha512' | undefined
    saml_entity_id?: string | undefined
    saml_field_mapping?:
      | {
          email?: string | undefined
          first_name?: string | undefined
          groups?: string | undefined
          identity?: string | undefined
          last_name?: string | undefined
          real_name?: string | undefined
        }
      | undefined
    saml_idp_login_allowed?: boolean | undefined
    saml_idp_url?: string | undefined
    saml_join_groups?: boolean | undefined
    saml_metadata_url?: string | undefined
    saml_requested_authn_context_enabled?: boolean | undefined
    saml_signature_algorithm?:
      | 'rsa-sha1'
      | 'dsa-sha1'
      | 'rsa-sha256'
      | 'rsa-sha384'
      | 'rsa-sha512'
      | undefined
    saml_sp_certificate?: string | undefined
    saml_variant?: 'adfs' | undefined
    scim_enabled?: boolean | undefined
    scim_url?: string | undefined
    state: 'active' | 'deleted' | 'pending_configuration'
    update_time: string
  }
}
type AccountBillingGroupListResponse = {
  account_billing_groups: {
    account_id: string
    account_name: string
    address_lines: string[]
    billing_address?: string | undefined
    billing_address_id: string
    billing_contact_emails: { email: string }[]
    billing_currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    billing_emails: { email: string }[]
    billing_extra_text: string
    billing_group_id: string
    billing_group_name: string
    billing_type: string
    card_info: {
      brand: string
      card_id: string
      country: string
      country_code: string
      exp_month: number
      exp_year: number
      last4: string
      name: string
      user_email: string
    }
    city: string
    company: string
    country: string
    country_code: string
    create_time: string
    estimated_balance_local: string
    estimated_balance_usd: string
    payment_method: 'accrual' | 'card' | 'disabled' | 'email' | 'no_payment_expected' | 'partner'
    shipping_address_id: string
    state: string
    vat_id: string
    zip_code: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountCreateRequestBody = {
  account_name: string
  parent_account_id?: string | undefined
  primary_billing_group_id?: string | undefined
}
type AccountCreateResponse = {
  account: {
    access_source?:
      | 'descendant_membership'
      | 'organization_membership'
      | 'project_membership'
      | 'team_membership'
      | undefined
    account_id: string
    account_name: string
    account_owner_team_id: string
    create_time: string
    features?: { [x: string]: unknown } | undefined
    is_account_member?: boolean | undefined
    is_account_owner: boolean
    organization_id: string
    parent_account_id?: string | undefined
    primary_billing_group_id: string
    root_account_id: string
    tenant_id?: string | undefined
    update_time: string
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountListResponse = {
  accounts: {
    access_source?:
      | 'descendant_membership'
      | 'organization_membership'
      | 'project_membership'
      | 'team_membership'
      | undefined
    account_id: string
    account_name: string
    account_owner_team_id: string
    create_time: string
    features?: { [x: string]: unknown } | undefined
    is_account_member?: boolean | undefined
    is_account_owner: boolean
    organization_id: string
    parent_account_id?: string | undefined
    primary_billing_group_id: string
    root_account_id: string
    tenant_id?: string | undefined
    update_time: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountGetResponse = {
  account: {
    access_source?:
      | 'descendant_membership'
      | 'organization_membership'
      | 'project_membership'
      | 'team_membership'
      | undefined
    account_id: string
    account_name: string
    account_owner_team_id: string
    create_time: string
    features?: { [x: string]: unknown } | undefined
    is_account_member?: boolean | undefined
    is_account_owner: boolean
    organization_id: string
    parent_account_id?: string | undefined
    primary_billing_group_id: string
    root_account_id: string
    tenant_id?: string | undefined
    update_time: string
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountUpdateRequestBody = {
  account_name?: string | undefined
  primary_billing_group_id?: string | undefined
}
type AccountUpdateResponse = {
  account: {
    access_source?:
      | 'descendant_membership'
      | 'organization_membership'
      | 'project_membership'
      | 'team_membership'
      | undefined
    account_id: string
    account_name: string
    account_owner_team_id: string
    create_time: string
    features?: { [x: string]: unknown } | undefined
    is_account_member?: boolean | undefined
    is_account_owner: boolean
    organization_id: string
    parent_account_id?: string | undefined
    primary_billing_group_id: string
    root_account_id: string
    tenant_id?: string | undefined
    update_time: string
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountEventListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  events: {
    account_id: string
    action_description: string
    action_type: string
    actor: string
    actor_user_id: string
    create_time: string
    log_entry_id: number
    team_id: string
  }[]
  message?: string | undefined
}
type AccountMoveRequestBody = { parent_account_id: string }
type AccountMoveResponse = {
  account: {
    access_source?:
      | 'descendant_membership'
      | 'organization_membership'
      | 'project_membership'
      | 'team_membership'
      | undefined
    account_id: string
    account_name: string
    account_owner_team_id: string
    create_time: string
    features?: { [x: string]: unknown } | undefined
    is_account_member?: boolean | undefined
    is_account_owner: boolean
    organization_id: string
    parent_account_id?: string | undefined
    primary_billing_group_id: string
    root_account_id: string
    tenant_id?: string | undefined
    update_time: string
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountPaymentMethodDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountProjectsListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  projects: {
    account_id: string
    account_name?: string | undefined
    address_lines?: string[] | undefined
    available_credits?: string | undefined
    billing_address: string
    billing_currency?:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
      | undefined
    billing_emails: { email: string }[]
    billing_extra_text?: string | undefined
    billing_group_id: string
    billing_group_name: string
    card_info?:
      | {
          brand: string
          card_id: string
          country: string
          country_code: string
          exp_month: number
          exp_year: number
          last4: string
          name: string
          user_email: string
        }
      | undefined
    city?: string | undefined
    company?: string | undefined
    country: string
    country_code: string
    default_cloud: string
    end_of_life_extension?:
      | { elasticsearch?: { eol_date: string; version: string } | undefined }
      | undefined
    estimated_balance: string
    estimated_balance_local?: string | undefined
    features?: { [x: string]: unknown } | undefined
    organization_id: string
    payment_method: string
    project_name: string
    state?: string | undefined
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    tenant_id?: string | undefined
    trial_expiration_time?: string | undefined
    vat_id: string
    zip_code?: string | undefined
  }[]
  total_project_count?: number | undefined
}
type AccountProjectsTeamsListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  teams: {
    account_id?: string | undefined
    create_time?: string | undefined
    team_id: string
    team_name: string
    team_type?:
      | 'admin'
      | 'operator'
      | 'developer'
      | 'read_only'
      | 'project:ai_gateway_keys:read'
      | 'project:ai_gateway_keys:write'
      | 'project:integrations:read'
      | 'project:integrations:write'
      | 'project:networking:read'
      | 'project:networking:write'
      | 'project:permissions:read'
      | 'service:configuration:write'
      | 'service:logs:read'
      | 'project:services:read'
      | 'project:services:write'
      | 'project:audit_logs:read'
      | 'project:event_logs:read'
      | 'service:data:write'
      | 'service:secrets:read'
      | 'service:users:write'
      | 'service:metrics:read'
      | 'application:access:connect'
      | 'role:project:admin'
      | 'role:project:manager'
      | 'role:project:read'
      | 'role:services:maintenance'
      | 'role:services:recover'
      | 'organization:projects:write'
      | 'organization:billing:read'
      | 'organization:billing:write'
      | 'organization:event_logs:read'
      | 'organization:users:read'
      | 'organization:users:write'
      | 'organization:app_users:write'
      | 'organization:groups:read'
      | 'organization:groups:write'
      | 'organization:domains:write'
      | 'organization:networking:read'
      | 'organization:networking:write'
      | 'organization:sustainability:read'
      | 'role:organization:admin'
      | undefined
    update_time?: string | undefined
  }[]
}
type AccountTeamCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  team: {
    account_id?: string | undefined
    create_time?: string | undefined
    team_id: string
    team_name: string
    update_time?: string | undefined
  }
}
type AccountTeamListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  teams: {
    account_id?: string | undefined
    create_time?: string | undefined
    team_id: string
    team_name: string
    update_time?: string | undefined
  }[]
}
type AccountTeamDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountTeamGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  team: {
    account_id?: string | undefined
    create_time?: string | undefined
    team_id: string
    team_name: string
    update_time?: string | undefined
  }
}
type AccountTeamUpdateRequestBody = { team_name: string }
type AccountTeamUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  team: {
    account_id?: string | undefined
    create_time?: string | undefined
    team_id: string
    team_name: string
    update_time?: string | undefined
  }
}
type AccountTeamInvitesListResponse = {
  account_invites: {
    account_id: string
    account_name: string
    create_time: string
    invited_by_user_email: string
    team_id: string
    team_name: string
    user_email: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountTeamMemberCancelInviteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountTeamMemberVerifyInviteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  invite_details: { user_email: string }
  message?: string | undefined
}
type AccountTeamMembersDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountTeamMembersInviteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountTeamMembersListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  members: {
    create_time: string
    real_name: string
    team_id: string
    team_name: string
    update_time: string
    user_email: string
    user_id: string
  }[]
  message?: string | undefined
}
type AccountTeamProjectAssociateRequestBody = {
  team_type:
    | 'admin'
    | 'operator'
    | 'developer'
    | 'read_only'
    | 'project:ai_gateway_keys:read'
    | 'project:ai_gateway_keys:write'
    | 'project:integrations:read'
    | 'project:integrations:write'
    | 'project:networking:read'
    | 'project:networking:write'
    | 'project:permissions:read'
    | 'service:configuration:write'
    | 'service:logs:read'
    | 'project:services:read'
    | 'project:services:write'
    | 'project:audit_logs:read'
    | 'project:event_logs:read'
    | 'service:data:write'
    | 'service:secrets:read'
    | 'service:users:write'
    | 'service:metrics:read'
    | 'application:access:connect'
    | 'role:project:admin'
    | 'role:project:manager'
    | 'role:project:read'
    | 'role:services:maintenance'
    | 'role:services:recover'
    | 'organization:projects:write'
    | 'organization:billing:read'
    | 'organization:billing:write'
    | 'organization:event_logs:read'
    | 'organization:users:read'
    | 'organization:users:write'
    | 'organization:app_users:write'
    | 'organization:groups:read'
    | 'organization:groups:write'
    | 'organization:domains:write'
    | 'organization:networking:read'
    | 'organization:networking:write'
    | 'organization:sustainability:read'
    | 'role:organization:admin'
}
type AccountTeamProjectAssociateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountTeamProjectAssociationUpdateRequestBody = {
  team_type?:
    | 'admin'
    | 'operator'
    | 'developer'
    | 'read_only'
    | 'project:ai_gateway_keys:read'
    | 'project:ai_gateway_keys:write'
    | 'project:integrations:read'
    | 'project:integrations:write'
    | 'project:networking:read'
    | 'project:networking:write'
    | 'project:permissions:read'
    | 'service:configuration:write'
    | 'service:logs:read'
    | 'project:services:read'
    | 'project:services:write'
    | 'project:audit_logs:read'
    | 'project:event_logs:read'
    | 'service:data:write'
    | 'service:secrets:read'
    | 'service:users:write'
    | 'service:metrics:read'
    | 'application:access:connect'
    | 'role:project:admin'
    | 'role:project:manager'
    | 'role:project:read'
    | 'role:services:maintenance'
    | 'role:services:recover'
    | 'organization:projects:write'
    | 'organization:billing:read'
    | 'organization:billing:write'
    | 'organization:event_logs:read'
    | 'organization:users:read'
    | 'organization:users:write'
    | 'organization:app_users:write'
    | 'organization:groups:read'
    | 'organization:groups:write'
    | 'organization:domains:write'
    | 'organization:networking:read'
    | 'organization:networking:write'
    | 'organization:sustainability:read'
    | 'role:organization:admin'
    | undefined
}
type AccountTeamProjectAssociationUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountTeamProjectDisassociateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccountTeamProjectListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  projects: {
    project_name: string
    team_type:
      | 'admin'
      | 'operator'
      | 'developer'
      | 'read_only'
      | 'project:ai_gateway_keys:read'
      | 'project:ai_gateway_keys:write'
      | 'project:integrations:read'
      | 'project:integrations:write'
      | 'project:networking:read'
      | 'project:networking:write'
      | 'project:permissions:read'
      | 'service:configuration:write'
      | 'service:logs:read'
      | 'project:services:read'
      | 'project:services:write'
      | 'project:audit_logs:read'
      | 'project:event_logs:read'
      | 'service:data:write'
      | 'service:secrets:read'
      | 'service:users:write'
      | 'service:metrics:read'
      | 'application:access:connect'
      | 'role:project:admin'
      | 'role:project:manager'
      | 'role:project:read'
      | 'role:services:maintenance'
      | 'role:services:recover'
      | 'organization:projects:write'
      | 'organization:billing:read'
      | 'organization:billing:write'
      | 'organization:event_logs:read'
      | 'organization:users:read'
      | 'organization:users:write'
      | 'organization:app_users:write'
      | 'organization:groups:read'
      | 'organization:groups:write'
      | 'organization:domains:write'
      | 'organization:networking:read'
      | 'organization:networking:write'
      | 'organization:sustainability:read'
      | 'role:organization:admin'
  }[]
}
type AccountUserProjectsListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  user_projects: {
    access_type?: string | undefined
    account_id: string
    create_time: string
    member_type:
      | 'admin'
      | 'application:access:connect'
      | 'developer'
      | 'operator'
      | 'organization:app_users:write'
      | 'organization:billing:read'
      | 'organization:billing:write'
      | 'organization:domains:write'
      | 'organization:event_logs:read'
      | 'organization:groups:read'
      | 'organization:groups:write'
      | 'organization:networking:read'
      | 'organization:networking:write'
      | 'organization:projects:write'
      | 'organization:sustainability:read'
      | 'organization:users:read'
      | 'organization:users:write'
      | 'project:ai_gateway_keys:read'
      | 'project:ai_gateway_keys:write'
      | 'project:audit_logs:read'
      | 'project:event_logs:read'
      | 'project:integrations:read'
      | 'project:integrations:write'
      | 'project:networking:read'
      | 'project:networking:write'
      | 'project:permissions:read'
      | 'project:services:read'
      | 'project:services:write'
      | 'read_only'
      | 'role:organization:admin'
      | 'role:project:admin'
      | 'role:project:manager'
      | 'role:project:read'
      | 'role:services:maintenance'
      | 'role:services:recover'
      | 'service:configuration:write'
      | 'service:data:write'
      | 'service:logs:read'
      | 'service:metrics:read'
      | 'service:secrets:read'
      | 'service:users:write'
    project_name: string
    real_name: string
    team_id: string
    team_name: string
    user_email: string
  }[]
}
type AccountUserTeamsListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  teams: { account_id: string; account_name: string; team_id: string; team_name: string }[]
}
type AccountUsersSearchRequestBody = {
  limit?: number | undefined
  order_by?:
    | 'user_email:asc'
    | 'user_email:desc'
    | 'user_id:asc'
    | 'user_id:desc'
    | 'real_name:asc'
    | 'real_name:desc'
    | undefined
  query?: string | undefined
}
type AccountUsersSearchResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  users: { real_name: string; user_email: string; user_id: string }[]
}
type ApplicationUserAccessTokenCreateRequestBody = {
  description: string
  extend_when_used?: boolean | undefined
  ip_allowlist?: string[] | undefined
  max_age_seconds?: number | undefined
  scopes?: string[] | undefined
}
type ApplicationUserAccessTokenCreateResponse = { full_token: string; token_prefix: string }
type ApplicationUserAccessTokensListResponse = {
  tokens: {
    create_time: string
    created_manually: boolean
    currently_active: boolean
    description?: string | undefined
    expiry_time?: string | undefined
    extend_when_used?: boolean | undefined
    ip_allowlist?: string[] | undefined
    last_ip?: string | undefined
    last_used_time?: string | undefined
    last_user_agent?: string | undefined
    last_user_agent_human_readable?: string | undefined
    max_age_seconds?: number | undefined
    scopes?: string[] | undefined
    token_prefix: string
  }[]
}
type ApplicationUserCreateRequestBody = { is_super_admin?: boolean | undefined; name: string }
type ApplicationUserCreateResponse = {
  create_time: string
  is_super_admin: boolean
  name: string
  user_email: string
  user_id: string
}
type ApplicationUsersListResponse = {
  application_users: {
    create_time: string
    is_super_admin: boolean
    name: string
    user_email: string
    user_id: string
  }[]
}
type ApplicationUserGetResponse = {
  create_time: string
  is_super_admin: boolean
  name: string
  user_email: string
  user_id: string
}
type ApplicationUserUpdateRequestBody = { is_super_admin?: boolean | undefined; name: string }
type ApplicationUserUpdateResponse = {
  create_time: string
  is_super_admin: boolean
  name: string
  user_email: string
  user_id: string
}
type OrganizationAuthDomainLinkRequestBody = { domain_id: string }
type OrganizationAuthDomainListResponse = {
  domains: {
    challenge_token: string
    create_time: string
    domain_id: string
    domain_name: string
    linked_authentication_method_ids: string[]
    organization_id: string
    state: 'deleted' | 'unverified' | 'verified'
    verification_type: 'dns' | 'http'
  }[]
}
type BillingGroupCreateRequestBody = {
  account_id?: string | undefined
  address_lines?: string[] | undefined
  billing_address_id?: string | undefined
  billing_contact_emails?: { email: string }[] | undefined
  billing_currency?:
    | 'AUD'
    | 'CAD'
    | 'CHF'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'NOK'
    | 'NZD'
    | 'SEK'
    | 'SGD'
    | 'USD'
    | undefined
  billing_emails?: { email: string }[] | undefined
  billing_extra_text?: string | undefined
  billing_group_name: string
  card_id?: string | undefined
  city?: string | undefined
  company?: string | undefined
  copy_from_billing_group?: string | undefined
  country_code?: string | undefined
  shipping_address_id?: string | undefined
  state?: string | undefined
  vat_id?: string | undefined
  zip_code?: string | undefined
}
type BillingGroupCreateResponse = {
  billing_group: {
    account_id: string
    account_name: string
    address_lines: string[]
    billing_address?: string | undefined
    billing_address_id: string
    billing_contact_emails: { email: string }[]
    billing_currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    billing_emails: { email: string }[]
    billing_extra_text: string
    billing_group_id: string
    billing_group_name: string
    billing_type: string
    card_info: {
      brand: string
      card_id: string
      country: string
      country_code: string
      exp_month: number
      exp_year: number
      last4: string
      name: string
      user_email: string
    }
    city: string
    company: string
    country: string
    country_code: string
    create_time: string
    estimated_balance_local: string
    estimated_balance_usd: string
    payment_method: 'accrual' | 'card' | 'disabled' | 'email' | 'no_payment_expected' | 'partner'
    shipping_address_id: string
    state: string
    vat_id: string
    zip_code: string
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type BillingGroupListResponse = {
  billing_groups: {
    account_id: string
    account_name: string
    address_lines: string[]
    billing_address?: string | undefined
    billing_address_id: string
    billing_contact_emails: { email: string }[]
    billing_currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    billing_emails: { email: string }[]
    billing_extra_text: string
    billing_group_id: string
    billing_group_name: string
    billing_type: string
    card_info: {
      brand: string
      card_id: string
      country: string
      country_code: string
      exp_month: number
      exp_year: number
      last4: string
      name: string
      user_email: string
    }
    city: string
    company: string
    country: string
    country_code: string
    create_time: string
    estimated_balance_local: string
    estimated_balance_usd: string
    payment_method: 'accrual' | 'card' | 'disabled' | 'email' | 'no_payment_expected' | 'partner'
    shipping_address_id: string
    state: string
    vat_id: string
    zip_code: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type BillingGroupCreditsClaimRequestBody = { code: string }
type BillingGroupCreditsClaimResponse = {
  credit: {
    code: string
    expire_time: string
    remaining_value: string
    start_time: string
    type:
      | 'discount'
      | 'employee'
      | 'evaluation'
      | 'internal'
      | 'other'
      | 'outage'
      | 'partner'
      | 'promotion'
      | 'purchase'
      | 'referral'
      | 'sponsorship'
      | 'trial'
      | 'trial_over'
    value: string
  }
}
type BillingGroupCreditsListResponse = {
  credits: {
    code: string
    expire_time: string
    remaining_value: string
    start_time: string
    type:
      | 'discount'
      | 'employee'
      | 'evaluation'
      | 'internal'
      | 'other'
      | 'outage'
      | 'partner'
      | 'promotion'
      | 'purchase'
      | 'referral'
      | 'sponsorship'
      | 'trial'
      | 'trial_over'
    value: string
  }[]
}
type BillingGroupDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type BillingGroupGetResponse = {
  billing_group: {
    account_id: string
    account_name: string
    address_lines: string[]
    billing_address?: string | undefined
    billing_address_id: string
    billing_contact_emails: { email: string }[]
    billing_currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    billing_emails: { email: string }[]
    billing_extra_text: string
    billing_group_id: string
    billing_group_name: string
    billing_type: string
    card_info: {
      brand: string
      card_id: string
      country: string
      country_code: string
      exp_month: number
      exp_year: number
      last4: string
      name: string
      user_email: string
    }
    city: string
    company: string
    country: string
    country_code: string
    create_time: string
    estimated_balance_local: string
    estimated_balance_usd: string
    payment_method: 'accrual' | 'card' | 'disabled' | 'email' | 'no_payment_expected' | 'partner'
    shipping_address_id: string
    state: string
    vat_id: string
    zip_code: string
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type BillingGroupUpdateRequestBody = {
  account_id?: string | undefined
  address_lines?: string[] | undefined
  billing_address_id?: string | undefined
  billing_contact_emails?: { email: string }[] | undefined
  billing_currency?:
    | 'AUD'
    | 'CAD'
    | 'CHF'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'NOK'
    | 'NZD'
    | 'SEK'
    | 'SGD'
    | 'USD'
    | undefined
  billing_emails?: { email: string }[] | undefined
  billing_extra_text?: string | undefined
  billing_group_name?: string | undefined
  card_id?: string | undefined
  city?: string | undefined
  company?: string | undefined
  country_code?: string | undefined
  shipping_address_id?: string | undefined
  state?: string | undefined
  vat_id?: string | undefined
  zip_code?: string | undefined
}
type BillingGroupUpdateResponse = {
  billing_group: {
    account_id: string
    account_name: string
    address_lines: string[]
    billing_address?: string | undefined
    billing_address_id: string
    billing_contact_emails: { email: string }[]
    billing_currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    billing_emails: { email: string }[]
    billing_extra_text: string
    billing_group_id: string
    billing_group_name: string
    billing_type: string
    card_info: {
      brand: string
      card_id: string
      country: string
      country_code: string
      exp_month: number
      exp_year: number
      last4: string
      name: string
      user_email: string
    }
    city: string
    company: string
    country: string
    country_code: string
    create_time: string
    estimated_balance_local: string
    estimated_balance_usd: string
    payment_method: 'accrual' | 'card' | 'disabled' | 'email' | 'no_payment_expected' | 'partner'
    shipping_address_id: string
    state: string
    vat_id: string
    zip_code: string
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type BillingGroupEventListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  events: {
    actor?: string | undefined
    billing_group_id?: string | undefined
    create_time?: string | undefined
    event_desc?: string | undefined
    event_type?: string | undefined
    log_entry_id?: number | undefined
    project_id?: string | undefined
    project_name?: string | undefined
  }[]
  message?: string | undefined
}
type BillingGroupFeeBreakdownAggregateResponse = {
  billing_group_id: string
  non_project_charges: {
    item_price_usd: string
    item_type:
      | 'service_usage'
      | 'support_fee'
      | 'minimum_support_fee'
      | 'commitment_fee'
      | 'extra_disk_space'
      | 'tiered_storage'
      | 'pro_platform_fee'
      | 'minimum_pro_platform_fee'
      | 'ai_gateway'
      | 'btar_write_transfer'
      | 'btar_backup_storage'
      | 'btar_byoc_fee'
      | 'ccr_replication_transfer'
      | 'ccr_byoc_fee'
    period_begin: string
    period_end: string
    unit_price_usd: string
    units: number
  }[]
  period_begin: string
  period_end: string
  project_charges: {
    project_name: string
    service_charges: {
      cloud_name?: string | undefined
      item_price_usd: string
      item_type:
        | 'service_usage'
        | 'support_fee'
        | 'minimum_support_fee'
        | 'commitment_fee'
        | 'extra_disk_space'
        | 'tiered_storage'
        | 'pro_platform_fee'
        | 'minimum_pro_platform_fee'
        | 'ai_gateway'
        | 'btar_write_transfer'
        | 'btar_backup_storage'
        | 'btar_byoc_fee'
        | 'ccr_replication_transfer'
        | 'ccr_byoc_fee'
      period_begin: string
      period_end: string
      service_name?: string | undefined
      service_plan?: string | undefined
      service_type?: string | undefined
      unit_price_usd: string
      units: number
    }[]
    total_project_charges_usd: string
  }[]
  total_charges_usd: string
}
type BillingGroupInvoiceGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  invoice: {
    due_date?: string | undefined
    generated_at?: string | undefined
    invoice_number: string
    invoice_state?:
      | 'accrual'
      | 'consolidated'
      | 'due'
      | 'estimate'
      | 'failed_credit_card_charge'
      | 'failed_no_credit_card'
      | 'mailed'
      | 'no_payment_expected'
      | 'paid'
      | 'partner_metering'
      | 'uncollectible'
      | 'waived'
      | undefined
    local_inc_vat: string
    local_vat_zero: string
  }
  message?: string | undefined
}
type BillingGroupInvoiceLinesListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  lines?:
    | {
        cloud_name?: string | undefined
        commitment_name?: string | undefined
        description: string
        line_pre_discount_local?: string | undefined
        line_total_local?: string | undefined
        line_total_usd: string
        line_type:
          | 'commitment_fee'
          | 'credit_consumption'
          | 'extra_charge'
          | 'multiplier'
          | 'other_event'
          | 'pro_platform_charge'
          | 'rounding'
          | 'service_charge'
          | 'support_charge'
        local_currency?: string | undefined
        project_name?: string | undefined
        service_name?: string | undefined
        service_plan?: string | undefined
        service_type?:
          | 'alert_triage'
          | 'alertmanager'
          | 'application'
          | 'clickhouse'
          | 'context_catalog'
          | 'copepod'
          | 'datahub'
          | 'elasticsearch'
          | 'flink'
          | 'grafana'
          | 'kafka'
          | 'kafka_connect'
          | 'kafka_mirrormaker'
          | 'mysql'
          | 'nomadclient'
          | 'opensearch'
          | 'pg'
          | 'sandbox'
          | 'sandbox_api'
          | 'sparkpool'
          | 'stresstester'
          | 'sw'
          | 'thanos'
          | 'thanoscompactor'
          | 'thanosparquet'
          | 'thanosquery'
          | 'thanosreceiver'
          | 'thanosruler'
          | 'thanosstore'
          | 'valkey'
          | 'vector'
          | 'vmalert'
          | undefined
        tags?: { [x: string]: unknown } | undefined
        timestamp_begin?: string | undefined
        timestamp_end?: string | undefined
      }[]
    | undefined
  message?: string | undefined
}
type BillingGroupInvoiceListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  invoices: {
    billing_group_id: string
    billing_group_name: string
    billing_group_state: 'active' | 'deleted'
    currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    download_cookie: string
    due_date?: string | undefined
    generated_at?: string | undefined
    invoice_number: string
    issue_date?: string | undefined
    period_begin: string
    period_end: string
    state:
      | 'accrual'
      | 'consolidated'
      | 'due'
      | 'estimate'
      | 'failed_credit_card_charge'
      | 'failed_no_credit_card'
      | 'mailed'
      | 'no_payment_expected'
      | 'paid'
      | 'partner_metering'
      | 'uncollectible'
      | 'waived'
    total_inc_vat: string
    total_vat_zero: string
  }[]
  message?: string | undefined
}
type BillingGroupProjectAssignResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type BillingGroupProjectListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  projects: { available_credits: string; estimated_balance: string; project_name: string }[]
}
type BillingGroupProjectsAssignResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type InvoiceGetResponse = {
  invoice: {
    billing_group_id: string
    billing_group_name: string
    billing_group_state: string
    currency: string
    download_cookie?: string | undefined
    due_date?: string | undefined
    generated_at: string
    invoice_number: string
    issue_date?: string | undefined
    period_begin: string
    period_end: string
    state: string
    total_inc_vat: string
    total_vat_zero: string
  }
}
type OrganizationAddressCreateRequestBody = {
  address_lines: string[]
  city: string
  country_code: string
  name: string
  state?: string | undefined
  zip_code?: string | undefined
}
type OrganizationAddressCreateResponse = {
  address_id: string
  address_lines?: string[] | undefined
  city?: string | undefined
  country_code: string
  create_time: string
  name: string
  organization_id: string
  state?: string | undefined
  update_time: string
  zip_code?: string | undefined
}
type OrganizationAddressListResponse = {
  addresses: {
    address_id: string
    address_lines?: string[] | undefined
    city?: string | undefined
    country_code: string
    create_time: string
    name: string
    organization_id: string
    state?: string | undefined
    update_time: string
    zip_code?: string | undefined
  }[]
}
type OrganizationAddressDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type OrganizationAddressGetResponse = {
  address_id: string
  address_lines?: string[] | undefined
  city?: string | undefined
  country_code: string
  create_time: string
  name: string
  organization_id: string
  state?: string | undefined
  update_time: string
  zip_code?: string | undefined
}
type OrganizationAddressUpdateRequestBody = {
  address_lines?: string[] | undefined
  city?: string | undefined
  country_code?: string | undefined
  name?: string | undefined
  state?: string | undefined
  zip_code?: string | undefined
}
type OrganizationAddressUpdateResponse = {
  address_id: string
  address_lines?: string[] | undefined
  city?: string | undefined
  country_code: string
  create_time: string
  name: string
  organization_id: string
  state?: string | undefined
  update_time: string
  zip_code?: string | undefined
}
type ListCloudsResponse = {
  clouds: {
    cloud_description?: string | undefined
    cloud_name: string
    geo_latitude?: number | undefined
    geo_longitude?: number | undefined
    geo_region: string
    provider?: string | undefined
    provider_description?: string | undefined
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ListProjectCloudsResponse = {
  clouds: {
    cloud_description?: string | undefined
    cloud_name: string
    geo_latitude?: number | undefined
    geo_longitude?: number | undefined
    geo_region: string
    provider?: string | undefined
    provider_description?: string | undefined
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type PublicPrivatelinkAvailabilityListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  privatelink_availability: { cloud_name: string; price_usd: string }[]
}
type PublicStaticIPAvailabilityListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  static_ip_address_availability: { cloud_name: string; price_usd: string }[]
}
type CustomCloudEnvironmentCreateRequestBody = {
  cloud_provider: 'aws' | 'azure' | 'google' | 'oracle'
  cloud_region: string
  contact_emails?:
    | { email: string; real_name?: string | undefined; role?: string | undefined }[]
    | undefined
  deployment_model:
    | 'direct_ipsec_ingress'
    | 'ipsec_ingress'
    | 'standard'
    | 'standard_public'
    | 'pci_dss'
    | 'hipaa'
  display_name: string
  reserved_cidr: string
  tags?: { [x: string]: unknown } | undefined
}
type CustomCloudEnvironmentCreateResponse = {
  custom_cloud_environment: {
    aiven_aws_account_principal?: string | undefined
    aiven_aws_assume_role_external_id?: string | undefined
    aiven_aws_object_storage_credentials_creator_arn?: string | undefined
    aiven_aws_object_storage_user_arn?: string | undefined
    aiven_azure_cce_client_id?: string | undefined
    aiven_google_account_principal?: string | undefined
    aiven_management_cidr_blocks?: string[] | undefined
    aiven_object_storage_credentials_creator_user?: string | undefined
    aws_iam_role_arn?: string | undefined
    aws_subnets_bastion?: { [x: string]: unknown } | undefined
    aws_subnets_workload?: { [x: string]: unknown } | undefined
    azure_subscription_id?: string | undefined
    azure_tenant_id?: string | undefined
    bucket_names?: { [x: string]: unknown } | undefined
    byoc_resource_tags?: { [x: string]: unknown } | undefined
    byoc_unique_name?: string | undefined
    cloud_provider?: 'aws' | 'azure' | 'google' | 'oracle' | undefined
    cloud_region?: string | undefined
    contact_emails: { email: string; real_name?: string | undefined; role?: string | undefined }[]
    custom_cloud_environment_id: string
    custom_cloud_names?: string[] | undefined
    deployment_model?:
      | 'direct_ipsec_ingress'
      | 'ipsec_ingress'
      | 'standard'
      | 'standard_public'
      | 'pci_dss'
      | 'hipaa'
      | undefined
    display_name: string
    errors?: { category: 'general_error'; message: string }[] | undefined
    google_bastion_cidr?: string | undefined
    google_privilege_bearing_service_account_id?: string | undefined
    google_workload_cidr?: string | undefined
    oracle_compartment_id?: string | undefined
    oracle_subnet_bastion?: string | undefined
    oracle_subnet_workload?: string | undefined
    reserved_cidr?: string | undefined
    state:
      | 'draft'
      | 'validating'
      | 'creating'
      | 'creation_failed'
      | 'active'
      | 'disconnected'
      | 'reconnecting'
      | 'deleting'
      | 'deletion_failed'
      | 'deleted'
    tags?: { [x: string]: unknown } | undefined
    update_time: string
    use_customer_owned_storage?: boolean | undefined
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type CustomCloudEnvironmentDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type CustomCloudEnvironmentGetResponse = {
  custom_cloud_environment: {
    aiven_aws_account_principal?: string | undefined
    aiven_aws_assume_role_external_id?: string | undefined
    aiven_aws_object_storage_credentials_creator_arn?: string | undefined
    aiven_aws_object_storage_user_arn?: string | undefined
    aiven_azure_cce_client_id?: string | undefined
    aiven_google_account_principal?: string | undefined
    aiven_management_cidr_blocks?: string[] | undefined
    aiven_object_storage_credentials_creator_user?: string | undefined
    aws_iam_role_arn?: string | undefined
    aws_subnets_bastion?: { [x: string]: unknown } | undefined
    aws_subnets_workload?: { [x: string]: unknown } | undefined
    azure_subscription_id?: string | undefined
    azure_tenant_id?: string | undefined
    bucket_names?: { [x: string]: unknown } | undefined
    byoc_resource_tags?: { [x: string]: unknown } | undefined
    byoc_unique_name?: string | undefined
    cloud_provider?: 'aws' | 'azure' | 'google' | 'oracle' | undefined
    cloud_region?: string | undefined
    contact_emails: { email: string; real_name?: string | undefined; role?: string | undefined }[]
    custom_cloud_environment_id: string
    custom_cloud_names?: string[] | undefined
    deployment_model?:
      | 'direct_ipsec_ingress'
      | 'ipsec_ingress'
      | 'standard'
      | 'standard_public'
      | 'pci_dss'
      | 'hipaa'
      | undefined
    display_name: string
    errors?: { category: 'general_error'; message: string }[] | undefined
    google_bastion_cidr?: string | undefined
    google_privilege_bearing_service_account_id?: string | undefined
    google_workload_cidr?: string | undefined
    oracle_compartment_id?: string | undefined
    oracle_subnet_bastion?: string | undefined
    oracle_subnet_workload?: string | undefined
    reserved_cidr?: string | undefined
    state:
      | 'draft'
      | 'validating'
      | 'creating'
      | 'creation_failed'
      | 'active'
      | 'disconnected'
      | 'reconnecting'
      | 'deleting'
      | 'deletion_failed'
      | 'deleted'
    tags?: { [x: string]: unknown } | undefined
    update_time: string
    use_customer_owned_storage?: boolean | undefined
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type CustomCloudEnvironmentUpdateRequestBody = {
  aws_iam_role_arn?: string | undefined
  azure_subscription_id?: string | undefined
  azure_tenant_id?: string | undefined
  cloud_provider?: 'aws' | 'azure' | 'google' | 'oracle' | undefined
  cloud_region?: string | undefined
  contact_emails?:
    | { email: string; real_name?: string | undefined; role?: string | undefined }[]
    | undefined
  deployment_model?:
    | 'direct_ipsec_ingress'
    | 'ipsec_ingress'
    | 'standard'
    | 'standard_public'
    | 'pci_dss'
    | 'hipaa'
    | undefined
  display_name?: string | undefined
  google_privilege_bearing_service_account_id?: string | undefined
  oracle_compartment_id?: string | undefined
  reserved_cidr?: string | undefined
  tags?: { [x: string]: unknown } | undefined
}
type CustomCloudEnvironmentUpdateResponse = {
  custom_cloud_environment: {
    aiven_aws_account_principal?: string | undefined
    aiven_aws_assume_role_external_id?: string | undefined
    aiven_aws_object_storage_credentials_creator_arn?: string | undefined
    aiven_aws_object_storage_user_arn?: string | undefined
    aiven_azure_cce_client_id?: string | undefined
    aiven_google_account_principal?: string | undefined
    aiven_management_cidr_blocks?: string[] | undefined
    aiven_object_storage_credentials_creator_user?: string | undefined
    aws_iam_role_arn?: string | undefined
    aws_subnets_bastion?: { [x: string]: unknown } | undefined
    aws_subnets_workload?: { [x: string]: unknown } | undefined
    azure_subscription_id?: string | undefined
    azure_tenant_id?: string | undefined
    bucket_names?: { [x: string]: unknown } | undefined
    byoc_resource_tags?: { [x: string]: unknown } | undefined
    byoc_unique_name?: string | undefined
    cloud_provider?: 'aws' | 'azure' | 'google' | 'oracle' | undefined
    cloud_region?: string | undefined
    contact_emails: { email: string; real_name?: string | undefined; role?: string | undefined }[]
    custom_cloud_environment_id: string
    custom_cloud_names?: string[] | undefined
    deployment_model?:
      | 'direct_ipsec_ingress'
      | 'ipsec_ingress'
      | 'standard'
      | 'standard_public'
      | 'pci_dss'
      | 'hipaa'
      | undefined
    display_name: string
    errors?: { category: 'general_error'; message: string }[] | undefined
    google_bastion_cidr?: string | undefined
    google_privilege_bearing_service_account_id?: string | undefined
    google_workload_cidr?: string | undefined
    oracle_compartment_id?: string | undefined
    oracle_subnet_bastion?: string | undefined
    oracle_subnet_workload?: string | undefined
    reserved_cidr?: string | undefined
    state:
      | 'draft'
      | 'validating'
      | 'creating'
      | 'creation_failed'
      | 'active'
      | 'disconnected'
      | 'reconnecting'
      | 'deleting'
      | 'deletion_failed'
      | 'deleted'
    tags?: { [x: string]: unknown } | undefined
    update_time: string
    use_customer_owned_storage?: boolean | undefined
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type CustomCloudEnvironmentPermissionsGetResponse = {
  accounts: string[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  projects: string[]
}
type CustomCloudEnvironmentPermissionsSetRequestBody = { accounts: string[]; projects: string[] }
type CustomCloudEnvironmentPermissionsSetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type CustomCloudEnvironmentProvisionRequestBody = {
  aws_iam_role_arn?: string | undefined
  azure_subscription_id?: string | undefined
  azure_tenant_id?: string | undefined
  google_privilege_bearing_service_account_id?: string | undefined
  oracle_compartment_id?: string | undefined
}
type CustomCloudEnvironmentProvisionResponse = {
  custom_cloud_environment: {
    aiven_aws_account_principal?: string | undefined
    aiven_aws_assume_role_external_id?: string | undefined
    aiven_aws_object_storage_credentials_creator_arn?: string | undefined
    aiven_aws_object_storage_user_arn?: string | undefined
    aiven_azure_cce_client_id?: string | undefined
    aiven_google_account_principal?: string | undefined
    aiven_management_cidr_blocks?: string[] | undefined
    aiven_object_storage_credentials_creator_user?: string | undefined
    aws_iam_role_arn?: string | undefined
    aws_subnets_bastion?: { [x: string]: unknown } | undefined
    aws_subnets_workload?: { [x: string]: unknown } | undefined
    azure_subscription_id?: string | undefined
    azure_tenant_id?: string | undefined
    bucket_names?: { [x: string]: unknown } | undefined
    byoc_resource_tags?: { [x: string]: unknown } | undefined
    byoc_unique_name?: string | undefined
    cloud_provider?: 'aws' | 'azure' | 'google' | 'oracle' | undefined
    cloud_region?: string | undefined
    contact_emails: { email: string; real_name?: string | undefined; role?: string | undefined }[]
    custom_cloud_environment_id: string
    custom_cloud_names?: string[] | undefined
    deployment_model?:
      | 'direct_ipsec_ingress'
      | 'ipsec_ingress'
      | 'standard'
      | 'standard_public'
      | 'pci_dss'
      | 'hipaa'
      | undefined
    display_name: string
    errors?: { category: 'general_error'; message: string }[] | undefined
    google_bastion_cidr?: string | undefined
    google_privilege_bearing_service_account_id?: string | undefined
    google_workload_cidr?: string | undefined
    oracle_compartment_id?: string | undefined
    oracle_subnet_bastion?: string | undefined
    oracle_subnet_workload?: string | undefined
    reserved_cidr?: string | undefined
    state:
      | 'draft'
      | 'validating'
      | 'creating'
      | 'creation_failed'
      | 'active'
      | 'disconnected'
      | 'reconnecting'
      | 'deleting'
      | 'deletion_failed'
      | 'deleted'
    tags?: { [x: string]: unknown } | undefined
    update_time: string
    use_customer_owned_storage?: boolean | undefined
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type OrganizationDomainAddRequestBody = {
  domain_name: string
  verification_type?: 'dns' | 'http' | undefined
}
type OrganizationDomainAddResponse = {
  challenge_token: string
  create_time: string
  domain_id: string
  domain_name: string
  linked_authentication_method_ids: string[]
  organization_id: string
  state: 'deleted' | 'unverified' | 'verified'
  verification_type: 'dns' | 'http'
}
type OrganizationDomainsListResponse = {
  domains: {
    challenge_token: string
    create_time: string
    domain_id: string
    domain_name: string
    linked_authentication_method_ids: string[]
    organization_id: string
    state: 'deleted' | 'unverified' | 'verified'
    verification_type: 'dns' | 'http'
  }[]
}
type OrganizationDomainUpdateRequestBody = { verification_type?: 'dns' | 'http' | undefined }
type OrganizationDomainUpdateResponse = {
  challenge_token: string
  create_time: string
  domain_id: string
  domain_name: string
  linked_authentication_method_ids: string[]
  organization_id: string
  state: 'deleted' | 'unverified' | 'verified'
  verification_type: 'dns' | 'http'
}
type OrganizationDomainVerifyResponse = {
  challenge_token: string
  create_time: string
  domain_id: string
  domain_name: string
  linked_authentication_method_ids: string[]
  organization_id: string
  state: 'deleted' | 'unverified' | 'verified'
  verification_type: 'dns' | 'http'
}
type UserGroupCreateRequestBody = { description: string; user_group_name: string }
type UserGroupCreateResponse = {
  create_time: string
  description: string
  managed_by_scim: boolean
  update_time: string
  user_group_id: string
  user_group_name: string
}
type UserGroupsListResponse = {
  user_groups: {
    create_time: string
    description: string
    managed_by_scim: boolean
    member_count: number
    update_time: string
    user_group_id: string
    user_group_name: string
  }[]
}
type UserGroupGetResponse = {
  create_time: string
  description: string
  managed_by_scim: boolean
  update_time: string
  user_group_id: string
  user_group_name: string
}
type UserGroupUpdateRequestBody = {
  description?: string | undefined
  user_group_name?: string | undefined
}
type UserGroupUpdateResponse = {
  create_time: string
  description: string
  managed_by_scim: boolean
  update_time: string
  user_group_id: string
  user_group_name: string
}
type UserGroupMemberListResponse = {
  members: {
    last_activity_time?: string | undefined
    user_id: string
    user_info: {
      city?: string | undefined
      country?: string | undefined
      create_time: string
      department?: string | undefined
      is_application_user: boolean
      job_title?: string | undefined
      managed_by_scim: boolean
      managing_organization_id?: string | undefined
      real_name: string
      state: string
      user_email: string
    }
  }[]
}
type UserGroupMembersUpdateRequestBody = {
  member_ids: string[]
  operation: 'add_members' | 'remove_members'
}
type KafkaConnectCustomConnectorsListResponse = {
  custom_connectors: {
    configuration_count: number
    deployment_count: number
    latest_version: string
    plugin_class_types: string[]
    plugin_description?: string | undefined
    plugin_name: string
  }[]
}
type KafkaConnectCustomPluginClassGetResponse = {
  author?: string | undefined
  created_at: string
  created_by: string
  description?: string | undefined
  doc_url?: string | undefined
  plugin_class: string
  plugin_class_type: 'source' | 'sink' | 'transformation'
  title: string
  updated_at: string
  updated_by?: string | undefined
}
type KafkaConnectCustomPluginClassUpdateRequestBody = {
  author?: string | undefined
  description?: string | undefined
  doc_url?: string | undefined
  title?: string | undefined
}
type KafkaConnectCustomPluginClassUpdateResponse = {
  author?: string | undefined
  created_at: string
  created_by: string
  description?: string | undefined
  doc_url?: string | undefined
  plugin_class: string
  plugin_class_type: 'source' | 'sink' | 'transformation'
  title: string
  updated_at: string
  updated_by?: string | undefined
}
type KafkaConnectCustomPluginClassListResponse = {
  plugin_classes: {
    author?: string | undefined
    created_at: string
    created_by: string
    description?: string | undefined
    doc_url?: string | undefined
    plugin_class: string
    plugin_class_type: 'source' | 'sink' | 'transformation'
    title: string
    updated_at: string
    updated_by?: string | undefined
  }[]
}
type KafkaConnectCustomPluginClassListByNameResponse = {
  plugin_classes: {
    author?: string | undefined
    created_at: string
    created_by: string
    description?: string | undefined
    doc_url?: string | undefined
    plugin_class: string
    plugin_class_type: 'source' | 'sink' | 'transformation'
    title: string
    updated_at: string
    updated_by?: string | undefined
  }[]
}
type KafkaConnectCustomPluginGetResponse = {
  created_at: string
  created_by: string
  plugin_description?: string | undefined
  plugin_id: string
  plugin_name: string
  service_type: 'kafka_connect'
  updated_at: string
  updated_by?: string | undefined
}
type KafkaConnectCustomPluginUpdateRequestBody = { plugin_description?: string | undefined }
type KafkaConnectCustomPluginUpdateResponse = {
  created_at: string
  created_by: string
  plugin_description?: string | undefined
  plugin_id: string
  plugin_name: string
  service_type: 'kafka_connect'
  updated_at: string
  updated_by?: string | undefined
}
type KafkaConnectCustomPluginFileClassListResponse = {
  plugin_classes: {
    author?: string | undefined
    created_at: string
    created_by: string
    description?: string | undefined
    doc_url?: string | undefined
    plugin_class: string
    plugin_class_type: 'source' | 'sink' | 'transformation'
    title: string
    updated_at: string
    updated_by?: string | undefined
  }[]
}
type KafkaConnectCustomPluginFileCreateRequestBody = {
  content_type?: 'application/java-archive' | 'application/zip' | undefined
  file_description?: string | undefined
  plugin_description?: string | undefined
  plugin_name: string
  plugin_version: string
  service_type: 'kafka_connect'
}
type KafkaConnectCustomPluginFileCreateResponse = {
  created_at: string
  created_by: string
  file_description?: string | undefined
  file_sha256?: string | undefined
  file_size?: number | undefined
  file_status: 'INITIAL' | 'READY' | 'FAILED'
  plugin_file_id: string
  plugin_id: string
  plugin_name: string
  plugin_version: string
  updated_at: string
  updated_by?: string | undefined
  upload_info: {
    content_type: 'application/java-archive' | 'application/zip'
    max_file_size_bytes: number
    upload_expiry_seconds: number
    url?: string | undefined
  }
  verify_error_code?: number | undefined
  verify_error_message?: string | undefined
}
type KafkaConnectCustomPluginFileListResponse = {
  plugin_files: {
    created_at: string
    created_by: string
    file_description?: string | undefined
    file_sha256?: string | undefined
    file_size?: number | undefined
    file_status: 'INITIAL' | 'READY' | 'FAILED'
    plugin_file_id: string
    plugin_id: string
    plugin_name: string
    plugin_version: string
    updated_at: string
    updated_by?: string | undefined
    verify_error_code?: number | undefined
    verify_error_message?: string | undefined
  }[]
}
type KafkaConnectCustomPluginFileGetResponse = {
  content_type: 'application/java-archive' | 'application/zip'
  created_at: string
  created_by: string
  file_description?: string | undefined
  file_sha256?: string | undefined
  file_size?: number | undefined
  file_status: 'INITIAL' | 'READY' | 'FAILED'
  plugin_classes: {
    author?: string | undefined
    created_at: string
    created_by: string
    description?: string | undefined
    doc_url?: string | undefined
    plugin_class: string
    plugin_class_type: 'source' | 'sink' | 'transformation'
    title: string
    updated_at: string
    updated_by?: string | undefined
  }[]
  plugin_file_id: string
  plugin_id: string
  plugin_name: string
  plugin_version: string
  service_type: 'kafka_connect'
  updated_at: string
  updated_by?: string | undefined
  verify_error_code?: number | undefined
  verify_error_message?: string | undefined
}
type KafkaConnectCustomPluginFileUpdateRequestBody = { file_description?: string | undefined }
type KafkaConnectCustomPluginFileUpdateResponse = {
  created_at: string
  created_by: string
  file_description?: string | undefined
  file_sha256?: string | undefined
  file_size?: number | undefined
  file_status: 'INITIAL' | 'READY' | 'FAILED'
  plugin_file_id: string
  plugin_id: string
  plugin_name: string
  plugin_version: string
  updated_at: string
  updated_by?: string | undefined
  verify_error_code?: number | undefined
  verify_error_message?: string | undefined
}
type KafkaConnectCustomPluginFileGetLatestResponse = {
  created_at: string
  created_by: string
  file_description?: string | undefined
  file_sha256?: string | undefined
  file_size?: number | undefined
  file_status: 'INITIAL' | 'READY' | 'FAILED'
  plugin_file_id: string
  plugin_id: string
  plugin_name: string
  plugin_version: string
  updated_at: string
  updated_by?: string | undefined
  verify_error_code?: number | undefined
  verify_error_message?: string | undefined
}
type KafkaConnectCustomPluginFileListByNameResponse = {
  plugin_files: {
    created_at: string
    created_by: string
    file_description?: string | undefined
    file_sha256?: string | undefined
    file_size?: number | undefined
    file_status: 'INITIAL' | 'READY' | 'FAILED'
    plugin_file_id: string
    plugin_id: string
    plugin_name: string
    plugin_version: string
    updated_at: string
    updated_by?: string | undefined
    verify_error_code?: number | undefined
    verify_error_message?: string | undefined
  }[]
}
type KafkaConnectCustomPluginListResponse = {
  plugins: {
    created_at: string
    created_by: string
    plugin_description?: string | undefined
    plugin_id: string
    plugin_name: string
    service_type: 'kafka_connect'
    updated_at: string
    updated_by?: string | undefined
  }[]
}
type KafkaConnectPluginDeploymentsListResponse = {
  plugin_deployments: { plugin_name: string; plugin_version: string; service_count: number }[]
}
type UserInfoGetResponse = {
  email: string
  email_verified: boolean
  name?: string | undefined
  preferred_username?: string | undefined
  sub: string
}
type OrganizationBillingGroupCreateRequestBody = {
  billing_address_id: string
  billing_contact_emails: { email: string }[]
  billing_emails: { email: string }[]
  billing_group_name: string
  custom_invoice_text?: string | undefined
  payment_method: {
    payment_method_id: string
    payment_method_type:
      | 'aws_subscription'
      | 'azure_subscription'
      | 'bank_transfer'
      | 'credit_card'
      | 'gcp_subscription'
      | 'custom'
  }
  shipping_address_id: string
  vat_id?: string | undefined
}
type OrganizationBillingGroupCreateResponse = {
  billing_address_id: string
  billing_contact_emails: { email: string }[]
  billing_emails: { email: string }[]
  billing_group_id: string
  billing_group_name: string
  create_time: string
  custom_invoice_text?: string | undefined
  organization_id: string
  payment_method?:
    | {
        payment_method_id: string
        payment_method_type:
          | 'aws_subscription'
          | 'azure_subscription'
          | 'bank_transfer'
          | 'credit_card'
          | 'gcp_subscription'
          | 'custom'
      }
    | undefined
  shipping_address_id: string
  vat_id?: string | undefined
}
type OrganizationBillingGroupListResponse = {
  billing_groups: {
    billing_address_id: string
    billing_contact_emails: { email: string }[]
    billing_emails: { email: string }[]
    billing_group_id: string
    billing_group_name: string
    create_time: string
    custom_invoice_text?: string | undefined
    organization_id: string
    payment_method?:
      | {
          payment_method_id: string
          payment_method_type:
            | 'aws_subscription'
            | 'azure_subscription'
            | 'bank_transfer'
            | 'credit_card'
            | 'gcp_subscription'
            | 'custom'
        }
      | undefined
    shipping_address_id: string
    vat_id?: string | undefined
  }[]
  next?: string | undefined
  prev?: string | undefined
}
type OrganizationBillingGroupGetResponse = {
  billing_address_id: string
  billing_contact_emails: { email: string }[]
  billing_emails: { email: string }[]
  billing_group_id: string
  billing_group_name: string
  create_time: string
  custom_invoice_text?: string | undefined
  organization_id: string
  payment_method?:
    | {
        payment_method_id: string
        payment_method_type:
          | 'aws_subscription'
          | 'azure_subscription'
          | 'bank_transfer'
          | 'credit_card'
          | 'gcp_subscription'
          | 'custom'
      }
    | undefined
  shipping_address_id: string
  vat_id?: string | undefined
}
type OrganizationBillingGroupUpdateRequestBody = {
  billing_address_id?: string | undefined
  billing_contact_emails?: { email: string }[] | undefined
  billing_emails?: { email: string }[] | undefined
  billing_group_name?: string | undefined
  custom_invoice_text?: string | undefined
  payment_method?:
    | {
        payment_method_id: string
        payment_method_type:
          | 'aws_subscription'
          | 'azure_subscription'
          | 'bank_transfer'
          | 'credit_card'
          | 'gcp_subscription'
          | 'custom'
      }
    | undefined
  shipping_address_id?: string | undefined
  vat_id?: string | undefined
}
type OrganizationBillingGroupUpdateResponse = {
  billing_address_id: string
  billing_contact_emails: { email: string }[]
  billing_emails: { email: string }[]
  billing_group_id: string
  billing_group_name: string
  create_time: string
  custom_invoice_text?: string | undefined
  organization_id: string
  payment_method?:
    | {
        payment_method_id: string
        payment_method_type:
          | 'aws_subscription'
          | 'azure_subscription'
          | 'bank_transfer'
          | 'credit_card'
          | 'gcp_subscription'
          | 'custom'
      }
    | undefined
  shipping_address_id: string
  vat_id?: string | undefined
}
type OrganizationBillingInvoiceGetResponse = {
  billing_group_id: string
  create_time: string
  currency:
    | 'AUD'
    | 'CAD'
    | 'CHF'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'NOK'
    | 'NZD'
    | 'SEK'
    | 'SGD'
    | 'USD'
  download_only: boolean
  due_date?: string | undefined
  invoice_number: string
  invoice_period: { begin_time: string; end_time: string }
  issue_date: string
  net: string
  net_usd: string
  organization_id: string
  overdue: boolean
  state:
    | 'accrual'
    | 'consolidated'
    | 'due'
    | 'estimate'
    | 'failed_credit_card_charge'
    | 'failed_no_credit_card'
    | 'mailed'
    | 'no_payment_expected'
    | 'paid'
    | 'partner_metering'
    | 'uncollectible'
    | 'waived'
  total: string
  total_usd: string
}
type OrganizationBillingInvoiceLinesListResponse = {
  lines: {
    begin_time?: string | undefined
    cloud?: string | undefined
    currency?:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
      | undefined
    description?: string | undefined
    end_time?: string | undefined
    line_type:
      | 'commitment_fee'
      | 'credit_consumption'
      | 'extra_charge'
      | 'multiplier'
      | 'other_event'
      | 'pro_platform_charge'
      | 'rounding'
      | 'service_charge'
      | 'support_charge'
    plan?: string | undefined
    project_id?: string | undefined
    service_id?: string | undefined
    service_type?: string | undefined
    tags?: { [x: string]: unknown } | undefined
    total: string
    total_usd: string
  }[]
}
type OrganizationBillingInvoiceListResponse = {
  invoices: {
    billing_group_id: string
    create_time: string
    currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    download_only: boolean
    due_date?: string | undefined
    invoice_number: string
    invoice_period: { begin_time: string; end_time: string }
    issue_date: string
    net: string
    net_usd: string
    organization_id: string
    overdue: boolean
    state:
      | 'accrual'
      | 'consolidated'
      | 'due'
      | 'estimate'
      | 'failed_credit_card_charge'
      | 'failed_no_credit_card'
      | 'mailed'
      | 'no_payment_expected'
      | 'paid'
      | 'partner_metering'
      | 'uncollectible'
      | 'waived'
    total: string
    total_usd: string
  }[]
}
type OrganizationEmissionsGetResponse = {
  ending_time: string
  granularity: 'day' | 'month'
  groups: {
    buckets: { bucket_start: string; co2eq_kg: number }[]
    deleted?: boolean | undefined
    group_name?: string | undefined
  }[]
  starting_time: string
}
type BankTransferGetResponse = {
  create_time: string
  currency:
    | 'AUD'
    | 'CAD'
    | 'CHF'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'NOK'
    | 'NZD'
    | 'SEK'
    | 'SGD'
    | 'USD'
  organization_id: string
  payment_method_id: string
  payment_terms_days: number
  state: string
  update_time: string
}
type BankTransferListResponse = {
  bank_transfers: {
    create_time: string
    currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    organization_id: string
    payment_method_id: string
    payment_terms_days: number
    state: string
    update_time: string
  }[]
}
type CreditCardCreateRequestBody = { stripe_payment_method_id: string }
type CreditCardCreateResponse = {
  brand: string
  create_time: string
  exp_month: number
  exp_year: number
  last4: string
  name: string
  organization_id: string
  payment_method_id: string
  state: string
  update_time: string
}
type CreditCardListResponse = {
  credit_cards: {
    brand: string
    create_time: string
    exp_month: number
    exp_year: number
    last4: string
    name: string
    organization_id: string
    payment_method_id: string
    state: string
    update_time: string
  }[]
}
type CreditCardDeleteResponse = {
  brand: string
  create_time: string
  exp_month: number
  exp_year: number
  last4: string
  name: string
  organization_id: string
  payment_method_id: string
  state: string
  update_time: string
}
type CreditCardGetResponse = {
  brand: string
  create_time: string
  exp_month: number
  exp_year: number
  last4: string
  name: string
  organization_id: string
  payment_method_id: string
  state: string
  update_time: string
}
type PaymentMethodCustomGetResponse = {
  create_time: string
  organization_id: string
  payment_method_id: string
  state: string
  type: 'disabled' | 'no_payment_expected' | 'partner'
  update_time: string
}
type PaymentMethodCustomListResponse = {
  custom_methods: {
    create_time: string
    organization_id: string
    payment_method_id: string
    state: string
    type: 'disabled' | 'no_payment_expected' | 'partner'
    update_time: string
  }[]
}
type PaymentMethodsListResponse = {
  payment_methods: {
    payment_method_id: string
    payment_method_type:
      | 'aws_subscription'
      | 'azure_subscription'
      | 'bank_transfer'
      | 'credit_card'
      | 'gcp_subscription'
      | 'custom'
  }[]
}
type OrganizationVpcCloudsListResponse = {
  clouds: {
    cloud_description?: string | undefined
    cloud_name: string
    geo_latitude?: number | undefined
    geo_longitude?: number | undefined
    geo_region: string
    provider?: string | undefined
    provider_description?: string | undefined
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type OrganizationVpcCreateRequestBody = {
  clouds: { cloud_name: string; network_cidr: string }[]
  display_name?: string | undefined
  peering_connections: {
    peer_azure_app_id?: string | undefined
    peer_azure_tenant_id?: string | undefined
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group?: string | undefined
    peer_vpc: string
    user_peer_network_cidrs?: string[] | undefined
  }[]
}
type OrganizationVpcCreateResponse = {
  clouds: { cloud_name: string; network_cidr: string }[]
  create_time: string
  display_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  organization_id: string
  organization_vpc_id: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type OrganizationVpcListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  vpcs: {
    clouds: { cloud_name: string; network_cidr: string }[]
    create_time: string
    display_name: string
    organization_id: string
    organization_vpc_id: string
    state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
    update_time: string
  }[]
}
type OrganizationVpcDeleteResponse = {
  clouds: { cloud_name: string; network_cidr: string }[]
  create_time: string
  display_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  organization_id: string
  organization_vpc_id: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type OrganizationVpcGetResponse = {
  clouds: { cloud_name: string; network_cidr: string }[]
  create_time: string
  display_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  organization_id: string
  organization_vpc_id: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type OrganizationVpcUpdateRequestBody = { display_name?: string | undefined }
type OrganizationVpcUpdateResponse = {
  clouds: { cloud_name: string; network_cidr: string }[]
  create_time: string
  display_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  organization_id: string
  organization_vpc_id: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type OrganizationVpcPeeringConnectionCreateRequestBody = {
  peer_azure_app_id?: string | undefined
  peer_azure_tenant_id?: string | undefined
  peer_cloud_account: string
  peer_region?: string | undefined
  peer_resource_group?: string | undefined
  peer_vpc: string
  user_peer_network_cidrs?: string[] | undefined
}
type OrganizationVpcPeeringConnectionCreateResponse = {
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  peer_azure_app_id: string
  peer_azure_tenant_id: string
  peer_cloud_account: string
  peer_region?: string | undefined
  peer_resource_group: string
  peer_vpc: string
  peering_connection_id?: string | undefined
  state:
    | 'ACTIVE'
    | 'APPROVED'
    | 'APPROVED_PEER_REQUESTED'
    | 'DELETED'
    | 'DELETED_BY_PEER'
    | 'DELETING'
    | 'ERROR'
    | 'INVALID_SPECIFICATION'
    | 'PENDING_PEER'
    | 'REJECTED_BY_PEER'
  state_info: {
    message: string
    type: string
    warnings?:
      | {
          conflicting_aws_account_id?: string | undefined
          conflicting_aws_vpc_id?: string | undefined
          conflicting_aws_vpc_peering_connection_id?: string | undefined
          message: string
          type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
        }[]
      | undefined
  }
  update_time: string
  user_peer_network_cidrs: string[]
  vpc_peering_connection_type:
    | 'aws-tgw-vpc-attachment'
    | 'aws-vpc-peering-connection'
    | 'azure-vnet-peering'
    | 'do-vpc-peering'
    | 'google-vpc-peering'
    | 'upcloud-vpc-peering'
}
type OrganizationVpcPeeringConnectionDeleteByIdResponse = {
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  peer_azure_app_id: string
  peer_azure_tenant_id: string
  peer_cloud_account: string
  peer_region?: string | undefined
  peer_resource_group: string
  peer_vpc: string
  peering_connection_id?: string | undefined
  state:
    | 'ACTIVE'
    | 'APPROVED'
    | 'APPROVED_PEER_REQUESTED'
    | 'DELETED'
    | 'DELETED_BY_PEER'
    | 'DELETING'
    | 'ERROR'
    | 'INVALID_SPECIFICATION'
    | 'PENDING_PEER'
    | 'REJECTED_BY_PEER'
  state_info: {
    message: string
    type: string
    warnings?:
      | {
          conflicting_aws_account_id?: string | undefined
          conflicting_aws_vpc_id?: string | undefined
          conflicting_aws_vpc_peering_connection_id?: string | undefined
          message: string
          type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
        }[]
      | undefined
  }
  update_time: string
  user_peer_network_cidrs: string[]
  vpc_peering_connection_type:
    | 'aws-tgw-vpc-attachment'
    | 'aws-vpc-peering-connection'
    | 'azure-vnet-peering'
    | 'do-vpc-peering'
    | 'google-vpc-peering'
    | 'upcloud-vpc-peering'
}
type OrganizationVpcPeeringConnectionPeerNetworkCidrsUpdateResponse = {
  clouds: { cloud_name: string; network_cidr: string }[]
  create_time: string
  display_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  organization_id: string
  organization_vpc_id: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type OrganizationVpcPeeringConnectionPeerNetworkCidrsUpdateV2RequestBody = {
  add?:
    | {
        cidr: string
        peer_cloud_account: string
        peer_resource_group?: string | undefined
        peer_vpc: string
      }[]
    | undefined
  delete?: string[] | undefined
}
type OrganizationVpcPeeringConnectionPeerNetworkCidrsUpdateV2Response = {
  clouds: { cloud_name: string; network_cidr: string }[]
  create_time: string
  display_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  organization_id: string
  organization_vpc_id: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type OrganizationVpcPeeringConnectionTypesListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  vpc_peering_connection_types: {
    cloud_name: string
    price_usd: string
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
}
type OrganizationVpcPeeringConnectionsRefreshResponse = {
  clouds: { cloud_name: string; network_cidr: string }[]
  create_time: string
  display_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  organization_id: string
  organization_vpc_id: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type DiscoveredOrganizationListResponse = {
  discovered_organizations: {
    create_time: string
    organization_id: string
    organization_name: string
    users: {
      create_time: string
      is_super_admin: boolean
      real_name: string
      user_email: string
      user_id: string
    }[]
  }[]
}
type OrganizationAuthenticationConfigGetResponse = {
  mcp_enabled?: boolean | undefined
  mcp_read_only?: boolean | undefined
  oauth_enabled?: boolean | undefined
  password_auth_enabled?: boolean | undefined
  personal_tokens_enabled?: boolean | undefined
  personal_tokens_require_allowed_auth_method?: boolean | undefined
  saml_allow_external?: boolean | undefined
  saml_enabled?: boolean | undefined
  two_factor_required?: boolean | undefined
}
type OrganizationAuthenticationConfigUpdateRequestBody = {
  mcp_enabled?: boolean | undefined
  mcp_read_only?: boolean | undefined
  oauth_enabled?: boolean | undefined
  password_auth_enabled?: boolean | undefined
  personal_tokens_enabled?: boolean | undefined
  personal_tokens_require_allowed_auth_method?: boolean | undefined
  saml_allow_external?: boolean | undefined
  saml_enabled?: boolean | undefined
  two_factor_required?: boolean | undefined
}
type OrganizationAuthenticationConfigUpdateResponse = {
  mcp_enabled?: boolean | undefined
  mcp_read_only?: boolean | undefined
  oauth_enabled?: boolean | undefined
  password_auth_enabled?: boolean | undefined
  personal_tokens_enabled?: boolean | undefined
  personal_tokens_require_allowed_auth_method?: boolean | undefined
  saml_allow_external?: boolean | undefined
  saml_enabled?: boolean | undefined
  two_factor_required?: boolean | undefined
}
type OrganizationBillingReportReadRequestBody = {
  billing_group_name?: string | undefined
  ending_date: string
  service_name?: string | undefined
  starting_date: string
}
type OrganizationBillingReportReadResponse = {
  line_items: {
    billing_group_id: string
    ending_before: string
    list_price: number
    name: string
    presentation_group_values: { [x: string]: unknown }
    pricing_group_values: { [x: string]: unknown }
    product_custom_fields: { [x: string]: unknown }
    product_tags: string[]
    product_type:
      | 'FixedProductListItem'
      | 'UsageProductListItem'
      | 'SubscriptionProductListItem'
      | 'CompositeProductListItem'
    quantity: number
    starting_at: string
    total: number
    type:
      | 'scheduled'
      | 'commit_purchase'
      | 'usage'
      | 'subscription'
      | 'applied_commit_or_credit'
      | 'cpu_conversion'
    unit_price: number
  }[]
}
type OrganizationGetResponse = {
  account_id: string
  create_time: string
  default_governance_user_group_id?: string | undefined
  organization_id: string
  organization_name: string
  tier: 'business' | 'personal'
  update_time: string
}
type OrganizationUpdateRequestBody = {
  name?: string | undefined
  tier?: 'business' | 'personal' | undefined
}
type OrganizationUpdateResponse = {
  account_id: string
  create_time: string
  default_governance_user_group_id?: string | undefined
  organization_id: string
  organization_name: string
  tier: 'business' | 'personal'
  update_time: string
}
type OrganizationEventLogsDownloadRequestBody = {
  asset_filters?:
    | {
        '\\'?: string | undefined
        actor?: string | undefined
        actor_user_id?: string | undefined
        billing_group_id?: string | undefined
        project_id?: string | undefined
        service_id?: string | undefined
        unit_id?: string | undefined
      }
    | undefined
  event_types?: string[] | undefined
  from_time?: string | undefined
  to_time?: string | undefined
}
type OrganizationEventLogsGetRequestBody = {
  asset_filters?:
    | {
        '\\'?: string | undefined
        actor?: string | undefined
        actor_user_id?: string | undefined
        billing_group_id?: string | undefined
        project_id?: string | undefined
        service_id?: string | undefined
        unit_id?: string | undefined
      }
    | undefined
  cursor?: string | undefined
  event_types?: string[] | undefined
  from_time?: string | undefined
  limit?: number | undefined
  order_by?: 'create_time:asc' | 'create_time:desc' | undefined
  to_time?: string | undefined
}
type OrganizationEventLogsGetResponse = {
  events: {
    actor?: string | undefined
    actor_user_id?: string | undefined
    billing_group_id?: string | undefined
    create_time: string
    event_type: string
    log_entry_id: string
    metadata?: { [x: string]: unknown } | undefined
    organization_id?: string | undefined
    project_id?: string | undefined
    service_id?: string | undefined
    summary: string
    unit_id?: string | undefined
  }[]
  next?: string | undefined
  previous?: string | undefined
}
type OrganizationGovernanceAccessCreateRequestBody = {
  access_data: {
    acls: {
      host: string
      operation: 'Read' | 'Write'
      permission_type: 'ALLOW'
      resource_name: string
      resource_type: 'Topic'
    }[]
    project_name: string
    service_name: string
    username: string
  }
  access_name: string
  access_type: 'KAFKA'
  owner_user_group_id?: string | undefined
}
type OrganizationGovernanceAccessCreateResponse = {
  access: {
    access_data: {
      acls: {
        host: string
        id: string
        operation: 'Read' | 'Write'
        pattern_type: 'LITERAL'
        permission_type: 'ALLOW'
        principal: string
        resource_name: string
        resource_type: 'Topic'
      }[]
      project_name: string
      service_name: string
      username: string
    }
    access_id: string
    access_name: string
    access_type: 'KAFKA'
    create_time: string
    created_by: string
    credentials_consumed: boolean
    credentials_user_id: string
    owner_user_group_id?: string | undefined
  }
}
type OrganizationGovernanceAccessListResponse = {
  access: {
    access_data: {
      acls: {
        host: string
        id: string
        operation: 'Read' | 'Write'
        pattern_type: 'LITERAL'
        permission_type: 'ALLOW'
        principal: string
        resource_name: string
        resource_type: 'Topic'
      }[]
      project_name: string
      service_name: string
      username: string
    }
    access_id: string
    access_name: string
    access_type: 'KAFKA'
    create_time: string
    created_by: string
    credentials_consumed: boolean
    credentials_user_id: string
    owner_user_group_id?: string | undefined
  }[]
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  prev?: string | undefined
  total_count?: number | undefined
}
type OrganizationGovernanceAccessCredentialsGetResponse = {
  credentials: { access_cert: string; access_key: string; password: string }
}
type OrganizationGovernanceAccessDeleteResponse = { access_id: string }
type OrganizationGovernanceAccessGetResponse = {
  access: {
    access_data: {
      acls: {
        host: string
        id: string
        operation: 'Read' | 'Write'
        pattern_type: 'LITERAL'
        permission_type: 'ALLOW'
        principal: string
        resource_name: string
        resource_type: 'Topic'
      }[]
      project_name: string
      service_name: string
      username: string
    }
    access_id: string
    access_name: string
    access_type: 'KAFKA'
    create_time: string
    created_by: string
    credentials_consumed: boolean
    credentials_user_id: string
    owner_user_group_id?: string | undefined
  }
}
type OrganizationIPAllowListGetResponse = {
  api_client_ip_allowlist: string[]
  api_client_ip_allowlist_enabled: boolean
}
type OrganizationIPAllowListSetRequestBody = {
  api_client_ip_allowlist: string[]
  api_client_ip_allowlist_enabled: boolean
}
type OrganizationProjectsCreateRequestBody = {
  base_port?: number | undefined
  billing_group_id: string
  parent_id?: string | undefined
  project_id: string
  tags: { ANY?: string | undefined }
  tech_emails?: { email: string }[] | undefined
}
type OrganizationProjectsCreateResponse = {
  account_id?: string | undefined
  base_port?: number | undefined
  billing_group_id?: string | undefined
  end_of_life_extension: { ANY?: { eol_date: string; version: string } | undefined }
  features?: { ANY?: boolean | undefined } | undefined
  organization_id: string
  parent_id: string
  project_id: string
  tags: { ANY?: string | undefined }
  tech_emails: { email: string }[]
}
type OrganizationProjectsListResponse = {
  projects: {
    account_id?: string | undefined
    base_port?: number | undefined
    billing_group_id?: string | undefined
    end_of_life_extension: { ANY?: { eol_date: string; version: string } | undefined }
    parent_id: string
    project_id: string
    tags: { ANY?: string | undefined }
    tech_emails: { email: string }[]
  }[]
  total_project_count: number
}
type OrganizationProjectsGetResponse = {
  account_id?: string | undefined
  base_port?: number | undefined
  billing_group_id?: string | undefined
  end_of_life_extension: { ANY?: { eol_date: string; version: string } | undefined }
  features?: { ANY?: boolean | undefined } | undefined
  organization_id: string
  parent_id: string
  project_id: string
  tags: { ANY?: string | undefined }
  tech_emails: { email: string }[]
}
type OrganizationProjectsUpdateRequestBody = {
  base_port?: number | undefined
  billing_group_id?: string | undefined
  organization_id?: string | undefined
  parent_id?: string | undefined
  project_name?: string | undefined
  tags?: { ANY?: string | undefined } | undefined
  tech_emails?: { email: string }[] | undefined
}
type OrganizationProjectsUpdateResponse = {
  account_id?: string | undefined
  base_port?: number | undefined
  billing_group_id?: string | undefined
  end_of_life_extension: { ANY?: { eol_date: string; version: string } | undefined }
  features?: { ANY?: boolean | undefined } | undefined
  organization_id: string
  parent_id: string
  project_id: string
  tags: { ANY?: string | undefined }
  tech_emails: { email: string }[]
}
type OrganizationServiceLogCountsGetRequestBody = {
  build_id?: string | undefined
  component?: string | undefined
  from_time?: string | undefined
  hostname?: string | undefined
  interval_seconds?: number | undefined
  log_type?: 'application-build' | 'application-run' | undefined
  node_role?: string | undefined
  severity?:
    | 'emergency'
    | 'alert'
    | 'critical'
    | 'error'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | undefined
  to_time?: string | undefined
}
type OrganizationServiceLogCountsGetResponse = {
  buckets: {
    counts: {
      alert: number
      critical: number
      debug: number
      emergency: number
      error: number
      info: number
      notice: number
      warning: number
    }
    start_time: string
  }[]
  from_time: string
  interval_seconds: number
  to_time: string
  totals: {
    alert: number
    critical: number
    debug: number
    emergency: number
    error: number
    info: number
    notice: number
    warning: number
  }
}
type OrganizationServiceLogsGetRequestBody = {
  build_id?: string | undefined
  component?: string | undefined
  cursor?: string | undefined
  from_time?: string | undefined
  hostname?: string | undefined
  limit?: number | undefined
  log_type?: 'application-build' | 'application-run' | undefined
  node_role?: string | undefined
  order_by?: 'log_time:asc' | 'log_time:desc' | undefined
  severity?:
    | 'emergency'
    | 'alert'
    | 'critical'
    | 'error'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | undefined
  to_time?: string | undefined
}
type OrganizationServiceLogsGetResponse = {
  logs: {
    component: string
    hostname: string
    log_time: string
    metadata?: { ANY?: string | undefined } | undefined
    msg: string
    severity: string
  }[]
  next?: string | undefined
  previous?: string | undefined
}
type OrganizationUserInvitationAcceptRequestBody = { action?: 'accept' | undefined }
type OrganizationUserInvitationsListResponse = {
  invitations: {
    create_time: string
    expiry_time: string
    invited_by: string
    user_email: string
  }[]
}
type OrganizationUserInviteRequestBody = { user_email: string }
type ProjectEventLogsDownloadRequestBody = {
  asset_filters?:
    | {
        '\\'?: string | undefined
        actor?: string | undefined
        actor_user_id?: string | undefined
        service_id?: string | undefined
      }
    | undefined
  event_types?: string[] | undefined
  from_time?: string | undefined
  to_time?: string | undefined
}
type ProjectEventLogsGetRequestBody = {
  asset_filters?:
    | {
        '\\'?: string | undefined
        actor?: string | undefined
        actor_user_id?: string | undefined
        service_id?: string | undefined
      }
    | undefined
  cursor?: string | undefined
  event_types?: string[] | undefined
  from_time?: string | undefined
  limit?: number | undefined
  order_by?: 'create_time:asc' | 'create_time:desc' | undefined
  to_time?: string | undefined
}
type ProjectEventLogsGetResponse = {
  events: {
    actor?: string | undefined
    actor_user_id?: string | undefined
    billing_group_id?: string | undefined
    create_time: string
    event_type: string
    log_entry_id: string
    metadata?: { [x: string]: unknown } | undefined
    organization_id?: string | undefined
    project_id?: string | undefined
    service_id?: string | undefined
    summary: string
    unit_id?: string | undefined
  }[]
  next?: string | undefined
  previous?: string | undefined
}
type UserOrganizationCreateRequestBody = {
  organization_name: string
  primary_billing_group_id?: string | undefined
  tier: 'business' | 'personal'
}
type UserOrganizationCreateResponse = {
  account_id: string
  create_time: string
  default_governance_user_group_id?: string | undefined
  organization_id: string
  organization_name: string
  tier: 'business' | 'personal'
  update_time: string
}
type UserOrganizationsListResponse = {
  organizations: {
    account_id: string
    create_time: string
    default_governance_user_group_id?: string | undefined
    organization_id: string
    organization_name: string
    tier: 'business' | 'personal'
    update_time: string
  }[]
}
type VcsIntegrationListResponse = {
  vcs_integrations: {
    create_time: string
    remote_configure_url?: string | undefined
    vcs_account_name: string
    vcs_integration_id: string
    vcs_type: 'github'
  }[]
}
type VcsIntegrationRepositoryBranchListResponse = {
  branches: { commit_sha: string; name: string }[]
  next?: string | undefined
  previous?: string | undefined
}
type VcsIntegrationRepositoryContainerManifestFilesListResponse = {
  container_manifest_files: {
    container_manifest_type: 'compose' | 'containerfile'
    file_path: string
    file_sha: string
  }[]
}
type VcsIntegrationRepositoryFileScanRequestBody = {
  branch: string
  file_path: string
  repository_url: string
}
type VcsIntegrationRepositoryFileScanResponse = {
  file_scan: {
    container_manifest_type?: 'compose' | 'containerfile' | undefined
    scanned_attributes?:
      | {
          attribute_type: 'port' | 'environment_variable'
          description: string
          file_path?: string | undefined
          line_number: number
          value: string
        }[]
      | undefined
    service_suggestions?:
      | {
          service_integrations?:
            | {
                integration_type:
                  | 'alert_triage_kafka'
                  | 'alertmanager'
                  | 'application_service_credential'
                  | 'autoscaler'
                  | 'autoscaler_service'
                  | 'caching'
                  | 'clickhouse_credentials'
                  | 'clickhouse_kafka'
                  | 'clickhouse_postgresql'
                  | 'dashboard'
                  | 'datadog'
                  | 'datahub_metadata_ingestion'
                  | 'datasource'
                  | 'disaster_recovery'
                  | 'external_aws_cloudwatch_logs'
                  | 'external_aws_cloudwatch_metrics'
                  | 'external_elasticsearch_logs'
                  | 'external_google_cloud_logging'
                  | 'external_opensearch_logs'
                  | 'flink'
                  | 'flink_external_bigquery'
                  | 'flink_external_kafka'
                  | 'flink_external_postgresql'
                  | 'internal_connectivity'
                  | 'jolokia'
                  | 'kafka_connect'
                  | 'kafka_connect_postgresql'
                  | 'kafka_inkless_postgresql'
                  | 'kafka_logs'
                  | 'kafka_mirrormaker'
                  | 'logs'
                  | 'metrics'
                  | 'opensearch_cross_cluster_replication'
                  | 'opensearch_cross_cluster_search'
                  | 'opentelemetry'
                  | 'pg_for_analytics_credentials'
                  | 'postgresql_clickhouse_cdc'
                  | 'prometheus'
                  | 'read_replica'
                  | 'rsyslog'
                  | 'schema_registry_proxy'
                  | 'service_composition'
                  | 'stresstester'
                  | 'thanos_distributed_query'
                  | 'thanos_migrate'
                  | 'thanos_object_storage'
                  | 'thanoscompactor'
                  | 'thanosquery'
                  | 'thanosruler'
                  | 'thanosstore'
                  | 'vector'
                  | 'vmalert'
                source_service: string
                user_config: { [x: string]: unknown }
              }[]
            | undefined
          service_name: string
          service_type: string
          user_config?:
            | {
                application: {
                  environment_variables: {
                    key: string
                    kind: 'secret' | 'variable'
                    value: string
                  }[]
                  ports: {
                    custom_domains?: string[] | undefined
                    name: string
                    port: number
                    protocol: 'HTTP'
                    security?:
                      | {
                          authentication_method: 'oidc' | 'aiven_platform' | 'okta'
                          oidc?:
                            | {
                                client_id: string
                                client_secret: string
                                issuer_url: string
                                name: string
                              }
                            | undefined
                        }
                      | undefined
                  }[]
                  source: {
                    branch: string
                    build_path: string
                    containerfile_path: string
                    remote_repository_id: string
                    repository_url: string
                    vcs_integration_id: string
                  }
                }
              }
            | undefined
        }[]
      | undefined
  }
}
type VcsIntegrationRepositoryListResponse = {
  next?: string | undefined
  previous?: string | undefined
  repositories: {
    default_branch_name: string
    full_name: string
    name: string
    remote_repository_id: string
    source_url: string
    vcs_integration_id: string
    vcs_type: string
  }[]
}
type UserCreditCardAddResponse = {
  card: {
    brand: string
    card_id: string
    country: string
    country_code: string
    exp_month: number
    exp_year: number
    last4: string
    name: string
    organization_id?: string | undefined
    projects: string[]
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserCreditCardsListResponse = {
  cards: {
    brand: string
    card_id: string
    country: string
    country_code: string
    exp_month: number
    exp_year: number
    last4: string
    name: string
    organization_id?: string | undefined
    projects: string[]
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserCreditCardDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserCreditCardUpdateResponse = {
  card: {
    brand: string
    card_id: string
    country: string
    country_code: string
    exp_month: number
    exp_year: number
    last4: string
    name: string
    organization_id?: string | undefined
    projects: string[]
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type PermissionsGetResponse = {
  permissions: {
    create_time: string
    permissions: string[]
    principal_id: string
    principal_type: 'user' | 'user_group'
    update_time: string
  }[]
}
type PermissionsSetRequestBody = {
  permissions: {
    permissions: string[]
    principal_id: string
    principal_type: 'user' | 'user_group'
  }[]
}
type PermissionsUpdateRequestBody = {
  operation?: 'grant' | 'set' | 'revoke' | undefined
  permissions: {
    permissions: string[]
    principal_id: string
    principal_type: 'user' | 'user_group'
  }[]
}
type ListProjectVpcPeeringConnectionTypesResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  vpc_peering_connection_types: {
    cloud_name: string
    price_usd: string
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
}
type ProjectAlertsListResponse = {
  alerts: {
    create_time: string
    event: string
    node_name?: string | undefined
    project_name: string
    service_name?: string | undefined
    service_type?: string | undefined
    severity: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectCreateRequestBody = {
  account_id?: string | undefined
  add_account_owners_admin_access?: boolean | undefined
  address_lines?: string[] | undefined
  base_port?: number | undefined
  billing_address?: string | undefined
  billing_currency?:
    | 'AUD'
    | 'CAD'
    | 'CHF'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'NOK'
    | 'NZD'
    | 'SEK'
    | 'SGD'
    | 'USD'
    | undefined
  billing_emails?: { email: string }[] | undefined
  billing_extra_text?: string | undefined
  billing_group_id?: string | undefined
  card_id?: string | undefined
  city?: string | undefined
  cloud?: string | undefined
  company?: string | undefined
  copy_from_project?: string | undefined
  copy_tags?: boolean | undefined
  country_code?: string | undefined
  project: string
  state?: string | undefined
  tags?: { [x: string]: unknown } | undefined
  tech_emails?: { email: string }[] | undefined
  use_source_project_billing_group?: boolean | undefined
  vat_id?: string | undefined
  zip_code?: string | undefined
}
type ProjectCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  project: {
    account_id: string
    account_name?: string | undefined
    address_lines?: string[] | undefined
    available_credits?: string | undefined
    billing_address: string
    billing_currency?:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
      | undefined
    billing_emails: { email: string }[]
    billing_extra_text?: string | undefined
    billing_group_id: string
    billing_group_name: string
    card_info?:
      | {
          brand: string
          card_id: string
          country: string
          country_code: string
          exp_month: number
          exp_year: number
          last4: string
          name: string
          user_email: string
        }
      | undefined
    city?: string | undefined
    company?: string | undefined
    country: string
    country_code: string
    default_cloud: string
    end_of_life_extension?:
      | { elasticsearch?: { eol_date: string; version: string } | undefined }
      | undefined
    estimated_balance: string
    estimated_balance_local?: string | undefined
    features?: { [x: string]: unknown } | undefined
    organization_id: string
    payment_method: string
    project_name: string
    state?: string | undefined
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    tenant_id?: string | undefined
    trial_expiration_time?: string | undefined
    vat_id: string
    zip_code?: string | undefined
  }
}
type ProjectListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  project_membership: {
    ANY?:
      | 'admin'
      | 'application:access:connect'
      | 'developer'
      | 'operator'
      | 'organization:app_users:write'
      | 'organization:billing:read'
      | 'organization:billing:write'
      | 'organization:domains:write'
      | 'organization:event_logs:read'
      | 'organization:groups:read'
      | 'organization:groups:write'
      | 'organization:networking:read'
      | 'organization:networking:write'
      | 'organization:projects:write'
      | 'organization:sustainability:read'
      | 'organization:users:read'
      | 'organization:users:write'
      | 'project:ai_gateway_keys:read'
      | 'project:ai_gateway_keys:write'
      | 'project:audit_logs:read'
      | 'project:event_logs:read'
      | 'project:integrations:read'
      | 'project:integrations:write'
      | 'project:networking:read'
      | 'project:networking:write'
      | 'project:permissions:read'
      | 'project:services:read'
      | 'project:services:write'
      | 'read_only'
      | 'role:organization:admin'
      | 'role:project:admin'
      | 'role:project:manager'
      | 'role:project:read'
      | 'role:services:maintenance'
      | 'role:services:recover'
      | 'service:configuration:write'
      | 'service:data:write'
      | 'service:logs:read'
      | 'service:metrics:read'
      | 'service:secrets:read'
      | 'service:users:write'
      | undefined
  }
  project_memberships: { ANY?: string[] | undefined }
  projects: {
    account_id: string
    account_name?: string | undefined
    address_lines?: string[] | undefined
    available_credits?: string | undefined
    billing_address: string
    billing_currency?:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
      | undefined
    billing_emails: { email: string }[]
    billing_extra_text?: string | undefined
    billing_group_id: string
    billing_group_name: string
    card_info?:
      | {
          brand: string
          card_id: string
          country: string
          country_code: string
          exp_month: number
          exp_year: number
          last4: string
          name: string
          user_email: string
        }
      | undefined
    city?: string | undefined
    company?: string | undefined
    country: string
    country_code: string
    default_cloud: string
    end_of_life_extension?:
      | { elasticsearch?: { eol_date: string; version: string } | undefined }
      | undefined
    estimated_balance: string
    estimated_balance_local?: string | undefined
    features?: { [x: string]: unknown } | undefined
    organization_id: string
    payment_method: string
    project_name: string
    state?: string | undefined
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    tenant_id?: string | undefined
    trial_expiration_time?: string | undefined
    vat_id: string
    zip_code?: string | undefined
  }[]
}
type ProjectDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  project: {
    account_id: string
    account_name?: string | undefined
    address_lines?: string[] | undefined
    available_credits?: string | undefined
    billing_address: string
    billing_currency?:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
      | undefined
    billing_emails: { email: string }[]
    billing_extra_text?: string | undefined
    billing_group_id: string
    billing_group_name: string
    card_info?:
      | {
          brand: string
          card_id: string
          country: string
          country_code: string
          exp_month: number
          exp_year: number
          last4: string
          name: string
          user_email: string
        }
      | undefined
    city?: string | undefined
    company?: string | undefined
    country: string
    country_code: string
    default_cloud: string
    end_of_life_extension?:
      | { elasticsearch?: { eol_date: string; version: string } | undefined }
      | undefined
    estimated_balance: string
    estimated_balance_local?: string | undefined
    features?: { [x: string]: unknown } | undefined
    organization_id: string
    payment_method: string
    project_name: string
    state?: string | undefined
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    tenant_id?: string | undefined
    trial_expiration_time?: string | undefined
    vat_id: string
    zip_code?: string | undefined
  }
}
type ProjectUpdateRequestBody = {
  account_id?: string | undefined
  add_account_owners_admin_access?: boolean | undefined
  address_lines?: string[] | undefined
  billing_address?: string | undefined
  billing_currency?:
    | 'AUD'
    | 'CAD'
    | 'CHF'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'JPY'
    | 'NOK'
    | 'NZD'
    | 'SEK'
    | 'SGD'
    | 'USD'
    | undefined
  billing_emails?: { email: string }[] | undefined
  billing_extra_text?: string | undefined
  billing_group_id?: string | undefined
  card_id?: string | undefined
  city?: string | undefined
  cloud?: string | undefined
  company?: string | undefined
  country_code?: string | undefined
  project_name?: string | undefined
  state?: string | undefined
  tags?: { [x: string]: unknown } | undefined
  tech_emails?: { email: string }[] | undefined
  vat_id?: string | undefined
  zip_code?: string | undefined
}
type ProjectUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  project: {
    account_id: string
    account_name?: string | undefined
    address_lines?: string[] | undefined
    available_credits?: string | undefined
    billing_address: string
    billing_currency?:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
      | undefined
    billing_emails: { email: string }[]
    billing_extra_text?: string | undefined
    billing_group_id: string
    billing_group_name: string
    card_info?:
      | {
          brand: string
          card_id: string
          country: string
          country_code: string
          exp_month: number
          exp_year: number
          last4: string
          name: string
          user_email: string
        }
      | undefined
    city?: string | undefined
    company?: string | undefined
    country: string
    country_code: string
    default_cloud: string
    end_of_life_extension?:
      | { elasticsearch?: { eol_date: string; version: string } | undefined }
      | undefined
    estimated_balance: string
    estimated_balance_local?: string | undefined
    features?: { [x: string]: unknown } | undefined
    organization_id: string
    payment_method: string
    project_name: string
    state?: string | undefined
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    tenant_id?: string | undefined
    trial_expiration_time?: string | undefined
    vat_id: string
    zip_code?: string | undefined
  }
}
type ProjectGenerateSbomDownloadUrlResponse = {
  download_url: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectGetEventLogsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  events: {
    actor: string
    event_desc: string
    event_type: string
    id: string
    service_name: string
    time: string
  }[]
  message?: string | undefined
}
type ProjectInviteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectInviteAcceptResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  invite_details: { user_email: string }
  message?: string | undefined
}
type ProjectInviteDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectPrivatelinkAvailabilityListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  privatelink_availability: { cloud_name: string; price_usd: string }[]
}
type ProjectServicePlanListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_plans: {
    backup_config: {
      frequent_interval_minutes?: number | undefined
      frequent_oldest_age_minutes?: number | undefined
      infrequent_interval_minutes?: number | undefined
      infrequent_oldest_age_minutes?: number | undefined
      interval: number
      max_count: number
      recovery_mode: 'basic' | 'pitr'
    }
    is_cluster_plan?: boolean | undefined
    managed_cluster_plan?: boolean | undefined
    max_memory_percent?: number | undefined
    node_count?: number | undefined
    primary_count?: number | undefined
    regions?: { [x: string]: unknown } | undefined
    service_plan: string
    service_type: string
    shard_count?: number | undefined
  }[]
}
type ProjectServicePlanPriceGetResponse = {
  base_price_usd: string
  cloud_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  extra_disk_price_per_gb_usd?: string | undefined
  message?: string | undefined
  object_storage_gb_price_usd?: string | undefined
  service_plan: string
  service_type: string
}
type ProjectServicePlanSpecsGetResponse = {
  backup_config: {
    frequent_interval_minutes?: number | undefined
    frequent_oldest_age_minutes?: number | undefined
    infrequent_interval_minutes?: number | undefined
    infrequent_oldest_age_minutes?: number | undefined
    interval: number
    max_count: number
    recovery_mode: 'basic' | 'pitr'
  }
  disk_space_cap_mb?: number | undefined
  disk_space_mb: number
  disk_space_step_mb?: number | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  max_memory_percent?: number | undefined
  message?: string | undefined
  node_count: number
  primary_count?: number | undefined
  service_plan: string
  service_type: string
  shard_count?: number | undefined
}
type ProjectServiceTypesGetResponse = {
  default_version?: string | undefined
  description: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  latest_available_version?: string | undefined
  message?: string | undefined
  user_config_schema: { [x: string]: unknown }
}
type ProjectServiceTypesListResponse = {
  application?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  clickhouse?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  dragonfly?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  elasticsearch?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  flink?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  grafana?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  kafka?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  kafka_connect?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  kafka_mirrormaker?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  message?: string | undefined
  mysql?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  opensearch?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  pg?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  redis?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  thanos?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
  valkey?:
    | {
        default_version?: string | undefined
        description: string
        latest_available_version?: string | undefined
        user_config_schema: { [x: string]: unknown }
      }
    | undefined
}
type ProjectTagsListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  tags?: { [x: string]: unknown } | undefined
}
type ProjectTagsReplaceRequestBody = { tags: { [x: string]: unknown } }
type ProjectTagsReplaceResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectTagsUpdateRequestBody = { tags: { [x: string]: unknown } }
type ProjectTagsUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectUserListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  group_users: {
    member_type:
      | 'admin'
      | 'application:access:connect'
      | 'developer'
      | 'operator'
      | 'organization:app_users:write'
      | 'organization:billing:read'
      | 'organization:billing:write'
      | 'organization:domains:write'
      | 'organization:event_logs:read'
      | 'organization:groups:read'
      | 'organization:groups:write'
      | 'organization:networking:read'
      | 'organization:networking:write'
      | 'organization:projects:write'
      | 'organization:sustainability:read'
      | 'organization:users:read'
      | 'organization:users:write'
      | 'project:ai_gateway_keys:read'
      | 'project:ai_gateway_keys:write'
      | 'project:audit_logs:read'
      | 'project:event_logs:read'
      | 'project:integrations:read'
      | 'project:integrations:write'
      | 'project:networking:read'
      | 'project:networking:write'
      | 'project:permissions:read'
      | 'project:services:read'
      | 'project:services:write'
      | 'read_only'
      | 'role:organization:admin'
      | 'role:project:admin'
      | 'role:project:manager'
      | 'role:project:read'
      | 'role:services:maintenance'
      | 'role:services:recover'
      | 'service:configuration:write'
      | 'service:data:write'
      | 'service:logs:read'
      | 'service:metrics:read'
      | 'service:secrets:read'
      | 'service:users:write'
    real_name: string
    user_email: string
    user_group_id: string
  }[]
  invitations: {
    invite_time: string
    invited_user_email: string
    inviting_user_email: string
    member_type:
      | 'admin'
      | 'application:access:connect'
      | 'developer'
      | 'operator'
      | 'organization:app_users:write'
      | 'organization:billing:read'
      | 'organization:billing:write'
      | 'organization:domains:write'
      | 'organization:event_logs:read'
      | 'organization:groups:read'
      | 'organization:groups:write'
      | 'organization:networking:read'
      | 'organization:networking:write'
      | 'organization:projects:write'
      | 'organization:sustainability:read'
      | 'organization:users:read'
      | 'organization:users:write'
      | 'project:ai_gateway_keys:read'
      | 'project:ai_gateway_keys:write'
      | 'project:audit_logs:read'
      | 'project:event_logs:read'
      | 'project:integrations:read'
      | 'project:integrations:write'
      | 'project:networking:read'
      | 'project:networking:write'
      | 'project:permissions:read'
      | 'project:services:read'
      | 'project:services:write'
      | 'read_only'
      | 'role:organization:admin'
      | 'role:project:admin'
      | 'role:project:manager'
      | 'role:project:read'
      | 'role:services:maintenance'
      | 'role:services:recover'
      | 'service:configuration:write'
      | 'service:data:write'
      | 'service:logs:read'
      | 'service:metrics:read'
      | 'service:secrets:read'
      | 'service:users:write'
  }[]
  message?: string | undefined
  users: {
    auth: string[]
    billing_contact: boolean
    create_time: string
    member_type:
      | 'admin'
      | 'application:access:connect'
      | 'developer'
      | 'operator'
      | 'organization:app_users:write'
      | 'organization:billing:read'
      | 'organization:billing:write'
      | 'organization:domains:write'
      | 'organization:event_logs:read'
      | 'organization:groups:read'
      | 'organization:groups:write'
      | 'organization:networking:read'
      | 'organization:networking:write'
      | 'organization:projects:write'
      | 'organization:sustainability:read'
      | 'organization:users:read'
      | 'organization:users:write'
      | 'project:ai_gateway_keys:read'
      | 'project:ai_gateway_keys:write'
      | 'project:audit_logs:read'
      | 'project:event_logs:read'
      | 'project:integrations:read'
      | 'project:integrations:write'
      | 'project:networking:read'
      | 'project:networking:write'
      | 'project:permissions:read'
      | 'project:services:read'
      | 'project:services:write'
      | 'read_only'
      | 'role:organization:admin'
      | 'role:project:admin'
      | 'role:project:manager'
      | 'role:project:read'
      | 'role:services:maintenance'
      | 'role:services:recover'
      | 'service:configuration:write'
      | 'service:data:write'
      | 'service:logs:read'
      | 'service:metrics:read'
      | 'service:secrets:read'
      | 'service:users:write'
    real_name?: string | undefined
    team_id: string
    team_name: string
    user_email: string
    user_id: string
  }[]
}
type ProjectUserRemoveResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectUserUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type VpcCreateRequestBody = {
  cloud_name: string
  network_cidr: string
  peering_connections: {
    peer_azure_app_id?: string | undefined
    peer_azure_tenant_id?: string | undefined
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group?: string | undefined
    peer_vpc: string
    user_peer_network_cidrs?: string[] | undefined
  }[]
}
type VpcCreateResponse = {
  cloud_name: string
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  network_cidr: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  project_vpc_id: string
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type VpcListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  vpcs: {
    cloud_name: string
    create_time: string
    network_cidr: string
    project_vpc_id: string
    state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
    update_time: string
  }[]
}
type VpcDeleteResponse = {
  cloud_name: string
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  network_cidr: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  project_vpc_id: string
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type VpcGetResponse = {
  cloud_name: string
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  network_cidr: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  project_vpc_id: string
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type VpcPeeringConnectionCreateRequestBody = {
  peer_azure_app_id?: string | undefined
  peer_azure_tenant_id?: string | undefined
  peer_cloud_account: string
  peer_region?: string | undefined
  peer_resource_group?: string | undefined
  peer_vpc: string
  user_peer_network_cidrs?: string[] | undefined
}
type VpcPeeringConnectionCreateResponse = {
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  peer_azure_app_id: string
  peer_azure_tenant_id: string
  peer_cloud_account: string
  peer_region?: string | undefined
  peer_resource_group: string
  peer_vpc: string
  peering_connection_id?: string | undefined
  state:
    | 'ACTIVE'
    | 'APPROVED'
    | 'APPROVED_PEER_REQUESTED'
    | 'DELETED'
    | 'DELETED_BY_PEER'
    | 'DELETING'
    | 'ERROR'
    | 'INVALID_SPECIFICATION'
    | 'PENDING_PEER'
    | 'REJECTED_BY_PEER'
  state_info: {
    message: string
    type: string
    warnings?:
      | {
          conflicting_aws_account_id?: string | undefined
          conflicting_aws_vpc_id?: string | undefined
          conflicting_aws_vpc_peering_connection_id?: string | undefined
          message: string
          type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
        }[]
      | undefined
  }
  update_time: string
  user_peer_network_cidrs: string[]
  vpc_peering_connection_type:
    | 'aws-tgw-vpc-attachment'
    | 'aws-vpc-peering-connection'
    | 'azure-vnet-peering'
    | 'do-vpc-peering'
    | 'google-vpc-peering'
    | 'upcloud-vpc-peering'
}
type VpcPeeringConnectionDeleteResponse = {
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  peer_azure_app_id: string
  peer_azure_tenant_id: string
  peer_cloud_account: string
  peer_region?: string | undefined
  peer_resource_group: string
  peer_vpc: string
  peering_connection_id?: string | undefined
  state:
    | 'ACTIVE'
    | 'APPROVED'
    | 'APPROVED_PEER_REQUESTED'
    | 'DELETED'
    | 'DELETED_BY_PEER'
    | 'DELETING'
    | 'ERROR'
    | 'INVALID_SPECIFICATION'
    | 'PENDING_PEER'
    | 'REJECTED_BY_PEER'
  state_info: {
    message: string
    type: string
    warnings?:
      | {
          conflicting_aws_account_id?: string | undefined
          conflicting_aws_vpc_id?: string | undefined
          conflicting_aws_vpc_peering_connection_id?: string | undefined
          message: string
          type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
        }[]
      | undefined
  }
  update_time: string
  user_peer_network_cidrs: string[]
  vpc_peering_connection_type:
    | 'aws-tgw-vpc-attachment'
    | 'aws-vpc-peering-connection'
    | 'azure-vnet-peering'
    | 'do-vpc-peering'
    | 'google-vpc-peering'
    | 'upcloud-vpc-peering'
}
type VpcPeeringConnectionUpdateRequestBody = {
  add?:
    | {
        cidr: string
        peer_cloud_account: string
        peer_resource_group?: string | undefined
        peer_vpc: string
      }[]
    | undefined
  delete?: string[] | undefined
}
type VpcPeeringConnectionUpdateResponse = {
  cloud_name: string
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  network_cidr: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  project_vpc_id: string
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type VpcPeeringConnectionWithRegionDeleteResponse = {
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  peer_azure_app_id: string
  peer_azure_tenant_id: string
  peer_cloud_account: string
  peer_region?: string | undefined
  peer_resource_group: string
  peer_vpc: string
  peering_connection_id?: string | undefined
  state:
    | 'ACTIVE'
    | 'APPROVED'
    | 'APPROVED_PEER_REQUESTED'
    | 'DELETED'
    | 'DELETED_BY_PEER'
    | 'DELETING'
    | 'ERROR'
    | 'INVALID_SPECIFICATION'
    | 'PENDING_PEER'
    | 'REJECTED_BY_PEER'
  state_info: {
    message: string
    type: string
    warnings?:
      | {
          conflicting_aws_account_id?: string | undefined
          conflicting_aws_vpc_id?: string | undefined
          conflicting_aws_vpc_peering_connection_id?: string | undefined
          message: string
          type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
        }[]
      | undefined
  }
  update_time: string
  user_peer_network_cidrs: string[]
  vpc_peering_connection_type:
    | 'aws-tgw-vpc-attachment'
    | 'aws-vpc-peering-connection'
    | 'azure-vnet-peering'
    | 'do-vpc-peering'
    | 'google-vpc-peering'
    | 'upcloud-vpc-peering'
}
type VpcPeeringConnectionWithResourceGroupDeleteResponse = {
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  peer_azure_app_id: string
  peer_azure_tenant_id: string
  peer_cloud_account: string
  peer_region?: string | undefined
  peer_resource_group: string
  peer_vpc: string
  peering_connection_id?: string | undefined
  state:
    | 'ACTIVE'
    | 'APPROVED'
    | 'APPROVED_PEER_REQUESTED'
    | 'DELETED'
    | 'DELETED_BY_PEER'
    | 'DELETING'
    | 'ERROR'
    | 'INVALID_SPECIFICATION'
    | 'PENDING_PEER'
    | 'REJECTED_BY_PEER'
  state_info: {
    message: string
    type: string
    warnings?:
      | {
          conflicting_aws_account_id?: string | undefined
          conflicting_aws_vpc_id?: string | undefined
          conflicting_aws_vpc_peering_connection_id?: string | undefined
          message: string
          type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
        }[]
      | undefined
  }
  update_time: string
  user_peer_network_cidrs: string[]
  vpc_peering_connection_type:
    | 'aws-tgw-vpc-attachment'
    | 'aws-vpc-peering-connection'
    | 'azure-vnet-peering'
    | 'do-vpc-peering'
    | 'google-vpc-peering'
    | 'upcloud-vpc-peering'
}
type VpcPeeringConnectionsRefreshResponse = {
  cloud_name: string
  create_time: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  network_cidr: string
  peering_connections: {
    create_time: string
    peer_azure_app_id: string
    peer_azure_tenant_id: string
    peer_cloud_account: string
    peer_region?: string | undefined
    peer_resource_group: string
    peer_vpc: string
    peering_connection_id?: string | undefined
    state:
      | 'ACTIVE'
      | 'APPROVED'
      | 'APPROVED_PEER_REQUESTED'
      | 'DELETED'
      | 'DELETED_BY_PEER'
      | 'DELETING'
      | 'ERROR'
      | 'INVALID_SPECIFICATION'
      | 'PENDING_PEER'
      | 'REJECTED_BY_PEER'
    state_info: {
      message: string
      type: string
      warnings?:
        | {
            conflicting_aws_account_id?: string | undefined
            conflicting_aws_vpc_id?: string | undefined
            conflicting_aws_vpc_peering_connection_id?: string | undefined
            message: string
            type: 'overlapping-peer-vpc-ip-ranges' | 'upcloud-peering-in-error'
          }[]
        | undefined
    }
    update_time: string
    user_peer_network_cidrs: string[]
    vpc_peering_connection_type:
      | 'aws-tgw-vpc-attachment'
      | 'aws-vpc-peering-connection'
      | 'azure-vnet-peering'
      | 'do-vpc-peering'
      | 'google-vpc-peering'
      | 'upcloud-vpc-peering'
  }[]
  pending_build_only_peering_connections?: string | undefined
  project_vpc_id: string
  state: 'ACTIVE' | 'APPROVED' | 'DELETED' | 'DELETING'
  update_time: string
}
type ProjectCreditsClaimResponse = {
  credit: {
    code: string
    expire_time: string
    remaining_value: string
    start_time: string
    type:
      | 'discount'
      | 'employee'
      | 'evaluation'
      | 'internal'
      | 'other'
      | 'outage'
      | 'partner'
      | 'promotion'
      | 'purchase'
      | 'referral'
      | 'sponsorship'
      | 'trial'
      | 'trial_over'
    value: string
  }
}
type ProjectCreditsListResponse = {
  credits: {
    code: string
    expire_time: string
    remaining_value: string
    start_time: string
    type:
      | 'discount'
      | 'employee'
      | 'evaluation'
      | 'internal'
      | 'other'
      | 'outage'
      | 'partner'
      | 'promotion'
      | 'purchase'
      | 'referral'
      | 'sponsorship'
      | 'trial'
      | 'trial_over'
    value: string
  }[]
}
type ProjectInvoiceListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  invoices: {
    billing_group_id: string
    billing_group_name: string
    billing_group_state: 'active' | 'deleted'
    currency:
      | 'AUD'
      | 'CAD'
      | 'CHF'
      | 'DKK'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'NOK'
      | 'NZD'
      | 'SEK'
      | 'SGD'
      | 'USD'
    download_cookie: string
    due_date?: string | undefined
    generated_at?: string | undefined
    invoice_number: string
    issue_date?: string | undefined
    period_begin: string
    period_end: string
    state:
      | 'accrual'
      | 'consolidated'
      | 'due'
      | 'estimate'
      | 'failed_credit_card_charge'
      | 'failed_no_credit_card'
      | 'mailed'
      | 'no_payment_expected'
      | 'paid'
      | 'partner_metering'
      | 'uncollectible'
      | 'waived'
    total_inc_vat: string
    total_vat_zero: string
  }[]
  message?: string | undefined
}
type ProjectKmsGetCAResponse = {
  certificate: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type CMKAccessCheckTriggerResponse = {
  cmk: {
    created_at: string
    default_cmk: boolean
    id: string
    resource: string
    updated_at: string
  }
}
type CMKAccessorsListResponse = {
  accessors: {
    aws?: { principal: string } | undefined
    azure: { app_id: string }
    gcp: { access_group: string }
    oci: { access_group: string; access_tenant: string }
  }
}
type CMKCreateRequestBody = {
  default_cmk?: boolean | undefined
  provider: 'aws' | 'azure' | 'gcp' | 'oci'
  resource: string
}
type CMKCreateResponse = {
  cmk: {
    created_at: string
    default_cmk: boolean
    id: string
    provider: 'aws' | 'azure' | 'gcp' | 'oci'
    resource: string
    status: 'current' | 'old' | 'deleted'
    updated_at: string
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type CMKListResponse = {
  cmks: {
    created_at: string
    default_cmk: boolean
    id: string
    resource: string
    updated_at: string
  }[]
}
type CMKDeleteResponse = {
  cmk: {
    created_at: string
    default_cmk: boolean
    id: string
    resource: string
    updated_at: string
  }
}
type CMKGetResponse = {
  cmk: {
    created_at: string
    default_cmk: boolean
    id: string
    resource: string
    updated_at: string
  }
}
type CMKUpdateRequestBody = { default_cmk?: boolean | undefined }
type CMKUpdateResponse = {
  cmk: {
    created_at: string
    default_cmk: boolean
    id: string
    resource: string
    updated_at: string
  }
}
type CMKServiceAssociationsListResponse = {
  service_associations: { service_name: string; status: string }[]
}
type ServiceClickHouseCurrentQueriesResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  queries: {
    client_name?: string | undefined
    database?: string | undefined
    elapsed?: number | undefined
    query?: string | undefined
    user?: string | undefined
  }[]
}
type ServiceClickHouseQueryRequestBody = { database: string; query: string }
type ServiceClickHouseQueryResponse = {
  data: unknown[][]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  meta: { name: string; type: string }[]
  summary: {
    elapsed_ns?: number | undefined
    read_bytes?: number | undefined
    read_rows?: number | undefined
    result_bytes?: number | undefined
    result_rows?: number | undefined
    written_bytes?: number | undefined
    written_rows?: number | undefined
  }
}
type ServiceClickHouseDatabaseCreateRequestBody = { database: string }
type ServiceClickHouseDatabaseCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceClickHouseDatabaseListResponse = {
  databases: {
    engine: string
    name: string
    required: boolean
    state?: 'ok' | 'pending_creation' | 'pending_removal' | undefined
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceClickHouseDatabaseDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceClickHousePasswordResetRequestBody = { password: string }
type ServiceClickHousePasswordResetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  password: string
}
type ServiceClickHouseQueryStatsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  queries: {
    calls?: number | undefined
    database?: string | undefined
    max_time?: number | undefined
    mean_time?: number | undefined
    min_time?: number | undefined
    p95_time?: number | undefined
    query?: string | undefined
    rows?: number | undefined
    stddev_time?: number | undefined
    total_time?: number | undefined
  }[]
}
type ServiceClickHouseRoleDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceClickHouseRoleListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  roles: {
    name: string
    privileges: {
      access_type: string
      column: string
      database: string
      grant_option: boolean
      is_partial_revoke: boolean
      table: string
    }[]
    roles: { is_default: boolean; name: string; uuid: string; with_admin_option: boolean }[]
    uuid: string
  }[]
}
type ServiceClickHouseTieredStorageSummaryResponse = {
  current_cost: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  forecasted_cost: string
  forecasted_rate?: string | undefined
  message?: string | undefined
  storage_usage_history: {
    hourly: { estimated_cost?: string | undefined; hour_start: string; peak_stored_bytes: number }[]
  }
  total_storage_usage: number
}
type ServiceClickHouseUserCreateRequestBody = {
  name: string
  password?: string | undefined
  roles?: { uuid: string }[] | undefined
}
type ServiceClickHouseUserCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  user: {
    name: string
    password?: string | undefined
    privileges: {
      access_type: string
      column: string
      database: string
      grant_option: boolean
      is_partial_revoke: boolean
      table: string
    }[]
    required: boolean
    roles: { is_default: boolean; name: string; uuid: string; with_admin_option: boolean }[]
    uuid: string
  }
}
type ServiceClickHouseUserListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  users: {
    name: string
    password?: string | undefined
    privileges: {
      access_type: string
      column: string
      database: string
      grant_option: boolean
      is_partial_revoke: boolean
      table: string
    }[]
    required: boolean
    roles: { is_default: boolean; name: string; uuid: string; with_admin_option: boolean }[]
    uuid: string
  }[]
}
type ServiceClickHouseUserDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceFlinkCancelApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  restart_enabled: boolean
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkCancelJarApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  entry_class?: string | undefined
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  program_args?: string[] | undefined
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkCreateApplicationRequestBody = {
  application_version?:
    | {
        sinks: { create_table: string; integration_id?: string | undefined }[]
        sources: { create_table: string; integration_id?: string | undefined }[]
        statement: string
      }
    | undefined
  name: string
}
type ServiceFlinkCreateApplicationResponse = {
  application_versions: {
    created_at: string
    created_by: string
    id: string
    sinks: {
      columns: {
        data_type: string
        extras?: string | undefined
        key?: string | undefined
        name: string
        nullable: boolean
        watermark?: string | undefined
      }[]
      create_table: string
      integration_id?: string | undefined
      options: { [x: string]: unknown }
      table_id: string
      table_name: string
    }[]
    sources: {
      columns: {
        data_type: string
        extras?: string | undefined
        key?: string | undefined
        name: string
        nullable: boolean
        watermark?: string | undefined
      }[]
      create_table: string
      integration_id?: string | undefined
      options: { [x: string]: unknown }
      table_id: string
      table_name: string
    }[]
    statement: string
    version: number
  }[]
  created_at: string
  created_by: string
  current_deployment?:
    | {
        created_at: string
        created_by: string
        error_msg?: string | undefined
        id: string
        job_id?: string | undefined
        last_savepoint?: string | undefined
        parallelism: number
        restart_enabled: boolean
        starting_savepoint?: string | undefined
        status:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'SAVING'
          | 'CANCELLING_REQUESTED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'SAVING_AND_STOP_REQUESTED'
          | 'SAVING_AND_STOP'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'DELETE_REQUESTED'
          | 'DELETING'
          | 'RECONCILING'
        version_id: string
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  name: string
  updated_at: string
  updated_by: string
}
type ServiceFlinkListApplicationsResponse = {
  applications: {
    created_at?: string | undefined
    created_by?: string | undefined
    id: string
    name: string
    updated_at?: string | undefined
    updated_by?: string | undefined
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceFlinkCreateApplicationDeploymentRequestBody = {
  parallelism?: number | undefined
  restart_enabled?: boolean | undefined
  starting_savepoint?: string | undefined
  version_id: string
}
type ServiceFlinkCreateApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  restart_enabled: boolean
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkListApplicationDeploymentsResponse = {
  deployments: {
    created_at: string
    created_by: string
    error_msg?: string | undefined
    id: string
    job_id?: string | undefined
    last_savepoint?: string | undefined
    parallelism: number
    restart_enabled: boolean
    starting_savepoint?: string | undefined
    status:
      | 'INITIALIZING'
      | 'CREATED'
      | 'RUNNING'
      | 'FAILING'
      | 'FAILED'
      | 'SAVING'
      | 'CANCELLING_REQUESTED'
      | 'CANCELLING'
      | 'CANCELED'
      | 'SAVING_AND_STOP_REQUESTED'
      | 'SAVING_AND_STOP'
      | 'FINISHED'
      | 'RESTARTING'
      | 'SUSPENDED'
      | 'DELETE_REQUESTED'
      | 'DELETING'
      | 'RECONCILING'
    version_id: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceFlinkCreateApplicationVersionRequestBody = {
  sinks: { create_table: string; integration_id?: string | undefined }[]
  sources: { create_table: string; integration_id?: string | undefined }[]
  statement: string
}
type ServiceFlinkCreateApplicationVersionResponse = {
  created_at: string
  created_by: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  sinks: {
    columns: {
      data_type: string
      extras?: string | undefined
      key?: string | undefined
      name: string
      nullable: boolean
      watermark?: string | undefined
    }[]
    create_table: string
    integration_id?: string | undefined
    options: { [x: string]: unknown }
    table_id: string
    table_name: string
  }[]
  sources: {
    columns: {
      data_type: string
      extras?: string | undefined
      key?: string | undefined
      name: string
      nullable: boolean
      watermark?: string | undefined
    }[]
    create_table: string
    integration_id?: string | undefined
    options: { [x: string]: unknown }
    table_id: string
    table_name: string
  }[]
  statement: string
  version: number
}
type ServiceFlinkCreateJarApplicationRequestBody = { name: string }
type ServiceFlinkCreateJarApplicationResponse = {
  application_versions: {
    created_at: string
    created_by: string
    file_info?:
      | {
          file_sha256?: string | undefined
          file_size?: number | undefined
          file_status?: 'INITIAL' | 'READY' | 'FAILED' | undefined
          url?: string | undefined
          verify_error_code?: '1' | '2' | '3' | '4' | undefined
          verify_error_message?: string | undefined
        }
      | undefined
    id: string
    version: number
  }[]
  created_at: string
  created_by: string
  current_deployment?:
    | {
        created_at: string
        created_by: string
        entry_class?: string | undefined
        error_msg?: string | undefined
        id: string
        job_id?: string | undefined
        last_savepoint?: string | undefined
        parallelism: number
        program_args?: string[] | undefined
        starting_savepoint?: string | undefined
        status:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'SAVING'
          | 'CANCELLING_REQUESTED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'SAVING_AND_STOP_REQUESTED'
          | 'SAVING_AND_STOP'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'DELETE_REQUESTED'
          | 'DELETING'
          | 'RECONCILING'
        version_id: string
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  name: string
  updated_at: string
  updated_by: string
}
type ServiceFlinkListJarApplicationsResponse = {
  applications: {
    created_at?: string | undefined
    created_by?: string | undefined
    id: string
    name: string
    updated_at?: string | undefined
    updated_by?: string | undefined
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceFlinkCreateJarApplicationDeploymentRequestBody = {
  entry_class?: string | undefined
  parallelism?: number | undefined
  program_args?: string[] | undefined
  restart_enabled?: boolean | undefined
  starting_savepoint?: string | undefined
  version_id: string
}
type ServiceFlinkCreateJarApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  entry_class?: string | undefined
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  program_args?: string[] | undefined
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkListJarApplicationDeploymentsResponse = {
  deployments: {
    created_at: string
    created_by: string
    entry_class?: string | undefined
    error_msg?: string | undefined
    id: string
    job_id?: string | undefined
    last_savepoint?: string | undefined
    parallelism: number
    program_args?: string[] | undefined
    starting_savepoint?: string | undefined
    status:
      | 'INITIALIZING'
      | 'CREATED'
      | 'RUNNING'
      | 'FAILING'
      | 'FAILED'
      | 'SAVING'
      | 'CANCELLING_REQUESTED'
      | 'CANCELLING'
      | 'CANCELED'
      | 'SAVING_AND_STOP_REQUESTED'
      | 'SAVING_AND_STOP'
      | 'FINISHED'
      | 'RESTARTING'
      | 'SUSPENDED'
      | 'DELETE_REQUESTED'
      | 'DELETING'
      | 'RECONCILING'
    version_id: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceFlinkCreateJarApplicationVersionResponse = {
  created_at: string
  created_by: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  file_info?:
    | {
        file_sha256?: string | undefined
        file_size?: number | undefined
        file_status?: 'INITIAL' | 'READY' | 'FAILED' | undefined
        url?: string | undefined
        verify_error_code?: '1' | '2' | '3' | '4' | undefined
        verify_error_message?: string | undefined
      }
    | undefined
  id: string
  message?: string | undefined
  version: number
}
type ServiceFlinkDeleteApplicationResponse = {
  application_versions: {
    created_at: string
    created_by: string
    id: string
    sinks: {
      columns: {
        data_type: string
        extras?: string | undefined
        key?: string | undefined
        name: string
        nullable: boolean
        watermark?: string | undefined
      }[]
      create_table: string
      integration_id?: string | undefined
      options: { [x: string]: unknown }
      table_id: string
      table_name: string
    }[]
    sources: {
      columns: {
        data_type: string
        extras?: string | undefined
        key?: string | undefined
        name: string
        nullable: boolean
        watermark?: string | undefined
      }[]
      create_table: string
      integration_id?: string | undefined
      options: { [x: string]: unknown }
      table_id: string
      table_name: string
    }[]
    statement: string
    version: number
  }[]
  created_at: string
  created_by: string
  current_deployment?:
    | {
        created_at: string
        created_by: string
        error_msg?: string | undefined
        id: string
        job_id?: string | undefined
        last_savepoint?: string | undefined
        parallelism: number
        restart_enabled: boolean
        starting_savepoint?: string | undefined
        status:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'SAVING'
          | 'CANCELLING_REQUESTED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'SAVING_AND_STOP_REQUESTED'
          | 'SAVING_AND_STOP'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'DELETE_REQUESTED'
          | 'DELETING'
          | 'RECONCILING'
        version_id: string
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  name: string
  updated_at: string
  updated_by: string
}
type ServiceFlinkGetApplicationResponse = {
  application_versions: {
    created_at: string
    created_by: string
    id: string
    sinks: {
      columns: {
        data_type: string
        extras?: string | undefined
        key?: string | undefined
        name: string
        nullable: boolean
        watermark?: string | undefined
      }[]
      create_table: string
      integration_id?: string | undefined
      options: { [x: string]: unknown }
      table_id: string
      table_name: string
    }[]
    sources: {
      columns: {
        data_type: string
        extras?: string | undefined
        key?: string | undefined
        name: string
        nullable: boolean
        watermark?: string | undefined
      }[]
      create_table: string
      integration_id?: string | undefined
      options: { [x: string]: unknown }
      table_id: string
      table_name: string
    }[]
    statement: string
    version: number
  }[]
  created_at: string
  created_by: string
  current_deployment?:
    | {
        created_at: string
        created_by: string
        error_msg?: string | undefined
        id: string
        job_id?: string | undefined
        last_savepoint?: string | undefined
        parallelism: number
        restart_enabled: boolean
        starting_savepoint?: string | undefined
        status:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'SAVING'
          | 'CANCELLING_REQUESTED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'SAVING_AND_STOP_REQUESTED'
          | 'SAVING_AND_STOP'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'DELETE_REQUESTED'
          | 'DELETING'
          | 'RECONCILING'
        version_id: string
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  name: string
  updated_at: string
  updated_by: string
}
type ServiceFlinkUpdateApplicationRequestBody = { name: string }
type ServiceFlinkUpdateApplicationResponse = {
  application_versions: {
    created_at: string
    created_by: string
    id: string
    sinks: {
      columns: {
        data_type: string
        extras?: string | undefined
        key?: string | undefined
        name: string
        nullable: boolean
        watermark?: string | undefined
      }[]
      create_table: string
      integration_id?: string | undefined
      options: { [x: string]: unknown }
      table_id: string
      table_name: string
    }[]
    sources: {
      columns: {
        data_type: string
        extras?: string | undefined
        key?: string | undefined
        name: string
        nullable: boolean
        watermark?: string | undefined
      }[]
      create_table: string
      integration_id?: string | undefined
      options: { [x: string]: unknown }
      table_id: string
      table_name: string
    }[]
    statement: string
    version: number
  }[]
  created_at: string
  created_by: string
  current_deployment?:
    | {
        created_at: string
        created_by: string
        error_msg?: string | undefined
        id: string
        job_id?: string | undefined
        last_savepoint?: string | undefined
        parallelism: number
        restart_enabled: boolean
        starting_savepoint?: string | undefined
        status:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'SAVING'
          | 'CANCELLING_REQUESTED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'SAVING_AND_STOP_REQUESTED'
          | 'SAVING_AND_STOP'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'DELETE_REQUESTED'
          | 'DELETING'
          | 'RECONCILING'
        version_id: string
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  name: string
  updated_at: string
  updated_by: string
}
type ServiceFlinkDeleteApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  restart_enabled: boolean
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkGetApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  restart_enabled: boolean
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkDeleteApplicationVersionResponse = {
  created_at: string
  created_by: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  sinks: {
    columns: {
      data_type: string
      extras?: string | undefined
      key?: string | undefined
      name: string
      nullable: boolean
      watermark?: string | undefined
    }[]
    create_table: string
    integration_id?: string | undefined
    options: { [x: string]: unknown }
    table_id: string
    table_name: string
  }[]
  sources: {
    columns: {
      data_type: string
      extras?: string | undefined
      key?: string | undefined
      name: string
      nullable: boolean
      watermark?: string | undefined
    }[]
    create_table: string
    integration_id?: string | undefined
    options: { [x: string]: unknown }
    table_id: string
    table_name: string
  }[]
  statement: string
  version: number
}
type ServiceFlinkGetApplicationVersionResponse = {
  created_at: string
  created_by: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  sinks: {
    columns: {
      data_type: string
      extras?: string | undefined
      key?: string | undefined
      name: string
      nullable: boolean
      watermark?: string | undefined
    }[]
    create_table: string
    integration_id?: string | undefined
    options: { [x: string]: unknown }
    table_id: string
    table_name: string
  }[]
  sources: {
    columns: {
      data_type: string
      extras?: string | undefined
      key?: string | undefined
      name: string
      nullable: boolean
      watermark?: string | undefined
    }[]
    create_table: string
    integration_id?: string | undefined
    options: { [x: string]: unknown }
    table_id: string
    table_name: string
  }[]
  statement: string
  version: number
}
type ServiceFlinkDeleteJarApplicationResponse = {
  application_versions: {
    created_at: string
    created_by: string
    file_info?:
      | {
          file_sha256?: string | undefined
          file_size?: number | undefined
          file_status?: 'INITIAL' | 'READY' | 'FAILED' | undefined
          url?: string | undefined
          verify_error_code?: '1' | '2' | '3' | '4' | undefined
          verify_error_message?: string | undefined
        }
      | undefined
    id: string
    version: number
  }[]
  created_at: string
  created_by: string
  current_deployment?:
    | {
        created_at: string
        created_by: string
        entry_class?: string | undefined
        error_msg?: string | undefined
        id: string
        job_id?: string | undefined
        last_savepoint?: string | undefined
        parallelism: number
        program_args?: string[] | undefined
        starting_savepoint?: string | undefined
        status:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'SAVING'
          | 'CANCELLING_REQUESTED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'SAVING_AND_STOP_REQUESTED'
          | 'SAVING_AND_STOP'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'DELETE_REQUESTED'
          | 'DELETING'
          | 'RECONCILING'
        version_id: string
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  name: string
  updated_at: string
  updated_by: string
}
type ServiceFlinkGetJarApplicationResponse = {
  application_versions: {
    created_at: string
    created_by: string
    file_info?:
      | {
          file_sha256?: string | undefined
          file_size?: number | undefined
          file_status?: 'INITIAL' | 'READY' | 'FAILED' | undefined
          url?: string | undefined
          verify_error_code?: '1' | '2' | '3' | '4' | undefined
          verify_error_message?: string | undefined
        }
      | undefined
    id: string
    version: number
  }[]
  created_at: string
  created_by: string
  current_deployment?:
    | {
        created_at: string
        created_by: string
        entry_class?: string | undefined
        error_msg?: string | undefined
        id: string
        job_id?: string | undefined
        last_savepoint?: string | undefined
        parallelism: number
        program_args?: string[] | undefined
        starting_savepoint?: string | undefined
        status:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'SAVING'
          | 'CANCELLING_REQUESTED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'SAVING_AND_STOP_REQUESTED'
          | 'SAVING_AND_STOP'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'DELETE_REQUESTED'
          | 'DELETING'
          | 'RECONCILING'
        version_id: string
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  name: string
  updated_at: string
  updated_by: string
}
type ServiceFlinkUpdateJarApplicationRequestBody = { name: string }
type ServiceFlinkUpdateJarApplicationResponse = {
  application_versions: {
    created_at: string
    created_by: string
    file_info?:
      | {
          file_sha256?: string | undefined
          file_size?: number | undefined
          file_status?: 'INITIAL' | 'READY' | 'FAILED' | undefined
          url?: string | undefined
          verify_error_code?: '1' | '2' | '3' | '4' | undefined
          verify_error_message?: string | undefined
        }
      | undefined
    id: string
    version: number
  }[]
  created_at: string
  created_by: string
  current_deployment?:
    | {
        created_at: string
        created_by: string
        entry_class?: string | undefined
        error_msg?: string | undefined
        id: string
        job_id?: string | undefined
        last_savepoint?: string | undefined
        parallelism: number
        program_args?: string[] | undefined
        starting_savepoint?: string | undefined
        status:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'SAVING'
          | 'CANCELLING_REQUESTED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'SAVING_AND_STOP_REQUESTED'
          | 'SAVING_AND_STOP'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'DELETE_REQUESTED'
          | 'DELETING'
          | 'RECONCILING'
        version_id: string
      }
    | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  message?: string | undefined
  name: string
  updated_at: string
  updated_by: string
}
type ServiceFlinkDeleteJarApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  entry_class?: string | undefined
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  program_args?: string[] | undefined
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkGetJarApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  entry_class?: string | undefined
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  program_args?: string[] | undefined
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkDeleteJarApplicationVersionResponse = {
  created_at: string
  created_by: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  file_info?:
    | {
        file_sha256?: string | undefined
        file_size?: number | undefined
        file_status?: 'INITIAL' | 'READY' | 'FAILED' | undefined
        url?: string | undefined
        verify_error_code?: '1' | '2' | '3' | '4' | undefined
        verify_error_message?: string | undefined
      }
    | undefined
  id: string
  message?: string | undefined
  version: number
}
type ServiceFlinkGetJarApplicationVersionResponse = {
  created_at: string
  created_by: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  file_info?:
    | {
        file_sha256?: string | undefined
        file_size?: number | undefined
        file_status?: 'INITIAL' | 'READY' | 'FAILED' | undefined
        url?: string | undefined
        verify_error_code?: '1' | '2' | '3' | '4' | undefined
        verify_error_message?: string | undefined
      }
    | undefined
  id: string
  message?: string | undefined
  version: number
}
type ServiceFlinkJobDetailsResponse = {
  duration?: number | undefined
  'end\\-time'?: number | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  isStoppable?: boolean | undefined
  jid?: string | undefined
  maxParallelism?: number | undefined
  message?: string | undefined
  name?: string | undefined
  now?: number | undefined
  plan?: { [x: string]: unknown } | undefined
  'start\\-time'?: number | undefined
  state?:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'RECONCILING'
    | undefined
  'status\\-counts'?:
    | {
        CANCELED?: number | undefined
        CANCELING?: number | undefined
        CREATED?: number | undefined
        DEPLOYING?: number | undefined
        FAILED?: number | undefined
        FINISHED?: number | undefined
        INITIALIZING?: number | undefined
        RECONCILING?: number | undefined
        RUNNING?: number | undefined
        SCHEDULED?: number | undefined
      }
    | undefined
  timestamps?: { [x: string]: unknown } | undefined
  vertices?: { [x: string]: unknown }[] | undefined
}
type ServiceFlinkJobsListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  jobs?:
    | {
        id?: string | undefined
        status?:
          | 'INITIALIZING'
          | 'CREATED'
          | 'RUNNING'
          | 'FAILING'
          | 'FAILED'
          | 'CANCELLING'
          | 'CANCELED'
          | 'FINISHED'
          | 'RESTARTING'
          | 'SUSPENDED'
          | 'RECONCILING'
          | undefined
      }[]
    | undefined
  message?: string | undefined
}
type ServiceFlinkOverviewResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  'flink\\-commit'?: string | undefined
  'flink\\-version'?: string | undefined
  'jobs\\-cancelled'?: number | undefined
  'jobs\\-failed'?: number | undefined
  'jobs\\-finished'?: number | undefined
  'jobs\\-running'?: number | undefined
  message?: string | undefined
  'slots\\-available'?: number | undefined
  'slots\\-total'?: number | undefined
  taskmanagers?: number | undefined
}
type ServiceFlinkStopApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  restart_enabled: boolean
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkStopJarApplicationDeploymentResponse = {
  created_at: string
  created_by: string
  entry_class?: string | undefined
  error_msg?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: string
  job_id?: string | undefined
  last_savepoint?: string | undefined
  message?: string | undefined
  parallelism: number
  program_args?: string[] | undefined
  starting_savepoint?: string | undefined
  status:
    | 'INITIALIZING'
    | 'CREATED'
    | 'RUNNING'
    | 'FAILING'
    | 'FAILED'
    | 'SAVING'
    | 'CANCELLING_REQUESTED'
    | 'CANCELLING'
    | 'CANCELED'
    | 'SAVING_AND_STOP_REQUESTED'
    | 'SAVING_AND_STOP'
    | 'FINISHED'
    | 'RESTARTING'
    | 'SUSPENDED'
    | 'DELETE_REQUESTED'
    | 'DELETING'
    | 'RECONCILING'
  version_id: string
}
type ServiceFlinkValidateApplicationVersionRequestBody = {
  sinks: { create_table: string; integration_id?: string | undefined }[]
  sources: { create_table: string; integration_id?: string | undefined }[]
  statement?: string | undefined
}
type ServiceFlinkValidateApplicationVersionResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  sinks: {
    columns?:
      | {
          data_type: string
          extras?: string | undefined
          key?: string | undefined
          name: string
          nullable: boolean
          watermark?: string | undefined
        }[]
      | undefined
    create_table: string
    integration_id?: string | undefined
    message?: string | undefined
    options?: { [x: string]: unknown } | undefined
    position?:
      | {
          character_number: number
          end_character_number: number
          end_line_number: number
          line_number: number
        }
      | undefined
    table_name?: string | undefined
  }[]
  sources: {
    columns?:
      | {
          data_type: string
          extras?: string | undefined
          key?: string | undefined
          name: string
          nullable: boolean
          watermark?: string | undefined
        }[]
      | undefined
    create_table: string
    integration_id?: string | undefined
    message?: string | undefined
    options?: { [x: string]: unknown } | undefined
    position?:
      | {
          character_number: number
          end_character_number: number
          end_line_number: number
          line_number: number
        }
      | undefined
    table_name?: string | undefined
  }[]
  statement?: string | undefined
  statement_error?:
    | {
        message: string
        position?:
          | {
              character_number: number
              end_character_number: number
              end_line_number: number
              line_number: number
            }
          | undefined
      }
    | undefined
}
type ServiceKafkaAclAddRequestBody = {
  permission: 'admin' | 'read' | 'readwrite' | 'write'
  topic: string
  username: string
}
type ServiceKafkaAclAddResponse = {
  acl: {
    id: string
    permission: 'admin' | 'read' | 'readwrite' | 'write'
    topic: string
    username: string
  }[]
  message: string
}
type ServiceKafkaAclListResponse = {
  acl: {
    id?: string | undefined
    permission: 'admin' | 'read' | 'readwrite' | 'write'
    topic: string
    username: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaAclDeleteResponse = {
  acl: {
    id?: string | undefined
    permission: 'admin' | 'read' | 'readwrite' | 'write'
    topic: string
    username: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectCreateConnectorRequestBody = { 'connector.class': string; name: string }
type ServiceKafkaConnectCreateConnectorResponse = {
  connector: {
    config: { 'connector.class': string; name: string }
    name: string
    plugin: {
      author: string
      available_versions?:
        | {
            deprecated?: boolean | undefined
            needs_maintenance?: boolean | undefined
            version?: string | undefined
          }[]
        | undefined
      class: string
      custom_plugin?: boolean | undefined
      docURL: string
      plugin_name?: string | undefined
      preview?: boolean | undefined
      preview_info?: string | undefined
      title: string
      type: 'sink' | 'source' | 'unknown'
      version: string
    }
    tasks: { connector: string; task: number }[]
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectListResponse = {
  connectors: {
    config: { 'connector.class': string; name: string }
    name: string
    plugin: {
      author: string
      available_versions?:
        | {
            deprecated?: boolean | undefined
            needs_maintenance?: boolean | undefined
            version?: string | undefined
          }[]
        | undefined
      class: string
      custom_plugin?: boolean | undefined
      docURL: string
      plugin_name?: string | undefined
      preview?: boolean | undefined
      preview_info?: string | undefined
      title: string
      type: 'sink' | 'source' | 'unknown'
      version: string
    }
    tasks: { connector: string; task: number }[]
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  failed_connectors?:
    | { config: { 'connector.class': string; name: string }; error: string; name: string }[]
    | undefined
  message?: string | undefined
}
type ServiceKafkaConnectDeleteConnectorResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectEditConnectorRequestBody = { 'connector.class': string; name: string }
type ServiceKafkaConnectEditConnectorResponse = {
  connector: {
    config: { 'connector.class': string; name: string }
    name: string
    plugin: {
      author: string
      available_versions?:
        | {
            deprecated?: boolean | undefined
            needs_maintenance?: boolean | undefined
            version?: string | undefined
          }[]
        | undefined
      class: string
      custom_plugin?: boolean | undefined
      docURL: string
      plugin_name?: string | undefined
      preview?: boolean | undefined
      preview_info?: string | undefined
      title: string
      type: 'sink' | 'source' | 'unknown'
      version: string
    }
    tasks: { connector: string; task: number }[]
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectGetAvailableConnectorsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  plugins: {
    author: string
    available_versions?:
      | {
          deprecated?: boolean | undefined
          needs_maintenance?: boolean | undefined
          version?: string | undefined
        }[]
      | undefined
    class: string
    custom_plugin?: boolean | undefined
    docURL: string
    plugin_name?: string | undefined
    preview?: boolean | undefined
    preview_info?: string | undefined
    title: string
    type: 'sink' | 'source' | 'unknown'
    version: string
  }[]
}
type ServiceKafkaConnectGetConnectorConfigurationResponse = {
  configuration_schema: {
    default_value: string
    display_name: string
    documentation: string
    group: string
    importance: 'LOW' | 'MEDIUM' | 'HIGH'
    name: string
    order: number
    order_in_group: number
    required: boolean
    type: 'STRING' | 'INT' | 'SHORT' | 'LONG' | 'DOUBLE' | 'BOOLEAN' | 'LIST' | 'CLASS' | 'PASSWORD'
    width: 'NONE' | 'SHORT' | 'MEDIUM' | 'LONG'
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectGetConnectorStatusResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  status: {
    state: 'FAILED' | 'PAUSED' | 'RUNNING' | 'STOPPED' | 'UNASSIGNED'
    tasks: {
      id: number
      state: 'FAILED' | 'PAUSED' | 'RUNNING' | 'STOPPED' | 'UNASSIGNED'
      trace: string
    }[]
  }
}
type ServiceKafkaConnectPauseConnectorResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectRestartConnectorResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectRestartConnectorTaskResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectResumeConnectorResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectStopConnectorResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaConnectValidateCustomPluginClassesRequestBody = { plugin_file_id: string }
type ServiceKafkaConnectValidateCustomPluginClassesResponse = { valid: boolean }
type ServiceKafkaNativeAclAddRequestBody = {
  host?: string | undefined
  operation:
    | 'All'
    | 'Alter'
    | 'AlterConfigs'
    | 'ClusterAction'
    | 'Create'
    | 'CreateTokens'
    | 'Delete'
    | 'Describe'
    | 'DescribeConfigs'
    | 'DescribeTokens'
    | 'IdempotentWrite'
    | 'Read'
    | 'Write'
  pattern_type: 'LITERAL' | 'PREFIXED'
  permission_type: 'ALLOW' | 'DENY'
  principal: string
  resource_name: string
  resource_type: 'Topic' | 'Group' | 'Cluster' | 'TransactionalId' | 'DelegationToken' | 'User'
}
type ServiceKafkaNativeAclAddResponse = {
  acl: {
    host: string
    id: string
    operation:
      | 'All'
      | 'Alter'
      | 'AlterConfigs'
      | 'ClusterAction'
      | 'Create'
      | 'CreateTokens'
      | 'Delete'
      | 'Describe'
      | 'DescribeConfigs'
      | 'DescribeTokens'
      | 'IdempotentWrite'
      | 'Read'
      | 'Write'
    pattern_type: 'LITERAL' | 'PREFIXED'
    permission_type: 'ALLOW' | 'DENY'
    principal: string
    resource_name: string
    resource_type: 'Topic' | 'Group' | 'Cluster' | 'TransactionalId' | 'DelegationToken' | 'User'
  }
  message: string
}
type ServiceKafkaNativeAclListResponse = {
  acl: {
    id?: string | undefined
    permission: 'admin' | 'read' | 'readwrite' | 'write'
    topic: string
    username: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  kafka_acl: {
    host: string
    id: string
    operation:
      | 'All'
      | 'Alter'
      | 'AlterConfigs'
      | 'ClusterAction'
      | 'Create'
      | 'CreateTokens'
      | 'Delete'
      | 'Describe'
      | 'DescribeConfigs'
      | 'DescribeTokens'
      | 'IdempotentWrite'
      | 'Read'
      | 'Write'
    pattern_type: 'LITERAL' | 'PREFIXED'
    permission_type: 'ALLOW' | 'DENY'
    principal: string
    resource_name: string
    resource_type: 'Cluster' | 'DelegationToken' | 'Group' | 'Topic' | 'TransactionalId' | 'User'
  }[]
  message?: string | undefined
}
type ServiceKafkaNativeAclDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaNativeAclGetResponse = {
  acl: {
    host: string
    id: string
    operation:
      | 'All'
      | 'Alter'
      | 'AlterConfigs'
      | 'ClusterAction'
      | 'Create'
      | 'CreateTokens'
      | 'Delete'
      | 'Describe'
      | 'DescribeConfigs'
      | 'DescribeTokens'
      | 'IdempotentWrite'
      | 'Read'
      | 'Write'
    pattern_type: 'LITERAL' | 'PREFIXED'
    permission_type: 'ALLOW' | 'DENY'
    principal: string
    resource_name: string
    resource_type: 'Cluster' | 'DelegationToken' | 'Group' | 'Topic' | 'TransactionalId' | 'User'
  }
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaQuotaCreateRequestBody = {
  'client\\-id'?: string | undefined
  consumer_byte_rate?: number | undefined
  producer_byte_rate?: number | undefined
  request_percentage?: number | undefined
  user?: string | undefined
}
type ServiceKafkaQuotaCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaQuotaDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaQuotaListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  quotas: {
    'client\\-id': string
    consumer_byte_rate: number
    producer_byte_rate: number
    request_percentage: number
    user: string
  }[]
}
type ServiceKafkaQuotaDescribeResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  quota: {
    'client\\-id': string
    consumer_byte_rate: number
    producer_byte_rate: number
    request_percentage: number
    user: string
  }
}
type ServiceKafkaTieredStorageStorageUsageByTopicResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  storage_usage: { [x: string]: unknown }
}
type ServiceKafkaTieredStorageStorageUsageTotalResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  total_storage_usage: number
}
type ServiceKafkaTieredStorageSummaryResponse = {
  current_cost: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  forecasted_cost: string
  forecasted_rate?: string | undefined
  message?: string | undefined
  storage_usage_history: {
    hourly: { estimated_cost?: string | undefined; hour_start: string; peak_stored_bytes: number }[]
  }
  total_storage_usage: number
}
type ServiceKafkaTopicCreateRequestBody = {
  cleanup_policy?: 'delete' | 'compact' | 'compact,delete' | undefined
  config?:
    | {
        cleanup_policy?: 'delete' | 'compact' | 'compact,delete' | undefined
        compression_type?:
          | 'snappy'
          | 'gzip'
          | 'lz4'
          | 'producer'
          | 'uncompressed'
          | 'zstd'
          | undefined
        delete_retention_ms?: number | undefined
        diskless_enable?: boolean | undefined
        file_delete_delay_ms?: number | undefined
        flush_messages?: number | undefined
        flush_ms?: number | undefined
        index_interval_bytes?: number | undefined
        local_retention_bytes?: number | undefined
        local_retention_ms?: number | undefined
        max_compaction_lag_ms?: number | undefined
        max_message_bytes?: number | undefined
        message_downconversion_enable?: boolean | undefined
        message_format_version?:
          | '0.8.0'
          | '0.8.1'
          | '0.8.2'
          | '0.9.0'
          | '0.10.0'
          | '0.10.0-IV0'
          | '0.10.0-IV1'
          | '0.10.1'
          | '0.10.1-IV0'
          | '0.10.1-IV1'
          | '0.10.1-IV2'
          | '0.10.2'
          | '0.10.2-IV0'
          | '0.11.0'
          | '0.11.0-IV0'
          | '0.11.0-IV1'
          | '0.11.0-IV2'
          | '1.0'
          | '1.0-IV0'
          | '1.1'
          | '1.1-IV0'
          | '2.0'
          | '2.0-IV0'
          | '2.0-IV1'
          | '2.1'
          | '2.1-IV0'
          | '2.1-IV1'
          | '2.1-IV2'
          | '2.2'
          | '2.2-IV0'
          | '2.2-IV1'
          | '2.3'
          | '2.3-IV0'
          | '2.3-IV1'
          | '2.4'
          | '2.4-IV0'
          | '2.4-IV1'
          | '2.5'
          | '2.5-IV0'
          | '2.6'
          | '2.6-IV0'
          | '2.7'
          | '2.7-IV0'
          | '2.7-IV1'
          | '2.7-IV2'
          | '2.8'
          | '2.8-IV0'
          | '2.8-IV1'
          | '3.0'
          | '3.0-IV0'
          | '3.0-IV1'
          | '3.1'
          | '3.1-IV0'
          | '3.2'
          | '3.2-IV0'
          | '3.3'
          | '3.3-IV0'
          | '3.3-IV1'
          | '3.3-IV2'
          | '3.3-IV3'
          | '3.4'
          | '3.4-IV0'
          | '3.5'
          | '3.5-IV0'
          | '3.5-IV1'
          | '3.5-IV2'
          | '3.6'
          | '3.6-IV0'
          | '3.6-IV1'
          | '3.6-IV2'
          | '3.7'
          | '3.7-IV0'
          | '3.7-IV1'
          | '3.7-IV2'
          | '3.7-IV3'
          | '3.7-IV4'
          | '3.8'
          | '3.8-IV0'
          | '3.9'
          | '3.9-IV0'
          | '3.9-IV1'
          | '4.0'
          | '4.0-IV0'
          | '4.1'
          | '4.1-IV0'
          | '4.2'
          | '4.2-IV0'
          | '4.3'
          | '4.3-IV0'
          | undefined
        message_timestamp_after_max_ms?: number | undefined
        message_timestamp_before_max_ms?: number | undefined
        message_timestamp_difference_max_ms?: number | undefined
        message_timestamp_type?: 'CreateTime' | 'LogAppendTime' | undefined
        min_cleanable_dirty_ratio?: number | undefined
        min_compaction_lag_ms?: number | undefined
        min_insync_replicas?: number | undefined
        preallocate?: boolean | undefined
        remote_storage_enable?: boolean | undefined
        retention_bytes?: number | undefined
        retention_ms?: number | undefined
        segment_bytes?: number | undefined
        segment_index_bytes?: number | undefined
        segment_jitter_ms?: number | undefined
        segment_ms?: number | undefined
        unclean_leader_election_enable?: boolean | undefined
      }
    | undefined
  min_insync_replicas?: number | undefined
  owner_user_group_id?: string | undefined
  partitions?: number | undefined
  replication?: number | undefined
  retention_bytes?: number | undefined
  retention_hours?: number | undefined
  tags?: { key: string; value: string }[] | undefined
  topic_description?: string | undefined
  topic_name: string
}
type ServiceKafkaTopicCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaTopicListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  topics: {
    cleanup_policy: string
    diskless_enable?: boolean | undefined
    min_insync_replicas: number
    owner_user_group_id: string
    partitions: number
    remote_storage_enable?: boolean | undefined
    replication: number
    retention_bytes: number
    retention_hours: number
    state: 'ACTIVE' | 'CONFIGURING' | 'DELETING'
    tags: { key: string; value: string }[]
    topic_description: string
    topic_name: string
  }[]
}
type ServiceKafkaTopicDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaTopicGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  topic: {
    cleanup_policy: string
    config: {
      cleanup_policy?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: string
                }[]
              | undefined
            value: string
          }
        | undefined
      compression_type?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: string
                }[]
              | undefined
            value: 'snappy' | 'gzip' | 'lz4' | 'producer' | 'uncompressed' | 'zstd'
          }
        | undefined
      delete_retention_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      diskless_enable?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: boolean
                }[]
              | undefined
            value: boolean
          }
        | undefined
      file_delete_delay_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      flush_messages?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      flush_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      index_interval_bytes?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      local_retention_bytes?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      local_retention_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      max_compaction_lag_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      max_message_bytes?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      message_downconversion_enable?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: boolean
                }[]
              | undefined
            value: boolean
          }
        | undefined
      message_format_version?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: string
                }[]
              | undefined
            value:
              | '0.8.0'
              | '0.8.1'
              | '0.8.2'
              | '0.9.0'
              | '0.10.0'
              | '0.10.0-IV0'
              | '0.10.0-IV1'
              | '0.10.1'
              | '0.10.1-IV0'
              | '0.10.1-IV1'
              | '0.10.1-IV2'
              | '0.10.2'
              | '0.10.2-IV0'
              | '0.11.0'
              | '0.11.0-IV0'
              | '0.11.0-IV1'
              | '0.11.0-IV2'
              | '1.0'
              | '1.0-IV0'
              | '1.1'
              | '1.1-IV0'
              | '2.0'
              | '2.0-IV0'
              | '2.0-IV1'
              | '2.1'
              | '2.1-IV0'
              | '2.1-IV1'
              | '2.1-IV2'
              | '2.2'
              | '2.2-IV0'
              | '2.2-IV1'
              | '2.3'
              | '2.3-IV0'
              | '2.3-IV1'
              | '2.4'
              | '2.4-IV0'
              | '2.4-IV1'
              | '2.5'
              | '2.5-IV0'
              | '2.6'
              | '2.6-IV0'
              | '2.7'
              | '2.7-IV0'
              | '2.7-IV1'
              | '2.7-IV2'
              | '2.8'
              | '2.8-IV0'
              | '2.8-IV1'
              | '3.0'
              | '3.0-IV0'
              | '3.0-IV1'
              | '3.1'
              | '3.1-IV0'
              | '3.2'
              | '3.2-IV0'
              | '3.3'
              | '3.3-IV0'
              | '3.3-IV1'
              | '3.3-IV2'
              | '3.3-IV3'
              | '3.4'
              | '3.4-IV0'
              | '3.5'
              | '3.5-IV0'
              | '3.5-IV1'
              | '3.5-IV2'
              | '3.6'
              | '3.6-IV0'
              | '3.6-IV1'
              | '3.6-IV2'
              | '3.7'
              | '3.7-IV0'
              | '3.7-IV1'
              | '3.7-IV2'
              | '3.7-IV3'
              | '3.7-IV4'
              | '3.8'
              | '3.8-IV0'
              | '3.9'
              | '3.9-IV0'
              | '3.9-IV1'
              | '4.0'
              | '4.0-IV0'
              | '4.1'
              | '4.1-IV0'
              | '4.2'
              | '4.2-IV0'
              | '4.3'
              | '4.3-IV0'
              | 'None'
          }
        | undefined
      message_timestamp_after_max_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      message_timestamp_before_max_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      message_timestamp_difference_max_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      message_timestamp_type?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: string
                }[]
              | undefined
            value: 'CreateTime' | 'LogAppendTime'
          }
        | undefined
      min_cleanable_dirty_ratio?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      min_compaction_lag_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      min_insync_replicas?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      preallocate?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: boolean
                }[]
              | undefined
            value: boolean
          }
        | undefined
      remote_storage_enable?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: boolean
                }[]
              | undefined
            value: boolean
          }
        | undefined
      retention_bytes?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      retention_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      segment_bytes?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      segment_index_bytes?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      segment_jitter_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      segment_ms?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: number
                }[]
              | undefined
            value: number
          }
        | undefined
      unclean_leader_election_enable?:
        | {
            source:
              | 'unknown_config'
              | 'topic_config'
              | 'dynamic_broker_config'
              | 'dynamic_default_broker_config'
              | 'static_broker_config'
              | 'default_config'
              | 'dynamic_broker_logger_config'
            synonyms?:
              | {
                  name: string
                  source:
                    | 'unknown_config'
                    | 'topic_config'
                    | 'dynamic_broker_config'
                    | 'dynamic_default_broker_config'
                    | 'static_broker_config'
                    | 'default_config'
                    | 'dynamic_broker_logger_config'
                  value: boolean
                }[]
              | undefined
            value: boolean
          }
        | undefined
    }
    min_insync_replicas: number
    owner_user_group_id: string
    partitions: {
      consumer_groups: { group_name: string; offset: number }[]
      earliest_offset: number
      isr: number
      latest_offset: number
      partition: number
      remote_size?: number | undefined
      share_groups: { group_name: string; lag: number; start_offset: number }[]
      size: number
    }[]
    replication: number
    retention_bytes: number
    retention_hours: number
    state: 'ACTIVE' | 'CONFIGURING' | 'DELETING'
    tags: { key: string; value: string }[]
    topic_description: string
    topic_name: string
  }
}
type ServiceKafkaTopicUpdateRequestBody = {
  config?:
    | {
        cleanup_policy?: 'delete' | 'compact' | 'compact,delete' | undefined
        compression_type?:
          | 'snappy'
          | 'gzip'
          | 'lz4'
          | 'producer'
          | 'uncompressed'
          | 'zstd'
          | undefined
        delete_retention_ms?: number | undefined
        diskless_enable?: boolean | undefined
        file_delete_delay_ms?: number | undefined
        flush_messages?: number | undefined
        flush_ms?: number | undefined
        index_interval_bytes?: number | undefined
        local_retention_bytes?: number | undefined
        local_retention_ms?: number | undefined
        max_compaction_lag_ms?: number | undefined
        max_message_bytes?: number | undefined
        message_downconversion_enable?: boolean | undefined
        message_format_version?:
          | '0.8.0'
          | '0.8.1'
          | '0.8.2'
          | '0.9.0'
          | '0.10.0'
          | '0.10.0-IV0'
          | '0.10.0-IV1'
          | '0.10.1'
          | '0.10.1-IV0'
          | '0.10.1-IV1'
          | '0.10.1-IV2'
          | '0.10.2'
          | '0.10.2-IV0'
          | '0.11.0'
          | '0.11.0-IV0'
          | '0.11.0-IV1'
          | '0.11.0-IV2'
          | '1.0'
          | '1.0-IV0'
          | '1.1'
          | '1.1-IV0'
          | '2.0'
          | '2.0-IV0'
          | '2.0-IV1'
          | '2.1'
          | '2.1-IV0'
          | '2.1-IV1'
          | '2.1-IV2'
          | '2.2'
          | '2.2-IV0'
          | '2.2-IV1'
          | '2.3'
          | '2.3-IV0'
          | '2.3-IV1'
          | '2.4'
          | '2.4-IV0'
          | '2.4-IV1'
          | '2.5'
          | '2.5-IV0'
          | '2.6'
          | '2.6-IV0'
          | '2.7'
          | '2.7-IV0'
          | '2.7-IV1'
          | '2.7-IV2'
          | '2.8'
          | '2.8-IV0'
          | '2.8-IV1'
          | '3.0'
          | '3.0-IV0'
          | '3.0-IV1'
          | '3.1'
          | '3.1-IV0'
          | '3.2'
          | '3.2-IV0'
          | '3.3'
          | '3.3-IV0'
          | '3.3-IV1'
          | '3.3-IV2'
          | '3.3-IV3'
          | '3.4'
          | '3.4-IV0'
          | '3.5'
          | '3.5-IV0'
          | '3.5-IV1'
          | '3.5-IV2'
          | '3.6'
          | '3.6-IV0'
          | '3.6-IV1'
          | '3.6-IV2'
          | '3.7'
          | '3.7-IV0'
          | '3.7-IV1'
          | '3.7-IV2'
          | '3.7-IV3'
          | '3.7-IV4'
          | '3.8'
          | '3.8-IV0'
          | '3.9'
          | '3.9-IV0'
          | '3.9-IV1'
          | '4.0'
          | '4.0-IV0'
          | '4.1'
          | '4.1-IV0'
          | '4.2'
          | '4.2-IV0'
          | '4.3'
          | '4.3-IV0'
          | undefined
        message_timestamp_after_max_ms?: number | undefined
        message_timestamp_before_max_ms?: number | undefined
        message_timestamp_difference_max_ms?: number | undefined
        message_timestamp_type?: 'CreateTime' | 'LogAppendTime' | undefined
        min_cleanable_dirty_ratio?: number | undefined
        min_compaction_lag_ms?: number | undefined
        min_insync_replicas?: number | undefined
        preallocate?: boolean | undefined
        remote_storage_enable?: boolean | undefined
        retention_bytes?: number | undefined
        retention_ms?: number | undefined
        segment_bytes?: number | undefined
        segment_index_bytes?: number | undefined
        segment_jitter_ms?: number | undefined
        segment_ms?: number | undefined
        unclean_leader_election_enable?: boolean | undefined
      }
    | undefined
  min_insync_replicas?: number | undefined
  owner_user_group_id?: string | undefined
  partitions?: number | undefined
  replication?: number | undefined
  retention_bytes?: number | undefined
  retention_hours?: number | undefined
  tags?: { key: string; value: string }[] | undefined
  topic_description?: string | undefined
}
type ServiceKafkaTopicUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaTopicMessageListRequestBody = {
  format?: 'binary' | 'json' | 'avro' | 'protobuf' | 'jsonschema' | undefined
  max_bytes?: number | undefined
  partitions: { [x: string]: unknown }
  timeout?: number | undefined
}
type ServiceKafkaTopicMessageListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  messages?:
    | {
        key?: { [x: string]: unknown } | undefined
        offset?: number | undefined
        partition?: number | undefined
        topic?: string | undefined
        value?: { [x: string]: unknown } | undefined
      }[]
    | undefined
}
type ServiceKafkaTopicMessageProduceRequestBody = {
  format: 'binary' | 'json' | 'avro' | 'protobuf' | 'jsonschema'
  key_schema?: string | undefined
  key_schema_id?: number | undefined
  records: {
    key?: { [x: string]: unknown } | undefined
    partition?: number | undefined
    value?: { [x: string]: unknown } | undefined
  }[]
  value_schema?: string | undefined
  value_schema_id?: number | undefined
}
type ServiceKafkaTopicMessageProduceResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  key_schema_id?: number | undefined
  message?: string | undefined
  offsets?:
    | {
        error?: string | undefined
        error_code?: number | undefined
        offset?: number | undefined
        partition?: number | undefined
      }[]
    | undefined
  value_schema_id?: number | undefined
}
type ServiceSchemaRegistryAclAddRequestBody = {
  permission: 'schema_registry_read' | 'schema_registry_write'
  resource: string
  username: string
}
type ServiceSchemaRegistryAclAddResponse = {
  acl: {
    id?: string | undefined
    permission: 'schema_registry_read' | 'schema_registry_write'
    resource: string
    username: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistryAclListResponse = {
  acl: {
    id?: string | undefined
    permission: 'schema_registry_read' | 'schema_registry_write'
    resource: string
    username: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistryAclDeleteResponse = {
  acl: {
    id?: string | undefined
    permission: 'schema_registry_read' | 'schema_registry_write'
    resource: string
    username: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistryCompatibilityRequestBody = {
  schema: string
  schemaType?: 'AVRO' | 'JSON' | 'PROTOBUF' | undefined
}
type ServiceSchemaRegistryCompatibilityResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  is_compatible: boolean
  message?: string | undefined
  messages?: string[] | undefined
}
type ServiceSchemaRegistryGlobalConfigGetResponse = {
  compatibilityLevel:
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE'
    | 'NONE'
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistryGlobalConfigPutRequestBody = {
  compatibility:
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE'
    | 'NONE'
}
type ServiceSchemaRegistryGlobalConfigPutResponse = {
  compatibility:
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE'
    | 'NONE'
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistrySchemaGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistrySubjectConfigGetResponse = {
  compatibilityLevel:
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE'
    | 'NONE'
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistrySubjectConfigPutRequestBody = {
  compatibility:
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE'
    | 'NONE'
}
type ServiceSchemaRegistrySubjectConfigPutResponse = {
  compatibility:
    | 'BACKWARD'
    | 'BACKWARD_TRANSITIVE'
    | 'FORWARD'
    | 'FORWARD_TRANSITIVE'
    | 'FULL'
    | 'FULL_TRANSITIVE'
    | 'NONE'
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistrySubjectDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistrySubjectVersionDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistrySubjectVersionGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  version: {
    id: number
    references?: { name: string; subject: string; version: number }[] | undefined
    schema: string
    schemaType?: 'AVRO' | 'JSON' | 'PROTOBUF' | undefined
    subject: string
    version: number
  }
}
type ServiceSchemaRegistrySubjectVersionPostRequestBody = {
  references?: { name: string; subject: string; version: number }[] | undefined
  schema: string
  schemaType?: 'AVRO' | 'JSON' | 'PROTOBUF' | undefined
}
type ServiceSchemaRegistrySubjectVersionPostResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  id: number
  message?: string | undefined
}
type ServiceSchemaRegistrySubjectVersionsGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  versions: number[]
}
type ServiceSchemaRegistrySubjectVersionSchemaGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceSchemaRegistrySubjectsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  subjects: string[]
}
type ServiceKafkaMirrorMakerCreateReplicationFlowRequestBody = {
  config_properties_exclude?: string | undefined
  diskless_az_enabled?: boolean | undefined
  emit_backward_heartbeats_enabled?: boolean | undefined
  emit_heartbeats_enabled?: boolean | undefined
  enabled: boolean
  exactly_once_delivery_enabled?: boolean | undefined
  follower_fetching_enabled?: boolean | undefined
  offset_lag_max?: number | undefined
  offset_syncs_topic_location?: 'source' | 'target' | undefined
  replication_factor?: number | undefined
  replication_policy_class?:
    | 'org.apache.kafka.connect.mirror.DefaultReplicationPolicy'
    | 'org.apache.kafka.connect.mirror.IdentityReplicationPolicy'
    | undefined
  source_cluster: string
  sync_group_offsets_enabled?: boolean | undefined
  sync_group_offsets_interval_seconds?: number | undefined
  target_cluster: string
  topics?: string[] | undefined
  'topics.blacklist'?: string[] | undefined
  'topics.exclude'?: string[] | undefined
  topics_exclude?: string[] | undefined
}
type ServiceKafkaMirrorMakerCreateReplicationFlowResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaMirrorMakerGetReplicationFlowsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  replication_flows: {
    config_properties_exclude?: string | undefined
    diskless_az_enabled?: boolean | undefined
    emit_backward_heartbeats_enabled?: boolean | undefined
    emit_heartbeats_enabled?: boolean | undefined
    enabled: boolean
    exactly_once_delivery_enabled?: boolean | undefined
    follower_fetching_enabled?: boolean | undefined
    offset_lag_max?: number | undefined
    offset_syncs_topic_location?: 'source' | 'target' | undefined
    replication_factor?: number | undefined
    replication_policy_class?:
      | 'org.apache.kafka.connect.mirror.DefaultReplicationPolicy'
      | 'org.apache.kafka.connect.mirror.IdentityReplicationPolicy'
      | undefined
    replication_progress?: number | undefined
    source_cluster: string
    sync_group_offsets_enabled?: boolean | undefined
    sync_group_offsets_interval_seconds?: number | undefined
    target_cluster: string
    topics?: string[] | undefined
    'topics.blacklist'?: string[] | undefined
    'topics.exclude'?: string[] | undefined
    topics_exclude?: string[] | undefined
  }[]
}
type ServiceKafkaMirrorMakerDeleteReplicationFlowResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceKafkaMirrorMakerGetReplicationFlowResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  replication_flow: {
    config_properties_exclude?: string | undefined
    diskless_az_enabled?: boolean | undefined
    emit_backward_heartbeats_enabled?: boolean | undefined
    emit_heartbeats_enabled?: boolean | undefined
    enabled: boolean
    exactly_once_delivery_enabled?: boolean | undefined
    follower_fetching_enabled?: boolean | undefined
    offset_lag_max?: number | undefined
    offset_syncs_topic_location?: 'source' | 'target' | undefined
    replication_factor?: number | undefined
    replication_policy_class?:
      | 'org.apache.kafka.connect.mirror.DefaultReplicationPolicy'
      | 'org.apache.kafka.connect.mirror.IdentityReplicationPolicy'
      | undefined
    replication_progress?: number | undefined
    source_cluster: string
    sync_group_offsets_enabled?: boolean | undefined
    sync_group_offsets_interval_seconds?: number | undefined
    target_cluster: string
    topics?: string[] | undefined
    'topics.blacklist'?: string[] | undefined
    'topics.exclude'?: string[] | undefined
    topics_exclude?: string[] | undefined
  }
}
type ServiceKafkaMirrorMakerPatchReplicationFlowRequestBody = {
  config_properties_exclude?: string | undefined
  diskless_az_enabled?: boolean | undefined
  emit_backward_heartbeats_enabled?: boolean | undefined
  emit_heartbeats_enabled?: boolean | undefined
  enabled?: boolean | undefined
  exactly_once_delivery_enabled?: boolean | undefined
  follower_fetching_enabled?: boolean | undefined
  offset_lag_max?: number | undefined
  offset_syncs_topic_location?: 'source' | 'target' | undefined
  replication_factor?: number | undefined
  replication_policy_class?:
    | 'org.apache.kafka.connect.mirror.DefaultReplicationPolicy'
    | 'org.apache.kafka.connect.mirror.IdentityReplicationPolicy'
    | undefined
  sync_group_offsets_enabled?: boolean | undefined
  sync_group_offsets_interval_seconds?: number | undefined
  topics?: string[] | undefined
  'topics.blacklist'?: string[] | undefined
  'topics.exclude'?: string[] | undefined
  topics_exclude?: string[] | undefined
}
type ServiceKafkaMirrorMakerPatchReplicationFlowResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  replication_flow: {
    config_properties_exclude?: string | undefined
    diskless_az_enabled?: boolean | undefined
    emit_backward_heartbeats_enabled?: boolean | undefined
    emit_heartbeats_enabled?: boolean | undefined
    enabled: boolean
    exactly_once_delivery_enabled?: boolean | undefined
    follower_fetching_enabled?: boolean | undefined
    offset_lag_max?: number | undefined
    offset_syncs_topic_location?: 'source' | 'target' | undefined
    replication_factor?: number | undefined
    replication_policy_class?:
      | 'org.apache.kafka.connect.mirror.DefaultReplicationPolicy'
      | 'org.apache.kafka.connect.mirror.IdentityReplicationPolicy'
      | undefined
    replication_progress?: number | undefined
    source_cluster: string
    sync_group_offsets_enabled?: boolean | undefined
    sync_group_offsets_interval_seconds?: number | undefined
    target_cluster: string
    topics?: string[] | undefined
    'topics.blacklist'?: string[] | undefined
    'topics.exclude'?: string[] | undefined
    topics_exclude?: string[] | undefined
  }
}
type ManagedAgentsAgentCreateRequestBody = {
  environment?: string | undefined
  model: string
  name: string
  system_instructions?: string | undefined
  tool_ids?: string[] | undefined
}
type ManagedAgentsAgentCreateResponse = {
  created_at?: string | undefined
  id: string
  name: string
}
type ManagedAgentsAgentListResponse = {
  agents?:
    | {
        created_at?: string | undefined
        id: string
        model?: string | undefined
        name: string
        tools?: { description?: string | undefined; id: string; name: string }[] | undefined
      }[]
    | undefined
}
type ManagedAgentsAgentScheduleCreateRequestBody = {
  cron_expr: string
  enabled?: boolean | undefined
  environment?: string | undefined
  name: string
  prompt: string
  timezone?: string | undefined
}
type ManagedAgentsAgentScheduleCreateResponse = {
  agent_id: string
  created_at?: string | undefined
  cron_expr: string
  disabled_reason?: string | undefined
  enabled?: boolean | undefined
  id: string
  name: string
  next_run_at?: string | undefined
  prompt: string
  timezone?: string | undefined
  updated_at?: string | undefined
}
type ManagedAgentsAgentScheduleUpdateRequestBody = {
  cron_expr?: string | undefined
  enabled?: boolean | undefined
  environment?: string | undefined
  name?: string | undefined
  prompt?: string | undefined
  timezone?: string | undefined
}
type ManagedAgentsAgentScheduleUpdateResponse = {
  agent_id: string
  created_at?: string | undefined
  cron_expr: string
  disabled_reason?: string | undefined
  enabled?: boolean | undefined
  id: string
  name: string
  next_run_at?: string | undefined
  prompt: string
  timezone?: string | undefined
  updated_at?: string | undefined
}
type ManagedAgentsAgentUpdateRequestBody = {
  environment?: string | undefined
  model?: string | undefined
  name?: string | undefined
  system_instructions?: string | undefined
  tool_ids?: string[] | undefined
}
type ManagedAgentsAgentUpdateResponse = {
  created_at?: string | undefined
  id: string
  model?: string | undefined
  name: string
  system_instructions?: string | undefined
  tools?: { description?: string | undefined; id: string; name: string }[] | undefined
}
type ManagedAgentsEnvIntegrationCreateRequestBody = {
  catalog_type: string
  credentials?: { ANY?: string | undefined } | undefined
  custom_url?: string | undefined
  name: string
  read_only?: boolean | undefined
}
type ManagedAgentsEnvIntegrationCreateResponse = {
  integration_name: string
  status?: string | undefined
  tools?:
    | {
        description?: string | undefined
        display_name?: string | undefined
        id: string
        name: string
      }[]
    | undefined
}
type ManagedAgentsIntegrationCatalogResponse = {
  integrations?:
    | {
        auth_type: string
        command?: string | undefined
        description?: string | undefined
        fields?:
          | {
              env_key?: string | undefined
              helper_text?: string | undefined
              label: string
              name: string
              options?: { label: string; value: string }[] | undefined
              required?: boolean | undefined
              type?: 'text' | 'password' | 'select' | undefined
              visible_when?: { ANY?: string | undefined } | undefined
            }[]
          | undefined
        label: string
        mcp_server_type?: string | undefined
        mcp_url?: string | undefined
        mcp_url_read_only?: string | undefined
        name: string
        requires_subdomain?: boolean | undefined
        supports_oauth?: boolean | undefined
        supports_read_only?: boolean | undefined
        token_required?: boolean | undefined
        tool_categories?: string[] | undefined
      }[]
    | undefined
}
type ManagedAgentsMessageListResponse = {
  messages?:
    | {
        created_at?: string | undefined
        message_type?: string | undefined
        name?: string | undefined
        role?: string | undefined
        tool_call?: { [x: string]: unknown } | undefined
        tool_return?: string | undefined
      }[]
    | undefined
}
type ManagedAgentsMessageSendRequestBody = {
  environment?: string | undefined
  message: string
  stream?: boolean | undefined
}
type ManagedAgentsMessageSendResponse = {
  messages?:
    | {
        created_at?: string | undefined
        message_type?: string | undefined
        name?: string | undefined
        role?: string | undefined
        tool_call?: { [x: string]: unknown } | undefined
        tool_return?: string | undefined
      }[]
    | undefined
}
type ManagedAgentsSessionCreateRequestBody = { environment?: string | undefined }
type ManagedAgentsSessionCreateResponse = { agent_id: string; id: string }
type ManagedAgentsSessionListResponse = {
  sessions?:
    | {
        agent_id: string
        created_at?: string | undefined
        id: string
        title?: string | undefined
        updated_at?: string | undefined
      }[]
    | undefined
}
type MySQLAccountQueryOptimizeRequestBody = {
  do_not_store?: boolean | undefined
  flags: string[]
  mysql_version: '5.0' | '5.1' | '5.5' | '5.6' | '5.7' | '8.0' | '8.1' | '8.2' | '8.3' | '8.4'
  query: string
  schema_metadata?: string | undefined
}
type MySQLAccountQueryOptimizeResponse = {
  optimize: {
    existing_recommended_indexes: { index_definition: string }[]
    index_recommendations: { creation_cmd: string; table_name: string }[]
    optimization_id?: string | undefined
    optimized_query: string
    original_query: string
    recommendations: {
      bad_practice_sample: string
      best_practice_sample: string
      description: string
      fixable: boolean
      line_number: number
      priority: number
      title: string
      type: number
    }[]
  }
}
type MySQLServiceDatabaseMetadataQueryResponse = { metadata_query: string }
type MySQLServiceMetadataValidateRequestBody = { db_version: string; metadata: string }
type MySQLServiceMetadataValidateResponse = { status: string }
type MySQLServiceQueryStatisticsRequestBody = {
  limit?: number | undefined
  offset?: number | undefined
  order_by?: string | undefined
}
type MySQLServiceQueryStatisticsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  queries: {
    avg_timer_wait?: number | undefined
    count_star?: number | undefined
    digest?: string | undefined
    digest_text?: string | undefined
    first_seen?: string | undefined
    last_seen?: string | undefined
    max_timer_wait?: number | undefined
    min_timer_wait?: number | undefined
    quantile_95?: number | undefined
    quantile_99?: number | undefined
    quantile_999?: number | undefined
    query_sample_seen?: string | undefined
    query_sample_text?: string | undefined
    query_sample_timer_wait?: string | undefined
    schema_name?: string | undefined
    sum_created_tmp_disk_tables?: number | undefined
    sum_created_tmp_tables?: number | undefined
    sum_errors?: number | undefined
    sum_lock_time?: number | undefined
    sum_no_good_index_used?: number | undefined
    sum_no_index_used?: number | undefined
    sum_rows_affected?: number | undefined
    sum_rows_examined?: number | undefined
    sum_rows_sent?: number | undefined
    sum_select_full_join?: number | undefined
    sum_select_full_range_join?: number | undefined
    sum_select_range?: number | undefined
    sum_select_range_check?: number | undefined
    sum_select_scan?: number | undefined
    sum_sort_merge_passes?: number | undefined
    sum_sort_range?: number | undefined
    sum_sort_rows?: number | undefined
    sum_sort_scan?: number | undefined
    sum_timer_wait?: number | undefined
    sum_warnings?: number | undefined
  }[]
}
type MySQLServiceQueryValidateRequestBody = { do_not_store?: boolean | undefined; query: string }
type MySQLServiceQueryValidateResponse = { status: string }
type ServiceOpenSearchAclGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  opensearch_acl_config: {
    acls: {
      rules: { index: string; permission: 'deny' | 'admin' | 'read' | 'readwrite' | 'write' }[]
      username: string
    }[]
    enabled: boolean
  }
}
type ServiceOpenSearchAclSetRequestBody = {
  opensearch_acl_config: {
    acls: {
      rules: { index: string; permission: 'deny' | 'admin' | 'read' | 'readwrite' | 'write' }[]
      username: string
    }[]
    enabled: boolean
  }
}
type ServiceOpenSearchAclSetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  opensearch_acl_config: {
    acls: {
      rules: { index: string; permission: 'deny' | 'admin' | 'read' | 'readwrite' | 'write' }[]
      username: string
    }[]
    enabled: boolean
  }
}
type ServiceOpenSearchAclUpdateRequestBody = {
  opensearch_acl_config: {
    acls?:
      | {
          rules: { index: string; permission: 'deny' | 'admin' | 'read' | 'readwrite' | 'write' }[]
          username: string
        }[]
      | undefined
    enabled?: boolean | undefined
  }
}
type ServiceOpenSearchAclUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  opensearch_acl_config: {
    acls: {
      rules: { index: string; permission: 'deny' | 'admin' | 'read' | 'readwrite' | 'write' }[]
      username: string
    }[]
    enabled: boolean
  }
}
type ServiceOpenSearchIndexCloseResponse = {
  acknowledged: boolean
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceOpenSearchIndexCloseMultipleRequestBody = { indices: string[] }
type ServiceOpenSearchIndexCloseMultipleResponse = {
  closed_indices: string[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceOpenSearchIndexDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceOpenSearchIndexListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  indexes: {
    create_time: string
    docs?: number | undefined
    health?: 'green' | 'yellow' | 'red' | 'red*' | 'unknown' | undefined
    index_name: string
    number_of_replicas: number
    number_of_shards: number
    read_only_allow_delete?: boolean | undefined
    replication?:
      | {
          leader_index?: string | undefined
          leader_project?: string | undefined
          leader_service?: string | undefined
        }
      | undefined
    size?: number | undefined
    status?: 'unknown' | 'open' | 'close' | 'none' | undefined
  }[]
  message?: string | undefined
}
type ServiceOpenSearchIndexOpenResponse = {
  acknowledged: boolean
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceOpenSearchIndexOpenMultipleRequestBody = { indices: string[] }
type ServiceOpenSearchIndexOpenMultipleResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  opened_indices: string[]
}
type ServiceOpenSearchSecurityGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  security_plugin_admin_enabled: boolean
  security_plugin_available: boolean
  security_plugin_enabled?: boolean | undefined
}
type ServiceOpenSearchSecurityResetRequestBody = { admin_password: string; new_password: string }
type ServiceOpenSearchSecurityResetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  security_plugin_admin_enabled: boolean
  security_plugin_available: boolean
  security_plugin_enabled?: boolean | undefined
}
type ServiceOpenSearchSecuritySetRequestBody = { admin_password: string }
type ServiceOpenSearchSecuritySetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  security_plugin_admin_enabled: boolean
  security_plugin_available: boolean
  security_plugin_enabled?: boolean | undefined
}
type ServiceOpensearchCustomRepoCreateSnapshotRequestBody = {
  ignore_unavailable?: boolean | undefined
  include_global_state?: boolean | undefined
  indices?: string | undefined
  partial?: boolean | undefined
}
type ServiceOpensearchCustomRepoCreateSnapshotResponse = {
  accepted: boolean
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceOpensearchCustomRepoDeleteSnapshotResponse = {
  acknowledged: boolean
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceOpensearchCustomRepoShowSnapshotResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  snapshots: { snapshot: string }[]
}
type ServiceOpensearchCustomRepoListSnapshotsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  snapshots: { snapshot: string }[]
}
type ServiceOpensearchCustomRepoNameVerifyResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  nodes?: { [x: string]: unknown } | undefined
}
type ServiceOpensearchCustomRepoRestoreSnapshotRequestBody = {
  ignore_index_settings?: string | undefined
  ignore_unavailable?: boolean | undefined
  include_aliases?: boolean | undefined
  include_global_state?: boolean | undefined
  index_settings?: string | undefined
  indices: string
  partial?: boolean | undefined
  rename_alias_pattern?: string | undefined
  rename_alias_replacement?: string | undefined
  rename_pattern?: string | undefined
  rename_replacement?: string | undefined
}
type ServiceOpensearchCustomRepoRestoreSnapshotResponse = {
  accepted: boolean
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceOpensearchCustomRepoRestoreSnapshotCheckRequestBody = {
  ignore_unavailable?: boolean | undefined
  include_aliases?: boolean | undefined
  indices: string
  rename_pattern?: string | undefined
  rename_replacement?: string | undefined
}
type ServiceOpensearchCustomRepoRestoreSnapshotCheckResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  indices_to_close: string[]
  matched_indices: string[]
  message?: string | undefined
  target_indices: string[]
}
type ServiceOpensearchCustomRepoShowSnapshotStatusResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  snapshots: { snapshot: string }[]
}
type ServiceOpensearchCustomRepoSnapshotsInProgressResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  snapshots: { snapshot: string }[]
}
type ServiceOpensearchListCustomReposResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  repositories: { name: string; settings: { base_path: string }; type: string }[]
}
type ServiceOpensearchListRestorationsInProgressResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  snapshots?:
    | {
        repo_name?: string | undefined
        running_time_in_nanos?: number | undefined
        snapshot_name: string
        start_time_in_millis?: number | undefined
      }[]
    | undefined
}
type ServiceOpensearchTieredStorageSummaryResponse = {
  current_cost: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  forecasted_cost: string
  forecasted_rate?: string | undefined
  message?: string | undefined
  storage_usage_history: {
    hourly: { estimated_cost?: string | undefined; hour_start: string; peak_stored_bytes: number }[]
  }
  total_storage_usage: number
}
type PGAccountQueryOptimizeRequestBody = {
  do_not_store?: boolean | undefined
  flags: string[]
  pg_version: '18' | '17' | '16' | '15' | '14' | '13' | '12' | '11' | '10' | '9' | '8' | '7'
  query: string
  schema_metadata?: string | undefined
}
type PGAccountQueryOptimizeResponse = {
  optimize: {
    existing_recommended_indexes: { index_definition: string }[]
    index_recommendations: { creation_cmd: string; table_name: string }[]
    optimization_id?: string | undefined
    optimized_query: string
    original_query: string
    recommendations: {
      bad_practice_sample: string
      best_practice_sample: string
      description: string
      fixable: boolean
      line_number: number
      priority: number
      title: string
      type: number
    }[]
  }
}
type PGServiceAvailableExtensionsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  extensions: {
    default_version?: string | undefined
    name: string
    versions?: string[] | undefined
  }[]
  message?: string | undefined
}
type PGServiceDatabaseMetadataQueryResponse = { metadata_query: string }
type PGServiceMetadataValidateRequestBody = { db_version: string; metadata: string }
type PGServiceMetadataValidateResponse = { status: string }
type PGServiceQueryStatisticsRequestBody = {
  limit?: number | undefined
  offset?: number | undefined
  order_by?: string | undefined
}
type PGServiceQueryStatisticsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  queries: {
    blk_read_time?: number | undefined
    blk_write_time?: number | undefined
    calls?: number | undefined
    database_name?: string | undefined
    local_blks_dirtied?: number | undefined
    local_blks_hit?: number | undefined
    local_blks_read?: number | undefined
    local_blks_written?: number | undefined
    max_plan_time?: number | undefined
    max_time?: number | undefined
    mean_plan_time?: number | undefined
    mean_time?: number | undefined
    min_plan_time?: number | undefined
    min_time?: number | undefined
    query?: string | undefined
    queryid?: number | undefined
    rows?: number | undefined
    shared_blks_dirtied?: number | undefined
    shared_blks_hit?: number | undefined
    shared_blks_read?: number | undefined
    shared_blks_written?: number | undefined
    stddev_plan_time?: number | undefined
    stddev_time?: number | undefined
    temp_blks_read?: number | undefined
    temp_blks_written?: number | undefined
    total_plan_time?: number | undefined
    total_time?: number | undefined
    user_name?: string | undefined
    wal_bytes?: string | undefined
    wal_fpi?: number | undefined
    wal_records?: number | undefined
  }[]
}
type PGServiceQueryStatisticsDeprecatedResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  queries: {
    blk_read_time?: number | undefined
    blk_write_time?: number | undefined
    calls?: number | undefined
    database_name?: string | undefined
    local_blks_dirtied?: number | undefined
    local_blks_hit?: number | undefined
    local_blks_read?: number | undefined
    local_blks_written?: number | undefined
    max_plan_time?: number | undefined
    max_time?: number | undefined
    mean_plan_time?: number | undefined
    mean_time?: number | undefined
    min_plan_time?: number | undefined
    min_time?: number | undefined
    query?: string | undefined
    queryid?: number | undefined
    rows?: number | undefined
    shared_blks_dirtied?: number | undefined
    shared_blks_hit?: number | undefined
    shared_blks_read?: number | undefined
    shared_blks_written?: number | undefined
    stddev_plan_time?: number | undefined
    stddev_time?: number | undefined
    temp_blks_read?: number | undefined
    temp_blks_written?: number | undefined
    total_plan_time?: number | undefined
    total_time?: number | undefined
    user_name?: string | undefined
    wal_bytes?: string | undefined
    wal_fpi?: number | undefined
    wal_records?: number | undefined
  }[]
}
type PGServiceQueryValidateRequestBody = { do_not_store?: boolean | undefined; query: string }
type PGServiceQueryValidateResponse = { status: string }
type ServicePGBouncerCreateRequestBody = {
  database: string
  pool_mode?: 'session' | 'transaction' | 'statement' | undefined
  pool_name: string
  pool_size?: number | undefined
  username?: string | undefined
}
type ServicePGBouncerCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServicePGBouncerDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServicePGBouncerUpdateRequestBody = {
  database?: string | undefined
  pool_mode?: 'session' | 'transaction' | 'statement' | undefined
  pool_size?: number | undefined
  username?: string | undefined
}
type ServicePGBouncerUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceThanosStorageSummaryResponse = {
  current_cost: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  forecasted_cost: string
  forecasted_rate?: string | undefined
  message?: string | undefined
  storage_usage_history: {
    hourly: { estimated_cost?: string | undefined; hour_start: string; peak_stored_bytes: number }[]
  }
  total_storage_usage: number
}
type ListProjectServiceTypesResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_types: {
    application?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    clickhouse?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    dragonfly?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    elasticsearch?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    flink?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    grafana?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    kafka?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    kafka_connect?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    kafka_mirrormaker?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    mysql?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    opensearch?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    pg?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    redis?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    thanos?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    valkey?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
  }
}
type ListPublicServiceTypesResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_types: {
    application?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    clickhouse?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    dragonfly?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    elasticsearch?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    flink?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    grafana?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    kafka?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    kafka_connect?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    kafka_mirrormaker?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    mysql?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    opensearch?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    pg?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    redis?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    thanos?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
    valkey?:
      | {
          default_version?: string | undefined
          description: string
          latest_available_version?: string | undefined
          service_plans: {
            backup_config: {
              frequent_interval_minutes?: number | undefined
              frequent_oldest_age_minutes?: number | undefined
              infrequent_interval_minutes?: number | undefined
              infrequent_oldest_age_minutes?: number | undefined
              interval: number
              max_count: number
              recovery_mode: 'basic' | 'pitr'
            }
            is_cluster_plan?: boolean | undefined
            managed_cluster_plan?: boolean | undefined
            max_memory_percent?: number | undefined
            node_count?: number | undefined
            primary_count?: number | undefined
            regions?: { [x: string]: unknown } | undefined
            service_plan: string
            service_type: string
            shard_count?: number | undefined
          }[]
          user_config_schema: { [x: string]: unknown }
        }
      | undefined
  }
}
type ListServiceVersionsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_versions: {
    aiven_end_of_life_time?: string | undefined
    availability_end_time?: string | undefined
    availability_start_time?: string | undefined
    end_of_life_help_article_url?: string | undefined
    major_version?: string | undefined
    service_type?: string | undefined
    state?: 'available' | 'eol' | 'preview' | 'terminated' | 'unavailable' | undefined
    termination_time?: string | undefined
    upgrade_to_service_type?: string | undefined
    upgrade_to_version?: string | undefined
    upstream_end_of_life_time?: string | undefined
  }[]
}
type OsAvailablePluginsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  opensearch?:
    | {
        plugins: { description: string; name: string; url: string; version: string }[]
        version: string
      }[]
    | undefined
}
type PgAvailableExtensionsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  pg?:
    | {
        extensions: {
          default_version?: string | undefined
          name: string
          versions?: string[] | undefined
        }[]
        version: string
      }[]
    | undefined
}
type ProjectGetServiceLogsRequestBody = {
  build_id?: string | undefined
  limit?: number | undefined
  log_type?: 'application-build' | 'application-run' | undefined
  offset?: string | undefined
  severity?:
    | 'emerg'
    | 'alert'
    | 'crit'
    | 'err'
    | 'warning'
    | 'notice'
    | 'info'
    | 'debug'
    | undefined
  sort_order?: 'desc' | 'asc' | undefined
}
type ProjectGetServiceLogsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  first_log_offset: string
  logs: {
    msg: string
    severity?: string | undefined
    time?: string | undefined
    unit?: string | undefined
  }[]
  message?: string | undefined
  offset: string
}
type ProjectServiceTagsListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  tags?: { [x: string]: unknown } | undefined
}
type ProjectServiceTagsReplaceRequestBody = { tags: { [x: string]: unknown } }
type ProjectServiceTagsReplaceResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ProjectServiceTagsUpdateRequestBody = { tags: { [x: string]: unknown } }
type ProjectServiceTagsUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceAlertsListResponse = {
  alerts: {
    create_time: string
    event: string
    node_name?: string | undefined
    project_name: string
    service_name?: string | undefined
    service_type?: string | undefined
    severity: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceBackupToAnotherRegionReportRequestBody = {
  kafka_topic_name?: string | undefined
  period?: 'hour' | 'day' | 'week' | 'month' | 'year' | undefined
}
type ServiceBackupToAnotherRegionReportResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  metrics: { [x: string]: unknown }
}
type ServiceBackupsGetResponse = {
  backup_progress?: string | undefined
  backups: {
    additional_regions?:
      | {
          cloud: string
          pause_reason?: string | undefined
          paused?: boolean | undefined
          region?: string | undefined
        }[]
      | undefined
    backup_name: string
    backup_time: string
    data_size: number
    incremental?: boolean | undefined
    storage_location?: string | undefined
    tiered_storage_data_size?: number | undefined
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  pitr?:
    | {
        additional_regions: {
          cloud: string
          pitr_range_end: string
          pitr_range_start: string
          region: string
        }[]
        primary_region: { pitr_range_end: string; pitr_range_start: string }
      }
    | undefined
  scheduled_backup_time?:
    | {
        backup_hour?: number | undefined
        backup_interval_hours?: number | undefined
        backup_minute?: number | undefined
      }
    | undefined
}
type ServiceCancelQueryRequestBody = { pid?: number | undefined; terminate?: boolean | undefined }
type ServiceCancelQueryResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  success: boolean
}
type ServiceCreateRequestBody = {
  cloud?: string | undefined
  cmk_id?: string | undefined
  copy_tags?: boolean | undefined
  disk_space_mb?: number | undefined
  group_name?: string | undefined
  maintenance?:
    | {
        dow?:
          | 'monday'
          | 'tuesday'
          | 'wednesday'
          | 'thursday'
          | 'friday'
          | 'saturday'
          | 'sunday'
          | undefined
        time?: string | undefined
      }
    | undefined
  plan: string
  project_vpc_id?: string | undefined
  service_integrations?:
    | {
        dest_endpoint_id?: string | undefined
        dest_project?: string | undefined
        dest_service?: string | undefined
        integration_type:
          | 'alert_triage_kafka'
          | 'alertmanager'
          | 'application_service_credential'
          | 'autoscaler'
          | 'autoscaler_service'
          | 'caching'
          | 'clickhouse_credentials'
          | 'clickhouse_kafka'
          | 'clickhouse_postgresql'
          | 'dashboard'
          | 'datadog'
          | 'datahub_metadata_ingestion'
          | 'datasource'
          | 'disaster_recovery'
          | 'external_aws_cloudwatch_logs'
          | 'external_aws_cloudwatch_metrics'
          | 'external_elasticsearch_logs'
          | 'external_google_cloud_logging'
          | 'external_opensearch_logs'
          | 'flink'
          | 'flink_external_bigquery'
          | 'flink_external_kafka'
          | 'flink_external_postgresql'
          | 'internal_connectivity'
          | 'jolokia'
          | 'kafka_connect'
          | 'kafka_connect_postgresql'
          | 'kafka_inkless_postgresql'
          | 'kafka_logs'
          | 'kafka_mirrormaker'
          | 'logs'
          | 'metrics'
          | 'opensearch_cross_cluster_replication'
          | 'opensearch_cross_cluster_search'
          | 'opentelemetry'
          | 'pg_for_analytics_credentials'
          | 'postgresql_clickhouse_cdc'
          | 'prometheus'
          | 'read_replica'
          | 'rsyslog'
          | 'schema_registry_proxy'
          | 'service_composition'
          | 'stresstester'
          | 'thanos_distributed_query'
          | 'thanos_migrate'
          | 'thanos_object_storage'
          | 'thanoscompactor'
          | 'thanosquery'
          | 'thanosruler'
          | 'thanosstore'
          | 'vector'
          | 'vmalert'
        source_endpoint_id?: string | undefined
        source_project?: string | undefined
        source_service?: string | undefined
        user_config?: { [x: string]: unknown } | undefined
      }[]
    | undefined
  service_name: string
  service_type: string
  static_ips?: string[] | undefined
  tags?: { [x: string]: unknown } | undefined
  tech_emails?: { email: string }[] | undefined
  termination_protection?: boolean | undefined
  user_config?: { [x: string]: unknown } | undefined
}
type ServiceCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service: {
    acl?:
      | {
          id?: string | undefined
          permission: 'admin' | 'read' | 'readwrite' | 'write'
          topic: string
          username: string
        }[]
      | undefined
    backups?:
      | {
          additional_regions?:
            | {
                cloud: string
                pause_reason?: string | undefined
                paused?: boolean | undefined
                region?: string | undefined
              }[]
            | undefined
          backup_name: string
          backup_time: string
          data_size: number
          incremental?: boolean | undefined
          storage_location?: string | undefined
          tiered_storage_data_size?: number | undefined
        }[]
      | undefined
    cloud_description?: string | undefined
    cloud_name: string
    cmk_id?: string | undefined
    components?:
      | {
          az?: string | undefined
          component: string
          host: string
          kafka_authentication_method?: 'certificate' | 'sasl' | undefined
          kafka_ssl_ca?: 'project_ca' | 'letsencrypt' | undefined
          node_position?: number | undefined
          path?: string | undefined
          port: number
          privatelink_connection_id?: string | undefined
          route: 'dynamic' | 'public' | 'private' | 'privatelink'
          security_redirect_uris?: string[] | undefined
          shard_position?: number | undefined
          ssl?: boolean | undefined
          usage: 'disaster_recovery' | 'primary' | 'replica' | 'ha_replica' | 'shard' | 'node'
        }[]
      | undefined
    connection_info?: { [x: string]: unknown } | undefined
    connection_pools?:
      | {
          connection_uri: string
          database: string
          pool_mode: 'session' | 'transaction' | 'statement'
          pool_name: string
          pool_size: number
          username?: string | undefined
        }[]
      | undefined
    create_time: string
    databases?: string[] | undefined
    disk_space_mb?: number | undefined
    features?: { [x: string]: unknown } | undefined
    first_use_time?: string | undefined
    group_list: string[]
    is_cluster_plan?: boolean | undefined
    kafka_acl?:
      | {
          host: string
          id: string
          operation:
            | 'All'
            | 'Alter'
            | 'AlterConfigs'
            | 'ClusterAction'
            | 'Create'
            | 'CreateTokens'
            | 'Delete'
            | 'Describe'
            | 'DescribeConfigs'
            | 'DescribeTokens'
            | 'IdempotentWrite'
            | 'Read'
            | 'Write'
          pattern_type: 'LITERAL' | 'PREFIXED'
          permission_type: 'ALLOW' | 'DENY'
          principal: string
          resource_name: string
          resource_type:
            | 'Cluster'
            | 'DelegationToken'
            | 'Group'
            | 'Topic'
            | 'TransactionalId'
            | 'User'
        }[]
      | undefined
    maintenance?:
      | {
          controlled_switchover?:
            | {
                completed_at?: string | undefined
                enabled: boolean
                scheduled_start_time: string
                state:
                  | 'INACTIVE'
                  | 'PENDING'
                  | 'SCHEDULED'
                  | 'RUNNING'
                  | 'COMPLETED'
                  | 'COMPLETED_EARLY'
                termination_reason?: string | undefined
              }
            | undefined
          dow:
            | 'monday'
            | 'tuesday'
            | 'wednesday'
            | 'thursday'
            | 'friday'
            | 'saturday'
            | 'sunday'
            | 'never'
          enabled: boolean
          time: string
          updates: {
            deadline?: string | undefined
            description?: string | undefined
            documentation_link?: string | undefined
            impact?: string | undefined
            impact_portable_text?: string | undefined
            start_after?: string | undefined
            start_at?: string | undefined
          }[]
        }
      | undefined
    metadata?: { [x: string]: unknown } | undefined
    node_count?: number | undefined
    node_cpu_count?: number | undefined
    node_memory_mb?: number | undefined
    node_states?:
      | {
          availability_zone: string
          name: string
          progress_updates?:
            | {
                completed: boolean
                current?: number | undefined
                max?: number | undefined
                min?: number | undefined
                phase: 'prepare' | 'basebackup' | 'basebackup_prepare' | 'stream' | 'finalize'
                position?:
                  | {
                      backup_incremental: boolean
                      backup_name: string
                      chain_index: number
                      chain_total: number
                    }
                  | undefined
                unit?:
                  | 'binlogs'
                  | 'bytes_compressed'
                  | 'bytes_uncompressed'
                  | 'prepare_percent'
                  | 'wal_lsn'
                  | undefined
              }[]
            | undefined
          role?: 'master' | 'standby' | 'standby-leader' | 'read-replica' | undefined
          roles?: string | undefined
          shard?: { name?: string | undefined; position?: number | undefined } | undefined
          state: 'leaving' | 'running' | 'setting_up_vm' | 'syncing_data' | 'timing_out' | 'unknown'
        }[]
      | undefined
    plan: string
    project_vpc_id: string
    schema_registry_acl?:
      | {
          id?: string | undefined
          permission: 'schema_registry_read' | 'schema_registry_write'
          resource: string
          username: string
        }[]
      | undefined
    server_group?: { enabled?: boolean | undefined; type?: string | undefined } | undefined
    service_integrations: {
      active: boolean
      description: string
      dest_endpoint?: string | undefined
      dest_endpoint_id?: string | undefined
      dest_project: string
      dest_service?: string | undefined
      dest_service_type: string
      enabled: boolean
      integration_status?:
        | {
            state: {
              errors: string[]
              likely_error_cause?:
                | 'null'
                | 'destination'
                | 'integration'
                | 'source'
                | 'unknown'
                | undefined
              nodes: { [x: string]: unknown }
              status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
            }
            status_user_desc: string
          }
        | undefined
      integration_type: string
      service_integration_id: string
      source_endpoint?: string | undefined
      source_endpoint_id?: string | undefined
      source_project: string
      source_service: string
      source_service_type: string
      user_config?: { [x: string]: unknown } | undefined
    }[]
    service_name: string
    service_notifications?:
      | {
          level: 'notice' | 'warning'
          message: string
          metadata: {
            end_of_life_help_article_url?: string | undefined
            end_of_life_policy_url?: string | undefined
            service_end_of_life_time?: string | undefined
            upgrade_to_service_type?: string | undefined
            upgrade_to_version?: string | undefined
          }
          type: 'service_end_of_life' | 'service_powered_off_removal'
        }[]
      | undefined
    service_type: string
    service_type_description?: string | undefined
    service_uri: string
    service_uri_params?: { [x: string]: unknown } | undefined
    state: 'POWEROFF' | 'REBALANCING' | 'REBUILDING' | 'RUNNING'
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    termination_protection: boolean
    topics?:
      | {
          cleanup_policy: string
          min_insync_replicas: number
          partitions: number
          replication: number
          retention_bytes: number
          retention_hours: number
          state?: 'ACTIVE' | 'CONFIGURING' | 'DELETING' | undefined
          topic_name: string
        }[]
      | undefined
    update_time: string
    user_config: { [x: string]: unknown }
    users?:
      | {
          access_cert?: string | undefined
          access_cert_not_valid_after_time?: string | undefined
          access_control?:
            | {
                pg_allow_replication?: boolean | undefined
                redis_acl_categories?: string[] | undefined
                redis_acl_channels?: string[] | undefined
                redis_acl_commands?: string[] | undefined
                redis_acl_keys?: string[] | undefined
                valkey_acl_categories?: string[] | undefined
                valkey_acl_channels?: string[] | undefined
                valkey_acl_commands?: string[] | undefined
                valkey_acl_databases?: string[] | undefined
                valkey_acl_keys?: string[] | undefined
              }
            | undefined
          access_key?: string | undefined
          authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
          expiring_cert_not_valid_after_time?: string | undefined
          password: string
          password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
          password_updated_time?: string | undefined
          type: string
          username: string
        }[]
      | undefined
  }
}
type ServiceListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  services: {
    acl?:
      | {
          id?: string | undefined
          permission: 'admin' | 'read' | 'readwrite' | 'write'
          topic: string
          username: string
        }[]
      | undefined
    backups?:
      | {
          additional_regions?:
            | {
                cloud: string
                pause_reason?: string | undefined
                paused?: boolean | undefined
                region?: string | undefined
              }[]
            | undefined
          backup_name: string
          backup_time: string
          data_size: number
          incremental?: boolean | undefined
          storage_location?: string | undefined
          tiered_storage_data_size?: number | undefined
        }[]
      | undefined
    cloud_description?: string | undefined
    cloud_name: string
    cmk_id?: string | undefined
    components?:
      | {
          az?: string | undefined
          component: string
          host: string
          kafka_authentication_method?: 'certificate' | 'sasl' | undefined
          kafka_ssl_ca?: 'project_ca' | 'letsencrypt' | undefined
          node_position?: number | undefined
          path?: string | undefined
          port: number
          privatelink_connection_id?: string | undefined
          route: 'dynamic' | 'public' | 'private' | 'privatelink'
          security_redirect_uris?: string[] | undefined
          shard_position?: number | undefined
          ssl?: boolean | undefined
          usage: 'disaster_recovery' | 'primary' | 'replica' | 'ha_replica' | 'shard' | 'node'
        }[]
      | undefined
    connection_info?: { [x: string]: unknown } | undefined
    connection_pools?:
      | {
          connection_uri: string
          database: string
          pool_mode: 'session' | 'transaction' | 'statement'
          pool_name: string
          pool_size: number
          username?: string | undefined
        }[]
      | undefined
    create_time: string
    databases?: string[] | undefined
    disk_space_mb?: number | undefined
    features?: { [x: string]: unknown } | undefined
    first_use_time?: string | undefined
    group_list: string[]
    is_cluster_plan?: boolean | undefined
    kafka_acl?:
      | {
          host: string
          id: string
          operation:
            | 'All'
            | 'Alter'
            | 'AlterConfigs'
            | 'ClusterAction'
            | 'Create'
            | 'CreateTokens'
            | 'Delete'
            | 'Describe'
            | 'DescribeConfigs'
            | 'DescribeTokens'
            | 'IdempotentWrite'
            | 'Read'
            | 'Write'
          pattern_type: 'LITERAL' | 'PREFIXED'
          permission_type: 'ALLOW' | 'DENY'
          principal: string
          resource_name: string
          resource_type:
            | 'Cluster'
            | 'DelegationToken'
            | 'Group'
            | 'Topic'
            | 'TransactionalId'
            | 'User'
        }[]
      | undefined
    maintenance?:
      | {
          controlled_switchover?:
            | {
                completed_at?: string | undefined
                enabled: boolean
                scheduled_start_time: string
                state:
                  | 'INACTIVE'
                  | 'PENDING'
                  | 'SCHEDULED'
                  | 'RUNNING'
                  | 'COMPLETED'
                  | 'COMPLETED_EARLY'
                termination_reason?: string | undefined
              }
            | undefined
          dow:
            | 'monday'
            | 'tuesday'
            | 'wednesday'
            | 'thursday'
            | 'friday'
            | 'saturday'
            | 'sunday'
            | 'never'
          enabled: boolean
          time: string
          updates: {
            deadline?: string | undefined
            description?: string | undefined
            documentation_link?: string | undefined
            impact?: string | undefined
            impact_portable_text?: string | undefined
            start_after?: string | undefined
            start_at?: string | undefined
          }[]
        }
      | undefined
    metadata?: { [x: string]: unknown } | undefined
    node_count?: number | undefined
    node_cpu_count?: number | undefined
    node_memory_mb?: number | undefined
    node_states?:
      | {
          availability_zone: string
          name: string
          progress_updates?:
            | {
                completed: boolean
                current?: number | undefined
                max?: number | undefined
                min?: number | undefined
                phase: 'prepare' | 'basebackup' | 'basebackup_prepare' | 'stream' | 'finalize'
                position?:
                  | {
                      backup_incremental: boolean
                      backup_name: string
                      chain_index: number
                      chain_total: number
                    }
                  | undefined
                unit?:
                  | 'binlogs'
                  | 'bytes_compressed'
                  | 'bytes_uncompressed'
                  | 'prepare_percent'
                  | 'wal_lsn'
                  | undefined
              }[]
            | undefined
          role?: 'master' | 'standby' | 'standby-leader' | 'read-replica' | undefined
          roles?: string | undefined
          shard?: { name?: string | undefined; position?: number | undefined } | undefined
          state: 'leaving' | 'running' | 'setting_up_vm' | 'syncing_data' | 'timing_out' | 'unknown'
        }[]
      | undefined
    plan: string
    project_vpc_id: string
    schema_registry_acl?:
      | {
          id?: string | undefined
          permission: 'schema_registry_read' | 'schema_registry_write'
          resource: string
          username: string
        }[]
      | undefined
    server_group?: { enabled?: boolean | undefined; type?: string | undefined } | undefined
    service_integrations: {
      active: boolean
      description: string
      dest_endpoint?: string | undefined
      dest_endpoint_id?: string | undefined
      dest_project: string
      dest_service?: string | undefined
      dest_service_type: string
      enabled: boolean
      integration_status?:
        | {
            state: {
              errors: string[]
              likely_error_cause?:
                | 'null'
                | 'destination'
                | 'integration'
                | 'source'
                | 'unknown'
                | undefined
              nodes: { [x: string]: unknown }
              status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
            }
            status_user_desc: string
          }
        | undefined
      integration_type: string
      service_integration_id: string
      source_endpoint?: string | undefined
      source_endpoint_id?: string | undefined
      source_project: string
      source_service: string
      source_service_type: string
      user_config?: { [x: string]: unknown } | undefined
    }[]
    service_name: string
    service_notifications?:
      | {
          level: 'notice' | 'warning'
          message: string
          metadata: {
            end_of_life_help_article_url?: string | undefined
            end_of_life_policy_url?: string | undefined
            service_end_of_life_time?: string | undefined
            upgrade_to_service_type?: string | undefined
            upgrade_to_version?: string | undefined
          }
          type: 'service_end_of_life' | 'service_powered_off_removal'
        }[]
      | undefined
    service_type: string
    service_type_description?: string | undefined
    service_uri: string
    service_uri_params?: { [x: string]: unknown } | undefined
    state: 'POWEROFF' | 'REBALANCING' | 'REBUILDING' | 'RUNNING'
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    termination_protection: boolean
    topics?:
      | {
          cleanup_policy: string
          min_insync_replicas: number
          partitions: number
          replication: number
          retention_bytes: number
          retention_hours: number
          state?: 'ACTIVE' | 'CONFIGURING' | 'DELETING' | undefined
          topic_name: string
        }[]
      | undefined
    update_time: string
    user_config: { [x: string]: unknown }
    users?:
      | {
          access_cert?: string | undefined
          access_cert_not_valid_after_time?: string | undefined
          access_control?:
            | {
                pg_allow_replication?: boolean | undefined
                redis_acl_categories?: string[] | undefined
                redis_acl_channels?: string[] | undefined
                redis_acl_commands?: string[] | undefined
                redis_acl_keys?: string[] | undefined
                valkey_acl_categories?: string[] | undefined
                valkey_acl_channels?: string[] | undefined
                valkey_acl_commands?: string[] | undefined
                valkey_acl_databases?: string[] | undefined
                valkey_acl_keys?: string[] | undefined
              }
            | undefined
          access_key?: string | undefined
          authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
          expiring_cert_not_valid_after_time?: string | undefined
          password: string
          password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
          password_updated_time?: string | undefined
          type: string
          username: string
        }[]
      | undefined
  }[]
}
type ServiceDataHubRotateInternalSecretsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message: string
  rotation: { group: string }
}
type ServiceDataHubRotateSecretServiceEncryptionKeyResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message: string
  rotation: { group: string }
}
type ServiceDataHubRotateTokenServiceSecretsResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message: string
  rotation: { group: string }
}
type ServiceDatabaseCreateRequestBody = {
  database: string
  lc_collate?: string | undefined
  lc_ctype?: string | undefined
}
type ServiceDatabaseCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceDatabaseListResponse = {
  databases: { database_name: string }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  next?: string | undefined
}
type ServiceDatabaseDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service: {
    acl?:
      | {
          id?: string | undefined
          permission: 'admin' | 'read' | 'readwrite' | 'write'
          topic: string
          username: string
        }[]
      | undefined
    backups?:
      | {
          additional_regions?:
            | {
                cloud: string
                pause_reason?: string | undefined
                paused?: boolean | undefined
                region?: string | undefined
              }[]
            | undefined
          backup_name: string
          backup_time: string
          data_size: number
          incremental?: boolean | undefined
          storage_location?: string | undefined
          tiered_storage_data_size?: number | undefined
        }[]
      | undefined
    cloud_description?: string | undefined
    cloud_name: string
    cmk_id?: string | undefined
    components?:
      | {
          az?: string | undefined
          component: string
          host: string
          kafka_authentication_method?: 'certificate' | 'sasl' | undefined
          kafka_ssl_ca?: 'project_ca' | 'letsencrypt' | undefined
          node_position?: number | undefined
          path?: string | undefined
          port: number
          privatelink_connection_id?: string | undefined
          route: 'dynamic' | 'public' | 'private' | 'privatelink'
          security_redirect_uris?: string[] | undefined
          shard_position?: number | undefined
          ssl?: boolean | undefined
          usage: 'disaster_recovery' | 'primary' | 'replica' | 'ha_replica' | 'shard' | 'node'
        }[]
      | undefined
    connection_info?: { [x: string]: unknown } | undefined
    connection_pools?:
      | {
          connection_uri: string
          database: string
          pool_mode: 'session' | 'transaction' | 'statement'
          pool_name: string
          pool_size: number
          username?: string | undefined
        }[]
      | undefined
    create_time: string
    databases?: string[] | undefined
    disk_space_mb?: number | undefined
    features?: { [x: string]: unknown } | undefined
    first_use_time?: string | undefined
    group_list: string[]
    is_cluster_plan?: boolean | undefined
    kafka_acl?:
      | {
          host: string
          id: string
          operation:
            | 'All'
            | 'Alter'
            | 'AlterConfigs'
            | 'ClusterAction'
            | 'Create'
            | 'CreateTokens'
            | 'Delete'
            | 'Describe'
            | 'DescribeConfigs'
            | 'DescribeTokens'
            | 'IdempotentWrite'
            | 'Read'
            | 'Write'
          pattern_type: 'LITERAL' | 'PREFIXED'
          permission_type: 'ALLOW' | 'DENY'
          principal: string
          resource_name: string
          resource_type:
            | 'Cluster'
            | 'DelegationToken'
            | 'Group'
            | 'Topic'
            | 'TransactionalId'
            | 'User'
        }[]
      | undefined
    maintenance?:
      | {
          controlled_switchover?:
            | {
                completed_at?: string | undefined
                enabled: boolean
                scheduled_start_time: string
                state:
                  | 'INACTIVE'
                  | 'PENDING'
                  | 'SCHEDULED'
                  | 'RUNNING'
                  | 'COMPLETED'
                  | 'COMPLETED_EARLY'
                termination_reason?: string | undefined
              }
            | undefined
          dow:
            | 'monday'
            | 'tuesday'
            | 'wednesday'
            | 'thursday'
            | 'friday'
            | 'saturday'
            | 'sunday'
            | 'never'
          enabled: boolean
          time: string
          updates: {
            deadline?: string | undefined
            description?: string | undefined
            documentation_link?: string | undefined
            impact?: string | undefined
            impact_portable_text?: string | undefined
            start_after?: string | undefined
            start_at?: string | undefined
          }[]
        }
      | undefined
    metadata?: { [x: string]: unknown } | undefined
    node_count?: number | undefined
    node_cpu_count?: number | undefined
    node_memory_mb?: number | undefined
    node_states?:
      | {
          availability_zone: string
          name: string
          progress_updates?:
            | {
                completed: boolean
                current?: number | undefined
                max?: number | undefined
                min?: number | undefined
                phase: 'prepare' | 'basebackup' | 'basebackup_prepare' | 'stream' | 'finalize'
                position?:
                  | {
                      backup_incremental: boolean
                      backup_name: string
                      chain_index: number
                      chain_total: number
                    }
                  | undefined
                unit?:
                  | 'binlogs'
                  | 'bytes_compressed'
                  | 'bytes_uncompressed'
                  | 'prepare_percent'
                  | 'wal_lsn'
                  | undefined
              }[]
            | undefined
          role?: 'master' | 'standby' | 'standby-leader' | 'read-replica' | undefined
          roles?: string | undefined
          shard?: { name?: string | undefined; position?: number | undefined } | undefined
          state: 'leaving' | 'running' | 'setting_up_vm' | 'syncing_data' | 'timing_out' | 'unknown'
        }[]
      | undefined
    plan: string
    project_vpc_id: string
    schema_registry_acl?:
      | {
          id?: string | undefined
          permission: 'schema_registry_read' | 'schema_registry_write'
          resource: string
          username: string
        }[]
      | undefined
    server_group?: { enabled?: boolean | undefined; type?: string | undefined } | undefined
    service_integrations: {
      active: boolean
      description: string
      dest_endpoint?: string | undefined
      dest_endpoint_id?: string | undefined
      dest_project: string
      dest_service?: string | undefined
      dest_service_type: string
      enabled: boolean
      integration_status?:
        | {
            state: {
              errors: string[]
              likely_error_cause?:
                | 'null'
                | 'destination'
                | 'integration'
                | 'source'
                | 'unknown'
                | undefined
              nodes: { [x: string]: unknown }
              status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
            }
            status_user_desc: string
          }
        | undefined
      integration_type: string
      service_integration_id: string
      source_endpoint?: string | undefined
      source_endpoint_id?: string | undefined
      source_project: string
      source_service: string
      source_service_type: string
      user_config?: { [x: string]: unknown } | undefined
    }[]
    service_name: string
    service_notifications?:
      | {
          level: 'notice' | 'warning'
          message: string
          metadata: {
            end_of_life_help_article_url?: string | undefined
            end_of_life_policy_url?: string | undefined
            service_end_of_life_time?: string | undefined
            upgrade_to_service_type?: string | undefined
            upgrade_to_version?: string | undefined
          }
          type: 'service_end_of_life' | 'service_powered_off_removal'
        }[]
      | undefined
    service_type: string
    service_type_description?: string | undefined
    service_uri: string
    service_uri_params?: { [x: string]: unknown } | undefined
    state: 'POWEROFF' | 'REBALANCING' | 'REBUILDING' | 'RUNNING'
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    termination_protection: boolean
    topics?:
      | {
          cleanup_policy: string
          min_insync_replicas: number
          partitions: number
          replication: number
          retention_bytes: number
          retention_hours: number
          state?: 'ACTIVE' | 'CONFIGURING' | 'DELETING' | undefined
          topic_name: string
        }[]
      | undefined
    update_time: string
    user_config: { [x: string]: unknown }
    users?:
      | {
          access_cert?: string | undefined
          access_cert_not_valid_after_time?: string | undefined
          access_control?:
            | {
                pg_allow_replication?: boolean | undefined
                redis_acl_categories?: string[] | undefined
                redis_acl_channels?: string[] | undefined
                redis_acl_commands?: string[] | undefined
                redis_acl_keys?: string[] | undefined
                valkey_acl_categories?: string[] | undefined
                valkey_acl_channels?: string[] | undefined
                valkey_acl_commands?: string[] | undefined
                valkey_acl_databases?: string[] | undefined
                valkey_acl_keys?: string[] | undefined
              }
            | undefined
          access_key?: string | undefined
          authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
          expiring_cert_not_valid_after_time?: string | undefined
          password: string
          password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
          password_updated_time?: string | undefined
          type: string
          username: string
        }[]
      | undefined
  }
}
type ServiceUpdateRequestBody = {
  cloud?: string | undefined
  cmk_id?: string | undefined
  disk_space_mb?: number | undefined
  group_name?: string | undefined
  karapace?: boolean | undefined
  maintenance?:
    | {
        dow?:
          | 'monday'
          | 'tuesday'
          | 'wednesday'
          | 'thursday'
          | 'friday'
          | 'saturday'
          | 'sunday'
          | undefined
        time?: string | undefined
      }
    | undefined
  plan?: string | undefined
  powered?: boolean | undefined
  project_vpc_id?: string | undefined
  schema_registry_authz?: boolean | undefined
  tech_emails?: { email: string }[] | undefined
  termination_protection?: boolean | undefined
  user_config?: { [x: string]: unknown } | undefined
}
type ServiceUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service: {
    acl?:
      | {
          id?: string | undefined
          permission: 'admin' | 'read' | 'readwrite' | 'write'
          topic: string
          username: string
        }[]
      | undefined
    backups?:
      | {
          additional_regions?:
            | {
                cloud: string
                pause_reason?: string | undefined
                paused?: boolean | undefined
                region?: string | undefined
              }[]
            | undefined
          backup_name: string
          backup_time: string
          data_size: number
          incremental?: boolean | undefined
          storage_location?: string | undefined
          tiered_storage_data_size?: number | undefined
        }[]
      | undefined
    cloud_description?: string | undefined
    cloud_name: string
    cmk_id?: string | undefined
    components?:
      | {
          az?: string | undefined
          component: string
          host: string
          kafka_authentication_method?: 'certificate' | 'sasl' | undefined
          kafka_ssl_ca?: 'project_ca' | 'letsencrypt' | undefined
          node_position?: number | undefined
          path?: string | undefined
          port: number
          privatelink_connection_id?: string | undefined
          route: 'dynamic' | 'public' | 'private' | 'privatelink'
          security_redirect_uris?: string[] | undefined
          shard_position?: number | undefined
          ssl?: boolean | undefined
          usage: 'disaster_recovery' | 'primary' | 'replica' | 'ha_replica' | 'shard' | 'node'
        }[]
      | undefined
    connection_info?: { [x: string]: unknown } | undefined
    connection_pools?:
      | {
          connection_uri: string
          database: string
          pool_mode: 'session' | 'transaction' | 'statement'
          pool_name: string
          pool_size: number
          username?: string | undefined
        }[]
      | undefined
    create_time: string
    databases?: string[] | undefined
    disk_space_mb?: number | undefined
    features?: { [x: string]: unknown } | undefined
    first_use_time?: string | undefined
    group_list: string[]
    is_cluster_plan?: boolean | undefined
    kafka_acl?:
      | {
          host: string
          id: string
          operation:
            | 'All'
            | 'Alter'
            | 'AlterConfigs'
            | 'ClusterAction'
            | 'Create'
            | 'CreateTokens'
            | 'Delete'
            | 'Describe'
            | 'DescribeConfigs'
            | 'DescribeTokens'
            | 'IdempotentWrite'
            | 'Read'
            | 'Write'
          pattern_type: 'LITERAL' | 'PREFIXED'
          permission_type: 'ALLOW' | 'DENY'
          principal: string
          resource_name: string
          resource_type:
            | 'Cluster'
            | 'DelegationToken'
            | 'Group'
            | 'Topic'
            | 'TransactionalId'
            | 'User'
        }[]
      | undefined
    maintenance?:
      | {
          controlled_switchover?:
            | {
                completed_at?: string | undefined
                enabled: boolean
                scheduled_start_time: string
                state:
                  | 'INACTIVE'
                  | 'PENDING'
                  | 'SCHEDULED'
                  | 'RUNNING'
                  | 'COMPLETED'
                  | 'COMPLETED_EARLY'
                termination_reason?: string | undefined
              }
            | undefined
          dow:
            | 'monday'
            | 'tuesday'
            | 'wednesday'
            | 'thursday'
            | 'friday'
            | 'saturday'
            | 'sunday'
            | 'never'
          enabled: boolean
          time: string
          updates: {
            deadline?: string | undefined
            description?: string | undefined
            documentation_link?: string | undefined
            impact?: string | undefined
            impact_portable_text?: string | undefined
            start_after?: string | undefined
            start_at?: string | undefined
          }[]
        }
      | undefined
    metadata?: { [x: string]: unknown } | undefined
    node_count?: number | undefined
    node_cpu_count?: number | undefined
    node_memory_mb?: number | undefined
    node_states?:
      | {
          availability_zone: string
          name: string
          progress_updates?:
            | {
                completed: boolean
                current?: number | undefined
                max?: number | undefined
                min?: number | undefined
                phase: 'prepare' | 'basebackup' | 'basebackup_prepare' | 'stream' | 'finalize'
                position?:
                  | {
                      backup_incremental: boolean
                      backup_name: string
                      chain_index: number
                      chain_total: number
                    }
                  | undefined
                unit?:
                  | 'binlogs'
                  | 'bytes_compressed'
                  | 'bytes_uncompressed'
                  | 'prepare_percent'
                  | 'wal_lsn'
                  | undefined
              }[]
            | undefined
          role?: 'master' | 'standby' | 'standby-leader' | 'read-replica' | undefined
          roles?: string | undefined
          shard?: { name?: string | undefined; position?: number | undefined } | undefined
          state: 'leaving' | 'running' | 'setting_up_vm' | 'syncing_data' | 'timing_out' | 'unknown'
        }[]
      | undefined
    plan: string
    project_vpc_id: string
    schema_registry_acl?:
      | {
          id?: string | undefined
          permission: 'schema_registry_read' | 'schema_registry_write'
          resource: string
          username: string
        }[]
      | undefined
    server_group?: { enabled?: boolean | undefined; type?: string | undefined } | undefined
    service_integrations: {
      active: boolean
      description: string
      dest_endpoint?: string | undefined
      dest_endpoint_id?: string | undefined
      dest_project: string
      dest_service?: string | undefined
      dest_service_type: string
      enabled: boolean
      integration_status?:
        | {
            state: {
              errors: string[]
              likely_error_cause?:
                | 'null'
                | 'destination'
                | 'integration'
                | 'source'
                | 'unknown'
                | undefined
              nodes: { [x: string]: unknown }
              status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
            }
            status_user_desc: string
          }
        | undefined
      integration_type: string
      service_integration_id: string
      source_endpoint?: string | undefined
      source_endpoint_id?: string | undefined
      source_project: string
      source_service: string
      source_service_type: string
      user_config?: { [x: string]: unknown } | undefined
    }[]
    service_name: string
    service_notifications?:
      | {
          level: 'notice' | 'warning'
          message: string
          metadata: {
            end_of_life_help_article_url?: string | undefined
            end_of_life_policy_url?: string | undefined
            service_end_of_life_time?: string | undefined
            upgrade_to_service_type?: string | undefined
            upgrade_to_version?: string | undefined
          }
          type: 'service_end_of_life' | 'service_powered_off_removal'
        }[]
      | undefined
    service_type: string
    service_type_description?: string | undefined
    service_uri: string
    service_uri_params?: { [x: string]: unknown } | undefined
    state: 'POWEROFF' | 'REBALANCING' | 'REBUILDING' | 'RUNNING'
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    termination_protection: boolean
    topics?:
      | {
          cleanup_policy: string
          min_insync_replicas: number
          partitions: number
          replication: number
          retention_bytes: number
          retention_hours: number
          state?: 'ACTIVE' | 'CONFIGURING' | 'DELETING' | undefined
          topic_name: string
        }[]
      | undefined
    update_time: string
    user_config: { [x: string]: unknown }
    users?:
      | {
          access_cert?: string | undefined
          access_cert_not_valid_after_time?: string | undefined
          access_control?:
            | {
                pg_allow_replication?: boolean | undefined
                redis_acl_categories?: string[] | undefined
                redis_acl_channels?: string[] | undefined
                redis_acl_commands?: string[] | undefined
                redis_acl_keys?: string[] | undefined
                valkey_acl_categories?: string[] | undefined
                valkey_acl_channels?: string[] | undefined
                valkey_acl_commands?: string[] | undefined
                valkey_acl_databases?: string[] | undefined
                valkey_acl_keys?: string[] | undefined
              }
            | undefined
          access_key?: string | undefined
          authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
          expiring_cert_not_valid_after_time?: string | undefined
          password: string
          password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
          password_updated_time?: string | undefined
          type: string
          username: string
        }[]
      | undefined
  }
}
type ServiceEnableWritesResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message: string
  until?: string | undefined
}
type ServiceGetMigrationStatusResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  migration: {
    error?: string | undefined
    master_last_io_seconds_ago?: number | undefined
    master_link_status?: 'up' | 'down' | undefined
    method: '' | 'dump' | 'mysqldump' | 'pg_dump' | 'replication' | 'scan'
    status: 'done' | 'failed' | 'running' | 'syncing' | 'waiting'
  }
  migration_detail?:
    | {
        dbname: string
        dump_tool?: 'mysqldump' | 'mydumper' | undefined
        error?: string | undefined
        method: '' | 'dump' | 'mysqldump' | 'pg_dump' | 'replication' | 'scan'
        status: 'done' | 'failed' | 'running' | 'syncing' | 'waiting'
      }[]
    | undefined
}
type ServiceMaintenanceStartResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceMetricsFetchRequestBody = {
  kafka_topic_name?: string | undefined
  period?: 'hour' | 'day' | 'week' | 'month' | 'year' | undefined
}
type ServiceMetricsFetchResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  metrics: { [x: string]: unknown }
}
type ServicePrivatelinkAWSConnectionListResponse = {
  connections: {
    dns_name: string
    privatelink_connection_id?: string | undefined
    state: 'pending-user-approval' | 'user-approved' | 'connected' | 'active'
    vpc_endpoint_id: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServicePrivatelinkAWSCreateRequestBody = {
  principals: string[]
  supported_regions?: string[] | undefined
}
type ServicePrivatelinkAWSCreateResponse = {
  aws_service_id?: string | undefined
  aws_service_name?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  principals: string[]
  state: 'creating' | 'active' | 'deleting'
  supported_regions?: string[] | undefined
}
type ServicePrivatelinkAWSDeleteResponse = {
  aws_service_id?: string | undefined
  aws_service_name?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  principals: string[]
  state: 'creating' | 'active' | 'deleting'
  supported_regions?: string[] | undefined
}
type ServicePrivatelinkAWSGetResponse = {
  aws_service_id?: string | undefined
  aws_service_name?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  principals: string[]
  state: 'creating' | 'active' | 'deleting'
  supported_regions?: string[] | undefined
}
type ServicePrivatelinkAWSUpdateRequestBody = {
  principals?: string[] | undefined
  supported_regions?: string[] | undefined
}
type ServicePrivatelinkAWSUpdateResponse = {
  aws_service_id?: string | undefined
  aws_service_name?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  principals: string[]
  state: 'creating' | 'active' | 'deleting'
  supported_regions?: string[] | undefined
}
type ServicePrivatelinkAzureConnectionApprovalResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  private_endpoint_id: string
  privatelink_connection_id: string
  state: 'pending-user-approval' | 'user-approved' | 'connected' | 'active'
  user_ip_address: string
}
type ServicePrivatelinkAzureConnectionListResponse = {
  connections: {
    private_endpoint_id: string
    privatelink_connection_id: string
    state: 'pending-user-approval' | 'user-approved' | 'connected' | 'active'
    user_ip_address: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServicePrivatelinkAzureConnectionUpdateRequestBody = { user_ip_address: string }
type ServicePrivatelinkAzureConnectionUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  private_endpoint_id: string
  privatelink_connection_id: string
  state: 'pending-user-approval' | 'user-approved' | 'connected' | 'active'
  user_ip_address: string
}
type ServicePrivatelinkAzureCreateRequestBody = { user_subscription_ids: string[] }
type ServicePrivatelinkAzureCreateResponse = {
  azure_service_alias?: string | undefined
  azure_service_id?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  state: 'creating' | 'active' | 'deleting'
  user_subscription_ids: string[]
}
type ServicePrivatelinkAzureDeleteResponse = {
  azure_service_alias?: string | undefined
  azure_service_id?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  state: 'creating' | 'active' | 'deleting'
  user_subscription_ids: string[]
}
type ServicePrivatelinkAzureGetResponse = {
  azure_service_alias?: string | undefined
  azure_service_id?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  state: 'creating' | 'active' | 'deleting'
  user_subscription_ids: string[]
}
type ServicePrivatelinkAzureUpdateRequestBody = { user_subscription_ids: string[] }
type ServicePrivatelinkAzureUpdateResponse = {
  azure_service_alias?: string | undefined
  azure_service_id?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  state: 'creating' | 'active' | 'deleting'
  user_subscription_ids: string[]
}
type ServicePrivatelinkAzureRefreshResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServicePrivatelinkGoogleConnectionCreateRequestBody = { user_ip_address: string }
type ServicePrivatelinkGoogleConnectionCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  privatelink_connection_id: string
  psc_connection_id: string
  state: 'pending-user-approval' | 'user-approved' | 'connected' | 'active'
  user_ip_address: string
}
type ServicePrivatelinkGoogleConnectionListResponse = {
  connections: {
    privatelink_connection_id: string
    psc_connection_id: string
    state: 'pending-user-approval' | 'user-approved' | 'connected' | 'active'
    user_ip_address: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServicePrivatelinkGoogleCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  google_service_attachment: string
  message?: string | undefined
  state: 'creating' | 'active' | 'deleting'
}
type ServicePrivatelinkGoogleDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  google_service_attachment: string
  message?: string | undefined
  state: 'creating' | 'active' | 'deleting'
}
type ServicePrivatelinkGoogleGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  google_service_attachment: string
  message?: string | undefined
  state: 'creating' | 'active' | 'deleting'
}
type ServicePrivatelinkGoogleRefreshResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceQueryActivityRequestBody = {
  limit?: number | undefined
  offset?: number | undefined
  order_by?: string | undefined
}
type ServiceQueryActivityResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  queries: {
    active_channel_subscriptions?: number | undefined
    active_database?: string | undefined
    active_pattern_matching_channel_subscriptions?: number | undefined
    application_name?: string | undefined
    backend_start?: string | undefined
    backend_type?: string | undefined
    backend_xid?: number | undefined
    backend_xmin?: number | undefined
    client_addr?: string | undefined
    client_hostname?: string | undefined
    client_port?: number | undefined
    connection_age_seconds?: number | undefined
    connection_idle_seconds?: number | undefined
    datid?: number | undefined
    datname?: string | undefined
    flags?: string[] | undefined
    flags_raw?: string | undefined
    id?: string | undefined
    leader_pid?: number | undefined
    multi_exec_commands?: number | undefined
    name?: string | undefined
    output_buffer?: number | undefined
    output_buffer_memory?: number | undefined
    output_list_length?: number | undefined
    pid?: number | undefined
    query?: string | undefined
    query_buffer?: number | undefined
    query_buffer_free?: number | undefined
    query_duration?: number | undefined
    query_id?: number | undefined
    query_start?: string | undefined
    state?: string | undefined
    state_change?: string | undefined
    usename?: string | undefined
    usesysid?: number | undefined
    wait_event?: string | undefined
    wait_event_type?: string | undefined
    waiting?: boolean | undefined
    xact_start?: string | undefined
  }[]
}
type ServiceQueryStatisticsResetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  queries: { [x: string]: unknown }[]
}
type ServiceServiceTypeUpdateRequestBody = { service_type: string }
type ServiceServiceTypeUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service: {
    acl?:
      | {
          id?: string | undefined
          permission: 'admin' | 'read' | 'readwrite' | 'write'
          topic: string
          username: string
        }[]
      | undefined
    backups?:
      | {
          additional_regions?:
            | {
                cloud: string
                pause_reason?: string | undefined
                paused?: boolean | undefined
                region?: string | undefined
              }[]
            | undefined
          backup_name: string
          backup_time: string
          data_size: number
          incremental?: boolean | undefined
          storage_location?: string | undefined
          tiered_storage_data_size?: number | undefined
        }[]
      | undefined
    cloud_description?: string | undefined
    cloud_name: string
    cmk_id?: string | undefined
    components?:
      | {
          az?: string | undefined
          component: string
          host: string
          kafka_authentication_method?: 'certificate' | 'sasl' | undefined
          kafka_ssl_ca?: 'project_ca' | 'letsencrypt' | undefined
          node_position?: number | undefined
          path?: string | undefined
          port: number
          privatelink_connection_id?: string | undefined
          route: 'dynamic' | 'public' | 'private' | 'privatelink'
          security_redirect_uris?: string[] | undefined
          shard_position?: number | undefined
          ssl?: boolean | undefined
          usage: 'disaster_recovery' | 'primary' | 'replica' | 'ha_replica' | 'shard' | 'node'
        }[]
      | undefined
    connection_info?: { [x: string]: unknown } | undefined
    connection_pools?:
      | {
          connection_uri: string
          database: string
          pool_mode: 'session' | 'transaction' | 'statement'
          pool_name: string
          pool_size: number
          username?: string | undefined
        }[]
      | undefined
    create_time: string
    databases?: string[] | undefined
    disk_space_mb?: number | undefined
    features?: { [x: string]: unknown } | undefined
    first_use_time?: string | undefined
    group_list: string[]
    is_cluster_plan?: boolean | undefined
    kafka_acl?:
      | {
          host: string
          id: string
          operation:
            | 'All'
            | 'Alter'
            | 'AlterConfigs'
            | 'ClusterAction'
            | 'Create'
            | 'CreateTokens'
            | 'Delete'
            | 'Describe'
            | 'DescribeConfigs'
            | 'DescribeTokens'
            | 'IdempotentWrite'
            | 'Read'
            | 'Write'
          pattern_type: 'LITERAL' | 'PREFIXED'
          permission_type: 'ALLOW' | 'DENY'
          principal: string
          resource_name: string
          resource_type:
            | 'Cluster'
            | 'DelegationToken'
            | 'Group'
            | 'Topic'
            | 'TransactionalId'
            | 'User'
        }[]
      | undefined
    maintenance?:
      | {
          controlled_switchover?:
            | {
                completed_at?: string | undefined
                enabled: boolean
                scheduled_start_time: string
                state:
                  | 'INACTIVE'
                  | 'PENDING'
                  | 'SCHEDULED'
                  | 'RUNNING'
                  | 'COMPLETED'
                  | 'COMPLETED_EARLY'
                termination_reason?: string | undefined
              }
            | undefined
          dow:
            | 'monday'
            | 'tuesday'
            | 'wednesday'
            | 'thursday'
            | 'friday'
            | 'saturday'
            | 'sunday'
            | 'never'
          enabled: boolean
          time: string
          updates: {
            deadline?: string | undefined
            description?: string | undefined
            documentation_link?: string | undefined
            impact?: string | undefined
            impact_portable_text?: string | undefined
            start_after?: string | undefined
            start_at?: string | undefined
          }[]
        }
      | undefined
    metadata?: { [x: string]: unknown } | undefined
    node_count?: number | undefined
    node_cpu_count?: number | undefined
    node_memory_mb?: number | undefined
    node_states?:
      | {
          availability_zone: string
          name: string
          progress_updates?:
            | {
                completed: boolean
                current?: number | undefined
                max?: number | undefined
                min?: number | undefined
                phase: 'prepare' | 'basebackup' | 'basebackup_prepare' | 'stream' | 'finalize'
                position?:
                  | {
                      backup_incremental: boolean
                      backup_name: string
                      chain_index: number
                      chain_total: number
                    }
                  | undefined
                unit?:
                  | 'binlogs'
                  | 'bytes_compressed'
                  | 'bytes_uncompressed'
                  | 'prepare_percent'
                  | 'wal_lsn'
                  | undefined
              }[]
            | undefined
          role?: 'master' | 'standby' | 'standby-leader' | 'read-replica' | undefined
          roles?: string | undefined
          shard?: { name?: string | undefined; position?: number | undefined } | undefined
          state: 'leaving' | 'running' | 'setting_up_vm' | 'syncing_data' | 'timing_out' | 'unknown'
        }[]
      | undefined
    plan: string
    project_vpc_id: string
    schema_registry_acl?:
      | {
          id?: string | undefined
          permission: 'schema_registry_read' | 'schema_registry_write'
          resource: string
          username: string
        }[]
      | undefined
    server_group?: { enabled?: boolean | undefined; type?: string | undefined } | undefined
    service_integrations: {
      active: boolean
      description: string
      dest_endpoint?: string | undefined
      dest_endpoint_id?: string | undefined
      dest_project: string
      dest_service?: string | undefined
      dest_service_type: string
      enabled: boolean
      integration_status?:
        | {
            state: {
              errors: string[]
              likely_error_cause?:
                | 'null'
                | 'destination'
                | 'integration'
                | 'source'
                | 'unknown'
                | undefined
              nodes: { [x: string]: unknown }
              status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
            }
            status_user_desc: string
          }
        | undefined
      integration_type: string
      service_integration_id: string
      source_endpoint?: string | undefined
      source_endpoint_id?: string | undefined
      source_project: string
      source_service: string
      source_service_type: string
      user_config?: { [x: string]: unknown } | undefined
    }[]
    service_name: string
    service_notifications?:
      | {
          level: 'notice' | 'warning'
          message: string
          metadata: {
            end_of_life_help_article_url?: string | undefined
            end_of_life_policy_url?: string | undefined
            service_end_of_life_time?: string | undefined
            upgrade_to_service_type?: string | undefined
            upgrade_to_version?: string | undefined
          }
          type: 'service_end_of_life' | 'service_powered_off_removal'
        }[]
      | undefined
    service_type: string
    service_type_description?: string | undefined
    service_uri: string
    service_uri_params?: { [x: string]: unknown } | undefined
    state: 'POWEROFF' | 'REBALANCING' | 'REBUILDING' | 'RUNNING'
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    termination_protection: boolean
    topics?:
      | {
          cleanup_policy: string
          min_insync_replicas: number
          partitions: number
          replication: number
          retention_bytes: number
          retention_hours: number
          state?: 'ACTIVE' | 'CONFIGURING' | 'DELETING' | undefined
          topic_name: string
        }[]
      | undefined
    update_time: string
    user_config: { [x: string]: unknown }
    users?:
      | {
          access_cert?: string | undefined
          access_cert_not_valid_after_time?: string | undefined
          access_control?:
            | {
                pg_allow_replication?: boolean | undefined
                redis_acl_categories?: string[] | undefined
                redis_acl_channels?: string[] | undefined
                redis_acl_commands?: string[] | undefined
                redis_acl_keys?: string[] | undefined
                valkey_acl_categories?: string[] | undefined
                valkey_acl_channels?: string[] | undefined
                valkey_acl_commands?: string[] | undefined
                valkey_acl_databases?: string[] | undefined
                valkey_acl_keys?: string[] | undefined
              }
            | undefined
          access_key?: string | undefined
          authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
          expiring_cert_not_valid_after_time?: string | undefined
          password: string
          password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
          password_updated_time?: string | undefined
          type: string
          username: string
        }[]
      | undefined
  }
}
type ServiceTaskCreateRequestBody = {
  create_searchable_snapshot?: { indices: string } | undefined
  create_user_backup?: { backup_name: string } | undefined
  dataset_import?: { dataset_name: 'pagila' } | undefined
  migration_check?:
    | {
        ignore_dbs?: string | undefined
        ignore_roles?: string | undefined
        method?: 'dump' | 'replication' | undefined
        source_project_name?: string | undefined
        source_service_name?: string | undefined
        source_service_uri?: string | undefined
      }
    | undefined
  target_version?: string | undefined
  task_type:
    | 'upgrade_check'
    | 'migration_check'
    | 'dataset_import'
    | 'create_user_backup'
    | 'create_searchable_snapshot'
  upgrade_check?: { async?: boolean | undefined; target_version: string } | undefined
}
type ServiceTaskCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  task: {
    create_time: string
    result: string
    result_codes?: { code: string; dbname?: string | undefined }[] | undefined
    success: boolean
    task_id: string
    task_type: string
  }
}
type ServiceTaskGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  task: {
    create_time: string
    result: string
    result_codes?: { code: string; dbname?: string | undefined }[] | undefined
    success: boolean
    task_id: string
    task_type: string
  }
}
type ServiceUserCreateRequestBody = {
  access_control?:
    | {
        pg_allow_replication?: boolean | undefined
        redis_acl_categories?: string[] | undefined
        redis_acl_channels?: string[] | undefined
        redis_acl_commands?: string[] | undefined
        redis_acl_keys?: string[] | undefined
        valkey_acl_categories?: string[] | undefined
        valkey_acl_channels?: string[] | undefined
        valkey_acl_commands?: string[] | undefined
        valkey_acl_databases?: string[] | undefined
        valkey_acl_keys?: string[] | undefined
      }
    | undefined
  authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
  mysql_grants?: string[] | undefined
  username: string
}
type ServiceUserCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  user: {
    access_cert?: string | undefined
    access_cert_not_valid_after_time?: string | undefined
    access_control?:
      | {
          pg_allow_replication?: boolean | undefined
          redis_acl_categories?: string[] | undefined
          redis_acl_channels?: string[] | undefined
          redis_acl_commands?: string[] | undefined
          redis_acl_keys?: string[] | undefined
          valkey_acl_categories?: string[] | undefined
          valkey_acl_channels?: string[] | undefined
          valkey_acl_commands?: string[] | undefined
          valkey_acl_databases?: string[] | undefined
          valkey_acl_keys?: string[] | undefined
        }
      | undefined
    access_key?: string | undefined
    authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
    expiring_cert_not_valid_after_time?: string | undefined
    password: string
    password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
    password_updated_time?: string | undefined
    type: string
    username: string
  }
}
type ServiceUserCredentialsModifyRequestBody = {
  access_control?:
    | {
        pg_allow_replication?: boolean | undefined
        redis_acl_categories?: string[] | undefined
        redis_acl_channels?: string[] | undefined
        redis_acl_commands?: string[] | undefined
        redis_acl_keys?: string[] | undefined
        valkey_acl_categories?: string[] | undefined
        valkey_acl_channels?: string[] | undefined
        valkey_acl_commands?: string[] | undefined
        valkey_acl_databases?: string[] | undefined
        valkey_acl_keys?: string[] | undefined
      }
    | undefined
  authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
  new_password?: string | undefined
  operation: 'acknowledge-renewal' | 'reset-credentials' | 'set-access-control'
}
type ServiceUserCredentialsModifyResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service: {
    acl?:
      | {
          id?: string | undefined
          permission: 'admin' | 'read' | 'readwrite' | 'write'
          topic: string
          username: string
        }[]
      | undefined
    backups?:
      | {
          additional_regions?:
            | {
                cloud: string
                pause_reason?: string | undefined
                paused?: boolean | undefined
                region?: string | undefined
              }[]
            | undefined
          backup_name: string
          backup_time: string
          data_size: number
          incremental?: boolean | undefined
          storage_location?: string | undefined
          tiered_storage_data_size?: number | undefined
        }[]
      | undefined
    cloud_description?: string | undefined
    cloud_name: string
    cmk_id?: string | undefined
    components?:
      | {
          az?: string | undefined
          component: string
          host: string
          kafka_authentication_method?: 'certificate' | 'sasl' | undefined
          kafka_ssl_ca?: 'project_ca' | 'letsencrypt' | undefined
          node_position?: number | undefined
          path?: string | undefined
          port: number
          privatelink_connection_id?: string | undefined
          route: 'dynamic' | 'public' | 'private' | 'privatelink'
          security_redirect_uris?: string[] | undefined
          shard_position?: number | undefined
          ssl?: boolean | undefined
          usage: 'disaster_recovery' | 'primary' | 'replica' | 'ha_replica' | 'shard' | 'node'
        }[]
      | undefined
    connection_info?: { [x: string]: unknown } | undefined
    connection_pools?:
      | {
          connection_uri: string
          database: string
          pool_mode: 'session' | 'transaction' | 'statement'
          pool_name: string
          pool_size: number
          username?: string | undefined
        }[]
      | undefined
    create_time: string
    databases?: string[] | undefined
    disk_space_mb?: number | undefined
    features?: { [x: string]: unknown } | undefined
    first_use_time?: string | undefined
    group_list: string[]
    is_cluster_plan?: boolean | undefined
    kafka_acl?:
      | {
          host: string
          id: string
          operation:
            | 'All'
            | 'Alter'
            | 'AlterConfigs'
            | 'ClusterAction'
            | 'Create'
            | 'CreateTokens'
            | 'Delete'
            | 'Describe'
            | 'DescribeConfigs'
            | 'DescribeTokens'
            | 'IdempotentWrite'
            | 'Read'
            | 'Write'
          pattern_type: 'LITERAL' | 'PREFIXED'
          permission_type: 'ALLOW' | 'DENY'
          principal: string
          resource_name: string
          resource_type:
            | 'Cluster'
            | 'DelegationToken'
            | 'Group'
            | 'Topic'
            | 'TransactionalId'
            | 'User'
        }[]
      | undefined
    maintenance?:
      | {
          controlled_switchover?:
            | {
                completed_at?: string | undefined
                enabled: boolean
                scheduled_start_time: string
                state:
                  | 'INACTIVE'
                  | 'PENDING'
                  | 'SCHEDULED'
                  | 'RUNNING'
                  | 'COMPLETED'
                  | 'COMPLETED_EARLY'
                termination_reason?: string | undefined
              }
            | undefined
          dow:
            | 'monday'
            | 'tuesday'
            | 'wednesday'
            | 'thursday'
            | 'friday'
            | 'saturday'
            | 'sunday'
            | 'never'
          enabled: boolean
          time: string
          updates: {
            deadline?: string | undefined
            description?: string | undefined
            documentation_link?: string | undefined
            impact?: string | undefined
            impact_portable_text?: string | undefined
            start_after?: string | undefined
            start_at?: string | undefined
          }[]
        }
      | undefined
    metadata?: { [x: string]: unknown } | undefined
    node_count?: number | undefined
    node_cpu_count?: number | undefined
    node_memory_mb?: number | undefined
    node_states?:
      | {
          availability_zone: string
          name: string
          progress_updates?:
            | {
                completed: boolean
                current?: number | undefined
                max?: number | undefined
                min?: number | undefined
                phase: 'prepare' | 'basebackup' | 'basebackup_prepare' | 'stream' | 'finalize'
                position?:
                  | {
                      backup_incremental: boolean
                      backup_name: string
                      chain_index: number
                      chain_total: number
                    }
                  | undefined
                unit?:
                  | 'binlogs'
                  | 'bytes_compressed'
                  | 'bytes_uncompressed'
                  | 'prepare_percent'
                  | 'wal_lsn'
                  | undefined
              }[]
            | undefined
          role?: 'master' | 'standby' | 'standby-leader' | 'read-replica' | undefined
          roles?: string | undefined
          shard?: { name?: string | undefined; position?: number | undefined } | undefined
          state: 'leaving' | 'running' | 'setting_up_vm' | 'syncing_data' | 'timing_out' | 'unknown'
        }[]
      | undefined
    plan: string
    project_vpc_id: string
    schema_registry_acl?:
      | {
          id?: string | undefined
          permission: 'schema_registry_read' | 'schema_registry_write'
          resource: string
          username: string
        }[]
      | undefined
    server_group?: { enabled?: boolean | undefined; type?: string | undefined } | undefined
    service_integrations: {
      active: boolean
      description: string
      dest_endpoint?: string | undefined
      dest_endpoint_id?: string | undefined
      dest_project: string
      dest_service?: string | undefined
      dest_service_type: string
      enabled: boolean
      integration_status?:
        | {
            state: {
              errors: string[]
              likely_error_cause?:
                | 'null'
                | 'destination'
                | 'integration'
                | 'source'
                | 'unknown'
                | undefined
              nodes: { [x: string]: unknown }
              status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
            }
            status_user_desc: string
          }
        | undefined
      integration_type: string
      service_integration_id: string
      source_endpoint?: string | undefined
      source_endpoint_id?: string | undefined
      source_project: string
      source_service: string
      source_service_type: string
      user_config?: { [x: string]: unknown } | undefined
    }[]
    service_name: string
    service_notifications?:
      | {
          level: 'notice' | 'warning'
          message: string
          metadata: {
            end_of_life_help_article_url?: string | undefined
            end_of_life_policy_url?: string | undefined
            service_end_of_life_time?: string | undefined
            upgrade_to_service_type?: string | undefined
            upgrade_to_version?: string | undefined
          }
          type: 'service_end_of_life' | 'service_powered_off_removal'
        }[]
      | undefined
    service_type: string
    service_type_description?: string | undefined
    service_uri: string
    service_uri_params?: { [x: string]: unknown } | undefined
    state: 'POWEROFF' | 'REBALANCING' | 'REBUILDING' | 'RUNNING'
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    termination_protection: boolean
    topics?:
      | {
          cleanup_policy: string
          min_insync_replicas: number
          partitions: number
          replication: number
          retention_bytes: number
          retention_hours: number
          state?: 'ACTIVE' | 'CONFIGURING' | 'DELETING' | undefined
          topic_name: string
        }[]
      | undefined
    update_time: string
    user_config: { [x: string]: unknown }
    users?:
      | {
          access_cert?: string | undefined
          access_cert_not_valid_after_time?: string | undefined
          access_control?:
            | {
                pg_allow_replication?: boolean | undefined
                redis_acl_categories?: string[] | undefined
                redis_acl_channels?: string[] | undefined
                redis_acl_commands?: string[] | undefined
                redis_acl_keys?: string[] | undefined
                valkey_acl_categories?: string[] | undefined
                valkey_acl_channels?: string[] | undefined
                valkey_acl_commands?: string[] | undefined
                valkey_acl_databases?: string[] | undefined
                valkey_acl_keys?: string[] | undefined
              }
            | undefined
          access_key?: string | undefined
          authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
          expiring_cert_not_valid_after_time?: string | undefined
          password: string
          password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
          password_updated_time?: string | undefined
          type: string
          username: string
        }[]
      | undefined
  }
}
type ServiceUserDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceUserGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  user: {
    access_cert?: string | undefined
    access_cert_not_valid_after_time?: string | undefined
    access_control?:
      | {
          pg_allow_replication?: boolean | undefined
          redis_acl_categories?: string[] | undefined
          redis_acl_channels?: string[] | undefined
          redis_acl_commands?: string[] | undefined
          redis_acl_keys?: string[] | undefined
          valkey_acl_categories?: string[] | undefined
          valkey_acl_channels?: string[] | undefined
          valkey_acl_commands?: string[] | undefined
          valkey_acl_databases?: string[] | undefined
          valkey_acl_keys?: string[] | undefined
        }
      | undefined
    access_key?: string | undefined
    authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
    expiring_cert_not_valid_after_time?: string | undefined
    password: string
    password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
    password_updated_time?: string | undefined
    type: string
    username: string
  }
}
type ServiceUserCredentialsResetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service: {
    acl?:
      | {
          id?: string | undefined
          permission: 'admin' | 'read' | 'readwrite' | 'write'
          topic: string
          username: string
        }[]
      | undefined
    backups?:
      | {
          additional_regions?:
            | {
                cloud: string
                pause_reason?: string | undefined
                paused?: boolean | undefined
                region?: string | undefined
              }[]
            | undefined
          backup_name: string
          backup_time: string
          data_size: number
          incremental?: boolean | undefined
          storage_location?: string | undefined
          tiered_storage_data_size?: number | undefined
        }[]
      | undefined
    cloud_description?: string | undefined
    cloud_name: string
    cmk_id?: string | undefined
    components?:
      | {
          az?: string | undefined
          component: string
          host: string
          kafka_authentication_method?: 'certificate' | 'sasl' | undefined
          kafka_ssl_ca?: 'project_ca' | 'letsencrypt' | undefined
          node_position?: number | undefined
          path?: string | undefined
          port: number
          privatelink_connection_id?: string | undefined
          route: 'dynamic' | 'public' | 'private' | 'privatelink'
          security_redirect_uris?: string[] | undefined
          shard_position?: number | undefined
          ssl?: boolean | undefined
          usage: 'disaster_recovery' | 'primary' | 'replica' | 'ha_replica' | 'shard' | 'node'
        }[]
      | undefined
    connection_info?: { [x: string]: unknown } | undefined
    connection_pools?:
      | {
          connection_uri: string
          database: string
          pool_mode: 'session' | 'transaction' | 'statement'
          pool_name: string
          pool_size: number
          username?: string | undefined
        }[]
      | undefined
    create_time: string
    databases?: string[] | undefined
    disk_space_mb?: number | undefined
    features?: { [x: string]: unknown } | undefined
    first_use_time?: string | undefined
    group_list: string[]
    is_cluster_plan?: boolean | undefined
    kafka_acl?:
      | {
          host: string
          id: string
          operation:
            | 'All'
            | 'Alter'
            | 'AlterConfigs'
            | 'ClusterAction'
            | 'Create'
            | 'CreateTokens'
            | 'Delete'
            | 'Describe'
            | 'DescribeConfigs'
            | 'DescribeTokens'
            | 'IdempotentWrite'
            | 'Read'
            | 'Write'
          pattern_type: 'LITERAL' | 'PREFIXED'
          permission_type: 'ALLOW' | 'DENY'
          principal: string
          resource_name: string
          resource_type:
            | 'Cluster'
            | 'DelegationToken'
            | 'Group'
            | 'Topic'
            | 'TransactionalId'
            | 'User'
        }[]
      | undefined
    maintenance?:
      | {
          controlled_switchover?:
            | {
                completed_at?: string | undefined
                enabled: boolean
                scheduled_start_time: string
                state:
                  | 'INACTIVE'
                  | 'PENDING'
                  | 'SCHEDULED'
                  | 'RUNNING'
                  | 'COMPLETED'
                  | 'COMPLETED_EARLY'
                termination_reason?: string | undefined
              }
            | undefined
          dow:
            | 'monday'
            | 'tuesday'
            | 'wednesday'
            | 'thursday'
            | 'friday'
            | 'saturday'
            | 'sunday'
            | 'never'
          enabled: boolean
          time: string
          updates: {
            deadline?: string | undefined
            description?: string | undefined
            documentation_link?: string | undefined
            impact?: string | undefined
            impact_portable_text?: string | undefined
            start_after?: string | undefined
            start_at?: string | undefined
          }[]
        }
      | undefined
    metadata?: { [x: string]: unknown } | undefined
    node_count?: number | undefined
    node_cpu_count?: number | undefined
    node_memory_mb?: number | undefined
    node_states?:
      | {
          availability_zone: string
          name: string
          progress_updates?:
            | {
                completed: boolean
                current?: number | undefined
                max?: number | undefined
                min?: number | undefined
                phase: 'prepare' | 'basebackup' | 'basebackup_prepare' | 'stream' | 'finalize'
                position?:
                  | {
                      backup_incremental: boolean
                      backup_name: string
                      chain_index: number
                      chain_total: number
                    }
                  | undefined
                unit?:
                  | 'binlogs'
                  | 'bytes_compressed'
                  | 'bytes_uncompressed'
                  | 'prepare_percent'
                  | 'wal_lsn'
                  | undefined
              }[]
            | undefined
          role?: 'master' | 'standby' | 'standby-leader' | 'read-replica' | undefined
          roles?: string | undefined
          shard?: { name?: string | undefined; position?: number | undefined } | undefined
          state: 'leaving' | 'running' | 'setting_up_vm' | 'syncing_data' | 'timing_out' | 'unknown'
        }[]
      | undefined
    plan: string
    project_vpc_id: string
    schema_registry_acl?:
      | {
          id?: string | undefined
          permission: 'schema_registry_read' | 'schema_registry_write'
          resource: string
          username: string
        }[]
      | undefined
    server_group?: { enabled?: boolean | undefined; type?: string | undefined } | undefined
    service_integrations: {
      active: boolean
      description: string
      dest_endpoint?: string | undefined
      dest_endpoint_id?: string | undefined
      dest_project: string
      dest_service?: string | undefined
      dest_service_type: string
      enabled: boolean
      integration_status?:
        | {
            state: {
              errors: string[]
              likely_error_cause?:
                | 'null'
                | 'destination'
                | 'integration'
                | 'source'
                | 'unknown'
                | undefined
              nodes: { [x: string]: unknown }
              status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
            }
            status_user_desc: string
          }
        | undefined
      integration_type: string
      service_integration_id: string
      source_endpoint?: string | undefined
      source_endpoint_id?: string | undefined
      source_project: string
      source_service: string
      source_service_type: string
      user_config?: { [x: string]: unknown } | undefined
    }[]
    service_name: string
    service_notifications?:
      | {
          level: 'notice' | 'warning'
          message: string
          metadata: {
            end_of_life_help_article_url?: string | undefined
            end_of_life_policy_url?: string | undefined
            service_end_of_life_time?: string | undefined
            upgrade_to_service_type?: string | undefined
            upgrade_to_version?: string | undefined
          }
          type: 'service_end_of_life' | 'service_powered_off_removal'
        }[]
      | undefined
    service_type: string
    service_type_description?: string | undefined
    service_uri: string
    service_uri_params?: { [x: string]: unknown } | undefined
    state: 'POWEROFF' | 'REBALANCING' | 'REBUILDING' | 'RUNNING'
    tags?: { [x: string]: unknown } | undefined
    tech_emails?: { email: string }[] | undefined
    termination_protection: boolean
    topics?:
      | {
          cleanup_policy: string
          min_insync_replicas: number
          partitions: number
          replication: number
          retention_bytes: number
          retention_hours: number
          state?: 'ACTIVE' | 'CONFIGURING' | 'DELETING' | undefined
          topic_name: string
        }[]
      | undefined
    update_time: string
    user_config: { [x: string]: unknown }
    users?:
      | {
          access_cert?: string | undefined
          access_cert_not_valid_after_time?: string | undefined
          access_control?:
            | {
                pg_allow_replication?: boolean | undefined
                redis_acl_categories?: string[] | undefined
                redis_acl_channels?: string[] | undefined
                redis_acl_commands?: string[] | undefined
                redis_acl_keys?: string[] | undefined
                valkey_acl_categories?: string[] | undefined
                valkey_acl_channels?: string[] | undefined
                valkey_acl_commands?: string[] | undefined
                valkey_acl_databases?: string[] | undefined
                valkey_acl_keys?: string[] | undefined
              }
            | undefined
          access_key?: string | undefined
          authentication?: 'null' | 'caching_sha2_password' | 'mysql_native_password' | undefined
          expiring_cert_not_valid_after_time?: string | undefined
          password: string
          password_encryption_type?: 'scram-sha-256' | 'md5' | 'unknown' | undefined
          password_updated_time?: string | undefined
          type: string
          username: string
        }[]
      | undefined
  }
}
type ServiceIntegrationCreateRequestBody = {
  dest_endpoint_id?: string | undefined
  dest_project?: string | undefined
  dest_service?: string | undefined
  integration_type:
    | 'alert_triage_kafka'
    | 'alertmanager'
    | 'application_service_credential'
    | 'autoscaler'
    | 'autoscaler_service'
    | 'caching'
    | 'clickhouse_credentials'
    | 'clickhouse_kafka'
    | 'clickhouse_postgresql'
    | 'dashboard'
    | 'datadog'
    | 'datahub_metadata_ingestion'
    | 'datasource'
    | 'disaster_recovery'
    | 'external_aws_cloudwatch_logs'
    | 'external_aws_cloudwatch_metrics'
    | 'external_elasticsearch_logs'
    | 'external_google_cloud_logging'
    | 'external_opensearch_logs'
    | 'flink'
    | 'flink_external_bigquery'
    | 'flink_external_kafka'
    | 'flink_external_postgresql'
    | 'internal_connectivity'
    | 'jolokia'
    | 'kafka_connect'
    | 'kafka_connect_postgresql'
    | 'kafka_inkless_postgresql'
    | 'kafka_logs'
    | 'kafka_mirrormaker'
    | 'logs'
    | 'metrics'
    | 'opensearch_cross_cluster_replication'
    | 'opensearch_cross_cluster_search'
    | 'opentelemetry'
    | 'pg_for_analytics_credentials'
    | 'postgresql_clickhouse_cdc'
    | 'prometheus'
    | 'read_replica'
    | 'rsyslog'
    | 'schema_registry_proxy'
    | 'service_composition'
    | 'stresstester'
    | 'thanos_distributed_query'
    | 'thanos_migrate'
    | 'thanos_object_storage'
    | 'thanoscompactor'
    | 'thanosquery'
    | 'thanosruler'
    | 'thanosstore'
    | 'vector'
    | 'vmalert'
  source_endpoint_id?: string | undefined
  source_project?: string | undefined
  source_service?: string | undefined
  user_config?: { [x: string]: unknown } | undefined
}
type ServiceIntegrationCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_integration: {
    active: boolean
    description: string
    dest_endpoint?: string | undefined
    dest_endpoint_id?: string | undefined
    dest_project: string
    dest_service?: string | undefined
    dest_service_type: string
    enabled: boolean
    integration_status?:
      | {
          state: {
            errors: string[]
            likely_error_cause?:
              | 'null'
              | 'destination'
              | 'integration'
              | 'source'
              | 'unknown'
              | undefined
            nodes: { [x: string]: unknown }
            status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
          }
          status_user_desc: string
        }
      | undefined
    integration_type: string
    service_integration_id: string
    source_endpoint?: string | undefined
    source_endpoint_id?: string | undefined
    source_project: string
    source_service: string
    source_service_type: string
    user_config?: { [x: string]: unknown } | undefined
  }
}
type ServiceIntegrationDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceIntegrationGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_integration: {
    active: boolean
    description: string
    dest_endpoint?: string | undefined
    dest_endpoint_id?: string | undefined
    dest_project: string
    dest_service?: string | undefined
    dest_service_type: string
    enabled: boolean
    integration_status?:
      | {
          state: {
            errors: string[]
            likely_error_cause?:
              | 'null'
              | 'destination'
              | 'integration'
              | 'source'
              | 'unknown'
              | undefined
            nodes: { [x: string]: unknown }
            status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
          }
          status_user_desc: string
        }
      | undefined
    integration_type: string
    service_integration_id: string
    source_endpoint?: string | undefined
    source_endpoint_id?: string | undefined
    source_project: string
    source_service: string
    source_service_type: string
    user_config?: { [x: string]: unknown } | undefined
  }
}
type ServiceIntegrationUpdateRequestBody = { user_config: { [x: string]: unknown } }
type ServiceIntegrationUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_integration: {
    active: boolean
    description: string
    dest_endpoint?: string | undefined
    dest_endpoint_id?: string | undefined
    dest_project: string
    dest_service?: string | undefined
    dest_service_type: string
    enabled: boolean
    integration_status?:
      | {
          state: {
            errors: string[]
            likely_error_cause?:
              | 'null'
              | 'destination'
              | 'integration'
              | 'source'
              | 'unknown'
              | undefined
            nodes: { [x: string]: unknown }
            status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
          }
          status_user_desc: string
        }
      | undefined
    integration_type: string
    service_integration_id: string
    source_endpoint?: string | undefined
    source_endpoint_id?: string | undefined
    source_project: string
    source_service: string
    source_service_type: string
    user_config?: { [x: string]: unknown } | undefined
  }
}
type ServiceIntegrationEndpointCreateRequestBody = {
  endpoint_name: string
  endpoint_type:
    | 'autoscaler'
    | 'autoscaler_service'
    | 'datadog'
    | 'external_aws_cloudwatch_logs'
    | 'external_aws_cloudwatch_metrics'
    | 'external_aws_s3'
    | 'external_azure_blob_storage'
    | 'external_clickhouse'
    | 'external_elasticsearch_logs'
    | 'external_google_cloud_bigquery'
    | 'external_google_cloud_logging'
    | 'external_kafka'
    | 'external_mysql'
    | 'external_object_storage_config'
    | 'external_opensearch_logs'
    | 'external_postgresql'
    | 'external_prometheus'
    | 'external_redis'
    | 'external_schema_registry'
    | 'external_sumologic_logs'
    | 'jolokia'
    | 'opentelemetry'
    | 'prometheus'
    | 'rsyslog'
  user_config: { [x: string]: unknown }
}
type ServiceIntegrationEndpointCreateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_integration_endpoint: {
    endpoint_config: { [x: string]: unknown }
    endpoint_id: string
    endpoint_name: string
    endpoint_type:
      | 'autoscaler'
      | 'autoscaler_service'
      | 'datadog'
      | 'external_aws_cloudwatch_logs'
      | 'external_aws_cloudwatch_metrics'
      | 'external_aws_s3'
      | 'external_azure_blob_storage'
      | 'external_clickhouse'
      | 'external_elasticsearch_logs'
      | 'external_google_cloud_bigquery'
      | 'external_google_cloud_logging'
      | 'external_kafka'
      | 'external_mysql'
      | 'external_object_storage_config'
      | 'external_opensearch_logs'
      | 'external_postgresql'
      | 'external_prometheus'
      | 'external_redis'
      | 'external_schema_registry'
      | 'external_sumologic_logs'
      | 'jolokia'
      | 'opentelemetry'
      | 'prometheus'
      | 'rsyslog'
    user_config: { [x: string]: unknown }
  }
}
type ServiceIntegrationEndpointListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_integration_endpoints: {
    endpoint_config: { [x: string]: unknown }
    endpoint_id: string
    endpoint_name: string
    endpoint_type:
      | 'autoscaler'
      | 'autoscaler_service'
      | 'datadog'
      | 'external_aws_cloudwatch_logs'
      | 'external_aws_cloudwatch_metrics'
      | 'external_aws_s3'
      | 'external_azure_blob_storage'
      | 'external_clickhouse'
      | 'external_elasticsearch_logs'
      | 'external_google_cloud_bigquery'
      | 'external_google_cloud_logging'
      | 'external_kafka'
      | 'external_mysql'
      | 'external_object_storage_config'
      | 'external_opensearch_logs'
      | 'external_postgresql'
      | 'external_prometheus'
      | 'external_redis'
      | 'external_schema_registry'
      | 'external_sumologic_logs'
      | 'jolokia'
      | 'opentelemetry'
      | 'prometheus'
      | 'rsyslog'
    user_config: { [x: string]: unknown }
  }[]
}
type ServiceIntegrationEndpointDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceIntegrationEndpointGetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_integration_endpoint: {
    endpoint_config: { [x: string]: unknown }
    endpoint_id: string
    endpoint_name: string
    endpoint_type:
      | 'autoscaler'
      | 'autoscaler_service'
      | 'datadog'
      | 'external_aws_cloudwatch_logs'
      | 'external_aws_cloudwatch_metrics'
      | 'external_aws_s3'
      | 'external_azure_blob_storage'
      | 'external_clickhouse'
      | 'external_elasticsearch_logs'
      | 'external_google_cloud_bigquery'
      | 'external_google_cloud_logging'
      | 'external_kafka'
      | 'external_mysql'
      | 'external_object_storage_config'
      | 'external_opensearch_logs'
      | 'external_postgresql'
      | 'external_prometheus'
      | 'external_redis'
      | 'external_schema_registry'
      | 'external_sumologic_logs'
      | 'jolokia'
      | 'opentelemetry'
      | 'prometheus'
      | 'rsyslog'
    user_config: { [x: string]: unknown }
  }
}
type ServiceIntegrationEndpointUpdateRequestBody = { user_config: { [x: string]: unknown } }
type ServiceIntegrationEndpointUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_integration_endpoint: {
    endpoint_config: { [x: string]: unknown }
    endpoint_id: string
    endpoint_name: string
    endpoint_type:
      | 'autoscaler'
      | 'autoscaler_service'
      | 'datadog'
      | 'external_aws_cloudwatch_logs'
      | 'external_aws_cloudwatch_metrics'
      | 'external_aws_s3'
      | 'external_azure_blob_storage'
      | 'external_clickhouse'
      | 'external_elasticsearch_logs'
      | 'external_google_cloud_bigquery'
      | 'external_google_cloud_logging'
      | 'external_kafka'
      | 'external_mysql'
      | 'external_object_storage_config'
      | 'external_opensearch_logs'
      | 'external_postgresql'
      | 'external_prometheus'
      | 'external_redis'
      | 'external_schema_registry'
      | 'external_sumologic_logs'
      | 'jolokia'
      | 'opentelemetry'
      | 'prometheus'
      | 'rsyslog'
    user_config: { [x: string]: unknown }
  }
}
type ServiceIntegrationEndpointTypesResponse = {
  endpoint_types: {
    endpoint_type: string
    service_types: string[]
    title: string
    user_config_schema: { [x: string]: unknown }
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ServiceIntegrationListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  service_integrations: {
    active: boolean
    description: string
    dest_endpoint?: string | undefined
    dest_endpoint_id?: string | undefined
    dest_project: string
    dest_service?: string | undefined
    dest_service_type: string
    enabled: boolean
    integration_status?:
      | {
          state: {
            errors: string[]
            likely_error_cause?:
              | 'null'
              | 'destination'
              | 'integration'
              | 'source'
              | 'unknown'
              | undefined
            nodes: { [x: string]: unknown }
            status: 'failed' | 'inactive' | 'running' | 'starting' | 'unknown'
          }
          status_user_desc: string
        }
      | undefined
    integration_type: string
    service_integration_id: string
    source_endpoint?: string | undefined
    source_endpoint_id?: string | undefined
    source_project: string
    source_service: string
    source_service_type: string
    user_config?: { [x: string]: unknown } | undefined
  }[]
}
type ServiceIntegrationTypesResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  integration_types: {
    dest_description: string
    dest_service_type: string
    dest_service_types: string[]
    integration_type: string
    source_description: string
    source_service_types: string[]
    user_config_schema: { [x: string]: unknown }
  }[]
  message?: string | undefined
}
type ProjectStaticIPAssociateRequestBody = { service_name: string }
type ProjectStaticIPAssociateResponse = {
  cloud_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  ip_address: string
  message?: string | undefined
  service_name: string
  state: 'creating' | 'created' | 'available' | 'assigned' | 'deleting' | 'deleted'
  static_ip_address_id: string
  termination_protection: boolean
}
type ProjectStaticIPDissociateResponse = {
  cloud_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  ip_address: string
  message?: string | undefined
  service_name: string
  state: 'creating' | 'created' | 'available' | 'assigned' | 'deleting' | 'deleted'
  static_ip_address_id: string
  termination_protection: boolean
}
type ProjectStaticIPAvailabilityListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  static_ip_address_availability: { cloud_name: string; price_usd: string }[]
}
type ProjectStaticIPPatchRequestBody = { termination_protection?: boolean | undefined }
type ProjectStaticIPPatchResponse = {
  cloud_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  ip_address: string
  message?: string | undefined
  service_name: string
  state: 'creating' | 'created' | 'available' | 'assigned' | 'deleting' | 'deleted'
  static_ip_address_id: string
  termination_protection: boolean
}
type StaticIPDeleteResponse = {
  cloud_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  ip_address: string
  message?: string | undefined
  service_name: string
  state: 'creating' | 'created' | 'available' | 'assigned' | 'deleting' | 'deleted'
  static_ip_address_id: string
  termination_protection: boolean
}
type StaticIPCreateRequestBody = {
  cloud_name: string
  termination_protection?: boolean | undefined
}
type StaticIPCreateResponse = {
  cloud_name: string
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  ip_address: string
  message?: string | undefined
  service_name: string
  state: 'creating' | 'created' | 'available' | 'assigned' | 'deleting' | 'deleted'
  static_ip_address_id: string
  termination_protection: boolean
}
type StaticIPListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  static_ips: {
    cloud_name: string
    ip_address: string
    service_name: string
    state: 'creating' | 'created' | 'available' | 'assigned' | 'deleting' | 'deleted'
    static_ip_address_id: string
    termination_protection: boolean
  }[]
}
type UpgradePipelineStepCreateRequestBody = {
  auto_validation_delay_days?: number | undefined
  destination_project_name: string
  destination_service_name: string
  source_project_name: string
  source_service_name: string
}
type UpgradePipelineStepCreateResponse = {
  auto_validation_delay_days: number
  destination_project_name: string
  destination_service_name: string
  last_validation: { comment: string; validated_at: string; validated_by_user: string }
  source_project_name: string
  source_service_name: string
  step_id: string
}
type UpgradePipelineStepListResponse = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  prev?: string | undefined
  steps: {
    auto_validation_delay_days: number
    destination_project_name: string
    destination_service_name: string
    last_validation: { comment: string; validated_at: string; validated_by_user: string }
    source_project_name: string
    source_service_name: string
    step_id: string
  }[]
  total_count?: number | undefined
}
type UpgradePipelineStepGetResponse = {
  auto_validation_delay_days: number
  destination_project_name: string
  destination_service_name: string
  last_validation: { comment: string; validated_at: string; validated_by_user: string }
  source_project_name: string
  source_service_name: string
  step_id: string
}
type UpgradePipelineStepUpdateRequestBody = { auto_validation_delay_days?: number | undefined }
type UpgradePipelineStepUpdateResponse = {
  auto_validation_delay_days: number
  destination_project_name: string
  destination_service_name: string
  last_validation: { comment: string; validated_at: string; validated_by_user: string }
  source_project_name: string
  source_service_name: string
  step_id: string
}
type UpgradePipelineStepValidateRequestBody = { comment?: string | undefined }
type AccessTokenCreateRequestBody = {
  description: string
  extend_when_used?: boolean | undefined
  ip_allowlist?: string[] | undefined
  max_age_seconds?: number | undefined
  scopes?: string[] | undefined
}
type AccessTokenCreateResponse = {
  create_time: string
  created_manually: boolean
  currently_active?: boolean | undefined
  description?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  expiry_time?: string | undefined
  extend_when_used: boolean
  full_token: string
  ip_allowlist?: string[] | undefined
  last_ip?: string | undefined
  last_used_time?: string | undefined
  last_user_agent?: string | undefined
  last_user_agent_human_readable?: string | undefined
  max_age_seconds: number
  message?: string | undefined
  scopes?: string[] | undefined
  token_prefix: string
}
type AccessTokenListResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  tokens: {
    create_time: string
    created_manually: boolean
    currently_active?: boolean | undefined
    description?: string | undefined
    expiry_time?: string | undefined
    extend_when_used: boolean
    ip_allowlist?: string[] | undefined
    last_ip?: string | undefined
    last_used_time?: string | undefined
    last_user_agent?: string | undefined
    last_user_agent_human_readable?: string | undefined
    max_age_seconds: number
    scopes?: string[] | undefined
    token_prefix: string
  }[]
}
type AccessTokenRevokeResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type AccessTokenUpdateRequestBody = { description: string }
type AccessTokenUpdateResponse = {
  create_time: string
  created_manually?: boolean | undefined
  currently_active?: boolean | undefined
  description?: string | undefined
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  expiry_time?: string | undefined
  extend_when_used: boolean
  ip_allowlist?: string[] | undefined
  last_ip?: string | undefined
  last_used_time?: string | undefined
  last_user_agent?: string | undefined
  last_user_agent_human_readable?: string | undefined
  max_age_seconds: number
  message?: string | undefined
  scopes?: string[] | undefined
  token_prefix: string
}
type CheckPasswordStrengthExistingUserRequestBody = { new_password: string; old_password: string }
type CheckPasswordStrengthExistingUserResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  password_strength: { is_acceptable?: boolean | undefined; message: string; score: number }
}
type CheckPasswordStrengthNewUserRequestBody = {
  email?: string | undefined
  password: string
  real_name?: string | undefined
}
type CheckPasswordStrengthNewUserResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  password_strength: { is_acceptable?: boolean | undefined; message: string; score: number }
}
type OrganizationMemberGroupsListResponse = {
  user_groups: {
    create_time: string
    description: string
    managed_by_scim: boolean
    update_time: string
    user_group_id: string
    user_group_name: string
  }[]
}
type OrganizationMemberPermissionsListResponse = {
  permissions: {
    permissions: string[]
    resource_id: string
    resource_type: 'project' | 'organization' | 'organization_unit' | 'application'
  }[]
}
type OrganizationUserAuthenticationMethodsListResponse = {
  authentication_methods: {
    is_enabled_2fa?: boolean | undefined
    last_used_time?: string | undefined
    local_provider_id?: string | undefined
    method_id?: string | undefined
    name?: string | undefined
    organization_id?: string | undefined
    remote_provider_id: string
    type?: string | undefined
    user_email?: string | undefined
    user_id?: string | undefined
  }[]
}
type OrganizationUserGetResponse = {
  is_super_admin: boolean
  join_time: string
  last_activity_time: string
  state: 'active' | 'deactivated' | 'deleted'
  user_id: string
  user_info: {
    city?: string | undefined
    country?: string | undefined
    create_time: string
    department?: string | undefined
    is_application_user: boolean
    job_title?: string | undefined
    managed_by_scim: boolean
    managing_organization_id?: string | undefined
    real_name: string
    state: string
    user_email: string
  }
}
type OrganizationUserUpdateRequestBody = {
  city?: string | undefined
  country?: string | undefined
  department?: string | undefined
  is_super_admin?: boolean | undefined
  job_title?: string | undefined
  real_name?: string | undefined
  state?: 'active' | 'deactivated' | 'deleted' | undefined
}
type OrganizationUserUpdateResponse = {
  is_super_admin: boolean
  join_time: string
  last_activity_time: string
  state: 'active' | 'deactivated' | 'deleted'
  user_id: string
  user_info: {
    city?: string | undefined
    country?: string | undefined
    create_time: string
    department?: string | undefined
    is_application_user: boolean
    job_title?: string | undefined
    managed_by_scim: boolean
    managing_organization_id?: string | undefined
    real_name: string
    state: string
    user_email: string
  }
}
type OrganizationUserListResponse = {
  users: {
    is_super_admin: boolean
    join_time: string
    last_activity_time: string
    state: 'active' | 'deactivated' | 'deleted'
    user_id: string
    user_info: {
      city?: string | undefined
      country?: string | undefined
      create_time: string
      department?: string | undefined
      is_application_user: boolean
      job_title?: string | undefined
      managed_by_scim: boolean
      managing_organization_id?: string | undefined
      real_name: string
      state: string
      user_email: string
    }
  }[]
}
type OrganizationUserTokensListResponse = {
  tokens: {
    description: string
    ip_allowlist: string[]
    last_ip: string
    last_used_time: string
    last_user_agent: string
    token_prefix: string
  }[]
}
type TwoFactorAuthConfigureRequestBody = { method: string; password: string }
type TwoFactorAuthConfigureResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  method: string
  qrcode?: string | undefined
  uri?: string | undefined
}
type TwoFactorAuthConfigureOTPRequestBody = { otp: string; password: string; uri: string }
type TwoFactorAuthConfigureOTPResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  method: string
  token: string
}
type UserAccountInvitesAcceptResponse = {
  account_invites: {
    account_id: string
    account_name: string
    create_time: string
    invited_by_user_email: string
    team_id: string
    team_name: string
    user_email: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserAccountInvitesListResponse = {
  account_invites: {
    account_id: string
    account_name: string
    create_time: string
    invited_by_user_email: string
    team_id: string
    team_name: string
    user_email: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserAccountInvitesRejectResponse = {
  account_invites: {
    account_id: string
    account_name: string
    create_time: string
    invited_by_user_email: string
    team_id: string
    team_name: string
    user_email: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserAuthRequestBody = { email: string; otp?: string | undefined; password: string }
type UserAuthResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  return_url?: string | undefined
  state: string
  tenant?: string | undefined
  token: string
  user_email: string
}
type UserAuthLoginOptionsRequestBody = { email?: string | undefined }
type UserAuthLoginOptionsResponse = {
  None?: { [x: string]: unknown }[] | undefined
  action:
    | 'azure_oauth'
    | 'github_oauth'
    | 'google_oauth'
    | 'hasura_oauth'
    | 'password'
    | 'saml'
    | 'signup'
  method?: 'POST' | 'GET' | undefined
  name?: string | undefined
  redirect_url?: string | undefined
}
type UserAuthenticationMethodDeleteResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserAuthenticationMethodsListResponse = {
  authentication_methods: {
    authentication_method_account_id: string
    create_time: string
    currently_active: boolean
    delete_time: string
    last_used_time: string
    method_id: string
    name?: string | undefined
    public_remote_identity: string
    remote_provider_id: string
    state: 'active' | 'deleted'
    update_time: string
    user_email: string
  }[]
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserExpireTokensResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserInfoResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  user: {
    auth: string[]
    city?: string | undefined
    country?: string | undefined
    create_time?: string | undefined
    department?: string | undefined
    features?: { [x: string]: unknown } | undefined
    invitations: {
      invite_code: string
      invite_time: string
      inviting_user_email: string
      project_name: string
    }[]
    job_title?: string | undefined
    managed_by_scim?: boolean | undefined
    managing_organization_id?: string | undefined
    project_membership: {
      ANY?:
        | 'admin'
        | 'application:access:connect'
        | 'developer'
        | 'operator'
        | 'organization:app_users:write'
        | 'organization:billing:read'
        | 'organization:billing:write'
        | 'organization:domains:write'
        | 'organization:event_logs:read'
        | 'organization:groups:read'
        | 'organization:groups:write'
        | 'organization:networking:read'
        | 'organization:networking:write'
        | 'organization:projects:write'
        | 'organization:sustainability:read'
        | 'organization:users:read'
        | 'organization:users:write'
        | 'project:ai_gateway_keys:read'
        | 'project:ai_gateway_keys:write'
        | 'project:audit_logs:read'
        | 'project:event_logs:read'
        | 'project:integrations:read'
        | 'project:integrations:write'
        | 'project:networking:read'
        | 'project:networking:write'
        | 'project:permissions:read'
        | 'project:services:read'
        | 'project:services:write'
        | 'read_only'
        | 'role:organization:admin'
        | 'role:project:admin'
        | 'role:project:manager'
        | 'role:project:read'
        | 'role:services:maintenance'
        | 'role:services:recover'
        | 'service:configuration:write'
        | 'service:data:write'
        | 'service:logs:read'
        | 'service:metrics:read'
        | 'service:secrets:read'
        | 'service:users:write'
        | undefined
    }
    project_memberships: { ANY?: string[] | undefined }
    projects: string[]
    real_name: string
    state: string
    tenant: string
    token_validity_begin?: string | undefined
    user: string
    user_id: string
  }
}
type UserUpdateRequestBody = {
  city?: string | undefined
  country?: string | undefined
  department?: string | undefined
  job_title?: string | undefined
  real_name: string
}
type UserUpdateResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  user: {
    auth: string[]
    city?: string | undefined
    country?: string | undefined
    create_time?: string | undefined
    department?: string | undefined
    features?: { [x: string]: unknown } | undefined
    invitations: {
      invite_code: string
      invite_time: string
      inviting_user_email: string
      project_name: string
    }[]
    job_title?: string | undefined
    managed_by_scim?: boolean | undefined
    managing_organization_id?: string | undefined
    project_membership: {
      ANY?:
        | 'admin'
        | 'application:access:connect'
        | 'developer'
        | 'operator'
        | 'organization:app_users:write'
        | 'organization:billing:read'
        | 'organization:billing:write'
        | 'organization:domains:write'
        | 'organization:event_logs:read'
        | 'organization:groups:read'
        | 'organization:groups:write'
        | 'organization:networking:read'
        | 'organization:networking:write'
        | 'organization:projects:write'
        | 'organization:sustainability:read'
        | 'organization:users:read'
        | 'organization:users:write'
        | 'project:ai_gateway_keys:read'
        | 'project:ai_gateway_keys:write'
        | 'project:audit_logs:read'
        | 'project:event_logs:read'
        | 'project:integrations:read'
        | 'project:integrations:write'
        | 'project:networking:read'
        | 'project:networking:write'
        | 'project:permissions:read'
        | 'project:services:read'
        | 'project:services:write'
        | 'read_only'
        | 'role:organization:admin'
        | 'role:project:admin'
        | 'role:project:manager'
        | 'role:project:read'
        | 'role:services:maintenance'
        | 'role:services:recover'
        | 'service:configuration:write'
        | 'service:data:write'
        | 'service:logs:read'
        | 'service:metrics:read'
        | 'service:secrets:read'
        | 'service:users:write'
        | undefined
    }
    project_memberships: { ANY?: string[] | undefined }
    projects: string[]
    real_name: string
    state: string
    tenant: string
    token_validity_begin?: string | undefined
    user: string
    user_id: string
  }
}
type UserLogoutResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserPasswordChangeRequestBody = { new_password: string; password: string }
type UserPasswordChangeResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
  token: string
}
type UserPasswordResetRequestBody = { new_password: string }
type UserPasswordResetResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserPasswordResetRequestRequestBody = { email: string }
type UserPasswordResetRequestResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type UserVerifyEmailResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  invite_details: { user_email: string }
  message?: string | undefined
}
type ValidateCreditCodeResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
type ValidateReferralCodeResponse = {
  errors?: { message: string; more_info?: string | undefined; status: number }[] | undefined
  message?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/project/:project/ai-gateway/keys': {
      $post:
        | {
            input: { param: { project: string } } & { json: AIGatewayKeyCreateRequestBody }
            output: AIGatewayKeyCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } } & { json: AIGatewayKeyCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'bad_request' | 'ai_gateway_invalid_key_owner' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string } } & { json: AIGatewayKeyCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'request_forbidden'
                      | 'feature_not_enabled'
                      | 'ai_gateway_key_budget_above_default'
                      | 'ai_gateway_key_budget_unlimited_needs_organization_admin'
                      | 'ai_gateway_key_budget_exception_needs_organization_admin'
                      | 'ai_gateway_key_budget_reset_needs_organization_admin'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } } & { json: AIGatewayKeyCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_budget_setup_required' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string } } & { json: AIGatewayKeyCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { project: string } } & {
              query: {
                include_revoked?: boolean | undefined
                include_expired?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
                owner_user_id?: string | undefined
                owner_type?: 'human' | 'application_user' | undefined
              }
            }
            output: AIGatewayKeyListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } } & {
              query: {
                include_revoked?: boolean | undefined
                include_expired?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
                owner_user_id?: string | undefined
                owner_type?: 'human' | 'application_user' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string } } & {
              query: {
                include_revoked?: boolean | undefined
                include_expired?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
                owner_user_id?: string | undefined
                owner_type?: 'human' | 'application_user' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } } & {
              query: {
                include_revoked?: boolean | undefined
                include_expired?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
                owner_user_id?: string | undefined
                owner_type?: 'human' | 'application_user' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/project/:project/ai-gateway/keys/:key_id': {
      $get:
        | {
            input: { param: { project: string; key_id: string } }
            output: AIGatewayKeyGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; key_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; key_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_key_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; key_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { project: string; key_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; key_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_key_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; key_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_key_not_active' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; key_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { project: string; key_id: string } } & {
              json: AIGatewayKeyUpdateRequestBody
            }
            output: AIGatewayKeyUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; key_id: string } } & {
              json: AIGatewayKeyUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'bad_request' | 'ai_gateway_invalid_key_owner' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; key_id: string } } & {
              json: AIGatewayKeyUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'request_forbidden'
                      | 'feature_not_enabled'
                      | 'ai_gateway_key_budget_above_default'
                      | 'ai_gateway_key_budget_unlimited_needs_organization_admin'
                      | 'ai_gateway_key_budget_exception_needs_organization_admin'
                      | 'ai_gateway_key_budget_reset_needs_organization_admin'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; key_id: string } } & {
              json: AIGatewayKeyUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_key_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; key_id: string } } & {
              json: AIGatewayKeyUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'ai_gateway_key_not_active'
                      | 'ai_gateway_budget_setup_required'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; key_id: string } } & {
              json: AIGatewayKeyUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/project/:project/ai-gateway/key-owners': {
      $get:
        | {
            input: { param: { project: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
              }
            }
            output: AIGatewayKeyOwnerListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                order_by?: 'asc' | 'desc' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'request_forbidden' | 'feature_not_enabled' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/project/:project/ai-gateway/models': {
      $get:
        | {
            input: { param: { project: string } }
            output: AIGatewayModelListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/:organization_id/ai-gateway/budget': {
      $put:
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationBudgetSetRequestBody
            }
            output: AIGatewayOrganizationBudgetSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationBudgetSetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationBudgetSetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'feature_not_enabled' | 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationBudgetSetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_key_default_monthly_required' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationBudgetSetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/:organization_id/ai-gateway/budgets': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: AIGatewayOrganizationBudgetsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'feature_not_enabled' | 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/:organization_id/ai-gateway/keys/budgets': {
      $patch:
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationKeyBudgetsUpdateRequestBody
            }
            output: AIGatewayOrganizationKeyBudgetsUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationKeyBudgetsUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationKeyBudgetsUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'feature_not_enabled' | 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AIGatewayOrganizationKeyBudgetsUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/:organization_id/ai-gateway/keys': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                project_name?: string | undefined
                owner_user_id?: string | undefined
                owner_type?: 'human' | 'application_user' | undefined
                include_revoked?: boolean | undefined
                include_expired?: boolean | undefined
              }
            }
            output: AIGatewayOrganizationKeyListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                project_name?: string | undefined
                owner_user_id?: string | undefined
                owner_type?: 'human' | 'application_user' | undefined
                include_revoked?: boolean | undefined
                include_expired?: boolean | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                project_name?: string | undefined
                owner_user_id?: string | undefined
                owner_type?: 'human' | 'application_user' | undefined
                include_revoked?: boolean | undefined
                include_expired?: boolean | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'feature_not_enabled' | 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                project_name?: string | undefined
                owner_user_id?: string | undefined
                owner_type?: 'human' | 'application_user' | undefined
                include_revoked?: boolean | undefined
                include_expired?: boolean | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organization/:organization_id/ai-gateway/owner/:owner_user_id/budget': {
      $put:
        | {
            input: { param: { organization_id: string; owner_user_id: string } }
            output: AIGatewayOrganizationOwnerBudgetSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; owner_user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'bad_request' | 'ai_gateway_invalid_key_owner' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; owner_user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'feature_not_enabled' | 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; owner_user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/project/:project/ai-gateway/budget': {
      $get:
        | {
            input: { param: { project: string } }
            output: AIGatewayProjectBudgetGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { project: string } }
            output: AIGatewayProjectBudgetSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'feature_not_enabled'
                      | 'ai_gateway_project_budget_needs_organization_admin'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'ai_gateway_budget_setup_required'
                      | 'ai_gateway_project_in_other_organization'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/project/:project/ai-gateway/usage': {
      $get:
        | {
            input: { param: { project: string } } & {
              query: {
                key_id?: string | undefined
                starting_time?: string | undefined
                ending_time?: string | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
              }
            }
            output: AIGatewayUsageGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } } & {
              query: {
                key_id?: string | undefined
                starting_time?: string | undefined
                ending_time?: string | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'invalid_granularity' | 'invalid_time_range' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string } } & {
              query: {
                key_id?: string | undefined
                starting_time?: string | undefined
                ending_time?: string | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } } & {
              query: {
                key_id?: string | undefined
                starting_time?: string | undefined
                ending_time?: string | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_key_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string } } & {
              query: {
                key_id?: string | undefined
                starting_time?: string | undefined
                ending_time?: string | undefined
                granularity?: 'minute' | 'hour' | 'day' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'ai_gateway_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/account/:account_id/payment_methods': {
      $post: {
        input: { param: { account_id: string } }
        output: AccountAttachPaymentMethodResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { account_id: string } }
        output: AccountPaymentMethodsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/authentication': {
      $post: {
        input: { param: { account_id: string } } & {
          json: AccountAuthenticationMethodCreateRequestBody
        }
        output: AccountAuthenticationMethodCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { account_id: string } }
        output: AccountAuthenticationMethodsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/authentication/:account_authentication_method_id': {
      $delete: {
        input: { param: { account_id: string; account_authentication_method_id: string } }
        output: AccountAuthenticationMethodDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { account_id: string; account_authentication_method_id: string } }
        output: AccountAuthenticationMethodGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { account_id: string; account_authentication_method_id: string } } & {
          json: AccountAuthenticationMethodUpdateRequestBody
        }
        output: AccountAuthenticationMethodUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/billing-group': {
      $get: {
        input: { param: { account_id: string } }
        output: AccountBillingGroupListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account': {
      $post:
        | {
            input: { json: AccountCreateRequestBody }
            output: AccountCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'marketplace_subscription_already_linked_to_organization'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'account_unit_cannot_create_for_personal_tier' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $get: { input: {}; output: AccountListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/account/:account_id': {
      $delete: {
        input: { param: { account_id: string } }
        output: AccountDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { account_id: string } }
        output: AccountGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { account_id: string } } & { json: AccountUpdateRequestBody }
        output: AccountUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/events': {
      $get: {
        input: { param: { account_id: string } }
        output: AccountEventListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/parent_account': {
      $put: {
        input: { param: { account_id: string } } & { json: AccountMoveRequestBody }
        output: AccountMoveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/payment_method/:card_id': {
      $delete: {
        input: { param: { account_id: string; card_id: string } }
        output: AccountPaymentMethodDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/projects': {
      $get: {
        input: { param: { account_id: string } }
        output: AccountProjectsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/project/:project_name/teams': {
      $get: {
        input: { param: { account_id: string; project_name: string } }
        output: AccountProjectsTeamsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/teams': {
      $post:
        | {
            input: { param: { account_id: string } }
            output: AccountTeamCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'team_names_must_be_unique' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'feature_not_enabled' | 'team_limit_exceeded' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'account_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { account_id: string } }
        output: AccountTeamListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/team/:team_id': {
      $delete: {
        input: { param: { account_id: string; team_id: string } }
        output: AccountTeamDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { account_id: string; team_id: string } }
        output: AccountTeamGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { account_id: string; team_id: string } } & {
          json: AccountTeamUpdateRequestBody
        }
        output: AccountTeamUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/team/:team_id/invites': {
      $get: {
        input: { param: { account_id: string; team_id: string } }
        output: AccountTeamInvitesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/team/:team_id/invites/:user_email': {
      $delete: {
        input: { param: { account_id: string; team_id: string; user_email: string } }
        output: AccountTeamMemberCancelInviteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/invite/:invite_verification_code': {
      $post: {
        input: { param: { account_id: string; invite_verification_code: string } }
        output: AccountTeamMemberVerifyInviteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/team/:team_id/member/:user_id': {
      $delete: {
        input: { param: { account_id: string; team_id: string; user_id: string } }
        output: AccountTeamMembersDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/team/:team_id/members': {
      $post: {
        input: { param: { account_id: string; team_id: string } }
        output: AccountTeamMembersInviteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { account_id: string; team_id: string } }
        output: AccountTeamMembersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/team/:team_id/project/:project': {
      $post: {
        input: { param: { account_id: string; team_id: string; project: string } } & {
          json: AccountTeamProjectAssociateRequestBody
        }
        output: AccountTeamProjectAssociateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { account_id: string; team_id: string; project: string } } & {
          json: AccountTeamProjectAssociationUpdateRequestBody
        }
        output: AccountTeamProjectAssociationUpdateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { account_id: string; team_id: string; project: string } }
        output: AccountTeamProjectDisassociateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/team/:team_id/projects': {
      $get: {
        input: { param: { account_id: string; team_id: string } }
        output: AccountTeamProjectListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/user/:user_id/projects': {
      $get: {
        input: { param: { account_id: string; user_id: string } }
        output: AccountUserProjectsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/user/:user_id/teams': {
      $get: {
        input: { param: { account_id: string; user_id: string } }
        output: AccountUserTeamsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account/:account_id/users/search': {
      $post: {
        input: { param: { account_id: string } } & { json: AccountUsersSearchRequestBody }
        output: AccountUsersSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/application-users/:user_id/access-tokens': {
      $post: {
        input: { param: { organization_id: string; user_id: string } } & {
          json: ApplicationUserAccessTokenCreateRequestBody
        }
        output: ApplicationUserAccessTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { organization_id: string; user_id: string } }
        output: ApplicationUserAccessTokensListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/application-users/:user_id/access-tokens/:token_prefix': {
      $delete: {
        input: { param: { organization_id: string; user_id: string; token_prefix: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/application-users': {
      $post: {
        input: { param: { organization_id: string } } & { json: ApplicationUserCreateRequestBody }
        output: ApplicationUserCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { organization_id: string } }
        output: ApplicationUsersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/application-users/:user_id': {
      $delete: {
        input: { param: { organization_id: string; user_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { organization_id: string; user_id: string } }
            output: ApplicationUserGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_application_user' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_is_internal_user' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'organization_not_found'
                      | 'organization_user_not_found'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: ApplicationUserUpdateRequestBody
            }
            output: ApplicationUserUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: ApplicationUserUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_application_user' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: ApplicationUserUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_is_internal_user' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: ApplicationUserUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'organization_not_found'
                      | 'organization_user_not_found'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/authentication-methods/:authentication_method_id/domains': {
      $put:
        | {
            input: { param: { organization_id: string; authentication_method_id: string } } & {
              json: OrganizationAuthDomainLinkRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_mismatch' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; authentication_method_id: string } } & {
              json: OrganizationAuthDomainLinkRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; authentication_method_id: string } } & {
              json: OrganizationAuthDomainLinkRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string; authentication_method_id: string } }
            output: OrganizationAuthDomainListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; authentication_method_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/authentication-methods/:authentication_method_id/domains/:domain_id': {
      $delete:
        | {
            input: {
              param: {
                organization_id: string
                authentication_method_id: string
                domain_id: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                organization_id: string
                authentication_method_id: string
                domain_id: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/billing-group': {
      $post: {
        input: { json: BillingGroupCreateRequestBody }
        output: BillingGroupCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: BillingGroupListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/billing-group/:billing_group_id/credits': {
      $post: {
        input: { param: { billing_group_id: string } } & {
          json: BillingGroupCreditsClaimRequestBody
        }
        output: BillingGroupCreditsClaimResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { billing_group_id: string } }
        output: BillingGroupCreditsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id': {
      $delete: {
        input: { param: { billing_group_id: string } }
        output: BillingGroupDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { billing_group_id: string } }
        output: BillingGroupGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { billing_group_id: string } } & { json: BillingGroupUpdateRequestBody }
        output: BillingGroupUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id/events': {
      $get: {
        input: { param: { billing_group_id: string } }
        output: BillingGroupEventListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/billing-group/:billing_group_id/fee-breakdown': {
      $get:
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              query: { since?: string | undefined }
            }
            output: BillingGroupFeeBreakdownAggregateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              query: { since?: string | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_date_format' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              query: { since?: string | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'billing_group_not_found' | 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/billing-group/:billing_group_id/fee-breakdown/download': {
      $get:
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              query: { since?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              query: { since?: string | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_date_format' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              query: { since?: string | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'billing_group_not_found' | 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              query: { since?: string | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'too_many_records_to_download' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/billing-group/:billing_group_id/invoice/:invoice_number/csv': {
      $get: {
        input: { param: { billing_group_id: string; invoice_number: string } } & {
          query: { cookie: string; project?: string | undefined }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id/invoice/:invoice_number/:download_cookie': {
      $get: {
        input: {
          param: { billing_group_id: string; invoice_number: string; download_cookie: string }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id/invoice/:invoice_number': {
      $get: {
        input: { param: { billing_group_id: string; invoice_number: string } }
        output: BillingGroupInvoiceGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id/invoice/:invoice_number/lines': {
      $get: {
        input: { param: { billing_group_id: string; invoice_number: string } }
        output: BillingGroupInvoiceLinesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id/invoice': {
      $get: {
        input: { param: { billing_group_id: string } }
        output: BillingGroupInvoiceListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id/project-assign/:project': {
      $post: {
        input: { param: { billing_group_id: string; project: string } }
        output: BillingGroupProjectAssignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id/projects': {
      $get: {
        input: { param: { billing_group_id: string } }
        output: BillingGroupProjectListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billing-group/:billing_group_id/projects-assign': {
      $post: {
        input: { param: { billing_group_id: string } }
        output: BillingGroupProjectsAssignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invoices/:invoice_number': {
      $get: {
        input: { param: { invoice_number: string } }
        output: InvoiceGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/addresses': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationAddressCreateRequestBody
            }
            output: OrganizationAddressCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationAddressCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationAddressCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string } }
            output: OrganizationAddressListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/address/:address_id': {
      $delete:
        | {
            input: { param: { organization_id: string; address_id: string } }
            output: OrganizationAddressDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; address_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; address_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string; address_id: string } }
            output: OrganizationAddressGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; address_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organization_id: string; address_id: string } } & {
              json: OrganizationAddressUpdateRequestBody
            }
            output: OrganizationAddressUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; address_id: string } } & {
              json: OrganizationAddressUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; address_id: string } } & {
              json: OrganizationAddressUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/clouds': {
      $get: { input: {}; output: ListCloudsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/project/:project/clouds': {
      $get: {
        input: { param: { project: string } } & {
          query: { sort_by_proximity?: boolean | undefined }
        }
        output: ListProjectCloudsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenants/:tenant/privatelink-availability': {
      $get: {
        input: { param: { tenant: string } }
        output: PublicPrivatelinkAvailabilityListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenants/:tenant/static-ip-availability': {
      $get: {
        input: { param: { tenant: string } }
        output: PublicStaticIPAvailabilityListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/custom-cloud-environments': {
      $post: {
        input: { param: { organization_id: string } } & {
          json: CustomCloudEnvironmentCreateRequestBody
        }
        output: CustomCloudEnvironmentCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/custom-cloud-environments/:custom_cloud_environment_id': {
      $delete:
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } }
            output: CustomCloudEnvironmentDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_cloud_environment_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } }
            output: CustomCloudEnvironmentGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_cloud_environment_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentUpdateRequestBody
            }
            output: CustomCloudEnvironmentUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_cloud_environment_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/custom-cloud-environments/:custom_cloud_environment_id/permissions': {
      $get:
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } }
            output: CustomCloudEnvironmentPermissionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_cloud_environment_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentPermissionsSetRequestBody
            }
            output: CustomCloudEnvironmentPermissionsSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentPermissionsSetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentPermissionsSetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_cloud_environment_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/custom-cloud-environments/:custom_cloud_environment_id/provision': {
      $post:
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentProvisionRequestBody
            }
            output: CustomCloudEnvironmentProvisionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentProvisionRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_cloud_environment_cloud_not_supported' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentProvisionRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; custom_cloud_environment_id: string } } & {
              json: CustomCloudEnvironmentProvisionRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_cloud_environment_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/domains': {
      $post: {
        input: { param: { organization_id: string } } & { json: OrganizationDomainAddRequestBody }
        output: OrganizationDomainAddResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { organization_id: string } }
        output: OrganizationDomainsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/domains/:domain_id': {
      $patch: {
        input: { param: { organization_id: string; domain_id: string } } & {
          json: OrganizationDomainUpdateRequestBody
        }
        output: OrganizationDomainUpdateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { organization_id: string; domain_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/domains/:domain_id/verify': {
      $post: {
        input: { param: { organization_id: string; domain_id: string } }
        output: OrganizationDomainVerifyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user-groups': {
      $post: {
        input: { param: { organization_id: string } } & { json: UserGroupCreateRequestBody }
        output: UserGroupCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { organization_id: string } }
        output: UserGroupsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user-groups/:user_group_id': {
      $delete: {
        input: { param: { organization_id: string; user_group_id: string } }
        output: {
          message?: string | undefined
          errors?:
            | {
                message?: string | undefined
                error_code?: 'resource_managed_by_scim' | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 409
      }
      $get: {
        input: { param: { organization_id: string; user_group_id: string } }
        output: UserGroupGetResponse
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { organization_id: string; user_group_id: string } } & {
              json: UserGroupUpdateRequestBody
            }
            output: UserGroupUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; user_group_id: string } } & {
              json: UserGroupUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'resource_managed_by_scim' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/organization/:organization_id/user-groups/:user_group_id/members': {
      $get: {
        input: { param: { organization_id: string; user_group_id: string } }
        output: UserGroupMemberListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { organization_id: string; user_group_id: string } } & {
          json: UserGroupMembersUpdateRequestBody
        }
        output: {
          message?: string | undefined
          errors?:
            | {
                message?: string | undefined
                error_code?: 'resource_managed_by_scim' | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 409
      }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-connectors': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: { plugin_name?: string | undefined }
            }
            output: KafkaConnectCustomConnectorsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { plugin_name?: string | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'permission_denied' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugin-classes/:plugin_class_name': {
      $get:
        | {
            input: { param: { organization_id: string; plugin_class_name: string } }
            output: KafkaConnectCustomPluginClassGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_class_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_class_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { organization_id: string; plugin_class_name: string } } & {
              json: KafkaConnectCustomPluginClassUpdateRequestBody
            }
            output: KafkaConnectCustomPluginClassUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_class_name: string } } & {
              json: KafkaConnectCustomPluginClassUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; plugin_class_name: string } } & {
              json: KafkaConnectCustomPluginClassUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_class_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugin-classes': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: KafkaConnectCustomPluginClassListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'permission_denied' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugins/:plugin_name/classes': {
      $get:
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: KafkaConnectCustomPluginClassListByNameResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugins/:plugin_name': {
      $delete:
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_has_active_deployments' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: KafkaConnectCustomPluginGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { organization_id: string; plugin_name: string } } & {
              json: KafkaConnectCustomPluginUpdateRequestBody
            }
            output: KafkaConnectCustomPluginUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_name: string } } & {
              json: KafkaConnectCustomPluginUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; plugin_name: string } } & {
              json: KafkaConnectCustomPluginUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugin-files/:plugin_file_id/classes': {
      $get:
        | {
            input: { param: { organization_id: string; plugin_file_id: string } }
            output: KafkaConnectCustomPluginFileClassListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_file_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_file_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugin-files': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: KafkaConnectCustomPluginFileCreateRequestBody
            }
            output: KafkaConnectCustomPluginFileCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: KafkaConnectCustomPluginFileCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: KafkaConnectCustomPluginFileCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_file_already_exists' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { organization_id: string } }
            output: KafkaConnectCustomPluginFileListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'permission_denied' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugin-files/:plugin_file_id': {
      $delete:
        | {
            input: { param: { organization_id: string; plugin_file_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_file_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; plugin_file_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_file_has_active_deployments' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { organization_id: string; plugin_file_id: string } }
            output: KafkaConnectCustomPluginFileGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_file_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_file_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { organization_id: string; plugin_file_id: string } } & {
              json: KafkaConnectCustomPluginFileUpdateRequestBody
            }
            output: KafkaConnectCustomPluginFileUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_file_id: string } } & {
              json: KafkaConnectCustomPluginFileUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; plugin_file_id: string } } & {
              json: KafkaConnectCustomPluginFileUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_file_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugins/:plugin_name/files/latest': {
      $get:
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: KafkaConnectCustomPluginFileGetLatestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugins/:plugin_name/files': {
      $get:
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: KafkaConnectCustomPluginFileListByNameResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; plugin_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/custom-plugins': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: KafkaConnectCustomPluginListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'permission_denied' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/kafka-connect/plugin-deployments': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: KafkaConnectPluginDeploymentsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'permission_denied' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/userinfo': {
      $get:
        | { input: {}; output: UserInfoGetResponse; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/billing-groups': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationBillingGroupCreateRequestBody
            }
            output: OrganizationBillingGroupCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationBillingGroupCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'invalid_email_format' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationBillingGroupCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: OrganizationBillingGroupListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/billing-group/:billing_group_id': {
      $delete: {
        input: { param: { organization_id: string; billing_group_id: string } }
        output: {
          message?: string | undefined
          errors?:
            | { message?: string | undefined; error_code?: 'billing_group_not_found' | undefined }[]
            | undefined
        }
        outputFormat: 'json'
        status: 404
      }
      $get:
        | {
            input: { param: { organization_id: string; billing_group_id: string } }
            output: OrganizationBillingGroupGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; billing_group_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'billing_group_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              json: OrganizationBillingGroupUpdateRequestBody
            }
            output: OrganizationBillingGroupUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              json: OrganizationBillingGroupUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'action_forbidden_for_marketplace_users' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; billing_group_id: string } } & {
              json: OrganizationBillingGroupUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'billing_group_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/invoice/:invoice_number/csv': {
      $get:
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invoice_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'invoice_lines_not_supported' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/organization/:organization_id/invoice/:invoice_number': {
      $get:
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: OrganizationBillingInvoiceGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invoice_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/invoice/:invoice_number/lines': {
      $get:
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: OrganizationBillingInvoiceLinesListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'invoice_lines_not_supported' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/organization/:organization_id/invoices': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                billing_group_ids?: unknown[] | undefined
                state?: unknown[] | undefined
                starting_date?: string | undefined
                ending_date?: string | undefined
              }
            }
            output: OrganizationBillingInvoiceListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                billing_group_ids?: unknown[] | undefined
                state?: unknown[] | undefined
                starting_date?: string | undefined
                ending_date?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                billing_group_ids?: unknown[] | undefined
                state?: unknown[] | undefined
                starting_date?: string | undefined
                ending_date?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/invoice/:invoice_number/pdf': {
      $get:
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organization_id: string; invoice_number: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/emissions': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                project_id?: unknown[] | undefined
                billing_group_id?: unknown[] | undefined
                starting_time?: string | undefined
                ending_time?: string | undefined
                granularity?: 'day' | 'month' | undefined
                group_by?: 'none' | 'project' | 'billing_group' | undefined
              }
            }
            output: OrganizationEmissionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                project_id?: unknown[] | undefined
                billing_group_id?: unknown[] | undefined
                starting_time?: string | undefined
                ending_time?: string | undefined
                granularity?: 'day' | 'month' | undefined
                group_by?: 'none' | 'project' | 'billing_group' | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/payment-method/bank-transfer/:payment_method_id': {
      $get:
        | {
            input: { param: { organization_id: string; payment_method_id: string } }
            output: BankTransferGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; payment_method_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/payment-method/bank-transfers': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: BankTransferListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/payment-method/credit-cards': {
      $post:
        | {
            input: { param: { organization_id: string } } & { json: CreditCardCreateRequestBody }
            output: CreditCardCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & { json: CreditCardCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string } }
            output: CreditCardListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/payment-method/credit-card/:payment_method_id': {
      $delete:
        | {
            input: { param: { organization_id: string; payment_method_id: string } }
            output: CreditCardDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; payment_method_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string; payment_method_id: string } }
            output: CreditCardGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; payment_method_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/payment-method/custom/:payment_method_id': {
      $get:
        | {
            input: { param: { organization_id: string; payment_method_id: string } }
            output: PaymentMethodCustomGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; payment_method_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/payment-method/custom': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: PaymentMethodCustomListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/payment-methods': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: PaymentMethodsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpc-clouds': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: OrganizationVpcCloudsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpcs': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationVpcCreateRequestBody
            }
            output: OrganizationVpcCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationVpcCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string } }
            output: OrganizationVpcListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpc/:organization_vpc_id': {
      $delete:
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } }
            output: OrganizationVpcDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } }
            output: OrganizationVpcGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } } & {
              json: OrganizationVpcUpdateRequestBody
            }
            output: OrganizationVpcUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } } & {
              json: OrganizationVpcUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpc/:organization_vpc_id/peering-connections': {
      $post:
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } } & {
              json: OrganizationVpcPeeringConnectionCreateRequestBody
            }
            output: OrganizationVpcPeeringConnectionCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } } & {
              json: OrganizationVpcPeeringConnectionCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpc/:organization_vpc_id/peering-connection/:peering_connection_id': {
      $delete:
        | {
            input: {
              param: {
                organization_id: string
                organization_vpc_id: string
                peering_connection_id: string
              }
            }
            output: OrganizationVpcPeeringConnectionDeleteByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                organization_vpc_id: string
                peering_connection_id: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpc/:organization_vpc_id/peering-connection/:peering_connection_id/user-peer-network-cidrs': {
      $put:
        | {
            input: {
              param: {
                organization_id: string
                organization_vpc_id: string
                peering_connection_id: string
              }
            }
            output: OrganizationVpcPeeringConnectionPeerNetworkCidrsUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                organization_vpc_id: string
                peering_connection_id: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpc/:organization_vpc_id/user-peer-network-cidrs': {
      $put:
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } } & {
              json: OrganizationVpcPeeringConnectionPeerNetworkCidrsUpdateV2RequestBody
            }
            output: OrganizationVpcPeeringConnectionPeerNetworkCidrsUpdateV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } } & {
              json: OrganizationVpcPeeringConnectionPeerNetworkCidrsUpdateV2RequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpc-peering-connection-types': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: OrganizationVpcPeeringConnectionTypesListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/vpc/:organization_vpc_id/peering-connections/refresh': {
      $post:
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } }
            output: OrganizationVpcPeeringConnectionsRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; organization_vpc_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/discovered-organizations': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: DiscoveredOrganizationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/config/authentication': {
      $get: {
        input: { param: { organization_id: string } }
        output: OrganizationAuthenticationConfigGetResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { organization_id: string } } & {
          json: OrganizationAuthenticationConfigUpdateRequestBody
        }
        output: OrganizationAuthenticationConfigUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/billing-report': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationBillingReportReadRequestBody
            }
            output: OrganizationBillingReportReadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationBillingReportReadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id': {
      $delete: {
        input: { param: { organization_id: string } } & { query: { recursive: boolean } }
        output: {
          message?: string | undefined
          errors?:
            | { message?: string | undefined; error_code?: 'organization_not_found' | undefined }[]
            | undefined
        }
        outputFormat: 'json'
        status: 404
      }
      $get: {
        input: { param: { organization_id: string } }
        output: OrganizationGetResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { organization_id: string } } & { json: OrganizationUpdateRequestBody }
        output: OrganizationUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/event-logs/download': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsDownloadRequestBody
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsDownloadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsDownloadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsDownloadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'event_logs_backend_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsDownloadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'event_logs_backend_timeout' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/organization/:organization_id/event-logs': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsGetRequestBody
            }
            output: OrganizationEventLogsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsGetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsGetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsGetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'event_logs_backend_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationEventLogsGetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'event_logs_backend_timeout' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/organization/:organization_id/governance/access': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationGovernanceAccessCreateRequestBody
            }
            output: OrganizationGovernanceAccessCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationGovernanceAccessCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'kafka_governance_not_enabled'
                      | 'kafka_console_governance_enabled'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationGovernanceAccessCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                resource_name?: string | undefined
                owner_user_group_id?: string | undefined
              }
            }
            output: OrganizationGovernanceAccessListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                resource_name?: string | undefined
                owner_user_group_id?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_governance_not_enabled' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                resource_name?: string | undefined
                owner_user_group_id?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/governance/access/:access_id/credentials': {
      $get:
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: OrganizationGovernanceAccessCredentialsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_governance_not_enabled' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/governance/access/:access_id': {
      $delete:
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: OrganizationGovernanceAccessDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'kafka_governance_not_enabled'
                      | 'kafka_console_governance_enabled'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: OrganizationGovernanceAccessGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_governance_not_enabled' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; access_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'organization_not_found'
                      | 'governance_access_not_found'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/config/api-client-ip-allowlist': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: OrganizationIPAllowListGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationIPAllowListSetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'api_client_ip_allowlist_blocks_caller' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationIPAllowListSetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/projects': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationProjectsCreateRequestBody
            }
            output: OrganizationProjectsCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationProjectsCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationProjectsCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'project_not_found' | 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: OrganizationProjectsCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'project_already_exists' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: { billing_group_id?: string | undefined }
            }
            output: OrganizationProjectsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { billing_group_id?: string | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/project/:project_id': {
      $delete:
        | {
            input: { param: { organization_id: string; project_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_not_organization_admin' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; project_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { organization_id: string; project_id: string } }
            output: OrganizationProjectsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: OrganizationProjectsUpdateRequestBody
            }
            output: OrganizationProjectsUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: OrganizationProjectsUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'user_not_organization_admin'
                      | 'project_move_organizations_internal_config_not_match'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: OrganizationProjectsUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/project/:project_id/service/:service_id/logs/counts': {
      $post:
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogCountsGetRequestBody }
            output: OrganizationServiceLogCountsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogCountsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogCountsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_logs_disabled' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogCountsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogCountsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_logs_backend_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogCountsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_logs_backend_timeout' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/organization/:organization_id/project/:project_id/service/:service_id/logs': {
      $post:
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogsGetRequestBody }
            output: OrganizationServiceLogsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_logs_disabled' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_logs_backend_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              param: { organization_id: string; project_id: string; service_id: string }
            } & { json: OrganizationServiceLogsGetRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_logs_backend_timeout' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/organization/:organization_id/invitation/:user_email': {
      $post: {
        input: { param: { organization_id: string; user_email: string } } & {
          json: OrganizationUserInvitationAcceptRequestBody
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { organization_id: string; user_email: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/invitation': {
      $get: {
        input: { param: { organization_id: string } }
        output: OrganizationUserInvitationsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organization_id: string } } & { json: OrganizationUserInviteRequestBody }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/project/:project_id/event-logs/download': {
      $post:
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsDownloadRequestBody
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsDownloadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsDownloadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsDownloadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'event_logs_backend_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsDownloadRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'event_logs_backend_timeout' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/organization/:organization_id/project/:project_id/event-logs': {
      $post:
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsGetRequestBody
            }
            output: ProjectEventLogsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsGetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsGetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsGetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'event_logs_backend_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { organization_id: string; project_id: string } } & {
              json: ProjectEventLogsGetRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'event_logs_backend_timeout' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/organizations': {
      $post: {
        input: { json: UserOrganizationCreateRequestBody }
        output: UserOrganizationCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: UserOrganizationsListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/organization/:organization_id/application/vcs-integrations': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: VcsIntegrationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/application/vcs-integrations/:vcs_integration_id/repositories/:remote_repository_id/branches': {
      $get:
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
              }
            } & { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: VcsIntegrationRepositoryBranchListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
              }
            } & { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | 'vcs_integration_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
              }
            } & { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'internal_server_error' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
              }
            } & { query: { cursor?: string | undefined; limit?: number | undefined } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_vcs_type' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/organization/:organization_id/application/vcs-integrations/:vcs_integration_id/repositories/:remote_repository_id/refs/:commit_sha/container-manifest-files': {
      $get:
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
                commit_sha: string
              }
            }
            output: VcsIntegrationRepositoryContainerManifestFilesListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
                commit_sha: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | 'vcs_integration_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
                commit_sha: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'internal_server_error' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
                commit_sha: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_vcs_type' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/organization/:organization_id/application/vcs-integrations/:vcs_integration_id/repositories/:remote_repository_id/refs/:commit_sha/scan-container-manifest': {
      $post:
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
                commit_sha: string
              }
            } & { json: VcsIntegrationRepositoryFileScanRequestBody }
            output: VcsIntegrationRepositoryFileScanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
                commit_sha: string
              }
            } & { json: VcsIntegrationRepositoryFileScanRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | 'vcs_integration_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
                commit_sha: string
              }
            } & { json: VcsIntegrationRepositoryFileScanRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'internal_server_error' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                organization_id: string
                vcs_integration_id: string
                remote_repository_id: string
                commit_sha: string
              }
            } & { json: VcsIntegrationRepositoryFileScanRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_vcs_type' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/organization/:organization_id/application/vcs-integrations/:vcs_integration_id/repositories': {
      $get:
        | {
            input: { param: { organization_id: string; vcs_integration_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
              }
            }
            output: VcsIntegrationRepositoryListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; vcs_integration_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'vcs_integration_repository_pagination_parameters_conflict'
                      | 'vcs_integration_repository_search_too_long'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; vcs_integration_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | 'vcs_integration_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; vcs_integration_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'internal_server_error' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { organization_id: string; vcs_integration_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                search?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_vcs_type' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/card': {
      $post: { input: {}; output: UserCreditCardAddResponse; outputFormat: 'json'; status: 200 }
      $get: { input: {}; output: UserCreditCardsListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/card/:card_id': {
      $delete: {
        input: { param: { card_id: string } }
        output: UserCreditCardDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { card_id: string } }
        output: UserCreditCardUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/permissions/:resource_type/:resource_id': {
      $get:
        | {
            input: {
              param: {
                organization_id: string
                resource_type: 'project' | 'organization' | 'organization_unit'
                resource_id: string
              }
            }
            output: PermissionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                resource_type: 'project' | 'organization' | 'organization_unit'
                resource_id: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'unsupported_resource_type' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $put: {
        input: {
          param: {
            organization_id: string
            resource_type: 'project' | 'organization' | 'organization_unit'
            resource_id: string
          }
        } & { json: PermissionsSetRequestBody }
        output: {
          message?: string | undefined
          errors?:
            | {
                message?: string | undefined
                error_code?: 'unsupported_resource_type' | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 400
      }
      $patch: {
        input: {
          param: {
            organization_id: string
            resource_type: 'project' | 'organization' | 'organization_unit'
            resource_id: string
          }
        } & { json: PermissionsUpdateRequestBody }
        output: {
          message?: string | undefined
          errors?:
            | {
                message?: string | undefined
                error_code?: 'unsupported_resource_type' | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 400
      }
    }
  } & {
    '/project/:project/vpc-peering-connection-types': {
      $get: {
        input: { param: { project: string } }
        output: ListProjectVpcPeeringConnectionTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/alerts': {
      $get: {
        input: { param: { project: string } }
        output: ProjectAlertsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project': {
      $post:
        | {
            input: { json: ProjectCreateRequestBody }
            output: ProjectCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProjectCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'project_already_exists' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get: { input: {}; output: ProjectListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/project/:project': {
      $delete: {
        input: { param: { project: string } }
        output: ProjectDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string } }
        output: ProjectGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string } } & { json: ProjectUpdateRequestBody }
        output: ProjectUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/download-sbom/:file_format/:download_cookie': {
      $get:
        | {
            input: { param: { project: string; file_format: string; download_cookie: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { project: string; file_format: string; download_cookie: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/project/:project/generate-sbom-download-url/:file_format': {
      $get: {
        input: { param: { project: string; file_format: string } }
        output: ProjectGenerateSbomDownloadUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/events': {
      $get: {
        input: { param: { project: string } }
        output: ProjectGetEventLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/invite': {
      $post: {
        input: { param: { project: string } }
        output: ProjectInviteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/invite/:invite_verification_code': {
      $post: {
        input: { param: { project: string; invite_verification_code: string } }
        output: ProjectInviteAcceptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/invite/:invited_email': {
      $delete: {
        input: { param: { project: string; invited_email: string } }
        output: ProjectInviteDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/privatelink-availability': {
      $get: {
        input: { param: { project: string } }
        output: ProjectPrivatelinkAvailabilityListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service-types/:service_type/plans': {
      $get: {
        input: { param: { project: string; service_type: string } }
        output: ProjectServicePlanListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/pricing/service-types/:service_type/plans/:service_plan/clouds/:cloud': {
      $get: {
        input: {
          param: { project: string; service_type: string; service_plan: string; cloud: string }
        }
        output: ProjectServicePlanPriceGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service-types/:service_type/plans/:service_plan': {
      $get: {
        input: { param: { project: string; service_type: string; service_plan: string } }
        output: ProjectServicePlanSpecsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service-types/:service_type': {
      $get: {
        input: { param: { project: string; service_type: string } }
        output: ProjectServiceTypesGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service-types': {
      $get: {
        input: { param: { project: string } }
        output: ProjectServiceTypesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/tags': {
      $get: {
        input: { param: { project: string } }
        output: ProjectTagsListResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string } } & { json: ProjectTagsReplaceRequestBody }
        output: ProjectTagsReplaceResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string } } & { json: ProjectTagsUpdateRequestBody }
        output: ProjectTagsUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/users': {
      $get: {
        input: { param: { project: string } }
        output: ProjectUserListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/user/:user_email': {
      $delete: {
        input: { param: { project: string; user_email: string } }
        output: ProjectUserRemoveResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; user_email: string } }
        output: ProjectUserUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/vpcs': {
      $post: {
        input: { param: { project: string } } & { json: VpcCreateRequestBody }
        output: VpcCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string } }
        output: VpcListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/vpcs/:project_vpc_id': {
      $delete: {
        input: { param: { project: string; project_vpc_id: string } }
        output: VpcDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; project_vpc_id: string } }
        output: VpcGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/vpcs/:project_vpc_id/peering-connections': {
      $post: {
        input: { param: { project: string; project_vpc_id: string } } & {
          json: VpcPeeringConnectionCreateRequestBody
        }
        output: VpcPeeringConnectionCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/vpcs/:project_vpc_id/peering-connections/peer-accounts/:peer_cloud_account/peer-vpcs/:peer_vpc': {
      $delete: {
        input: {
          param: {
            project: string
            project_vpc_id: string
            peer_cloud_account: string
            peer_vpc: string
          }
        }
        output: VpcPeeringConnectionDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/vpcs/:project_vpc_id/user-peer-network-cidrs': {
      $put: {
        input: { param: { project: string; project_vpc_id: string } } & {
          json: VpcPeeringConnectionUpdateRequestBody
        }
        output: VpcPeeringConnectionUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/vpcs/:project_vpc_id/peering-connections/peer-accounts/:peer_cloud_account/peer-vpcs/:peer_vpc/peer-regions/:peer_region': {
      $delete: {
        input: {
          param: {
            project: string
            project_vpc_id: string
            peer_cloud_account: string
            peer_vpc: string
            peer_region: string
          }
        }
        output: VpcPeeringConnectionWithRegionDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/vpcs/:project_vpc_id/peering-connections/peer-accounts/:peer_cloud_account/peer-resource-groups/:peer_resource_group/peer-vpcs/:peer_vpc': {
      $delete: {
        input: {
          param: {
            project: string
            project_vpc_id: string
            peer_cloud_account: string
            peer_resource_group: string
            peer_vpc: string
          }
        }
        output: VpcPeeringConnectionWithResourceGroupDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/vpcs/:project_vpc_id/peering-connections/refresh': {
      $post: {
        input: { param: { project: string; project_vpc_id: string } }
        output: VpcPeeringConnectionsRefreshResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/credits': {
      $post: {
        input: { param: { project: string } }
        output: ProjectCreditsClaimResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string } }
        output: ProjectCreditsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/invoice/:invoice_number/:download_cookie': {
      $get: {
        input: { param: { project: string; invoice_number: string; download_cookie: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/project/:project/invoice': {
      $get: {
        input: { param: { project: string } }
        output: ProjectInvoiceListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/kms/ca': {
      $get: {
        input: { param: { project: string } }
        output: ProjectKmsGetCAResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/secrets/cmks/:cmk_id/access_check': {
      $post:
        | {
            input: { param: { project: string; cmk_id: string } }
            output: CMKAccessCheckTriggerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_cmk_id' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/secrets/cmks/accessors': {
      $get:
        | {
            input: { param: { project: string } }
            output: CMKAccessorsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/secrets/cmks': {
      $post:
        | {
            input: { param: { project: string } } & { json: CMKCreateRequestBody }
            output: CMKCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } } & { json: CMKCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } } & { json: CMKCreateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project: string } }
            output: CMKListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/secrets/cmks/:cmk_id': {
      $delete:
        | {
            input: { param: { project: string; cmk_id: string } }
            output: CMKDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_cmk_id' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project: string; cmk_id: string } }
            output: CMKGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_cmk_id' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project: string; cmk_id: string } } & { json: CMKUpdateRequestBody }
            output: CMKUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; cmk_id: string } } & { json: CMKUpdateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_cmk_id' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; cmk_id: string } } & { json: CMKUpdateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; cmk_id: string } } & { json: CMKUpdateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/secrets/cmks/:cmk_id/service_associations': {
      $get:
        | {
            input: { param: { project: string; cmk_id: string } }
            output: CMKServiceAssociationsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_cmk_id' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'feature_not_enabled' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; cmk_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/service/:service_name/application/redeploy': {
      $post:
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'invalid_service' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'user_role_not_allowed_to_perform_operation' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'invalid_service_type' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/query': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceClickHouseCurrentQueriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceClickHouseQueryRequestBody
        }
        output: ServiceClickHouseQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/db': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceClickHouseDatabaseCreateRequestBody
        }
        output: ServiceClickHouseDatabaseCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceClickHouseDatabaseListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/db/:database': {
      $delete: {
        input: { param: { project: string; service_name: string; database: string } }
        output: ServiceClickHouseDatabaseDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/user/:user_uuid/password': {
      $put: {
        input: { param: { project: string; service_name: string; user_uuid: string } } & {
          json: ServiceClickHousePasswordResetRequestBody
        }
        output: ServiceClickHousePasswordResetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/query/stats': {
      $get: {
        input: { param: { project: string; service_name: string } } & {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            order_by?:
              | 'calls:asc'
              | 'calls:desc'
              | 'min_time:asc'
              | 'min_time:desc'
              | 'max_time:asc'
              | 'max_time:desc'
              | 'mean_time:asc'
              | 'mean_time:desc'
              | 'p95_time:asc'
              | 'p95_time:desc'
              | 'stddev_time:asc'
              | 'stddev_time:desc'
              | 'total_time:asc'
              | 'total_time:desc'
              | undefined
          }
        }
        output: ServiceClickHouseQueryStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/role/:role_uuid': {
      $delete: {
        input: { param: { project: string; service_name: string; role_uuid: string } }
        output: ServiceClickHouseRoleDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/role': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceClickHouseRoleListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/tiered-storage/summary': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceClickHouseTieredStorageSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/user': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceClickHouseUserCreateRequestBody
        }
        output: ServiceClickHouseUserCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceClickHouseUserListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/clickhouse/user/:user_uuid': {
      $delete: {
        input: { param: { project: string; service_name: string; user_uuid: string } }
        output: ServiceClickHouseUserDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application/:application_id/deployment/:deployment_id/cancel': {
      $post: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            deployment_id: string
          }
        }
        output: ServiceFlinkCancelApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/jar_application/:application_id/deployment/:deployment_id/cancel': {
      $post: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            deployment_id: string
          }
        }
        output: ServiceFlinkCancelJarApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceFlinkCreateApplicationRequestBody
        }
        output: ServiceFlinkCreateApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceFlinkListApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application/:application_id/deployment': {
      $post: {
        input: { param: { project: string; service_name: string; application_id: string } } & {
          json: ServiceFlinkCreateApplicationDeploymentRequestBody
        }
        output: ServiceFlinkCreateApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string; application_id: string } }
        output: ServiceFlinkListApplicationDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application/:application_id/version': {
      $post: {
        input: { param: { project: string; service_name: string; application_id: string } } & {
          json: ServiceFlinkCreateApplicationVersionRequestBody
        }
        output: ServiceFlinkCreateApplicationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/jar_application': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceFlinkCreateJarApplicationRequestBody
        }
        output: ServiceFlinkCreateJarApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceFlinkListJarApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/jar_application/:application_id/deployment': {
      $post: {
        input: { param: { project: string; service_name: string; application_id: string } } & {
          json: ServiceFlinkCreateJarApplicationDeploymentRequestBody
        }
        output: ServiceFlinkCreateJarApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string; application_id: string } }
        output: ServiceFlinkListJarApplicationDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/jar_application/:application_id/version': {
      $post: {
        input: { param: { project: string; service_name: string; application_id: string } }
        output: ServiceFlinkCreateJarApplicationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application/:application_id': {
      $delete: {
        input: { param: { project: string; service_name: string; application_id: string } }
        output: ServiceFlinkDeleteApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string; application_id: string } }
        output: ServiceFlinkGetApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string; application_id: string } } & {
          json: ServiceFlinkUpdateApplicationRequestBody
        }
        output: ServiceFlinkUpdateApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application/:application_id/deployment/:deployment_id': {
      $delete: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            deployment_id: string
          }
        }
        output: ServiceFlinkDeleteApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            deployment_id: string
          }
        }
        output: ServiceFlinkGetApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application/:application_id/version/:application_version_id': {
      $delete: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            application_version_id: string
          }
        }
        output: ServiceFlinkDeleteApplicationVersionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            application_version_id: string
          }
        }
        output: ServiceFlinkGetApplicationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/jar_application/:application_id': {
      $delete: {
        input: { param: { project: string; service_name: string; application_id: string } }
        output: ServiceFlinkDeleteJarApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string; application_id: string } }
        output: ServiceFlinkGetJarApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string; application_id: string } } & {
          json: ServiceFlinkUpdateJarApplicationRequestBody
        }
        output: ServiceFlinkUpdateJarApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/jar_application/:application_id/deployment/:deployment_id': {
      $delete: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            deployment_id: string
          }
        }
        output: ServiceFlinkDeleteJarApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            deployment_id: string
          }
        }
        output: ServiceFlinkGetJarApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/jar_application/:application_id/version/:application_version_id': {
      $delete: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            application_version_id: string
          }
        }
        output: ServiceFlinkDeleteJarApplicationVersionResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            application_version_id: string
          }
        }
        output: ServiceFlinkGetJarApplicationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/job/:job_id': {
      $get: {
        input: { param: { project: string; service_name: string; job_id: string } }
        output: ServiceFlinkJobDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/job': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceFlinkJobsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/overview': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceFlinkOverviewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application/:application_id/deployment/:deployment_id/stop': {
      $post: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            deployment_id: string
          }
        }
        output: ServiceFlinkStopApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/jar_application/:application_id/deployment/:deployment_id/stop': {
      $post: {
        input: {
          param: {
            project: string
            service_name: string
            application_id: string
            deployment_id: string
          }
        }
        output: ServiceFlinkStopJarApplicationDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/flink/application/:application_id/version/validate': {
      $post: {
        input: { param: { project: string; service_name: string; application_id: string } } & {
          json: ServiceFlinkValidateApplicationVersionRequestBody
        }
        output: ServiceFlinkValidateApplicationVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/acl': {
      $post:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaAclAddRequestBody
            }
            output: ServiceKafkaAclAddResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaAclAddRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_acl_too_many' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceKafkaAclListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/service/:service_name/acl/:kafka_acl_id': {
      $delete:
        | {
            input: { param: { project: string; service_name: string; kafka_acl_id: string } }
            output: ServiceKafkaAclDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; kafka_acl_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_acl_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/service/:service_name/connectors': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceKafkaConnectCreateConnectorRequestBody
        }
        output: ServiceKafkaConnectCreateConnectorResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceKafkaConnectListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connectors/:connector_name': {
      $delete: {
        input: { param: { project: string; service_name: string; connector_name: string } }
        output: ServiceKafkaConnectDeleteConnectorResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string; connector_name: string } } & {
          json: ServiceKafkaConnectEditConnectorRequestBody
        }
        output: ServiceKafkaConnectEditConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/available-connectors': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceKafkaConnectGetAvailableConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connector-plugins/:connector_name/configuration': {
      $get: {
        input: { param: { project: string; service_name: string; connector_name: string } }
        output: ServiceKafkaConnectGetConnectorConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connectors/:connector_name/status': {
      $get: {
        input: { param: { project: string; service_name: string; connector_name: string } }
        output: ServiceKafkaConnectGetConnectorStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connectors/:connector_name/pause': {
      $post: {
        input: { param: { project: string; service_name: string; connector_name: string } }
        output: ServiceKafkaConnectPauseConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connectors/:connector_name/restart': {
      $post: {
        input: { param: { project: string; service_name: string; connector_name: string } }
        output: ServiceKafkaConnectRestartConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connectors/:connector_name/tasks/:task_id/restart': {
      $post: {
        input: {
          param: { project: string; service_name: string; connector_name: string; task_id: string }
        }
        output: ServiceKafkaConnectRestartConnectorTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connectors/:connector_name/resume': {
      $post: {
        input: { param: { project: string; service_name: string; connector_name: string } }
        output: ServiceKafkaConnectResumeConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connectors/:connector_name/stop': {
      $post: {
        input: { param: { project: string; service_name: string; connector_name: string } }
        output: ServiceKafkaConnectStopConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/validate-custom-plugin-classes': {
      $post:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaConnectValidateCustomPluginClassesRequestBody
            }
            output: ServiceKafkaConnectValidateCustomPluginClassesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaConnectValidateCustomPluginClassesRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaConnectValidateCustomPluginClassesRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'permission_denied' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaConnectValidateCustomPluginClassesRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'custom_plugin_file_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/service/:service_name/kafka/acl': {
      $post:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaNativeAclAddRequestBody
            }
            output: ServiceKafkaNativeAclAddResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaNativeAclAddRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_acl_too_many' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaNativeAclAddRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_acl_not_supported' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceKafkaNativeAclListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_maintenance_required' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/project/:project/service/:service_name/kafka/acl/:kafka_acl_id': {
      $delete:
        | {
            input: { param: { project: string; service_name: string; kafka_acl_id: string } }
            output: ServiceKafkaNativeAclDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; kafka_acl_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_acl_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project: string; service_name: string; kafka_acl_id: string } }
            output: ServiceKafkaNativeAclGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; kafka_acl_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_acl_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/service/:service_name/quota': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceKafkaQuotaCreateRequestBody
        }
        output: ServiceKafkaQuotaCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { project: string; service_name: string } } & {
          query: { 'client-id'?: string | undefined; user?: string | undefined }
        }
        output: ServiceKafkaQuotaDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceKafkaQuotaListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/quota/describe': {
      $get: {
        input: { param: { project: string; service_name: string } } & {
          query: { 'client-id'?: string | undefined; user?: string | undefined }
        }
        output: ServiceKafkaQuotaDescribeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/tiered-storage/storage-usage/by-topic': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceKafkaTieredStorageStorageUsageByTopicResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/tiered-storage/storage-usage/total': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceKafkaTieredStorageStorageUsageTotalResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/tiered-storage/summary': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceKafkaTieredStorageSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/topic': {
      $post:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaTopicCreateRequestBody
            }
            output: ServiceKafkaTopicCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaTopicCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_topic_invalid_config' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaTopicCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_topic_already_exists' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceKafkaTopicCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceKafkaTopicListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/topic/:topic_name': {
      $delete:
        | {
            input: { param: { project: string; service_name: string; topic_name: string } }
            output: ServiceKafkaTopicDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_topic_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_topic_reserved' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { project: string; service_name: string; topic_name: string } }
            output: ServiceKafkaTopicGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_topic_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_topic_not_synchronized' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $put:
        | {
            input: { param: { project: string; service_name: string; topic_name: string } } & {
              json: ServiceKafkaTopicUpdateRequestBody
            }
            output: ServiceKafkaTopicUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } } & {
              json: ServiceKafkaTopicUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_topic_invalid_config' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } } & {
              json: ServiceKafkaTopicUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_topic_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } } & {
              json: ServiceKafkaTopicUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_partition_reassignment_in_progress' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string; topic_name: string } } & {
              json: ServiceKafkaTopicUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'kafka_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/project/:project/service/:service_name/kafka/rest/topics/:topic_name/messages': {
      $post: {
        input: { param: { project: string; service_name: string; topic_name: string } } & {
          json: ServiceKafkaTopicMessageListRequestBody
        }
        output: ServiceKafkaTopicMessageListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/rest/topics/:topic_name/produce': {
      $post: {
        input: { param: { project: string; service_name: string; topic_name: string } } & {
          json: ServiceKafkaTopicMessageProduceRequestBody
        }
        output: ServiceKafkaTopicMessageProduceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema-registry/acl': {
      $post:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceSchemaRegistryAclAddRequestBody
            }
            output: ServiceSchemaRegistryAclAddResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceSchemaRegistryAclAddRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_acl_too_many' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceSchemaRegistryAclListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema-registry/acl/:schema_registry_acl_id': {
      $delete: {
        input: { param: { project: string; service_name: string; schema_registry_acl_id: string } }
        output: ServiceSchemaRegistryAclDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/compatibility/subjects/:subject_name/versions/:version_id': {
      $post: {
        input: {
          param: { project: string; service_name: string; subject_name: string; version_id: string }
        } & { json: ServiceSchemaRegistryCompatibilityRequestBody }
        output: ServiceSchemaRegistryCompatibilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/config': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceSchemaRegistryGlobalConfigGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceSchemaRegistryGlobalConfigPutRequestBody
        }
        output: ServiceSchemaRegistryGlobalConfigPutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/schemas/ids/:schema_id': {
      $get: {
        input: { param: { project: string; service_name: string; schema_id: string } }
        output: ServiceSchemaRegistrySchemaGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/config/:subject_name': {
      $get: {
        input: { param: { project: string; service_name: string; subject_name: string } }
        output: ServiceSchemaRegistrySubjectConfigGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string; subject_name: string } } & {
          json: ServiceSchemaRegistrySubjectConfigPutRequestBody
        }
        output: ServiceSchemaRegistrySubjectConfigPutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/subjects/:subject_name': {
      $delete: {
        input: { param: { project: string; service_name: string; subject_name: string } }
        output: ServiceSchemaRegistrySubjectDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/subjects/:subject_name/versions/:version_id': {
      $delete: {
        input: {
          param: { project: string; service_name: string; subject_name: string; version_id: string }
        }
        output: ServiceSchemaRegistrySubjectVersionDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: { project: string; service_name: string; subject_name: string; version_id: string }
        }
        output: ServiceSchemaRegistrySubjectVersionGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/subjects/:subject_name/versions': {
      $post: {
        input: { param: { project: string; service_name: string; subject_name: string } } & {
          json: ServiceSchemaRegistrySubjectVersionPostRequestBody
        }
        output: ServiceSchemaRegistrySubjectVersionPostResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string; subject_name: string } }
        output: ServiceSchemaRegistrySubjectVersionsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/subjects/:subject_name/versions/:version_id/schema': {
      $get: {
        input: {
          param: { project: string; service_name: string; subject_name: string; version_id: string }
        }
        output: ServiceSchemaRegistrySubjectVersionSchemaGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/kafka/schema/subjects': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceSchemaRegistrySubjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/mirrormaker/replication-flows': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceKafkaMirrorMakerCreateReplicationFlowRequestBody
        }
        output: ServiceKafkaMirrorMakerCreateReplicationFlowResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceKafkaMirrorMakerGetReplicationFlowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/mirrormaker/replication-flows/:source_cluster/:target_cluster': {
      $delete: {
        input: {
          param: {
            project: string
            service_name: string
            source_cluster: string
            target_cluster: string
          }
        }
        output: ServiceKafkaMirrorMakerDeleteReplicationFlowResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            project: string
            service_name: string
            source_cluster: string
            target_cluster: string
          }
        }
        output: ServiceKafkaMirrorMakerGetReplicationFlowResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            project: string
            service_name: string
            source_cluster: string
            target_cluster: string
          }
        } & { json: ServiceKafkaMirrorMakerPatchReplicationFlowRequestBody }
        output: ServiceKafkaMirrorMakerPatchReplicationFlowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/project/:project/managed-agents/agent': {
      $post:
        | {
            input: { param: { organization_id: string; project: string } } & {
              json: ManagedAgentsAgentCreateRequestBody
            }
            output: ManagedAgentsAgentCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project: string } } & {
              json: ManagedAgentsAgentCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; project: string } } & {
              json: ManagedAgentsAgentCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'request_already_exists' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { organization_id: string; project: string } }
            output: ManagedAgentsAgentListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/project/:project/managed-agents/agent/:agent_id/schedule': {
      $post:
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsAgentScheduleCreateRequestBody
            }
            output: ManagedAgentsAgentScheduleCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsAgentScheduleCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsAgentScheduleCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsAgentScheduleCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/project/:project/managed-agents/agent/:agent_id/schedule/:schedule_id': {
      $patch:
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                schedule_id: string
              }
            } & { json: ManagedAgentsAgentScheduleUpdateRequestBody }
            output: ManagedAgentsAgentScheduleUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                schedule_id: string
              }
            } & { json: ManagedAgentsAgentScheduleUpdateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                schedule_id: string
              }
            } & { json: ManagedAgentsAgentScheduleUpdateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                schedule_id: string
              }
            } & { json: ManagedAgentsAgentScheduleUpdateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/project/:project/managed-agents/agent/:agent_id': {
      $patch:
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsAgentUpdateRequestBody
            }
            output: ManagedAgentsAgentUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsAgentUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsAgentUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/project/:project/managed-agents/environment/:environment/integration': {
      $post:
        | {
            input: { param: { organization_id: string; project: string; environment: string } } & {
              json: ManagedAgentsEnvIntegrationCreateRequestBody
            }
            output: ManagedAgentsEnvIntegrationCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project: string; environment: string } } & {
              json: ManagedAgentsEnvIntegrationCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; project: string; environment: string } } & {
              json: ManagedAgentsEnvIntegrationCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/project/:project/managed-agents/integration/catalog': {
      $get:
        | {
            input: { param: { organization_id: string; project: string } }
            output: ManagedAgentsIntegrationCatalogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/project/:project/managed-agents/agent/:agent_id/session/:session_id/message': {
      $get:
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                session_id: string
              }
            }
            output: ManagedAgentsMessageListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                session_id: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                session_id: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                session_id: string
              }
            } & { json: ManagedAgentsMessageSendRequestBody }
            output: ManagedAgentsMessageSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_id: string
                project: string
                agent_id: string
                session_id: string
              }
            } & { json: ManagedAgentsMessageSendRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organization/:organization_id/project/:project/managed-agents/agent/:agent_id/session': {
      $post:
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsSessionCreateRequestBody
            }
            output: ManagedAgentsSessionCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              json: ManagedAgentsSessionCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              query: { limit?: number | undefined }
            }
            output: ManagedAgentsSessionListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              query: { limit?: number | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'bad_request' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; project: string; agent_id: string } } & {
              query: { limit?: number | undefined }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'request_forbidden' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/account/:account_id/mysql/query/optimize': {
      $post:
        | {
            input: { param: { account_id: string } } & {
              json: MySQLAccountQueryOptimizeRequestBody
            }
            output: MySQLAccountQueryOptimizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              json: MySQLAccountQueryOptimizeRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'optimization_failed' | 'unable_to_parse_query' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & {
              json: MySQLAccountQueryOptimizeRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'account_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/mysql/database-metadata-query': {
      $get: {
        input: {}
        output: MySQLServiceDatabaseMetadataQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mysql/query/metadata-validate': {
      $post:
        | {
            input: { json: MySQLServiceMetadataValidateRequestBody }
            output: MySQLServiceMetadataValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MySQLServiceMetadataValidateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'metadata_validation_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/project/:project/service/:service_name/mysql/query/stats': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: MySQLServiceQueryStatisticsRequestBody
        }
        output: MySQLServiceQueryStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/mysql/query/validate': {
      $post:
        | {
            input: { json: MySQLServiceQueryValidateRequestBody }
            output: MySQLServiceQueryValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MySQLServiceQueryValidateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'query_validation_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/acl': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceOpenSearchAclGetResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceOpenSearchAclSetRequestBody
        }
        output: ServiceOpenSearchAclSetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceOpenSearchAclUpdateRequestBody
        }
        output: ServiceOpenSearchAclUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/:index_pattern/_close': {
      $post:
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: ServiceOpenSearchIndexCloseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'index_close_failed' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/index/close_multiple': {
      $post:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceOpenSearchIndexCloseMultipleRequestBody
            }
            output: ServiceOpenSearchIndexCloseMultipleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceOpenSearchIndexCloseMultipleRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/project/:project/service/:service_name/index/:index_pattern': {
      $delete:
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: ServiceOpenSearchIndexDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_delete_system_index' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'index_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/index': {
      $get:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceOpenSearchIndexListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/:index_pattern/_open': {
      $post:
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: ServiceOpenSearchIndexOpenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project: string; service_name: string; index_pattern: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/index/open_multiple': {
      $post:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceOpenSearchIndexOpenMultipleRequestBody
            }
            output: ServiceOpenSearchIndexOpenMultipleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceOpenSearchIndexOpenMultipleRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/security': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceOpenSearchSecurityGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/security/admin': {
      $put: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceOpenSearchSecurityResetRequestBody
        }
        output: ServiceOpenSearchSecurityResetResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceOpenSearchSecuritySetRequestBody
        }
        output: ServiceOpenSearchSecuritySetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot/:repository_name/:snapshot_name': {
      $post:
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoCreateSnapshotRequestBody }
            output: ServiceOpensearchCustomRepoCreateSnapshotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoCreateSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'snapshot_creation_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoCreateSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoCreateSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoCreateSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoCreateSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
      $delete:
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: ServiceOpensearchCustomRepoDeleteSnapshotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'snapshot_deletion_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
      $get:
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: ServiceOpensearchCustomRepoShowSnapshotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot/:repository_name/_all': {
      $get:
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: ServiceOpensearchCustomRepoListSnapshotsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot/:repository_name/_verify': {
      $post:
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: ServiceOpensearchCustomRepoNameVerifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'snapshot_deletion_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot/:repository_name/:snapshot_name/_restore': {
      $post:
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotRequestBody }
            output: ServiceOpensearchCustomRepoRestoreSnapshotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'snapshot_restoration_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_internal_server_error' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot/:repository_name/:snapshot_name/_restore_check': {
      $post:
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotCheckRequestBody }
            output: ServiceOpensearchCustomRepoRestoreSnapshotCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotCheckRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'snapshot_restoration_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotCheckRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotCheckRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotCheckRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotCheckRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_internal_server_error' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            } & { json: ServiceOpensearchCustomRepoRestoreSnapshotCheckRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot/:repository_name/:snapshot_name/_status': {
      $get:
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: ServiceOpensearchCustomRepoShowSnapshotStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                project: string
                service_name: string
                repository_name: string
                snapshot_name: string
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot/:repository_name/_status': {
      $get:
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: ServiceOpensearchCustomRepoSnapshotsInProgressResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project: string; service_name: string; repository_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot': {
      $get:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceOpensearchListCustomReposResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/_snapshot/restoration_in_progress': {
      $get:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceOpensearchListRestorationsInProgressResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'repository_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'not_powered' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_too_many_requests' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'opensearch_service_unavailable' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 502
          }
    }
  } & {
    '/project/:project/service/:service_name/opensearch/tiered-storage/summary': {
      $get:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceOpensearchTieredStorageSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'project_does_not_exist' | 'service_does_not_exist' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/account/:account_id/pg/query/optimize': {
      $post:
        | {
            input: { param: { account_id: string } } & { json: PGAccountQueryOptimizeRequestBody }
            output: PGAccountQueryOptimizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: PGAccountQueryOptimizeRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'optimization_failed' | 'unable_to_parse_query' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: PGAccountQueryOptimizeRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'account_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/service/:service_name/pg/available-extensions': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: PGServiceAvailableExtensionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pg/database-metadata-query': {
      $get: {
        input: {}
        output: PGServiceDatabaseMetadataQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pg/query/metadata-validate': {
      $post:
        | {
            input: { json: PGServiceMetadataValidateRequestBody }
            output: PGServiceMetadataValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PGServiceMetadataValidateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'metadata_validation_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/project/:project/service/:service_name/pg/query/stats': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: PGServiceQueryStatisticsRequestBody
        }
        output: PGServiceQueryStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/query/stats': {
      $post: {
        input: { param: { project: string; service_name: string } }
        output: PGServiceQueryStatisticsDeprecatedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pg/query/validate': {
      $post:
        | {
            input: { json: PGServiceQueryValidateRequestBody }
            output: PGServiceQueryValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PGServiceQueryValidateRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'query_validation_failed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/project/:project/service/:service_name/connection_pool': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServicePGBouncerCreateRequestBody
        }
        output: ServicePGBouncerCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/connection_pool/:pool_name': {
      $delete: {
        input: { param: { project: string; service_name: string; pool_name: string } }
        output: ServicePGBouncerDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string; pool_name: string } } & {
          json: ServicePGBouncerUpdateRequestBody
        }
        output: ServicePGBouncerUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/thanos/storage/summary': {
      $get:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceThanosStorageSummaryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'project_does_not_exist' | 'service_does_not_exist' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/service_types': {
      $get: {
        input: { param: { project: string } }
        output: ListProjectServiceTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/service_types': {
      $get: { input: {}; output: ListPublicServiceTypesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/service_versions': {
      $get: {
        input: { query: { visible_until?: 'end-of-availability' | 'end-of-life' | undefined } }
        output: ListServiceVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenants/:tenant/os-available-plugins': {
      $get:
        | {
            input: { param: { tenant: string } }
            output: OsAvailablePluginsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenant: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'internal_server_error' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tenants/:tenant/pg-available-extensions': {
      $get: {
        input: { param: { tenant: string } }
        output: PgAvailableExtensionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/logs': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ProjectGetServiceLogsRequestBody
        }
        output: ProjectGetServiceLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/tags': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ProjectServiceTagsListResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string } } & {
          json: ProjectServiceTagsReplaceRequestBody
        }
        output: ProjectServiceTagsReplaceResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string; service_name: string } } & {
          json: ProjectServiceTagsUpdateRequestBody
        }
        output: ProjectServiceTagsUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/alerts': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceAlertsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/backup_to_another_region/report': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceBackupToAnotherRegionReportRequestBody
        }
        output: ServiceBackupToAnotherRegionReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/backups': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceBackupsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/query/cancel': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceCancelQueryRequestBody
        }
        output: ServiceCancelQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service': {
      $post: {
        input: { param: { project: string } } & { json: ServiceCreateRequestBody }
        output: ServiceCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string } } & { query: { include_secrets?: boolean | undefined } }
        output: ServiceListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/rotate-internal-secrets': {
      $post:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceDataHubRotateInternalSecretsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_type_not_allowed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/project/:project/service/:service_name/rotate-secret-service-encryption-key': {
      $post:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceDataHubRotateSecretServiceEncryptionKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_type_not_allowed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/project/:project/service/:service_name/rotate-token-service-secrets': {
      $post:
        | {
            input: { param: { project: string; service_name: string } }
            output: ServiceDataHubRotateTokenServiceSecretsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_type_not_allowed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/project/:project/service/:service_name/db': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceDatabaseCreateRequestBody
        }
        output: ServiceDatabaseCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } } & {
          query: { maxItems?: number | undefined; after?: string | undefined }
        }
        output: ServiceDatabaseListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/db/:dbname': {
      $delete: {
        input: { param: { project: string; service_name: string; dbname: string } }
        output: ServiceDatabaseDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name': {
      $delete: {
        input: { param: { project: string; service_name: string } }
        output: ServiceDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } } & {
          query: { include_secrets?: boolean | undefined }
        }
        output: ServiceGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string } } & {
          query: { allow_unclean_poweroff?: boolean | undefined }
        } & { json: ServiceUpdateRequestBody }
        output: ServiceUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/enable-writes': {
      $post: {
        input: { param: { project: string; service_name: string } }
        output: ServiceEnableWritesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/migration': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceGetMigrationStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/maintenance/start': {
      $put: {
        input: { param: { project: string; service_name: string } }
        output: ServiceMaintenanceStartResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/metrics': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceMetricsFetchRequestBody
        }
        output: ServiceMetricsFetchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/aws/connections': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkAWSConnectionListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/aws': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServicePrivatelinkAWSCreateRequestBody
        }
        output: ServicePrivatelinkAWSCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkAWSDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkAWSGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string } } & {
          json: ServicePrivatelinkAWSUpdateRequestBody
        }
        output: ServicePrivatelinkAWSUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/azure/connections/:privatelink_connection_id/approve': {
      $post: {
        input: {
          param: { project: string; service_name: string; privatelink_connection_id: string }
        }
        output: ServicePrivatelinkAzureConnectionApprovalResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/azure/connections': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkAzureConnectionListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/azure/connections/:privatelink_connection_id': {
      $put: {
        input: {
          param: { project: string; service_name: string; privatelink_connection_id: string }
        } & { json: ServicePrivatelinkAzureConnectionUpdateRequestBody }
        output: ServicePrivatelinkAzureConnectionUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/azure': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServicePrivatelinkAzureCreateRequestBody
        }
        output: ServicePrivatelinkAzureCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkAzureDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkAzureGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; service_name: string } } & {
          json: ServicePrivatelinkAzureUpdateRequestBody
        }
        output: ServicePrivatelinkAzureUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/azure/refresh': {
      $post: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkAzureRefreshResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/google/connections/:privatelink_connection_id/approve': {
      $post: {
        input: {
          param: { project: string; service_name: string; privatelink_connection_id: string }
        } & { json: ServicePrivatelinkGoogleConnectionCreateRequestBody }
        output: ServicePrivatelinkGoogleConnectionCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/google/connections': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkGoogleConnectionListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/google': {
      $post: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkGoogleCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkGoogleDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkGoogleGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/privatelink/google/refresh': {
      $post: {
        input: { param: { project: string; service_name: string } }
        output: ServicePrivatelinkGoogleRefreshResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/query/activity': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceQueryActivityRequestBody
        }
        output: ServiceQueryActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/query/stats/reset': {
      $put: {
        input: { param: { project: string; service_name: string } }
        output: ServiceQueryStatisticsResetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/service_type': {
      $patch:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceServiceTypeUpdateRequestBody
            }
            output: ServiceServiceTypeUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceServiceTypeUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_type_not_allowed' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceServiceTypeUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'service_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceServiceTypeUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'service_maintenance_required' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: ServiceServiceTypeUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'retired_api_endpoint' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 410
          }
    }
  } & {
    '/project/:project/service/:service_name/task': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceTaskCreateRequestBody
        }
        output: ServiceTaskCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/task/:task_id': {
      $get: {
        input: { param: { project: string; service_name: string; task_id: string } }
        output: ServiceTaskGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/user': {
      $post: {
        input: { param: { project: string; service_name: string } } & {
          json: ServiceUserCreateRequestBody
        }
        output: ServiceUserCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/user/:service_username': {
      $put: {
        input: { param: { project: string; service_name: string; service_username: string } } & {
          json: ServiceUserCredentialsModifyRequestBody
        }
        output: ServiceUserCredentialsModifyResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { project: string; service_name: string; service_username: string } }
        output: ServiceUserDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; service_name: string; service_username: string } } & {
          query: { include_secrets?: boolean | undefined }
        }
        output: ServiceUserGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/user/:service_username/credentials/reset': {
      $put: {
        input: { param: { project: string; service_name: string; service_username: string } }
        output: ServiceUserCredentialsResetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/integration': {
      $post: {
        input: { param: { project: string } } & { json: ServiceIntegrationCreateRequestBody }
        output: ServiceIntegrationCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/integration/:integration_id': {
      $delete: {
        input: { param: { project: string; integration_id: string } }
        output: ServiceIntegrationDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; integration_id: string } }
        output: ServiceIntegrationGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; integration_id: string } } & {
          json: ServiceIntegrationUpdateRequestBody
        }
        output: ServiceIntegrationUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/integration_endpoint': {
      $post: {
        input: { param: { project: string } } & {
          json: ServiceIntegrationEndpointCreateRequestBody
        }
        output: ServiceIntegrationEndpointCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string } }
        output: ServiceIntegrationEndpointListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/integration_endpoint/:integration_endpoint_id': {
      $delete: {
        input: { param: { project: string; integration_endpoint_id: string } }
        output: ServiceIntegrationEndpointDeleteResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; integration_endpoint_id: string } } & {
          query: { include_secrets?: boolean | undefined }
        }
        output: ServiceIntegrationEndpointGetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; integration_endpoint_id: string } } & {
          json: ServiceIntegrationEndpointUpdateRequestBody
        }
        output: ServiceIntegrationEndpointUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/integration_endpoint_types': {
      $get: {
        input: { param: { project: string } }
        output: ServiceIntegrationEndpointTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/service/:service_name/integration': {
      $get: {
        input: { param: { project: string; service_name: string } }
        output: ServiceIntegrationListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/integration_types': {
      $get: {
        input: { param: { project: string } }
        output: ServiceIntegrationTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/static-ips/:static_ip_address_id/association': {
      $post: {
        input: { param: { project: string; static_ip_address_id: string } } & {
          json: ProjectStaticIPAssociateRequestBody
        }
        output: ProjectStaticIPAssociateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { project: string; static_ip_address_id: string } }
        output: ProjectStaticIPDissociateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/static-ip-availability': {
      $get: {
        input: { param: { project: string } }
        output: ProjectStaticIPAvailabilityListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/project/:project/static-ips/:static_ip_address_id': {
      $patch: {
        input: { param: { project: string; static_ip_address_id: string } } & {
          json: ProjectStaticIPPatchRequestBody
        }
        output: ProjectStaticIPPatchResponse
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { project: string; static_ip_address_id: string } }
            output: StaticIPDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project: string; static_ip_address_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/static-ips': {
      $post: {
        input: { param: { project: string } } & { json: StaticIPCreateRequestBody }
        output: StaticIPCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string } }
        output: StaticIPListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/upgrade-pipeline/steps': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: UpgradePipelineStepCreateRequestBody
            }
            output: UpgradePipelineStepCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: UpgradePipelineStepCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'upgrade_pipeline_not_enabled_for_project' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: UpgradePipelineStepCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: UpgradePipelineStepCreateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'upgrade_step_destination_already_has_source' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                source_project_name?: string | undefined
                source_service_name?: string | undefined
                destination_project_name?: string | undefined
                destination_service_name?: string | undefined
              }
            }
            output: UpgradePipelineStepListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                source_project_name?: string | undefined
                source_service_name?: string | undefined
                destination_project_name?: string | undefined
                destination_service_name?: string | undefined
              }
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/upgrade-pipeline/steps/:step_id': {
      $delete: {
        input: { param: { organization_id: string; step_id: string } }
        output: {
          message?: string | undefined
          errors?:
            | { message?: string | undefined; error_code?: 'upgrade_step_not_found' | undefined }[]
            | undefined
        }
        outputFormat: 'json'
        status: 404
      }
      $get:
        | {
            input: { param: { organization_id: string; step_id: string } }
            output: UpgradePipelineStepGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; step_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'upgrade_step_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organization_id: string; step_id: string } } & {
              json: UpgradePipelineStepUpdateRequestBody
            }
            output: UpgradePipelineStepUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; step_id: string } } & {
              json: UpgradePipelineStepUpdateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'upgrade_step_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/project/:project/service/:service_name/upgrade-validation': {
      $post:
        | {
            input: { param: { project: string; service_name: string } } & {
              json: UpgradePipelineStepValidateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'project_not_found' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project: string; service_name: string } } & {
              json: UpgradePipelineStepValidateRequestBody
            }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'upgrade_step_validation_not_possible_due_to_service_state'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/access_token': {
      $post: {
        input: { json: AccessTokenCreateRequestBody }
        output: AccessTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: AccessTokenListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/access_token/:token_prefix': {
      $delete: {
        input: { param: { token_prefix: string } }
        output: AccessTokenRevokeResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { token_prefix: string } } & { json: AccessTokenUpdateRequestBody }
        output: AccessTokenUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/password_strength': {
      $post: {
        input: { json: CheckPasswordStrengthExistingUserRequestBody }
        output: CheckPasswordStrengthExistingUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/password_strength': {
      $post: {
        input: { json: CheckPasswordStrengthNewUserRequestBody }
        output: CheckPasswordStrengthNewUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user/:member_user_id/user-groups': {
      $get: {
        input: { param: { organization_id: string; member_user_id: string } }
        output: OrganizationMemberGroupsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user/:member_user_id/permissions': {
      $get:
        | {
            input: { param: { organization_id: string; member_user_id: string } }
            output: OrganizationMemberPermissionsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'organization_not_found' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization/:organization_id/user/:member_user_id/authentication_methods': {
      $get: {
        input: { param: { organization_id: string; member_user_id: string } }
        output: OrganizationUserAuthenticationMethodsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user/:member_user_id': {
      $delete:
        | {
            input: { param: { organization_id: string; member_user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'cannot_remove_managed_users_from_organization'
                      | 'organization_must_have_one_super_admin'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?: 'action_forbidden_for_managed_users' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $get: {
        input: { param: { organization_id: string; member_user_id: string } }
        output: OrganizationUserGetResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { organization_id: string; member_user_id: string } } & {
          json: OrganizationUserUpdateRequestBody
        }
        output: OrganizationUserUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user': {
      $get: {
        input: { param: { organization_id: string } } & {
          query: { include_application_users?: boolean | undefined }
        }
        output: OrganizationUserListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user/:member_user_id/reset_password': {
      $post: {
        input: { param: { organization_id: string; member_user_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user/:member_user_id/access-token/:token_prefix': {
      $delete: {
        input: { param: { organization_id: string; member_user_id: string; token_prefix: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organization/:organization_id/user/:member_user_id/access-tokens': {
      $get: {
        input: { param: { organization_id: string; member_user_id: string } }
        output: OrganizationUserTokensListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/2fa': {
      $put: {
        input: { json: TwoFactorAuthConfigureRequestBody }
        output: TwoFactorAuthConfigureResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/2fa/otp': {
      $put: {
        input: { json: TwoFactorAuthConfigureOTPRequestBody }
        output: TwoFactorAuthConfigureOTPResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id': {
      $delete:
        | {
            input: { param: { user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'cannot_delete_active_managed_users'
                      | 'cannot_delete_users_with_organizations_memberships'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } }
            output: {
              message?: string | undefined
              errors?:
                | {
                    message?: string | undefined
                    error_code?:
                      | 'action_forbidden_for_managed_users'
                      | 'action_forbidden_on_application_users'
                      | 'action_forbidden_on_unmanaged_users'
                      | 'user_not_organization_admin'
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/me/account/invites/accept': {
      $post: {
        input: {}
        output: UserAccountInvitesAcceptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/account/invites': {
      $get: { input: {}; output: UserAccountInvitesListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/me/account/invites/reject': {
      $post: {
        input: {}
        output: UserAccountInvitesRejectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userauth': {
      $post:
        | {
            input: { json: UserAuthRequestBody }
            output: UserAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserAuthRequestBody }
            output: {
              message?: string | undefined
              errors?:
                | { message?: string | undefined; error_code?: 'user_deactivated' | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/userauth/login_options': {
      $post: {
        input: { json: UserAuthLoginOptionsRequestBody }
        output: UserAuthLoginOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/authentication_methods/:user_authentication_method_id': {
      $delete: {
        input: { param: { user_authentication_method_id: string } }
        output: UserAuthenticationMethodDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/authentication_methods': {
      $get: {
        input: {}
        output: UserAuthenticationMethodsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/expire_tokens': {
      $post: { input: {}; output: UserExpireTokensResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/me': {
      $get: { input: {}; output: UserInfoResponse; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { json: UserUpdateRequestBody }
        output: UserUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/logout': {
      $post: { input: {}; output: UserLogoutResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/me/password': {
      $put: {
        input: { json: UserPasswordChangeRequestBody }
        output: UserPasswordChangeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/password_reset/:verification_code': {
      $post: {
        input: { param: { verification_code: string } } & { json: UserPasswordResetRequestBody }
        output: UserPasswordResetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/password_reset_request': {
      $post: {
        input: { json: UserPasswordResetRequestRequestBody }
        output: UserPasswordResetRequestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/verify_email/:verification_code': {
      $post: {
        input: { param: { verification_code: string } }
        output: UserVerifyEmailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/credit_code/:credit_code': {
      $get: {
        input: { param: { credit_code: string } }
        output: ValidateCreditCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/referral/validation/:referral_code': {
      $get: {
        input: { param: { referral_code: string } }
        output: ValidateReferralCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
