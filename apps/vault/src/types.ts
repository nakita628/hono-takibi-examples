type StandardListResponse = { keys?: string[] | undefined }
type TokenCreateRequest = {
  display_name?: string | undefined
  entity_alias?: string | undefined
  explicit_max_ttl?: string | undefined
  id?: string | undefined
  lease?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  no_default_policy?: boolean | undefined
  no_parent?: boolean | undefined
  num_uses?: number | undefined
  period?: string | undefined
  policies?: string[] | undefined
  renewable?: boolean | undefined
  ttl?: string | undefined
  type?: string | undefined
}
type TokenCreateOrphanRequest = {
  display_name?: string | undefined
  entity_alias?: string | undefined
  explicit_max_ttl?: string | undefined
  id?: string | undefined
  lease?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  no_default_policy?: boolean | undefined
  no_parent?: boolean | undefined
  num_uses?: number | undefined
  period?: string | undefined
  policies?: string[] | undefined
  renewable?: boolean | undefined
  ttl?: string | undefined
  type?: string | undefined
}
type TokenCreateAgainstRoleRequest = {
  display_name?: string | undefined
  entity_alias?: string | undefined
  explicit_max_ttl?: string | undefined
  id?: string | undefined
  lease?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  no_default_policy?: boolean | undefined
  no_parent?: boolean | undefined
  num_uses?: number | undefined
  period?: string | undefined
  policies?: string[] | undefined
  renewable?: boolean | undefined
  ttl?: string | undefined
  type?: string | undefined
}
type TokenLookUpRequest = { token?: string | undefined }
type TokenLookUpAccessorRequest = { accessor?: string | undefined }
type TokenLookUpSelf2Request = { token?: string | undefined }
type TokenRenewRequest = { increment?: string | undefined; token?: string | undefined }
type TokenRenewAccessorRequest = { accessor?: string | undefined; increment?: string | undefined }
type TokenRenewSelfRequest = { increment?: string | undefined; token?: string | undefined }
type TokenRevokeRequest = { token?: string | undefined }
type TokenRevokeAccessorRequest = { accessor?: string | undefined }
type TokenRevokeOrphanRequest = { token?: string | undefined }
type TokenWriteRoleRequest = {
  allowed_entity_aliases?: string[] | undefined
  allowed_policies?: string[] | undefined
  allowed_policies_glob?: string[] | undefined
  bound_cidrs?: string[] | undefined
  disallowed_policies?: string[] | undefined
  disallowed_policies_glob?: string[] | undefined
  explicit_max_ttl?: string | undefined
  orphan?: boolean | undefined
  path_suffix?: string | undefined
  period?: string | undefined
  renewable?: boolean | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_type?: string | undefined
}
type AliCloudLoginRequest = {
  identity_request_headers?: string | undefined
  identity_request_url?: string | undefined
  role: string
}
type AliCloudWriteAuthRoleRequest = {
  arn?: string | undefined
  bound_cidrs?: string[] | undefined
  max_ttl?: string | undefined
  period?: string | undefined
  policies?: string[] | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type AppRoleLoginRequest = { role_id?: string | undefined; secret_id?: string | undefined }
type AppRoleReadRoleResponse = {
  bind_secret_id?: boolean | undefined
  local_secret_ids?: boolean | undefined
  period?: string | undefined
  policies?: string[] | undefined
  secret_id_bound_cidrs?: string[] | undefined
  secret_id_num_uses?: number | undefined
  secret_id_ttl?: string | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
}
type AppRoleWriteRoleRequest = {
  bind_secret_id?: boolean | undefined
  bound_cidr_list?: string[] | undefined
  local_secret_ids?: boolean | undefined
  period?: string | undefined
  policies?: string[] | undefined
  role_id?: string | undefined
  secret_id_bound_cidrs?: string[] | undefined
  secret_id_num_uses?: number | undefined
  secret_id_ttl?: string | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
}
type AppRoleReadBindSecretIdResponse = { bind_secret_id?: boolean | undefined }
type AppRoleWriteBindSecretIdRequest = { bind_secret_id?: boolean | undefined }
type AppRoleReadBoundCidrListResponse = { bound_cidr_list?: string[] | undefined }
type AppRoleWriteBoundCidrListRequest = { bound_cidr_list?: string[] | undefined }
type AppRoleWriteCustomSecretIdRequest = {
  cidr_list?: string[] | undefined
  metadata?: string | undefined
  num_uses?: number | undefined
  secret_id?: string | undefined
  token_bound_cidrs?: string[] | undefined
  ttl?: string | undefined
}
type AppRoleWriteCustomSecretIdResponse = {
  secret_id?: string | undefined
  secret_id_accessor?: string | undefined
  secret_id_num_uses?: number | undefined
  secret_id_ttl?: string | undefined
}
type AppRoleReadLocalSecretIdsResponse = { local_secret_ids?: boolean | undefined }
type AppRoleReadPeriodResponse = { period?: string | undefined; token_period?: string | undefined }
type AppRoleWritePeriodRequest = { period?: string | undefined; token_period?: string | undefined }
type AppRoleReadPoliciesResponse = {
  policies?: string[] | undefined
  token_policies?: string[] | undefined
}
type AppRoleWritePoliciesRequest = {
  policies?: string[] | undefined
  token_policies?: string[] | undefined
}
type AppRoleReadRoleIdResponse = { role_id?: string | undefined }
type AppRoleWriteRoleIdRequest = { role_id?: string | undefined }
type AppRoleWriteSecretIdRequest = {
  cidr_list?: string[] | undefined
  metadata?: string | undefined
  num_uses?: number | undefined
  token_bound_cidrs?: string[] | undefined
  ttl?: string | undefined
}
type AppRoleWriteSecretIdResponse = {
  secret_id?: string | undefined
  secret_id_accessor?: string | undefined
  secret_id_num_uses?: number | undefined
  secret_id_ttl?: string | undefined
}
type AppRoleDestroySecretIdByAccessorRequest = { secret_id_accessor?: string | undefined }
type AppRoleLookUpSecretIdByAccessorRequest = { secret_id_accessor?: string | undefined }
type AppRoleLookUpSecretIdByAccessorResponse = {
  cidr_list?: string[] | undefined
  creation_time?: string | undefined
  expiration_time?: string | undefined
  last_updated_time?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  secret_id_accessor?: string | undefined
  secret_id_num_uses?: number | undefined
  secret_id_ttl?: string | undefined
  token_bound_cidrs?: string[] | undefined
}
type AppRoleReadSecretIdBoundCidrsResponse = { secret_id_bound_cidrs?: string[] | undefined }
type AppRoleWriteSecretIdBoundCidrsRequest = { secret_id_bound_cidrs?: string[] | undefined }
type AppRoleReadSecretIdNumUsesResponse = { secret_id_num_uses?: number | undefined }
type AppRoleWriteSecretIdNumUsesRequest = { secret_id_num_uses?: number | undefined }
type AppRoleReadSecretIdTtlResponse = { secret_id_ttl?: string | undefined }
type AppRoleWriteSecretIdTtlRequest = { secret_id_ttl?: string | undefined }
type AppRoleDestroySecretIdRequest = { secret_id?: string | undefined }
type AppRoleLookUpSecretIdRequest = { secret_id?: string | undefined }
type AppRoleLookUpSecretIdResponse = {
  cidr_list?: string[] | undefined
  creation_time?: string | undefined
  expiration_time?: string | undefined
  last_updated_time?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  secret_id_accessor?: string | undefined
  secret_id_num_uses?: number | undefined
  secret_id_ttl?: string | undefined
  token_bound_cidrs?: string[] | undefined
}
type AppRoleReadTokenBoundCidrsResponse = { token_bound_cidrs?: string[] | undefined }
type AppRoleWriteTokenBoundCidrsRequest = { token_bound_cidrs?: string[] | undefined }
type AppRoleReadTokenMaxTtlResponse = { token_max_ttl?: string | undefined }
type AppRoleWriteTokenMaxTtlRequest = { token_max_ttl?: string | undefined }
type AppRoleReadTokenNumUsesResponse = { token_num_uses?: number | undefined }
type AppRoleWriteTokenNumUsesRequest = { token_num_uses?: number | undefined }
type AppRoleReadTokenTtlResponse = { token_ttl?: string | undefined }
type AppRoleWriteTokenTtlRequest = { token_ttl?: string | undefined }
type AwsConfigureCertificateRequest = {
  aws_public_cert?: string | undefined
  type?: string | undefined
}
type AwsConfigureClientRequest = {
  access_key?: string | undefined
  allowed_sts_header_values?: string[] | undefined
  endpoint?: string | undefined
  iam_endpoint?: string | undefined
  iam_server_id_header_value?: string | undefined
  max_retries?: number | undefined
  secret_key?: string | undefined
  sts_endpoint?: string | undefined
  sts_region?: string | undefined
  use_sts_region_from_client?: boolean | undefined
}
type AwsConfigureIdentityIntegrationRequest = {
  ec2_alias?: string | undefined
  ec2_metadata?: string[] | undefined
  iam_alias?: string | undefined
  iam_metadata?: string[] | undefined
}
type AwsWriteStsRoleRequest = { sts_role?: string | undefined }
type AwsConfigureIdentityAccessListTidyOperationRequest = {
  disable_periodic_tidy?: boolean | undefined
  safety_buffer?: string | undefined
}
type AwsConfigureIdentityWhitelistTidyOperationRequest = {
  disable_periodic_tidy?: boolean | undefined
  safety_buffer?: string | undefined
}
type AwsConfigureRoleTagBlacklistTidyOperationRequest = {
  disable_periodic_tidy?: boolean | undefined
  safety_buffer?: string | undefined
}
type AwsConfigureRoleTagDenyListTidyOperationRequest = {
  disable_periodic_tidy?: boolean | undefined
  safety_buffer?: string | undefined
}
type AwsLoginRequest = {
  iam_http_request_method?: string | undefined
  iam_request_body?: string | undefined
  iam_request_headers?: string | undefined
  iam_request_url?: string | undefined
  identity?: string | undefined
  nonce?: string | undefined
  pkcs7?: string | undefined
  role?: string | undefined
  signature?: string | undefined
}
type AwsWriteAuthRoleRequest = {
  allow_instance_migration?: boolean | undefined
  auth_type?: string | undefined
  bound_account_id?: string[] | undefined
  bound_ami_id?: string[] | undefined
  bound_ec2_instance_id?: string[] | undefined
  bound_iam_instance_profile_arn?: string[] | undefined
  bound_iam_principal_arn?: string[] | undefined
  bound_iam_role_arn?: string[] | undefined
  bound_region?: string[] | undefined
  bound_subnet_id?: string[] | undefined
  bound_vpc_id?: string[] | undefined
  disallow_reauthentication?: boolean | undefined
  inferred_aws_region?: string | undefined
  inferred_entity_type?: string | undefined
  max_ttl?: string | undefined
  period?: string | undefined
  policies?: string[] | undefined
  resolve_aws_unique_ids?: boolean | undefined
  role_tag?: string | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type AwsWriteRoleTagRequest = {
  allow_instance_migration?: boolean | undefined
  disallow_reauthentication?: boolean | undefined
  instance_id?: string | undefined
  max_ttl?: string | undefined
  policies?: string[] | undefined
}
type AwsTidyIdentityAccessListRequest = { safety_buffer?: string | undefined }
type AwsTidyIdentityWhitelistRequest = { safety_buffer?: string | undefined }
type AwsTidyRoleTagBlacklistRequest = { safety_buffer?: string | undefined }
type AwsTidyRoleTagDenyListRequest = { safety_buffer?: string | undefined }
type AzureConfigureAuthRequest = {
  client_id?: string | undefined
  client_secret?: string | undefined
  environment?: string | undefined
  resource?: string | undefined
  root_password_ttl?: string | undefined
  tenant_id?: string | undefined
}
type AzureLoginRequest = {
  jwt?: string | undefined
  resource_group_name?: string | undefined
  resource_id?: string | undefined
  role?: string | undefined
  subscription_id?: string | undefined
  vm_name?: string | undefined
  vmss_name?: string | undefined
}
type AzureWriteAuthRoleRequest = {
  bound_group_ids?: string[] | undefined
  bound_locations?: string[] | undefined
  bound_resource_groups?: string[] | undefined
  bound_scale_sets?: string[] | undefined
  bound_service_principal_ids?: string[] | undefined
  bound_subscription_ids?: string[] | undefined
  max_ttl?: string | undefined
  num_uses?: number | undefined
  period?: string | undefined
  policies?: string[] | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type CentrifyConfigureRequest = {
  app_id?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  policies?: string[] | undefined
  scope?: string | undefined
  service_url?: string | undefined
  token_bound_cidrs?: string[] | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
}
type CentrifyLoginRequest = {
  mode?: string | undefined
  password?: string | undefined
  username?: string | undefined
}
type CertWriteCertificateRequest = {
  allowed_common_names?: string[] | undefined
  allowed_dns_sans?: string[] | undefined
  allowed_email_sans?: string[] | undefined
  allowed_metadata_extensions?: string[] | undefined
  allowed_names?: string[] | undefined
  allowed_organizational_units?: string[] | undefined
  allowed_uri_sans?: string[] | undefined
  bound_cidrs?: string[] | undefined
  certificate?: string | undefined
  display_name?: string | undefined
  lease?: number | undefined
  max_ttl?: string | undefined
  ocsp_ca_certificates?: string | undefined
  ocsp_enabled?: boolean | undefined
  ocsp_fail_open?: boolean | undefined
  ocsp_query_all_servers?: boolean | undefined
  ocsp_servers_override?: string[] | undefined
  period?: string | undefined
  policies?: string[] | undefined
  required_extensions?: string[] | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type CertConfigureRequest = {
  disable_binding?: boolean | undefined
  enable_identity_alias_metadata?: boolean | undefined
  ocsp_cache_size?: number | undefined
}
type CertWriteCrlRequest = { crl?: string | undefined; url?: string | undefined }
type CertLoginRequest = { name?: string | undefined }
type CloudFoundryConfigureRequest = {
  cf_api_addr?: string | undefined
  cf_api_mutual_tls_certificate?: string | undefined
  cf_api_mutual_tls_key?: string | undefined
  cf_api_trusted_certificates?: string[] | undefined
  cf_client_id?: string | undefined
  cf_client_secret?: string | undefined
  cf_password?: string | undefined
  cf_username?: string | undefined
  identity_ca_certificates?: string[] | undefined
  login_max_seconds_not_after?: number | undefined
  login_max_seconds_not_before?: string | undefined
  pcf_api_addr?: string | undefined
  pcf_api_trusted_certificates?: string[] | undefined
  pcf_password?: string | undefined
  pcf_username?: string | undefined
}
type CloudFoundryLoginRequest = {
  cf_instance_cert: string
  role: string
  signature: string
  signing_time: string
}
type CloudFoundryWriteRoleRequest = {
  bound_application_ids?: string[] | undefined
  bound_cidrs?: string[] | undefined
  bound_instance_ids?: string[] | undefined
  bound_organization_ids?: string[] | undefined
  bound_space_ids?: string[] | undefined
  disable_ip_matching?: boolean | undefined
  max_ttl?: string | undefined
  period?: string | undefined
  policies?: string[] | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type GoogleCloudConfigureAuthRequest = {
  credentials?: string | undefined
  custom_endpoint?: { [x: string]: unknown } | undefined
  gce_alias?: string | undefined
  gce_metadata?: string[] | undefined
  google_certs_endpoint?: string | undefined
  iam_alias?: string | undefined
  iam_metadata?: string[] | undefined
}
type GoogleCloudLoginRequest = { jwt?: string | undefined; role?: string | undefined }
type GoogleCloudWriteRoleRequest = {
  add_group_aliases?: boolean | undefined
  allow_gce_inference?: boolean | undefined
  bound_instance_group?: string | undefined
  bound_instance_groups?: string[] | undefined
  bound_labels?: string[] | undefined
  bound_projects?: string[] | undefined
  bound_region?: string | undefined
  bound_regions?: string[] | undefined
  bound_service_accounts?: string[] | undefined
  bound_zone?: string | undefined
  bound_zones?: string[] | undefined
  max_jwt_exp?: string | undefined
  max_ttl?: string | undefined
  period?: string | undefined
  policies?: string[] | undefined
  project_id?: string | undefined
  service_accounts?: string[] | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
  type?: string | undefined
}
type GoogleCloudEditLabelsForRoleRequest = {
  add?: string[] | undefined
  remove?: string[] | undefined
}
type GoogleCloudEditServiceAccountsForRoleRequest = {
  add?: string[] | undefined
  remove?: string[] | undefined
}
type GithubConfigureRequest = {
  base_url?: string | undefined
  max_ttl?: string | undefined
  organization: string
  organization_id?: bigint | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type GithubLoginRequest = { token?: string | undefined }
type GithubWriteTeamMappingRequest = { value?: string | undefined }
type GithubWriteUserMappingRequest = { value?: string | undefined }
type JwtConfigureRequest = {
  bound_issuer?: string | undefined
  default_role?: string | undefined
  jwks_ca_pem?: string | undefined
  jwks_url?: string | undefined
  jwt_supported_algs?: string[] | undefined
  jwt_validation_pubkeys?: string[] | undefined
  namespace_in_state?: boolean | undefined
  oidc_client_id?: string | undefined
  oidc_client_secret?: string | undefined
  oidc_discovery_ca_pem?: string | undefined
  oidc_discovery_url?: string | undefined
  oidc_response_mode?: string | undefined
  oidc_response_types?: string[] | undefined
  provider_config?: { [x: string]: unknown } | undefined
}
type JwtLoginRequest = { jwt?: string | undefined; role?: string | undefined }
type JwtOidcRequestAuthorizationUrlRequest = {
  client_nonce?: string | undefined
  redirect_uri?: string | undefined
  role?: string | undefined
}
type JwtOidcCallbackFormPostRequest = {
  client_nonce?: string | undefined
  code?: string | undefined
  id_token?: string | undefined
  state?: string | undefined
}
type JwtWriteRoleRequest = {
  allowed_redirect_uris?: string[] | undefined
  bound_audiences?: string[] | undefined
  bound_cidrs?: string[] | undefined
  bound_claims?: { [x: string]: unknown } | undefined
  bound_claims_type?: string | undefined
  bound_subject?: string | undefined
  claim_mappings?: { [x: string]: unknown } | undefined
  clock_skew_leeway?: string | undefined
  expiration_leeway?: string | undefined
  groups_claim?: string | undefined
  max_age?: string | undefined
  max_ttl?: string | undefined
  not_before_leeway?: string | undefined
  num_uses?: number | undefined
  oidc_scopes?: string[] | undefined
  period?: string | undefined
  policies?: string[] | undefined
  role_type?: string | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
  user_claim?: string | undefined
  user_claim_json_pointer?: boolean | undefined
  verbose_oidc_logging?: boolean | undefined
}
type KerberosConfigureRequest = {
  add_group_aliases?: boolean | undefined
  keytab?: string | undefined
  remove_instance_name?: boolean | undefined
  service_account?: string | undefined
}
type KerberosConfigureLdapRequest = {
  anonymous_group_search?: boolean | undefined
  binddn?: string | undefined
  bindpass?: string | undefined
  case_sensitive_names?: boolean | undefined
  certificate?: string | undefined
  client_tls_cert?: string | undefined
  client_tls_key?: string | undefined
  connection_timeout?: string | undefined
  deny_null_bind?: boolean | undefined
  dereference_aliases?: 'never' | 'finding' | 'searching' | 'always' | undefined
  discoverdn?: boolean | undefined
  groupattr?: string | undefined
  groupdn?: string | undefined
  groupfilter?: string | undefined
  insecure_tls?: boolean | undefined
  max_page_size?: number | undefined
  request_timeout?: string | undefined
  starttls?: boolean | undefined
  tls_max_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13' | undefined
  tls_min_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13' | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  upndomain?: string | undefined
  url?: string | undefined
  use_pre111_group_cn_behavior?: boolean | undefined
  use_token_groups?: boolean | undefined
  userattr?: string | undefined
  userdn?: string | undefined
  userfilter?: string | undefined
  username_as_alias?: boolean | undefined
}
type KerberosWriteGroupRequest = { policies?: string[] | undefined }
type KerberosLoginRequest = { authorization?: string | undefined }
type KubernetesConfigureAuthRequest = {
  disable_iss_validation?: boolean | undefined
  disable_local_ca_jwt?: boolean | undefined
  issuer?: string | undefined
  kubernetes_ca_cert?: string | undefined
  kubernetes_host?: string | undefined
  pem_keys?: string[] | undefined
  token_reviewer_jwt?: string | undefined
}
type KubernetesLoginRequest = { jwt?: string | undefined; role?: string | undefined }
type KubernetesWriteAuthRoleRequest = {
  alias_name_source?: string | undefined
  audience?: string | undefined
  bound_cidrs?: string[] | undefined
  bound_service_account_names?: string[] | undefined
  bound_service_account_namespaces?: string[] | undefined
  max_ttl?: string | undefined
  num_uses?: number | undefined
  period?: string | undefined
  policies?: string[] | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type LdapConfigureAuthRequest = {
  anonymous_group_search?: boolean | undefined
  binddn?: string | undefined
  bindpass?: string | undefined
  case_sensitive_names?: boolean | undefined
  certificate?: string | undefined
  client_tls_cert?: string | undefined
  client_tls_key?: string | undefined
  connection_timeout?: string | undefined
  deny_null_bind?: boolean | undefined
  dereference_aliases?: 'never' | 'finding' | 'searching' | 'always' | undefined
  discoverdn?: boolean | undefined
  groupattr?: string | undefined
  groupdn?: string | undefined
  groupfilter?: string | undefined
  insecure_tls?: boolean | undefined
  max_page_size?: number | undefined
  request_timeout?: string | undefined
  starttls?: boolean | undefined
  tls_max_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13' | undefined
  tls_min_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13' | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  upndomain?: string | undefined
  url?: string | undefined
  use_pre111_group_cn_behavior?: boolean | undefined
  use_token_groups?: boolean | undefined
  userattr?: string | undefined
  userdn?: string | undefined
  userfilter?: string | undefined
  username_as_alias?: boolean | undefined
}
type LdapWriteGroupRequest = { policies?: string[] | undefined }
type LdapLoginRequest = { password?: string | undefined }
type LdapWriteUserRequest = { groups?: string[] | undefined; policies?: string[] | undefined }
type OciConfigureRequest = { home_tenancy_id?: string | undefined }
type OciLoginRequest = { request_headers?: string | undefined }
type OciWriteRoleRequest = {
  ocid_list?: string[] | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
}
type OktaConfigureRequest = {
  api_token?: string | undefined
  base_url?: string | undefined
  bypass_okta_mfa?: boolean | undefined
  max_ttl?: string | undefined
  org_name?: string | undefined
  organization?: string | undefined
  production?: boolean | undefined
  token?: string | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type OktaWriteGroupRequest = { policies?: string[] | undefined }
type OktaLoginRequest = {
  nonce?: string | undefined
  password?: string | undefined
  provider?: string | undefined
  totp?: string | undefined
}
type OktaWriteUserRequest = { groups?: string[] | undefined; policies?: string[] | undefined }
type RadiusConfigureRequest = {
  dial_timeout?: string | undefined
  host?: string | undefined
  nas_identifier?: string | undefined
  nas_port?: number | undefined
  port?: number | undefined
  read_timeout?: string | undefined
  secret?: string | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  unregistered_user_policies?: string | undefined
}
type RadiusLoginRequest = { password?: string | undefined; username?: string | undefined }
type RadiusLoginWithUsernameRequest = {
  password?: string | undefined
  username?: string | undefined
}
type RadiusWriteUserRequest = { policies?: string[] | undefined }
type UserpassLoginRequest = { password?: string | undefined }
type UserpassWriteUserRequest = {
  bound_cidrs?: string[] | undefined
  max_ttl?: string | undefined
  password?: string | undefined
  policies?: string[] | undefined
  token_bound_cidrs?: string[] | undefined
  token_explicit_max_ttl?: string | undefined
  token_max_ttl?: string | undefined
  token_no_default_policy?: boolean | undefined
  token_num_uses?: number | undefined
  token_period?: string | undefined
  token_policies?: string[] | undefined
  token_ttl?: string | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type UserpassResetPasswordRequest = { password?: string | undefined }
type UserpassUpdatePoliciesRequest = {
  policies?: string[] | undefined
  token_policies?: string[] | undefined
}
type AliasCreateRequest = {
  canonical_id?: string | undefined
  entity_id?: string | undefined
  id?: string | undefined
  mount_accessor?: string | undefined
  name?: string | undefined
}
type AliasUpdateByIdRequest = {
  canonical_id?: string | undefined
  entity_id?: string | undefined
  mount_accessor?: string | undefined
  name?: string | undefined
}
type EntityCreateRequest = {
  disabled?: boolean | undefined
  id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: string | undefined
  policies?: string[] | undefined
}
type EntityCreateAliasRequest = {
  canonical_id?: string | undefined
  custom_metadata?: { [x: string]: unknown } | undefined
  entity_id?: string | undefined
  id?: string | undefined
  mount_accessor?: string | undefined
  name?: string | undefined
}
type EntityUpdateAliasByIdRequest = {
  canonical_id?: string | undefined
  custom_metadata?: { [x: string]: unknown } | undefined
  entity_id?: string | undefined
  mount_accessor?: string | undefined
  name?: string | undefined
}
type EntityBatchDeleteRequest = { entity_ids?: string[] | undefined }
type EntityUpdateByIdRequest = {
  disabled?: boolean | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: string | undefined
  policies?: string[] | undefined
}
type EntityMergeRequest = {
  conflicting_alias_ids_to_keep?: string[] | undefined
  force?: boolean | undefined
  from_entity_ids?: string[] | undefined
  to_entity_id?: string | undefined
}
type EntityUpdateByNameRequest = {
  disabled?: boolean | undefined
  id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  policies?: string[] | undefined
}
type GroupCreateRequest = {
  id?: string | undefined
  member_entity_ids?: string[] | undefined
  member_group_ids?: string[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: string | undefined
  policies?: string[] | undefined
  type?: string | undefined
}
type GroupCreateAliasRequest = {
  canonical_id?: string | undefined
  id?: string | undefined
  mount_accessor?: string | undefined
  name?: string | undefined
}
type GroupUpdateAliasByIdRequest = {
  canonical_id?: string | undefined
  mount_accessor?: string | undefined
  name?: string | undefined
}
type GroupUpdateByIdRequest = {
  member_entity_ids?: string[] | undefined
  member_group_ids?: string[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  name?: string | undefined
  policies?: string[] | undefined
  type?: string | undefined
}
type GroupUpdateByNameRequest = {
  id?: string | undefined
  member_entity_ids?: string[] | undefined
  member_group_ids?: string[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  policies?: string[] | undefined
  type?: string | undefined
}
type EntityLookUpRequest = {
  alias_id?: string | undefined
  alias_mount_accessor?: string | undefined
  alias_name?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type GroupLookUpRequest = {
  alias_id?: string | undefined
  alias_mount_accessor?: string | undefined
  alias_name?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type MfaWriteLoginEnforcementRequest = {
  auth_method_accessors?: string[] | undefined
  auth_method_types?: string[] | undefined
  identity_entity_ids?: string[] | undefined
  identity_group_ids?: string[] | undefined
  mfa_method_ids: string[]
}
type MfaCreateDuoMethodRequest = {
  api_hostname?: string | undefined
  integration_key?: string | undefined
  method_name?: string | undefined
  push_info?: string | undefined
  secret_key?: string | undefined
  use_passcode?: boolean | undefined
  username_format?: string | undefined
}
type MfaUpdateDuoMethodRequest = {
  api_hostname?: string | undefined
  integration_key?: string | undefined
  method_name?: string | undefined
  push_info?: string | undefined
  secret_key?: string | undefined
  use_passcode?: boolean | undefined
  username_format?: string | undefined
}
type MfaCreateOktaMethodRequest = {
  api_token?: string | undefined
  base_url?: string | undefined
  method_name?: string | undefined
  org_name?: string | undefined
  primary_email?: boolean | undefined
  production?: boolean | undefined
  username_format?: string | undefined
}
type MfaUpdateOktaMethodRequest = {
  api_token?: string | undefined
  base_url?: string | undefined
  method_name?: string | undefined
  org_name?: string | undefined
  primary_email?: boolean | undefined
  production?: boolean | undefined
  username_format?: string | undefined
}
type MfaCreatePingIdMethodRequest = {
  method_name?: string | undefined
  settings_file_base64?: string | undefined
  username_format?: string | undefined
}
type MfaUpdatePingIdMethodRequest = {
  method_name?: string | undefined
  settings_file_base64?: string | undefined
  username_format?: string | undefined
}
type MfaCreateTotpMethodRequest = {
  algorithm?: string | undefined
  digits?: number | undefined
  issuer?: string | undefined
  key_size?: number | undefined
  max_validation_attempts?: number | undefined
  method_name?: string | undefined
  period?: string | undefined
  qr_size?: number | undefined
  skew?: number | undefined
}
type MfaAdminDestroyTotpSecretRequest = { entity_id: string; method_id: string }
type MfaAdminGenerateTotpSecretRequest = { entity_id: string; method_id: string }
type MfaGenerateTotpSecretRequest = { method_id: string }
type MfaUpdateTotpMethodRequest = {
  algorithm?: string | undefined
  digits?: number | undefined
  issuer?: string | undefined
  key_size?: number | undefined
  max_validation_attempts?: number | undefined
  method_name?: string | undefined
  period?: string | undefined
  qr_size?: number | undefined
  skew?: number | undefined
}
type OidcWriteAssignmentRequest = {
  entity_ids?: string[] | undefined
  group_ids?: string[] | undefined
}
type OidcWriteClientRequest = {
  access_token_ttl?: string | undefined
  assignments?: string[] | undefined
  client_type?: string | undefined
  id_token_ttl?: string | undefined
  key?: string | undefined
  redirect_uris?: string[] | undefined
}
type OidcConfigureRequest = { issuer?: string | undefined }
type OidcIntrospectRequest = { client_id?: string | undefined; token?: string | undefined }
type OidcWriteKeyRequest = {
  algorithm?: string | undefined
  allowed_client_ids?: string[] | undefined
  rotation_period?: string | undefined
  verification_ttl?: string | undefined
}
type OidcRotateKeyRequest = { verification_ttl?: string | undefined }
type OidcWriteProviderRequest = {
  allowed_client_ids?: string[] | undefined
  issuer?: string | undefined
  scopes_supported?: string[] | undefined
}
type OidcProviderAuthorizeWithParametersRequest = {
  client_id: string
  code_challenge?: string | undefined
  code_challenge_method?: string | undefined
  max_age?: number | undefined
  nonce?: string | undefined
  redirect_uri: string
  response_type: string
  scope: string
  state?: string | undefined
}
type OidcProviderTokenRequest = {
  client_id?: string | undefined
  client_secret?: string | undefined
  code: string
  code_verifier?: string | undefined
  grant_type: string
  redirect_uri: string
}
type OidcWriteRoleRequest = {
  client_id?: string | undefined
  key: string
  template?: string | undefined
  ttl?: string | undefined
}
type OidcWriteScopeRequest = { description?: string | undefined; template?: string | undefined }
type PersonaCreateRequest = {
  entity_id?: string | undefined
  id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  mount_accessor?: string | undefined
  name?: string | undefined
}
type PersonaUpdateByIdRequest = {
  entity_id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  mount_accessor?: string | undefined
  name?: string | undefined
}
type AuditingCalculateHashRequest = { input?: string | undefined }
type AuditingCalculateHashResponse = { hash?: string | undefined }
type AuditingEnableDeviceRequest = {
  description?: string | undefined
  local?: boolean | undefined
  options?: { [x: string]: unknown } | undefined
  type?: string | undefined
}
type AuthReadConfigurationResponse = {
  accessor?: string | undefined
  config?: { [x: string]: unknown } | undefined
  deprecation_status?: string | undefined
  description?: string | undefined
  external_entropy_access?: boolean | undefined
  local?: boolean | undefined
  options?: { [x: string]: unknown } | undefined
  plugin_version?: string | undefined
  running_plugin_version?: string | undefined
  running_sha256?: string | undefined
  seal_wrap?: boolean | undefined
  type?: string | undefined
  uuid?: string | undefined
}
type AuthEnableMethodRequest = {
  config?: { [x: string]: unknown } | undefined
  description?: string | undefined
  external_entropy_access?: boolean | undefined
  local?: boolean | undefined
  options?: { [x: string]: unknown } | undefined
  plugin_name?: string | undefined
  plugin_version?: string | undefined
  seal_wrap?: boolean | undefined
  type?: string | undefined
}
type AuthReadTuningInformationResponse = {
  allowed_managed_keys?: string[] | undefined
  allowed_response_headers?: string[] | undefined
  audit_non_hmac_request_keys?: string[] | undefined
  audit_non_hmac_response_keys?: string[] | undefined
  default_lease_ttl?: number | undefined
  description?: string | undefined
  external_entropy_access?: boolean | undefined
  force_no_cache?: boolean | undefined
  listing_visibility?: string | undefined
  max_lease_ttl?: number | undefined
  options?: { [x: string]: unknown } | undefined
  passthrough_request_headers?: string[] | undefined
  plugin_version?: string | undefined
  token_type?: string | undefined
  user_lockout_counter_reset_duration?: bigint | undefined
  user_lockout_disable?: boolean | undefined
  user_lockout_duration?: bigint | undefined
  user_lockout_threshold?: bigint | undefined
}
type AuthTuneConfigurationParametersRequest = {
  allowed_response_headers?: string[] | undefined
  audit_non_hmac_request_keys?: string[] | undefined
  audit_non_hmac_response_keys?: string[] | undefined
  default_lease_ttl?: string | undefined
  description?: string | undefined
  listing_visibility?: string | undefined
  max_lease_ttl?: string | undefined
  options?: { [x: string]: unknown } | undefined
  passthrough_request_headers?: string[] | undefined
  plugin_version?: string | undefined
  token_type?: string | undefined
  user_lockout_config?: { [x: string]: unknown } | undefined
}
type QueryTokenCapabilitiesRequest = {
  path?: string[] | undefined
  paths?: string[] | undefined
  token?: string | undefined
}
type QueryTokenAccessorCapabilitiesRequest = {
  accessor?: string | undefined
  path?: string[] | undefined
  paths?: string[] | undefined
}
type QueryTokenSelfCapabilitiesRequest = {
  path?: string[] | undefined
  paths?: string[] | undefined
  token?: string | undefined
}
type AuditingListRequestHeadersResponse = { headers?: { [x: string]: unknown } | undefined }
type AuditingEnableRequestHeaderRequest = { hmac?: boolean | undefined }
type CorsReadConfigurationResponse = {
  allowed_headers?: string[] | undefined
  allowed_origins?: string[] | undefined
  enabled?: boolean | undefined
}
type CorsConfigureRequest = {
  allowed_headers?: string[] | undefined
  allowed_origins?: string[] | undefined
  enable?: boolean | undefined
}
type UiHeadersListResponse = { keys?: string[] | undefined }
type UiHeadersReadConfigurationResponse = {
  value?: string | undefined
  values?: string[] | undefined
}
type UiHeadersConfigureRequest = { multivalue?: boolean | undefined; values?: string[] | undefined }
type DecodeRequest = { encoded_token?: string | undefined; otp?: string | undefined }
type RootTokenGenerationReadProgress2Response = {
  complete?: boolean | undefined
  encoded_root_token?: string | undefined
  encoded_token?: string | undefined
  nonce?: string | undefined
  otp?: string | undefined
  otp_length?: number | undefined
  pgp_fingerprint?: string | undefined
  progress?: number | undefined
  required?: number | undefined
  started?: boolean | undefined
}
type RootTokenGenerationInitialize2Request = { pgp_key?: string | undefined }
type RootTokenGenerationInitialize2Response = {
  complete?: boolean | undefined
  encoded_root_token?: string | undefined
  encoded_token?: string | undefined
  nonce?: string | undefined
  otp?: string | undefined
  otp_length?: number | undefined
  pgp_fingerprint?: string | undefined
  progress?: number | undefined
  required?: number | undefined
  started?: boolean | undefined
}
type RootTokenGenerationReadProgressResponse = {
  complete?: boolean | undefined
  encoded_root_token?: string | undefined
  encoded_token?: string | undefined
  nonce?: string | undefined
  otp?: string | undefined
  otp_length?: number | undefined
  pgp_fingerprint?: string | undefined
  progress?: number | undefined
  required?: number | undefined
  started?: boolean | undefined
}
type RootTokenGenerationInitializeRequest = { pgp_key?: string | undefined }
type RootTokenGenerationInitializeResponse = {
  complete?: boolean | undefined
  encoded_root_token?: string | undefined
  encoded_token?: string | undefined
  nonce?: string | undefined
  otp?: string | undefined
  otp_length?: number | undefined
  pgp_fingerprint?: string | undefined
  progress?: number | undefined
  required?: number | undefined
  started?: boolean | undefined
}
type RootTokenGenerationUpdateRequest = { key?: string | undefined; nonce?: string | undefined }
type RootTokenGenerationUpdateResponse = {
  complete?: boolean | undefined
  encoded_root_token?: string | undefined
  encoded_token?: string | undefined
  nonce?: string | undefined
  otp?: string | undefined
  otp_length?: number | undefined
  pgp_fingerprint?: string | undefined
  progress?: number | undefined
  required?: number | undefined
  started?: boolean | undefined
}
type HaStatusResponse = { nodes?: { [x: string]: unknown }[] | undefined }
type CollectHostInformationResponse = {
  cpu?: { [x: string]: unknown }[] | undefined
  cpu_times?: { [x: string]: unknown }[] | undefined
  disk?: { [x: string]: unknown }[] | undefined
  host?: { [x: string]: unknown } | undefined
  memory?: { [x: string]: unknown } | undefined
  timestamp?: string | undefined
}
type InitializeRequest = {
  pgp_keys?: string[] | undefined
  recovery_pgp_keys?: string[] | undefined
  recovery_shares?: number | undefined
  recovery_threshold?: number | undefined
  root_token_pgp_key?: string | undefined
  secret_shares?: number | undefined
  secret_threshold?: number | undefined
  stored_shares?: number | undefined
}
type InternalClientActivityConfigureRequest = {
  default_report_months?: number | undefined
  enabled?: string | undefined
  retention_months?: number | undefined
}
type InternalCountEntitiesResponse = { counters?: { [x: string]: unknown } | undefined }
type InternalCountTokensResponse = { counters?: { [x: string]: unknown } | undefined }
type InternalGenerateOpenApiDocumentWithParametersRequest = {
  context?: string | undefined
  generic_mount_paths?: boolean | undefined
}
type InternalUiListEnabledFeatureFlagsResponse = { feature_flags?: string[] | undefined }
type InternalUiListEnabledVisibleMountsResponse = {
  auth?: { [x: string]: unknown } | undefined
  secret?: { [x: string]: unknown } | undefined
}
type InternalUiReadMountInformationResponse = {
  accessor?: string | undefined
  config?: { [x: string]: unknown } | undefined
  description?: string | undefined
  external_entropy_access?: boolean | undefined
  local?: boolean | undefined
  options?: { [x: string]: unknown } | undefined
  path?: string | undefined
  plugin_version?: string | undefined
  running_plugin_version?: string | undefined
  running_sha256?: string | undefined
  seal_wrap?: boolean | undefined
  type?: string | undefined
  uuid?: string | undefined
}
type InternalUiListNamespacesResponse = { keys?: string[] | undefined }
type InternalUiReadResultantAclResponse = {
  exact_paths?: { [x: string]: unknown } | undefined
  glob_paths?: { [x: string]: unknown } | undefined
  root?: boolean | undefined
}
type LeaderStatusResponse = {
  active_time?: string | undefined
  ha_enabled?: boolean | undefined
  is_self?: boolean | undefined
  last_wal?: bigint | undefined
  leader_address?: string | undefined
  leader_cluster_address?: string | undefined
  performance_standby?: boolean | undefined
  performance_standby_last_remote_wal?: bigint | undefined
  raft_applied_index?: bigint | undefined
  raft_committed_index?: bigint | undefined
}
type LeasesListResponse = { counts?: number | undefined; lease_count?: number | undefined }
type LeasesCountResponse = { counts?: number | undefined; lease_count?: number | undefined }
type LeasesReadLeaseRequest = { lease_id?: string | undefined }
type LeasesReadLeaseResponse = {
  expire_time?: string | undefined
  id?: string | undefined
  issue_time?: string | undefined
  last_renewal?: string | undefined
  renewable?: boolean | undefined
  ttl?: number | undefined
}
type LeasesLookUpResponse = { keys?: string[] | undefined }
type LeasesRenewLeaseRequest = { increment?: string | undefined; lease_id?: string | undefined }
type LeasesRenewLeaseWithIdRequest = {
  increment?: string | undefined
  lease_id?: string | undefined
}
type LeasesRevokeLeaseRequest = { lease_id?: string | undefined; sync?: boolean | undefined }
type LeasesRevokeLeaseWithPrefixRequest = { sync?: boolean | undefined }
type LeasesRevokeLeaseWithIdRequest = { lease_id?: string | undefined; sync?: boolean | undefined }
type LoggersUpdateVerbosityLevelRequest = { level?: string | undefined }
type LoggersUpdateVerbosityLevelForRequest = { level?: string | undefined }
type MfaValidateRequest = { mfa_payload: { [x: string]: unknown }; mfa_request_id: string }
type MountsReadConfigurationResponse = {
  accessor?: string | undefined
  config?: { [x: string]: unknown } | undefined
  deprecation_status?: string | undefined
  description?: string | undefined
  external_entropy_access?: boolean | undefined
  local?: boolean | undefined
  options?: { [x: string]: unknown } | undefined
  plugin_version?: string | undefined
  running_plugin_version?: string | undefined
  running_sha256?: string | undefined
  seal_wrap?: boolean | undefined
  type?: string | undefined
  uuid?: string | undefined
}
type MountsEnableSecretsEngineRequest = {
  config?: { [x: string]: unknown } | undefined
  description?: string | undefined
  external_entropy_access?: boolean | undefined
  local?: boolean | undefined
  options?: { [x: string]: unknown } | undefined
  plugin_name?: string | undefined
  plugin_version?: string | undefined
  seal_wrap?: boolean | undefined
  type?: string | undefined
}
type MountsReadTuningInformationResponse = {
  allowed_managed_keys?: string[] | undefined
  allowed_response_headers?: string[] | undefined
  audit_non_hmac_request_keys?: string[] | undefined
  audit_non_hmac_response_keys?: string[] | undefined
  default_lease_ttl?: number | undefined
  description?: string | undefined
  external_entropy_access?: boolean | undefined
  force_no_cache?: boolean | undefined
  listing_visibility?: string | undefined
  max_lease_ttl?: number | undefined
  options?: { [x: string]: unknown } | undefined
  passthrough_request_headers?: string[] | undefined
  plugin_version?: string | undefined
  token_type?: string | undefined
  user_lockout_counter_reset_duration?: bigint | undefined
  user_lockout_disable?: boolean | undefined
  user_lockout_duration?: bigint | undefined
  user_lockout_threshold?: bigint | undefined
}
type MountsTuneConfigurationParametersRequest = {
  allowed_managed_keys?: string[] | undefined
  allowed_response_headers?: string[] | undefined
  audit_non_hmac_request_keys?: string[] | undefined
  audit_non_hmac_response_keys?: string[] | undefined
  default_lease_ttl?: string | undefined
  description?: string | undefined
  listing_visibility?: string | undefined
  max_lease_ttl?: string | undefined
  options?: { [x: string]: unknown } | undefined
  passthrough_request_headers?: string[] | undefined
  plugin_version?: string | undefined
  token_type?: string | undefined
  user_lockout_config?: { [x: string]: unknown } | undefined
}
type PluginsCatalogListPluginsResponse = { detailed?: { [x: string]: unknown } | undefined }
type PluginsCatalogReadPluginConfigurationResponse = {
  args?: string[] | undefined
  builtin?: boolean | undefined
  command?: string | undefined
  deprecation_status?: string | undefined
  name?: string | undefined
  oci_image?: string | undefined
  sha256?: string | undefined
  version?: string | undefined
}
type PluginsCatalogRegisterPluginRequest = {
  args?: string[] | undefined
  command?: string | undefined
  env?: string[] | undefined
  oci_image?: string | undefined
  sha256?: string | undefined
  version?: string | undefined
}
type PluginsCatalogListPluginsWithTypeResponse = { keys?: string[] | undefined }
type PluginsCatalogReadPluginConfigurationWithTypeResponse = {
  args?: string[] | undefined
  builtin?: boolean | undefined
  command?: string | undefined
  deprecation_status?: string | undefined
  name?: string | undefined
  oci_image?: string | undefined
  sha256?: string | undefined
  version?: string | undefined
}
type PluginsCatalogRegisterPluginWithTypeRequest = {
  args?: string[] | undefined
  command?: string | undefined
  env?: string[] | undefined
  oci_image?: string | undefined
  sha256?: string | undefined
  version?: string | undefined
}
type PluginsReloadBackendsRequest = {
  mounts?: string[] | undefined
  plugin?: string | undefined
  scope?: string | undefined
}
type PluginsReloadBackendsResponse = { reload_id?: string | undefined }
type PluginsRuntimesCatalogListPluginsRuntimesResponse = {
  runtimes?: { [x: string]: unknown }[] | undefined
}
type PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse = {
  cgroup_parent?: string | undefined
  cpu_nanos?: bigint | undefined
  memory_bytes?: bigint | undefined
  name?: string | undefined
  oci_runtime?: string | undefined
  type?: string | undefined
}
type PluginsRuntimesCatalogRegisterPluginRuntimeRequest = {
  cgroup_parent?: string | undefined
  cpu_nanos?: bigint | undefined
  memory_bytes?: bigint | undefined
  oci_runtime?: string | undefined
}
type PoliciesListAclPoliciesResponse = {
  keys?: string[] | undefined
  policies?: string[] | undefined
}
type PoliciesReadAclPolicyResponse = {
  name?: string | undefined
  policy?: string | undefined
  rules?: string | undefined
}
type PoliciesWriteAclPolicyRequest = { policy?: string | undefined }
type PoliciesReadPasswordPolicyResponse = { policy?: string | undefined }
type PoliciesWritePasswordPolicyRequest = { policy?: string | undefined }
type PoliciesGeneratePasswordFromPasswordPolicyResponse = { password?: string | undefined }
type PoliciesListAclPolicies2Response = {
  keys?: string[] | undefined
  policies?: string[] | undefined
}
type PoliciesListAclPolicies3Response = {
  keys?: string[] | undefined
  policies?: string[] | undefined
}
type PoliciesReadAclPolicy2Response = {
  name?: string | undefined
  policy?: string | undefined
  rules?: string | undefined
}
type PoliciesWriteAclPolicy2Request = { policy?: string | undefined; rules?: string | undefined }
type RateLimitQuotasReadConfigurationResponse = {
  enable_rate_limit_audit_logging?: boolean | undefined
  enable_rate_limit_response_headers?: boolean | undefined
  rate_limit_exempt_paths?: string[] | undefined
}
type RateLimitQuotasConfigureRequest = {
  enable_rate_limit_audit_logging?: boolean | undefined
  enable_rate_limit_response_headers?: boolean | undefined
  rate_limit_exempt_paths?: string[] | undefined
}
type RateLimitQuotasReadResponse = {
  block_interval?: number | undefined
  inheritable?: boolean | undefined
  interval?: number | undefined
  name?: string | undefined
  path?: string | undefined
  rate?: number | undefined
  role?: string | undefined
  type?: string | undefined
}
type RateLimitQuotasWriteRequest = {
  block_interval?: string | undefined
  inheritable?: boolean | undefined
  interval?: string | undefined
  path?: string | undefined
  rate?: number | undefined
  role?: string | undefined
  type?: string | undefined
}
type RawReadResponse = { value?: string | undefined }
type RawWriteRequest = {
  compressed?: boolean | undefined
  compression_type?: string | undefined
  encoding?: string | undefined
  value?: string | undefined
}
type RekeyReadBackupKeyResponse = {
  keys?: { [x: string]: unknown } | undefined
  keys_base64?: { [x: string]: unknown } | undefined
  nonce?: string | undefined
}
type RekeyAttemptReadProgressResponse = {
  backup?: boolean | undefined
  n?: number | undefined
  nounce?: string | undefined
  pgp_fingerprints?: string[] | undefined
  progress?: number | undefined
  required?: number | undefined
  started?: string | undefined
  t?: number | undefined
  verification_nonce?: string | undefined
  verification_required?: boolean | undefined
}
type RekeyAttemptInitializeRequest = {
  backup?: boolean | undefined
  pgp_keys?: string[] | undefined
  require_verification?: boolean | undefined
  secret_shares?: number | undefined
  secret_threshold?: number | undefined
}
type RekeyAttemptInitializeResponse = {
  backup?: boolean | undefined
  n?: number | undefined
  nounce?: string | undefined
  pgp_fingerprints?: string[] | undefined
  progress?: number | undefined
  required?: number | undefined
  started?: string | undefined
  t?: number | undefined
  verification_nonce?: string | undefined
  verification_required?: boolean | undefined
}
type RekeyReadBackupRecoveryKeyResponse = {
  keys?: { [x: string]: unknown } | undefined
  keys_base64?: { [x: string]: unknown } | undefined
  nonce?: string | undefined
}
type RekeyAttemptUpdateRequest = { key?: string | undefined; nonce?: string | undefined }
type RekeyAttemptUpdateResponse = {
  backup?: boolean | undefined
  complete?: boolean | undefined
  keys?: string[] | undefined
  keys_base64?: string[] | undefined
  n?: number | undefined
  nounce?: string | undefined
  pgp_fingerprints?: string[] | undefined
  progress?: number | undefined
  required?: number | undefined
  started?: string | undefined
  t?: number | undefined
  verification_nonce?: string | undefined
  verification_required?: boolean | undefined
}
type RekeyVerificationReadProgressResponse = {
  n?: number | undefined
  nounce?: string | undefined
  progress?: number | undefined
  started?: string | undefined
  t?: number | undefined
}
type RekeyVerificationUpdateRequest = { key?: string | undefined; nonce?: string | undefined }
type RekeyVerificationUpdateResponse = {
  complete?: boolean | undefined
  nounce?: string | undefined
}
type RekeyVerificationCancelResponse = {
  n?: number | undefined
  nounce?: string | undefined
  progress?: number | undefined
  started?: string | undefined
  t?: number | undefined
}
type RemountRequest = { from?: string | undefined; to?: string | undefined }
type RemountResponse = { migration_id?: string | undefined }
type RemountStatusResponse = {
  migration_id?: string | undefined
  migration_info?: { [x: string]: unknown } | undefined
}
type LeasesRenewLease2Request = { increment?: string | undefined; lease_id?: string | undefined }
type LeasesRenewLeaseWithId2Request = {
  increment?: string | undefined
  lease_id?: string | undefined
}
type LeasesRevokeLease2Request = { lease_id?: string | undefined; sync?: boolean | undefined }
type LeasesRevokeLeaseWithPrefix2Request = { sync?: boolean | undefined }
type LeasesRevokeLeaseWithId2Request = { lease_id?: string | undefined; sync?: boolean | undefined }
type EncryptionKeyReadRotationConfigurationResponse = {
  enabled?: boolean | undefined
  interval?: string | undefined
  max_operations?: bigint | undefined
}
type EncryptionKeyConfigureRotationRequest = {
  enabled?: boolean | undefined
  interval?: string | undefined
  max_operations?: bigint | undefined
}
type SealStatusResponse = {
  build_date?: string | undefined
  cluster_id?: string | undefined
  cluster_name?: string | undefined
  hcp_link_resource_ID?: string | undefined
  hcp_link_status?: string | undefined
  initialized?: boolean | undefined
  migration?: boolean | undefined
  n?: number | undefined
  nonce?: string | undefined
  progress?: number | undefined
  recovery_seal?: boolean | undefined
  sealed?: boolean | undefined
  storage_type?: string | undefined
  t?: number | undefined
  type?: string | undefined
  version?: string | undefined
}
type GenerateHashRequest = {
  algorithm?: string | undefined
  format?: string | undefined
  input?: string | undefined
}
type GenerateHashResponse = { sum?: string | undefined }
type GenerateHashWithAlgorithmRequest = {
  algorithm?: string | undefined
  format?: string | undefined
  input?: string | undefined
}
type GenerateHashWithAlgorithmResponse = { sum?: string | undefined }
type GenerateRandomRequest = { bytes?: number | undefined; format?: string | undefined }
type GenerateRandomResponse = { random_bytes?: string | undefined }
type GenerateRandomWithSourceRequest = { bytes?: number | undefined; format?: string | undefined }
type GenerateRandomWithSourceResponse = { random_bytes?: string | undefined }
type GenerateRandomWithSourceAndBytesRequest = {
  bytes?: number | undefined
  format?: string | undefined
}
type GenerateRandomWithSourceAndBytesResponse = { random_bytes?: string | undefined }
type GenerateRandomWithBytesRequest = { bytes?: number | undefined; format?: string | undefined }
type GenerateRandomWithBytesResponse = { random_bytes?: string | undefined }
type UnsealRequest = { key?: string | undefined; reset?: boolean | undefined }
type UnsealResponse = {
  build_date?: string | undefined
  cluster_id?: string | undefined
  cluster_name?: string | undefined
  hcp_link_resource_ID?: string | undefined
  hcp_link_status?: string | undefined
  initialized?: boolean | undefined
  migration?: boolean | undefined
  n?: number | undefined
  nonce?: string | undefined
  progress?: number | undefined
  recovery_seal?: boolean | undefined
  sealed?: boolean | undefined
  storage_type?: string | undefined
  t?: number | undefined
  type?: string | undefined
  version?: string | undefined
}
type VersionHistoryResponse = {
  key_info?: { [x: string]: unknown } | undefined
  keys?: string[] | undefined
}
type ReadWrappingProperties2Response = {
  creation_path?: string | undefined
  creation_time?: string | undefined
  creation_ttl?: string | undefined
}
type ReadWrappingPropertiesRequest = { token?: string | undefined }
type ReadWrappingPropertiesResponse = {
  creation_path?: string | undefined
  creation_time?: string | undefined
  creation_ttl?: string | undefined
}
type RewrapRequest = { token?: string | undefined }
type UnwrapRequest = { token?: string | undefined }
type AliCloudConfigureRequest = { access_key?: string | undefined; secret_key?: string | undefined }
type AliCloudWriteRoleRequest = {
  inline_policies?: string | undefined
  max_ttl?: string | undefined
  remote_policies?: string[] | undefined
  role_arn?: string | undefined
  ttl?: string | undefined
}
type AwsConfigureLeaseRequest = { lease?: string | undefined; lease_max?: string | undefined }
type AwsConfigureRootIamCredentialsRequest = {
  access_key?: string | undefined
  iam_endpoint?: string | undefined
  max_retries?: number | undefined
  region?: string | undefined
  secret_key?: string | undefined
  sts_endpoint?: string | undefined
  username_template?: string | undefined
}
type AwsGenerateCredentialsWithParametersRequest = {
  role_arn?: string | undefined
  role_session_name?: string | undefined
  ttl?: string | undefined
}
type AwsWriteRoleRequest = {
  arn?: string | undefined
  credential_type?: string | undefined
  default_sts_ttl?: string | undefined
  iam_groups?: string[] | undefined
  iam_tags?: { [x: string]: unknown } | undefined
  max_sts_ttl?: string | undefined
  permissions_boundary_arn?: string | undefined
  policy?: string | undefined
  policy_arns?: string[] | undefined
  policy_document?: string | undefined
  role_arns?: string[] | undefined
  user_path?: string | undefined
}
type AwsReadStaticCredsNameResponse = {
  access_key?: string | undefined
  secret_key?: string | undefined
}
type AwsReadStaticRolesNameResponse = {
  name?: string | undefined
  rotation_period?: string | undefined
  username?: string | undefined
}
type AwsWriteStaticRolesNameRequest = {
  rotation_period?: string | undefined
  username?: string | undefined
}
type AwsWriteStaticRolesNameResponse = {
  name?: string | undefined
  rotation_period?: string | undefined
  username?: string | undefined
}
type AwsGenerateStsCredentialsWithParametersRequest = {
  role_arn?: string | undefined
  role_session_name?: string | undefined
  ttl?: string | undefined
}
type AzureConfigureRequest = {
  client_id?: string | undefined
  client_secret?: string | undefined
  environment?: string | undefined
  password_policy?: string | undefined
  root_password_ttl?: string | undefined
  subscription_id?: string | undefined
  tenant_id?: string | undefined
}
type AzureWriteRoleRequest = {
  application_object_id?: string | undefined
  azure_groups?: string | undefined
  azure_roles?: string | undefined
  max_ttl?: string | undefined
  permanently_delete?: boolean | undefined
  persist_app?: boolean | undefined
  ttl?: string | undefined
}
type ConsulConfigureAccessRequest = {
  address?: string | undefined
  ca_cert?: string | undefined
  client_cert?: string | undefined
  client_key?: string | undefined
  scheme?: string | undefined
  token?: string | undefined
}
type ConsulWriteRoleRequest = {
  consul_namespace?: string | undefined
  consul_policies?: string[] | undefined
  consul_roles?: string[] | undefined
  lease?: string | undefined
  local?: boolean | undefined
  max_ttl?: string | undefined
  node_identities?: string[] | undefined
  partition?: string | undefined
  policies?: string[] | undefined
  policy?: string | undefined
  service_identities?: string[] | undefined
  token_type?: string | undefined
  ttl?: string | undefined
}
type DatabaseConfigureConnectionRequest = {
  allowed_roles?: string[] | undefined
  password_policy?: string | undefined
  plugin_name?: string | undefined
  plugin_version?: string | undefined
  root_rotation_statements?: string[] | undefined
  verify_connection?: boolean | undefined
}
type DatabaseWriteRoleRequest = {
  creation_statements?: string[] | undefined
  credential_config?: { [x: string]: unknown } | undefined
  credential_type?: string | undefined
  db_name?: string | undefined
  default_ttl?: string | undefined
  max_ttl?: string | undefined
  renew_statements?: string[] | undefined
  revocation_statements?: string[] | undefined
  rollback_statements?: string[] | undefined
}
type DatabaseWriteStaticRoleRequest = {
  credential_config?: { [x: string]: unknown } | undefined
  credential_type?: string | undefined
  db_name?: string | undefined
  rotation_period?: string | undefined
  rotation_schedule?: string | undefined
  rotation_statements?: string[] | undefined
  rotation_window?: string | undefined
  username?: string | undefined
}
type GoogleCloudConfigureRequest = {
  credentials?: string | undefined
  max_ttl?: string | undefined
  ttl?: string | undefined
}
type GoogleCloudWriteImpersonatedAccountRequest = {
  service_account_email?: string | undefined
  token_scopes?: string[] | undefined
  ttl?: string | undefined
}
type GoogleCloudGenerateRolesetKey3Request = {
  key_algorithm?: string | undefined
  key_type?: string | undefined
  ttl?: string | undefined
}
type GoogleCloudWriteRolesetRequest = {
  bindings?: string | undefined
  project?: string | undefined
  secret_type?: string | undefined
  token_scopes?: string[] | undefined
}
type GoogleCloudGenerateRolesetKeyRequest = {
  key_algorithm?: string | undefined
  key_type?: string | undefined
  ttl?: string | undefined
}
type GoogleCloudWriteStaticAccountRequest = {
  bindings?: string | undefined
  secret_type?: string | undefined
  service_account_email?: string | undefined
  token_scopes?: string[] | undefined
}
type GoogleCloudGenerateStaticAccountKeyRequest = {
  key_algorithm?: string | undefined
  key_type?: string | undefined
  ttl?: string | undefined
}
type GoogleCloudKmsConfigureRequest = {
  credentials?: string | undefined
  scopes?: string[] | undefined
}
type GoogleCloudKmsDecryptRequest = {
  additional_authenticated_data?: string | undefined
  ciphertext?: string | undefined
  key_version?: number | undefined
}
type GoogleCloudKmsEncryptRequest = {
  additional_authenticated_data?: string | undefined
  key_version?: number | undefined
  plaintext?: string | undefined
}
type GoogleCloudKmsConfigureKeyRequest = {
  max_version?: number | undefined
  min_version?: number | undefined
}
type GoogleCloudKmsRegisterKeyRequest = {
  crypto_key?: string | undefined
  verify?: boolean | undefined
}
type GoogleCloudKmsWriteKeyRequest = {
  algorithm?: string | undefined
  crypto_key?: string | undefined
  key_ring?: string | undefined
  labels?: { [x: string]: unknown } | undefined
  protection_level?: string | undefined
  purpose?: string | undefined
  rotation_period?: string | undefined
}
type GoogleCloudKmsReencryptRequest = {
  additional_authenticated_data?: string | undefined
  ciphertext?: string | undefined
  key_version?: number | undefined
}
type GoogleCloudKmsSignRequest = { digest?: string | undefined; key_version?: number | undefined }
type GoogleCloudKmsVerifyRequest = {
  digest?: string | undefined
  key_version?: number | undefined
  signature?: string | undefined
}
type KubernetesConfigureRequest = {
  disable_local_ca_jwt?: boolean | undefined
  kubernetes_ca_cert?: string | undefined
  kubernetes_host?: string | undefined
  service_account_jwt?: string | undefined
}
type KubernetesGenerateCredentialsRequest = {
  audiences?: string[] | undefined
  cluster_role_binding?: boolean | undefined
  kubernetes_namespace: string
  ttl?: string | undefined
}
type KubernetesWriteRoleRequest = {
  allowed_kubernetes_namespace_selector?: string | undefined
  allowed_kubernetes_namespaces?: string[] | undefined
  extra_annotations?: { [x: string]: unknown } | undefined
  extra_labels?: { [x: string]: unknown } | undefined
  generated_role_rules?: string | undefined
  kubernetes_role_name?: string | undefined
  kubernetes_role_type?: string | undefined
  name_template?: string | undefined
  service_account_name?: string | undefined
  token_default_audiences?: string[] | undefined
  token_default_ttl?: string | undefined
  token_max_ttl?: string | undefined
}
type KvV2ReadConfigurationResponse = {
  cas_required?: boolean | undefined
  delete_version_after?: string | undefined
  max_versions?: number | undefined
}
type KvV2ConfigureRequest = {
  cas_required?: boolean | undefined
  delete_version_after?: string | undefined
  max_versions?: number | undefined
}
type KvV2ReadResponse = {
  data?: { [x: string]: unknown } | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type KvV2WriteRequest = {
  data?: { [x: string]: unknown } | undefined
  options?: { [x: string]: unknown } | undefined
  version?: number | undefined
}
type KvV2WriteResponse = {
  created_time?: string | undefined
  custom_metadata?: { [x: string]: unknown } | undefined
  deletion_time?: string | undefined
  destroyed?: boolean | undefined
  version?: bigint | undefined
}
type KvV2DeleteVersionsRequest = { versions?: number[] | undefined }
type KvV2DestroyVersionsRequest = { versions?: number[] | undefined }
type KvV2ReadMetadataResponse = {
  cas_required?: boolean | undefined
  created_time?: string | undefined
  current_version?: bigint | undefined
  custom_metadata?: { [x: string]: unknown } | undefined
  delete_version_after?: string | undefined
  max_versions?: bigint | undefined
  oldest_version?: bigint | undefined
  updated_time?: string | undefined
  versions?: { [x: string]: unknown } | undefined
}
type KvV2WriteMetadataRequest = {
  cas_required?: boolean | undefined
  custom_metadata?: { [x: string]: unknown } | undefined
  delete_version_after?: string | undefined
  max_versions?: number | undefined
}
type KvV2ReadSubkeysResponse = {
  metadata?: { [x: string]: unknown } | undefined
  subkeys?: { [x: string]: unknown } | undefined
}
type KvV2UndeleteVersionsRequest = { versions?: number[] | undefined }
type LdapConfigureRequest = {
  anonymous_group_search?: boolean | undefined
  binddn?: string | undefined
  bindpass?: string | undefined
  case_sensitive_names?: boolean | undefined
  certificate?: string | undefined
  client_tls_cert?: string | undefined
  client_tls_key?: string | undefined
  connection_timeout?: string | undefined
  deny_null_bind?: boolean | undefined
  dereference_aliases?: 'never' | 'finding' | 'searching' | 'always' | undefined
  discoverdn?: boolean | undefined
  groupattr?: string | undefined
  groupdn?: string | undefined
  groupfilter?: string | undefined
  insecure_tls?: boolean | undefined
  length?: number | undefined
  max_page_size?: number | undefined
  max_ttl?: string | undefined
  password_policy?: string | undefined
  request_timeout?: string | undefined
  schema?: string | undefined
  starttls?: boolean | undefined
  tls_max_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13' | undefined
  tls_min_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13' | undefined
  ttl?: string | undefined
  upndomain?: string | undefined
  url?: string | undefined
  use_pre111_group_cn_behavior?: boolean | undefined
  use_token_groups?: boolean | undefined
  userattr?: string | undefined
  userdn?: string | undefined
  userfilter?: string | undefined
  username_as_alias?: boolean | undefined
}
type LdapLibraryForceCheckInRequest = { service_account_names?: string[] | undefined }
type LdapLibraryConfigureRequest = {
  disable_check_in_enforcement?: boolean | undefined
  max_ttl?: string | undefined
  service_account_names?: string[] | undefined
  ttl?: string | undefined
}
type LdapLibraryCheckInRequest = { service_account_names?: string[] | undefined }
type LdapLibraryCheckOutRequest = { ttl?: string | undefined }
type LdapWriteDynamicRoleRequest = {
  creation_ldif: string
  default_ttl?: string | undefined
  deletion_ldif: string
  max_ttl?: string | undefined
  rollback_ldif?: string | undefined
  username_template?: string | undefined
}
type LdapWriteStaticRoleRequest = {
  dn?: string | undefined
  rotation_period?: string | undefined
  username?: string | undefined
}
type MongoDbAtlasConfigureRequest = { private_key: string; public_key: string }
type MongoDbAtlasWriteRoleRequest = {
  cidr_blocks?: string[] | undefined
  ip_addresses?: string[] | undefined
  max_ttl?: string | undefined
  organization_id?: string | undefined
  project_id?: string | undefined
  project_roles?: string[] | undefined
  roles: string[]
  ttl?: string | undefined
}
type NomadConfigureAccessRequest = {
  address?: string | undefined
  ca_cert?: string | undefined
  client_cert?: string | undefined
  client_key?: string | undefined
  max_token_name_length?: number | undefined
  token?: string | undefined
}
type NomadConfigureLeaseRequest = { max_ttl?: string | undefined; ttl?: string | undefined }
type NomadWriteRoleRequest = {
  global?: boolean | undefined
  policies?: string[] | undefined
  type?: string | undefined
}
type PkiWriteAcmeAccountKidRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteAcmeAuthorizationAuthIdRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteAcmeChallengeAuthIdChallengeTypeRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteAcmeNewAccountRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiGenerateEabKeyResponse = {
  acme_directory?: string | undefined
  created_on?: string | undefined
  id?: string | undefined
  key?: string | undefined
  key_type?: string | undefined
}
type PkiWriteAcmeNewOrderRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteAcmeOrderOrderIdRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteAcmeOrderOrderIdCertRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteAcmeOrderOrderIdFinalizeRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteAcmeOrdersRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteAcmeRevokeCertRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiReadCaDerResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCaPemResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCaChainPemResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCertCaChainResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCertCrlResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCertDeltaCrlResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCertResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCertRawDerResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCertRawPemResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiConfigureAcmeRequest = {
  allow_role_ext_key_usage?: boolean | undefined
  allowed_issuers?: string[] | undefined
  allowed_roles?: string[] | undefined
  default_directory_policy?: string | undefined
  dns_resolver?: string | undefined
  eab_policy?: string | undefined
  enabled?: boolean | undefined
}
type PkiReadAutoTidyConfigurationResponse = {
  acme_account_safety_buffer?: number | undefined
  enabled?: boolean | undefined
  interval_duration?: number | undefined
  issuer_safety_buffer?: number | undefined
  maintain_stored_certificate_counts?: boolean | undefined
  pause_duration?: string | undefined
  publish_stored_certificate_count_metrics?: boolean | undefined
  revocation_queue_safety_buffer?: number | undefined
  safety_buffer?: number | undefined
  tidy_acme?: boolean | undefined
  tidy_cert_store?: boolean | undefined
  tidy_cross_cluster_revoked_certs?: boolean | undefined
  tidy_expired_issuers?: boolean | undefined
  tidy_move_legacy_ca_bundle?: boolean | undefined
  tidy_revocation_queue?: boolean | undefined
  tidy_revoked_cert_issuer_associations?: boolean | undefined
  tidy_revoked_certs?: boolean | undefined
}
type PkiConfigureAutoTidyRequest = {
  acme_account_safety_buffer?: string | undefined
  enabled?: boolean | undefined
  interval_duration?: string | undefined
  issuer_safety_buffer?: string | undefined
  maintain_stored_certificate_counts?: boolean | undefined
  pause_duration?: string | undefined
  publish_stored_certificate_count_metrics?: boolean | undefined
  revocation_queue_safety_buffer?: string | undefined
  safety_buffer?: string | undefined
  tidy_acme?: boolean | undefined
  tidy_cert_store?: boolean | undefined
  tidy_cross_cluster_revoked_certs?: boolean | undefined
  tidy_expired_issuers?: boolean | undefined
  tidy_move_legacy_ca_bundle?: boolean | undefined
  tidy_revocation_list?: boolean | undefined
  tidy_revocation_queue?: boolean | undefined
  tidy_revoked_cert_issuer_associations?: boolean | undefined
  tidy_revoked_certs?: boolean | undefined
}
type PkiConfigureAutoTidyResponse = {
  acme_account_safety_buffer?: number | undefined
  enabled?: boolean | undefined
  interval_duration?: number | undefined
  issuer_safety_buffer?: number | undefined
  maintain_stored_certificate_counts?: boolean | undefined
  pause_duration?: string | undefined
  publish_stored_certificate_count_metrics?: boolean | undefined
  revocation_queue_safety_buffer?: number | undefined
  safety_buffer?: number | undefined
  tidy_acme?: boolean | undefined
  tidy_cert_store?: boolean | undefined
  tidy_cross_cluster_revoked_certs?: boolean | undefined
  tidy_expired_issuers?: boolean | undefined
  tidy_move_legacy_ca_bundle?: boolean | undefined
  tidy_revocation_queue?: boolean | undefined
  tidy_revoked_cert_issuer_associations?: boolean | undefined
  tidy_revoked_certs?: boolean | undefined
}
type PkiConfigureCaRequest = { pem_bundle?: string | undefined }
type PkiConfigureCaResponse = {
  existing_issuers?: string[] | undefined
  existing_keys?: string[] | undefined
  imported_issuers?: string[] | undefined
  imported_keys?: string[] | undefined
  mapping?: { [x: string]: unknown } | undefined
}
type PkiReadClusterConfigurationResponse = {
  aia_path?: string | undefined
  path?: string | undefined
}
type PkiConfigureClusterRequest = { aia_path?: string | undefined; path?: string | undefined }
type PkiConfigureClusterResponse = { aia_path?: string | undefined; path?: string | undefined }
type PkiReadCrlConfigurationResponse = {
  auto_rebuild?: boolean | undefined
  auto_rebuild_grace_period?: string | undefined
  cross_cluster_revocation?: boolean | undefined
  delta_rebuild_interval?: string | undefined
  disable?: boolean | undefined
  enable_delta?: boolean | undefined
  expiry?: string | undefined
  ocsp_disable?: boolean | undefined
  ocsp_expiry?: string | undefined
  unified_crl?: boolean | undefined
  unified_crl_on_existing_paths?: boolean | undefined
}
type PkiConfigureCrlRequest = {
  auto_rebuild?: boolean | undefined
  auto_rebuild_grace_period?: string | undefined
  cross_cluster_revocation?: boolean | undefined
  delta_rebuild_interval?: string | undefined
  disable?: boolean | undefined
  enable_delta?: boolean | undefined
  expiry?: string | undefined
  ocsp_disable?: boolean | undefined
  ocsp_expiry?: string | undefined
  unified_crl?: boolean | undefined
  unified_crl_on_existing_paths?: boolean | undefined
}
type PkiConfigureCrlResponse = {
  auto_rebuild?: boolean | undefined
  auto_rebuild_grace_period?: string | undefined
  cross_cluster_revocation?: boolean | undefined
  delta_rebuild_interval?: string | undefined
  disable?: boolean | undefined
  enable_delta?: boolean | undefined
  expiry?: string | undefined
  ocsp_disable?: boolean | undefined
  ocsp_expiry?: string | undefined
  unified_crl?: boolean | undefined
  unified_crl_on_existing_paths?: boolean | undefined
}
type PkiReadIssuersConfigurationResponse = {
  default?: string | undefined
  default_follows_latest_issuer?: boolean | undefined
}
type PkiConfigureIssuersRequest = {
  default?: string | undefined
  default_follows_latest_issuer?: boolean | undefined
}
type PkiConfigureIssuersResponse = {
  default?: string | undefined
  default_follows_latest_issuer?: boolean | undefined
}
type PkiReadKeysConfigurationResponse = { default?: string | undefined }
type PkiConfigureKeysRequest = { default?: string | undefined }
type PkiConfigureKeysResponse = { default?: string | undefined }
type PkiReadUrlsConfigurationResponse = {
  crl_distribution_points?: string[] | undefined
  enable_templating?: boolean | undefined
  issuing_certificates?: string[] | undefined
  ocsp_servers?: string[] | undefined
}
type PkiConfigureUrlsRequest = {
  crl_distribution_points?: string[] | undefined
  enable_templating?: boolean | undefined
  issuing_certificates?: string[] | undefined
  ocsp_servers?: string[] | undefined
}
type PkiConfigureUrlsResponse = {
  crl_distribution_points?: string[] | undefined
  enable_templating?: boolean | undefined
  issuing_certificates?: string[] | undefined
  ocsp_servers?: string[] | undefined
}
type PkiReadCrlDerResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCrlDeltaResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCrlDeltaPemResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiReadCrlPemResponse = {
  ca_chain?: string | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
}
type PkiRotateCrlResponse = { success?: boolean | undefined }
type PkiRotateDeltaCrlResponse = { success?: boolean | undefined }
type PkiListEabKeysResponse = {
  key_info?: { [x: string]: unknown } | undefined
  keys?: string[] | undefined
}
type PkiCrossSignIntermediateRequest = {
  add_basic_constraints?: boolean | undefined
  alt_names?: string | undefined
  common_name?: string | undefined
  country?: string[] | undefined
  exclude_cn_from_sans?: boolean | undefined
  exported?: 'internal' | 'external' | 'kms' | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  key_bits?: number | undefined
  key_name?: string | undefined
  key_ref?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  locality?: string[] | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  other_sans?: string[] | undefined
  ou?: string[] | undefined
  postal_code?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  province?: string[] | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
}
type PkiCrossSignIntermediateResponse = {
  csr?: string | undefined
  key_id?: string | undefined
  private_key?: string | undefined
  private_key_type?: string | undefined
}
type PkiGenerateIntermediateRequest = {
  add_basic_constraints?: boolean | undefined
  alt_names?: string | undefined
  common_name?: string | undefined
  country?: string[] | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  key_bits?: number | undefined
  key_name?: string | undefined
  key_ref?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  locality?: string[] | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  other_sans?: string[] | undefined
  ou?: string[] | undefined
  postal_code?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  province?: string[] | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
}
type PkiGenerateIntermediateResponse = {
  csr?: string | undefined
  key_id?: string | undefined
  private_key?: string | undefined
  private_key_type?: string | undefined
}
type PkiSetSignedIntermediateRequest = { certificate?: string | undefined }
type PkiSetSignedIntermediateResponse = {
  existing_issuers?: string[] | undefined
  existing_keys?: string[] | undefined
  imported_issuers?: string[] | undefined
  imported_keys?: string[] | undefined
  mapping?: { [x: string]: unknown } | undefined
}
type PkiIssueWithRoleRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_ref?: string | undefined
  not_after?: string | undefined
  other_sans?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  remove_roots_from_chain?: boolean | undefined
  serial_number?: string | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  user_ids?: string[] | undefined
}
type PkiIssueWithRoleResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  private_key?: string | undefined
  private_key_type?: string | undefined
  serial_number?: string | undefined
}
type PkiReadIssuerResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  crl_distribution_points?: string[] | undefined
  enable_aia_url_templating?: boolean | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
  issuing_certificates?: string[] | undefined
  key_id?: string | undefined
  leaf_not_after_behavior?: string | undefined
  manual_chain?: string[] | undefined
  ocsp_servers?: string[] | undefined
  revocation_signature_algorithm?: string | undefined
  revocation_time?: number | undefined
  revocation_time_rfc3339?: string | undefined
  revoked?: boolean | undefined
  usage?: string | undefined
}
type PkiWriteIssuerRequest = {
  crl_distribution_points?: string[] | undefined
  enable_aia_url_templating?: boolean | undefined
  issuer_name?: string | undefined
  issuing_certificates?: string[] | undefined
  leaf_not_after_behavior?: string | undefined
  manual_chain?: string[] | undefined
  ocsp_servers?: string[] | undefined
  revocation_signature_algorithm?: string | undefined
  usage?: string[] | undefined
}
type PkiWriteIssuerResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  crl_distribution_points?: string[] | undefined
  enable_aia_url_templating?: boolean | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
  issuing_certificates?: string[] | undefined
  key_id?: string | undefined
  leaf_not_after_behavior?: string | undefined
  manual_chain?: string[] | undefined
  ocsp_servers?: string[] | undefined
  revocation_signature_algorithm?: string | undefined
  revocation_time?: number | undefined
  revocation_time_rfc3339?: string | undefined
  revoked?: boolean | undefined
  usage?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeAccountKidRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeAuthorizationAuthIdRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeNewAccountRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiGenerateEabKeyForIssuerResponse = {
  acme_directory?: string | undefined
  created_on?: string | undefined
  id?: string | undefined
  key?: string | undefined
  key_type?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeNewOrderRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeOrderOrderIdFinalizeRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeOrdersRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefAcmeRevokeCertRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiIssuerReadCrlResponse = { crl?: string | undefined }
type PkiIssuerReadCrlDeltaResponse = { crl?: string | undefined }
type PkiIssuerReadCrlDeltaDerResponse = { crl?: string | undefined }
type PkiIssuerReadCrlDeltaPemResponse = { crl?: string | undefined }
type PkiIssuerReadCrlDerResponse = { crl?: string | undefined }
type PkiIssuerReadCrlPemResponse = { crl?: string | undefined }
type PkiReadIssuerDerResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
}
type PkiIssuerIssueWithRoleRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  not_after?: string | undefined
  other_sans?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  remove_roots_from_chain?: boolean | undefined
  serial_number?: string | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  user_ids?: string[] | undefined
}
type PkiIssuerIssueWithRoleResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  private_key?: string | undefined
  private_key_type?: string | undefined
  serial_number?: string | undefined
}
type PkiReadIssuerJsonResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
}
type PkiReadIssuerPemResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
}
type PkiIssuerResignCrlsRequest = {
  crl_number?: number | undefined
  crls?: string[] | undefined
  delta_crl_base_number?: number | undefined
  format?: string | undefined
  next_update?: string | undefined
}
type PkiIssuerResignCrlsResponse = { crl?: string | undefined }
type PkiRevokeIssuerResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  crl_distribution_points?: string[] | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
  issuing_certificates?: string[] | undefined
  key_id?: string | undefined
  leaf_not_after_behavior?: string | undefined
  manual_chain?: string[] | undefined
  ocsp_servers?: string[] | undefined
  revocation_signature_algorithm?: string | undefined
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
  revoked?: boolean | undefined
  usage?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeNewAccountRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiGenerateEabKeyForIssuerAndRoleResponse = {
  acme_directory?: string | undefined
  created_on?: string | undefined
  id?: string | undefined
  key?: string | undefined
  key_type?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeOrdersRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiIssuerSignIntermediateRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  country?: string[] | undefined
  csr?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_name?: string | undefined
  locality?: string[] | undefined
  max_path_length?: number | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  other_sans?: string[] | undefined
  ou?: string[] | undefined
  permitted_dns_domains?: string[] | undefined
  postal_code?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  province?: string[] | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  skid?: string | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_csr_values?: boolean | undefined
  use_pss?: boolean | undefined
}
type PkiIssuerSignIntermediateResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  serial_number?: string | undefined
}
type PkiIssuerSignRevocationListRequest = {
  crl_number?: number | undefined
  delta_crl_base_number?: number | undefined
  extensions?: { [x: string]: unknown }[] | undefined
  format?: string | undefined
  next_update?: string | undefined
  revoked_certs?: { [x: string]: unknown }[] | undefined
}
type PkiIssuerSignRevocationListResponse = { crl?: string | undefined }
type PkiIssuerSignSelfIssuedRequest = {
  certificate?: string | undefined
  require_matching_certificate_algorithms?: boolean | undefined
}
type PkiIssuerSignSelfIssuedResponse = {
  certificate?: string | undefined
  issuing_ca?: string | undefined
}
type PkiIssuerSignVerbatimRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  csr?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  ext_key_usage?: string[] | undefined
  ext_key_usage_oids?: string[] | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  key_usage?: string[] | undefined
  not_after?: string | undefined
  other_sans?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  remove_roots_from_chain?: boolean | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_pss?: boolean | undefined
  user_ids?: string[] | undefined
}
type PkiIssuerSignVerbatimResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  serial_number?: string | undefined
}
type PkiIssuerSignVerbatimWithRoleRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  csr?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  ext_key_usage?: string[] | undefined
  ext_key_usage_oids?: string[] | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  key_usage?: string[] | undefined
  not_after?: string | undefined
  other_sans?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  remove_roots_from_chain?: boolean | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_pss?: boolean | undefined
  user_ids?: string[] | undefined
}
type PkiIssuerSignVerbatimWithRoleResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  serial_number?: string | undefined
}
type PkiIssuerSignWithRoleRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  csr?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  not_after?: string | undefined
  other_sans?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  remove_roots_from_chain?: boolean | undefined
  serial_number?: string | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  user_ids?: string[] | undefined
}
type PkiIssuerSignWithRoleResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  serial_number?: string | undefined
}
type PkiListIssuersResponse = {
  key_info?: { [x: string]: unknown } | undefined
  keys?: string[] | undefined
}
type PkiIssuersGenerateIntermediateRequest = {
  add_basic_constraints?: boolean | undefined
  alt_names?: string | undefined
  common_name?: string | undefined
  country?: string[] | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  key_bits?: number | undefined
  key_name?: string | undefined
  key_ref?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  locality?: string[] | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  other_sans?: string[] | undefined
  ou?: string[] | undefined
  postal_code?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  province?: string[] | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
}
type PkiIssuersGenerateIntermediateResponse = {
  csr?: string | undefined
  key_id?: string | undefined
  private_key?: string | undefined
  private_key_type?: string | undefined
}
type PkiIssuersGenerateRootRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  country?: string[] | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_name?: string | undefined
  key_bits?: number | undefined
  key_name?: string | undefined
  key_ref?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  locality?: string[] | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
  max_path_length?: number | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  other_sans?: string[] | undefined
  ou?: string[] | undefined
  permitted_dns_domains?: string[] | undefined
  postal_code?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  province?: string[] | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_pss?: boolean | undefined
}
type PkiIssuersGenerateRootResponse = {
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
  issuing_ca?: string | undefined
  key_id?: string | undefined
  key_name?: string | undefined
  private_key?: string | undefined
  serial_number?: string | undefined
}
type PkiIssuersImportBundleRequest = { pem_bundle?: string | undefined }
type PkiIssuersImportBundleResponse = {
  existing_issuers?: string[] | undefined
  existing_keys?: string[] | undefined
  imported_issuers?: string[] | undefined
  imported_keys?: string[] | undefined
  mapping?: { [x: string]: unknown } | undefined
}
type PkiIssuersImportCertRequest = { pem_bundle?: string | undefined }
type PkiIssuersImportCertResponse = {
  existing_issuers?: string[] | undefined
  existing_keys?: string[] | undefined
  imported_issuers?: string[] | undefined
  imported_keys?: string[] | undefined
  mapping?: { [x: string]: unknown } | undefined
}
type PkiReadKeyResponse = {
  key_id?: string | undefined
  key_name?: string | undefined
  key_type?: string | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
  subject_key_id?: string | undefined
}
type PkiWriteKeyRequest = { key_name?: string | undefined }
type PkiWriteKeyResponse = {
  key_id?: string | undefined
  key_name?: string | undefined
  key_type?: string | undefined
}
type PkiListKeysResponse = {
  key_info?: { [x: string]: unknown } | undefined
  keys?: string[] | undefined
}
type PkiGenerateExportedKeyRequest = {
  key_bits?: number | undefined
  key_name?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
}
type PkiGenerateExportedKeyResponse = {
  key_id?: string | undefined
  key_name?: string | undefined
  key_type?: string | undefined
  private_key?: string | undefined
}
type PkiGenerateInternalKeyRequest = {
  key_bits?: number | undefined
  key_name?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
}
type PkiGenerateInternalKeyResponse = {
  key_id?: string | undefined
  key_name?: string | undefined
  key_type?: string | undefined
  private_key?: string | undefined
}
type PkiGenerateKmsKeyRequest = {
  key_bits?: number | undefined
  key_name?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
}
type PkiGenerateKmsKeyResponse = {
  key_id?: string | undefined
  key_name?: string | undefined
  key_type?: string | undefined
  private_key?: string | undefined
}
type PkiImportKeyRequest = { key_name?: string | undefined; pem_bundle?: string | undefined }
type PkiImportKeyResponse = {
  key_id?: string | undefined
  key_name?: string | undefined
  key_type?: string | undefined
}
type PkiRevokeRequest = { certificate?: string | undefined; serial_number?: string | undefined }
type PkiRevokeResponse = {
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
  state?: string | undefined
}
type PkiRevokeWithKeyRequest = {
  certificate?: string | undefined
  private_key?: string | undefined
  serial_number?: string | undefined
}
type PkiRevokeWithKeyResponse = {
  revocation_time?: bigint | undefined
  revocation_time_rfc3339?: string | undefined
  state?: string | undefined
}
type PkiReadRoleResponse = {
  allow_any_name?: boolean | undefined
  allow_bare_domains?: boolean | undefined
  allow_glob_domains?: boolean | undefined
  allow_ip_sans?: boolean | undefined
  allow_localhost?: boolean | undefined
  allow_subdomains?: boolean | undefined
  allow_token_displayname?: boolean | undefined
  allow_wildcard_certificates?: boolean | undefined
  allowed_domains?: string[] | undefined
  allowed_domains_template?: boolean | undefined
  allowed_other_sans?: string[] | undefined
  allowed_serial_numbers?: string[] | undefined
  allowed_uri_sans?: string[] | undefined
  allowed_uri_sans_template?: boolean | undefined
  allowed_user_ids?: string[] | undefined
  basic_constraints_valid_for_non_ca?: boolean | undefined
  client_flag?: boolean | undefined
  cn_validations?: string[] | undefined
  code_signing_flag?: boolean | undefined
  country?: string[] | undefined
  email_protection_flag?: boolean | undefined
  enforce_hostnames?: boolean | undefined
  ext_key_usage?: string[] | undefined
  ext_key_usage_oids?: string[] | undefined
  generate_lease?: boolean | undefined
  issuer_ref?: string | undefined
  key_bits?: number | undefined
  key_type?: string | undefined
  key_usage?: string[] | undefined
  locality?: string[] | undefined
  max_ttl?: bigint | undefined
  no_store?: boolean | undefined
  not_after?: string | undefined
  not_before_duration?: bigint | undefined
  organization?: string[] | undefined
  ou?: string[] | undefined
  policy_identifiers?: string[] | undefined
  postal_code?: string[] | undefined
  province?: string[] | undefined
  require_cn?: boolean | undefined
  server_flag?: boolean | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: bigint | undefined
  use_csr_common_name?: boolean | undefined
  use_csr_sans?: boolean | undefined
  use_pss?: boolean | undefined
}
type PkiWriteRoleRequest = {
  allow_any_name?: boolean | undefined
  allow_bare_domains?: boolean | undefined
  allow_glob_domains?: boolean | undefined
  allow_ip_sans?: boolean | undefined
  allow_localhost?: boolean | undefined
  allow_subdomains?: boolean | undefined
  allow_wildcard_certificates?: boolean | undefined
  allowed_domains?: string[] | undefined
  allowed_domains_template?: boolean | undefined
  allowed_other_sans?: string[] | undefined
  allowed_serial_numbers?: string[] | undefined
  allowed_uri_sans?: string[] | undefined
  allowed_uri_sans_template?: boolean | undefined
  allowed_user_ids?: string[] | undefined
  backend?: string | undefined
  basic_constraints_valid_for_non_ca?: boolean | undefined
  client_flag?: boolean | undefined
  cn_validations?: string[] | undefined
  code_signing_flag?: boolean | undefined
  country?: string[] | undefined
  email_protection_flag?: boolean | undefined
  enforce_hostnames?: boolean | undefined
  ext_key_usage?: string[] | undefined
  ext_key_usage_oids?: string[] | undefined
  generate_lease?: boolean | undefined
  issuer_ref?: string | undefined
  key_bits?: number | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | 'any' | undefined
  key_usage?: string[] | undefined
  locality?: string[] | undefined
  max_ttl?: string | undefined
  no_store?: boolean | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  ou?: string[] | undefined
  policy_identifiers?: string[] | undefined
  postal_code?: string[] | undefined
  province?: string[] | undefined
  require_cn?: boolean | undefined
  server_flag?: boolean | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  use_csr_common_name?: boolean | undefined
  use_csr_sans?: boolean | undefined
  use_pss?: boolean | undefined
}
type PkiWriteRoleResponse = {
  allow_any_name?: boolean | undefined
  allow_bare_domains?: boolean | undefined
  allow_glob_domains?: boolean | undefined
  allow_ip_sans?: boolean | undefined
  allow_localhost?: boolean | undefined
  allow_subdomains?: boolean | undefined
  allow_token_displayname?: boolean | undefined
  allow_wildcard_certificates?: boolean | undefined
  allowed_domains?: string[] | undefined
  allowed_domains_template?: boolean | undefined
  allowed_other_sans?: string[] | undefined
  allowed_serial_numbers?: string[] | undefined
  allowed_uri_sans?: string[] | undefined
  allowed_uri_sans_template?: boolean | undefined
  allowed_user_ids?: string[] | undefined
  basic_constraints_valid_for_non_ca?: boolean | undefined
  client_flag?: boolean | undefined
  cn_validations?: string[] | undefined
  code_signing_flag?: boolean | undefined
  country?: string[] | undefined
  email_protection_flag?: boolean | undefined
  enforce_hostnames?: boolean | undefined
  ext_key_usage?: string[] | undefined
  ext_key_usage_oids?: string[] | undefined
  generate_lease?: boolean | undefined
  issuer_ref?: string | undefined
  key_bits?: number | undefined
  key_type?: string | undefined
  key_usage?: string[] | undefined
  locality?: string[] | undefined
  max_ttl?: bigint | undefined
  no_store?: boolean | undefined
  not_after?: string | undefined
  not_before_duration?: bigint | undefined
  organization?: string[] | undefined
  ou?: string[] | undefined
  policy_identifiers?: string[] | undefined
  postal_code?: string[] | undefined
  province?: string[] | undefined
  require_cn?: boolean | undefined
  server_flag?: boolean | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: bigint | undefined
  use_csr_common_name?: boolean | undefined
  use_csr_sans?: boolean | undefined
  use_pss?: boolean | undefined
}
type PkiWriteRolesRoleAcmeAccountKidRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteRolesRoleAcmeAuthorizationAuthIdRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteRolesRoleAcmeChallengeAuthIdChallengeTypeRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteRolesRoleAcmeNewAccountRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiGenerateEabKeyForRoleResponse = {
  acme_directory?: string | undefined
  created_on?: string | undefined
  id?: string | undefined
  key?: string | undefined
  key_type?: string | undefined
}
type PkiWriteRolesRoleAcmeNewOrderRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteRolesRoleAcmeOrderOrderIdRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteRolesRoleAcmeOrderOrderIdCertRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteRolesRoleAcmeOrdersRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiWriteRolesRoleAcmeRevokeCertRequest = {
  payload?: string | undefined
  protected?: string | undefined
  signature?: string | undefined
}
type PkiGenerateRootRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  country?: string[] | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_name?: string | undefined
  key_bits?: number | undefined
  key_name?: string | undefined
  key_ref?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  locality?: string[] | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
  max_path_length?: number | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  other_sans?: string[] | undefined
  ou?: string[] | undefined
  permitted_dns_domains?: string[] | undefined
  postal_code?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  province?: string[] | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_pss?: boolean | undefined
}
type PkiGenerateRootResponse = {
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
  issuing_ca?: string | undefined
  key_id?: string | undefined
  key_name?: string | undefined
  private_key?: string | undefined
  serial_number?: string | undefined
}
type PkiReplaceRootRequest = { default?: string | undefined }
type PkiReplaceRootResponse = {
  default?: string | undefined
  default_follows_latest_issuer?: boolean | undefined
}
type PkiRotateRootRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  country?: string[] | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_name?: string | undefined
  key_bits?: number | undefined
  key_name?: string | undefined
  key_ref?: string | undefined
  key_type?: 'rsa' | 'ec' | 'ed25519' | undefined
  locality?: string[] | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
  max_path_length?: number | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  other_sans?: string[] | undefined
  ou?: string[] | undefined
  permitted_dns_domains?: string[] | undefined
  postal_code?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  province?: string[] | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_pss?: boolean | undefined
}
type PkiRotateRootResponse = {
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuer_id?: string | undefined
  issuer_name?: string | undefined
  issuing_ca?: string | undefined
  key_id?: string | undefined
  key_name?: string | undefined
  private_key?: string | undefined
  serial_number?: string | undefined
}
type PkiRootSignIntermediateRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  country?: string[] | undefined
  csr?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_name?: string | undefined
  issuer_ref?: string | undefined
  locality?: string[] | undefined
  max_path_length?: number | undefined
  not_after?: string | undefined
  not_before_duration?: string | undefined
  organization?: string[] | undefined
  other_sans?: string[] | undefined
  ou?: string[] | undefined
  permitted_dns_domains?: string[] | undefined
  postal_code?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  province?: string[] | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  skid?: string | undefined
  street_address?: string[] | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_csr_values?: boolean | undefined
  use_pss?: boolean | undefined
}
type PkiRootSignIntermediateResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  serial_number?: string | undefined
}
type PkiRootSignSelfIssuedRequest = {
  certificate?: string | undefined
  issuer_ref?: string | undefined
  require_matching_certificate_algorithms?: boolean | undefined
}
type PkiRootSignSelfIssuedResponse = {
  certificate?: string | undefined
  issuing_ca?: string | undefined
}
type PkiSignVerbatimRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  csr?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  ext_key_usage?: string[] | undefined
  ext_key_usage_oids?: string[] | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_ref?: string | undefined
  key_usage?: string[] | undefined
  not_after?: string | undefined
  other_sans?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  remove_roots_from_chain?: boolean | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_pss?: boolean | undefined
  user_ids?: string[] | undefined
}
type PkiSignVerbatimResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  serial_number?: string | undefined
}
type PkiSignVerbatimWithRoleRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  csr?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  ext_key_usage?: string[] | undefined
  ext_key_usage_oids?: string[] | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_ref?: string | undefined
  key_usage?: string[] | undefined
  not_after?: string | undefined
  other_sans?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  remove_roots_from_chain?: boolean | undefined
  serial_number?: string | undefined
  signature_bits?: number | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  use_pss?: boolean | undefined
  user_ids?: string[] | undefined
}
type PkiSignVerbatimWithRoleResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  serial_number?: string | undefined
}
type PkiSignWithRoleRequest = {
  alt_names?: string | undefined
  common_name?: string | undefined
  csr?: string | undefined
  exclude_cn_from_sans?: boolean | undefined
  format?: 'pem' | 'der' | 'pem_bundle' | undefined
  ip_sans?: string[] | undefined
  issuer_ref?: string | undefined
  not_after?: string | undefined
  other_sans?: string[] | undefined
  private_key_format?: '' | 'der' | 'pem' | 'pkcs8' | undefined
  remove_roots_from_chain?: boolean | undefined
  serial_number?: string | undefined
  ttl?: string | undefined
  uri_sans?: string[] | undefined
  user_ids?: string[] | undefined
}
type PkiSignWithRoleResponse = {
  ca_chain?: string[] | undefined
  certificate?: string | undefined
  expiration?: bigint | undefined
  issuing_ca?: string | undefined
  serial_number?: string | undefined
}
type PkiTidyRequest = {
  acme_account_safety_buffer?: string | undefined
  issuer_safety_buffer?: string | undefined
  pause_duration?: string | undefined
  revocation_queue_safety_buffer?: string | undefined
  safety_buffer?: string | undefined
  tidy_acme?: boolean | undefined
  tidy_cert_store?: boolean | undefined
  tidy_cross_cluster_revoked_certs?: boolean | undefined
  tidy_expired_issuers?: boolean | undefined
  tidy_move_legacy_ca_bundle?: boolean | undefined
  tidy_revocation_list?: boolean | undefined
  tidy_revocation_queue?: boolean | undefined
  tidy_revoked_cert_issuer_associations?: boolean | undefined
  tidy_revoked_certs?: boolean | undefined
}
type PkiTidyCancelResponse = {
  acme_account_deleted_count?: number | undefined
  acme_account_revoked_count?: number | undefined
  acme_account_safety_buffer?: number | undefined
  acme_orders_deleted_count?: number | undefined
  cert_store_deleted_count?: number | undefined
  cross_revoked_cert_deleted_count?: number | undefined
  current_cert_store_count?: number | undefined
  current_revoked_cert_count?: number | undefined
  error?: string | undefined
  internal_backend_uuid?: string | undefined
  issuer_safety_buffer?: number | undefined
  last_auto_tidy_finished?: string | undefined
  message?: string | undefined
  missing_issuer_cert_count?: number | undefined
  pause_duration?: string | undefined
  revocation_queue_deleted_count?: number | undefined
  revocation_queue_safety_buffer?: number | undefined
  revoked_cert_deleted_count?: number | undefined
  safety_buffer?: number | undefined
  state?: string | undefined
  tidy_acme?: boolean | undefined
  tidy_cert_store?: boolean | undefined
  tidy_cross_cluster_revoked_certs?: boolean | undefined
  tidy_expired_issuers?: boolean | undefined
  tidy_move_legacy_ca_bundle?: boolean | undefined
  tidy_revocation_queue?: boolean | undefined
  tidy_revoked_cert_issuer_associations?: boolean | undefined
  tidy_revoked_certs?: boolean | undefined
  time_finished?: string | undefined
  time_started?: string | undefined
  total_acme_account_count?: number | undefined
}
type PkiTidyStatusResponse = {
  acme_account_deleted_count?: number | undefined
  acme_account_revoked_count?: number | undefined
  acme_account_safety_buffer?: number | undefined
  acme_orders_deleted_count?: number | undefined
  cert_store_deleted_count?: number | undefined
  cross_revoked_cert_deleted_count?: number | undefined
  current_cert_store_count?: number | undefined
  current_revoked_cert_count?: number | undefined
  error?: string | undefined
  internal_backend_uuid?: string | undefined
  issuer_safety_buffer?: number | undefined
  last_auto_tidy_finished?: string | undefined
  message?: string | undefined
  missing_issuer_cert_count?: number | undefined
  pause_duration?: string | undefined
  revocation_queue_deleted_count?: number | undefined
  revocation_queue_safety_buffer?: number | undefined
  revoked_cert_deleted_count?: number | undefined
  safety_buffer?: number | undefined
  state?: string | undefined
  tidy_acme?: boolean | undefined
  tidy_cert_store?: boolean | undefined
  tidy_cross_cluster_revoked_certs?: boolean | undefined
  tidy_expired_issuers?: boolean | undefined
  tidy_move_legacy_ca_bundle?: boolean | undefined
  tidy_revocation_queue?: boolean | undefined
  tidy_revoked_cert_issuer_associations?: boolean | undefined
  tidy_revoked_certs?: boolean | undefined
  time_finished?: string | undefined
  time_started?: string | undefined
  total_acme_account_count?: number | undefined
}
type RabbitMqConfigureConnectionRequest = {
  connection_uri?: string | undefined
  password?: string | undefined
  password_policy?: string | undefined
  username?: string | undefined
  username_template?: string | undefined
  verify_connection?: boolean | undefined
}
type RabbitMqConfigureLeaseRequest = { max_ttl?: string | undefined; ttl?: string | undefined }
type RabbitMqWriteRoleRequest = {
  tags?: string | undefined
  vhost_topics?: string | undefined
  vhosts?: string | undefined
}
type SshConfigureCaRequest = {
  generate_signing_key?: boolean | undefined
  key_bits?: number | undefined
  key_type?: string | undefined
  private_key?: string | undefined
  public_key?: string | undefined
}
type SshConfigureZeroAddressRequest = { roles?: string[] | undefined }
type SshGenerateCredentialsRequest = { ip?: string | undefined; username?: string | undefined }
type SshIssueCertificateRequest = {
  cert_type?: string | undefined
  critical_options?: { [x: string]: unknown } | undefined
  extensions?: { [x: string]: unknown } | undefined
  key_bits?: number | undefined
  key_id?: string | undefined
  key_type?: string | undefined
  ttl?: string | undefined
  valid_principals?: string | undefined
}
type SshListRolesByIpRequest = { ip?: string | undefined }
type SshWriteRoleRequest = {
  algorithm_signer?: '' | 'default' | 'ssh-rsa' | 'rsa-sha2-256' | 'rsa-sha2-512' | undefined
  allow_bare_domains?: boolean | undefined
  allow_host_certificates?: boolean | undefined
  allow_subdomains?: boolean | undefined
  allow_user_certificates?: boolean | undefined
  allow_user_key_ids?: boolean | undefined
  allowed_critical_options?: string | undefined
  allowed_domains?: string | undefined
  allowed_domains_template?: boolean | undefined
  allowed_extensions?: string | undefined
  allowed_user_key_lengths?: { [x: string]: unknown } | undefined
  allowed_users?: string | undefined
  allowed_users_template?: boolean | undefined
  cidr_list?: string | undefined
  default_critical_options?: { [x: string]: unknown } | undefined
  default_extensions?: { [x: string]: unknown } | undefined
  default_extensions_template?: boolean | undefined
  default_user?: string | undefined
  default_user_template?: boolean | undefined
  exclude_cidr_list?: string | undefined
  key_id_format?: string | undefined
  key_type?: 'otp' | 'ca' | undefined
  max_ttl?: string | undefined
  not_before_duration?: string | undefined
  port?: number | undefined
  ttl?: string | undefined
}
type SshSignCertificateRequest = {
  cert_type?: string | undefined
  critical_options?: { [x: string]: unknown } | undefined
  extensions?: { [x: string]: unknown } | undefined
  key_id?: string | undefined
  public_key?: string | undefined
  ttl?: string | undefined
  valid_principals?: string | undefined
}
type SshVerifyOtpRequest = { otp?: string | undefined }
type TerraformCloudConfigureRequest = {
  address?: string | undefined
  base_path?: string | undefined
  token: string
}
type TerraformCloudWriteRoleRequest = {
  max_ttl?: string | undefined
  organization?: string | undefined
  team_id?: string | undefined
  ttl?: string | undefined
  user_id?: string | undefined
}
type TotpValidateCodeRequest = { code?: string | undefined }
type TotpCreateKeyRequest = {
  account_name?: string | undefined
  algorithm?: string | undefined
  digits?: number | undefined
  exported?: boolean | undefined
  generate?: boolean | undefined
  issuer?: string | undefined
  key?: string | undefined
  key_size?: number | undefined
  period?: string | undefined
  qr_size?: number | undefined
  skew?: number | undefined
  url?: string | undefined
}
type TransitConfigureCacheRequest = { size?: number | undefined }
type TransitConfigureKeysRequest = { disable_upsert?: boolean | undefined }
type TransitGenerateDataKeyRequest = {
  bits?: number | undefined
  context?: string | undefined
  key_version?: number | undefined
  nonce?: string | undefined
}
type TransitDecryptRequest = {
  associated_data?: string | undefined
  batch_input?: { [x: string]: unknown }[] | undefined
  ciphertext?: string | undefined
  context?: string | undefined
  nonce?: string | undefined
  partial_failure_response_code?: number | undefined
}
type TransitEncryptRequest = {
  associated_data?: string | undefined
  batch_input?: { [x: string]: unknown }[] | undefined
  context?: string | undefined
  convergent_encryption?: boolean | undefined
  key_version?: number | undefined
  nonce?: string | undefined
  partial_failure_response_code?: number | undefined
  plaintext?: string | undefined
  type?: string | undefined
}
type TransitHashRequest = {
  algorithm?: string | undefined
  format?: string | undefined
  input?: string | undefined
}
type TransitHashWithAlgorithmRequest = {
  algorithm?: string | undefined
  format?: string | undefined
  input?: string | undefined
}
type TransitGenerateHmacRequest = {
  algorithm?: string | undefined
  batch_input?: { [x: string]: unknown }[] | undefined
  input?: string | undefined
  key_version?: number | undefined
}
type TransitGenerateHmacWithAlgorithmRequest = {
  algorithm?: string | undefined
  batch_input?: { [x: string]: unknown }[] | undefined
  input?: string | undefined
  key_version?: number | undefined
}
type TransitCreateKeyRequest = {
  allow_plaintext_backup?: boolean | undefined
  auto_rotate_period?: string | undefined
  context?: string | undefined
  convergent_encryption?: boolean | undefined
  derived?: boolean | undefined
  exportable?: boolean | undefined
  key_size?: number | undefined
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
  type?: string | undefined
}
type TransitConfigureKeyRequest = {
  allow_plaintext_backup?: boolean | undefined
  auto_rotate_period?: string | undefined
  deletion_allowed?: boolean | undefined
  exportable?: boolean | undefined
  min_decryption_version?: number | undefined
  min_encryption_version?: number | undefined
}
type TransitGenerateCsrForKeyRequest = { csr?: string | undefined; version?: number | undefined }
type TransitImportKeyRequest = {
  allow_plaintext_backup?: boolean | undefined
  allow_rotation?: boolean | undefined
  auto_rotate_period?: string | undefined
  ciphertext?: string | undefined
  context?: string | undefined
  derived?: boolean | undefined
  exportable?: boolean | undefined
  hash_function?: string | undefined
  public_key?: string | undefined
  type?: string | undefined
}
type TransitImportKeyVersionRequest = {
  ciphertext?: string | undefined
  hash_function?: string | undefined
  public_key?: string | undefined
  version?: number | undefined
}
type TransitRotateKeyRequest = {
  managed_key_id?: string | undefined
  managed_key_name?: string | undefined
}
type TransitSetCertificateForKeyRequest = {
  certificate_chain: string
  version?: number | undefined
}
type TransitTrimKeyRequest = { min_available_version?: number | undefined }
type TransitGenerateRandomRequest = { bytes?: number | undefined; format?: string | undefined }
type TransitGenerateRandomWithSourceRequest = {
  bytes?: number | undefined
  format?: string | undefined
}
type TransitGenerateRandomWithSourceAndBytesRequest = {
  bytes?: number | undefined
  format?: string | undefined
}
type TransitGenerateRandomWithBytesRequest = {
  bytes?: number | undefined
  format?: string | undefined
}
type TransitRestoreKeyRequest = { backup?: string | undefined; force?: boolean | undefined }
type TransitRestoreAndRenameKeyRequest = {
  backup?: string | undefined
  force?: boolean | undefined
}
type TransitRewrapRequest = {
  batch_input?: { [x: string]: unknown }[] | undefined
  ciphertext?: string | undefined
  context?: string | undefined
  key_version?: number | undefined
  nonce?: string | undefined
}
type TransitSignRequest = {
  algorithm?: string | undefined
  batch_input?: { [x: string]: unknown }[] | undefined
  context?: string | undefined
  hash_algorithm?: string | undefined
  input?: string | undefined
  key_version?: number | undefined
  marshaling_algorithm?: string | undefined
  prehashed?: boolean | undefined
  salt_length?: string | undefined
  signature_algorithm?: string | undefined
}
type TransitSignWithAlgorithmRequest = {
  algorithm?: string | undefined
  batch_input?: { [x: string]: unknown }[] | undefined
  context?: string | undefined
  hash_algorithm?: string | undefined
  input?: string | undefined
  key_version?: number | undefined
  marshaling_algorithm?: string | undefined
  prehashed?: boolean | undefined
  salt_length?: string | undefined
  signature_algorithm?: string | undefined
}
type TransitVerifyRequest = {
  algorithm?: string | undefined
  batch_input?: { [x: string]: unknown }[] | undefined
  context?: string | undefined
  hash_algorithm?: string | undefined
  hmac?: string | undefined
  input?: string | undefined
  marshaling_algorithm?: string | undefined
  prehashed?: boolean | undefined
  salt_length?: string | undefined
  signature?: string | undefined
  signature_algorithm?: string | undefined
}
type TransitVerifyWithAlgorithmRequest = {
  algorithm?: string | undefined
  batch_input?: { [x: string]: unknown }[] | undefined
  context?: string | undefined
  hash_algorithm?: string | undefined
  hmac?: string | undefined
  input?: string | undefined
  marshaling_algorithm?: string | undefined
  prehashed?: boolean | undefined
  salt_length?: string | undefined
  signature?: string | undefined
  signature_algorithm?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth/token/accessors/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/token/create': {
      $post: { input: { json: TokenCreateRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/auth/token/create-orphan': {
      $post: {
        input: { json: TokenCreateOrphanRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/token/create/:role_name': {
      $post: {
        input: { param: { role_name: string } } & { json: TokenCreateAgainstRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/token/lookup': {
      $get: {
        input: { query: { token?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: { input: { json: TokenLookUpRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/auth/token/lookup-accessor': {
      $post: {
        input: { json: TokenLookUpAccessorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/token/lookup-self': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: TokenLookUpSelf2Request }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/token/renew': {
      $post: { input: { json: TokenRenewRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/auth/token/renew-accessor': {
      $post: {
        input: { json: TokenRenewAccessorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/token/renew-self': {
      $post: {
        input: { json: TokenRenewSelfRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/token/revoke': {
      $post: { input: { json: TokenRevokeRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/auth/token/revoke-accessor': {
      $post: {
        input: { json: TokenRevokeAccessorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/token/revoke-orphan': {
      $post: {
        input: { json: TokenRevokeOrphanRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/token/revoke-self': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/auth/token/roles/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/token/roles/:role_name': {
      $get: {
        input: { param: { role_name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { role_name: string } } & { json: TokenWriteRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role_name: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/token/tidy': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/auth/:alicloud_mount_path/login': {
      $post: {
        input: { param: { alicloud_mount_path: string } } & { json: AliCloudLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:alicloud_mount_path/role/': {
      $get: {
        input: { param: { alicloud_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:alicloud_mount_path/role/:role': {
      $get: {
        input: { param: { role: string; alicloud_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { role: string; alicloud_mount_path: string } } & {
          json: AliCloudWriteAuthRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role: string; alicloud_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:alicloud_mount_path/roles/': {
      $get: {
        input: { param: { alicloud_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/login': {
      $post: {
        input: { param: { approle_mount_path: string } } & { json: AppRoleLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/role/': {
      $get: {
        input: { param: { approle_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadRoleResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/bind-secret-id': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadBindSecretIdResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteBindSecretIdRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/bound-cidr-list': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadBoundCidrListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteBoundCidrListRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/custom-secret-id': {
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteCustomSecretIdRequest
        }
        output: AppRoleWriteCustomSecretIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/local-secret-ids': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadLocalSecretIdsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/period': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadPeriodResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWritePeriodRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/policies': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWritePoliciesRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/role-id': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadRoleIdResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteRoleIdRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id': {
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteSecretIdRequest
        }
        output: AppRoleWriteSecretIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id-accessor/destroy': {
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleDestroySecretIdByAccessorRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          query: { secret_id_accessor?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id-accessor/lookup': {
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleLookUpSecretIdByAccessorRequest
        }
        output: AppRoleLookUpSecretIdByAccessorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id-bound-cidrs': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadSecretIdBoundCidrsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteSecretIdBoundCidrsRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id-num-uses': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadSecretIdNumUsesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteSecretIdNumUsesRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id-ttl': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadSecretIdTtlResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteSecretIdTtlRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id/': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          query: { list: 'true' }
        }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id/destroy': {
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleDestroySecretIdRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          query: { secret_id?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/secret-id/lookup': {
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleLookUpSecretIdRequest
        }
        output: AppRoleLookUpSecretIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/token-bound-cidrs': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadTokenBoundCidrsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteTokenBoundCidrsRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/token-max-ttl': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadTokenMaxTtlResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteTokenMaxTtlRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/token-num-uses': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadTokenNumUsesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteTokenNumUsesRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/role/:role_name/token-ttl': {
      $get: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: AppRoleReadTokenTtlResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { role_name: string; approle_mount_path: string } } & {
          json: AppRoleWriteTokenTtlRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { role_name: string; approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:approle_mount_path/tidy/secret-id': {
      $post: {
        input: { param: { approle_mount_path: string } }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/auth/:aws_mount_path/config/certificate/:cert_name': {
      $get: {
        input: { param: { cert_name: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { cert_name: string; aws_mount_path: string } } & {
          json: AwsConfigureCertificateRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { cert_name: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/config/certificates/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/config/client': {
      $get: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { aws_mount_path: string } } & { json: AwsConfigureClientRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/config/identity': {
      $get: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { aws_mount_path: string } } & {
          json: AwsConfigureIdentityIntegrationRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/config/rotate-root': {
      $post: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/config/sts/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/config/sts/:account_id': {
      $get: {
        input: { param: { account_id: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { account_id: string; aws_mount_path: string } } & {
          json: AwsWriteStsRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { account_id: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/config/tidy/identity-accesslist': {
      $get: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { aws_mount_path: string } } & {
          json: AwsConfigureIdentityAccessListTidyOperationRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/config/tidy/identity-whitelist': {
      $get: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { aws_mount_path: string } } & {
          json: AwsConfigureIdentityWhitelistTidyOperationRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/config/tidy/roletag-blacklist': {
      $get: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { aws_mount_path: string } } & {
          json: AwsConfigureRoleTagBlacklistTidyOperationRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/config/tidy/roletag-denylist': {
      $get: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { aws_mount_path: string } } & {
          json: AwsConfigureRoleTagDenyListTidyOperationRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/identity-accesslist/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/identity-accesslist/:instance_id': {
      $get: {
        input: { param: { instance_id: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { instance_id: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/identity-whitelist/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/identity-whitelist/:instance_id': {
      $get: {
        input: { param: { instance_id: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { instance_id: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/login': {
      $post: {
        input: { param: { aws_mount_path: string } } & { json: AwsLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/role/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/role/:role': {
      $get: {
        input: { param: { role: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { role: string; aws_mount_path: string } } & {
          json: AwsWriteAuthRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/role/:role/tag': {
      $post: {
        input: { param: { role: string; aws_mount_path: string } } & {
          json: AwsWriteRoleTagRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/roles/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/roletag-blacklist/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/roletag-blacklist/:role_tag': {
      $get: {
        input: { param: { role_tag: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { role_tag: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role_tag: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/roletag-denylist/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/roletag-denylist/:role_tag': {
      $get: {
        input: { param: { role_tag: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { role_tag: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role_tag: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:aws_mount_path/tidy/identity-accesslist': {
      $post: {
        input: { param: { aws_mount_path: string } } & { json: AwsTidyIdentityAccessListRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/tidy/identity-whitelist': {
      $post: {
        input: { param: { aws_mount_path: string } } & { json: AwsTidyIdentityWhitelistRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/tidy/roletag-blacklist': {
      $post: {
        input: { param: { aws_mount_path: string } } & { json: AwsTidyRoleTagBlacklistRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:aws_mount_path/tidy/roletag-denylist': {
      $post: {
        input: { param: { aws_mount_path: string } } & { json: AwsTidyRoleTagDenyListRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:azure_mount_path/config': {
      $get: {
        input: { param: { azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { azure_mount_path: string } } & { json: AzureConfigureAuthRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:azure_mount_path/login': {
      $post: {
        input: { param: { azure_mount_path: string } } & { json: AzureLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:azure_mount_path/role/': {
      $get: {
        input: { param: { azure_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:azure_mount_path/role/:name': {
      $get: {
        input: { param: { name: string; azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; azure_mount_path: string } } & {
          json: AzureWriteAuthRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:azure_mount_path/rotate-root': {
      $post: {
        input: { param: { azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:centrify_mount_path/config': {
      $get: {
        input: { param: { centrify_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { centrify_mount_path: string } } & { json: CentrifyConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:centrify_mount_path/login': {
      $post: {
        input: { param: { centrify_mount_path: string } } & { json: CentrifyLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:cert_mount_path/certs/': {
      $get: {
        input: { param: { cert_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:cert_mount_path/certs/:name': {
      $get: {
        input: { param: { name: string; cert_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; cert_mount_path: string } } & {
          json: CertWriteCertificateRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; cert_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:cert_mount_path/config': {
      $get: {
        input: { param: { cert_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { cert_mount_path: string } } & { json: CertConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:cert_mount_path/crls/': {
      $get: {
        input: { param: { cert_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:cert_mount_path/crls/:name': {
      $get: {
        input: { param: { name: string; cert_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; cert_mount_path: string } } & { json: CertWriteCrlRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; cert_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:cert_mount_path/login': {
      $post: {
        input: { param: { cert_mount_path: string } } & { json: CertLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:cf_mount_path/config': {
      $get: {
        input: { param: { cf_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { cf_mount_path: string } } & { json: CloudFoundryConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { cf_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:cf_mount_path/login': {
      $post: {
        input: { param: { cf_mount_path: string } } & { json: CloudFoundryLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:cf_mount_path/roles/': {
      $get: {
        input: { param: { cf_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:cf_mount_path/roles/:role': {
      $get: {
        input: { param: { role: string; cf_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { role: string; cf_mount_path: string } } & {
          json: CloudFoundryWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role: string; cf_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:gcp_mount_path/config': {
      $get: {
        input: { param: { gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { gcp_mount_path: string } } & { json: GoogleCloudConfigureAuthRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:gcp_mount_path/login': {
      $post: {
        input: { param: { gcp_mount_path: string } } & { json: GoogleCloudLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:gcp_mount_path/role/': {
      $get: {
        input: { param: { gcp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:gcp_mount_path/role/:name': {
      $get: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; gcp_mount_path: string } } & {
          json: GoogleCloudWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:gcp_mount_path/role/:name/labels': {
      $post: {
        input: { param: { name: string; gcp_mount_path: string } } & {
          json: GoogleCloudEditLabelsForRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:gcp_mount_path/role/:name/service-accounts': {
      $post: {
        input: { param: { name: string; gcp_mount_path: string } } & {
          json: GoogleCloudEditServiceAccountsForRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:gcp_mount_path/roles/': {
      $get: {
        input: { param: { gcp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:github_mount_path/config': {
      $get: {
        input: { param: { github_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { github_mount_path: string } } & { json: GithubConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:github_mount_path/login': {
      $post: {
        input: { param: { github_mount_path: string } } & { json: GithubLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:github_mount_path/map/teams': {
      $get: {
        input: { param: { github_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:github_mount_path/map/teams/': {
      $get: {
        input: { param: { github_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:github_mount_path/map/teams/:key': {
      $get: {
        input: { param: { key: string; github_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { key: string; github_mount_path: string } } & {
          json: GithubWriteTeamMappingRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { key: string; github_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:github_mount_path/map/users': {
      $get: {
        input: { param: { github_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:github_mount_path/map/users/': {
      $get: {
        input: { param: { github_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:github_mount_path/map/users/:key': {
      $get: {
        input: { param: { key: string; github_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { key: string; github_mount_path: string } } & {
          json: GithubWriteUserMappingRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { key: string; github_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:jwt_mount_path/config': {
      $get: {
        input: { param: { jwt_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { jwt_mount_path: string } } & { json: JwtConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:jwt_mount_path/login': {
      $post: {
        input: { param: { jwt_mount_path: string } } & { json: JwtLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:jwt_mount_path/oidc/auth_url': {
      $post: {
        input: { param: { jwt_mount_path: string } } & {
          json: JwtOidcRequestAuthorizationUrlRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:jwt_mount_path/oidc/callback': {
      $get: {
        input: { param: { jwt_mount_path: string } } & {
          query: {
            client_nonce?: string | undefined
            code?: string | undefined
            state?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { jwt_mount_path: string } } & { json: JwtOidcCallbackFormPostRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:jwt_mount_path/role/': {
      $get: {
        input: { param: { jwt_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:jwt_mount_path/role/:name': {
      $get: {
        input: { param: { name: string; jwt_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; jwt_mount_path: string } } & { json: JwtWriteRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; jwt_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:kerberos_mount_path/config': {
      $get: {
        input: { param: { kerberos_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { kerberos_mount_path: string } } & { json: KerberosConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:kerberos_mount_path/config/ldap': {
      $get: {
        input: { param: { kerberos_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { kerberos_mount_path: string } } & { json: KerberosConfigureLdapRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:kerberos_mount_path/groups/': {
      $get: {
        input: { param: { kerberos_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:kerberos_mount_path/groups/:name': {
      $get: {
        input: { param: { name: string; kerberos_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; kerberos_mount_path: string } } & {
          json: KerberosWriteGroupRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; kerberos_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:kerberos_mount_path/login': {
      $get: {
        input: { param: { kerberos_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { kerberos_mount_path: string } } & { json: KerberosLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:kubernetes_mount_path/config': {
      $get: {
        input: { param: { kubernetes_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { kubernetes_mount_path: string } } & {
          json: KubernetesConfigureAuthRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:kubernetes_mount_path/login': {
      $post: {
        input: { param: { kubernetes_mount_path: string } } & { json: KubernetesLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:kubernetes_mount_path/role/': {
      $get: {
        input: { param: { kubernetes_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:kubernetes_mount_path/role/:name': {
      $get: {
        input: { param: { name: string; kubernetes_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; kubernetes_mount_path: string } } & {
          json: KubernetesWriteAuthRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; kubernetes_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:ldap_mount_path/config': {
      $get: {
        input: { param: { ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { ldap_mount_path: string } } & { json: LdapConfigureAuthRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:ldap_mount_path/groups/': {
      $get: {
        input: { param: { ldap_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:ldap_mount_path/groups/:name': {
      $get: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; ldap_mount_path: string } } & {
          json: LdapWriteGroupRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:ldap_mount_path/login/:username': {
      $post: {
        input: { param: { username: string; ldap_mount_path: string } } & { json: LdapLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:ldap_mount_path/users/': {
      $get: {
        input: { param: { ldap_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:ldap_mount_path/users/:name': {
      $get: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; ldap_mount_path: string } } & { json: LdapWriteUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:oci_mount_path/config': {
      $get: {
        input: { param: { oci_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { oci_mount_path: string } } & { json: OciConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { oci_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:oci_mount_path/login/:role': {
      $post: {
        input: { param: { role: string; oci_mount_path: string } } & { json: OciLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:oci_mount_path/role/': {
      $get: {
        input: { param: { oci_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:oci_mount_path/role/:role': {
      $get: {
        input: { param: { role: string; oci_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { role: string; oci_mount_path: string } } & { json: OciWriteRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role: string; oci_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:okta_mount_path/config': {
      $get: {
        input: { param: { okta_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { okta_mount_path: string } } & { json: OktaConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:okta_mount_path/groups/': {
      $get: {
        input: { param: { okta_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:okta_mount_path/groups/:name': {
      $get: {
        input: { param: { name: string; okta_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; okta_mount_path: string } } & {
          json: OktaWriteGroupRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; okta_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:okta_mount_path/login/:username': {
      $post: {
        input: { param: { username: string; okta_mount_path: string } } & { json: OktaLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:okta_mount_path/users/': {
      $get: {
        input: { param: { okta_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:okta_mount_path/users/:name': {
      $get: {
        input: { param: { name: string; okta_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; okta_mount_path: string } } & { json: OktaWriteUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; okta_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:okta_mount_path/verify/:nonce': {
      $get: {
        input: { param: { nonce: string; okta_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:radius_mount_path/config': {
      $get: {
        input: { param: { radius_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { radius_mount_path: string } } & { json: RadiusConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:radius_mount_path/login': {
      $post: {
        input: { param: { radius_mount_path: string } } & { json: RadiusLoginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:radius_mount_path/login/:urlusername': {
      $post: {
        input: { param: { urlusername: string; radius_mount_path: string } } & {
          json: RadiusLoginWithUsernameRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:radius_mount_path/users/': {
      $get: {
        input: { param: { radius_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:radius_mount_path/users/:name': {
      $get: {
        input: { param: { name: string; radius_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; radius_mount_path: string } } & {
          json: RadiusWriteUserRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; radius_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:userpass_mount_path/login/:username': {
      $post: {
        input: { param: { username: string; userpass_mount_path: string } } & {
          json: UserpassLoginRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:userpass_mount_path/users/': {
      $get: {
        input: { param: { userpass_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/:userpass_mount_path/users/:username': {
      $get: {
        input: { param: { username: string; userpass_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { username: string; userpass_mount_path: string } } & {
          json: UserpassWriteUserRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { username: string; userpass_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/:userpass_mount_path/users/:username/password': {
      $post: {
        input: { param: { username: string; userpass_mount_path: string } } & {
          json: UserpassResetPasswordRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/:userpass_mount_path/users/:username/policies': {
      $post: {
        input: { param: { username: string; userpass_mount_path: string } } & {
          json: UserpassUpdatePoliciesRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/cubbyhole/:path': {
      $get: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { path: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/cubbyhole/:path/': {
      $get: {
        input: { param: { path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/alias': {
      $post: { input: { json: AliasCreateRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/alias/id/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/alias/id/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: AliasUpdateByIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/entity': {
      $post: { input: { json: EntityCreateRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/entity-alias': {
      $post: {
        input: { json: EntityCreateAliasRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/entity-alias/id/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/entity-alias/id/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: EntityUpdateAliasByIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/entity/batch-delete': {
      $post: {
        input: { json: EntityBatchDeleteRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/entity/id/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/entity/id/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: EntityUpdateByIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/entity/merge': {
      $post: { input: { json: EntityMergeRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/entity/name/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/entity/name/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: EntityUpdateByNameRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/group': {
      $post: { input: { json: GroupCreateRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/group-alias': {
      $post: {
        input: { json: GroupCreateAliasRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/group-alias/id/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/group-alias/id/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: GroupUpdateAliasByIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/group/id/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/group/id/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: GroupUpdateByIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/group/name/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/group/name/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: GroupUpdateByNameRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/lookup/entity': {
      $post: { input: { json: EntityLookUpRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/lookup/group': {
      $post: { input: { json: GroupLookUpRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/mfa/login-enforcement/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/mfa/login-enforcement/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: MfaWriteLoginEnforcementRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/mfa/method/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/duo': {
      $post: {
        input: { json: MfaCreateDuoMethodRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/duo/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/duo/:method_id': {
      $get: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { method_id: string } } & { json: MfaUpdateDuoMethodRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/identity/mfa/method/okta': {
      $post: {
        input: { json: MfaCreateOktaMethodRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/okta/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/okta/:method_id': {
      $get: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { method_id: string } } & { json: MfaUpdateOktaMethodRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/identity/mfa/method/pingid': {
      $post: {
        input: { json: MfaCreatePingIdMethodRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/pingid/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/pingid/:method_id': {
      $get: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { method_id: string } } & { json: MfaUpdatePingIdMethodRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/identity/mfa/method/totp': {
      $post: {
        input: { json: MfaCreateTotpMethodRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/totp/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/totp/admin-destroy': {
      $post: {
        input: { json: MfaAdminDestroyTotpSecretRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/totp/admin-generate': {
      $post: {
        input: { json: MfaAdminGenerateTotpSecretRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/totp/generate': {
      $post: {
        input: { json: MfaGenerateTotpSecretRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/mfa/method/totp/:method_id': {
      $get: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { method_id: string } } & { json: MfaUpdateTotpMethodRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/identity/mfa/method/:method_id': {
      $get: {
        input: { param: { method_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/oidc/.well-known/keys': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/oidc/.well-known/openid-configuration': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/oidc/assignment/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/oidc/assignment/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: OidcWriteAssignmentRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/oidc/client/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/oidc/client/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: OidcWriteClientRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/oidc/config': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: OidcConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/oidc/introspect': {
      $post: {
        input: { json: OidcIntrospectRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/oidc/key/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/oidc/key/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: OidcWriteKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/oidc/key/:name/rotate': {
      $post: {
        input: { param: { name: string } } & { json: OidcRotateKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/oidc/provider/': {
      $get: {
        input: { query: { allowed_client_id?: string | undefined; list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/oidc/provider/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: OidcWriteProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/oidc/provider/:name/.well-known/keys': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/oidc/provider/:name/.well-known/openid-configuration': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/oidc/provider/:name/authorize': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            client_id?: string | undefined
            code_challenge?: string | undefined
            code_challenge_method?: string | undefined
            max_age?: number | undefined
            nonce?: string | undefined
            redirect_uri?: string | undefined
            response_type?: string | undefined
            scope?: string | undefined
            state?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string } } & { json: OidcProviderAuthorizeWithParametersRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/oidc/provider/:name/token': {
      $post: {
        input: { param: { name: string } } & { json: OidcProviderTokenRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/oidc/provider/:name/userinfo': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/oidc/role/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/oidc/role/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: OidcWriteRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/oidc/scope/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/oidc/scope/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: OidcWriteScopeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/identity/oidc/token/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/identity/persona': {
      $post: {
        input: { json: PersonaCreateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/identity/persona/id/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/persona/id/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: PersonaUpdateByIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & { '/sys/audit': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/sys/audit-hash/:path': {
      $post: {
        input: { param: { path: string } } & { json: AuditingCalculateHashRequest }
        output: AuditingCalculateHashResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/audit/:path': {
      $post: {
        input: { param: { path: string } } & { json: AuditingEnableDeviceRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & { '/sys/auth': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/sys/auth/:path': {
      $get: {
        input: { param: { path: string } }
        output: AuthReadConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { path: string } } & { json: AuthEnableMethodRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/auth/:path/tune': {
      $get: {
        input: { param: { path: string } }
        output: AuthReadTuningInformationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { path: string } } & { json: AuthTuneConfigurationParametersRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/capabilities': {
      $post: {
        input: { json: QueryTokenCapabilitiesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/capabilities-accessor': {
      $post: {
        input: { json: QueryTokenAccessorCapabilitiesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/capabilities-self': {
      $post: {
        input: { json: QueryTokenSelfCapabilitiesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/config/auditing/request-headers': {
      $get: {
        input: {}
        output: AuditingListRequestHeadersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/config/auditing/request-headers/:header': {
      $get: { input: { param: { header: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { header: string } } & { json: AuditingEnableRequestHeaderRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { header: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/config/control-group': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/config/cors': {
      $get: { input: {}; output: CorsReadConfigurationResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CorsConfigureRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/config/group-policy-application': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/config/reload/:subsystem': {
      $post: {
        input: { param: { subsystem: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/config/state/sanitized': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/config/ui/headers/': {
      $get: {
        input: { query: { list: 'true' } }
        output: UiHeadersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/config/ui/headers/:header': {
      $get: {
        input: { param: { header: string } }
        output: UiHeadersReadConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { header: string } } & { json: UiHeadersConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { header: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/control-group/authorize': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/control-group/request': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/decode-token': {
      $post: { input: { json: DecodeRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/experiments': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/generate-root': {
      $get: {
        input: {}
        output: RootTokenGenerationReadProgress2Response
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: RootTokenGenerationInitialize2Request }
        output: RootTokenGenerationInitialize2Response
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/generate-root/attempt': {
      $get: {
        input: {}
        output: RootTokenGenerationReadProgressResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: RootTokenGenerationInitializeRequest }
        output: RootTokenGenerationInitializeResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/generate-root/update': {
      $post: {
        input: { json: RootTokenGenerationUpdateRequest }
        output: RootTokenGenerationUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/ha-status': {
      $get: { input: {}; output: HaStatusResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sys/health': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 472 }
        | { input: {}; output: {}; outputFormat: string; status: 501 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/sys/host-info': {
      $get: { input: {}; output: CollectHostInformationResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sys/in-flight-req': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/init': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: InitializeRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/internal/counters/activity': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/internal/counters/activity/export': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/internal/counters/activity/monthly': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/internal/counters/config': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: InternalClientActivityConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/internal/counters/entities': {
      $get: { input: {}; output: InternalCountEntitiesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sys/internal/counters/requests': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/internal/counters/tokens': {
      $get: { input: {}; output: InternalCountTokensResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sys/internal/inspect/router/:tag': {
      $get: { input: { param: { tag: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/internal/specs/openapi': {
      $get: {
        input: {
          query: { context?: string | undefined; generic_mount_paths?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { json: InternalGenerateOpenApiDocumentWithParametersRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/internal/ui/feature-flags': {
      $get: {
        input: {}
        output: InternalUiListEnabledFeatureFlagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/internal/ui/mounts': {
      $get: {
        input: {}
        output: InternalUiListEnabledVisibleMountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/internal/ui/mounts/:path': {
      $get: {
        input: { param: { path: string } }
        output: InternalUiReadMountInformationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/internal/ui/namespaces': {
      $get: {
        input: {}
        output: InternalUiListNamespacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/internal/ui/resultant-acl': {
      $get:
        | {
            input: {}
            output: InternalUiReadResultantAclResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/key-status': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/leader': {
      $get: { input: {}; output: LeaderStatusResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sys/leases': {
      $get: { input: {}; output: LeasesListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sys/leases/count': {
      $get: { input: {}; output: LeasesCountResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sys/leases/lookup': {
      $post: {
        input: { json: LeasesReadLeaseRequest }
        output: LeasesReadLeaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/leases/lookup/:prefix/': {
      $get: {
        input: { param: { prefix: string } } & { query: { list: 'true' } }
        output: LeasesLookUpResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/leases/renew': {
      $post: {
        input: { json: LeasesRenewLeaseRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/leases/renew/:url_lease_id': {
      $post: {
        input: { param: { url_lease_id: string } } & { json: LeasesRenewLeaseWithIdRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/leases/revoke': {
      $post: {
        input: { json: LeasesRevokeLeaseRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/leases/revoke-force/:prefix': {
      $post: { input: { param: { prefix: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/leases/revoke-prefix/:prefix': {
      $post: {
        input: { param: { prefix: string } } & { json: LeasesRevokeLeaseWithPrefixRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/leases/revoke/:url_lease_id': {
      $post: {
        input: { param: { url_lease_id: string } } & { json: LeasesRevokeLeaseWithIdRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/leases/tidy': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } }
  } & {
    '/sys/license/status': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/locked-users': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/locked-users/:mount_accessor/unlock/:alias_identifier': {
      $post: {
        input: { param: { alias_identifier: string; mount_accessor: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/loggers': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: LoggersUpdateVerbosityLevelRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/loggers/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { name: string } } & { json: LoggersUpdateVerbosityLevelForRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/managed-keys/:type/': {
      $get: {
        input: { param: { type: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/managed-keys/:type/:name': {
      $get: {
        input: { param: { name: string; type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; type: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/managed-keys/:type/:name/test/sign': {
      $post: {
        input: { param: { name: string; type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/metrics': {
      $get: {
        input: { query: { format?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/mfa/method/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/mfa/method/duo/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/mfa/method/okta/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/mfa/method/pingid/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/mfa/method/totp/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/mfa/method/totp/:name/admin-destroy': {
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/mfa/method/totp/:name/admin-generate': {
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/mfa/method/totp/:name/generate': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/mfa/validate': {
      $post: { input: { json: MfaValidateRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/monitor': {
      $get: {
        input: { query: { log_format?: string | undefined; log_level?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & { '/sys/mounts': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/sys/mounts/:path': {
      $get: {
        input: { param: { path: string } }
        output: MountsReadConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { path: string } } & { json: MountsEnableSecretsEngineRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/mounts/:path/tune': {
      $get: {
        input: { param: { path: string } }
        output: MountsReadTuningInformationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { path: string } } & { json: MountsTuneConfigurationParametersRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/namespaces/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/namespaces/api-lock/lock': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/namespaces/api-lock/lock/:path': {
      $post: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/namespaces/api-lock/unlock': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/namespaces/api-lock/unlock/:path': {
      $post: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/namespaces/:path': {
      $get: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/plugins/catalog': {
      $get: {
        input: {}
        output: PluginsCatalogListPluginsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/plugins/catalog/:name': {
      $get: {
        input: { param: { name: string } }
        output: PluginsCatalogReadPluginConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & { json: PluginsCatalogRegisterPluginRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/plugins/catalog/:type/': {
      $get: {
        input: { param: { type: string } } & { query: { list: 'true' } }
        output: PluginsCatalogListPluginsWithTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/plugins/catalog/:type/:name': {
      $get: {
        input: { param: { name: string; type: string } }
        output: PluginsCatalogReadPluginConfigurationWithTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string; type: string } } & {
          json: PluginsCatalogRegisterPluginWithTypeRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/plugins/reload/backend': {
      $post:
        | {
            input: { json: PluginsReloadBackendsRequest }
            output: PluginsReloadBackendsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PluginsReloadBackendsRequest }
            output: PluginsReloadBackendsResponse
            outputFormat: 'json'
            status: 202
          }
    }
  } & {
    '/sys/plugins/reload/backend/status': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/plugins/runtimes/catalog/': {
      $get: {
        input: { query: { list: 'true' } }
        output: PluginsRuntimesCatalogListPluginsRuntimesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/plugins/runtimes/catalog/:type/:name': {
      $get: {
        input: { param: { name: string; type: string } }
        output: PluginsRuntimesCatalogReadPluginRuntimeConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string; type: string } } & {
          json: PluginsRuntimesCatalogRegisterPluginRuntimeRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/policies/acl/': {
      $get: {
        input: { query: { list: 'true' } }
        output: PoliciesListAclPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/policies/acl/:name': {
      $get: {
        input: { param: { name: string } }
        output: PoliciesReadAclPolicyResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & { json: PoliciesWriteAclPolicyRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/policies/egp/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/policies/egp/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/policies/password/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/policies/password/:name': {
      $get: {
        input: { param: { name: string } }
        output: PoliciesReadPasswordPolicyResponse
        outputFormat: 'json'
        status: 204
      }
      $post: {
        input: { param: { name: string } } & { json: PoliciesWritePasswordPolicyRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/policies/password/:name/generate': {
      $get: {
        input: { param: { name: string } }
        output: PoliciesGeneratePasswordFromPasswordPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/policies/rgp/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/policies/rgp/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/policy': {
      $get: {
        input: {}
        output: PoliciesListAclPolicies2Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/policy/': {
      $get: {
        input: { query: { list: 'true' } }
        output: PoliciesListAclPolicies3Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/policy/:name': {
      $get: {
        input: { param: { name: string } }
        output: PoliciesReadAclPolicy2Response
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & { json: PoliciesWriteAclPolicy2Request }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & { '/sys/pprof': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/sys/pprof/allocs': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/pprof/block': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/pprof/cmdline': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/pprof/goroutine': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/pprof/heap': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/pprof/mutex': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/pprof/profile': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/pprof/symbol': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/pprof/threadcreate': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/pprof/trace': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/sys/quotas/config': {
      $get: {
        input: {}
        output: RateLimitQuotasReadConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: RateLimitQuotasConfigureRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/quotas/lease-count/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/quotas/lease-count/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/quotas/rate-limit/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/quotas/rate-limit/:name': {
      $get: {
        input: { param: { name: string } }
        output: RateLimitQuotasReadResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & { json: RateLimitQuotasWriteRequest }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/raw/:path': {
      $get: {
        input: { param: { path: string } }
        output: RawReadResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { path: string } } & { json: RawWriteRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/raw/:path/': {
      $get: {
        input: { param: { path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/rekey/backup': {
      $get: { input: {}; output: RekeyReadBackupKeyResponse; outputFormat: 'json'; status: 200 }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/rekey/init': {
      $get: {
        input: {}
        output: RekeyAttemptReadProgressResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: RekeyAttemptInitializeRequest }
        output: RekeyAttemptInitializeResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/rekey/recovery-key-backup': {
      $get: {
        input: {}
        output: RekeyReadBackupRecoveryKeyResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/rekey/update': {
      $post: {
        input: { json: RekeyAttemptUpdateRequest }
        output: RekeyAttemptUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/rekey/verify': {
      $get: {
        input: {}
        output: RekeyVerificationReadProgressResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: RekeyVerificationUpdateRequest }
        output: RekeyVerificationUpdateResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {}
        output: RekeyVerificationCancelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/remount': {
      $post: {
        input: { json: RemountRequest }
        output: RemountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/remount/status/:migration_id': {
      $get: {
        input: { param: { migration_id: string } }
        output: RemountStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/renew': {
      $post: {
        input: { json: LeasesRenewLease2Request }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/renew/:url_lease_id': {
      $post: {
        input: { param: { url_lease_id: string } } & { json: LeasesRenewLeaseWithId2Request }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/replication/dr/primary/demote': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/primary/disable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/primary/enable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/primary/revoke-secondary': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/primary/secondary-token': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/config/reload/:subsystem': {
      $post: {
        input: { param: { subsystem: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sys/replication/dr/secondary/disable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/enable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/generate-public-key': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/license/status': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/operation-token/delete': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/promote': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/recover': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/reindex': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/secondary/update-primary': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/dr/status': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/primary/demote': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/primary/disable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/primary/dynamic-filter/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/primary/enable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/primary/paths-filter/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/replication/performance/primary/revoke-secondary': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/primary/secondary-token': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/secondary/disable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/secondary/dynamic-filter/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/secondary/enable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/secondary/generate-public-key': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/secondary/promote': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/secondary/update-primary': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/performance/status': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/primary/demote': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/primary/disable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/primary/enable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/primary/revoke-secondary': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/primary/secondary-token': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/recover': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/reindex': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/secondary/disable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/secondary/enable': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/secondary/promote': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/secondary/update-primary': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/replication/status': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/revoke': {
      $post: {
        input: { json: LeasesRevokeLease2Request }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/revoke-force/:prefix': {
      $post: { input: { param: { prefix: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/revoke-prefix/:prefix': {
      $post: {
        input: { param: { prefix: string } } & { json: LeasesRevokeLeaseWithPrefix2Request }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sys/revoke/:url_lease_id': {
      $post: {
        input: { param: { url_lease_id: string } } & { json: LeasesRevokeLeaseWithId2Request }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & { '/sys/rotate': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } } } & {
    '/sys/rotate/config': {
      $get: {
        input: {}
        output: EncryptionKeyReadRotationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: EncryptionKeyConfigureRotationRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & { '/sys/seal': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } } } & {
    '/sys/seal-status': {
      $get: { input: {}; output: SealStatusResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/sys/sealwrap/rewrap': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/step-down': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } }
  } & {
    '/sys/storage/raft/snapshot-auto/config/': {
      $get: {
        input: { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/storage/raft/snapshot-auto/config/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/storage/raft/snapshot-auto/status/:name': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/tools/hash': {
      $post: {
        input: { json: GenerateHashRequest }
        output: GenerateHashResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/tools/hash/:urlalgorithm': {
      $post: {
        input: { param: { urlalgorithm: string } } & { json: GenerateHashWithAlgorithmRequest }
        output: GenerateHashWithAlgorithmResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/tools/random': {
      $post: {
        input: { json: GenerateRandomRequest }
        output: GenerateRandomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/tools/random/:source': {
      $post: {
        input: { param: { source: string } } & { json: GenerateRandomWithSourceRequest }
        output: GenerateRandomWithSourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/tools/random/:source/:urlbytes': {
      $post: {
        input: { param: { source: string; urlbytes: string } } & {
          json: GenerateRandomWithSourceAndBytesRequest
        }
        output: GenerateRandomWithSourceAndBytesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/tools/random/:urlbytes': {
      $post: {
        input: { param: { urlbytes: string } } & { json: GenerateRandomWithBytesRequest }
        output: GenerateRandomWithBytesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/unseal': {
      $post: {
        input: { json: UnsealRequest }
        output: UnsealResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/version-history/': {
      $get: {
        input: { query: { list: 'true' } }
        output: VersionHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/wrapping/lookup': {
      $get: {
        input: { query: { token?: string | undefined } }
        output: ReadWrappingProperties2Response
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ReadWrappingPropertiesRequest }
        output: ReadWrappingPropertiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sys/wrapping/rewrap': {
      $post: { input: { json: RewrapRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/sys/wrapping/unwrap': {
      $post:
        | { input: { json: UnwrapRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: UnwrapRequest }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sys/wrapping/wrap': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:alicloud_mount_path/config': {
      $get: {
        input: { param: { alicloud_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { alicloud_mount_path: string } } & { json: AliCloudConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { alicloud_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:alicloud_mount_path/creds/:name': {
      $get: {
        input: { param: { name: string; alicloud_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:alicloud_mount_path/role/': {
      $get: {
        input: { param: { alicloud_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:alicloud_mount_path/role/:name': {
      $get: {
        input: { param: { name: string; alicloud_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; alicloud_mount_path: string } } & {
          json: AliCloudWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; alicloud_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:aws_mount_path/config/lease': {
      $get: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { aws_mount_path: string } } & { json: AwsConfigureLeaseRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:aws_mount_path/config/root': {
      $get: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { aws_mount_path: string } } & {
          json: AwsConfigureRootIamCredentialsRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:aws_mount_path/config/rotate-root': {
      $post: {
        input: { param: { aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:aws_mount_path/creds/:name': {
      $get: {
        input: { param: { name: string; aws_mount_path: string } } & {
          query: {
            role_arn?: string | undefined
            role_session_name?: string | undefined
            ttl?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; aws_mount_path: string } } & {
          json: AwsGenerateCredentialsWithParametersRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:aws_mount_path/roles/': {
      $get: {
        input: { param: { aws_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:aws_mount_path/roles/:name': {
      $get: {
        input: { param: { name: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; aws_mount_path: string } } & { json: AwsWriteRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:aws_mount_path/static-creds/:name': {
      $get: {
        input: { param: { name: string; aws_mount_path: string } }
        output: AwsReadStaticCredsNameResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:aws_mount_path/static-roles/:name': {
      $get: {
        input: { param: { name: string; aws_mount_path: string } }
        output: AwsReadStaticRolesNameResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string; aws_mount_path: string } } & {
          json: AwsWriteStaticRolesNameRequest
        }
        output: AwsWriteStaticRolesNameResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string; aws_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:aws_mount_path/sts/:name': {
      $get: {
        input: { param: { name: string; aws_mount_path: string } } & {
          query: {
            role_arn?: string | undefined
            role_session_name?: string | undefined
            ttl?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; aws_mount_path: string } } & {
          json: AwsGenerateStsCredentialsWithParametersRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:azure_mount_path/config': {
      $get: {
        input: { param: { azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { azure_mount_path: string } } & { json: AzureConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:azure_mount_path/creds/:role': {
      $get: {
        input: { param: { role: string; azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:azure_mount_path/roles/': {
      $get: {
        input: { param: { azure_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:azure_mount_path/roles/:name': {
      $get: {
        input: { param: { name: string; azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; azure_mount_path: string } } & {
          json: AzureWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:azure_mount_path/rotate-root': {
      $post: {
        input: { param: { azure_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:consul_mount_path/config/access': {
      $get: {
        input: { param: { consul_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { consul_mount_path: string } } & { json: ConsulConfigureAccessRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:consul_mount_path/creds/:role': {
      $get: {
        input: { param: { role: string; consul_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:consul_mount_path/roles/': {
      $get: {
        input: { param: { consul_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:consul_mount_path/roles/:name': {
      $get: {
        input: { param: { name: string; consul_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; consul_mount_path: string } } & {
          json: ConsulWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; consul_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:database_mount_path/config/': {
      $get: {
        input: { param: { database_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:database_mount_path/config/:name': {
      $get: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; database_mount_path: string } } & {
          json: DatabaseConfigureConnectionRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:database_mount_path/creds/:name': {
      $get: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:database_mount_path/reset/:name': {
      $post: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:database_mount_path/roles/': {
      $get: {
        input: { param: { database_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:database_mount_path/roles/:name': {
      $get: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; database_mount_path: string } } & {
          json: DatabaseWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:database_mount_path/rotate-role/:name': {
      $post: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:database_mount_path/rotate-root/:name': {
      $post: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:database_mount_path/static-creds/:name': {
      $get: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:database_mount_path/static-roles/': {
      $get: {
        input: { param: { database_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:database_mount_path/static-roles/:name': {
      $get: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; database_mount_path: string } } & {
          json: DatabaseWriteStaticRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; database_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:gcp_mount_path/config': {
      $get: {
        input: { param: { gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { gcp_mount_path: string } } & { json: GoogleCloudConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/config/rotate-root': {
      $post: {
        input: { param: { gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/impersonated-account/': {
      $get: {
        input: { param: { gcp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/impersonated-account/:name': {
      $get: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; gcp_mount_path: string } } & {
          json: GoogleCloudWriteImpersonatedAccountRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:gcp_mount_path/impersonated-account/:name/token': {
      $get: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/impersonated-accounts/': {
      $get: {
        input: { param: { gcp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/key/:roleset': {
      $get: {
        input: { param: { roleset: string; gcp_mount_path: string } } & {
          query: {
            key_algorithm?: string | undefined
            key_type?: string | undefined
            ttl?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { roleset: string; gcp_mount_path: string } } & {
          json: GoogleCloudGenerateRolesetKey3Request
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/roleset/': {
      $get: {
        input: { param: { gcp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/roleset/:name': {
      $get: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; gcp_mount_path: string } } & {
          json: GoogleCloudWriteRolesetRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:gcp_mount_path/roleset/:name/rotate': {
      $post: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/roleset/:name/rotate-key': {
      $post: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/roleset/:roleset/key': {
      $get: {
        input: { param: { roleset: string; gcp_mount_path: string } } & {
          query: {
            key_algorithm?: string | undefined
            key_type?: string | undefined
            ttl?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { roleset: string; gcp_mount_path: string } } & {
          json: GoogleCloudGenerateRolesetKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/roleset/:roleset/token': {
      $get: {
        input: { param: { roleset: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { roleset: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/rolesets/': {
      $get: {
        input: { param: { gcp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/static-account/': {
      $get: {
        input: { param: { gcp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/static-account/:name': {
      $get: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; gcp_mount_path: string } } & {
          json: GoogleCloudWriteStaticAccountRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:gcp_mount_path/static-account/:name/key': {
      $get: {
        input: { param: { name: string; gcp_mount_path: string } } & {
          query: {
            key_algorithm?: string | undefined
            key_type?: string | undefined
            ttl?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; gcp_mount_path: string } } & {
          json: GoogleCloudGenerateStaticAccountKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/static-account/:name/rotate-key': {
      $post: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/static-account/:name/token': {
      $get: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/static-accounts/': {
      $get: {
        input: { param: { gcp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:gcp_mount_path/token/:roleset': {
      $get: {
        input: { param: { roleset: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { roleset: string; gcp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/config': {
      $get: {
        input: { param: { gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { gcpkms_mount_path: string } } & { json: GoogleCloudKmsConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:gcpkms_mount_path/decrypt/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } } & {
          json: GoogleCloudKmsDecryptRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/encrypt/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } } & {
          json: GoogleCloudKmsEncryptRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/keys/': {
      $get: {
        input: { param: { gcpkms_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/keys/config/:key': {
      $get: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } } & {
          json: GoogleCloudKmsConfigureKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/keys/deregister/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:gcpkms_mount_path/keys/register/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } } & {
          json: GoogleCloudKmsRegisterKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/keys/rotate/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/keys/trim/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:gcpkms_mount_path/keys/:key': {
      $get: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } } & {
          json: GoogleCloudKmsWriteKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:gcpkms_mount_path/pubkey/:key': {
      $get: {
        input: { param: { key: string; gcpkms_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/reencrypt/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } } & {
          json: GoogleCloudKmsReencryptRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/sign/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } } & {
          json: GoogleCloudKmsSignRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:gcpkms_mount_path/verify/:key': {
      $post: {
        input: { param: { key: string; gcpkms_mount_path: string } } & {
          json: GoogleCloudKmsVerifyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:kubernetes_mount_path/check': {
      $get: {
        input: { param: { kubernetes_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:kubernetes_mount_path/config': {
      $get: {
        input: { param: { kubernetes_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { kubernetes_mount_path: string } } & { json: KubernetesConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { kubernetes_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:kubernetes_mount_path/creds/:name': {
      $post: {
        input: { param: { name: string; kubernetes_mount_path: string } } & {
          json: KubernetesGenerateCredentialsRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:kubernetes_mount_path/roles/': {
      $get: {
        input: { param: { kubernetes_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:kubernetes_mount_path/roles/:name': {
      $get: {
        input: { param: { name: string; kubernetes_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; kubernetes_mount_path: string } } & {
          json: KubernetesWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; kubernetes_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:kv_v1_mount_path/:path': {
      $get: {
        input: { param: { path: string; kv_v1_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { path: string; kv_v1_mount_path: string } } & {
          json: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { path: string; kv_v1_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:kv_v1_mount_path/:path/': {
      $get: {
        input: { param: { path: string; kv_v1_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:kv_v2_mount_path/config': {
      $get: {
        input: { param: { kv_v2_mount_path: string } }
        output: KvV2ReadConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { kv_v2_mount_path: string } } & { json: KvV2ConfigureRequest }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:kv_v2_mount_path/data/:path': {
      $get: {
        input: { param: { path: string; kv_v2_mount_path: string } }
        output: KvV2ReadResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { path: string; kv_v2_mount_path: string } } & { json: KvV2WriteRequest }
        output: KvV2WriteResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { path: string; kv_v2_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:kv_v2_mount_path/delete/:path': {
      $post: {
        input: { param: { path: string; kv_v2_mount_path: string } } & {
          json: KvV2DeleteVersionsRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:kv_v2_mount_path/destroy/:path': {
      $post: {
        input: { param: { path: string; kv_v2_mount_path: string } } & {
          json: KvV2DestroyVersionsRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:kv_v2_mount_path/metadata/:path': {
      $get: {
        input: { param: { path: string; kv_v2_mount_path: string } }
        output: KvV2ReadMetadataResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { path: string; kv_v2_mount_path: string } } & {
          json: KvV2WriteMetadataRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { path: string; kv_v2_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:kv_v2_mount_path/metadata/:path/': {
      $get: {
        input: { param: { path: string; kv_v2_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:kv_v2_mount_path/subkeys/:path': {
      $get: {
        input: { param: { path: string; kv_v2_mount_path: string } }
        output: KvV2ReadSubkeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:kv_v2_mount_path/undelete/:path': {
      $post: {
        input: { param: { path: string; kv_v2_mount_path: string } } & {
          json: KvV2UndeleteVersionsRequest
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ldap_mount_path/config': {
      $get: {
        input: { param: { ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { ldap_mount_path: string } } & { json: LdapConfigureRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ldap_mount_path/creds/:name': {
      $get: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/library/': {
      $get: {
        input: { param: { ldap_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/library/manage/:name/check-in': {
      $post: {
        input: { param: { name: string; ldap_mount_path: string } } & {
          json: LdapLibraryForceCheckInRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/library/:name': {
      $get: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; ldap_mount_path: string } } & {
          json: LdapLibraryConfigureRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ldap_mount_path/library/:name/check-in': {
      $post: {
        input: { param: { name: string; ldap_mount_path: string } } & {
          json: LdapLibraryCheckInRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/library/:name/check-out': {
      $post: {
        input: { param: { name: string; ldap_mount_path: string } } & {
          json: LdapLibraryCheckOutRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/library/:name/status': {
      $get: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/role/': {
      $get: {
        input: { param: { ldap_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/role/:name': {
      $get: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; ldap_mount_path: string } } & {
          json: LdapWriteDynamicRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ldap_mount_path/rotate-role/:name': {
      $post: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/rotate-root': {
      $post: {
        input: { param: { ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/static-cred/:name': {
      $get: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/static-role/': {
      $get: {
        input: { param: { ldap_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:ldap_mount_path/static-role/:name': {
      $get: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; ldap_mount_path: string } } & {
          json: LdapWriteStaticRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; ldap_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:mongodbatlas_mount_path/config': {
      $get: {
        input: { param: { mongodbatlas_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { mongodbatlas_mount_path: string } } & {
          json: MongoDbAtlasConfigureRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:mongodbatlas_mount_path/creds/:name': {
      $get: {
        input: { param: { name: string; mongodbatlas_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; mongodbatlas_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:mongodbatlas_mount_path/roles/': {
      $get: {
        input: { param: { mongodbatlas_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:mongodbatlas_mount_path/roles/:name': {
      $get: {
        input: { param: { name: string; mongodbatlas_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; mongodbatlas_mount_path: string } } & {
          json: MongoDbAtlasWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; mongodbatlas_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:nomad_mount_path/config/access': {
      $get: {
        input: { param: { nomad_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { nomad_mount_path: string } } & { json: NomadConfigureAccessRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { nomad_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:nomad_mount_path/config/lease': {
      $get: {
        input: { param: { nomad_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { nomad_mount_path: string } } & { json: NomadConfigureLeaseRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { nomad_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:nomad_mount_path/creds/:name': {
      $get: {
        input: { param: { name: string; nomad_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:nomad_mount_path/role/': {
      $get: {
        input: { param: { nomad_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:nomad_mount_path/role/:name': {
      $get: {
        input: { param: { name: string; nomad_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; nomad_mount_path: string } } & {
          json: NomadWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; nomad_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:pki_mount_path/acme/account/:kid': {
      $post: {
        input: { param: { kid: string; pki_mount_path: string } } & {
          json: PkiWriteAcmeAccountKidRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/authorization/:auth_id': {
      $post: {
        input: { param: { auth_id: string; pki_mount_path: string } } & {
          json: PkiWriteAcmeAuthorizationAuthIdRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/challenge/:auth_id/:challenge_type': {
      $post: {
        input: { param: { auth_id: string; challenge_type: string; pki_mount_path: string } } & {
          json: PkiWriteAcmeChallengeAuthIdChallengeTypeRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/directory': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/new-account': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiWriteAcmeNewAccountRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/new-eab': {
      $post: {
        input: { param: { pki_mount_path: string } }
        output: PkiGenerateEabKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/new-nonce': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/new-order': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiWriteAcmeNewOrderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/order/:order_id': {
      $post: {
        input: { param: { order_id: string; pki_mount_path: string } } & {
          json: PkiWriteAcmeOrderOrderIdRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/order/:order_id/cert': {
      $post: {
        input: { param: { order_id: string; pki_mount_path: string } } & {
          json: PkiWriteAcmeOrderOrderIdCertRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/order/:order_id/finalize': {
      $post: {
        input: { param: { order_id: string; pki_mount_path: string } } & {
          json: PkiWriteAcmeOrderOrderIdFinalizeRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/orders': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiWriteAcmeOrdersRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/acme/revoke-cert': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiWriteAcmeRevokeCertRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/ca': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCaDerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/ca/pem': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCaPemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/ca_chain': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCaChainPemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/cert/ca_chain': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCertCaChainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/cert/crl': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCertCrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/cert/delta-crl': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCertDeltaCrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/cert/:serial': {
      $get: {
        input: { param: { serial: string; pki_mount_path: string } }
        output: PkiReadCertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/cert/:serial/raw': {
      $get: {
        input: { param: { serial: string; pki_mount_path: string } }
        output: PkiReadCertRawDerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/cert/:serial/raw/pem': {
      $get: {
        input: { param: { serial: string; pki_mount_path: string } }
        output: PkiReadCertRawPemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/certs/': {
      $get: {
        input: { param: { pki_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/certs/revoked/': {
      $get: {
        input: { param: { pki_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/config/acme': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiConfigureAcmeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/config/auto-tidy': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadAutoTidyConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiConfigureAutoTidyRequest }
        output: PkiConfigureAutoTidyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/config/ca': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiConfigureCaRequest }
        output: PkiConfigureCaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/config/cluster': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadClusterConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiConfigureClusterRequest }
        output: PkiConfigureClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/config/crl': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCrlConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiConfigureCrlRequest }
        output: PkiConfigureCrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/config/issuers': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadIssuersConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiConfigureIssuersRequest }
        output: PkiConfigureIssuersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/config/keys': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadKeysConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiConfigureKeysRequest }
        output: PkiConfigureKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/config/urls': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadUrlsConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiConfigureUrlsRequest }
        output: PkiConfigureUrlsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/crl': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCrlDerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/crl/delta': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCrlDeltaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/crl/delta/pem': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCrlDeltaPemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/crl/pem': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiReadCrlPemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/crl/rotate': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiRotateCrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/crl/rotate-delta': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiRotateDeltaCrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/eab/': {
      $get: {
        input: { param: { pki_mount_path: string } } & { query: { list: 'true' } }
        output: PkiListEabKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/eab/:key_id': {
      $delete: {
        input: { param: { key_id: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:pki_mount_path/intermediate/cross-sign': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiCrossSignIntermediateRequest }
        output: PkiCrossSignIntermediateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/intermediate/generate/:exported': {
      $post: {
        input: { param: { exported: 'internal' | 'external' | 'kms'; pki_mount_path: string } } & {
          json: PkiGenerateIntermediateRequest
        }
        output: PkiGenerateIntermediateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/intermediate/set-signed': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiSetSignedIntermediateRequest }
        output: PkiSetSignedIntermediateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issue/:role': {
      $post: {
        input: { param: { role: string; pki_mount_path: string } } & {
          json: PkiIssueWithRoleRequest
        }
        output: PkiIssueWithRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiReadIssuerResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerRequest
        }
        output: PkiWriteIssuerResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/account/:kid': {
      $post: {
        input: { param: { issuer_ref: string; kid: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeAccountKidRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/authorization/:auth_id': {
      $post: {
        input: { param: { auth_id: string; issuer_ref: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeAuthorizationAuthIdRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/challenge/:auth_id/:challenge_type': {
      $post: {
        input: {
          param: {
            auth_id: string
            challenge_type: string
            issuer_ref: string
            pki_mount_path: string
          }
        } & { json: PkiWriteIssuerIssuerRefAcmeChallengeAuthIdChallengeTypeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/directory': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/new-account': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeNewAccountRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/new-eab': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiGenerateEabKeyForIssuerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/new-nonce': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/new-order': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeNewOrderRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/order/:order_id': {
      $post: {
        input: { param: { issuer_ref: string; order_id: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/order/:order_id/cert': {
      $post: {
        input: { param: { issuer_ref: string; order_id: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeOrderOrderIdCertRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/order/:order_id/finalize': {
      $post: {
        input: { param: { issuer_ref: string; order_id: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeOrderOrderIdFinalizeRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/orders': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeOrdersRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/acme/revoke-cert': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefAcmeRevokeCertRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/crl': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiIssuerReadCrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/crl/delta': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiIssuerReadCrlDeltaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/crl/delta/der': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiIssuerReadCrlDeltaDerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/crl/delta/pem': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiIssuerReadCrlDeltaPemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/crl/der': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiIssuerReadCrlDerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/crl/pem': {
      $get: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiIssuerReadCrlPemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/der': {
      $get:
        | {
            input: { param: { issuer_ref: string; pki_mount_path: string } }
            output: PkiReadIssuerDerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issuer_ref: string; pki_mount_path: string } }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/issue/:role': {
      $post: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } } & {
          json: PkiIssuerIssueWithRoleRequest
        }
        output: PkiIssuerIssueWithRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/json': {
      $get:
        | {
            input: { param: { issuer_ref: string; pki_mount_path: string } }
            output: PkiReadIssuerJsonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issuer_ref: string; pki_mount_path: string } }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/pem': {
      $get:
        | {
            input: { param: { issuer_ref: string; pki_mount_path: string } }
            output: PkiReadIssuerPemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issuer_ref: string; pki_mount_path: string } }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/resign-crls': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiIssuerResignCrlsRequest
        }
        output: PkiIssuerResignCrlsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/revoke': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } }
        output: PkiRevokeIssuerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/account/:kid': {
      $post: {
        input: {
          param: { issuer_ref: string; kid: string; role: string; pki_mount_path: string }
        } & { json: PkiWriteIssuerIssuerRefRolesRoleAcmeAccountKidRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/authorization/:auth_id': {
      $post: {
        input: {
          param: { auth_id: string; issuer_ref: string; role: string; pki_mount_path: string }
        } & { json: PkiWriteIssuerIssuerRefRolesRoleAcmeAuthorizationAuthIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/challenge/:auth_id/:challenge_type': {
      $post: {
        input: {
          param: {
            auth_id: string
            challenge_type: string
            issuer_ref: string
            role: string
            pki_mount_path: string
          }
        } & { json: PkiWriteIssuerIssuerRefRolesRoleAcmeChallengeAuthIdChallengeTypeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/directory': {
      $get: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/new-account': {
      $post: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefRolesRoleAcmeNewAccountRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/new-eab': {
      $post: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } }
        output: PkiGenerateEabKeyForIssuerAndRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/new-nonce': {
      $get: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/new-order': {
      $post: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefRolesRoleAcmeNewOrderRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/order/:order_id': {
      $post: {
        input: {
          param: { issuer_ref: string; order_id: string; role: string; pki_mount_path: string }
        } & { json: PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/order/:order_id/cert': {
      $post: {
        input: {
          param: { issuer_ref: string; order_id: string; role: string; pki_mount_path: string }
        } & { json: PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdCertRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/order/:order_id/finalize': {
      $post: {
        input: {
          param: { issuer_ref: string; order_id: string; role: string; pki_mount_path: string }
        } & { json: PkiWriteIssuerIssuerRefRolesRoleAcmeOrderOrderIdFinalizeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/orders': {
      $post: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefRolesRoleAcmeOrdersRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/roles/:role/acme/revoke-cert': {
      $post: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/sign-intermediate': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiIssuerSignIntermediateRequest
        }
        output: PkiIssuerSignIntermediateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/sign-revocation-list': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiIssuerSignRevocationListRequest
        }
        output: PkiIssuerSignRevocationListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/sign-self-issued': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiIssuerSignSelfIssuedRequest
        }
        output: PkiIssuerSignSelfIssuedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/sign-verbatim': {
      $post: {
        input: { param: { issuer_ref: string; pki_mount_path: string } } & {
          json: PkiIssuerSignVerbatimRequest
        }
        output: PkiIssuerSignVerbatimResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/sign-verbatim/:role': {
      $post: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } } & {
          json: PkiIssuerSignVerbatimWithRoleRequest
        }
        output: PkiIssuerSignVerbatimWithRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuer/:issuer_ref/sign/:role': {
      $post: {
        input: { param: { issuer_ref: string; role: string; pki_mount_path: string } } & {
          json: PkiIssuerSignWithRoleRequest
        }
        output: PkiIssuerSignWithRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuers/': {
      $get: {
        input: { param: { pki_mount_path: string } } & { query: { list: 'true' } }
        output: PkiListIssuersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuers/generate/intermediate/:exported': {
      $post: {
        input: { param: { exported: 'internal' | 'external' | 'kms'; pki_mount_path: string } } & {
          json: PkiIssuersGenerateIntermediateRequest
        }
        output: PkiIssuersGenerateIntermediateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuers/generate/root/:exported': {
      $post: {
        input: { param: { exported: 'internal' | 'external' | 'kms'; pki_mount_path: string } } & {
          json: PkiIssuersGenerateRootRequest
        }
        output: PkiIssuersGenerateRootResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuers/import/bundle': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiIssuersImportBundleRequest }
        output: PkiIssuersImportBundleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/issuers/import/cert': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiIssuersImportCertRequest }
        output: PkiIssuersImportCertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/key/:key_ref': {
      $get: {
        input: { param: { key_ref: string; pki_mount_path: string } }
        output: PkiReadKeyResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { key_ref: string; pki_mount_path: string } } & { json: PkiWriteKeyRequest }
        output: PkiWriteKeyResponse
        outputFormat: 'json'
        status: 204
      }
      $delete: {
        input: { param: { key_ref: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:pki_mount_path/keys/': {
      $get: {
        input: { param: { pki_mount_path: string } } & { query: { list: 'true' } }
        output: PkiListKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/keys/generate/exported': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiGenerateExportedKeyRequest }
        output: PkiGenerateExportedKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/keys/generate/internal': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiGenerateInternalKeyRequest }
        output: PkiGenerateInternalKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/keys/generate/kms': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiGenerateKmsKeyRequest }
        output: PkiGenerateKmsKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/keys/import': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiImportKeyRequest }
        output: PkiImportKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/ocsp': {
      $post: {
        input: { param: { pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/ocsp/:req': {
      $get: {
        input: { param: { req: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/revoke': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiRevokeRequest }
        output: PkiRevokeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/revoke-with-key': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiRevokeWithKeyRequest }
        output: PkiRevokeWithKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/': {
      $get: {
        input: { param: { pki_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:name': {
      $get: {
        input: { param: { name: string; pki_mount_path: string } }
        output: PkiReadRoleResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string; pki_mount_path: string } } & { json: PkiWriteRoleRequest }
        output: PkiWriteRoleResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/account/:kid': {
      $post: {
        input: { param: { kid: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeAccountKidRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/authorization/:auth_id': {
      $post: {
        input: { param: { auth_id: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeAuthorizationAuthIdRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/challenge/:auth_id/:challenge_type': {
      $post: {
        input: {
          param: { auth_id: string; challenge_type: string; role: string; pki_mount_path: string }
        } & { json: PkiWriteRolesRoleAcmeChallengeAuthIdChallengeTypeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/directory': {
      $get: {
        input: { param: { role: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/new-account': {
      $post: {
        input: { param: { role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeNewAccountRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/new-eab': {
      $post: {
        input: { param: { role: string; pki_mount_path: string } }
        output: PkiGenerateEabKeyForRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/new-nonce': {
      $get: {
        input: { param: { role: string; pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/new-order': {
      $post: {
        input: { param: { role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeNewOrderRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/order/:order_id': {
      $post: {
        input: { param: { order_id: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeOrderOrderIdRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/order/:order_id/cert': {
      $post: {
        input: { param: { order_id: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeOrderOrderIdCertRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/order/:order_id/finalize': {
      $post: {
        input: { param: { order_id: string; role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeOrderOrderIdFinalizeRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/orders': {
      $post: {
        input: { param: { role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeOrdersRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/roles/:role/acme/revoke-cert': {
      $post: {
        input: { param: { role: string; pki_mount_path: string } } & {
          json: PkiWriteRolesRoleAcmeRevokeCertRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/root': {
      $delete: {
        input: { param: { pki_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/root/generate/:exported': {
      $post: {
        input: { param: { exported: 'internal' | 'external' | 'kms'; pki_mount_path: string } } & {
          json: PkiGenerateRootRequest
        }
        output: PkiGenerateRootResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/root/replace': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiReplaceRootRequest }
        output: PkiReplaceRootResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/root/rotate/:exported': {
      $post: {
        input: { param: { exported: 'internal' | 'external' | 'kms'; pki_mount_path: string } } & {
          json: PkiRotateRootRequest
        }
        output: PkiRotateRootResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/root/sign-intermediate': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiRootSignIntermediateRequest }
        output: PkiRootSignIntermediateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/root/sign-self-issued': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiRootSignSelfIssuedRequest }
        output: PkiRootSignSelfIssuedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/sign-verbatim': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiSignVerbatimRequest }
        output: PkiSignVerbatimResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/sign-verbatim/:role': {
      $post: {
        input: { param: { role: string; pki_mount_path: string } } & {
          json: PkiSignVerbatimWithRoleRequest
        }
        output: PkiSignVerbatimWithRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/sign/:role': {
      $post: {
        input: { param: { role: string; pki_mount_path: string } } & {
          json: PkiSignWithRoleRequest
        }
        output: PkiSignWithRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/tidy': {
      $post: {
        input: { param: { pki_mount_path: string } } & { json: PkiTidyRequest }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/:pki_mount_path/tidy-cancel': {
      $post: {
        input: { param: { pki_mount_path: string } }
        output: PkiTidyCancelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:pki_mount_path/tidy-status': {
      $get: {
        input: { param: { pki_mount_path: string } }
        output: PkiTidyStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:rabbitmq_mount_path/config/connection': {
      $post: {
        input: { param: { rabbitmq_mount_path: string } } & {
          json: RabbitMqConfigureConnectionRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:rabbitmq_mount_path/config/lease': {
      $get: {
        input: { param: { rabbitmq_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { rabbitmq_mount_path: string } } & { json: RabbitMqConfigureLeaseRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:rabbitmq_mount_path/creds/:name': {
      $get: {
        input: { param: { name: string; rabbitmq_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:rabbitmq_mount_path/roles/': {
      $get: {
        input: { param: { rabbitmq_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:rabbitmq_mount_path/roles/:name': {
      $get: {
        input: { param: { name: string; rabbitmq_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; rabbitmq_mount_path: string } } & {
          json: RabbitMqWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; rabbitmq_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ssh_mount_path/config/ca': {
      $get: {
        input: { param: { ssh_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { ssh_mount_path: string } } & { json: SshConfigureCaRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { ssh_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ssh_mount_path/config/zeroaddress': {
      $get: {
        input: { param: { ssh_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { ssh_mount_path: string } } & { json: SshConfigureZeroAddressRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { ssh_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ssh_mount_path/creds/:role': {
      $post: {
        input: { param: { role: string; ssh_mount_path: string } } & {
          json: SshGenerateCredentialsRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ssh_mount_path/issue/:role': {
      $post: {
        input: { param: { role: string; ssh_mount_path: string } } & {
          json: SshIssueCertificateRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ssh_mount_path/lookup': {
      $post: {
        input: { param: { ssh_mount_path: string } } & { json: SshListRolesByIpRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ssh_mount_path/public_key': {
      $get: {
        input: { param: { ssh_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ssh_mount_path/roles/': {
      $get: {
        input: { param: { ssh_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:ssh_mount_path/roles/:role': {
      $get: {
        input: { param: { role: string; ssh_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { role: string; ssh_mount_path: string } } & { json: SshWriteRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { role: string; ssh_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ssh_mount_path/sign/:role': {
      $post: {
        input: { param: { role: string; ssh_mount_path: string } } & {
          json: SshSignCertificateRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:ssh_mount_path/tidy/dynamic-keys': {
      $delete: {
        input: { param: { ssh_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:ssh_mount_path/verify': {
      $post: {
        input: { param: { ssh_mount_path: string } } & { json: SshVerifyOtpRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:terraform_mount_path/config': {
      $get: {
        input: { param: { terraform_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { terraform_mount_path: string } } & {
          json: TerraformCloudConfigureRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { terraform_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:terraform_mount_path/creds/:name': {
      $get: {
        input: { param: { name: string; terraform_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; terraform_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:terraform_mount_path/role/': {
      $get: {
        input: { param: { terraform_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:terraform_mount_path/role/:name': {
      $get: {
        input: { param: { name: string; terraform_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; terraform_mount_path: string } } & {
          json: TerraformCloudWriteRoleRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; terraform_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:terraform_mount_path/rotate-role/:name': {
      $post: {
        input: { param: { name: string; terraform_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:totp_mount_path/code/:name': {
      $get: {
        input: { param: { name: string; totp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; totp_mount_path: string } } & {
          json: TotpValidateCodeRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:totp_mount_path/keys/': {
      $get: {
        input: { param: { totp_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:totp_mount_path/keys/:name': {
      $get: {
        input: { param: { name: string; totp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; totp_mount_path: string } } & { json: TotpCreateKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; totp_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:transit_mount_path/backup/:name': {
      $get: {
        input: { param: { name: string; transit_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/byok-export/:destination/:source': {
      $get: {
        input: { param: { destination: string; source: string; transit_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/byok-export/:destination/:source/:version': {
      $get: {
        input: {
          param: {
            destination: string
            source: string
            version: string
            transit_mount_path: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/cache-config': {
      $get: {
        input: { param: { transit_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { transit_mount_path: string } } & { json: TransitConfigureCacheRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/config/keys': {
      $get: {
        input: { param: { transit_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { transit_mount_path: string } } & { json: TransitConfigureKeysRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/datakey/:plaintext/:name': {
      $post: {
        input: { param: { name: string; plaintext: string; transit_mount_path: string } } & {
          json: TransitGenerateDataKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/decrypt/:name': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitDecryptRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/encrypt/:name': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitEncryptRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/export/:type/:name': {
      $get: {
        input: { param: { name: string; type: string; transit_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/export/:type/:name/:version': {
      $get: {
        input: {
          param: { name: string; type: string; version: string; transit_mount_path: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/hash': {
      $post: {
        input: { param: { transit_mount_path: string } } & { json: TransitHashRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/hash/:urlalgorithm': {
      $post: {
        input: { param: { urlalgorithm: string; transit_mount_path: string } } & {
          json: TransitHashWithAlgorithmRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/hmac/:name': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitGenerateHmacRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/hmac/:name/:urlalgorithm': {
      $post: {
        input: { param: { name: string; urlalgorithm: string; transit_mount_path: string } } & {
          json: TransitGenerateHmacWithAlgorithmRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/keys/': {
      $get: {
        input: { param: { transit_mount_path: string } } & { query: { list: 'true' } }
        output: StandardListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/keys/:name': {
      $get: {
        input: { param: { name: string; transit_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitCreateKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { name: string; transit_mount_path: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:transit_mount_path/keys/:name/config': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitConfigureKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/keys/:name/csr': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitGenerateCsrForKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/keys/:name/import': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitImportKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/keys/:name/import_version': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitImportKeyVersionRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/keys/:name/rotate': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitRotateKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/keys/:name/set-certificate': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitSetCertificateForKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/keys/:name/trim': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitTrimKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/random': {
      $post: {
        input: { param: { transit_mount_path: string } } & { json: TransitGenerateRandomRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/random/:source': {
      $post: {
        input: { param: { source: string; transit_mount_path: string } } & {
          json: TransitGenerateRandomWithSourceRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/random/:source/:urlbytes': {
      $post: {
        input: { param: { source: string; urlbytes: string; transit_mount_path: string } } & {
          json: TransitGenerateRandomWithSourceAndBytesRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/random/:urlbytes': {
      $post: {
        input: { param: { urlbytes: string; transit_mount_path: string } } & {
          json: TransitGenerateRandomWithBytesRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/restore': {
      $post: {
        input: { param: { transit_mount_path: string } } & { json: TransitRestoreKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/restore/:name': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitRestoreAndRenameKeyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/rewrap/:name': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitRewrapRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/sign/:name': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitSignRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/sign/:name/:urlalgorithm': {
      $post: {
        input: { param: { name: string; urlalgorithm: string; transit_mount_path: string } } & {
          json: TransitSignWithAlgorithmRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/verify/:name': {
      $post: {
        input: { param: { name: string; transit_mount_path: string } } & {
          json: TransitVerifyRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/verify/:name/:urlalgorithm': {
      $post: {
        input: { param: { name: string; urlalgorithm: string; transit_mount_path: string } } & {
          json: TransitVerifyWithAlgorithmRequest
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:transit_mount_path/wrapping_key': {
      $get: {
        input: { param: { transit_mount_path: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
