type JWKSEd25519PublicKey = {
  kid: string
  alg: string
  use: string
  kty: 'OKP'
  crv: 'Ed25519'
  x: string
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
  x5u?: string | undefined
}
type JWKSEcdsaPublicKey = {
  kid: string
  alg: string
  use: string
  kty: 'EC'
  crv: string
  x: string
  y: string
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
  x5u?: string | undefined
}
type JWKSRsaPublicKey = {
  kid: string
  alg: string
  use: string
  kty: 'RSA'
  n: string
  e: string
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
  x5u?: string | undefined
}
type JWKSEd25519PrivateKey = {
  kid: string
  alg: string
  use: string
  kty: 'OKP'
  crv: 'Ed25519'
  x: string
  d: string
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
  x5u?: string | undefined
}
type JWKSEcdsaPrivateKey = {
  kid: string
  alg: string
  use: string
  kty: 'EC'
  crv: string
  x: string
  y: string
  d: string
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
  x5u?: string | undefined
}
type JWKSRsaPrivateKey = {
  kid: string
  alg: string
  use: string
  kty: 'RSA'
  n: string
  e: string
  d: string
  p: string
  q: string
  dp?: string | undefined
  dq?: string | undefined
  qi?: string | undefined
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
  x5u?: string | undefined
}
type JWKSSymmetricKey = {
  kid: string
  alg: string
  use: string
  kty: 'oct'
  k: string
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
  x5u?: string | undefined
}
type JWKS = {
  keys?:
    | (
        | JWKSEd25519PublicKey
        | JWKSEcdsaPublicKey
        | JWKSRsaPublicKey
        | JWKSEd25519PrivateKey
        | JWKSEcdsaPrivateKey
        | JWKSRsaPrivateKey
        | JWKSSymmetricKey
      )[]
    | undefined
}
type SessionActivityResponse = {
  object: string
  id: string
  device_type?: string | undefined
  is_mobile: boolean
  browser_name?: string | undefined
  browser_version?: string | undefined
  ip_address?: string | undefined
  city?: string | undefined
  country?: string | undefined
} | null
type SessionTask = { key: string }
type Session = {
  object: 'session'
  id: string
  user_id: string
  client_id: string
  actor?: ({ [key: string]: unknown } | null) | undefined
  status:
    | 'active'
    | 'revoked'
    | 'ended'
    | 'expired'
    | 'removed'
    | 'abandoned'
    | 'replaced'
    | 'pending'
  last_active_organization_id?: (string | null) | undefined
  last_active_at: number
  latest_activity?: SessionActivityResponse | undefined
  expire_at: bigint
  abandon_at: bigint
  updated_at: bigint
  created_at: bigint
  tasks?: (SessionTask[] | null) | undefined
}
type Client = {
  object: 'client'
  id: string
  revoked_at?: (bigint | null) | undefined
  session_ids: string[]
  sessions: Session[]
  sign_in_id: string | null
  sign_up_id: string | null
  last_active_session_id: string | null
  last_authentication_strategy: string | null
  updated_at: bigint
  created_at: bigint
}
type ClerkError = {
  message: string
  long_message: string
  code: string
  meta?: { [key: string]: unknown } | undefined
}
type ClerkErrors = {
  errors: ClerkError[]
  meta?: { [key: string]: unknown } | undefined
  clerk_trace_id?: string | undefined
}
type Session_2 = {
  object: 'session'
  id: string
  user_id: string
  client_id: string
  actor?: ({ [key: string]: unknown } | null) | undefined
  status: 'active' | 'revoked' | 'ended' | 'expired' | 'removed' | 'abandoned' | 'replaced'
  last_active_organization_id?: (string | null) | undefined
  last_active_at: number
  latest_activity?: SessionActivityResponse | undefined
  expire_at: bigint
  abandon_at: bigint
  updated_at: bigint
  created_at: bigint
}
type Client_2 = {
  object: 'client'
  id: string
  revoked_at?: (bigint | null) | undefined
  session_ids: string[]
  sessions: Session_2[]
  sign_in_id: string | null
  sign_up_id: string | null
  last_active_session_id: string | null
  last_authentication_strategy: string | null
  updated_at: bigint
  created_at: bigint
}
type VerificationOtp = {
  object?: 'verification_otp' | undefined
  status: 'unverified' | 'verified' | 'failed' | 'expired'
  strategy: 'phone_code' | 'email_code' | 'reset_password_email_code'
  attempts: number | null
  expire_at: number | null
  channel?: (string | null) | undefined
  verified_at_client?: (string | null) | undefined
}
type VerificationAdmin = {
  object?: 'verification_admin' | undefined
  status: 'verified'
  strategy: 'admin'
  attempts: number | null
  expire_at: number | null
  verified_at_client?: (string | null) | undefined
}
type VerificationFromOauth = {
  object?: 'verification_from_oauth' | undefined
  status: 'unverified' | 'verified'
  strategy: string
  error?: (ClerkError | null) | undefined
  expire_at: number | null
  attempts: number | null
  verified_at_client?: (string | null) | undefined
}
type VerificationTicket = {
  object?: 'verification_ticket' | undefined
  status: 'unverified' | 'verified' | 'expired'
  strategy: 'ticket'
  attempts: number | null
  expire_at: number | null
  verified_at_client?: (string | null) | undefined
}
type VerificationSaml = {
  object?: 'verification_saml' | undefined
  status: 'unverified' | 'verified' | 'failed' | 'expired' | 'transferable'
  strategy: 'saml'
  external_verification_redirect_url?: (string | null) | undefined
  error?: (ClerkError | null) | undefined
  expire_at?: (number | null) | undefined
  attempts: number | null
  verified_at_client?: (string | null) | undefined
}
type VerificationEmailLink = {
  object?: 'verification_email_link' | undefined
  status: 'unverified' | 'verified' | 'failed' | 'expired'
  strategy: 'email_link'
  attempts: number | null
  expire_at: number | null
  verified_at_client?: (string | null) | undefined
}
type VerificationScim = {
  object?: 'verification_scim' | undefined
  status: 'verified'
  strategy: 'scim'
  attempts: number | null
  expire_at: number | null
}
type IdentificationLink = { type: string; id: string }
type EmailAddress = {
  id?: string | undefined
  object: 'email_address'
  email_address: string
  reserved: boolean
  verification:
    | (
        | VerificationOtp
        | VerificationAdmin
        | VerificationFromOauth
        | VerificationTicket
        | VerificationSaml
        | VerificationEmailLink
        | VerificationScim
      )
    | null
  linked_to: IdentificationLink[]
  matches_sso_connection?: boolean | undefined
  created_at: bigint
  updated_at: bigint
}
type DeletedObject = {
  object: string
  id?: string | undefined
  slug?: string | undefined
  deleted: boolean
  external_id?: string | undefined
}
type PhoneNumber = {
  id?: string | undefined
  object: 'phone_number'
  phone_number: string
  reserved_for_second_factor?: boolean | undefined
  default_second_factor?: boolean | undefined
  reserved: boolean
  verification: (VerificationOtp | VerificationAdmin) | null
  linked_to: IdentificationLink[]
  backup_codes?: (string[] | null) | undefined
  created_at: bigint
  updated_at: bigint
}
type Token = { object: 'token'; jwt: string }
type Cookies = { object: 'cookies'; cookies: string[] }
type SessionRefresh = Token | Cookies
type Reverification = {
  object: 'reverification'
  id: string
  session_id: string
  user_id: string
  level: 'first_factor' | 'second_factor' | 'multi_factor'
  status: 'needs_first_factor' | 'needs_second_factor' | 'complete'
  first_factor_verified_at: bigint | null
  second_factor_verified_at: bigint | null
  created_at: bigint
  updated_at: bigint
}
type Template = {
  id?: string | undefined
  object?: 'template' | undefined
  instance_id?: (string | null) | undefined
  resource_type?: string | undefined
  template_type?: string | undefined
  name?: string | undefined
  slug?: string | undefined
  position?: number | undefined
  can_revert?: boolean | undefined
  can_delete?: boolean | undefined
  can_edit_body?: boolean | undefined
  can_toggle?: boolean | undefined
  subject?: (string | null) | undefined
  markup?: string | undefined
  body?: string | undefined
  available_variables?: string[] | undefined
  required_variables?: string[] | undefined
  from_email_name?: string | undefined
  reply_to_email_name?: string | undefined
  delivered_by_clerk?: boolean | undefined
  enabled?: boolean | undefined
  flagged_as_suspicious?: boolean | undefined
  updated_at?: bigint | undefined
  created_at?: bigint | undefined
}
type VerificationWeb3 = {
  object?: 'verification_web3' | undefined
  status: 'unverified' | 'verified' | 'failed' | 'expired'
  strategy:
    | 'web3_metamask_signature'
    | 'web3_base_signature'
    | 'web3_coinbase_wallet_signature'
    | 'web3_okx_wallet_signature'
    | 'web3_solana_signature'
  nonce?: (string | null) | undefined
  message?: (string | null) | undefined
  attempts: number | null
  expire_at: number | null
  verified_at_client?: (string | null) | undefined
}
type Web3Wallet = {
  id?: string | undefined
  object: 'web3_wallet'
  web3_wallet: string
  verification: (VerificationWeb3 | VerificationAdmin) | null
  created_at: bigint
  updated_at: bigint
}
type VerificationPasskey = {
  object?: 'verification_passkey' | undefined
  status: 'verified'
  strategy: 'passkey'
  nonce?: 'nonce' | undefined
  message?: (string | null) | undefined
  attempts: number | null
  expire_at: number | null
  verified_at_client?: (string | null) | undefined
}
type Passkey = {
  id?: string | undefined
  object: 'passkey'
  name: string
  last_used_at: bigint
  verification: VerificationPasskey | null
}
type VerificationOauth = {
  object?: 'verification_oauth' | undefined
  status: 'unverified' | 'verified' | 'failed' | 'expired' | 'transferable'
  strategy: string
  external_verification_redirect_url?: string | undefined
  error?: (ClerkError | null) | undefined
  expire_at: number
  attempts: number | null
  verified_at_client?: (string | null) | undefined
}
type VerificationGoogleOneTap = {
  object?: 'verification_google_one_tap' | undefined
  status: 'unverified' | 'verified'
  strategy: 'google_one_tap'
  expire_at: number | null
  attempts: number | null
  verified_at_client?: (string | null) | undefined
  error?: (ClerkError | null) | undefined
}
type ExternalAccountWithVerification = {
  object: 'external_account' | 'facebook_account' | 'google_account'
  id: string
  provider: string
  identification_id: string
  provider_user_id: string
  approved_scopes: string
  email_address: string
  email_address_verified?: (boolean | null) | undefined
  first_name: string
  last_name: string
  avatar_url?: string | undefined
  image_url?: (string | null) | undefined
  username?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  public_metadata: { [key: string]: unknown }
  label?: (string | null) | undefined
  created_at: bigint
  updated_at: bigint
  verification: (VerificationOauth | VerificationGoogleOneTap) | null
}
type SAMLAccountConnection = unknown | unknown
type SAMLAccount = {
  id: string
  object: 'saml_account'
  provider: string
  active: boolean
  email_address: string
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  provider_user_id?: (string | null) | undefined
  last_authenticated_at?: (bigint | null) | undefined
  public_metadata?: { [key: string]: unknown } | undefined
  verification: (VerificationSaml | VerificationTicket) | null
  saml_connection?: (SAMLAccountConnection | null) | undefined
}
type EnterpriseAccountConnection = unknown | unknown
type EnterpriseAccount = {
  id: string
  object: 'enterprise_account'
  protocol?: 'oauth' | 'saml' | undefined
  provider: string
  active: boolean
  email_address: string
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  provider_user_id?: (string | null) | undefined
  enterprise_connection_id?: (string | null) | undefined
  public_metadata?: { [key: string]: unknown } | undefined
  verification: (VerificationTicket | VerificationSaml | VerificationOauth) | null
  enterprise_connection?: (EnterpriseAccountConnection | null) | undefined
  last_authenticated_at?: (bigint | null) | undefined
}
type Organization = {
  object: 'organization'
  id: string
  name: string
  slug: string
  image_url?: string | undefined
  has_image: boolean
  members_count?: number | undefined
  missing_member_with_elevated_permissions?: boolean | undefined
  pending_invitations_count?: number | undefined
  max_allowed_memberships: number
  admin_delete_enabled: boolean
  self_serve_sso_enabled?: boolean | undefined
  self_serve_directory_sync_enabled?: boolean | undefined
  public_metadata: { [key: string]: unknown }
  private_metadata?: { [key: string]: unknown } | undefined
  created_by?: string | undefined
  created_at: bigint
  updated_at: bigint
  last_active_at?: bigint | undefined
  role_set_key?: (string | null) | undefined
}
type OrganizationMembershipPublicUserData = {
  user_id: string
  first_name: string | null
  last_name: string | null
  profile_image_url: string | null
  image_url: string
  has_image: boolean
  identifier?: (string | null) | undefined
  username?: (string | null) | undefined
  banned?: boolean | undefined
  deprovisioned?: boolean | undefined
}
type OrganizationMembership = {
  id: string
  object: 'organization_membership'
  role: string
  role_name?: string | undefined
  permissions: string[]
  public_metadata: { [key: string]: unknown }
  private_metadata?: { [key: string]: unknown } | undefined
  organization: Organization
  public_user_data?: OrganizationMembershipPublicUserData | undefined
  created_at: bigint
  updated_at: bigint
}
type SCIMUserMetadata = {
  id: string
  directory_name: string
  provider: string
  enterprise_connection_id: string | null
  groups?: { id: string; display_name: string }[] | undefined
  directory_id: string
  directory_enabled: boolean
  external_id: string | null
}
type User = {
  id: string
  object: 'user'
  external_id: string | null
  primary_email_address_id: string | null
  primary_phone_number_id: string | null
  primary_web3_wallet_id: string | null
  username: string | null
  first_name: string | null
  last_name: string | null
  locale?: (string | null) | undefined
  timezone?: (string | null) | undefined
  profile_image_url?: string | undefined
  image_url?: string | undefined
  has_image: boolean
  public_metadata: { [key: string]: unknown }
  private_metadata?: ({ [key: string]: unknown } | null) | undefined
  unsafe_metadata?: { [key: string]: unknown } | undefined
  email_addresses: EmailAddress[]
  phone_numbers: PhoneNumber[]
  web3_wallets: Web3Wallet[]
  passkeys: Passkey[]
  password_enabled: boolean
  two_factor_enabled: boolean
  totp_enabled: boolean
  backup_code_enabled: boolean
  mfa_enabled_at: bigint | null
  mfa_disabled_at: bigint | null
  password_last_updated_at?: (bigint | null) | undefined
  external_accounts: ExternalAccountWithVerification[]
  saml_accounts: SAMLAccount[]
  enterprise_accounts: EnterpriseAccount[]
  organization_memberships?: OrganizationMembership[] | undefined
  last_sign_in_at: bigint | null
  banned: boolean
  locked: boolean
  deprovisioned?: boolean | undefined
  lockout_expires_in_seconds: bigint | null
  verification_attempts_remaining: bigint | null
  updated_at: bigint
  created_at: bigint
  delete_self_enabled: boolean
  create_organization_enabled: boolean
  create_organizations_limit?: (number | null) | undefined
  last_active_at: bigint | null
  legal_accepted_at: bigint | null
  bypass_client_trust?: boolean | undefined
  directories?: SCIMUserMetadata[] | undefined
  directory?: SCIMUserMetadata | undefined
  scim?: (SCIMUserMetadata | null) | undefined
}
type UserCursorPage = {
  data: User[]
  cursor: {
    starting_after: string | null
    ending_before: string | null
    has_next_page: boolean
    remaining_count_exact?: number | undefined
    remaining_count_at_least?: number | undefined
  }
}
type PasswordHasherInput = string
type TotalCount = { object: 'total_count'; total_count: bigint }
type CommerceMoneyResponse = {
  amount: bigint
  amount_formatted: string
  currency: string
  currency_symbol: string
}
type CommerceSubscriptionCreditResponse = {
  amount?: (CommerceMoneyResponse | null) | undefined
  cycle_remaining_percent?: number | undefined
}
type FeatureResponse = {
  object: 'feature'
  id: string
  name: string
  description: string
  slug: string
  avatar_url: string
}
type CommercePlan = {
  object: 'commerce_plan'
  id: string
  name: string
  fee: CommerceMoneyResponse | null
  annual_monthly_fee: CommerceMoneyResponse | null
  annual_fee: CommerceMoneyResponse | null
  amount: bigint
  amount_formatted: string
  annual_monthly_amount: bigint
  annual_monthly_amount_formatted: string
  annual_amount: bigint
  annual_amount_formatted: string
  currency_symbol: string
  currency: string
  description: string
  product_id: string
  is_default: boolean
  is_recurring: boolean
  publicly_visible: boolean
  has_base_fee: boolean
  payer_type: string[]
  for_payer_type: string
  slug: string
  avatar_url: string
  period?: string | undefined
  interval?: bigint | undefined
  features: FeatureResponse[]
  free_trial_enabled?: boolean | undefined
  free_trial_days?: (bigint | null) | undefined
}
type CommercePaymentSourceResponse = {
  object: 'commerce_source'
  id: string
  payer_id: string
  payment_method: 'card' | 'apple_pay' | 'google_pay'
  is_default?: (boolean | null) | undefined
  gateway: string
  gateway_external_id: string
  gateway_external_account_id?: (string | null) | undefined
  last4: string
  status: 'active' | 'disconnected'
  wallet_type: string
  card_type: string
  expiry_year?: number | undefined
  expiry_month?: number | undefined
  created_at: bigint
  updated_at: bigint
  is_removable?: (boolean | null) | undefined
}
type CommercePerUnitTotalTier = {
  quantity?: (bigint | null) | undefined
  fee_per_block: CommerceMoneyResponse
  total: CommerceMoneyResponse
}
type CommercePerUnitTotal = { name: string; block_size: bigint; tiers: CommercePerUnitTotalTier[] }
type CommerceProrationCreditDetailResponse = {
  amount: CommerceMoneyResponse
  cycle_days_remaining: bigint
  cycle_days_total: bigint
  cycle_remaining_percent: number
}
type CommercePayerCreditResponse = {
  remaining_balance: CommerceMoneyResponse
  applied_amount: CommerceMoneyResponse
}
type CommerceCreditsResponse = {
  proration: CommerceProrationCreditDetailResponse | null
  payer: CommercePayerCreditResponse | null
  total: CommerceMoneyResponse
}
type CommerceProrationDiscountResponse = {
  amount: CommerceMoneyResponse
  cycle_days_passed: bigint
  cycle_days_total: bigint
  cycle_passed_percent: number
}
type CommerceDiscountsResponse = {
  proration: CommerceProrationDiscountResponse | null
  total: CommerceMoneyResponse
}
type CommerceTotalsResponse = {
  subtotal: CommerceMoneyResponse
  base_fee: CommerceMoneyResponse
  tax_total: CommerceMoneyResponse
  grand_total: CommerceMoneyResponse
  per_unit_totals?: CommercePerUnitTotal[] | undefined
  credits?: (CommerceCreditsResponse | null) | undefined
  discounts?: (CommerceDiscountsResponse | null) | undefined
}
type CommerceSubscriptionItemNextPaymentResponse = {
  amount?: (CommerceMoneyResponse | null) | undefined
  date?: (bigint | null) | undefined
  per_unit_totals?: CommercePerUnitTotal[] | undefined
  totals?: (CommerceTotalsResponse | null) | undefined
}
type CommercePayerResponse = {
  object: 'commerce_payer'
  id: string
  instance_id: string
  user_id?: string | undefined
  first_name: string
  last_name: string
  email: string
  organization_id?: string | undefined
  organization_name?: string | undefined
  image_url: string
  credits_balance?: CommerceMoneyResponse | undefined
  created_at: bigint
  updated_at: bigint
}
type CommerceSubscriptionItem = {
  object: 'commerce_subscription_item'
  id: string
  instance_id: string
  status: 'active' | 'ended' | 'past_due' | 'upcoming' | 'incomplete' | 'abandoned'
  credit?: (CommerceSubscriptionCreditResponse | null) | undefined
  plan_id: string
  price_id?: string | undefined
  plan: CommercePlan | null
  plan_period: 'month' | 'annual'
  payment_source_id: string
  payment_source?: (CommercePaymentSourceResponse | null) | undefined
  lifetime_paid?: (CommerceMoneyResponse | null) | undefined
  amount?: (CommerceMoneyResponse | null) | undefined
  next_invoice?: (CommerceSubscriptionItemNextPaymentResponse | null) | undefined
  next_payment?: (CommerceSubscriptionItemNextPaymentResponse | null) | undefined
  payer_id: string
  payer?: (CommercePayerResponse | null) | undefined
  is_free_trial: boolean
  period_start?: (bigint | null) | undefined
  period_end?: (bigint | null) | undefined
  proration_date: string
  canceled_at?: (bigint | null) | undefined
  past_due_at?: (bigint | null) | undefined
  ended_at?: (bigint | null) | undefined
  created_at: bigint
  updated_at: bigint
}
type CommerceSubscriptionNextPayment = {
  time: bigint
  date: bigint
  amount: CommerceMoneyResponse
  per_unit_totals?: CommercePerUnitTotal[] | undefined
  totals?: (CommerceTotalsResponse | null) | undefined
}
type CommerceSubscription = {
  object: 'commerce_subscription'
  id: string
  instance_id: string
  status: 'active' | 'past_due' | 'canceled' | 'ended' | 'abandoned' | 'incomplete'
  payer_id: string
  created_at: bigint
  updated_at: bigint
  active_at?: (bigint | null) | undefined
  past_due_at?: (bigint | null) | undefined
  subscription_items: CommerceSubscriptionItem[]
  next_payment?: (CommerceSubscriptionNextPayment | null) | undefined
  eligible_for_free_trial?: (boolean | null) | undefined
}
type CommerceCreditBalanceResponse = { object: string; balance: CommerceMoneyResponse | null }
type AdjustCreditBalanceRequestInput = {
  amount: bigint
  action: 'increase' | 'decrease'
  currency?: string
  idempotency_key: string
  note?: string
}
type CommerceCreditLedgerResponse = {
  object: string
  id: string
  payer_id: string
  amount: CommerceMoneyResponse
  source_type: string
  source_id: string
  note?: (string | null) | undefined
  created_at: string
}
type OAuthAccessToken = {
  object: 'oauth_access_token'
  external_account_id: string
  provider_user_id: string
  token: string
  expires_at: bigint | null
  provider: string
  public_metadata: { [key: string]: unknown }
  label: string | null
  scopes?: string[] | undefined
  id_token?: string | undefined
  token_secret?: string | undefined
}[]
type OrganizationMemberships = { data: OrganizationMembership[]; total_count: bigint }
type OrganizationInvitationPublicUserData = {
  user_id: string
  first_name: string | null
  last_name: string | null
  image_url: string
  has_image: boolean
  identifier: string
} | null
type OrganizationInvitationPublicOrganizationData = {
  id: string
  name: string
  slug: string
  image_url?: string | undefined
  has_image: boolean
}
type OrganizationInvitationWithPublicOrganizationData = {
  object?: 'organization_invitation' | undefined
  id?: string | undefined
  email_address?: string | undefined
  role?: string | undefined
  role_name?: string | undefined
  organization_id?: string | undefined
  inviter_id?: (string | null) | undefined
  public_inviter_data?: OrganizationInvitationPublicUserData | undefined
  status?: string | undefined
  public_metadata?: { [key: string]: unknown } | undefined
  private_metadata?: { [key: string]: unknown } | undefined
  url?: (string | null) | undefined
  expires_at?: (bigint | null) | undefined
  created_at?: bigint | undefined
  updated_at?: bigint | undefined
} & { public_organization_data?: OrganizationInvitationPublicOrganizationData | undefined }
type OrganizationInvitationsWithPublicOrganizationData = {
  data: OrganizationInvitationWithPublicOrganizationData[]
  total_count: bigint
}
type TrustedDevice = {
  object: 'trusted_device'
  id: string
  platform: 'ios' | 'android'
  app_identifier: string
  name?: (string | null) | undefined
  algorithm: 'ES256'
  status: 'active' | 'revoked'
  created_at: bigint
  updated_at: bigint
  last_used_at?: (bigint | null) | undefined
  revoked_at?: (bigint | null) | undefined
}
type Invitation = {
  object: 'invitation'
  id: string
  email_address: string
  public_metadata: { [key: string]: unknown }
  revoked?: boolean | undefined
  status: 'pending' | 'accepted' | 'revoked' | 'expired'
  url?: string | undefined
  expires_at?: (bigint | null) | undefined
  created_at: bigint
  updated_at: bigint
}
type AllowlistIdentifier = {
  object?: 'allowlist_identifier' | undefined
  id?: string | undefined
  invitation_id?: string | undefined
  identifier?: string | undefined
  identifier_type?: 'email_address' | 'phone_number' | 'web3_wallet' | undefined
  instance_id?: string | undefined
  created_at?: bigint | undefined
  updated_at?: bigint | undefined
}
type BlocklistIdentifier = {
  object?: 'blocklist_identifier' | undefined
  id?: string | undefined
  identifier?: string | undefined
  identifier_type?: 'email_address' | 'phone_number' | 'web3_wallet' | undefined
  instance_id?: string | undefined
  created_at?: bigint | undefined
  updated_at?: bigint | undefined
}
type BlocklistIdentifiers = { data: BlocklistIdentifier[]; total_count: bigint }
type ActorToken = {
  object: 'actor_token'
  id: string
  status: 'pending' | 'accepted' | 'revoked'
  user_id: string
  actor: { [key: string]: unknown }
  token?: string | undefined
  url?: string | undefined
  created_at: bigint
  updated_at: bigint
}
type CNameTarget = { host: string; value: string; required: boolean }
type DNSTarget = {
  host: string
  value: string
  record_type: 'CNAME' | 'TXT'
  automation_disposition?:
    | 'already_satisfied'
    | 'safe_to_create'
    | 'manual_resolution_required'
    | undefined
  required: boolean
}
type Domain = {
  object: 'domain'
  id: string
  name: string
  is_satellite: boolean
  frontend_api_url: string
  accounts_portal_url?: (string | null) | undefined
  proxy_url?: (string | null) | undefined
  development_origin: string
  cname_targets?: (CNameTarget[] | null) | undefined
  dns_targets?: (DNSTarget[] | null) | undefined
}
type Domains = { data: Domain[]; total_count: bigint }
type Instance = {
  object: 'instance'
  id: string
  environment_type: string
  allowed_origins: string[] | null
  allowed_subdomains: string[]
  subdomain_allowlist_enabled: boolean
  workspace_id: string | null
  max_allowed_users: number | null
}
type InstanceRestrictions = {
  object: 'instance_restrictions'
  allowlist: boolean
  blocklist: boolean
  allowlist_blocklist_disabled_on_sign_in: boolean
  block_email_subaddresses: boolean
  block_disposable_email_domains: boolean
}
type InstanceProtect = {
  object: 'instance_protect'
  rules_enabled: boolean
  specter_enabled: boolean
  checks_bypassed: boolean
  checks_verified: boolean
  checks_exempt: boolean
}
type InstanceCommunication = { object: 'instance_communication'; blocked_country_codes: string[] }
type OAuthApplicationSettings = {
  object: 'oauth_application_settings'
  dynamic_oauth_client_registration: boolean
  dynamic_client_allowed_scopes?: (string[] | null) | undefined
  default_scopes: string[] | null
  oauth_jwt_access_tokens: boolean
  aud_claim_enabled: boolean
  aud_claim_refresh_backfill_enabled: boolean
  pkce_required: boolean
  client_id_metadata_documents_advertised: boolean
  client_id_metadata_documents_only_allow_pre_registered_clients: boolean
  client_id_metadata_documents_block_implicitly_allowed_clients: boolean
}
type OrganizationSettings = {
  object: 'organization_settings'
  enabled: boolean
  max_allowed_memberships: number
  max_allowed_roles: number
  max_role_sets_allowed?: number | undefined
  max_allowed_domains: number
  max_allowed_permissions?: number | undefined
  creator_role: string
  admin_delete_enabled: boolean
  domains_enabled: boolean
  slug_disabled?: boolean | undefined
  domains_enrollment_modes: (
    | 'manual_invitation'
    | 'automatic_invitation'
    | 'automatic_suggestion'
  )[]
  domains_default_role: string
  initial_role_set_key?: (string | null) | undefined
}
type SvixURL = { svix_url: string }
type JWTTemplate = {
  object: 'jwt_template'
  id: string
  name: string
  claims: { [key: string]: unknown }
  lifetime: number
  allowed_clock_skew: number
  custom_signing_key: boolean
  signing_algorithm: string
  created_at: bigint
  updated_at: bigint
}
type MachineWithoutScopedMachines = {
  object: 'machine'
  id: string
  name: string
  instance_id: string
  created_at: bigint
  updated_at: bigint
  default_token_ttl?: number | undefined
}
type Machine = MachineWithoutScopedMachines & { scoped_machines: MachineWithoutScopedMachines[] }
type MachineScope = {
  object: 'machine_scope'
  from_machine_id: string
  to_machine_id: string
  created_at: bigint
}
type Organizations = { data: Organization[]; total_count: bigint }
type ReassignmentMappingsInput = { [key: string]: string }
type OrganizationWithLogo = Organization & {
  logo_url?: string | undefined
  image_url: string
  has_image: boolean
}
type OrganizationInvitation = {
  object: 'organization_invitation'
  id: string
  email_address: string
  role: string
  role_name: string
  organization_id?: string | undefined
  inviter_id: string | null
  public_inviter_data: OrganizationInvitationPublicUserData
  status?: string | undefined
  public_metadata: { [key: string]: unknown }
  private_metadata?: { [key: string]: unknown } | undefined
  url: string | null
  expires_at: bigint | null
  created_at: bigint
  updated_at: bigint
}
type OrganizationInvitations = { data: OrganizationInvitation[]; total_count: bigint }
type Permission = {
  object: 'permission'
  id: string
  name: string
  key: string
  description: string
  type: string
  created_at: bigint
  updated_at: bigint
}
type Role = {
  object: 'role'
  id: string
  name: string
  key: string
  description: string | null
  is_creator_eligible: boolean
  permissions: Permission[]
  created_at: bigint
  updated_at: bigint
}
type Roles = { data: Role[]; total_count: bigint }
type OrganizationDomainVerification = {
  status: string
  strategy: string
  attempts: number | null
  expire_at: bigint | null
  verified_at: bigint | null
}
type OrganizationDomain = {
  object: 'organization_domain'
  id: string
  organization_id: string
  name: string
  enrollment_mode:
    | 'manual_invitation'
    | 'automatic_invitation'
    | 'automatic_suggestion'
    | 'enterprise_sso'
  affiliation_email_address: string | null
  affiliation_verification: OrganizationDomainVerification | null
  ownership_verification: OrganizationDomainVerification | null
  verification: OrganizationDomainVerification | null
  total_pending_invitations: number
  total_pending_suggestions: number
  public_organization_data?: (OrganizationInvitationPublicOrganizationData | null) | undefined
  created_at: bigint
  updated_at: bigint
}
type OrganizationDomains = { data: OrganizationDomain[]; total_count: bigint }
type ProxyCheck = {
  object: 'proxy_check'
  id: string
  domain_id: string
  last_run_at: bigint | null
  proxy_url: string
  successful: boolean
  created_at: bigint
  updated_at: bigint
}
type RedirectURL = {
  object: 'redirect_url'
  id: string
  url: string
  created_at: bigint
  updated_at: bigint
}
type SignInToken = {
  object: 'sign_in_token'
  id: string
  status: 'pending' | 'accepted' | 'revoked'
  user_id: string
  token?: string | undefined
  url?: (string | null) | undefined
  created_at: bigint
  updated_at: bigint
}
type SignUpVerification = {
  next_action?: 'needs_prepare' | 'needs_attempt' | '' | undefined
  supported_strategies?: string[] | undefined
} | null
type SignUpVerifications = {
  email_address: SignUpVerification
  phone_number: SignUpVerification
  web3_wallet: SignUpVerification
  external_account: { [key: string]: unknown } | null
}
type SignUp = {
  object: 'sign_up_attempt'
  id: string
  status: 'missing_requirements' | 'complete' | 'abandoned'
  required_fields: string[]
  optional_fields: string[]
  missing_fields: string[]
  unverified_fields: string[]
  verifications: SignUpVerifications
  username: string | null
  email_address: string | null
  phone_number: string | null
  web3_wallet: string | null
  password_enabled: boolean
  first_name: string | null
  last_name: string | null
  unsafe_metadata?: { [key: string]: unknown } | undefined
  public_metadata?: { [key: string]: unknown } | undefined
  custom_action: boolean
  external_id: string | null
  created_session_id: string | null
  created_user_id: string | null
  abandon_at: bigint
  legal_accepted_at: bigint | null
  timezone?: (string | null) | undefined
  locale?: (string | null) | undefined
  external_account?: { [key: string]: unknown } | undefined
}
type OAuthApplication = {
  object: 'oauth_application'
  id: string
  instance_id: string
  name: string
  client_id: string
  client_uri: string | null
  client_image_url: string | null
  dynamically_registered: boolean
  consent_screen_enabled: boolean
  pkce_required: boolean
  audience_uri: string | null
  token_exchange_enabled: boolean
  device_authorization_grant_enabled: boolean
  public: boolean
  scopes: string
  redirect_uris: string[]
  callback_url: string
  authorize_url: string
  token_fetch_url: string
  user_info_url: string
  discovery_url: string
  token_introspection_url: string
  created_at: bigint
  updated_at: bigint
}
type OAuthApplications = { data: OAuthApplication[]; total_count: bigint }
type OAuthApplicationWithSecret = OAuthApplication & { client_secret?: string | undefined }
type SAMLConnection = unknown | unknown
type SAMLConnections = { data: SAMLConnection[]; total_count: bigint }
type EnterpriseConnection = {
  object: 'enterprise_connection'
  id: string
  name: string
  provider: string
  logo_public_url?: (string | null) | undefined
  active: boolean
  domains: string[]
  organization_id?: (string | null) | undefined
  sync_user_attributes?: boolean | undefined
  disable_additional_identifications?: boolean | undefined
  allow_organization_account_linking?: boolean | undefined
  custom_attributes?:
    | {
        name: string
        key: string
        sso_path?: string | undefined
        scim_path?: string | undefined
        directory_path?: string | undefined
        multi_valued?: boolean | undefined
      }[]
    | undefined
  saml_connection?:
    | ({
        id?: string | undefined
        name?: string | undefined
        idp_entity_id?: (string | null) | undefined
        idp_sso_url?: (string | null) | undefined
        idp_certificate?: (string | null) | undefined
        idp_certificate_issued_at?: (bigint | null) | undefined
        idp_certificate_expires_at?: (bigint | null) | undefined
        idp_certificates?:
          | { certificate: string; issued_at: bigint | null; expires_at: bigint | null }[]
          | undefined
        idp_metadata_url?: (string | null) | undefined
        acs_url?: (string | null) | undefined
        sp_entity_id?: (string | null) | undefined
        sp_metadata_url?: (string | null) | undefined
        active?: boolean | undefined
        allow_idp_initiated?: boolean | undefined
        allow_subdomains?: boolean | undefined
        force_authn?: boolean | undefined
        login_hint?:
          | { mode: 'email_address' | 'custom_attribute' | 'off'; source?: string | undefined }
          | undefined
      } | null)
    | undefined
  oauth_config?:
    | ({
        id?: string | undefined
        name?: string | undefined
        provider_key?: string | undefined
        client_id?: (string | null) | undefined
        discovery_url?: (string | null) | undefined
        auth_url?: (string | null) | undefined
        token_url?: (string | null) | undefined
        user_info_url?: (string | null) | undefined
        requires_pkce?: boolean | undefined
        logo_public_url?: (string | null) | undefined
        created_at?: bigint | undefined
        updated_at?: bigint | undefined
      } | null)
    | undefined
  created_at: bigint
  updated_at: bigint
}
type EnterpriseConnections = { data: EnterpriseConnection[]; total_count: bigint }
type EnterpriseConnectionTestRun = {
  id: string
  status: 'pending' | 'success' | 'failed'
  connection_type: 'saml' | 'oauth'
  parsed_user_info?:
    | ({
        email_address?: string | undefined
        first_name?: string | undefined
        last_name?: string | undefined
        user_id?: string | undefined
      } | null)
    | undefined
  logs?:
    | {
        level: string
        code?: string | undefined
        short_message?: string | undefined
        message: string
      }[]
    | undefined
  saml?:
    | ({
        saml_request?: string | undefined
        saml_response?: string | undefined
        relay_state?: string | undefined
      } | null)
    | undefined
  oauth?:
    | ({
        id_token?: string | undefined
        access_token?: string | undefined
        user_info?: string | undefined
      } | null)
    | undefined
  created_at: bigint
}
type EnterpriseConnectionTestRuns = { data: EnterpriseConnectionTestRun[]; total_count: bigint }
type EnterpriseConnectionTestRunResponse = { url: string }
type TestingToken = { object: 'testing_token'; token: string; expires_at: bigint }
type WaitlistEntry = {
  object: 'waitlist_entry'
  id: string
  email_address: string
  status: 'pending' | 'invited' | 'rejected' | 'completed'
  is_locked?: boolean | undefined
  created_at: bigint
  updated_at: bigint
  invitation?: (Invitation | null) | undefined
}
type PaginatedCommercePlanResponse = { data: CommercePlan[]; total_count: bigint }
type PaginatedCommerceSubscriptionItemResponse = {
  data: CommerceSubscriptionItem[]
  total_count: bigint
}
type ExtendFreeTrialRequestInput = { extend_to: string }
type PriceTransitionRequestInput = { from_price_id: string; to_price_id: string }
type BillingPriceResponse = {
  object: 'commerce_price'
  id: string
  plan_id: string
  instance_id: string
  currency: string
  currency_symbol: string
  amount: bigint
  annual_monthly_amount: bigint
  fee: CommerceMoneyResponse | null
  annual_monthly_fee: CommerceMoneyResponse | null
  description?: (string | null) | undefined
  is_default: boolean
  created_at: bigint
  supported_billing_periods: 'month' | 'annual' | 'both'
}
type CommercePriceTransitionDetails = {
  previous_plan: CommercePlan
  previous_price: BillingPriceResponse
  effective_at: bigint
  effective_mode: 'immediate' | 'end_of_period'
  next_billing_date?: (bigint | null) | undefined
  charged_immediately: boolean
  immediate_charge?: (CommerceMoneyResponse | null) | undefined
  previous_subscription_item_status: 'canceled' | 'ended' | 'abandoned'
  previous_subscription_item_id: string
}
type CommercePriceTransitionResponse = {
  object: 'commerce_price_transition'
  subscription_item: CommerceSubscriptionItem
  transition: CommercePriceTransitionDetails
}
type ApplyCommerceDiscountRequestInput = { discount_id: string }
type CommerceDiscountRedemptionResponse = {
  object: 'commerce_discount_redemption'
  id: string
  subscription_item_id: string
  discount_id: string
  name?: string | undefined
  source: 'promotion' | 'manual' | 'promo_code'
  promo_code?: string | undefined
  effect?: 'percentage' | 'fixed_amount' | undefined
  percent_off?: (number | null) | undefined
  amount_off?: (CommerceMoneyResponse | null) | undefined
  amount?: (CommerceMoneyResponse | null) | undefined
  cycles_remaining: number | null
  cycles_applied: number
  status?: 'active' | 'exhausted' | 'removed' | undefined
  redeemed_at: bigint
  redeemed_by: string | null
}
type Permissions = { data: Permission[]; total_count: bigint }
type RoleSetItem = {
  object: 'role_set_item'
  id: string
  name: string
  key: string
  description: string | null
  members_count?: (bigint | null) | undefined
  has_members?: (boolean | null) | undefined
  created_at: bigint
  updated_at: bigint
}
type RoleSetMigration = {
  object: 'role_set_migration'
  id: string
  organization_id?: (string | null) | undefined
  instance_id: string
  source_role_set_id: string
  dest_role_set_id?: (string | null) | undefined
  trigger_type: string
  status: string
  migrated_members: number
  mappings?: ({ [key: string]: string } | null) | undefined
  started_at?: (bigint | null) | undefined
  completed_at?: (bigint | null) | undefined
  created_at: bigint
  updated_at: bigint
}
type RoleSet = {
  object: 'role_set'
  id: string
  name: string
  key: string
  description: string | null
  roles: RoleSetItem[]
  default_role?: (RoleSetItem | null) | undefined
  creator_role?: (RoleSetItem | null) | undefined
  type: 'initial' | 'custom'
  role_set_migration?: (RoleSetMigration | null) | undefined
  created_at: bigint
  updated_at: bigint
}
type RoleSets = { data: RoleSet[]; total_count: bigint }
type LogApplicationContext = {
  id?: (string | null) | undefined
  name?: (string | null) | undefined
}
type LogDomainContext = { id?: (string | null) | undefined; name?: (string | null) | undefined }
type LogEnvironmentContext = {
  type?: (string | null) | undefined
  application?: LogApplicationContext | undefined
  domain?: LogDomainContext | undefined
  primary_domain?: LogDomainContext | undefined
}
type LogBrowserContext = {
  name?: (string | null) | undefined
  version?: (string | null) | undefined
}
type LogLocationContext = {
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  country_code?: string | undefined
}
type LogDeviceContext = {
  ip_address?: (string | null) | undefined
  user_agent?: (string | null) | undefined
  browser?: LogBrowserContext | undefined
  device_type?: (string | null) | undefined
  is_mobile?: (boolean | null) | undefined
  location?: LogLocationContext | undefined
  clerk_js_version?: (string | null) | undefined
  is_native?: (boolean | null) | undefined
}
type LogContext = {
  environment?: LogEnvironmentContext | undefined
  device?: (LogDeviceContext | null) | undefined
}
type Log = {
  object: string
  id: string
  event_time: bigint
  actor: string
  actor_type?: string | undefined
  impersonator?: ({ user_id?: (string | null) | undefined } | null) | undefined
  subject: string
  type: string
  client_id?: (string | null) | undefined
  source: string | null
  session_id?: (string | null) | undefined
  trace_id: string
  span_id: string
  parent_span_id?: (string | null) | undefined
  event_context: LogContext
  group_id?: (string | null) | undefined
  group_type?: (string | null) | undefined
  group_started_at?: (bigint | null) | undefined
  payload?: { [key: string]: unknown } | undefined
}
type LogGroup = {
  object: 'log_group'
  group_id: string
  group_type: string
  started_at: bigint
  event_count: bigint
  matched_event_count?: bigint | undefined
  status: string | null
  status_label: string | null
  subject: string
  first_event: Log | null
  events: Log[]
  has_more_events: boolean
  events_cursor: string | null
}
type LogSchemaField = {
  path: string
  type: 'string' | 'boolean' | 'integer' | 'number'
  optional: boolean
  enum?: string[] | undefined
}
type LogSchema = {
  object: string
  event_type: string
  description?: string | undefined
  severity?: string | undefined
  docs_group?: string | undefined
  matched_event_types?: string[] | undefined
  fields: LogSchemaField[]
}
type LogSchemaList = { object: string; data: LogSchema[]; total_count: bigint }
type LogWithPayload = Log & { payload: { [key: string]: unknown } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/public/interstitial': {
      $get:
        | {
            input: {
              query: {
                frontendApi?: string
                frontend_api?: string
                publishable_key?: string
                proxy_url?: string
                domain?: string
                sign_in_url?: string
                use_domain_for_script?: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                frontendApi?: string
                frontend_api?: string
                publishable_key?: string
                proxy_url?: string
                domain?: string
                sign_in_url?: string
                use_domain_for_script?: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                frontendApi?: string
                frontend_api?: string
                publishable_key?: string
                proxy_url?: string
                domain?: string
                sign_in_url?: string
                use_domain_for_script?: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & { '/jwks': { $get: { input: {}; output: JWKS; outputFormat: 'json'; status: 200 } } } & {
    '/clients': {
      $get:
        | {
            input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
            output: Client[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/clients/verify': {
      $post:
        | { input: { json: { token: string } }; output: Client; outputFormat: 'json'; status: 200 }
        | {
            input: { json: { token: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { token: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/clients/:client_id': {
      $get:
        | {
            input: { param: { client_id: string } }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/clients/:client_id/revoke': {
      $post:
        | {
            input: { param: { client_id: string } }
            output: Client_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/email_addresses': {
      $post:
        | {
            input: {
              json: {
                user_id: string
                email_address: string
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: EmailAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                user_id: string
                email_address: string
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                user_id: string
                email_address: string
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                user_id: string
                email_address: string
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                user_id: string
                email_address: string
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                user_id: string
                email_address: string
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                user_id: string
                email_address: string
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/email_addresses/:email_address_id': {
      $get:
        | {
            input: { param: { email_address_id: string } }
            output: EmailAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { email_address_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
      $patch:
        | {
            input: { param: { email_address_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: EmailAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/email_addresses/:email_address_id/prepare_verification': {
      $post:
        | {
            input: { param: { email_address_id: string } }
            output: {
              object?: string | undefined
              id?: string | undefined
              status?: string | undefined
              strategy?: string | undefined
              attempts?: (number | null) | undefined
              expire_at?: (bigint | null) | undefined
              channel?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { email_address_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/email_addresses/:email_address_id/attempt_verification': {
      $post:
        | {
            input: { param: { email_address_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: {
              object?: string | undefined
              id?: string | undefined
              status?: string | undefined
              strategy?: string | undefined
              attempts?: (number | null) | undefined
              expire_at?: (bigint | null) | undefined
              channel?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { email_address_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/email_address': {
      $put:
        | {
            input: { param: { user_id: string } } & {
              json: {
                email_address: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: EmailAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                email_address: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                email_address: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                email_address: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                email_address: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                email_address: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
                notify_primary_email_address_changed?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/phone_numbers': {
      $post:
        | {
            input: {
              json: {
                user_id: string
                phone_number: string
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: PhoneNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                user_id: string
                phone_number: string
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                user_id: string
                phone_number: string
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                user_id: string
                phone_number: string
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                user_id: string
                phone_number: string
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                user_id: string
                phone_number: string
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/phone_numbers/:phone_number_id': {
      $get:
        | {
            input: { param: { phone_number_id: string } }
            output: PhoneNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { phone_number_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { phone_number_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: PhoneNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: {
                verified?: boolean | null
                primary?: boolean | null
                reserved_for_second_factor?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/phone_numbers/:phone_number_id/prepare_verification': {
      $post:
        | {
            input: { param: { phone_number_id: string } }
            output: {
              object?: string | undefined
              id?: string | undefined
              status?: string | undefined
              strategy?: string | undefined
              attempts?: (number | null) | undefined
              expire_at?: (bigint | null) | undefined
              channel?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { phone_number_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/phone_numbers/:phone_number_id/attempt_verification': {
      $post:
        | {
            input: { param: { phone_number_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: {
              object?: string | undefined
              id?: string | undefined
              status?: string | undefined
              strategy?: string | undefined
              attempts?: (number | null) | undefined
              expire_at?: (bigint | null) | undefined
              channel?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { phone_number_id: string } } & {
              json: { verification_id: string; code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/phone_number': {
      $put:
        | {
            input: { param: { user_id: string } } & {
              json: {
                phone_number: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
              }
            }
            output: PhoneNumber
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                phone_number: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                phone_number: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                phone_number: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                phone_number: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                phone_number: string
                identification_status?: 'verified' | 'reserved' | 'unverified'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sessions': {
      $get:
        | {
            input: {
              query: {
                client_id?: string
                user_id?: string
                status?:
                  | 'abandoned'
                  | 'active'
                  | 'ended'
                  | 'expired'
                  | 'removed'
                  | 'replaced'
                  | 'revoked'
                paginated?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: Session[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id?: string
                user_id?: string
                status?:
                  | 'abandoned'
                  | 'active'
                  | 'ended'
                  | 'expired'
                  | 'removed'
                  | 'replaced'
                  | 'revoked'
                paginated?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                client_id?: string
                user_id?: string
                status?:
                  | 'abandoned'
                  | 'active'
                  | 'ended'
                  | 'expired'
                  | 'removed'
                  | 'replaced'
                  | 'revoked'
                paginated?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                client_id?: string
                user_id?: string
                status?:
                  | 'abandoned'
                  | 'active'
                  | 'ended'
                  | 'expired'
                  | 'removed'
                  | 'replaced'
                  | 'revoked'
                paginated?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: { user_id: string; active_organization_id?: string } }
            output: Session
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { user_id: string; active_organization_id?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { user_id: string; active_organization_id?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { user_id: string; active_organization_id?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { user_id: string; active_organization_id?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sessions/:session_id': {
      $get:
        | {
            input: { param: { session_id: string } }
            output: Session
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { session_id: string } } & { json: { expire_at: string } }
            output: Session
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: { expire_at: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: { expire_at: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { json: { expire_at: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { session_id: string } } & { json: { expire_at: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: { expire_at: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sessions/:session_id/refresh': {
      $post:
        | {
            input: { param: { session_id: string } } & {
              json: {
                expired_token: string
                refresh_token: string
                request_origin: string
                request_headers?: { [key: string]: unknown } | null
                format?: 'token' | 'cookie' | null
                request_originating_ip?: string | null
              }
            }
            output: SessionRefresh
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              json: {
                expired_token: string
                refresh_token: string
                request_origin: string
                request_headers?: { [key: string]: unknown } | null
                format?: 'token' | 'cookie' | null
                request_originating_ip?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & {
              json: {
                expired_token: string
                refresh_token: string
                request_origin: string
                request_headers?: { [key: string]: unknown } | null
                format?: 'token' | 'cookie' | null
                request_originating_ip?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              json: {
                expired_token: string
                refresh_token: string
                request_origin: string
                request_headers?: { [key: string]: unknown } | null
                format?: 'token' | 'cookie' | null
                request_originating_ip?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/sessions/:session_id/reverifications/:reverification_id': {
      $get:
        | {
            input: { param: { session_id: string; reverification_id: string } }
            output: Reverification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; reverification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string; reverification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; reverification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sessions/:session_id/revoke': {
      $post:
        | {
            input: { param: { session_id: string } } & { json: { reset_client_trust?: boolean } }
            output: Session
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & { json: { reset_client_trust?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { session_id: string } } & { json: { reset_client_trust?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & { json: { reset_client_trust?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { session_id: string } } & { json: { reset_client_trust?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sessions/:session_id/tokens': {
      $post:
        | {
            input: { param: { session_id: string } } & {
              json: { expires_in_seconds?: number | null }
            }
            output: { object?: 'token' | undefined; jwt?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string } } & {
              json: { expires_in_seconds?: number | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string } } & {
              json: { expires_in_seconds?: number | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string } } & {
              json: { expires_in_seconds?: number | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sessions/:session_id/tokens/:template_name': {
      $post:
        | {
            input: { param: { session_id: string; template_name: string } } & {
              json: { expires_in_seconds?: number | null }
            }
            output: { object?: 'token' | undefined; jwt?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { session_id: string; template_name: string } } & {
              json: { expires_in_seconds?: number | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { session_id: string; template_name: string } } & {
              json: { expires_in_seconds?: number | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { session_id: string; template_name: string } } & {
              json: { expires_in_seconds?: number | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/templates/:template_type': {
      $get:
        | {
            input: { param: { template_type: 'email' | 'sms' } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: Template[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_type: 'email' | 'sms' } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_type: 'email' | 'sms' } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_type: 'email' | 'sms' } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/templates/:template_type/:slug': {
      $get:
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 423
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: {
                name?: string
                subject?: string | null
                markup?: string | null
                body?: string
                delivered_by_clerk?: boolean | null
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/templates/:template_type/:slug/revert': {
      $post:
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/templates/:template_type/:slug/preview': {
      $post:
        | {
            input: { param: { template_type: string; slug: string } } & {
              json: {
                subject?: string | null
                body?: string
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: { [key: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_type: string; slug: string } } & {
              json: {
                subject?: string | null
                body?: string
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_type: string; slug: string } } & {
              json: {
                subject?: string | null
                body?: string
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_type: string; slug: string } } & {
              json: {
                subject?: string | null
                body?: string
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_type: string; slug: string } } & {
              json: {
                subject?: string | null
                body?: string
                from_email_name?: string
                reply_to_email_name?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/templates/:template_type/:slug/toggle_delivery': {
      $post:
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: { delivered_by_clerk?: boolean }
            }
            output: Template
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: { delivered_by_clerk?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: { delivered_by_clerk?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: { delivered_by_clerk?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: { delivered_by_clerk?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 423
          }
        | {
            input: { param: { template_type: 'email' | 'sms'; slug: string } } & {
              json: { delivered_by_clerk?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                email_address?: unknown
                phone_number?: unknown
                external_id?: unknown
                username?: unknown
                web3_wallet?: unknown
                user_id?: unknown
                organization_id?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                banned?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                last_active_at_since?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                last_sign_in_at_before?: unknown
                last_sign_in_at_after?: unknown
                provider?: string
                provider_user_id?: unknown
                metadata?: unknown
                limit?: unknown
                offset?: unknown
                starting_after?: string
                pagination?: 'offset' | 'cursor'
                ending_before?: string
                remaining_count?: '100' | '1000' | '10000' | 'exact'
                order_by?: string
              }
            }
            output: User[] | UserCursorPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email_address?: unknown
                phone_number?: unknown
                external_id?: unknown
                username?: unknown
                web3_wallet?: unknown
                user_id?: unknown
                organization_id?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                banned?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                last_active_at_since?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                last_sign_in_at_before?: unknown
                last_sign_in_at_after?: unknown
                provider?: string
                provider_user_id?: unknown
                metadata?: unknown
                limit?: unknown
                offset?: unknown
                starting_after?: string
                pagination?: 'offset' | 'cursor'
                ending_before?: string
                remaining_count?: '100' | '1000' | '10000' | 'exact'
                order_by?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email_address?: unknown
                phone_number?: unknown
                external_id?: unknown
                username?: unknown
                web3_wallet?: unknown
                user_id?: unknown
                organization_id?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                banned?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                last_active_at_since?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                last_sign_in_at_before?: unknown
                last_sign_in_at_after?: unknown
                provider?: string
                provider_user_id?: unknown
                metadata?: unknown
                limit?: unknown
                offset?: unknown
                starting_after?: string
                pagination?: 'offset' | 'cursor'
                ending_before?: string
                remaining_count?: '100' | '1000' | '10000' | 'exact'
                order_by?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                email_address?: unknown
                phone_number?: unknown
                external_id?: unknown
                username?: unknown
                web3_wallet?: unknown
                user_id?: unknown
                organization_id?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                banned?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                last_active_at_since?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                last_sign_in_at_before?: unknown
                last_sign_in_at_after?: unknown
                provider?: string
                provider_user_id?: unknown
                metadata?: unknown
                limit?: unknown
                offset?: unknown
                starting_after?: string
                pagination?: 'offset' | 'cursor'
                ending_before?: string
                remaining_count?: '100' | '1000' | '10000' | 'exact'
                order_by?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                email_address?: unknown
                phone_number?: unknown
                external_id?: unknown
                username?: unknown
                web3_wallet?: unknown
                user_id?: unknown
                organization_id?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                banned?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                last_active_at_since?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                last_sign_in_at_before?: unknown
                last_sign_in_at_after?: unknown
                provider?: string
                provider_user_id?: unknown
                metadata?: unknown
                limit?: unknown
                offset?: unknown
                starting_after?: string
                pagination?: 'offset' | 'cursor'
                ending_before?: string
                remaining_count?: '100' | '1000' | '10000' | 'exact'
                order_by?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                email_address?: unknown
                phone_number?: unknown
                external_id?: unknown
                username?: unknown
                web3_wallet?: unknown
                user_id?: unknown
                organization_id?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                banned?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                last_active_at_since?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                last_sign_in_at_before?: unknown
                last_sign_in_at_after?: unknown
                provider?: string
                provider_user_id?: unknown
                metadata?: unknown
                limit?: unknown
                offset?: unknown
                starting_after?: string
                pagination?: 'offset' | 'cursor'
                ending_before?: string
                remaining_count?: '100' | '1000' | '10000' | 'exact'
                order_by?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                email_address?: string[]
                email_address_identification_status?: ('verified' | 'reserved')[]
                phone_number?: string[]
                phone_number_identification_status?: ('verified' | 'reserved')[]
                web3_wallet?: string[]
                username?: string | null
                password?: string | null
                password_digest?: string | null
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                skip_password_requirement?: boolean | null
                skip_restriction_checks?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
                delete_self_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                skip_user_requirement?: boolean | null
                create_organization_enabled?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
                banned?: boolean | null
                locked?: boolean | null
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                email_address?: string[]
                email_address_identification_status?: ('verified' | 'reserved')[]
                phone_number?: string[]
                phone_number_identification_status?: ('verified' | 'reserved')[]
                web3_wallet?: string[]
                username?: string | null
                password?: string | null
                password_digest?: string | null
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                skip_password_requirement?: boolean | null
                skip_restriction_checks?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
                delete_self_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                skip_user_requirement?: boolean | null
                create_organization_enabled?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
                banned?: boolean | null
                locked?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                email_address?: string[]
                email_address_identification_status?: ('verified' | 'reserved')[]
                phone_number?: string[]
                phone_number_identification_status?: ('verified' | 'reserved')[]
                web3_wallet?: string[]
                username?: string | null
                password?: string | null
                password_digest?: string | null
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                skip_password_requirement?: boolean | null
                skip_restriction_checks?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
                delete_self_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                skip_user_requirement?: boolean | null
                create_organization_enabled?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
                banned?: boolean | null
                locked?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                email_address?: string[]
                email_address_identification_status?: ('verified' | 'reserved')[]
                phone_number?: string[]
                phone_number_identification_status?: ('verified' | 'reserved')[]
                web3_wallet?: string[]
                username?: string | null
                password?: string | null
                password_digest?: string | null
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                skip_password_requirement?: boolean | null
                skip_restriction_checks?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
                delete_self_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                skip_user_requirement?: boolean | null
                create_organization_enabled?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
                banned?: boolean | null
                locked?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                email_address?: string[]
                email_address_identification_status?: ('verified' | 'reserved')[]
                phone_number?: string[]
                phone_number_identification_status?: ('verified' | 'reserved')[]
                web3_wallet?: string[]
                username?: string | null
                password?: string | null
                password_digest?: string | null
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                skip_password_requirement?: boolean | null
                skip_restriction_checks?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
                delete_self_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                skip_user_requirement?: boolean | null
                create_organization_enabled?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
                banned?: boolean | null
                locked?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                email_address?: string[]
                email_address_identification_status?: ('verified' | 'reserved')[]
                phone_number?: string[]
                phone_number_identification_status?: ('verified' | 'reserved')[]
                web3_wallet?: string[]
                username?: string | null
                password?: string | null
                password_digest?: string | null
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                skip_password_requirement?: boolean | null
                skip_restriction_checks?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
                delete_self_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                skip_user_requirement?: boolean | null
                create_organization_enabled?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
                banned?: boolean | null
                locked?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/count': {
      $get:
        | {
            input: {
              query: {
                email_address?: unknown
                phone_number?: unknown
                external_id?: unknown
                username?: unknown
                web3_wallet?: unknown
                user_id?: unknown
                organization_id?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                banned?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                last_active_at_since?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                last_sign_in_at_before?: unknown
                last_sign_in_at_after?: unknown
                provider?: string
                provider_user_id?: unknown
              }
            }
            output: TotalCount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email_address?: unknown
                phone_number?: unknown
                external_id?: unknown
                username?: unknown
                web3_wallet?: unknown
                user_id?: unknown
                organization_id?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                banned?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                last_active_at_since?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                last_sign_in_at_before?: unknown
                last_sign_in_at_after?: unknown
                provider?: string
                provider_user_id?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:user_id': {
      $get:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { user_id: string } } & {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                primary_email_address_id?: string | null
                notify_primary_email_address_changed?: boolean | null
                primary_phone_number_id?: string | null
                primary_web3_wallet_id?: string | null
                username?: string | null
                profile_image_id?: string | null
                password?: string | null
                password_digest?: string
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                sign_out_of_other_sessions?: boolean | null
                reset_client_trust?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                unsafe_metadata?: { [key: string]: unknown } | null
                delete_self_enabled?: boolean | null
                create_organization_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                primary_email_address_id?: string | null
                notify_primary_email_address_changed?: boolean | null
                primary_phone_number_id?: string | null
                primary_web3_wallet_id?: string | null
                username?: string | null
                profile_image_id?: string | null
                password?: string | null
                password_digest?: string
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                sign_out_of_other_sessions?: boolean | null
                reset_client_trust?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                unsafe_metadata?: { [key: string]: unknown } | null
                delete_self_enabled?: boolean | null
                create_organization_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                primary_email_address_id?: string | null
                notify_primary_email_address_changed?: boolean | null
                primary_phone_number_id?: string | null
                primary_web3_wallet_id?: string | null
                username?: string | null
                profile_image_id?: string | null
                password?: string | null
                password_digest?: string
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                sign_out_of_other_sessions?: boolean | null
                reset_client_trust?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                unsafe_metadata?: { [key: string]: unknown } | null
                delete_self_enabled?: boolean | null
                create_organization_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                primary_email_address_id?: string | null
                notify_primary_email_address_changed?: boolean | null
                primary_phone_number_id?: string | null
                primary_web3_wallet_id?: string | null
                username?: string | null
                profile_image_id?: string | null
                password?: string | null
                password_digest?: string
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                sign_out_of_other_sessions?: boolean | null
                reset_client_trust?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                unsafe_metadata?: { [key: string]: unknown } | null
                delete_self_enabled?: boolean | null
                create_organization_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                primary_email_address_id?: string | null
                notify_primary_email_address_changed?: boolean | null
                primary_phone_number_id?: string | null
                primary_web3_wallet_id?: string | null
                username?: string | null
                profile_image_id?: string | null
                password?: string | null
                password_digest?: string
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                sign_out_of_other_sessions?: boolean | null
                reset_client_trust?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                unsafe_metadata?: { [key: string]: unknown } | null
                delete_self_enabled?: boolean | null
                create_organization_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                external_id?: string | null
                first_name?: string | null
                last_name?: string | null
                locale?: string | null
                timezone?: string | null
                primary_email_address_id?: string | null
                notify_primary_email_address_changed?: boolean | null
                primary_phone_number_id?: string | null
                primary_web3_wallet_id?: string | null
                username?: string | null
                profile_image_id?: string | null
                password?: string | null
                password_digest?: string
                password_hasher?: PasswordHasherInput
                skip_password_checks?: boolean | null
                sign_out_of_other_sessions?: boolean | null
                reset_client_trust?: boolean | null
                totp_secret?: string | null
                backup_codes?: string[]
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                unsafe_metadata?: { [key: string]: unknown } | null
                delete_self_enabled?: boolean | null
                create_organization_enabled?: boolean | null
                legal_accepted_at?: string | null
                skip_legal_checks?: boolean | null
                create_organizations_limit?: number | null
                created_at?: string | null
                bypass_client_trust?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { user_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/ban': {
      $post:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/users/:user_id/unban': {
      $post:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/users/ban': {
      $post:
        | {
            input: { json: { user_ids: string[] } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { user_ids: string[] } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { user_ids: string[] } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/users/unban': {
      $post:
        | {
            input: { json: { user_ids: string[] } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { user_ids: string[] } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { user_ids: string[] } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/users/:user_id/lock': {
      $post:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/unlock': {
      $post:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/merge': {
      $post:
        | {
            input: { param: { user_id: string } } & {
              json: { from_user_id: string; dry_run?: boolean }
            }
            output: { user: User; deleted_user: User }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: { from_user_id: string; dry_run?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: { from_user_id: string; dry_run?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: { from_user_id: string; dry_run?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string } } & {
              json: { from_user_id: string; dry_run?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:user_id/profile_image': {
      $post:
        | {
            input: { param: { user_id: string } } & { form: { file?: File } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { form: { file?: File } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { form: { file?: File } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & { form: { file?: File } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/metadata': {
      $patch:
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
                unsafe_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:user_id/billing/subscription': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: CommerceSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/billing/credits': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: CommerceCreditBalanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { user_id: string } } & { json: AdjustCreditBalanceRequestInput }
            output: CommerceCreditLedgerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { json: AdjustCreditBalanceRequestInput }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: AdjustCreditBalanceRequestInput }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & { json: AdjustCreditBalanceRequestInput }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & { json: AdjustCreditBalanceRequestInput }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & { json: AdjustCreditBalanceRequestInput }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string } } & { json: AdjustCreditBalanceRequestInput }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user_id: string } } & { json: AdjustCreditBalanceRequestInput }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/oauth_access_tokens/:provider': {
      $get:
        | {
            input: { param: { user_id: string; provider: string } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: OAuthAccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; provider: string } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; provider: string } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; provider: string } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string; provider: string } } & {
              query: { paginated?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:user_id/organization_memberships': {
      $get:
        | {
            input: { param: { user_id: string } } & { query: { limit?: unknown; offset?: unknown } }
            output: OrganizationMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { query: { limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/organization_invitations': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: {
                limit?: unknown
                offset?: unknown
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
              }
            }
            output: OrganizationInvitationsWithPublicOrganizationData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                limit?: unknown
                offset?: unknown
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                limit?: unknown
                offset?: unknown
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                limit?: unknown
                offset?: unknown
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/remove_password': {
      $post:
        | {
            input: { param: { user_id: string } } & {
              json: { sign_out_of_other_sessions?: boolean }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: { sign_out_of_other_sessions?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: { sign_out_of_other_sessions?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              json: { sign_out_of_other_sessions?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              json: { sign_out_of_other_sessions?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: { sign_out_of_other_sessions?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/verify_password': {
      $post:
        | {
            input: { param: { user_id: string } } & {
              json: { password: string; honor_lockout?: boolean }
            }
            output: { verified?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: { password: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: { password: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              json: { password: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: { password: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { user_id: string } } & {
              json: { password: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { user_id: string } } & {
              json: { password: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/verify_totp': {
      $post:
        | {
            input: { param: { user_id: string } } & {
              json: { code: string; honor_lockout?: boolean }
            }
            output: {
              verified?: boolean | undefined
              code_type?: 'totp' | 'backup_code' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              json: { code: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              json: { code: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              json: { code: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              json: { code: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { user_id: string } } & {
              json: { code: string; honor_lockout?: boolean }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { user_id: string } } & {
              json: { code: string; honor_lockout?: boolean }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/mfa': {
      $delete:
        | {
            input: { param: { user_id: string } }
            output: { user_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/backup_code': {
      $delete:
        | {
            input: { param: { user_id: string } }
            output: { user_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/passkeys/:passkey_identification_id': {
      $delete:
        | {
            input: { param: { user_id: string; passkey_identification_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; passkey_identification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string; passkey_identification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; passkey_identification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/trusted_devices': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: { data: TrustedDevice[]; total_count: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/trusted_devices/:trusted_device_id': {
      $delete:
        | {
            input: { param: { user_id: string; trusted_device_id: string } }
            output: TrustedDevice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; trusted_device_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string; trusted_device_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; trusted_device_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/web3_wallets/:web3_wallet_identification_id': {
      $delete:
        | {
            input: { param: { user_id: string; web3_wallet_identification_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; web3_wallet_identification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; web3_wallet_identification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string; web3_wallet_identification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; web3_wallet_identification_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/totp': {
      $delete:
        | {
            input: { param: { user_id: string } }
            output: { user_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/external_accounts/:external_account_id': {
      $delete:
        | {
            input: { param: { user_id: string; external_account_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; external_account_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; external_account_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string; external_account_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; external_account_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/invitations': {
      $post:
        | {
            input: {
              json: {
                email_address: string
                public_metadata?: { [key: string]: unknown }
                redirect_url?: string
                notify?: boolean | null
                ignore_existing?: boolean | null
                expires_in_days?: number | null
                template_slug?: 'invitation' | 'waitlist_invitation'
              }
            }
            output: Invitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email_address: string
                public_metadata?: { [key: string]: unknown }
                redirect_url?: string
                notify?: boolean | null
                ignore_existing?: boolean | null
                expires_in_days?: number | null
                template_slug?: 'invitation' | 'waitlist_invitation'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email_address: string
                public_metadata?: { [key: string]: unknown }
                redirect_url?: string
                notify?: boolean | null
                ignore_existing?: boolean | null
                expires_in_days?: number | null
                template_slug?: 'invitation' | 'waitlist_invitation'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $get: {
        input: {
          query: {
            status?: 'pending' | 'accepted' | 'revoked' | 'expired'
            query?: string
            email_address?: unknown
            order_by?: string
            paginated?: string
            limit?: unknown
            offset?: unknown
          }
        }
        output: Invitation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/invitations/bulk': {
      $post:
        | {
            input: {
              json: {
                email_address: string
                public_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                notify?: boolean | null
                ignore_existing?: boolean | null
                expires_in_days?: number | null
                template_slug?: 'invitation' | 'waitlist_invitation'
              }[]
            }
            output: Invitation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email_address: string
                public_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                notify?: boolean | null
                ignore_existing?: boolean | null
                expires_in_days?: number | null
                template_slug?: 'invitation' | 'waitlist_invitation'
              }[]
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email_address: string
                public_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                notify?: boolean | null
                ignore_existing?: boolean | null
                expires_in_days?: number | null
                template_slug?: 'invitation' | 'waitlist_invitation'
              }[]
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invitations/:invitation_id': {
      $delete:
        | {
            input: { param: { invitation_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invitation_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invitations/:invitation_id/revoke': {
      $post:
        | {
            input: { param: { invitation_id: string } }
            output: Invitation & { revoked?: true | undefined; status?: 'revoked' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invitation_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invitation_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization_invitations': {
      $get:
        | {
            input: {
              query: {
                order_by?: string
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                query?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: OrganizationInvitationsWithPublicOrganizationData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                order_by?: string
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                query?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                order_by?: string
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                query?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                order_by?: string
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                query?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                order_by?: string
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                query?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/allowlist_identifiers': {
      $get:
        | {
            input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
            output: AllowlistIdentifier[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
      $post:
        | {
            input: { json: { identifier: string; notify?: boolean } }
            output: AllowlistIdentifier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { identifier: string; notify?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { identifier: string; notify?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: { identifier: string; notify?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/allowlist_identifiers/:identifier_id': {
      $delete:
        | {
            input: { param: { identifier_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { identifier_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/blocklist_identifiers': {
      $get:
        | { input: {}; output: BlocklistIdentifiers; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 402 }
      $post:
        | {
            input: { json: { identifier: string } }
            output: BlocklistIdentifier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { identifier: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { identifier: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: { identifier: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/blocklist_identifiers/:identifier_id': {
      $delete:
        | {
            input: { param: { identifier_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { identifier_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/beta_features/instance_settings': {
      $patch:
        | {
            input: {
              json: {
                restricted_to_allowlist?: boolean | null
                from_email_address?: string | null
                progressive_sign_up?: boolean | null
                test_mode?: boolean | null
              }
            }
            output: {
              object?: 'instance_settings' | undefined
              id?: string | undefined
              restricted_to_allowlist?: boolean | undefined
              from_email_address?: string | undefined
              progressive_sign_up?: boolean | undefined
              enhanced_email_deliverability?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                restricted_to_allowlist?: boolean | null
                from_email_address?: string | null
                progressive_sign_up?: boolean | null
                test_mode?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                restricted_to_allowlist?: boolean | null
                from_email_address?: string | null
                progressive_sign_up?: boolean | null
                test_mode?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/beta_features/domain': {
      $put:
        | {
            input: { json: { home_url?: string; is_secondary?: boolean } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: { home_url?: string; is_secondary?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { home_url?: string; is_secondary?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { home_url?: string; is_secondary?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/actor_tokens': {
      $post:
        | {
            input: {
              json: {
                user_id: string
                actor: { sub: string; type?: string }
                expires_in_seconds?: number
                session_max_duration_in_seconds?: number
              }
            }
            output: ActorToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                user_id: string
                actor: { sub: string; type?: string }
                expires_in_seconds?: number
                session_max_duration_in_seconds?: number
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                user_id: string
                actor: { sub: string; type?: string }
                expires_in_seconds?: number
                session_max_duration_in_seconds?: number
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                user_id: string
                actor: { sub: string; type?: string }
                expires_in_seconds?: number
                session_max_duration_in_seconds?: number
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                user_id: string
                actor: { sub: string; type?: string }
                expires_in_seconds?: number
                session_max_duration_in_seconds?: number
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/actor_tokens/:actor_token_id/revoke': {
      $post:
        | {
            input: { param: { actor_token_id: string } }
            output: ActorToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actor_token_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { actor_token_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/domains': {
      $get: { input: {}; output: Domains; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: { name: string; is_satellite: boolean; proxy_url?: string | null } }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; is_satellite: boolean; proxy_url?: string | null } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { name: string; is_satellite: boolean; proxy_url?: string | null } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: { name: string; is_satellite: boolean; proxy_url?: string | null } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { name: string; is_satellite: boolean; proxy_url?: string | null } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/domains/:domain_id': {
      $delete:
        | {
            input: { param: { domain_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { domain_id: string } } & {
              json: {
                name?: string | null
                proxy_url?: string | null
                is_secondary?: boolean | null
              }
            }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain_id: string } } & {
              json: {
                name?: string | null
                proxy_url?: string | null
                is_secondary?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain_id: string } } & {
              json: {
                name?: string | null
                proxy_url?: string | null
                is_secondary?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain_id: string } } & {
              json: {
                name?: string | null
                proxy_url?: string | null
                is_secondary?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain_id: string } } & {
              json: {
                name?: string | null
                proxy_url?: string | null
                is_secondary?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/instance': {
      $get: { input: {}; output: Instance; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: {
              json: {
                test_mode?: boolean | null
                hibp?: boolean | null
                support_email?: string | null
                clerk_js_version?: string | null
                development_origin?: string | null
                allowed_origins?: string[] | null
                allowed_subdomains?: string[] | null
                subdomain_allowlist_enabled?: boolean | null
                cookieless_dev?: boolean | null
                url_based_session_syncing?: boolean | null
                preferred_sign_in_strategy_when_password_required?: 'password' | 'otp' | '' | null
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json: {
                test_mode?: boolean | null
                hibp?: boolean | null
                support_email?: string | null
                clerk_js_version?: string | null
                development_origin?: string | null
                allowed_origins?: string[] | null
                allowed_subdomains?: string[] | null
                subdomain_allowlist_enabled?: boolean | null
                cookieless_dev?: boolean | null
                url_based_session_syncing?: boolean | null
                preferred_sign_in_strategy_when_password_required?: 'password' | 'otp' | '' | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/instance/restrictions': {
      $patch:
        | {
            input: {
              json: {
                allowlist?: boolean | null
                blocklist?: boolean | null
                allowlist_blocklist_disabled_on_sign_in?: boolean | null
                block_email_subaddresses?: boolean | null
                block_disposable_email_domains?: boolean | null
              }
            }
            output: InstanceRestrictions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                allowlist?: boolean | null
                blocklist?: boolean | null
                allowlist_blocklist_disabled_on_sign_in?: boolean | null
                block_email_subaddresses?: boolean | null
                block_disposable_email_domains?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                allowlist?: boolean | null
                blocklist?: boolean | null
                allowlist_blocklist_disabled_on_sign_in?: boolean | null
                block_email_subaddresses?: boolean | null
                block_disposable_email_domains?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/instance/protect': {
      $get: { input: {}; output: InstanceProtect; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: { rules_enabled?: boolean | null } }
            output: InstanceProtect
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { rules_enabled?: boolean | null } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/instance/communication': {
      $get: { input: {}; output: InstanceCommunication; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: { blocked_country_codes?: string[] | null } }
            output: InstanceCommunication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { blocked_country_codes?: string[] | null } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/instance/oauth_application_settings': {
      $get: { input: {}; output: OAuthApplicationSettings; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: {
              json: {
                dynamic_oauth_client_registration?: boolean | null
                dynamic_client_allowed_scopes?: string[] | null
                default_scopes?: string[] | null
                oauth_jwt_access_tokens?: boolean | null
                aud_claim_enabled?: boolean | null
                aud_claim_refresh_backfill_enabled?: boolean | null
                pkce_required?: boolean | null
                client_id_metadata_documents_advertised?: boolean | null
                client_id_metadata_documents_only_allow_pre_registered_clients?: boolean | null
                client_id_metadata_documents_block_implicitly_allowed_clients?: boolean | null
              }
            }
            output: OAuthApplicationSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                dynamic_oauth_client_registration?: boolean | null
                dynamic_client_allowed_scopes?: string[] | null
                default_scopes?: string[] | null
                oauth_jwt_access_tokens?: boolean | null
                aud_claim_enabled?: boolean | null
                aud_claim_refresh_backfill_enabled?: boolean | null
                pkce_required?: boolean | null
                client_id_metadata_documents_advertised?: boolean | null
                client_id_metadata_documents_only_allow_pre_registered_clients?: boolean | null
                client_id_metadata_documents_block_implicitly_allowed_clients?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/instance/change_domain': {
      $post:
        | {
            input: { json: { home_url?: string; is_secondary?: boolean } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: { home_url?: string; is_secondary?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { home_url?: string; is_secondary?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { home_url?: string; is_secondary?: boolean } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/instance/organization_settings': {
      $get:
        | { input: {}; output: OrganizationSettings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 402 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 422 }
      $patch:
        | {
            input: {
              json: {
                enabled?: boolean | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                domains_enabled?: boolean | null
                slug_disabled?: boolean | null
                domains_enrollment_modes?: string[]
                creator_role_id?: string | null
                domains_default_role_id?: string | null
              }
            }
            output: OrganizationSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                enabled?: boolean | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                domains_enabled?: boolean | null
                slug_disabled?: boolean | null
                domains_enrollment_modes?: string[]
                creator_role_id?: string | null
                domains_default_role_id?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                enabled?: boolean | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                domains_enabled?: boolean | null
                slug_disabled?: boolean | null
                domains_enrollment_modes?: string[]
                creator_role_id?: string | null
                domains_default_role_id?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                enabled?: boolean | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                domains_enabled?: boolean | null
                slug_disabled?: boolean | null
                domains_enrollment_modes?: string[]
                creator_role_id?: string | null
                domains_default_role_id?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                enabled?: boolean | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                domains_enabled?: boolean | null
                slug_disabled?: boolean | null
                domains_enrollment_modes?: string[]
                creator_role_id?: string | null
                domains_default_role_id?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                enabled?: boolean | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                domains_enabled?: boolean | null
                slug_disabled?: boolean | null
                domains_enrollment_modes?: string[]
                creator_role_id?: string | null
                domains_default_role_id?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/webhooks/svix': {
      $post:
        | { input: {}; output: SvixURL; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 400 }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/webhooks/svix_url': {
      $post:
        | { input: {}; output: SvixURL; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/jwt_templates': {
      $get: {
        input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
        output: JWTTemplate[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                name: string
                claims: { [key: string]: unknown }
                lifetime?: number | null
                allowed_clock_skew?: number | null
                custom_signing_key?: boolean
                signing_algorithm?: string | null
                signing_key?: string | null
              }
            }
            output: JWTTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                claims: { [key: string]: unknown }
                lifetime?: number | null
                allowed_clock_skew?: number | null
                custom_signing_key?: boolean
                signing_algorithm?: string | null
                signing_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                claims: { [key: string]: unknown }
                lifetime?: number | null
                allowed_clock_skew?: number | null
                custom_signing_key?: boolean
                signing_algorithm?: string | null
                signing_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                name: string
                claims: { [key: string]: unknown }
                lifetime?: number | null
                allowed_clock_skew?: number | null
                custom_signing_key?: boolean
                signing_algorithm?: string | null
                signing_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/jwt_templates/:template_id': {
      $get:
        | {
            input: { param: { template_id: string } }
            output: JWTTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { template_id: string } } & {
              json: {
                name: string
                claims: { [key: string]: unknown }
                lifetime?: number | null
                allowed_clock_skew?: number | null
                custom_signing_key?: boolean
                signing_algorithm?: string | null
                signing_key?: string | null
              }
            }
            output: JWTTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } } & {
              json: {
                name: string
                claims: { [key: string]: unknown }
                lifetime?: number | null
                allowed_clock_skew?: number | null
                custom_signing_key?: boolean
                signing_algorithm?: string | null
                signing_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { template_id: string } } & {
              json: {
                name: string
                claims: { [key: string]: unknown }
                lifetime?: number | null
                allowed_clock_skew?: number | null
                custom_signing_key?: boolean
                signing_algorithm?: string | null
                signing_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { template_id: string } } & {
              json: {
                name: string
                claims: { [key: string]: unknown }
                lifetime?: number | null
                allowed_clock_skew?: number | null
                custom_signing_key?: boolean
                signing_algorithm?: string | null
                signing_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { template_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { template_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { template_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/machines': {
      $get:
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; query?: string; order_by?: string }
            }
            output: { data: Machine[]; total_count: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; query?: string; order_by?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; query?: string; order_by?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; query?: string; order_by?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; query?: string; order_by?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: { name: string; scoped_machines?: string[]; default_token_ttl?: number }
            }
            output: Machine & { secret_key: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { name: string; scoped_machines?: string[]; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { name: string; scoped_machines?: string[]; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { name: string; scoped_machines?: string[]; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { name: string; scoped_machines?: string[]; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/machines/:machine_id': {
      $get:
        | {
            input: { param: { machine_id: string } }
            output: Machine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { machine_id: string } } & {
              json: { name?: string; default_token_ttl?: number }
            }
            output: Machine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { machine_id: string } } & {
              json: { name?: string; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { machine_id: string } } & {
              json: { name?: string; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { machine_id: string } } & {
              json: { name?: string; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { machine_id: string } } & {
              json: { name?: string; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { machine_id: string } } & {
              json: { name?: string; default_token_ttl?: number }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { machine_id: string } }
            output: { object: 'machine'; id: string; deleted: true }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/machines/:machine_id/secret_key': {
      $get:
        | {
            input: { param: { machine_id: string } }
            output: { object: 'machine_secret_key'; secret: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/machines/:machine_id/secret_key/rotate': {
      $post:
        | {
            input: { param: { machine_id: string } } & { json: { previous_token_ttl: number } }
            output: { object: 'machine_secret_key'; secret: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { machine_id: string } } & { json: { previous_token_ttl: number } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { machine_id: string } } & { json: { previous_token_ttl: number } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { machine_id: string } } & { json: { previous_token_ttl: number } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { machine_id: string } } & { json: { previous_token_ttl: number } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { machine_id: string } } & { json: { previous_token_ttl: number } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/machines/:machine_id/scopes': {
      $post:
        | {
            input: { param: { machine_id: string } } & { json: { to_machine_id: string } }
            output: MachineScope
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { machine_id: string } } & { json: { to_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { machine_id: string } } & { json: { to_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { machine_id: string } } & { json: { to_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { machine_id: string } } & { json: { to_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { machine_id: string } } & { json: { to_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { machine_id: string } } & { json: { to_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/machines/:machine_id/scopes/:other_machine_id': {
      $delete:
        | {
            input: { param: { machine_id: string; other_machine_id: string } }
            output: {
              object: 'machine_scope'
              from_machine_id: string
              to_machine_id: string
              deleted: true
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { machine_id: string; other_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { machine_id: string; other_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { machine_id: string; other_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { machine_id: string; other_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { machine_id: string; other_machine_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations': {
      $get:
        | {
            input: {
              query: {
                include_members_count?: string
                include_missing_member_with_elevated_permissions?: string
                query?: string
                user_id?: unknown
                organization_id?: unknown
                order_by?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: Organizations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include_members_count?: string
                include_missing_member_with_elevated_permissions?: string
                query?: string
                user_id?: unknown
                organization_id?: unknown
                order_by?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                include_members_count?: string
                include_missing_member_with_elevated_permissions?: string
                query?: string
                user_id?: unknown
                organization_id?: unknown
                order_by?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include_members_count?: string
                include_missing_member_with_elevated_permissions?: string
                query?: string
                user_id?: unknown
                organization_id?: unknown
                order_by?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                name: string
                created_by?: string | null
                private_metadata?: { [key: string]: unknown } | null
                public_metadata?: { [key: string]: unknown } | null
                slug?: string | null
                max_allowed_memberships?: number | null
                created_at?: string | null
                role_set_key?: string | null
              }
            }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                created_by?: string | null
                private_metadata?: { [key: string]: unknown } | null
                public_metadata?: { [key: string]: unknown } | null
                slug?: string | null
                max_allowed_memberships?: number | null
                created_at?: string | null
                role_set_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                created_by?: string | null
                private_metadata?: { [key: string]: unknown } | null
                public_metadata?: { [key: string]: unknown } | null
                slug?: string | null
                max_allowed_memberships?: number | null
                created_at?: string | null
                role_set_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                name: string
                created_by?: string | null
                private_metadata?: { [key: string]: unknown } | null
                public_metadata?: { [key: string]: unknown } | null
                slug?: string | null
                max_allowed_memberships?: number | null
                created_at?: string | null
                role_set_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                created_by?: string | null
                private_metadata?: { [key: string]: unknown } | null
                public_metadata?: { [key: string]: unknown } | null
                slug?: string | null
                max_allowed_memberships?: number | null
                created_at?: string | null
                role_set_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                include_members_count?: string
                include_missing_member_with_elevated_permissions?: string
              }
            }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                include_members_count?: string
                include_missing_member_with_elevated_permissions?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                include_members_count?: string
                include_missing_member_with_elevated_permissions?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                name?: string | null
                slug?: string | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                self_serve_sso_enabled?: boolean | null
                self_serve_directory_sync_enabled?: boolean | null
                created_at?: string | null
                role_set_key?: string | null
                reassignment_mappings?: ReassignmentMappingsInput | null
              }
            }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                name?: string | null
                slug?: string | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                self_serve_sso_enabled?: boolean | null
                self_serve_directory_sync_enabled?: boolean | null
                created_at?: string | null
                role_set_key?: string | null
                reassignment_mappings?: ReassignmentMappingsInput | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                name?: string | null
                slug?: string | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                self_serve_sso_enabled?: boolean | null
                self_serve_directory_sync_enabled?: boolean | null
                created_at?: string | null
                role_set_key?: string | null
                reassignment_mappings?: ReassignmentMappingsInput | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                name?: string | null
                slug?: string | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                self_serve_sso_enabled?: boolean | null
                self_serve_directory_sync_enabled?: boolean | null
                created_at?: string | null
                role_set_key?: string | null
                reassignment_mappings?: ReassignmentMappingsInput | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                name?: string | null
                slug?: string | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                self_serve_sso_enabled?: boolean | null
                self_serve_directory_sync_enabled?: boolean | null
                created_at?: string | null
                role_set_key?: string | null
                reassignment_mappings?: ReassignmentMappingsInput | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                name?: string | null
                slug?: string | null
                max_allowed_memberships?: number | null
                admin_delete_enabled?: boolean | null
                self_serve_sso_enabled?: boolean | null
                self_serve_directory_sync_enabled?: boolean | null
                created_at?: string | null
                role_set_key?: string | null
                reassignment_mappings?: ReassignmentMappingsInput | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organization_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organization_id/metadata': {
      $patch:
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/logo': {
      $put:
        | {
            input: { param: { organization_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: OrganizationWithLogo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 413
          }
      $delete:
        | {
            input: { param: { organization_id: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organization_id/billing/subscription': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: CommerceSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:organization_id/billing/credits': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: CommerceCreditBalanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: AdjustCreditBalanceRequestInput
            }
            output: CommerceCreditLedgerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AdjustCreditBalanceRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AdjustCreditBalanceRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AdjustCreditBalanceRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AdjustCreditBalanceRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AdjustCreditBalanceRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AdjustCreditBalanceRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string } } & {
              json: AdjustCreditBalanceRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:organization_id/invitations': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }
            }
            output: OrganizationInvitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                email_address?: string
                order_by?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: OrganizationInvitations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                email_address?: string
                order_by?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                email_address?: string
                order_by?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                status?: 'pending' | 'accepted' | 'revoked' | 'expired'
                email_address?: string
                order_by?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/invitations/bulk': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }[]
            }
            output: OrganizationInvitations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }[]
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }[]
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }[]
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }[]
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                email_address: string
                inviter_user_id?: string | null
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
                redirect_url?: string | null
                expires_in_days?: number | null
                notify?: boolean | null
              }[]
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/organizations/:organization_id/invitations/pending': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: { limit?: unknown; offset?: unknown }
            }
            output: OrganizationInvitations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organization_id/invitations/:invitation_id': {
      $get:
        | {
            input: { param: { organization_id: string; invitation_id: string } }
            output: OrganizationInvitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; invitation_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; invitation_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; invitation_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organization_id/invitations/:invitation_id/revoke': {
      $post:
        | {
            input: { param: { organization_id: string; invitation_id: string } } & {
              json: { requesting_user_id?: string | null }
            }
            output: OrganizationInvitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; invitation_id: string } } & {
              json: { requesting_user_id?: string | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; invitation_id: string } } & {
              json: { requesting_user_id?: string | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; invitation_id: string } } & {
              json: { requesting_user_id?: string | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization_roles': {
      $get:
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: Roles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                name: string
                key: string
                description?: string | null
                permissions?: string[] | null
                include_in_initial_role_set?: boolean | null
              }
            }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                key: string
                description?: string | null
                permissions?: string[] | null
                include_in_initial_role_set?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                key: string
                description?: string | null
                permissions?: string[] | null
                include_in_initial_role_set?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                key: string
                description?: string | null
                permissions?: string[] | null
                include_in_initial_role_set?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                name: string
                key: string
                description?: string | null
                permissions?: string[] | null
                include_in_initial_role_set?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                key: string
                description?: string | null
                permissions?: string[] | null
                include_in_initial_role_set?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name: string
                key: string
                description?: string | null
                permissions?: string[] | null
                include_in_initial_role_set?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organization_roles/:organization_role_id': {
      $get:
        | {
            input: { param: { organization_role_id: string } }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_role_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_role_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_role_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organization_role_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                permissions?: string[] | null
              }
            }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_role_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                permissions?: string[] | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_role_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                permissions?: string[] | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_role_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                permissions?: string[] | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_role_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                permissions?: string[] | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_role_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                permissions?: string[] | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organization_role_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_role_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_role_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_role_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_role_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organization_roles/:organization_role_id/permissions/:permission_id': {
      $post:
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
      $delete:
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_role_id: string; permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/memberships': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: {
                user_id: string
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
              }
            }
            output: OrganizationMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                user_id: string
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                user_id: string
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                user_id: string
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: {
                user_id: string
                role: string
                public_metadata?: { [key: string]: unknown } | null
                private_metadata?: { [key: string]: unknown } | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                order_by?: string
                user_id?: unknown
                email_address?: unknown
                phone_number?: unknown
                username?: unknown
                web3_wallet?: unknown
                role?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                limit?: unknown
                offset?: unknown
              }
            }
            output: OrganizationMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                order_by?: string
                user_id?: unknown
                email_address?: unknown
                phone_number?: unknown
                username?: unknown
                web3_wallet?: unknown
                role?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                order_by?: string
                user_id?: unknown
                email_address?: unknown
                phone_number?: unknown
                username?: unknown
                web3_wallet?: unknown
                role?: unknown
                query?: string
                email_address_query?: string
                phone_number_query?: string
                username_query?: string
                name_query?: string
                last_active_at_before?: unknown
                last_active_at_after?: unknown
                created_at_before?: unknown
                created_at_after?: unknown
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/memberships/:user_id': {
      $patch:
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: { role: string }
            }
            output: OrganizationMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: { role: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: { role: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organization_id: string; user_id: string } }
            output: OrganizationMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string; user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; user_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/memberships/:user_id/metadata': {
      $patch:
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: OrganizationMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; user_id: string } } & {
              json: {
                public_metadata?: { [key: string]: unknown }
                private_metadata?: { [key: string]: unknown }
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/domains': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: { name?: string; enrollment_mode?: string; verified?: boolean | null }
            }
            output: OrganizationDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: { name?: string; enrollment_mode?: string; verified?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: { name?: string; enrollment_mode?: string; verified?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: { name?: string; enrollment_mode?: string; verified?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: { name?: string; enrollment_mode?: string; verified?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                verified?: string
                enrollment_mode?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: OrganizationDomains
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                verified?: string
                enrollment_mode?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                verified?: string
                enrollment_mode?: string
                limit?: unknown
                offset?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/domains/:domain_id': {
      $patch:
        | {
            input: { param: { organization_id: string; domain_id: string } } & {
              json: { enrollment_mode?: string | null; verified?: boolean | null }
            }
            output: OrganizationDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; domain_id: string } } & {
              json: { enrollment_mode?: string | null; verified?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; domain_id: string } } & {
              json: { enrollment_mode?: string | null; verified?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; domain_id: string } } & {
              json: { enrollment_mode?: string | null; verified?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; domain_id: string } } & {
              json: { enrollment_mode?: string | null; verified?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organization_id/domains/:domain_id/verify_ownership': {
      $post:
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: OrganizationDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; domain_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization_domains': {
      $get:
        | {
            input: {
              query: {
                organization_id?: string
                verified?: 'true' | 'false'
                enrollment_mode?: unknown
                query?: string
                domains?: unknown
                order_by?: string
                offset?: unknown
                limit?: unknown
              }
            }
            output: OrganizationDomains
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                organization_id?: string
                verified?: 'true' | 'false'
                enrollment_mode?: unknown
                query?: string
                domains?: unknown
                order_by?: string
                offset?: unknown
                limit?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                organization_id?: string
                verified?: 'true' | 'false'
                enrollment_mode?: unknown
                query?: string
                domains?: unknown
                order_by?: string
                offset?: unknown
                limit?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                organization_id?: string
                verified?: 'true' | 'false'
                enrollment_mode?: unknown
                query?: string
                domains?: unknown
                order_by?: string
                offset?: unknown
                limit?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/proxy_checks': {
      $post:
        | {
            input: { json: { domain_id?: string; proxy_url?: string } }
            output: ProxyCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { domain_id?: string; proxy_url?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { domain_id?: string; proxy_url?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/redirect_urls': {
      $get: {
        input: { query: { paginated?: string; limit?: unknown; offset?: unknown } }
        output: RedirectURL[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { url: string } }
            output: RedirectURL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { url: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { url: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/redirect_urls/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: RedirectURL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sign_in_tokens': {
      $post:
        | {
            input: {
              json: {
                user_id: string
                org_id?: string | null
                expires_in_seconds?: number | null
                second_factor_verification?: 'fresh' | 'stale' | null
                honor_lockout?: boolean
              }
            }
            output: SignInToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                user_id: string
                org_id?: string | null
                expires_in_seconds?: number | null
                second_factor_verification?: 'fresh' | 'stale' | null
                honor_lockout?: boolean
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                user_id: string
                org_id?: string | null
                expires_in_seconds?: number | null
                second_factor_verification?: 'fresh' | 'stale' | null
                honor_lockout?: boolean
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                user_id: string
                org_id?: string | null
                expires_in_seconds?: number | null
                second_factor_verification?: 'fresh' | 'stale' | null
                honor_lockout?: boolean
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sign_in_tokens/:sign_in_token_id/revoke': {
      $post:
        | {
            input: { param: { sign_in_token_id: string } }
            output: SignInToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sign_in_token_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sign_in_token_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sign_ups/:id': {
      $get:
        | { input: { param: { id: string } }; output: SignUp; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: { external_id?: string | null; custom_action?: boolean | null }
            }
            output: SignUp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { external_id?: string | null; custom_action?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/oauth_applications': {
      $get:
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; order_by?: string; name_query?: string }
            }
            output: OAuthApplications
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; order_by?: string; name_query?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; order_by?: string; name_query?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { limit?: unknown; offset?: unknown; order_by?: string; name_query?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                name: string
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: OAuthApplicationWithSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/oauth_applications/:oauth_application_id': {
      $get:
        | {
            input: { param: { oauth_application_id: string } }
            output: OAuthApplication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { oauth_application_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { oauth_application_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { oauth_application_id: string } } & {
              json: {
                name?: string | null
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: OAuthApplication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { oauth_application_id: string } } & {
              json: {
                name?: string | null
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { oauth_application_id: string } } & {
              json: {
                name?: string | null
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { oauth_application_id: string } } & {
              json: {
                name?: string | null
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { oauth_application_id: string } } & {
              json: {
                name?: string | null
                redirect_uris?: string[] | null
                callback_url?: string | null
                scopes?: string | null
                consent_screen_enabled?: boolean | null
                pkce_required?: boolean | null
                audience_uri?: string | null
                token_exchange_enabled?: boolean
                adopt_audience_resource?: boolean
                device_authorization_grant_enabled?: boolean | null
                public?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { oauth_application_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { oauth_application_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { oauth_application_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/oauth_applications/:oauth_application_id/logo': {
      $put:
        | {
            input: { param: { oauth_application_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: OAuthApplication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { oauth_application_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { oauth_application_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { oauth_application_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { oauth_application_id: string } } & {
              form: { uploader_user_id?: string; file: File }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 413
          }
    }
  } & {
    '/oauth_applications/:oauth_application_id/rotate_secret': {
      $post:
        | {
            input: { param: { oauth_application_id: string } }
            output: OAuthApplicationWithSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { oauth_application_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { oauth_application_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/oauth_applications/:oauth_application_id/revoke_token': {
      $post:
        | {
            input: { param: { oauth_application_id: string } } & { json: { token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { oauth_application_id: string } } & { json: { token: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { oauth_application_id: string } } & { json: { token: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { oauth_application_id: string } } & { json: { token: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { oauth_application_id: string } } & { json: { token: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/saml_connections': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                offset?: unknown
                query?: string
                order_by?: string
                organization_id?: unknown
              }
            }
            output: SAMLConnections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: unknown
                query?: string
                order_by?: string
                organization_id?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: unknown
                query?: string
                order_by?: string
                organization_id?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: unknown
                query?: string
                order_by?: string
                organization_id?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: unknown | unknown }
            output: SAMLConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: unknown | unknown }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: unknown | unknown }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: unknown | unknown }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: unknown | unknown }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: unknown | unknown }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/saml_connections/:saml_connection_id': {
      $get:
        | {
            input: { param: { saml_connection_id: string } }
            output: SAMLConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { saml_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { saml_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { saml_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { saml_connection_id: string } } & {
              json: {
                name?: string | null
                domain?: string | null
                domains?: string[] | null
                idp_entity_id?: string | null
                idp_sso_url?: string | null
                idp_certificate?: string | null
                idp_certificates?: string[]
                idp_metadata_url?: string | null
                idp_metadata?: string | null
                organization_id?: string | null
                attribute_mapping?: {
                  user_id?: string
                  email_address?: string
                  first_name?: string
                  last_name?: string
                } | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                allow_subdomains?: boolean | null
                allow_idp_initiated?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                force_authn?: boolean
                login_hint?: {
                  mode: 'email_address' | 'custom_attribute' | 'off'
                  source?: string
                } | null
                consent_verified_domains_deletion?: boolean | null
              }
            }
            output: SAMLConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { saml_connection_id: string } } & {
              json: {
                name?: string | null
                domain?: string | null
                domains?: string[] | null
                idp_entity_id?: string | null
                idp_sso_url?: string | null
                idp_certificate?: string | null
                idp_certificates?: string[]
                idp_metadata_url?: string | null
                idp_metadata?: string | null
                organization_id?: string | null
                attribute_mapping?: {
                  user_id?: string
                  email_address?: string
                  first_name?: string
                  last_name?: string
                } | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                allow_subdomains?: boolean | null
                allow_idp_initiated?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                force_authn?: boolean
                login_hint?: {
                  mode: 'email_address' | 'custom_attribute' | 'off'
                  source?: string
                } | null
                consent_verified_domains_deletion?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { saml_connection_id: string } } & {
              json: {
                name?: string | null
                domain?: string | null
                domains?: string[] | null
                idp_entity_id?: string | null
                idp_sso_url?: string | null
                idp_certificate?: string | null
                idp_certificates?: string[]
                idp_metadata_url?: string | null
                idp_metadata?: string | null
                organization_id?: string | null
                attribute_mapping?: {
                  user_id?: string
                  email_address?: string
                  first_name?: string
                  last_name?: string
                } | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                allow_subdomains?: boolean | null
                allow_idp_initiated?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                force_authn?: boolean
                login_hint?: {
                  mode: 'email_address' | 'custom_attribute' | 'off'
                  source?: string
                } | null
                consent_verified_domains_deletion?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { saml_connection_id: string } } & {
              json: {
                name?: string | null
                domain?: string | null
                domains?: string[] | null
                idp_entity_id?: string | null
                idp_sso_url?: string | null
                idp_certificate?: string | null
                idp_certificates?: string[]
                idp_metadata_url?: string | null
                idp_metadata?: string | null
                organization_id?: string | null
                attribute_mapping?: {
                  user_id?: string
                  email_address?: string
                  first_name?: string
                  last_name?: string
                } | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                allow_subdomains?: boolean | null
                allow_idp_initiated?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                force_authn?: boolean
                login_hint?: {
                  mode: 'email_address' | 'custom_attribute' | 'off'
                  source?: string
                } | null
                consent_verified_domains_deletion?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { saml_connection_id: string } } & {
              json: {
                name?: string | null
                domain?: string | null
                domains?: string[] | null
                idp_entity_id?: string | null
                idp_sso_url?: string | null
                idp_certificate?: string | null
                idp_certificates?: string[]
                idp_metadata_url?: string | null
                idp_metadata?: string | null
                organization_id?: string | null
                attribute_mapping?: {
                  user_id?: string
                  email_address?: string
                  first_name?: string
                  last_name?: string
                } | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                allow_subdomains?: boolean | null
                allow_idp_initiated?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                force_authn?: boolean
                login_hint?: {
                  mode: 'email_address' | 'custom_attribute' | 'off'
                  source?: string
                } | null
                consent_verified_domains_deletion?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { saml_connection_id: string } } & {
              json: {
                name?: string | null
                domain?: string | null
                domains?: string[] | null
                idp_entity_id?: string | null
                idp_sso_url?: string | null
                idp_certificate?: string | null
                idp_certificates?: string[]
                idp_metadata_url?: string | null
                idp_metadata?: string | null
                organization_id?: string | null
                attribute_mapping?: {
                  user_id?: string
                  email_address?: string
                  first_name?: string
                  last_name?: string
                } | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                allow_subdomains?: boolean | null
                allow_idp_initiated?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                force_authn?: boolean
                login_hint?: {
                  mode: 'email_address' | 'custom_attribute' | 'off'
                  source?: string
                } | null
                consent_verified_domains_deletion?: boolean | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { saml_connection_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { saml_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { saml_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { saml_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/enterprise_connections': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                offset?: unknown
                organization_id?: string
                active?: string
              }
            }
            output: EnterpriseConnections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: unknown
                organization_id?: string
                active?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: unknown
                organization_id?: string
                active?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                offset?: unknown
                organization_id?: string
                active?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                name: string
                provider:
                  | 'saml_custom'
                  | 'saml_okta'
                  | 'saml_google'
                  | 'saml_microsoft'
                  | 'oidc_custom'
                  | 'oidc_github_enterprise'
                  | 'oidc_gitlab'
                domains: string[]
                organization_id?: string | null
                allow_organization_account_linking?: boolean | null
                active?: boolean | null
                saml?: {
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?: {
                  name: string
                  key: string
                  sso_path?: string
                  scim_path?: string
                  directory_path?: string
                  multi_valued?: boolean
                }[]
              }
            }
            output: EnterpriseConnection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                provider:
                  | 'saml_custom'
                  | 'saml_okta'
                  | 'saml_google'
                  | 'saml_microsoft'
                  | 'oidc_custom'
                  | 'oidc_github_enterprise'
                  | 'oidc_gitlab'
                domains: string[]
                organization_id?: string | null
                allow_organization_account_linking?: boolean | null
                active?: boolean | null
                saml?: {
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?: {
                  name: string
                  key: string
                  sso_path?: string
                  scim_path?: string
                  directory_path?: string
                  multi_valued?: boolean
                }[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                name: string
                provider:
                  | 'saml_custom'
                  | 'saml_okta'
                  | 'saml_google'
                  | 'saml_microsoft'
                  | 'oidc_custom'
                  | 'oidc_github_enterprise'
                  | 'oidc_gitlab'
                domains: string[]
                organization_id?: string | null
                allow_organization_account_linking?: boolean | null
                active?: boolean | null
                saml?: {
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?: {
                  name: string
                  key: string
                  sso_path?: string
                  scim_path?: string
                  directory_path?: string
                  multi_valued?: boolean
                }[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                provider:
                  | 'saml_custom'
                  | 'saml_okta'
                  | 'saml_google'
                  | 'saml_microsoft'
                  | 'oidc_custom'
                  | 'oidc_github_enterprise'
                  | 'oidc_gitlab'
                domains: string[]
                organization_id?: string | null
                allow_organization_account_linking?: boolean | null
                active?: boolean | null
                saml?: {
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?: {
                  name: string
                  key: string
                  sso_path?: string
                  scim_path?: string
                  directory_path?: string
                  multi_valued?: boolean
                }[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name: string
                provider:
                  | 'saml_custom'
                  | 'saml_okta'
                  | 'saml_google'
                  | 'saml_microsoft'
                  | 'oidc_custom'
                  | 'oidc_github_enterprise'
                  | 'oidc_gitlab'
                domains: string[]
                organization_id?: string | null
                allow_organization_account_linking?: boolean | null
                active?: boolean | null
                saml?: {
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?: {
                  name: string
                  key: string
                  sso_path?: string
                  scim_path?: string
                  directory_path?: string
                  multi_valued?: boolean
                }[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                name: string
                provider:
                  | 'saml_custom'
                  | 'saml_okta'
                  | 'saml_google'
                  | 'saml_microsoft'
                  | 'oidc_custom'
                  | 'oidc_github_enterprise'
                  | 'oidc_gitlab'
                domains: string[]
                organization_id?: string | null
                allow_organization_account_linking?: boolean | null
                active?: boolean | null
                saml?: {
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?: {
                  name: string
                  key: string
                  sso_path?: string
                  scim_path?: string
                  directory_path?: string
                  multi_valued?: boolean
                }[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/enterprise_connections/:enterprise_connection_id': {
      $get:
        | {
            input: { param: { enterprise_connection_id: string } }
            output: EnterpriseConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { enterprise_connection_id: string } } & {
              json: {
                name?: string | null
                domains?: string[] | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                organization_id?: string | null
                saml?: {
                  name?: string | null
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?:
                  | {
                      name: string
                      key: string
                      sso_path?: string
                      scim_path?: string
                      directory_path?: string
                      multi_valued?: boolean
                    }[]
                  | null
              }
            }
            output: EnterpriseConnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              json: {
                name?: string | null
                domains?: string[] | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                organization_id?: string | null
                saml?: {
                  name?: string | null
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?:
                  | {
                      name: string
                      key: string
                      sso_path?: string
                      scim_path?: string
                      directory_path?: string
                      multi_valued?: boolean
                    }[]
                  | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              json: {
                name?: string | null
                domains?: string[] | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                organization_id?: string | null
                saml?: {
                  name?: string | null
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?:
                  | {
                      name: string
                      key: string
                      sso_path?: string
                      scim_path?: string
                      directory_path?: string
                      multi_valued?: boolean
                    }[]
                  | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              json: {
                name?: string | null
                domains?: string[] | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                organization_id?: string | null
                saml?: {
                  name?: string | null
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?:
                  | {
                      name: string
                      key: string
                      sso_path?: string
                      scim_path?: string
                      directory_path?: string
                      multi_valued?: boolean
                    }[]
                  | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              json: {
                name?: string | null
                domains?: string[] | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                organization_id?: string | null
                saml?: {
                  name?: string | null
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?:
                  | {
                      name: string
                      key: string
                      sso_path?: string
                      scim_path?: string
                      directory_path?: string
                      multi_valued?: boolean
                    }[]
                  | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              json: {
                name?: string | null
                domains?: string[] | null
                active?: boolean | null
                sync_user_attributes?: boolean | null
                disable_additional_identifications?: boolean | null
                allow_organization_account_linking?: boolean | null
                organization_id?: string | null
                saml?: {
                  name?: string | null
                  idp_entity_id?: string | null
                  idp_sso_url?: string | null
                  idp_certificate?: string | null
                  idp_certificates?: string[]
                  idp_metadata_url?: string | null
                  idp_metadata?: string | null
                  attribute_mapping?: {
                    user_id?: string | null
                    email_address?: string | null
                    first_name?: string | null
                    last_name?: string | null
                  } | null
                  allow_subdomains?: boolean | null
                  allow_idp_initiated?: boolean | null
                  force_authn?: boolean | null
                  login_hint?: {
                    mode: 'email_address' | 'custom_attribute' | 'off'
                    source?: string
                  } | null
                } | null
                oidc?: {
                  client_id?: string | null
                  client_secret?: string | null
                  discovery_url?: string | null
                  auth_url?: string | null
                  token_url?: string | null
                  user_info_url?: string | null
                  requires_pkce?: boolean | null
                } | null
                custom_attributes?:
                  | {
                      name: string
                      key: string
                      sso_path?: string
                      scim_path?: string
                      directory_path?: string
                      multi_valued?: boolean
                    }[]
                  | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { enterprise_connection_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/enterprise_connections/:enterprise_connection_id/test_runs': {
      $get:
        | {
            input: { param: { enterprise_connection_id: string } } & {
              query: { status?: unknown; limit?: unknown; offset?: unknown }
            }
            output: EnterpriseConnectionTestRuns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              query: { status?: unknown; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              query: { status?: unknown; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              query: { status?: unknown; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { enterprise_connection_id: string } } & {
              query: { status?: unknown; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { enterprise_connection_id: string } }
            output: EnterpriseConnectionTestRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { enterprise_connection_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/testing_tokens': {
      $post: { input: {}; output: TestingToken; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/organization_memberships': {
      $get:
        | {
            input: { query: { order_by?: string; limit?: unknown; offset?: unknown } }
            output: OrganizationMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { order_by?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { order_by?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { order_by?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { order_by?: string; limit?: unknown; offset?: unknown } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/waitlist_entries': {
      $get: {
        input: {
          query: {
            limit?: unknown
            offset?: unknown
            query?: string
            status?: 'pending' | 'invited' | 'completed' | 'rejected'
            order_by?: string
          }
        }
        output: { data: WaitlistEntry[]; total_count: number }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { email_address: string; notify?: boolean | null } }
            output: WaitlistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email_address: string; notify?: boolean | null } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { email_address: string; notify?: boolean | null } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/waitlist_entries/:waitlist_entry_id': {
      $delete:
        | {
            input: { param: { waitlist_entry_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { waitlist_entry_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { waitlist_entry_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { waitlist_entry_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { waitlist_entry_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/waitlist_entries/:waitlist_entry_id/invite': {
      $post:
        | {
            input: { param: { waitlist_entry_id: string } } & {
              json: { ignore_existing?: boolean | null }
            }
            output: WaitlistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { waitlist_entry_id: string } } & {
              json: { ignore_existing?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { waitlist_entry_id: string } } & {
              json: { ignore_existing?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { waitlist_entry_id: string } } & {
              json: { ignore_existing?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { waitlist_entry_id: string } } & {
              json: { ignore_existing?: boolean | null }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/waitlist_entries/:waitlist_entry_id/reject': {
      $post:
        | {
            input: { param: { waitlist_entry_id: string } }
            output: WaitlistEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { waitlist_entry_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { waitlist_entry_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { waitlist_entry_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { waitlist_entry_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/commerce/plans': {
      $get:
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                payer_type?: 'user' | 'org'
              }
            }
            output: PaginatedCommercePlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                payer_type?: 'user' | 'org'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                payer_type?: 'user' | 'org'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                payer_type?: 'user' | 'org'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                payer_type?: 'user' | 'org'
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/commerce/subscription_items': {
      $get:
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                status?: 'active' | 'ended' | 'past_due' | 'upcoming' | 'free_trial'
                payer_type?: 'user' | 'org'
                plan_id?: string
                include_free?: string
                query?: string
                user_id?: string
                organization_id?: string
              }
            }
            output: PaginatedCommerceSubscriptionItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                status?: 'active' | 'ended' | 'past_due' | 'upcoming' | 'free_trial'
                payer_type?: 'user' | 'org'
                plan_id?: string
                include_free?: string
                query?: string
                user_id?: string
                organization_id?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                status?: 'active' | 'ended' | 'past_due' | 'upcoming' | 'free_trial'
                payer_type?: 'user' | 'org'
                plan_id?: string
                include_free?: string
                query?: string
                user_id?: string
                organization_id?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                status?: 'active' | 'ended' | 'past_due' | 'upcoming' | 'free_trial'
                payer_type?: 'user' | 'org'
                plan_id?: string
                include_free?: string
                query?: string
                user_id?: string
                organization_id?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                paginated?: string
                limit?: unknown
                offset?: unknown
                status?: 'active' | 'ended' | 'past_due' | 'upcoming' | 'free_trial'
                payer_type?: 'user' | 'org'
                plan_id?: string
                include_free?: string
                query?: string
                user_id?: string
                organization_id?: string
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/commerce/subscription_items/:subscription_item_id': {
      $delete:
        | {
            input: { param: { subscription_item_id: string } } & { query: { end_now?: string } }
            output: CommerceSubscriptionItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_item_id: string } } & { query: { end_now?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_item_id: string } } & { query: { end_now?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_item_id: string } } & { query: { end_now?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_item_id: string } } & { query: { end_now?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_item_id: string } } & { query: { end_now?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_item_id: string } } & { query: { end_now?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/billing/subscription_items/:subscription_item_id/extend_free_trial': {
      $post:
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ExtendFreeTrialRequestInput
            }
            output: CommerceSubscriptionItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ExtendFreeTrialRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ExtendFreeTrialRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ExtendFreeTrialRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ExtendFreeTrialRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ExtendFreeTrialRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ExtendFreeTrialRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/billing/subscription_items/:subscription_item_id/price_transition': {
      $post:
        | {
            input: { param: { subscription_item_id: string } } & {
              json: PriceTransitionRequestInput
            }
            output: CommercePriceTransitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: PriceTransitionRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: PriceTransitionRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: PriceTransitionRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: PriceTransitionRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: PriceTransitionRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: PriceTransitionRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: PriceTransitionRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/billing/subscription_items/:subscription_item_id/discounts': {
      $post:
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ApplyCommerceDiscountRequestInput
            }
            output: CommerceDiscountRedemptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ApplyCommerceDiscountRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ApplyCommerceDiscountRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ApplyCommerceDiscountRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ApplyCommerceDiscountRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ApplyCommerceDiscountRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ApplyCommerceDiscountRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_item_id: string } } & {
              json: ApplyCommerceDiscountRequestInput
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/billing/subscription_items/:subscription_item_id/discounts/:discount_id': {
      $delete:
        | {
            input: { param: { subscription_item_id: string; discount_id: string } }
            output: CommerceDiscountRedemptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_item_id: string; discount_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_item_id: string; discount_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_item_id: string; discount_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_item_id: string; discount_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_item_id: string; discount_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscription_item_id: string; discount_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_item_id: string; discount_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization_permissions': {
      $get:
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: Permissions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: { name: string; key: string; description?: string } }
            output: Permission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name: string; key: string; description?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { name: string; key: string; description?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { name: string; key: string; description?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: { name: string; key: string; description?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { name: string; key: string; description?: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organization_permissions/:permission_id': {
      $get:
        | {
            input: { param: { permission_id: string } }
            output: Permission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { permission_id: string } } & {
              json: { name?: string; key?: string; description?: string }
            }
            output: Permission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permission_id: string } } & {
              json: { name?: string; key?: string; description?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { permission_id: string } } & {
              json: { name?: string; key?: string; description?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { permission_id: string } } & {
              json: { name?: string; key?: string; description?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { permission_id: string } } & {
              json: { name?: string; key?: string; description?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { permission_id: string } } & {
              json: { name?: string; key?: string; description?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { permission_id: string } }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { permission_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/role_sets': {
      $get:
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: RoleSets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { query?: string; order_by?: string; limit?: unknown; offset?: unknown }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                name: string
                key?: string
                description?: string | null
                default_role_key: string
                creator_role_key: string
                type?: 'initial' | 'custom'
                roles: string[]
              }
            }
            output: RoleSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                key?: string
                description?: string | null
                default_role_key: string
                creator_role_key: string
                type?: 'initial' | 'custom'
                roles: string[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                key?: string
                description?: string | null
                default_role_key: string
                creator_role_key: string
                type?: 'initial' | 'custom'
                roles: string[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                key?: string
                description?: string | null
                default_role_key: string
                creator_role_key: string
                type?: 'initial' | 'custom'
                roles: string[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                name: string
                key?: string
                description?: string | null
                default_role_key: string
                creator_role_key: string
                type?: 'initial' | 'custom'
                roles: string[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                key?: string
                description?: string | null
                default_role_key: string
                creator_role_key: string
                type?: 'initial' | 'custom'
                roles: string[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name: string
                key?: string
                description?: string | null
                default_role_key: string
                creator_role_key: string
                type?: 'initial' | 'custom'
                roles: string[]
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/role_sets/:role_set_key_or_id': {
      $get:
        | {
            input: { param: { role_set_key_or_id: string } }
            output: RoleSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_set_key_or_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_set_key_or_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_set_key_or_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                type?: 'initial' | null
                default_role_key?: string | null
                creator_role_key?: string | null
              }
            }
            output: RoleSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                type?: 'initial' | null
                default_role_key?: string | null
                creator_role_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                type?: 'initial' | null
                default_role_key?: string | null
                creator_role_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                type?: 'initial' | null
                default_role_key?: string | null
                creator_role_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                type?: 'initial' | null
                default_role_key?: string | null
                creator_role_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: {
                name?: string | null
                key?: string | null
                description?: string | null
                type?: 'initial' | null
                default_role_key?: string | null
                creator_role_key?: string | null
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/role_sets/:role_set_key_or_id/replace': {
      $post:
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { dest_role_set_key: string; reassignment_mappings?: ReassignmentMappingsInput }
            }
            output: DeletedObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { dest_role_set_key: string; reassignment_mappings?: ReassignmentMappingsInput }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { dest_role_set_key: string; reassignment_mappings?: ReassignmentMappingsInput }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { dest_role_set_key: string; reassignment_mappings?: ReassignmentMappingsInput }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { dest_role_set_key: string; reassignment_mappings?: ReassignmentMappingsInput }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { dest_role_set_key: string; reassignment_mappings?: ReassignmentMappingsInput }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/role_sets/:role_set_key_or_id/roles': {
      $post:
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_keys: string[]; default_role_key?: string; creator_role_key?: string }
            }
            output: RoleSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_keys: string[]; default_role_key?: string; creator_role_key?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_keys: string[]; default_role_key?: string; creator_role_key?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_keys: string[]; default_role_key?: string; creator_role_key?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_keys: string[]; default_role_key?: string; creator_role_key?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_keys: string[]; default_role_key?: string; creator_role_key?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/role_sets/:role_set_key_or_id/roles/replace': {
      $post:
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_key: string; to_role_key: string }
            }
            output: RoleSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_key: string; to_role_key: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_key: string; to_role_key: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_key: string; to_role_key: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_key: string; to_role_key: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { role_set_key_or_id: string } } & {
              json: { role_key: string; to_role_key: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/logs': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                starting_after?: string
                ending_before?: string
                subject?: string
                actor?: string
                user_id?: string
                identifier?: string
                trace_id?: string
                type?: string
                client_id?: string
                session_id?: string
                impersonator_user_id?: string
                ip_address?: string
                payload_filter?: { [key: string]: string }
                payload_fields?: string
                filter_match?: 'all' | 'any'
                event_time_after?: unknown
                event_time_before?: unknown
                end_user_facing_only?: string
                view?: 'flat' | 'grouped'
                group_type?: unknown
                status?: unknown
              }
            }
            output: {
              data: (Log | LogGroup)[]
              cursor?:
                | {
                    starting_after?: (string | null) | undefined
                    ending_before?: (string | null) | undefined
                    has_next_page?: boolean | undefined
                    next_page_status?: 'true' | 'false' | 'unknown' | undefined
                    retention_limit_reached?: boolean | undefined
                    retention_days?: number | undefined
                    retention_floor?: bigint | undefined
                    searched_from?: bigint | undefined
                    searched_to?: bigint | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                starting_after?: string
                ending_before?: string
                subject?: string
                actor?: string
                user_id?: string
                identifier?: string
                trace_id?: string
                type?: string
                client_id?: string
                session_id?: string
                impersonator_user_id?: string
                ip_address?: string
                payload_filter?: { [key: string]: string }
                payload_fields?: string
                filter_match?: 'all' | 'any'
                event_time_after?: unknown
                event_time_before?: unknown
                end_user_facing_only?: string
                view?: 'flat' | 'grouped'
                group_type?: unknown
                status?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: unknown
                starting_after?: string
                ending_before?: string
                subject?: string
                actor?: string
                user_id?: string
                identifier?: string
                trace_id?: string
                type?: string
                client_id?: string
                session_id?: string
                impersonator_user_id?: string
                ip_address?: string
                payload_filter?: { [key: string]: string }
                payload_fields?: string
                filter_match?: 'all' | 'any'
                event_time_after?: unknown
                event_time_before?: unknown
                end_user_facing_only?: string
                view?: 'flat' | 'grouped'
                group_type?: unknown
                status?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: unknown
                starting_after?: string
                ending_before?: string
                subject?: string
                actor?: string
                user_id?: string
                identifier?: string
                trace_id?: string
                type?: string
                client_id?: string
                session_id?: string
                impersonator_user_id?: string
                ip_address?: string
                payload_filter?: { [key: string]: string }
                payload_fields?: string
                filter_match?: 'all' | 'any'
                event_time_after?: unknown
                event_time_before?: unknown
                end_user_facing_only?: string
                view?: 'flat' | 'grouped'
                group_type?: unknown
                status?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: unknown
                starting_after?: string
                ending_before?: string
                subject?: string
                actor?: string
                user_id?: string
                identifier?: string
                trace_id?: string
                type?: string
                client_id?: string
                session_id?: string
                impersonator_user_id?: string
                ip_address?: string
                payload_filter?: { [key: string]: string }
                payload_fields?: string
                filter_match?: 'all' | 'any'
                event_time_after?: unknown
                event_time_before?: unknown
                end_user_facing_only?: string
                view?: 'flat' | 'grouped'
                group_type?: unknown
                status?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                limit?: unknown
                starting_after?: string
                ending_before?: string
                subject?: string
                actor?: string
                user_id?: string
                identifier?: string
                trace_id?: string
                type?: string
                client_id?: string
                session_id?: string
                impersonator_user_id?: string
                ip_address?: string
                payload_filter?: { [key: string]: string }
                payload_fields?: string
                filter_match?: 'all' | 'any'
                event_time_after?: unknown
                event_time_before?: unknown
                end_user_facing_only?: string
                view?: 'flat' | 'grouped'
                group_type?: unknown
                status?: unknown
              }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/logs/schemas': {
      $get:
        | {
            input: { query: { type: string } }
            output: LogSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { type: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { type: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { type: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/logs/types': {
      $get:
        | { input: {}; output: LogSchemaList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ClerkErrors; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/logs/groups/:group_id/events': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: { started_at?: unknown; limit?: unknown; starting_after?: string }
            }
            output: {
              data: (Log | LogGroup)[]
              cursor?:
                | {
                    starting_after?: (string | null) | undefined
                    ending_before?: (string | null) | undefined
                    has_next_page?: boolean | undefined
                    next_page_status?: 'true' | 'false' | 'unknown' | undefined
                    retention_limit_reached?: boolean | undefined
                    retention_days?: number | undefined
                    retention_floor?: bigint | undefined
                    searched_from?: bigint | undefined
                    searched_to?: bigint | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: { started_at?: unknown; limit?: unknown; starting_after?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { group_id: string } } & {
              query: { started_at?: unknown; limit?: unknown; starting_after?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: { started_at?: unknown; limit?: unknown; starting_after?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              query: { started_at?: unknown; limit?: unknown; starting_after?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { group_id: string } } & {
              query: { started_at?: unknown; limit?: unknown; starting_after?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { group_id: string } } & {
              query: { started_at?: unknown; limit?: unknown; starting_after?: string }
            }
            output: ClerkErrors
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/logs/:event_time_and_id': {
      $get:
        | {
            input: { param: { event_time_and_id: string } }
            output: LogWithPayload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_time_and_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_time_and_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_time_and_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_time_and_id: string } }
            output: ClerkErrors
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/admin_portal_link_tokens': {
      $post:
        | {
            input: {
              json: {
                organization_id?: string
                it_contact_id?: string
                scopes?: string[]
                seconds_until_expiration?: number
              }
            }
            output: {
              object: 'admin_portal_link_token'
              id: string
              admin_portal_link_id: string
              instance_id: string
              organization_id: string | null
              it_contact_id: string | null
              scopes: string[] | null
              token: string
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                organization_id?: string
                it_contact_id?: string
                scopes?: string[]
                seconds_until_expiration?: number
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                organization_id?: string
                it_contact_id?: string
                scopes?: string[]
                seconds_until_expiration?: number
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                organization_id?: string
                it_contact_id?: string
                scopes?: string[]
                seconds_until_expiration?: number
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                organization_id?: string
                it_contact_id?: string
                scopes?: string[]
                seconds_until_expiration?: number
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/admin_portal_link_tokens/:adminPortalLinkTokenID/revoke': {
      $post:
        | {
            input: { param: { adminPortalLinkTokenID: string } } & {
              json: { revocation_reason?: string | null }
            }
            output: {
              object: 'admin_portal_link_token'
              id: string
              admin_portal_link_id: string
              instance_id: string
              organization_id: string | null
              it_contact_id: string | null
              scopes: string[] | null
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { adminPortalLinkTokenID: string } } & {
              json: { revocation_reason?: string | null }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { adminPortalLinkTokenID: string } } & {
              json: { revocation_reason?: string | null }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { adminPortalLinkTokenID: string } } & {
              json: { revocation_reason?: string | null }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { adminPortalLinkTokenID: string } } & {
              json: { revocation_reason?: string | null }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api_keys': {
      $post:
        | {
            input: {
              json: {
                type?: string
                name: string
                description?: string | null
                subject: string
                claims?: any | null
                scopes?: string[]
                created_by?: string | null
                seconds_until_expiration?: number | null
              }
            }
            output: {
              object: 'api_key'
              id: string
              type: string
              subject: string
              name: string
              description?: (string | null) | undefined
              claims: any | null
              scopes: string[]
              secret: string
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              created_by: string | null
              last_used_at: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type?: string
                name: string
                description?: string | null
                subject: string
                claims?: any | null
                scopes?: string[]
                created_by?: string | null
                seconds_until_expiration?: number | null
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type?: string
                name: string
                description?: string | null
                subject: string
                claims?: any | null
                scopes?: string[]
                created_by?: string | null
                seconds_until_expiration?: number | null
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: {
              query: {
                type?: string
                subject: string
                include_invalid?: 'true' | 'false'
                limit?: unknown
                offset?: unknown
                query?: string
              }
            }
            output: {
              data: {
                object: 'api_key'
                id: string
                type: string
                subject: string
                name: string
                description?: (string | null) | undefined
                claims: any | null
                scopes: string[]
                revoked: boolean
                revocation_reason: string | null
                expired: boolean
                expiration: number | null
                created_by: string | null
                last_used_at: number | null
                created_at: number
                updated_at: number
              }[]
              total_count: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: string
                subject: string
                include_invalid?: 'true' | 'false'
                limit?: unknown
                offset?: unknown
                query?: string
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type?: string
                subject: string
                include_invalid?: 'true' | 'false'
                limit?: unknown
                offset?: unknown
                query?: string
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api_keys/:apiKeyID': {
      $get:
        | {
            input: { param: { apiKeyID: string } }
            output: {
              object: 'api_key'
              id: string
              type: string
              subject: string
              name: string
              description?: (string | null) | undefined
              claims: any | null
              scopes: string[]
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              created_by: string | null
              last_used_at: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiKeyID: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiKeyID: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { apiKeyID: string } } & {
              json: {
                claims?: any | null
                scopes?: string[]
                description?: string | null
                subject?: string
                seconds_until_expiration?: number | null
              }
            }
            output: {
              object: 'api_key'
              id: string
              type: string
              subject: string
              name: string
              description?: (string | null) | undefined
              claims: any | null
              scopes: string[]
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              created_by: string | null
              last_used_at: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiKeyID: string } } & {
              json: {
                claims?: any | null
                scopes?: string[]
                description?: string | null
                subject?: string
                seconds_until_expiration?: number | null
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiKeyID: string } } & {
              json: {
                claims?: any | null
                scopes?: string[]
                description?: string | null
                subject?: string
                seconds_until_expiration?: number | null
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiKeyID: string } }
            output: { id: string; object: 'api_key'; deleted: true }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiKeyID: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiKeyID: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api_keys/:apiKeyID/secret': {
      $get:
        | {
            input: { param: { apiKeyID: string } }
            output: { secret: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiKeyID: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiKeyID: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api_keys/:apiKeyID/revoke': {
      $post:
        | {
            input: { param: { apiKeyID: string } } & { json: { revocation_reason?: string | null } }
            output: {
              object: 'api_key'
              id: string
              type: string
              subject: string
              name: string
              description?: (string | null) | undefined
              claims: any | null
              scopes: string[]
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              created_by: string | null
              last_used_at: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiKeyID: string } } & { json: { revocation_reason?: string | null } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiKeyID: string } } & { json: { revocation_reason?: string | null } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api_keys/verify': {
      $post:
        | {
            input: { json: { secret: string } }
            output: {
              object: 'api_key'
              id: string
              type: string
              subject: string
              name: string
              description?: (string | null) | undefined
              claims: any | null
              scopes: string[]
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              created_by: string | null
              last_used_at: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { secret: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { secret: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/m2m_tokens': {
      $post:
        | {
            input: {
              json: {
                token_format?: 'opaque' | 'jwt'
                seconds_until_expiration?: number | null
                claims?: any | null
                min_remaining_ttl_seconds?: number
              }
            }
            output: {
              object: 'machine_to_machine_token'
              id: string
              subject: string
              claims?: (any | null) | undefined
              scopes?: string[] | undefined
              token: string
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              last_used_at: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                token_format?: 'opaque' | 'jwt'
                seconds_until_expiration?: number | null
                claims?: any | null
                min_remaining_ttl_seconds?: number
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                token_format?: 'opaque' | 'jwt'
                seconds_until_expiration?: number | null
                claims?: any | null
                min_remaining_ttl_seconds?: number
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: {
              query: {
                subject: string
                revoked?: unknown
                expired?: unknown
                limit?: unknown
                offset?: unknown
              }
            }
            output: {
              m2m_tokens: {
                object: 'machine_to_machine_token'
                id: string
                subject: string
                claims?: (any | null) | undefined
                scopes?: string[] | undefined
                revoked: boolean
                revocation_reason: string | null
                expired: boolean
                expiration: number | null
                last_used_at: number | null
                created_at: number
                updated_at: number
              }[]
              total_count: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                subject: string
                revoked?: unknown
                expired?: unknown
                limit?: unknown
                offset?: unknown
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                subject: string
                revoked?: unknown
                expired?: unknown
                limit?: unknown
                offset?: unknown
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                subject: string
                revoked?: unknown
                expired?: unknown
                limit?: unknown
                offset?: unknown
              }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/m2m_tokens/:m2m_token_id/revoke': {
      $post:
        | {
            input: { param: { m2m_token_id: string } } & {
              json: { revocation_reason?: string | null }
            }
            output: {
              object: 'machine_to_machine_token'
              id: string
              subject: string
              claims?: (any | null) | undefined
              scopes?: string[] | undefined
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              last_used_at: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { m2m_token_id: string } } & {
              json: { revocation_reason?: string | null }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { m2m_token_id: string } } & {
              json: { revocation_reason?: string | null }
            }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/m2m_tokens/verify': {
      $post:
        | {
            input: { json: { token: string } }
            output: {
              object: 'machine_to_machine_token'
              id: string
              subject: string
              claims?: (any | null) | undefined
              scopes?: string[] | undefined
              revoked: boolean
              revocation_reason: string | null
              expired: boolean
              expiration: number | null
              last_used_at: number | null
              created_at: number
              updated_at: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/oauth_applications/access_tokens/verify': {
      $post:
        | {
            input: { json: { access_token?: string; secret?: string } }
            output:
              | {
                  object: 'clerk_idp_oauth_access_token'
                  id: string
                  client_id: string
                  subject: string
                  scopes: string[]
                  aud?: string[] | undefined
                  act?:
                    | {
                        iss?: string | undefined
                        sub: string
                        act?: { iss?: string | undefined; sub: string } | undefined
                      }
                    | undefined
                  revoked: boolean
                  revocation_reason: string | null
                  expired: boolean
                  expiration: number | null
                  created_at: number
                  updated_at: number
                }
              | { active: false }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { access_token?: string; secret?: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { access_token?: string; secret?: string } }
            output: { errors: { message: string; long_message: string; code: string }[] }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
